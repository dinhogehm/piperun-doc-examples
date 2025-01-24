# piperun-doc-examples

## Code Viewer Component

Este é um componente Web personalizado para exibição de código com syntax highlighting usando o Highlight.js.

### Características

- Syntax highlighting automático usando Highlight.js
- Suporte a múltiplas linguagens de programação
- Botão de copiar código
- Tema github-dark por padrão
- Duas formas de uso: tag `code-viewer` ou tag `code`

### Instalação

1. Inclua o script no seu HTML:
```html
<script src="code-viewer/code-viewer.js"></script>
```

### Formas de Uso

#### 1. Usando o componente `code-viewer`

```html
<code-viewer 
    src-format="URL_DO_CODIGO" 
    lang="javascript">
</code-viewer>
```

Exemplo:
```html
<code-viewer 
    src-format="https://raw.githubusercontent.com/dinhogehm/piperun-doc-examples/refs/heads/main/172-bloco-4-wordpress-wpcf7Elm.js" 
    lang="javascript">
</code-viewer>
```

#### 2. Usando a tag `code`

```html
<code lang="javascript">https://raw.githubusercontent.com/dinhogehm/piperun-doc-examples/refs/heads/main/172-bloco-4-wordpress-wpcf7Elm.js</code>
```

Exemplo:
```html
<code lang="javascript">https://raw.githubusercontent.com/dinhogehm/piperun-doc-examples/refs/heads/main/172-bloco-4-wordpress-wpcf7Elm.js</code>
```

### Atributos

#### Para ambas as tags:
- `lang`: Linguagem do código (opcional, padrão: "javascript")
  - Exemplos: "javascript", "python", "java", "php", etc.

#### Específico para `code-viewer`:
- `src-format`: URL do código fonte a ser exibido

### Funcionalidades

1. **Syntax Highlighting**: O código é automaticamente formatado de acordo com a linguagem especificada
2. **Botão de Copiar**: Um botão no canto superior direito permite copiar o código para a área de transferência
3. **Tratamento de Erros**: Mensagens de erro são exibidas quando:
   - URL não é fornecida
   - Erro ao buscar o arquivo
   - Falha ao copiar o código

### Exemplo Completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Code Viewer Example</title>
    <script src="code-viewer/code-viewer.js"></script>
</head>
<body>
    <!-- Usando code-viewer -->
    <code-viewer 
        src-format="https://raw.githubusercontent.com/dinhogehm/piperun-doc-examples/refs/heads/main/172-bloco-4-wordpress-wpcf7Elm.js" 
        lang="javascript">
    </code-viewer>

    <!-- Usando code -->
    <code lang="javascript">https://raw.githubusercontent.com/dinhogehm/piperun-doc-examples/refs/heads/main/172-bloco-4-wordpress-wpcf7Elm.js</code>
</body>
</html>
```

### Dependências

O componente carrega automaticamente:
- Highlight.js (v11.8.0)
- Tema github-dark do Highlight.js

### Compatibilidade

- Navegadores modernos que suportam Web Components
- Shadow DOM
- Custom Elements
- Fetch API

### Limitações

- Requer conexão com internet para carregar o Highlight.js e o tema
- A URL do código deve permitir CORS para funcionar corretamente
