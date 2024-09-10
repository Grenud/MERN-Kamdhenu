import { useEffect, useState } from "react";
import CowCard from "../component/CowCard";
import axios from "axios";
import Loading from "../component/Loading";
import { Link } from "react-router-dom";
import dummyCow from '../assets/cowcover4.png'

function AdoptGaumata() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [sick, setSick] = useState("");
  const [adoption, setAdoption] = useState("");
  const [old, setOld] = useState("");
  const [loading,setLoading] = useState(false)
  const limit = 10;
  useEffect(() => {
    fetchItems();
  }, [page, gender, sick, adoption, old]);

  const fetchItems = async () => {
    setLoading(true)
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
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log("Error while fetching items", error.message);
    }
  };

  return (
    <section className="min-h-screen main-container my-5">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        <div className="bg-secondary py-2 px-3 flex gap-2">
          <label className="text-light tracking-wide">Gender</label>
          <select className="bg-light outline-none" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="bg-secondary py-2 px-3 flex gap-2">
          <label className="text-light tracking-wide">Sick</label>
          <select className="bg-light outline-none" value={sick} onChange={(e) => setSick(e.target.value)}>
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="bg-secondary py-2 px-3 flex gap-2">
          <label className="text-light tracking-wide">Adoption</label>
          <select
            value={adoption}
            onChange={(e) => setAdoption(e.target.value)}
             className="bg-light outline-none"
          >
            <option value="">All</option>
            <option value="Adopted">Adopted</option>
            <option value="Not Adopted">Not Adopted</option>
          </select>
        </div>
        <div className="bg-secondary py-2 px-3 flex gap-2">
          <label className="text-light tracking-wide">Old</label>
          <select className="bg-light outline-none" value={old} onChange={(e) => setOld(e.target.value)}>
            <option value="">All</option>
            <option value="true">Old</option>
            <option value="false">Not old</option>
          </select>
        </div>
      </section>
      <h1 className="text-3xl font-bold tracking-wide text-center my-4">
        Adopt Gaumatas
      </h1>
      {!loading ? <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.length>0 && items?.map((item) => (
          <CowCard imgSrc={"https://images.pexels.com/photos/457447/pexels-photo-457447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} name={item.name} key={item.id} id={item.id} />
        ))}
      </section> : <Loading/>}
      <div className="flex gap-3 my-12 w-full items-center justify-center">
        <div className="w-full flex gap-4 justify-center items-center">
          <button className="w-32 h-10 bg-light flex items-center justify-center font-semibold border-light hover:bg-secondary hover:text-light duration-300 border-2" onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <button className="w-32 h-10 bg-light flex items-center justify-center font-semibold border-light hover:bg-secondary hover:text-light duration-300 border-2" onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </section>
  );
}

export default AdoptGaumata;
