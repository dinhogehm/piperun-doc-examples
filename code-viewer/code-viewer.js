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
    console.log("Highlight.js carregado. Definindo custom elements.");

    // Classe base para compartilhar funcionalidades comuns
    class CodeBase extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }

      // Métodos comuns aqui...
      escapeHTML(str) {
        return str.replace(/&/g, "&amp;")
                  .replace(/</g, "<")
                  .replace(/>/g, ">")
                  .replace(/"/g, '"')
                  .replace(/'/g, "&#039;");
      }

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
        }
      }

      copyCodeToClipboard() {
        const code = this.shadowRoot.querySelector('code').innerText;
        navigator.clipboard.writeText(code).then(() => {
          this.showCopySuccess();
        }).catch(err => {
          console.error('Falha ao copiar o código:', err);
          this.showCopyFailure();
        });
      }

      showCopySuccess() {
        const button = this.shadowRoot.querySelector('.copy-button');
        const originalText = button.innerText;
        button.innerText = 'Copiado!';
        button.disabled = true;
        setTimeout(() => {
          button.innerText = originalText;
          button.disabled = false;
        }, 2000);
      }

      showCopyFailure() {
        const button = this.shadowRoot.querySelector('.copy-button');
        const originalText = button.innerText;
        button.innerText = 'Falha ao copiar';
        button.disabled = true;
        setTimeout(() => {
          button.innerText = originalText;
          button.disabled = false;
        }, 2000);
      }

      async renderContent(content, lang) {
        const escapedContent = this.escapeHTML(content);
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

        this.shadowRoot.innerHTML = `
          <style>${style}</style>
          <link rel="stylesheet" href="${hljsCSS}">
          <div class="container">
            <button class="copy-button">Copiar código</button>
            <pre><code class="language-${lang}">${escapedContent}</code></pre>
          </div>
        `;

        const codeBlock = this.shadowRoot.querySelector('code');
        if (window.hljs && typeof hljs.highlightElement === 'function') {
          hljs.highlightElement(codeBlock);
        }

        const copyButton = this.shadowRoot.querySelector('.copy-button');
        copyButton.addEventListener('click', () => {
          this.copyCodeToClipboard();
        });
      }
    }

    // Classe para o elemento code-viewer
    class CodeViewer extends CodeBase {
      async connectedCallback() {
        const rawUrl = this.getAttribute('src-format') || '';
        const lang = this.getAttribute('lang') || 'javascript';

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
          await this.renderContent(content, lang);
        } catch (error) {
          console.error(error);
          this.renderError(error.message);
        }
      }
    }

    // Classe para estender o elemento code nativo
    class CodeElement extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }

      async connectedCallback() {
        const url = this.textContent.trim();
        const lang = this.getAttribute('lang') || 'javascript';

        if (!url) {
          this.renderError("URL não fornecida no conteúdo da tag.");
          return;
        }

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Erro ao buscar o arquivo: ${response.status} ${response.statusText}`);
          }
          const content = await response.text();
          await this.renderContent(content, lang);
        } catch (error) {
          console.error(error);
          this.renderError(error.message);
        }
      }

      escapeHTML(str) {
        return str.replace(/&/g, "&amp;")
                  .replace(/</g, "<")
                  .replace(/>/g, ">")
                  .replace(/"/g, '"')
                  .replace(/'/g, "&#039;");
      }

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
        }
      }

      async renderContent(content, lang) {
        const escapedContent = this.escapeHTML(content);
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

        this.shadowRoot.innerHTML = `
          <style>${style}</style>
          <link rel="stylesheet" href="${hljsCSS}">
          <div class="container">
            <button class="copy-button">Copiar código</button>
            <pre><code class="language-${lang}">${escapedContent}</code></pre>
          </div>
        `;

        const codeBlock = this.shadowRoot.querySelector('code');
        if (window.hljs && typeof hljs.highlightElement === 'function') {
          hljs.highlightElement(codeBlock);
        }

        const copyButton = this.shadowRoot.querySelector('.copy-button');
        copyButton.addEventListener('click', () => {
          const code = this.shadowRoot.querySelector('code').innerText;
          navigator.clipboard.writeText(code).then(() => {
            const button = this.shadowRoot.querySelector('.copy-button');
            const originalText = button.innerText;
            button.innerText = 'Copiado!';
            button.disabled = true;
            setTimeout(() => {
              button.innerText = originalText;
              button.disabled = false;
            }, 2000);
          }).catch(err => {
            console.error('Falha ao copiar o código:', err);
            const button = this.shadowRoot.querySelector('.copy-button');
            const originalText = button.innerText;
            button.innerText = 'Falha ao copiar';
            button.disabled = true;
            setTimeout(() => {
              button.innerText = originalText;
              button.disabled = false;
            }, 2000);
          });
        });
      }
    }

    customElements.define('code-viewer', CodeViewer);
    customElements.define('enhanced-code', CodeElement);
    console.log("Custom elements definidos: <code-viewer> e <enhanced-code>");
  }).catch(err => {
    console.error('Erro ao carregar Highlight.js:', err);
  });
})();
