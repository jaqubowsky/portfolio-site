"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import FormButton from "./FormButton";
import { sendEmail } from "@/lib/api";

const initial = { subject: "", name: "", email: "", message: "" };

const Form = () => {
  const [formValues, setformValues] = useState(initial);

  const setFormValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setformValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await sendEmail(formValues);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex-col flex-container gap-6 mt-10 text-white w-full items-end"
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
