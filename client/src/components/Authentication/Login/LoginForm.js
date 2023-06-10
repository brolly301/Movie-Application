import { useState } from "react";
import { login } from "../../../APIs/authentication";
import useUserContext from "../../../hooks/useUserContext";

export default function LoginForm() {
  const { setUserData } = useUserContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    setUserData({ user: formData.email });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input onChange={handleChange} name="email" type="text" />
        <label>Password</label>
        <input onChange={handleChange} name="password" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}
