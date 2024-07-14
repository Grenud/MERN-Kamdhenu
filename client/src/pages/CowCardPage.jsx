import React, { useState } from "react";
import Gaumata from "../assets/Gaumata1.jpeg";
import Button from "../component/Button";
import { memberShipStatus } from "../data/tableData";

function CowCardPage() {
  const [showTable, setShowTable] = useState(true);

  const handleDescriptionClick = () => {
    setShowTable(true);
  };

  const handleDonorsClick = () => {
    setShowTable(false);
  };

  return (
    <div className="main-container">
      <h1 className="font-bold text-black text-4xl mt-20 mb-12">
        Help us to Care Shraddha Gaumata
      </h1>
      <img src={Gaumata} className="w-100 mx-auto object-cover" alt="Gaumata" />
      <Button btnText={"Donate Now"} className="mt-5" />

      <div className="flex justify-start mt-20 space-x-8">
        <div className="relative group">
          <a
            href="#description"
            className="text-lg text-black"
            onClick={handleDescriptionClick}
          >
            DESCRIPTION
          </a>
          <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 transform -translate-x-1/2 group-hover:w-full"></span>
        </div>
        <div className="relative group">
          <a
            href="#donors"
            className="text-lg text-black"
            onClick={handleDonorsClick}
          >
            DONORS <span className="text-gray-500">(0)</span>
          </a>
          <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-500 transform -translate-x-1/2 group-hover:w-full"></span>
        </div>
      </div>

      {showTable ? (
        <section className="w-full overflow-x-scroll my-10">
          <h4 className="text-xl mb-4">
            Support and reward options for our sponsoring partners
          </h4>
          <table className="table-auto overflow-scroll bg-gray-200 border-accent2 border-2 text-neutral-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 bg-gray-200">GUARDIANSHIP OF A COW</th>
                <th className="p-4 bg-white">WHITE custom amount</th>
                <th className="p-4 bg-green-800">GREEN 1 month</th>
                <th className="p-4 bg-orange-600">BRONZE 3 months</th>
                <th className="p-4 bg-slate-400">SILVER 6 months</th>
                <th className="p-4 bg-yellow-600">GOLD 1 year*</th>
                <th className="p-4 bg-slate-400">PLATINUM 5 years*</th>
                <th className="p-4 bg-sky-400">DIAMOND for life*</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">Donation amount, Rupee</td>
                <td className="p-4">from 1000</td>
                <td className="p-4">4 900.00</td>
                <td className="p-4">14 500.00</td>
                <td className="p-4">28 700.00</td>
                <td className="p-4">57 250.00</td>
                <td className="p-4">286 130.00</td>
                <td className="p-4">1 431 000.00</td>
              </tr>
              {memberShipStatus.map((data, index) => (
                <tr key={index}>
                  <td className="p-4">{data.d1}</td>
                  <td className="p-4">{data.d2 ? "✔" : ""}</td>
                  <td className="p-4">{data.d3 ? "✔" : ""}</td>
                  <td className="p-4">{data.d4 ? "✔" : ""}</td>
                  <td className="p-4">{data.d5 ? "✔" : ""}</td>
                  <td className="p-4">{data.d6 ? "✔" : ""}</td>
                  <td className="p-4">{data.d7 ? "✔" : ""}</td>
                  <td className="p-4">{data.d8 ? "✔" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : (
        <div className="my-10">No data to display</div>
      )}
    </div>
  );
}

export default CowCardPage;
