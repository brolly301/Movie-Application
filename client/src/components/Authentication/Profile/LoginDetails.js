import useUserContext from "../../../hooks/useUserContext";

export default function LoginDetails() {
  const { userData } = useUserContext();

  return (
    <div className="profile-details-container">
      <h1>Login Details</h1>
      <input type="text" defaultValue={userData.email} />
      <input type="password" placeholder="***********" />
      <button className="no-border">Edit</button>
    </div>
  );
}
