import Section from "./Section";
import Button from "../ui/Button";
import TextField from "../ui/TextField";

function Form() {
  return (
    <Section className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
      <span className="bg-orange-100 p-16 h-max md:h-full overflow-hidden">
        <img
          src="./img/form.png"
          alt="Two animated figures standing next to eachother"
        />
      </span>
      <div className="flex flex-col justify-between h-full gap-8">
        <h2 className="text-right text-stone-950 text-3xl font-bold pl-[33%]">
          We'd love to hear from you
        </h2>
        <span className="flex flex-col gap-8">
          <TextField type="text" placeholder="Name*" required={true} />
          <TextField type="text" placeholder="Email*" required={true} />
          <TextField type="text" placeholder="Website URL*" required={true} />
          <TextField
            type="text"
            placeholder="Project Details*"
            required={true}
          />
        </span>
        <Button>Send Proposal</Button>
      </div>
    </Section>
  );
}

export default Form;
