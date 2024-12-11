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

  // Carrega os recursos do Highlight.js antes de definir o custom element
  Promise.all([loadCSS(hljsCSS), loadScript(hljsJS)]).then(() => {
    console.log("Highlight.js carregado. Definindo CodeViewer custom element.");

    class CodeViewer extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Anexa o Shadow DOM corretamente
        console.log("Shadow DOM anexado.");
      }

      async connectedCallback() {
        const rawUrl = this.getAttribute('src-format') || '';
        const lang = this.getAttribute('lang') || 'javascript';
        console.log(`ConnectedCallback: src-format=${rawUrl}, lang=${lang}`);

        if (!rawUrl) {
          this.renderError("Atributo 'src-format' não fornecido.");
          return;
        }

        try {
          const response = await fetch(rawUrl);
          if (!response.ok) {
            throw new Error(`Erro ao buscar o arquivo: ${response.status} ${response.statusText}`);
          }
          const content = await response.text();
          const escapedContent = this.escapeHTML(content);
          console.log("Conteúdo do arquivo obtido e escapado.");

          const style = `
            pre {
              margin: 0; 
              padding: 1em;
              overflow: auto; 
              border: 1px solid #ccc; 
              border-radius: 5px;
              background: #0d1117; /* fundo escuro do tema github-dark */
              color: #c9d1d9;
              font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
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
            .container {
              position: relative;
            }
          `;

          // Inserir o código, botão de copiar e o link CSS no Shadow DOM usando shadowRoot
          this.shadowRoot.innerHTML = `
            <style>
              ${style}
            </style>
            <link rel="stylesheet" href="${hljsCSS}">
            <div class="container">
              <button class="copy-button">Copiar código</button>
              <pre><code class="language-${lang}">${escapedContent}</code></pre>
            </div>
          `;
          console.log("Conteúdo inserido no Shadow DOM.");

          // Destacar o código usando Highlight.js
          const codeBlock = this.shadowRoot.querySelector('code');
          if (window.hljs && typeof hljs.highlightElement === 'function') {
            hljs.highlightElement(codeBlock);
            console.log("Highlight.js aplicado.");
          } else {
            console.warn('Highlight.js não carregado corretamente.');
          }

          // Adicionar evento para o botão de copiar código
          const copyButton = this.shadowRoot.querySelector('.copy-button');
          copyButton.addEventListener('click', () => {
            this.copyCodeToClipboard();
          });
          console.log("Evento de copiar código adicionado.");
        } catch (error) {
          console.error(error);
          this.renderError(error.message);
        }
      }

      // Função para escapar caracteres HTML
      escapeHTML(str) {
        return str.replace(/&/g, "&amp;")
                  .replace(/</g, "<")
                  .replace(/>/g, ">")
                  .replace(/"/g, '"')
                  .replace(/'/g, "&#039;");
      }

      // Função para renderizar mensagens de erro
      renderError(message) {
        if (this.shadowRoot) {
          this.shadowRoot.innerHTML = `
            <style>
              .error {
                color: red;
                font-family: Arial, sans-serif;
                padding: 1em;
                border: 1px solid red;
                border-radius: 5px;
                background-color: #ffe6e6;
              }
            </style>
            <div class="error">Erro: ${message}</div>
          `;
          console.log("Mensagem de erro renderizada no Shadow DOM.");
        } else {
          console.error("Shadow DOM não está disponível para renderizar o erro.");
        }
      }

      // Função para copiar o código para a área de transferência
      copyCodeToClipboard() {
        const code = this.shadowRoot.querySelector('code').innerText;
        navigator.clipboard.writeText(code).then(() => {
          this.showCopySuccess();
        }).catch(err => {
          console.error('Falha ao copiar o código:', err);
          this.showCopyFailure();
        });
      }

      // Função para mostrar confirmação de cópia
      showCopySuccess() {
        const button = this.shadowRoot.querySelector('.copy-button');
        const originalText = button.innerText;
        button.innerText = 'Copiado!';
        button.disabled = true;
        setTimeout(() => {
          button.innerText = originalText;
          button.disabled = false;
        }, 2000);
        console.log("Código copiado com sucesso.");
      }

      // Função para mostrar falha na cópia
      showCopyFailure() {
        const button = this.shadowRoot.querySelector('.copy-button');
        const originalText = button.innerText;
        button.innerText = 'Falha ao copiar';
        button.disabled = true;
        setTimeout(() => {
          button.innerText = originalText;
          button.disabled = false;
        }, 2000);
        console.log("Falha ao copiar o código.");
      }
    }

    customElements.define('code-viewer', CodeViewer);
    console.log("<code-viewer> custom element definido.");
  }).catch(err => {
    console.error('Erro ao carregar recursos do Highlight.js:', err);
  });
})();
