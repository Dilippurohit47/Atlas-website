"use client ";
import React, { useState } from "react";

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
      className="max-w-[45rem] mt-10 grid  gap-6 md:grid-cols-1 lg:grid-cols-2   w-full "
    >
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium">
          First Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium">
          Last Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="bedrooms" className="block text-sm font-medium">
          Bedrooms <span className="text-red-600">*</span>
        </label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="bathrooms" className="block text-sm font-medium">
          Bathrooms <span className="text-red-600">*</span>
        </label>
        <input
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="street" className="block text-sm font-medium">
          Street <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium">
          City <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="state" className="block text-sm font-medium">
          State <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="zipcode" className="block text-sm font-medium">
          Zipcode <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="targetRevenue" className="block text-sm font-medium">
          Target Revenue (optional)
        </label>
        <input
          type="number"
          id="targetRevenue"
          name="targetRevenue"
          value={formData.targetRevenue}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
        />
      </div>

      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium">
          Anything you would like us to know? (optional)
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="mt-1 w-full border rounded p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-800 transition ease-in duration-200 text-white px-4 py-2 rounded max-w-[10rem]"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
