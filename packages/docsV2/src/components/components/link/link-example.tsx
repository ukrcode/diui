export default function LinkExample() {
  return (
    <>
      <div className="di-p-2">
        <a className="di-link" href="#">
          Simple Link
        </a>
      </div>

      <div className="di-p-2 di-bg-black">
        <a className="di-link di-link-inverted" href="#">
          Simple Inverted Link
        </a>
      </div>

      <div className="di-p-2">
        <a className="di-link-primary" href="#">
          Primary Link
        </a>
      </div>

      <div className="di-p-2">
        <a className="di-link-secondary" href="#">
          Secondary Link
        </a>
      </div>

      <div className="di-p-2">
        <a className="di-link-underline" href="#">
          Secondary Link
        </a>
      </div>

      <div className="di-p-2 di-bg-black">
        <a className="di-link-underline di-link-inverted" href="#">
          Secondary Link
        </a>
      </div>
    </>
  )
}
