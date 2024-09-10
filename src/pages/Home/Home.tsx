import { Link } from "react-router-dom";
import { HomePageContainer } from "./styles";

export const Home = () => {
  return (
    <HomePageContainer>
      <h1>Welcome To Home Page ! </h1>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </HomePageContainer>
  );
};
