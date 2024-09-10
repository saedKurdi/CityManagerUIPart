import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginForm, LoginFormButton, LoginFormInput } from "./styles";
import { loginUserAndGetJWT } from "../../api/requestsToLocalHost";

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hasLogged, setHasLogged] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const navigate = useNavigate();
  // creating on change event for all input fields :
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "username") setUsername(e.target.value);
    else if (e.target.name == "password") setPassword(e.target.value);
  };

  // when registering finishes it sends request to server and takes JWT :
  const formOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const key: string = await loginUserAndGetJWT(username, password);
    if (key != "") {
      console.log("User logged succesfulyy !");
      setHasLogged(true);
      console.log(key);
      setToken(key);
    } else {
      setHasLogged(false);
    }
  };

  return (
    <>
      <LoginForm onSubmit={formOnSubmit}>
        <h1>LOGIN PAGE</h1>
        <LoginFormInput
          onChange={onChange}
          placeholder="Username"
          name="username"
          type="text"
          value={username}
        />
        <LoginFormInput
          onChange={onChange}
          placeholder="Password"
          name="password"
          type="password"
          value={password}
        />
        <LoginFormButton type="submit">Login</LoginFormButton>
        <LoginFormButton onClick={() => navigate("/register")}>
          Go To Register
        </LoginFormButton>
        <LoginFormButton onClick={() => navigate("/")}>
          Go To Home
        </LoginFormButton>
      </LoginForm>
      <Link to={"/city"}>Open Cities For Sending Request</Link>
      {hasLogged ? (
        <p style={{ color: "springgreen" }}>
          YOUR API KEY IS
          <div
            style={{ overflow: "clip", color: "red", textOverflow: "ellipsis" }}
          >
            {token}
          </div>
          PLEASE COPY IT AND REQUEST FOR CITIES ...
        </p>
      ) : (
        <p style={{ color: "red" }}>
          Please Input the correct validations - claims of user !
        </p>
      )}
    </>
  );
};
