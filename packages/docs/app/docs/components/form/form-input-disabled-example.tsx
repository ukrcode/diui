export default function FormFieldsExample() {
  return (
    <div className="di-form-group" style={{ width: "200px" }}>
      <input
        type="text"
        id="some-text-field-100"
        placeholder=""
        value="Some value"
        aria-describedby="some-text-field-100-hint"
        disabled
        className="di-input"
      />
      <label htmlFor="some-text-field-100" className="di-label">
        Label
      </label>

      <div id="some-text-field-100-hint" className="di-form-hint">
        Hint Text
      </div>
    </div>
  );
}
