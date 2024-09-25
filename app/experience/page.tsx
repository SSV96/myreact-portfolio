import React from "react";

const ExperienceItem = ({ title, company, period, description }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-lg text-indigo-600">{company}</p>
    <p className="text-sm text-gray-600 mb-2">{period}</p>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Developer",
      company: "Tech Innovators Inc.",
      period: "2020 - Present",
      description:
        "Led development of scalable microservices architecture, optimized database performance, and implemented CI/CD pipelines.",
    },
    {
      title: "Backend Developer",
      company: "Data Systems LLC",
      period: "2018 - 2020",
      description:
        "Developed RESTful APIs, integrated third-party services, and improved system efficiency by 40%.",
    },

    {
      title: "Backend Developer",
      company: "Data Systems LLC",
      period: "2018 - 2020",
      description:
        "Developed RESTful APIs, integrated third-party services, and improved system efficiency by 40%.",
    },
    {
      title: "Backend Developer",
      company: "Data Systems LLC",
      period: "2018 - 2020",
      description:
        "Developed RESTful APIs, integrated third-party services, and improved system efficiency by 40%.",
    },
    {
      title: "Backend Developer",
      company: "Data Systems LLC",
      period: "2018 - 2020",
      description:
        "Developed RESTful APIs, integrated third-party services, and improved system efficiency by 40%.",
    },
    // Add more experiences as needed
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Professional Experience
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

export default Experience;
