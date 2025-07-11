export default function TabsExample() {
  return (
    <section className="di-flex di-flex-wrap di-flex-column di-gap-2">
      <div className="di-tabs">
        <ul className="di-tab-list" role="tablist">
          <li>
            <button
              className="di-tab di-tab-active"
              id="tab-1"
              role="tab"
              aria-controls="panel-1"
              aria-selected="true"
            >
              Заголовок 1
            </button>
          </li>
          <li>
            <button
              className="di-tab"
              id="tab-2"
              role="tab"
              aria-controls="panel-2"
              aria-selected="false"
            >
              Заголовок 2
            </button>
          </li>
        </ul>

        <div
          className="di-tab-panel"
          id="panel-1"
          role="tabpanel"
          aria-labelledby="tab-1"
        >
          Content for Tab 1
        </div>

        <div
          className="di-tab-panel"
          id="panel-2"
          role="tabpanel"
          aria-labelledby="tab-2"
          hidden
        >
          Content for Tab 2
        </div>
      </div>

      <div className="di-tabs">
        <ul className="di-tab-list di-gap-2" role="tablist">
          <li>
            <button
              className="di-tab-button di-tab-active"
              id="tab-1"
              role="tab"
              aria-controls="panel-1"
              aria-selected="true"
            >
              Заголовок 1
            </button>
          </li>
          <li>
            <button
              className="di-tab-button"
              id="tab-2"
              role="tab"
              aria-controls="panel-2"
              aria-selected="false"
            >
              Заголовок 2
            </button>
          </li>
        </ul>

        <div
          className="di-tab-panel"
          id="panel-1"
          role="tabpanel"
          aria-labelledby="tab-1"
        >
          Content for Button Tab 1
        </div>

        <div
          className="di-tab-panel"
          id="panel-2"
          role="tabpanel"
          aria-labelledby="tab-2"
          hidden
        >
          Content for Button Tab 2
        </div>
      </div>
    </section>
  )
}
