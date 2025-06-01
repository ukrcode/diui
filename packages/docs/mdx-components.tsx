import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <h1 className="di-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="di-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="di-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="di-h4">{children}</h4>,
    h5: ({ children }) => <h5 className="di-h5">{children}</h5>,
    h6: ({ children }) => <h6 className="di-h6">{children}</h6>,
    code: ({ children }) => <code className="di-code">{children}</code>,
    a: ({ children, ...restProps }) => {
      return (
        <a className="di-link di-link-underline" {...restProps}>
          {children}
        </a>
      );
    },
  };
}
