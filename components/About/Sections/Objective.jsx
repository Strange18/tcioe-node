import React from "react";

const ObjectivesComponent = ({ objectives, section }) => {
  return (
    <div className="p-6 bg-gradient-to-b from-[#012454] to-blue-900 text-white">
      <h1 className="text-2xl font-semibold mb-1">{section}</h1>
      <div className="h-1 w-[10rem] bg-[#f97a01] mb-8"></div>
      <ul className="list-disc space-y-3 ml-8 pl-4">
        {objectives.map((objective, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-[#f97a01]">↳</span>
            <p>{objective}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectivesComponent;
