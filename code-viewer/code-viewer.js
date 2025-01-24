(function() {
  // Função para carregar um script de forma assíncrona
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Função para carregar CSS
  function loadCSS(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  // URLs do Highlight.js e do tema github-dark
  const hljsCSS = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css";
  const hljsJS = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js";

  // Carrega os recursos do Highlight.js antes de definir os custom elements
  Promise.all([loadCSS(hljsCSS), loadScript(hljsJS)]).then(() => {
    console.log("Highlight.js carregado. Inicializando code viewer.");

    // Procura por todas as tags pre com data-url
    function initializeCodeBlocks() {
      const codeBlocks = document.querySelectorAll('pre[data-url]');
      codeBlocks.forEach(async (pre) => {
        const url = pre.getAttribute('data-url');
        const lang = pre.getAttribute('data-lang') || 'javascript';
        
        if (!url) {
          renderError(pre, "URL não fornecida no atributo data-url.");
          return;
        }

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Erro ao buscar o arquivo: ${response.status} ${response.statusText}`);
          }
          const content = await response.text();
          await renderContent(pre, content, lang);
        } catch (error) {
          console.error(error);
          renderError(pre, error.message);
        }
      });
    }

    function escapeHTML(str) {
      return str.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
    }

    function renderError(pre, message) {
      pre.innerHTML = `
        <div style="color: red; font-family: Arial, sans-serif; padding: 1em; border: 1px solid red; border-radius: 5px; background-color: #ffe6e6;">
          Erro: ${message}
        </div>
      `;
    }

    async function renderContent(pre, content, lang) {
      const escapedContent = escapeHTML(content);
      const style = `
        pre {
          margin: 0; 
          padding: 1em;
          overflow: auto; 
          border: 1px solid #ccc; 
          border-radius: 5px;
          background: #0d1117;
          color: #c9d1d9;
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          position: relative;
        }
        .copy-button {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 5px 10px;
          font-size: 12px;
          background-color: #6c757d;
          color: white;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }
        .copy-button:hover {
          background-color: #5a6268;
        }
      `;

      // Adiciona o estilo ao head se ainda não existir
      if (!document.querySelector('#code-viewer-style')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'code-viewer-style';
        styleElement.textContent = style;
        document.head.appendChild(styleElement);
      }

      // Adiciona o link do highlight.js se ainda não existir
      if (!document.querySelector('#hljs-style')) {
        const linkElement = document.createElement('link');
        linkElement.id = 'hljs-style';
        linkElement.rel = 'stylesheet';
        linkElement.href = hljsCSS;
        document.head.appendChild(linkElement);
      }

      // Cria o botão de copiar
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.textContent = 'Copiar código';

      // Cria o elemento code com o conteúdo
      const code = document.createElement('code');
      code.className = `language-${lang}`;
      code.textContent = content;

      // Limpa o pre e adiciona os novos elementos
      pre.innerHTML = '';
      pre.appendChild(copyButton);
      pre.appendChild(code);

      // Aplica highlight
      if (window.hljs && typeof hljs.highlightElement === 'function') {
        hljs.highlightElement(code);
      }

      // Adiciona evento de clique no botão
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(content).then(() => {
          const originalText = copyButton.textContent;
          copyButton.textContent = 'Copiado!';
          copyButton.disabled = true;
          setTimeout(() => {
            copyButton.textContent = originalText;
            copyButton.disabled = false;
          }, 2000);
        }).catch(err => {
          console.error('Falha ao copiar o código:', err);
          const originalText = copyButton.textContent;
          copyButton.textContent = 'Falha ao copiar';
          copyButton.disabled = true;
          setTimeout(() => {
            copyButton.textContent = originalText;
            copyButton.disabled = false;
          }, 2000);
        });
      });
    }

    // Inicializa os blocos de código quando o documento estiver pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeCodeBlocks);
    } else {
      initializeCodeBlocks();
    }

    console.log("Code viewer inicializado");
  }).catch(err => {
    console.error('Erro ao carregar Highlight.js:', err);
  });
})();
