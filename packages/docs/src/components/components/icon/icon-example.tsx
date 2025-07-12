function IconAllSizesExample({ iconName }: { iconName: string }) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
    >
      <span
        className={`di-icon di-icon-${iconName} di-icon-64`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-icon-56 di-bg-gray`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-icon-48 di-bg-blue`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-icon-40 di-bg-green`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-icon-32 di-bg-yellow`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-icon-24 di-bg-cyan`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-bg-red`}
        role="img"
        aria-label="File Icon"
      ></span>
    </div>
  )
}

export default function IconExample() {
  return (
    <>
      <IconAllSizesExample iconName="file" />
      <IconAllSizesExample iconName="download" />
      <IconAllSizesExample iconName="magnify-glass" />
      <IconAllSizesExample iconName="minus" />
      <IconAllSizesExample iconName="plus" />
      <IconAllSizesExample iconName="user" />
      <IconAllSizesExample iconName="chevron-right" />
      <IconAllSizesExample iconName="chevron-left" />
      <IconAllSizesExample iconName="arrow-undo" />
      <IconAllSizesExample iconName="arrow-right" />
    </>
  )
}
