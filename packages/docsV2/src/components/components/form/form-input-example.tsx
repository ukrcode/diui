export default function FormFieldsExample() {
  return (
    <div className="di-flex di-flex-wrap di-gap-2">
      <div className="di-form-group" style={{ width: '200px' }}>
        <input
          type="text"
          id="some-text-field-1"
          placeholder=""
          aria-describedby="some-text-field-1"
          className="di-input"
        />
        <label htmlFor="some-text-field-1" className="di-label">
          Label
        </label>

        <div id="some-text-field-1" className="di-form-hint">
          Hint Text
        </div>
      </div>

      <div className="di-form-group" style={{ width: '200px' }}>
        <input
          type="text"
          id="some-text-field-2"
          placeholder=""
          aria-describedby="some-text-field-2"
          defaultValue="Some value"
          className="di-input"
        />
        <label htmlFor="some-text-field-2" className="di-label">
          Label
        </label>

        <div id="some-text-field-2-hint" className="di-form-hint">
          Hint Text
        </div>
      </div>
    </div>
  )
}
