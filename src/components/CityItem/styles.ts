import styled from "styled-components";

export const CityItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

export const CityId = styled.h4`
  font-weight: bolder;
  font-size: 13px;
`;

export const CityName = styled.h3`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
  font-size: 15px;
`;

export const CityDescription = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 15px;
  font-weight: 300;
`;

export const CityImage = styled.img`
  width: 150px;
  height: 250px;
`;
