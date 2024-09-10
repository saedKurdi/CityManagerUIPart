import { FC } from "react";
import { City } from "../../types/City";
import {
  CityDescription,
  CityId,
  CityImage,
  CityItemContainer,
  CityName,
} from "./styles";

interface ICityItem {
  city: City;
}

export const CityItem: FC<ICityItem> = ({ city }) => {
  return (
    <CityItemContainer>
      <CityId>ID - {city?.id}</CityId>
      <CityName>{city?.name}</CityName>
      <CityDescription>{city?.description}</CityDescription>
      <CityImage src={city?.photoUrl} />
    </CityItemContainer>
  );
};
