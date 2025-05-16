import Hero from "../components/landing/Hero";
import Section from "../components/landing/Section";
import Card from "../components/ui/Card";

function Landing() {
  return (
    <div className="font-manrope">
      <Hero />

      <Section>
        <h2 className="justify-start text-stone-950 text-3xl font-bold">
          Who we are
        </h2>
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
        />
      </Section>

      <Section className="flex flex-col gap-8">
        <h2 className="text-center text-stone-950 text-3xl font-bold">
          Meet the heroes behind the magic
        </h2>
        <div className="flex flex-direction-row justify-center gap-12">
          <Card
            title="Esther Howard"
            description="Founder"
            image="./img/team-1.webp"
          />
          <Card
            title="Cody Fisher"
            description="Developer"
            image="./img/team-2.webp"
          />
          <Card
            title="Brooklyn Simmons"
            description="Designer"
            image="./img/team-3.webp"
          />
        </div>
      </Section>
    </div>
  );
}

export default Landing;
