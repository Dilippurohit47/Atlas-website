"use client";
import React, { useState } from "react";
import { FaUndo } from "react-icons/fa";

type InputField = {
  id: string;
  label: string;
  type: string;
  required: boolean;
};

const inputFields: InputField[] = [
  { id: "firstName", label: "First Name", type: "text", required: true },
  { id: "lastName", label: "Last Name", type: "text", required: true },
  { id: "email", label: "Email Address", type: "email", required: true },
  { id: "phone", label: "Phone", type: "tel", required: true },
  { id: "bedrooms", label: "Bedrooms", type: "number", required: true },
  { id: "bathrooms", label: "Bathrooms", type: "number", required: true },
  { id: "street", label: "Street", type: "text", required: true },
  { id: "city", label: "City", type: "text", required: true },
  { id: "state", label: "State", type: "text", required: true },
  { id: "zipcode", label: "Zipcode", type: "text", required: true },
  {
    id: "targetRevenue",
    label: "Target Revenue (optional)",
    type: "number",
    required: false,
  },
];

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bedrooms: "",
    bathrooms: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    targetRevenue: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[45rem] mt-10 grid gap-6 md:grid-cols-1 lg:grid-cols-2 w-full"
    >
      {inputFields.map((field) => (
        <div  key={field.id}>
          <label htmlFor={field.id} className="block text-sm font-medium">
            {field.label}
            {field.required && <span className="text-red-600"> *</span>}
          </label>
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            value={formData[field.id as keyof typeof formData]}
            onChange={handleChange}
            className="mt-1 w-full border rounded p-2 shadow-md focus:outline-none"
            required={field.required}
          />
        </div>
      ))}

      <div className="lg:col-span-2">
        <label htmlFor="additionalInfo" className="block text-sm font-medium">
          Anything you would like us to know? (optional)
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2 shadow-md"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          type="button"
          className="flex bg-red-500 text-white rounded-md hover:bg-red-400 transit ease-in duration-200 px-3 py-2 items-center justify-center gap-2 max-w-[15rem]"
        >
          <FaUndo /> Clear Form
        </button>
        <button
          type="submit"
          className="bg-black hover:bg-opacity-50 transition ease-in duration-200 text-white px-4 py-2 rounded-md max-w-[15rem]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
