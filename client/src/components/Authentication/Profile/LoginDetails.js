import useUserContext from "../../../hooks/useUserContext";

export default function LoginDetails() {
  const { userData } = useUserContext();

  return (
    <div className="profile-details-container">
      <input type="text" defaultValue={userData.email} />
      <input type="password" placeholder="***********" />
      <button className="no-border">Edit</button>
    </div>
  );
}
