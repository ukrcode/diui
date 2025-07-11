import { components as originalComponents } from '../../mdx-components'

export const docsComponents = {
  ...originalComponents,
  h1: ({ children, ...restProps }) => (
    <h1 className="di-h1 di-mt-2" {...restProps}>
      {children}
    </h1>
  ),
  h2: ({ children, ...restProps }) => (
    <h2 className="di-h2 di-mt-2" {...restProps}>
      {children}
    </h2>
  ),
}
