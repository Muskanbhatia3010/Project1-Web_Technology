document.addEventListener("DOMContentLoaded", () => {
  const oldEditor = document.getElementById("css-editor-old");
  const motionPathEditor = document.getElementById("css-editor-motion-path");
  const toggleNestingButton = document.getElementById("toggle-nesting");
  const cssCodeBlock = document.getElementById("css-code-block");
  const scrollEditor = document.getElementById("css-editor-scroll");
  const animationRangeEditor = document.getElementById("css-editor-animation-range");

  let isShowingAfter = false; 
  const beforeCSS = `
.card {
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

.card h2 {
  font-size: 1.2rem;
  color: #000;
}

.card p {
  font-size: 1rem;
  color: #333;
}

.card button {
  padding: 10px;
  background-color: #ddd;
  color: #000;
  border: 1px solid #aaa;
  border-radius: 4px;
}

.card button:hover {
  background-color: #bbb;
}
`;

  const afterCSS = `
.card {
  padding: 20px;
  border: 1px solid #333;
  background-color: #eef;

  h2 {
    font-size: 1.4rem;
    color: #007bff;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
}
`;

    // Function to dynamically update the CSS styles
    function applyCSS(cssContent) {
        let styleTag = document.getElementById("dynamic-styles-nesting");
        if (!styleTag) {
          styleTag = document.createElement("style");
          styleTag.id = "dynamic-styles-nesting";
          document.head.appendChild(styleTag);
        }
        styleTag.textContent = cssContent;
      }
    
      // Toggle "Before" and "After" CSS
      toggleNestingButton.addEventListener("click", () => {
        isShowingAfter = !isShowingAfter;
    
        // Update button text
        toggleNestingButton.textContent = isShowingAfter
          ? "Show Before CSS"
          : "Show After CSS";
    
        // Update the displayed CSS code and apply the styles
        const currentCSS = isShowingAfter ? afterCSS : beforeCSS;
        cssCodeBlock.textContent = currentCSS;
        applyCSS(currentCSS);
      });
    
      // Set initial CSS in the code block and apply the initial styles
      cssCodeBlock.textContent = beforeCSS;
      applyCSS(beforeCSS);
    
      // Function to handle CSS injection for editors
      function updateStyles(editor, styleId) {
        let styleTag = document.getElementById(styleId);
    
        // If the style tag doesn't exist, create it
        if (!styleTag) {
          styleTag = document.createElement("style");
          styleTag.id = styleId;
          document.head.appendChild(styleTag);
        }
    
        // Apply the CSS typed in the editor to the style tag
        styleTag.textContent = editor.value;
      }
    
      // Event listener for the old animation editor
      oldEditor?.addEventListener("input", () => {
        updateStyles(oldEditor, "dynamic-styles-old");
      });
    
      // Event listener for the motion path animation editor
      motionPathEditor?.addEventListener("input", () => {
        updateStyles(motionPathEditor, "dynamic-styles-motion-path");
      });
      scrollEditor?.addEventListener("input", () => {
        updateStyles(scrollEditor, "dynamic-styles-scroll");
      });
      animationRangeEditor?.addEventListener("input", () => {
        updateStyles(animationRangeEditor, "dynamic-styles-animation-range");
      });
    });
    

// Hamburger menu

const toggleMenuButton = document.getElementById("toggle-menu");
const navigationMenu = document.getElementById("navigation");

toggleMenuButton.addEventListener("click", () => {
  navigationMenu.classList.toggle("menu-open");
});
