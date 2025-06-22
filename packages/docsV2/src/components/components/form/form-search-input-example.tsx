type SearchInputProps = {
  id: string;
  rootClassName?: string;
  disabled?: boolean;
  isInvalidHint?: boolean;

  isReverse?: boolean;
};

function SearchInput({
  id,
  rootClassName,
  disabled,
  isInvalidHint,
  isReverse,
}: SearchInputProps) {
  return (
    <div className={`di-flex di-flex-wrap di-gap-2 di-p-2 ${rootClassName}`}>
      <div
        className={`di-form-group ${
          isReverse ? "di-form-group-search-reverse" : "di-form-group-search"
        }`}
        style={{ width: "200px" }}
      >
        <span
          className={`di-search-input-icon di-icon di-icon-24 di-icon-magnify-glass di-bg-gray`}
          role="img"
          aria-label="Search Icon"
        ></span>
        <input
          type="text"
          id={id}
          disabled={disabled}
          placeholder=""
          aria-describedby="some-text-field-111"
          className="di-input"
        />
        <label
          htmlFor={id}
          className="di-label di-flex di-flex-wrap di-justify-center"
        >
          Label
        </label>

        <div
          id={`${id}-hint`}
          className={`di-form-hint ${
            isInvalidHint ? "di-form-hint-invalid" : ""
          }`}
        >
          Hint Text
        </div>
      </div>
    </div>
  );
}

export default function SearchInputExample() {
  return (
    <>
      <SearchInput id="some-text-field-010101" rootClassName="di-bg-gray" />
      <SearchInput
        id="some-text-field-010103"
        rootClassName="di-bg-gray"
        isReverse
      />
      <SearchInput id="some-text-field-020102" disabled isInvalidHint />
    </>
  );
}
