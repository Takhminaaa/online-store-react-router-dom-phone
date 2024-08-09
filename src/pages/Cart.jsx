import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getPhoneById } from "../store/thunks/phoneThanks";
import { useEffect } from "react";

export default function Cart() {
  const { phoneById } = useSelector((store) => store.phone);
  console.log("phoneById: ", phoneById);

  const dispatch = useDispatch();

  const { cartId } = useParams();
  useEffect(() => {
    dispatch(getPhoneById(cartId));
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {phoneById?.map((phone) => (
        <StyledContainer key={phone.id}>
          <img src={phone.img} alt={phone.name} />
          <h3>{phone.name}</h3>
          <button>
            <Link to={"/"}>Вернуться обратно</Link>
          </button>
        </StyledContainer>
      ))}
    </div>
  );
}

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
    background-color: #106808;
    border: none;
  }
`;
