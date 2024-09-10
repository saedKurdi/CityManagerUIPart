import { ChangeEvent, FormEvent, useState } from "react";
import { RegisterForm, RegisterFormButton, RegisterFormInput } from "./styles";
import { registerNewUser } from "../../api/requestsToLocalHost";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  // creating on change event for all input fields :
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "username") setUsername(e.target.value);
    else if (e.target.name == "password") setPassword(e.target.value);
  };

  // when registering finishes it sends request to server and takes JWT :
  const formOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await registerNewUser(username, password);
  };

  return (
    <RegisterForm onSubmit={formOnSubmit}>
      <h1>REGISTER PAGE</h1>
      <RegisterFormInput
        onChange={onChange}
        placeholder="Username"
        name="username"
        type="text"
        value={username}
      />
      <RegisterFormInput
        onChange={onChange}
        placeholder="Password"
        name="password"
        type="password"
        value={password}
      />
      <RegisterFormButton type="submit">Register New User</RegisterFormButton>
      <RegisterFormButton onClick={() => navigate("/login")}>
        Go To Login
      </RegisterFormButton>
      <RegisterFormButton onClick={() => navigate("/")}>
        Go To Home
      </RegisterFormButton>
    </RegisterForm>
  );
};
