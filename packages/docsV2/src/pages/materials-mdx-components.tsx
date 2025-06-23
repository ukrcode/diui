import { components as originalComponents } from "../mdx-components";

export const materialsComponents = {
  ...originalComponents,
  a: ({ children, ...restProps }) => {
    return (
      <a className="di-link-underline" {...restProps} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
};
