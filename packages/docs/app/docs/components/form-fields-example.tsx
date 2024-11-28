export default function FormFieldsExample() {
  return (
    <div className="di-form-field">
      <label htmlFor="some-text-field" className="di-form-field-label">
        Label
      </label>
      <input type="text" id="some-text-field" className="di-form-field-input" />
    </div>
  );
}
