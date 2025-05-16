function Card() {
  return (
    <article className="di-card">
      <div className="di-card-inner">
        <aside>
          <span role="img" className="di-icon di-icon-file di-icon-24"></span>
        </aside>

        <div className="di-card-content">
          <header className="di-card-header">
            <div className="di-card-title">
              <h4 className="di-h4 di-m-0">Заголовок</h4>
              <h6 className="di-h6 di-m-0">Підзаголовок</h6>
            </div>
          </header>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fringilla, nunc ut facilisis tincidunt, nisi erat venenatis ligula,
            at convallis enim nunc nec nisi.
          </p>
        </div>

        <div className="di-card-controls">
          <button className="di-btn di-btn-icon" aria-label="download">
            <span className="di-icon di-icon-download di-icon-24"></span>
          </button>
        </div>
      </div>
    </article>
  );
}

function InfoCard({ className }: { className?: string }) {
  return (
    <article className={`di-info-card ${className}`}>
      <h4 className="di-h4 di-my-4">Заголовок</h4>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        fringilla, nunc ut facilisis tincidunt, nisi erat venenatis ligula, at
        convallis enim nunc nec nisi.
      </p>
    </article>
  );
}

export default function CardExample() {
  return (
    <div>
      <Card />

      <div className="di-flex di-gap-4 di-mt-2">
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
      </div>

    </div>
  );
}
