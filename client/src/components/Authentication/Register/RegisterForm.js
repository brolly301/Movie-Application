import { useState } from "react";
import { register } from "../../../APIs/authentication";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" onChange={handleChange} type="text" />
        <label>Password</label>
        <input name="password" onChange={handleChange} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}
