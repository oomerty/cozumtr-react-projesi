import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useContext } from "react";
import { PreferencesContext } from "./../../store/preferences-context";

const stats = [
  {
    title: "Clients Worldwide",
    value: 350,
  },
  {
    title: "Team Members",
    value: 20,
  },
  {
    title: "Projects Completed",
    value: 100,
  },
  {
    title: "Revenue Generated",
    value: 85,
    measurement: "M",
  },
];

function Stats() {
  return (
    <div className="flex flex-col sm:flex-row justify-between pl-4 md:pl-12 pr-4 md:pr-12 pt-4 md:pt-0 pb-4 md:pb-4 bg-stone-950">
      {stats.map((stat) => {
        return (
          <div
            key={stat.title}
            className="flex flex-col gap-4 p-6 md:p-8 text-white"
          >
            {/* <h3 className="justify-start text-yellow-400 text-5xl font-bold">
              {stat.value}
            </h3> */}
            <HTMLContent
              value={stat.value}
              measurement={stat.measurement && stat.measurement}
            />
            <p className="justify-start text-white text-xl font-medium">
              {stat.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// Framer Motion Animation
function HTMLContent({ value, measurement }) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, value, { duration: 5 });
    return () => controls.stop();
  }, []);

  return (
    <span className="flex flex-row gap-2 justify-start text-yellow-400 text-5xl font-bold">
      <motion.pre>{rounded}</motion.pre>
      <p>{measurement ? `${measurement}+` : "+"}</p>
    </span>
  );
}

export default Stats;
