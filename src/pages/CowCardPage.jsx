import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdoptNow from "../component/AdoptNow";
import { memberShipStatus } from "../data/tableData";
import { useSelector } from "react-redux";

function CowCardPage() {
  const { id } = useParams();
  const [showTable, setShowTable] = useState(true);
  const [resp, setResp] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { user } = useSelector((state) => state.Auth);

  // useCallback to memoize the fetch function
  const fetchGaumataData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/cattle/get-cattle/${id}`);
      setResp(res.data.rows.length > 0 ? res.data.rows[0] : null);
    } catch (error) {
      setError("Failed to fetch data");
      setResp(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchGaumataData();
  }, [fetchGaumataData]);

  // Memoize the table data to prevent recalculation on every render
  const membershipTable = useMemo(() => (
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
  ), []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="main-container mx-auto p-4 sm:p-8">
      <h1 className="font-bold text-black text-4xl mt-20 mb-8 text-center">
        Help us to Care Shraddha Gaumata
      </h1>
      
      <img
        src={
          resp?.image_1__c ||
          "https://images.pexels.com/photos/457447/pexels-photo-457447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        className="w-full h-[70vh] object-cover rounded-lg mx-auto shadow-md"
        alt="Gaumata"
      />

      {/* Details */}
      <section className="flex flex-col gap-2 my-4 text-lg text-gray-700">
        <h3 className="font-semibold tracking-wider">
          Name: {resp?.name || "No data found"}
        </h3>
        <h3>Gender: {resp?.gender__c || "No data found"}</h3>
        <h3>Adoption Status: {resp?.adoption_status__c || "No data found"}</h3>
        <h3>Age: {resp?.age__c || "No data found"}</h3>
        <h3>Sick: {resp?.sick__c ? "Sicked" : "Not Sicked"}</h3>
        <h3>Status: {resp?.status || "No data found"}</h3>
        <h3>Is old: {resp?.old__c ? "Yes" : "No"}</h3>
      </section>

      {/* Adopt Button that triggers modal */}
      {resp?.id && (
        <button
          onClick={() => setShowModal(true)}
          className="bg-secondary text-white w-32 h-10 rounded-full shadow-lg hover:bg-secondary-dark transition-colors duration-200 ease-in-out mx-auto"
        >
          Adopt Now
        </button>
      )}

      {/* Modal */}
      <AdoptNow showModal={showModal} closeModal={() => setShowModal(false)} cattleId={resp?.id} />

      <div className="flex justify-center mt-10 space-x-8">
        <div className="relative group">
          <a
            href="#description"
            className={`text-lg ${showTable ? "text-black" : "text-gray-500"} transition-all`}
            onClick={() => setShowTable(true)}
          >
            DESCRIPTION
          </a>
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
        </div>
        <div className="relative group">
          <a
            href="#donors"
            className={`text-lg ${!showTable ? "text-black" : "text-gray-500"} transition-all`}
            onClick={() => setShowTable(false)}
          >
            DONORS <span className="text-gray-500">(0)</span>
          </a>
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
        </div>
      </div>

      {/* Conditional Rendering */}
      <section className="my-10">
        {showTable ? (
          <div className="w-full overflow-x-scroll">
            <h4 className="text-xl mb-4 text-center">
              Support and reward options for our sponsoring partners
            </h4>
            {membershipTable}
          </div>
        ) : (
          <div className="my-10 text-center text-gray-500">No donors to display</div>
        )}
      </section>
    </div>
  );
}

export default CowCardPage;
