import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, altText }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img
        src={`../assets/${projectTitle}.jpg`}
        alt={altText || projectTitle}
        className="w-full h-auto object-cover object-center"
        style={{ width: "600px", maxHeight: "250px" }}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">PROJECTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-yellow
              max-w-[1000px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Data Analysis
          </div>
          <Project
            title="KMeans Cluster Analysis"
            description="Customer Segmentation with KMeans Clustering for Targeted Marketing Strategies in Supermarket Malls"
          />
          <Project
            title="Cluster Analysis"
            description="R Project based on the Cluster Analysis of the Food Price Trajectories and Demographic Segmentation in the Philippines"
          />

          {/* ROW 2 */}
          <Project
            title="Sentiment Analysis"
            description="Assessed Model Performance using Multinomial Naive Bayes on the IMDB Movie Reviews Dataset"
          />
          <Project
            title="Web-based Inventory and Sales Forecasting"
            description="Time Series Algorithm (ARIMA) for a Web-based Inventory and Sales Forecasting System"
          />
          <Project
            title="UI/UX Design for Inventory Management Mobile Application System"
            description="Designed the User Interface and Experience for a Mobile App Focused on Inventory Management"
          />

          {/* ROW 3 */}
          <Project
            title="UI/UX Design for Van-Reservation Mobile Application System"
            description="Designed the Mobile App Interface for Efficient Van Reservation, Ensuring a User-friendly Experience for Passengers in Choosing and Managing their Preferred Seats"
          />
          {/* <Project title="Project 7" description="Description for Project 7" /> */}
          <div
            className="flex justify-center text-center items-center p-20 bg-blue
              max-w-[1000px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Web Design and Development
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
