export default function FormFieldsExample() {
  return (
    <div className="di-flex di-flex-gap-2">
      <div className="di-form-field" style={{ width: "200px" }}>
        <input
          type="text"
          id="some-text-field"
          placeholder=""
          className="di-form-field-input"
        />
        <label htmlFor="some-text-field" className="di-form-field-label">
          Label
        </label>

        <div className="di-form-field-hint">Hint Text</div>
      </div>

      <div className="di-form-field" style={{ width: "200px" }}>
        <input
          type="text"
          id="some-text-field"
          placeholder=""
          value="Some value"
          className="di-form-field-input"
        />
        <label htmlFor="some-text-field" className="di-form-field-label">
          Label
        </label>

        <div className="di-form-field-hint">Hint Text</div>
      </div>
    </div>
  );
}
