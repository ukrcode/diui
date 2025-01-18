export default function FormCheckExample() {
  return (
    <div className="di-flex di-flex-col di-gap-2">
      <div className="di-flex di-gap-2">
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

      <div className="di-flex di-gap-2">
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
      </div>
    </div>
  );
}
