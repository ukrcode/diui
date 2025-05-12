function Card() {
  return (
    <article className="di-card">
      <div className="di-card-inner">
        <aside>
          <span role="img" className="di-icon di-icon-file di-icon-24"></span>
        </aside>

        <div className="di-card-content">
          <header>
            <h4 className="di-h4 di-m-0">Card Title</h4>
          </header>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fringilla, nunc ut facilisis tincidunt, nisi erat venenatis ligula,
            at convallis enim nunc nec nisi.
          </p>
        </div>
      </div>
    </article>
  );
}

export default function CardExample() {
  return (
    <div className="di-flex di-flex-col di-gap-2">
      <Card />
    </div>
  );
}
