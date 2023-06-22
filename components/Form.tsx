"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import FormButton from "./FormButton";
import { sendEmail } from "@/lib/api";
import { notify } from "./Notification";
import Spinner from "./Spinner";

const initial = { subject: "", name: "", email: "", message: "" };

const Form = () => {
  const [formValues, setformValues] = useState(initial);
  const [loading, setLoading] = useState(false);

  const setFormValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setformValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail(formValues);
      notify({ message: "Email sent successfully", type: "success" });
      setformValues(initial);
    } catch (error) {
      notify({ message: "Email failed to send", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex-col flex-container gap-2 mt-10 text-white w-full max-w-screen-md"
    >
      <label htmlFor="subject" className="w-full">
        <Input
          type="text"
          placeholder="Subject"
          name="subject"
          id="subject"
          value={formValues.subject}
          onChange={setFormValue}
        />
      </label>
      <label htmlFor="name" className="w-full">
        <Input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={setFormValue}
        />
      </label>
      <label htmlFor="email" className="w-full">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={setFormValue}
        />
      </label>
      <label htmlFor="message" className="w-full">
        <Textarea
          placeholder="Your message..."
          name="message"
          value={formValues.message}
          id="message"
          onChange={setFormValue}
        />
      </label>
      <FormButton>Send</FormButton>
    </form>
  );
};

export default Form;
