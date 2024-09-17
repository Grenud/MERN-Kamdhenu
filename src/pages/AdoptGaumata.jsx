import { useEffect, useState } from "react";
import CowCard from "../component/CowCard";
import axios from "axios";
import Loading from "../component/Loading";
import { Link } from "react-router-dom";
import dummyCow from '../assets/cowcover4.png';

function AdoptGaumata() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [sick, setSick] = useState("");
  const [adoption, setAdoption] = useState("");
  const [old, setOld] = useState("");
  const [loading, setLoading] = useState(false);
  const limit = 10;

  useEffect(() => {
    fetchItems();
  }, [page, gender, sick, adoption, old]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/cattle/get-cattle`, {
        params: {
          page,
          limit,
          gender__c: gender,
          sick__c: sick,
          adoption_status__c: adoption,
          old__c: old,
        },
      });
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error while fetching items", error.message);
    }
  };

  return (
    <section className="min-h-screen main-container my-5">
      {/* Filter Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        <div className="bg-green-800 p-3 flex gap-2 items-center text-light rounded-sm">
          <label className="tracking-wide text-white">Gender</label>
          <select
            className=" text-white py-1 px-2 outline-none transition-all duration-300 w-full h-full bg-green-700"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="bg-green-800 p-3 flex gap-2 items-center text-light rounded-sm">
          <label className="tracking-wide">Sick</label>
          <select
            className=" text-white py-1 px-2 w-full h-full bg-green-700 outline-none transition-all duration-300"
            value={sick}
            onChange={(e) => setSick(e.target.value)}
          >
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="bg-green-800 p-3 rounded-sm flex gap-2 items-center text-light">
          <label className="tracking-wide">Adoption</label>
          <select
            className=" text-white py-1 px-2 w-full h-full bg-green-700 outline-none transition-all duration-300"
            value={adoption}
            onChange={(e) => setAdoption(e.target.value)}
          >
            <option value="">All</option>
            <option value="Adopted">Adopted</option>
            <option value="Not Adopted">Not Adopted</option>
          </select>
        </div>
        <div className="bg-green-800 p-3 rounded-sm flex gap-2 items-center text-light">
          <label className="tracking-wide">Old</label>
          <select
            className=" text-white py-1 px-2 w-full h-full bg-green-700 outline-none transition-all duration-300"
            value={old}
            onChange={(e) => setOld(e.target.value)}
          >
            <option value="">All</option>
            <option value="true">Old</option>
            <option value="false">Not old</option>
          </select>
        </div>
      </section>

      <h1 className="text-3xl font-bold tracking-wide text-center text-primary mb-8">
        Adopt Gaumatas
      </h1>

      {/* Cow List Section */}
      {!loading ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.length > 0 &&
            items?.map((item) => (
              <CowCard
                imgSrc={item.cover_photo__c ?? dummyCow}  // Replace with a dynamic image source if available
                name={item.name}
                key={item.id}
                id={item.id}
                className="hover:shadow-lg transition-shadow duration-300"
              />
            ))}
        </section>
      ) : (
        <Loading />
      )}

      {/* Pagination */}
      <div className="flex gap-4 mt-12 justify-center">
        <button
          className={`w-32 h-10 rounded-full font-semibold border-2 border-gray-300 text-green-800 
            ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800 hover:text-white transition-all duration-300'}`}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="w-32 h-10 rounded-full font-semibold border-2 border-light text-green-800 hover:bg-green-800 hover:text-white transition-all duration-300"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default AdoptGaumata;
