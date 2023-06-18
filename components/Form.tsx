"use client";

import { ChangeEvent, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

const initial = { name: "", email: "", message: "" };

const Form = () => {
  const [formValues, setformValues] = useState(initial);

  const setFormValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setformValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={() => {}}
      className="flex-col flex-container gap-6 mt-10 text-white w-full items-end"
    >
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
      <Button onClick={() => {}} href="#contact" size="medium" intent="contact">
        Send
      </Button>
    </form>
  );
};

export default Form;
