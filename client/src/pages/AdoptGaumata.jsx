import { useEffect, useState } from "react";
import CowCard from "../component/CowCard";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function Test() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [sick, setSick] = useState("");
  const [adoption, setAdoption] = useState("");
  const [old, setOld] = useState("");
  const limit = 10;
  useEffect(() => {
    console.log(page,gender,sick,adoption,old)
    fetchItems();
  }, [page, gender, sick, adoption, old]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${API_KEY}/cattle/get-cattle`, {
        params: {
          page,
          limit,
          gender__c:gender,
          sick__c:sick,
          adoption_status__c:adoption,
          old__c:old,
        },
      });
      console.log(response.data)
      setItems(response.data);
    } catch (error) {
      console.log("Error while fetching items", error.message);
    }
  };



  return (
    <section className="min-h-screen main-container my-5">
      <section>
        <div>
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Sick</label>
          <select value={sick} onChange={(e) => setSick(e.target.value)}>
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label>Adoption</label>
          <select value={adoption} onChange={(e) => setAdoption(e.target.value)}>
            <option value="">All</option>
            <option value="Adopted">Adopted</option>
            <option value="Not Adopted">Not Adopted</option>
          </select>
        </div>
        <div>
          <label>Old</label>
          <select value={old} onChange={(e) => setOld(e.target.value)}>
            <option value="">All</option>
            <option value="true">Old</option>
            <option value="false">Not old</option>
          </select>
        </div>
      </section>
      <h1 className="text-3xl font-bold tracking-wide text-center my-4">
        Adopt Gaumatas
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <CowCard imgSrc={item.cover_photo__c} key={item.id} />
        ))}
      </section>
      <div className="flex gap-3 my-12 w-full items-center justify-center">
        <div>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </section>
  );
}

export default Test;
