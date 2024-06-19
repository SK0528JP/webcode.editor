document.addEventListener('DOMContentLoaded', () => {
    const htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-editor'), {
        mode: 'xml',
        lineNumbers: true,
        theme: 'default'
    });

    const cssEditor = CodeMirror.fromTextArea(document.getElementById('css-editor'), {
        mode: 'css',
        lineNumbers: true,
        theme: 'default'
    });

    const jsEditor = CodeMirror.fromTextArea(document.getElementById('js-editor'), {
        mode: 'javascript',
        lineNumbers: true,
        theme: 'default'
    });

    function updatePreview() {
        const htmlContent = htmlEditor.getValue();
        const cssContent = `<style>${cssEditor.getValue()}</style>`;
        const jsContent = `<script>${jsEditor.getValue()}<\/script>`;
        const previewFrame = document.getElementById('preview');
        const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDocument.open();
        previewDocument.write(htmlContent + cssContent + jsContent);
        previewDocument.close();
    }

    htmlEditor.on('change', updatePreview);
    cssEditor.on('change', updatePreview);
    jsEditor.on('change', updatePreview);

    // 初期表示
    updatePreview();
});
