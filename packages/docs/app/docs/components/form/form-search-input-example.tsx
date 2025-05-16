type SearchInputProps = {
  id: string;
  bgClassName?: string;
  disabled?: boolean;
  isInvalidHint?: boolean;
};

function SearchInput({ id, bgClassName, disabled, isInvalidHint }: SearchInputProps) {
  return (
    <div className={`di-flex di-flex-wrap di-gap-2 di-p-2 ${bgClassName}`}>
      <div className="di-form-group" style={{ width: "200px" }}>
        <span
          className="di-search-input-icon di-icon di-icon-24 di-icon-magnify-glass di-bg-gray"
          role="img"
          aria-label="Search Icon"
        ></span>
        <input
          type="text"
          id={id}
          disabled={disabled}
          placeholder=""
          aria-describedby="some-text-field-111"
          className="di-search-input"
        />
        <label
          htmlFor={id}
          className="di-search-label di-flex di-flex-wrap di-justify-center"
        >
          Label
        </label>

        <div id={`${id}-hint`} className={`di-form-hint ${isInvalidHint ? "di-form-hint-invalid" : ""}`}>
          Hint Text
        </div>
      </div>
    </div>
  );
}

export default function SearchInputExample() {
  return (
    <>
      <SearchInput id="some-text-field-010101" bgClassName="di-bg-gray" />
      <SearchInput id="some-text-field-020102" disabled isInvalidHint />
    </>
  );
}
