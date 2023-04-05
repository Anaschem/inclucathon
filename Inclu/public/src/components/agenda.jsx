import React from "react";
import { useNavigate } from "react-router-dom";
import {BiCalendar} from "react-icons/bi";
import styled from "styled-components";
export default function Agenda() {
  const navigate = useNavigate();
  const handleClick = async () => {
      navigate("/calendar");
    
  };
  return (
    <Button onClick={handleClick}>
      <BiCalendar />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;