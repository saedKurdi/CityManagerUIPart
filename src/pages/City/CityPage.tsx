import { FC, useState } from "react";
import { City } from "../../types/City";
import { Cities } from "../../components/Cities/Cities";
import { getCitiesByApiKey } from "../../api/requestsToLocalHost";
import { CityPageButton, CityPageForm, CityPageInput } from "./styles";
import { Link } from "react-router-dom";

export const CityPage: FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [copyToken, setCopyToken] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const getCitiesFromApi = async () => {
    const cities = await getCitiesByApiKey(copyToken, userId);
    setCities(cities);
  };

  return (
    <>
      <h1>Requesting Cities From Web Api</h1>
      <CityPageForm
        onSubmit={(e) => {
          e.preventDefault();
          getCitiesFromApi();
        }}
      >
        <CityPageInput
          placeholder="Authentication Key"
          value={copyToken}
          onChange={(e) => setCopyToken(e.target.value)}
        />
        <CityPageInput
          placeholder="User Id For Getting Cities"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <CityPageButton type="submit">Get Cities For User</CityPageButton>
      </CityPageForm>
      <Link to={"/"}>Go To Home page</Link>
      {cities.length == 0 ? (
        <h3>Sure that your api key is correct !</h3>
      ) : (
        <Cities cities={cities} />
      )}
    </>
  );
};
