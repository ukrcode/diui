export default function FormCheckExample() {
  return (
    <div className="di-flex di-flex-wrap di-flex-col di-gap-2">
      {/* Checkboxes */}
      <div className="di-flex di-flex-wrap di-gap-2">
        <div className="di-form-check">
          <input
            id="form-check-id-1"
            className="di-form-check-input"
            type="checkbox"
            value=""
          />
          <label className="di-form-check-label" htmlFor="form-check-id-1">
            Please confirm that you agree
          </label>
        </div>

        <div className="di-form-check">
          <input
            id="form-check-id-1-disabled"
            className="di-form-check-input"
            type="checkbox"
            checked
            disabled
          />
          <label
            className="di-form-check-label"
            htmlFor="form-check-id-1-disabled"
          >
            Disabled and checked
          </label>
        </div>

        <div className="di-form-check">
          <input
            id="form-check-id-1-disabled"
            className="di-form-check-input"
            type="checkbox"
            value=""
            disabled
          />
          <label
            className="di-form-check-label"
            htmlFor="form-check-id-1-disabled"
          >
            Just Disabled
          </label>
        </div>

        <div className="di-form-check di-form-check-sm">
          <input
            id="form-check-id-2"
            className="di-form-check-input"
            type="checkbox"
            value=""
          />
          <label className="di-form-check-label" htmlFor="form-check-id-2">
            Please confirm that you agree
          </label>
        </div>
      </div>

      {/* Radio buttons */}
      <div className="di-flex di-flex-wrap di-gap-2">
        <div className="di-form-check">
          <input
            id="form-radio-id-1-disabled"
            className="di-form-check-input"
            type="radio"
          />
          <label
            className="di-form-check-label"
            htmlFor="form-radio-id-1-disabled"
          >
            Radio Button
          </label>
        </div>

        <div className="di-form-check">
          <input
            id="form-radio-id-2-disabled"
            className="di-form-check-input"
            type="radio"
            disabled
            checked
          />
          <label
            className="di-form-check-label"
            htmlFor="form-radio-id-2-disabled"
          >
            Radio Button Disabled Checked
          </label>
        </div>

        <div className="di-form-check">
          <input
            id="form-radio-id-3-disabled"
            className="di-form-check-input"
            type="radio"
            disabled
          />
          <label
            className="di-form-check-label"
            htmlFor="form-radio-id-3-disabled"
          >
            Radio Button Disabled
          </label>
        </div>

        <div className="di-form-check di-form-check-sm">
          <input
            id="form-radio-id-4"
            className="di-form-check-input"
            type="radio"
          />
          <label className="di-form-check-label" htmlFor="form-radio-id-4">
            Small Radio Button
          </label>
        </div>
      </div>

      {/* Switches */}
      <div className="di-flex di-flex-wrap di-gap-2">
        <div className="di-form-check di-form-switch">
          <input
            id="form-switch-id-1"
            className="di-form-check-input"
            type="checkbox"
            value=""
          />
          <label className="di-form-check-label" htmlFor="form-switch-id-1">
            Switch
          </label>
        </div>

        <div className="di-form-check di-form-switch">
          <input
            id="form-switch-id-2"
            className="di-form-check-input"
            type="checkbox"
            disabled
            checked
            value=""
          />
          <label className="di-form-check-label" htmlFor="form-switch-id-2">
            Switch Disabled Checked
          </label>
        </div>

        <div className="di-form-check di-form-switch">
          <input
            id="form-switch-id-3"
            className="di-form-check-input"
            type="checkbox"
            disabled
            value=""
          />
          <label className="di-form-check-label" htmlFor="form-switch-id-3">
            Switch Disabled
          </label>
        </div>

        <div className="di-form-check di-form-check-sm di-form-switch">
          <input
            id="form-switch-id-1"
            className="di-form-check-input"
            type="checkbox"
            value=""
          />
          <label className="di-form-check-label" htmlFor="form-switch-id-1">
            Switch Small
          </label>
        </div>
      </div>
    </div>
  )
}
