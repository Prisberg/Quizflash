export const mockedData = [
  {
    question: "Explain the concept of CSS Grid Layout and provide an example of how it can be used.",
    answer: "CSS Grid Layout is a powerful two-dimensional layout system that allows you to create complex grid-based layouts in CSS. It enables precise control over rows and columns, making it ideal for designing responsive and flexible grid structures. You define a grid container and specify how many rows and columns it should have. For example, you can create a simple grid layout like this:\n\n```css\n.grid-container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: auto 200px;\n  gap: 20px;\n}\n```\nThis code creates a grid container with three columns, where the middle column is twice as wide as the others, and two rows, with the second row having a fixed height of 200px. The 'gap' property adds spacing between grid items."
  },
  {
    question: "What are CSS variables (custom properties), and how can they be used to improve code maintainability and flexibility?",
    answer: "CSS variables, also known as custom properties, are user-defined variables in CSS that can hold values. They are defined using the '--' prefix, like '--main-color: #3498db;' and can be used throughout your CSS code. CSS variables are useful for improving code maintainability and flexibility because they allow you to store and reuse values in a centralized way. If you need to change a color or value used across your stylesheets, you can update the variable's value, and it will automatically update all instances where the variable is used. This makes it easier to maintain and update stylesheets, especially in large projects."
  },
  {
    question: "Explain the concept of 'BEM' (Block Element Modifier) in CSS naming conventions and why it's important.",
    answer: "BEM is a popular CSS naming convention that stands for Block Element Modifier. It is used to create structured and maintainable CSS class names. In BEM, a 'block' represents a standalone component, an 'element' is a part of that component, and a 'modifier' is used to alter the appearance or behavior of a block or element. For example, you might have a button component with the class 'button,' and its modifier class for a primary style could be 'button--primary.' BEM is important because it helps create a clear and consistent naming structure, making it easier to understand and maintain your CSS code. It also reduces the chances of naming conflicts and unintended side effects."
  },
  {
    question: "What is the 'will-change' property in CSS, and how can it be used to optimize animations and transitions?",
    answer: "The 'will-change' property in CSS is used to inform the browser that a particular element is expected to change in the future, allowing the browser to optimize rendering and improve performance. It is often used in combination with animations and transitions. By specifying which properties are expected to change, you can help the browser allocate resources and prepare for smooth animations. For example:\n\n```css\n.element {\n  will-change: transform, opacity;\n}\n```\nThis code tells the browser that the 'transform' and 'opacity' properties of the element are expected to change, so it can optimize rendering for those changes. However, 'will-change' should be used sparingly, only on elements that actually need it, to avoid unnecessary performance overhead."
  },
  {
    question: "Explain the concept of 'Critical CSS' and how it can be used to improve web page loading performance.",
    answer: "Critical CSS is a technique used to optimize web page loading performance by delivering only the necessary CSS required for the initial rendering of the page. Instead of loading the entire stylesheet, critical CSS extracts and includes only the CSS rules needed to render the above-the-fold content—the part of the page visible in the initial viewport without scrolling. By delivering critical CSS inline or as a separate, smaller stylesheet, you can significantly reduce render-blocking resources, which speeds up the page load time. Critical CSS is typically generated manually or with the help of build tools to identify and extract the critical styles for a specific page or view."
  }
]
