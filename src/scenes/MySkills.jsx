import LineGradient from "../components/LineGradient";
// import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  // const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32 mb-10">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I specialize in transforming raw data into meaningful insights
            through a combination of technical skills and analytical thinking.
          </p>
        </motion.div>
        {/* 
        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div> */}
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">01</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3">
                Data Analysis
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Proficient in extracting insights with advanced SQL, utilizing
            Python for data analysis, and creating impactful visualizations,
            coupled with analytical thinking, problem-solving, and attention to
            detail for precise and reliable results.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">02</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3">
                Machine Learning
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Skilled in using Python for predictive modeling, applying stats for
            actionable insights, and designing models for predictive
            maintenance, with a focus on clear communication and problem-solving
            for optimal performance.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">03</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3">
                Data Management
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Experienced in handling MySQL, PostgreSQL, MongoDB databases,
            ensuring clean data with Excel, and supported by attention to
            detail, effective communication for streamlined processes, and
            efficient time management to meet project deadlines.
          </p>
        </motion.div>

        {/* Web Development */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">03</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3">
                Web Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-dark-grey absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Skilled in full-stack development with MERN Stack, with a focus on
            problem-solving, collaborative communication, and efficient time
            management for seamless web application delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
