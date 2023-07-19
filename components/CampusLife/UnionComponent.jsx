import React from "react";
import { Line } from "./PujaComponent.jsx";

const UnionComponent = ({ title, description, members, tabletitle }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full p-[64px] md:p-[32px] gap-8 text-gray-800 bg-white shadow-lg pin-r pin-y">
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="  uppercase text-3xl font-bold text-[#012454]">
              {title}
            </h1>
            <Line />
          </div>
          <p className="text-justify text-lg xl:text-lg md:text-sm text-[#484848]">
            {description}
          </p>
        </div>
        <div className="flex-1 flex  flex-col gap-3">
          <h1 className="text-2xl font-bold text-center text-[#012454]">
            {tabletitle}
          </h1>
          <div className="w-full py-4 overflow-y-auto">
            <table className="w-full text-left rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-3">S.N.</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Position</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="px-4 py-3 border text-[#484848">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border text-[#484848">
                      {member.name}
                    </td>
                    <td className="px-4 py-3 border text-[#484848">
                      {member.position}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnionComponent;
