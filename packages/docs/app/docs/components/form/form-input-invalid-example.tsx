export default function FormFieldsExample() {
  return (
    <div className="di-form-field di-form-field-invalid" style={{ width: "200px" }}>
      <input
        type="text"
        id="some-text-field"
        placeholder=""
        className="di-form-field-input"
        value="Some invalid value"
      />
      <label htmlFor="some-text-field" className="di-form-field-label">
        Label
      </label>

      <div className="di-form-field-hint">Hint Text</div>
    </div>
  );
}
