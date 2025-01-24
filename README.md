# Code Viewer

Um componente simples e leve para exibir código com syntax highlighting.

## Para refletir alterações no code-viewer.js, atualize o script no painel da Elev.io (https://app.elev.io/kb/customize)

## Características

- Suporte a múltiplas linguagens de programação
- Botão de copiar código
- Tema github-dark por padrão
- Duas formas de uso:
  1. Tag HTML nativa `<pre>` (recomendado para maior compatibilidade)
  2. Web Component `<code-viewer>` (para projetos que suportam)

### Instalação

1. Adicione o arquivo `code-viewer.js` ao seu projeto
2. Importe o script na sua página HTML:

```html
<script src="code-viewer.js"></script>
```

### Uso

#### 1. Usando a tag HTML nativa (Recomendado)

Use a tag `pre` com os atributos `data-url` e `data-lang`:

```html
<pre data-url="URL_DO_CODIGO" data-lang="javascript"></pre>
```

Exemplo:
```html
<pre data-url="https://raw.githubusercontent.com/dinhogehm/piperun-doc-examples/refs/heads/main/172-bloco-4-wordpress-wpcf7Elm.js" data-lang="javascript"></pre>
```

#### 2. Usando o Web Component

Use a tag `code-viewer` com os atributos `src-format` e `lang`:

```html
<code-viewer src-format="URL_DO_CODIGO" lang="javascript"></code-viewer>
```

Exemplo:
```html
<code-viewer src-format="https://raw.githubusercontent.com/dinhogehm/piperun-doc-examples/refs/heads/main/172-bloco-4-wordpress-wpcf7Elm.js" lang="javascript"></code-viewer>
```

### Atributos

#### Para a tag `pre`:
- `data-url`: URL do código a ser carregado
- `data-lang`: Linguagem do código (opcional, padrão: javascript)

#### Para a tag `code-viewer`:
- `src-format`: URL do código a ser carregado
- `lang`: Linguagem do código (opcional, padrão: javascript)

### Funcionalidades

1. **Syntax Highlighting**: O código é automaticamente formatado de acordo com a linguagem especificada
2. **Botão de Copiar**: Um botão é adicionado no canto superior direito para copiar o código
3. **Tema Dark**: O código é exibido com um tema dark por padrão

### Exemplo completo

```html
<!DOCTYPE html>
<html>
<head>
    <title>Code Viewer Example</title>
    <script src="code-viewer.js"></script>
</head>
<body>
    <!-- Usando tag HTML nativa (recomendado) -->
    <pre data-url="https://raw.githubusercontent.com/dinhogehm/piperun-doc-examples/refs/heads/main/172-bloco-4-wordpress-wpcf7Elm.js" data-lang="javascript"></pre>

    <!-- Usando Web Component -->
    <code-viewer src-format="https://raw.githubusercontent.com/dinhogehm/piperun-doc-examples/refs/heads/main/172-bloco-4-wordpress-wpcf7Elm.js" lang="javascript"></code-viewer>
</body>
</html>
```

### Suporte a Linguagens

O componente suporta todas as linguagens disponíveis no highlight.js, incluindo:
- JavaScript
- HTML
- CSS
- PHP
- Python
- Ruby
- Java
- C++
- E muitas outras...

### Tratamento de Erros

O componente exibe mensagens de erro em casos como:
- URL não fornecida
- Erro ao carregar o código
- Erro ao copiar o código

### Compatibilidade

- Tag `pre`: Funciona em todos os navegadores e sites
- Tag `code-viewer`: Requer suporte a Web Components
- Não requer nenhuma biblioteca externa (highlight.js é carregado automaticamente)

### Limitações

- A URL do código deve permitir acesso via CORS
- O código é carregado via AJAX, então a página deve estar em um servidor
- A tag `code-viewer` pode não funcionar em sites que removem tags não-HTML

### Contribuindo

Sinta-se à vontade para contribuir com melhorias através de pull requests.
