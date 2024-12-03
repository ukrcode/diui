export default function FormFieldsExample() {
  return (
    <div className="di-flex di-gap-2">
      <div className="di-form-field" style={{ width: "200px" }}>
        <input
          type="text"
          id="some-text-field-1"
          placeholder=""
          aria-describedby="some-text-field-1"
          className="di-form-field-input"
        />
        <label htmlFor="some-text-field-1" className="di-form-field-label">
          Label
        </label>

        <div id="some-text-field-1" className="di-form-field-hint">
          Hint Text
        </div>
      </div>

      <div className="di-form-field" style={{ width: "200px" }}>
        <input
          type="text"
          id="some-text-field-2"
          placeholder=""
          aria-describedby="some-text-field-2"
          value="Some value"
          className="di-form-field-input"
        />
        <label htmlFor="some-text-field-2" className="di-form-field-label">
          Label
        </label>

        <div id="some-text-field-2" className="di-form-field-hint">
          Hint Text
        </div>
      </div>
    </div>
  );
}
