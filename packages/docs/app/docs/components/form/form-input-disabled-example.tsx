export default function FormFieldsExample() {
  return (
    <div className="di-form-field" style={{ width: "200px" }}>
      <input
        type="text"
        id="some-text-field"
        placeholder=""
        value="Some value"
        disabled
        className="di-form-field-input"
      />
      <label htmlFor="some-text-field" className="di-form-field-label">
        Label
      </label>

      <div className="di-form-field-hint">Hint Text</div>
    </div>
  );
}
