import styled from "styled-components";

export const HomeWrapper = styled.section`
  background-color: aqua;
  display: flex;
  height: 500px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: wheat;
  display: flex;
  padding: 60px;
  flex-direction: column;
  text-align: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Input = styled.input`
  display: flex;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  &::placeholder {
    font-size: 1rem;
    text-align: end;
  }
`;

export const SubmitButton = styled.button`
  background-color: gray;
  &:hover {
    cursor: pointer;
  }
`;
