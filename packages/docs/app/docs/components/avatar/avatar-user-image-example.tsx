import Image from "next/image";

function UserImage() {
  return <Image fill src={"/user-temp.jpeg"} alt="User Picture" />;
}

export default function AvatarUserImageExample() {
  return (
    <>
      <div className="di-flex di-flex-align-center di-gap-2 di-mb-2">
        <div className="di-avatar di-avatar-xl">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-lg">
          <UserImage />
        </div>
        <div className="di-avatar">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-md">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-sm">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-xs">
          <UserImage />
        </div>
      </div>

      <div className="di-flex di-flex-align-center di-gap-2 di-mb-2">
        <div className="di-avatar di-avatar-square di-avatar-xl">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-square di-avatar-lg">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-square">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-square di-avatar-md">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-square di-avatar-sm">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-square di-avatar-xs">
          <UserImage />
        </div>
      </div>

      <div className="di-flex di-flex-align-center di-gap-2 di-mb-2">
        <div className="di-avatar di-avatar-r-square di-avatar-xl">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-r-square di-avatar-lg">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-r-square">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-r-square di-avatar-md">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-r-square di-avatar-sm">
          <UserImage />
        </div>
        <div className="di-avatar di-avatar-r-square di-avatar-xs">
          <UserImage />
        </div>
      </div>
    </>
  );
}
