function IconAllSizesExample({ iconName }: { iconName: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
      <span
        className={`di-icon di-icon-${iconName} di-icon-64`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-icon-56`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-icon-48`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-icon-40`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-icon-32`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName} di-icon-24`}
        role="img"
        aria-label="File Icon"
      ></span>
      <span
        className={`di-icon di-icon-${iconName}`}
        role="img"
        aria-label="File Icon"
      ></span>
    </div>
  );
}

export default function IconExample() {
  return (
    <>
      <IconAllSizesExample iconName="file" />
      <IconAllSizesExample iconName="download" />
      <IconAllSizesExample iconName="magnify-glass" />
      <IconAllSizesExample iconName="minus" />
      <IconAllSizesExample iconName="plus" />
    </>
  );
}
