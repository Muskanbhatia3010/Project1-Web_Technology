document.addEventListener('DOMContentLoaded', () => {
    const oldEditor = document.getElementById('css-editor-old');
    const motionPathEditor = document.getElementById('css-editor-motion-path');
    // Function to handle CSS injection for each editor
    function updateStyles(editor, styleId) {
        let styleTag = document.getElementById(styleId);

        // If the style tag doesn't exist, create it
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = styleId;
            document.head.appendChild(styleTag);
        }

        // Apply the CSS typed in the editor to the style tag
        styleTag.textContent = editor.value;
    }

    // Event listener for the old animation editor
    oldEditor.addEventListener('input', () => {
        updateStyles(oldEditor, 'dynamic-styles-old');
    });

    // Event listener for the motion path animation editor
    motionPathEditor.addEventListener('input', () => {
        updateStyles(motionPathEditor, 'dynamic-styles-motion-path');
    });
});
