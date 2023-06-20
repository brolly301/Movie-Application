import useUserContext from "../../../hooks/useUserContext";
import "../../../CSS/Authentication/LoginDetails.css";

export default function LoginDetails() {
  const { userData } = useUserContext();

  return (
    <div className="login-details-container">
      <label htmlFor="">Email Address</label>
      <input type="text" value={userData.email} />
      <label htmlFor="">Password</label>
      <input type="password" placeholder="***********" />
      <button>Edit</button>
    </div>
  );
}
