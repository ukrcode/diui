export default function FormFieldsExample() {
  return (
    <div className="di-form-field">
      <input
        type="text"
        id="some-text-field"
        placeholder=""
        className="di-form-field-input"
      />
      <label htmlFor="some-text-field" className="di-form-field-label">
        Label
      </label>
    </div>
  );
}
