import { FC } from "react";
import { City } from "../../types/City";
import { CitiesContainer } from "./styles";
import { CityItem } from "../CityItem/CityItem";

interface ICities {
  cities: City[];
}

export const Cities: FC<ICities> = ({ cities }) => {
  return (
    <CitiesContainer>
      {cities.map((c) => (
        <CityItem city={c} />
      ))}
    </CitiesContainer>
  );
};
