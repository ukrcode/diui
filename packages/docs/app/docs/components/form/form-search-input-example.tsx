export default function SearchInputExample() {
  return (
    <div className="di-flex di-gap-2 di-bg-gray di-p-2">
      <div className="di-form-group" style={{ width: "200px" }}>
        <span
          className="di-search-input-icon di-icon di-icon-24 di-icon-magnify-glass di-bg-gray"
          role="img"
          aria-label="Search Icon"
        ></span>
        <input
          type="text"
          id="search-text-field-1"
          placeholder=""
          aria-describedby="some-text-field-111"
          className="di-search-input"
        />
        <label
          htmlFor="search-text-field-1"
          className="di-search-label di-flex di-justify-center"
        >
          Label
        </label>

        <div id="some-text-field-111" className="di-form-hint">
          Hint Text
        </div>
      </div>
    </div>
  );
}
