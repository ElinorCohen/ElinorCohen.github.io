import { AboutWrapper, Div, Img, H1, H2, P, Container } from "./About.style";
import image from "../../../Assets/Images/aviv.jpg"
function About() {
  return (
    <AboutWrapper id="About">
      <Container>
        <Div>
          <H1>אודות</H1>
          <P>
            התחלתי את דרכי במכללת תהילה שם הוסמכתי כמטפל בעיסוי, טיפול בבעיות
            כאב בעזרת טריגר פוינט וכוסות רוח. זכיתי לצבור ניסיון מקצועי במרכז
            לרפואה משלימה של אתי קגן. שם הבנתי שיש לי כישרון בתחום ושטיפול בכאב
            זה ייעודי. כיום אני ממשיך לצבור ידע כסטודנט לרפואה סינית במכללת
            רידמן וסטודנט לדיקור בבית הספר הירושלמי לרפואה סינית של אילן
            הורוביץ. בנוסף להכשרות בטיפול בעזרת מוצרי CBD. "הכאב שלכם זה העסק
            שלי"
          </P>
        </Div>
        <Img src={image}/>
      </Container>
    </AboutWrapper>
  );
}
export default About;
