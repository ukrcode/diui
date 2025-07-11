export const components = {
  h1: ({ children, ...restProps }) => (
    <h1 className="di-h1" {...restProps}>
      {children}
    </h1>
  ),
  h2: ({ children, ...restProps }) => (
    <h2 className="di-h2" {...restProps}>
      {children}
    </h2>
  ),
  h3: ({ children, ...restProps }) => (
    <h3 className="di-h3" {...restProps}>
      {children}
    </h3>
  ),
  h4: ({ children, ...restProps }) => (
    <h4 className="di-h4" {...restProps}>
      {children}
    </h4>
  ),
  h5: ({ children, ...restProps }) => (
    <h5 className="di-h5" {...restProps}>
      {children}
    </h5>
  ),
  h6: ({ children, ...restProps }) => (
    <h6 className="di-h6" {...restProps}>
      {children}
    </h6>
  ),
  code: ({ children, ...restProps }) => (
    <code className="di-code" {...restProps}>
      {children}
    </code>
  ),
  p: ({ children, ...restProps }) => (
    <p className="di-paragraph" {...restProps}>
      {children}
    </p>
  ),
  a: ({ children, ...restProps }) => {
    return (
      <a className="di-link-underline" {...restProps}>
        {children}
      </a>
    )
  },
}
