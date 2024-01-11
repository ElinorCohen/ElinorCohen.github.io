import { useState } from "react";
import {
  HomeWrapper,
  Content,
  ContactForm,
  Input,
  SubmitButton,
} from "./Home.style";
import Select from "react-select";
import axios from "axios";

function Home() {
  const [selectedInquiry, setSelectedInquiry] = useState("");

  const InquiriesOptions = [
    { value: "סוג 1", label: "סוג 1" },
    { value: "סוג 2", label: "סוג 2" },
    { value: "סוג 3", label: "סוג 3" },
    { value: "אחר", label: "אחר" },
  ];

  function handleInquiryChange(selectedInquiry) {
    setSelectedInquiry(selectedInquiry);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData.entries());
    data.Inquiry = selectedInquiry ? selectedInquiry.label : "";
    console.log(data);
    console.log(target);
    try {
      const response = await axios.post("/api/send", { body: data });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  const selectStylesForOptions = {
    control: (provided) => ({
      ...provided,
      display: "flex",
      height: "2rem",
      fontSize: "1rem",
      borderRadius: "5px",
      fontFamily: "Arial",
    }),
  };

  return (
    <HomeWrapper id="Home">
      <Content>
        <b>צרו קשר</b>
        <ContactForm onSubmit={handleSubmit}>
          <Input name="name" placeholder="שם מלא" type="text"></Input>
          <Input
            name="phoneNumber"
            placeholder="מספר טלפון"
            type="text"
            pattern="[0-9]{10}"
          ></Input>
          <Select
            options={InquiriesOptions}
            value={selectedInquiry}
            onChange={handleInquiryChange}
            placeholder="סוג פנייה"
            required
            styles={selectStylesForOptions}
          />
          <SubmitButton type="submit">שלח</SubmitButton>
        </ContactForm>
      </Content>
    </HomeWrapper>
  );
}
export default Home;
