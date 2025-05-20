import { useState } from "react";
import Section from "./Section";
import Button from "../ui/Button";
import TextField from "../ui/TextField";

function Form() {
  const [submitInProgress, setSubmitInProgress] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState("Send Proposal");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation and submission logic - log is just for demo
    setSubmitInProgress(true);
    setSubmitButtonText("Sending...");

    setTimeout(() => {
      e.target.reset();

      setSubmitButtonText("Sent Proposal!");
      setSubmitInProgress(false);
    }, 1000);

    setTimeout(() => {
      setSubmitButtonText("Send Proposal");
    }, 2000);
  };

  return (
    <Section
      className={"grid grid-cols-1 md:grid-cols-2 gap-8 h-max md:h-screen"}
    >
      <span className="bg-orange-100 p-16 h-max md:h-full overflow-hidden">
        <img
          src="./img/form.png"
          alt="Two animated figures standing next to eachother"
          className="w-full h-max"
          loading="lazy"
        />
      </span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full gap-8"
      >
        <h2 className="text-right text-stone-950 text-3xl font-bold pl-[33%]">
          We'd love to hear from you
        </h2>
        <span className="flex flex-col gap-8">
          <TextField
            type="text"
            placeholder="Name"
            required={true}
            name="name"
          />
          <TextField
            type="email"
            placeholder="Email"
            required={true}
            name="email"
          />
          <TextField
            type="url"
            placeholder="Website URL"
            required={true}
            name="website"
          />
          <TextField
            type="textarea"
            placeholder="Project Details"
            required={true}
            name="project-details"
          />
        </span>
        <Button textClassName={submitInProgress && "animate-spin"}>
          {submitInProgress ? (
            <span className="icon-[bx--loader-alt]"></span>
          ) : (
            <span>{submitButtonText}</span>
          )}
        </Button>
      </form>
    </Section>
  );
}

export default Form;
