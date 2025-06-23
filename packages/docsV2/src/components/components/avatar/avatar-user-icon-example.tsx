function UserIcon() {
  return (
    <span
      className={`di-icon di-icon-user di-bg-gray  di-avatar-icon`}
      role="img"
      aria-label="User Icon"
    ></span>
  );
}

export default function AvatarUserIconExample() {
  return (
    <>
      <div className="di-flex di-flex-align-center di-gap-2 di-mb-2">
        <div className="di-avatar di-avatar-xl">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-lg">
          <UserIcon />
        </div>
        <div className="di-avatar">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-md">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-sm">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-xs">
          <UserIcon />
        </div>
      </div>

      <div className="di-flex di-flex-align-center di-gap-2 di-mb-2">
        <div className="di-avatar di-avatar-square di-avatar-xl">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-square di-avatar-lg">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-square">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-square di-avatar-md">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-square di-avatar-sm">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-square di-avatar-xs">
          <UserIcon />
        </div>
      </div>

      <div className="di-flex di-flex-align-center di-gap-2 di-mb-2">
        <div className="di-avatar di-avatar-r-square di-avatar-xl">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-r-square di-avatar-lg">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-r-square">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-r-square di-avatar-md">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-r-square di-avatar-sm">
          <UserIcon />
        </div>
        <div className="di-avatar di-avatar-r-square di-avatar-xs">
          <UserIcon />
        </div>
      </div>
    </>
  );
}
