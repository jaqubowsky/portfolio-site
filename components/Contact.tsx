import Form from "./Form";
import Section from "./Section";
import SectionName from "./SectionName";

const Contact = () => {
  return (
    <Section className="bg-gray-900" id="contact">
        <SectionName color="white">Contact</SectionName>
        <span className="text-red-500">Have a question?</span>
        <Form />
    </Section>
  );
};

export default Contact;
