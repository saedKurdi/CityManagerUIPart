import axios from "axios";
import { City } from "../types/City";

// creating a custom axios instance for registering the user :
const apiForRegisteringAndLogging = axios.create({
  baseURL: "https://localhost:7181/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// register user and add to db :
export const registerNewUser = async (
  username: string,
  password: string
): Promise<string> => {
  if (username.trim() == "" || password.trim() == "")
    return "Can Not Create User of empty strings !";

  const body = {
    username: username,
    password: password,
  };
  try {
    const response = await apiForRegisteringAndLogging.post(
      "/Auth/register",
      body
    );
    return response.statusText; // Assuming the token is in the response data
  } catch (error) {
    console.error("Error registering user:", error);
    return ""; // Return an empty string or handle the error as needed
  }
};

// login user and get JWT token :
export const loginUserAndGetJWT = async (
  username: string,
  password: string
): Promise<string> => {
  const body = {
    username: username,
    password: password,
  };

  try {
    const token = await apiForRegisteringAndLogging.post("/Auth/login", body);
    return token.data;
  } catch (error) {
    console.error("Error while attemting to login ", error);
    return "";
  }
};

// getting cities from api and return :
export const getCitiesByApiKey = async (
  apiKey: string,
  userId: string
): Promise<City[]> => {
  try {
    const cities: string = await apiForRegisteringAndLogging.get(
      `/City/${userId}`,
      {
        headers: {
          Authorization: "bearer " + apiKey,
        },
      }
    );
    return cities.data as City[];
  } catch (error) {
    console.error("Error while attemting to login ", error);
    return [];
  }
};
