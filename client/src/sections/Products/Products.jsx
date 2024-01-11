import {
  ProductsWrapper,
  Div,
  Img,
  H1,
  H2,
  P,
  Container,
  ImageDiv,
} from "./Products.style";
import image0 from "../../../Assets/Images/img1.jpeg";
import image1 from "../../../Assets/Images/img2.jpeg";
import image2 from "../../../Assets/Images/img3.jpeg";
import image3 from "../../../Assets/Images/img4.jpeg";
function Products() {
  return (
    <ProductsWrapper id="Products">
      <Container>
        <Div>
          <H1>מוצרים</H1>
          <P>
            מולקולת הקנאבידיול, או בקיצור CBD היא חלק מקבוצת מדכאי כאב שהתגלו
            ובודדו מצמח הקנביס עוד בשנת 1940. בניגוד לTCH- ה-CBD אינו
            פסיבואקטיבי ומכך אינו ממסטל ולכן המוצרים בהם אני משתמש הם חוקים
            לשימוש וצריכה. למולקולת הקנאבידיול, השפעה מאלחשת. האלחוש נוצר בשל
            השפעת ה-CBD על מערכת קולטנים עצביים במערכת הקנבינואידית שממוקמת
            במערכת העצבים בגוף שלנו. בעזרת ה- CBD אנחנו יכולים לטפל במצבים של:
            כאבי שרירים, כאבי מפרקים, התכווצויות, דלקות, מצבי לחץ, חרדה ועוד.
            אני מבצע שימוש במוצרים אלו במהלך טיפולים רבים ואף מוכר אותם בנפרד
            להמשך טיפול ושימוש עצמאי של המטופלים.
          </P>
        </Div>
        <ImageDiv>
          <Img src={image0} />
          <Img src={image1} />
          <Img src={image2} />
          <Img src={image3} />
        </ImageDiv>
      </Container>
    </ProductsWrapper>
  );
}
export default Products;
