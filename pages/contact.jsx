import styled from "styled-components";
import SideBar from "../components/SideBar";
import { useEffect } from "react";

const ContactForm = styled.form`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContactPage = () => {
  useEffect(() => {
    document.title = "Kyle Garrett Photo | Contact";
  });
  return (
    <div>
      <ContactForm>
        <input placeholder="email" />
        <input placeholder="name" />
        <textarea placeholder="Content" />
      </ContactForm>
    </div>
  );
};
export default ContactPage;
