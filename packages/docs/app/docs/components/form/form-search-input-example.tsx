export default function SearchInputExample() {
    return (
      <div className="di-flex di-gap-2 di-gray-bg di-p-2">
        <div className="di-form-group" style={{ width: "200px" }}>
          <input
            type="text"
            id="search-text-field-1"
            placeholder=""
            aria-describedby="some-text-field-111"
            className="di-search-input"
          />
          <label htmlFor="search-text-field-1" className="di-search-label">
            Label
          </label>
  
          <div id="some-text-field-111" className="di-form-hint">
            Hint Text
          </div>
        </div>
      </div>
    );
  }
  