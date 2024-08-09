import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAllPhones } from "../../store/thunks/phoneThanks";

export default function PhoheList() {
  const dispatch = useDispatch();
  const { phones } = useSelector((store) => store.phone);

  const navigate = useNavigate();

  const handleHavigate = (phoneId) => {
    navigate(`/cart/${phoneId}`);
  };

  useEffect(() => {
    dispatch(getAllPhones());
  }, []);

  return (
    <StyledWrapper>
      {phones?.map((item) => (
        <StyledContainer key={item.id}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <button onClick={() => handleHavigate(item.id)}>Подробнее</button>
        </StyledContainer>
      ))}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const StyledContainer = styled.section`
  width: 390px;
  height: 380px;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid gray;
  border-radius: 15px;
  padding: 10px;
  & > button {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 17px;
    background-color: black;
    border: none;
  }
`;
