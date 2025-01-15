export default function FormCheckExample() {
  return (
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
  );
}
