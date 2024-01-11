import { ServicesWrapper, Div, Img, H1, H2, P, Container, ImageDiv } from "./Services.style";
import image0 from "../../../Assets/Images/img1.jpeg";
import image1 from "../../../Assets/Images/img2.jpeg";
import image2 from "../../../Assets/Images/img3.jpeg";
import image3 from "../../../Assets/Images/img4.jpeg";
function Services() {
  return (
    <ServicesWrapper id="Services">
      <Container>
        <Div>
          <H1>טיפולים</H1>
          <P>
            הניסיון לימד אותי שהאמצעים הרבים והשונים של תחום הרפואה המשלימה
            מניבים את התוצעות הכי טובות כשמשלבים אותם יחד. לכן הטיפול הינו משולב
            ומכיל טכניקות רבות מעיסוי שוודי רגוע ועד פרוק נקודות כאב שחוסמות את
            תנועות הגוף. אבנים קרות אבנים חמות סתם אבנים אבנים פושרות
          </P>
        </Div>
        <ImageDiv>
          {/* <Img styles={{backgroundImage: `${image1}`}}></Img> */}

          <Img src={image0} />
          <Img src={image1} />
          <Img src={image2} />
          <Img src={image3} />
        </ImageDiv>
      </Container>
    </ServicesWrapper>
  );
}
export default Services;
