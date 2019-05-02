export const hoverBackground = ` 
  position: relative;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ddd;
    opacity: 0;
    z-index: -1;
    transition: opacity 300ms ease;
  }

  :hover::after {
    opacity: 1;
  }`;

  export const sectionPadding = `
    padding: 10px 0;
  `
