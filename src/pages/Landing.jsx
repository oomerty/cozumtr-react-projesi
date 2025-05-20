import Hero from "../components/landing/Hero";
import Section from "../components/landing/Section";
import Card from "../components/ui/Card";
import Stats from "../components/landing/Stats";
import Form from "../components/landing/Form";

const teamMembers = [
  {
    name: "Esther Howard",
    role: "Founder",
    image: "./img/team-1.webp",
  },
  {
    name: "Cody Fisher",
    role: "Developer",
    image: "./img/team-2.webp",
  },
  {
    name: "Brooklyn Simmons",
    role: "Designer",
    image: "./img/team-3.webp",
  },
];

function Landing() {
  return (
    <div className="font-manrope">
      <Hero />

      <Section
        className="!pb-8 !gap-8"
        title="Who we are"
        titleStyle="justify-start animate-in fade-in"
      >
        <p>
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
        <img
          src="./img/who-we-are.webp"
          alt="Promotional image displaying turmerics, Earthbar branded bottle and half an orange - left to right"
          className="pt-16 pb-8 w-full aspect-auto"
          loading="lazy"
        />
      </Section>

      <Section
        className="flex flex-col gap-8 !pb-32"
        title="Meet the heroes behind the magic"
        titleStyle="text-center"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-12">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              title={member.name}
              description={member.role}
              image={member.image}
            />
          ))}
        </div>
      </Section>

      <Stats />

      <Form />

      <div className="flex flex-col gap-8 pb-4 text-center">
        <p className="opacity-55 text-sm font-semibold">
          Developed by{" "}
          <a
            className="text-style text-blue-600 after:content-['_↗'] leading-loose"
            href="https://www.omermert.com"
            target="_blank"
          >
            Ömer Mert ERYİĞİT
          </a>{" "}
          - {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Landing;
