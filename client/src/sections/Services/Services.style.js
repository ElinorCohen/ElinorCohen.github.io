import styled from "styled-components";

export const ServicesWrapper = styled.section`
  background-color: cyan;
  direction: rtl;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 100px;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  font-weight: normal;
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Img = styled.img`
  padding-inline: 20px;
  padding-block: 20px;
  border-radius: 30px;
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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

export const ImgSubText = styled.p`
  font-size: 25px;
`;
