import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Star icons

// Sample experiences with image URLs
const experiences = [
  {
    skill: "Node.js",
    rating: 4.0,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  }, // Replace with actual URLs
  {
    skill: "React",
    rating: 4.0,
    image:
      "https://logowik.com/content/uploads/images/react7473.logowik.com.webp",
  },
  {
    skill: "JavaScript",
    rating: 4.5,
    image: "https://getdrawings.com/free-icon/javascript-icon-57.png",
  },
  {
    skill: "CSS",
    rating: 3.0,
    image:
      "https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/css-development-icon-symbol-logo-vector-_624.png",
  },
  {
    skill: "HTML",
    rating: 3.0,
    image: "https://cdn-icons-png.freepik.com/512/1216/1216733.png",
  },
  {
    skill: "MongoDb",
    rating: 3.0,
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png",
  },
  {
    skill: "PostGres",
    rating: 3.0,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png",
  },
  {
    skill: "Kafka",
    rating: 3.0,
    image: "https://www.svgrepo.com/show/353950/kafka.svg",
  },
  {
    skill: "Mixpanel",
    rating: 3.0,
    image:
      "https://s3-us-west-1.amazonaws.com/upload.comparably.com/25671/companies/25671/logo_1681413720420.jpg",
  },
  {
    skill: "Aws",
    rating: 3.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCvfpm0wByUxj56q4saLutt2ZXRmOCn2hCTo7AjhdZiWWiRqTLyu39IaZjHIhMK-8CVw&usqp=CAU",
  },
  {
    skill: "Aws Lamda",
    rating: 3.0,
    image:
      "https://static-00.iconduck.com/assets.00/compute-awslambda-lambdafunction-icon-491x512-lj7r3nlo.png",
  },
];

const ExperienceItem = ({ skill, rating, image }) => {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? (
      <AiFillStar key={index} className="text-yellow-400" />
    ) : (
      <AiOutlineStar key={index} className="text-gray-300" />
    )
  );

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <img src={image} alt={skill} className="h-8 w-8 mr-4" />{" "}
        {/* Skill image */}
        <span className="text-lg font-semibold text-gray-800">{skill}</span>
      </div>
      <div className="flex items-center">{stars}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Skills
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
