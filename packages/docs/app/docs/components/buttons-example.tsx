import "./buttons-example.css";

export default function ButtonsExample() {
  return (
    <>
      <section>
        <h3>Regular Buttons</h3>

        <div className="buttons-example-row ">
          <button className="di-btn">Regular button</button>
          <button className="di-btn di-btn-primary">Primary</button>
          <button className="di-btn di-btn-primary" disabled>
            Primary Disabled
          </button>
          <button className="di-btn di-btn-outline">Outline</button>
          <button className="di-btn di-btn-outline" disabled>
            Outline Disabled
          </button>

          <button className="di-btn di-btn-text">
            Text
          </button>

          <button disabled className="di-btn di-btn-text">
            Text Disabled
          </button>
        </div>
      </section>

      <section>
        <h3>Small Buttons</h3>

        <div className="buttons-example-row ">
          <button className="di-btn di-btn-sm">Regular button small</button>
          <button className="di-btn di-btn-primary di-btn-sm">
            Primary small
          </button>
          <button className="di-btn di-btn-primary di-btn-sm" disabled>
            Primary Disabled small
          </button>
          <button className="di-btn di-btn-outline di-btn-sm">
            Outline small
          </button>
          <button className="di-btn di-btn-outline di-btn-sm" disabled>
            Outline Disabled small
          </button>

          <button className="di-btn di-btn-text di-btn-sm">
            Text
          </button>

          <button disabled className="di-btn di-btn-text di-btn-sm">
            Text Disabled
          </button>
        </div>
      </section>
    </>
  );
}
