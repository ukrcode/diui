export default function FormHintExample() {
  return (
    <div className="di-flex di-gap-2">
      <div className="di-form-group" style={{ width: "200px" }}>
        <textarea
          name="some-textarea-for-data"
          id="some-textarea-for-data-id"
          aria-errormessage="textarea-hint-message"
        ></textarea>

        <div className="di-form-hint" id="textarea-hint-message">
          Please, type something
        </div>
      </div>

      <div>
        <div className="di-form-hint">Hint separetly from anything else</div>
        <div className="di-form-hint di-form-hint-invalid">
          Invalid Hint separetly from anything else
        </div>
      </div>
    </div>
  );
}
