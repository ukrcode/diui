export default function FormFieldsExample() {
  return (
    <div className="di-flex di-gap-2">
      <div
        className="di-form-group di-form-group-invalid"
        style={{ width: "200px" }}
      >
        <input
          type="text"
          id="some-text-field-10"
          placeholder=""
          aria-invalid="true"
          aria-errormessage="some-text-field-10-hint"
          className="di-input"
          value="Some invalid value"
        />
        <label htmlFor="some-text-field-10" className="di-label">
          Label
        </label>

        <div id="some-text-field-10-hint" className="di-form-hint">
          Hint Text
        </div>
      </div>

      <div className="di-form-group" style={{ width: "200px" }}>
        <input
          type="text"
          id="some-text-field-12"
          placeholder=""
          aria-invalid="true"
          aria-errormessage="some-text-field-12-hint"
          className="di-input"
          value="Some invalid value"
        />
        <label htmlFor="some-text-field-12" className="di-label">
          Label
        </label>

        <div
          id="some-text-field-12-hint"
          className="di-form-hint di-form-hint-invalid"
        >
          Hint Text
        </div>
      </div>
    </div>
  );
}
