import styled from "styled-components";

export const AboutWrapper = styled.section`
  background-color: wheat;
  direction: rtl;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-inline: 100px;
  align-items: center;
  max-width: 60%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
`;

export const Img = styled.img`
  padding-block: 20px;
  width: 300px;
  height: 100%;
`;

export const H1 = styled.h1`
  font-size: 30px;
  margin: 0px auto;
`;

export const H2 = styled.h2`
  font-size: 25px;
  margin: 0px;
  letter-spacing: 0.1rem;
`;

export const P = styled.p`
  font-size: 20px;
`;
