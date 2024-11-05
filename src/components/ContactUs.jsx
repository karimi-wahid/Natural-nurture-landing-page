import React from "react";
import Button from "./Button";

const ContactUs = () => {
  return (
    <section className="w-[90%] mt-10 flex justify-center items-center flex-wrap px-5 border-b border-neutral-400 pb-5">
      <div className="w-2/6 text-center space-y-2">
        <h1 className="text-xl font-semibold">Dedicated to our clients</h1>
        <p className="text-neutral-500">
          Dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident
          sunt in culpa qui officia deserunt.
        </p>
      </div>

      <form action="" className="w-[50%] flex flex-col p-5">
        <label htmlFor="firstName">
          Name <span className="text-red-700">*</span>
        </label>

        <div>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your firstName here..."
            required
          />
          <input
            type="text"
            id="lastName"
            placeholder="Enter your lastName here..."
          />
        </div>

        <label htmlFor="email">
          Email <span className="text-red-700">*</span>
        </label>
        <input type="email" name="" id="email" required />

        <label htmlFor="msg">
          Massage <span className="text-red-700">*</span>
        </label>
        <textarea name="" id="msg" required></textarea>
        <Button btnText={'Submit'} type={'submit'}/>
      </form>
    </section>
  );
};

export default ContactUs;
