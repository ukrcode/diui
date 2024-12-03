export default function FormFieldsExample() {
  return (
    <div className="di-flex di-gap-2">
      <div
        className="di-form-field di-form-field-invalid"
        style={{ width: "200px" }}
      >
        <input
          type="text"
          id="some-text-field-10"
          placeholder=""
          aria-invalid="true"
          aria-errormessage="some-text-field-10-hint"
          className="di-form-field-input"
          value="Some invalid value"
        />
        <label htmlFor="some-text-field-10" className="di-form-field-label">
          Label
        </label>

        <div id="some-text-field-10-hint" className="di-form-field-hint">
          Hint Text
        </div>
      </div>

      <div className="di-form-field" style={{ width: "200px" }}>
        <input
          type="text"
          id="some-text-field-12"
          placeholder=""
          aria-invalid="true"
          aria-errormessage="some-text-field-12-hint"
          className="di-form-field-input"
          value="Some invalid value"
        />
        <label htmlFor="some-text-field-12" className="di-form-field-label">
          Label
        </label>

        <div
          id="some-text-field-12-hint"
          className="di-form-field-hint di-form-field-hint-invalid"
        >
          Hint Text
        </div>
      </div>
    </div>
  );
}
