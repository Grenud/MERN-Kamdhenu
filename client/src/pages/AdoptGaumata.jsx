import { useEffect, useState } from "react";
import CowCard from "../component/CowCard";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function AdoptGaumata() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const { data } = await axios.get(`${API_KEY}/cattle/get-cattle`);
      setItems(data.data.rows);
      setFilteredItems(data.data.rows);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    let res = [];

    if (name === "gender__c" && value === "All") {
      res = items;
    } else {
      res = items.filter((item) => {
        if (name === "sick__c" || name === "old__c") {
          return value === "true" ? item[name] : !item[name];
        }
        return item[name] === value;
      });
    }

    setFilteredItems(res);
    setPage(1); // Reset to first page on filter change
  };

  const paginatedItems = filteredItems.slice((page - 1) * 10, page * 10);

  return (
    <section className="min-h-screen main-container my-5">
      <section className="flex gap-4">
        {/* GENDER */}
        <div>
          <label>Gender</label>
          <div>
            <input
              type="radio"
              name="gender__c"
              value="Male"
              onChange={handleChange}
            />
            <label>Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender__c"
              value="Female"
              onChange={handleChange}
            />
            <label>Female</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender__c"
              value="All"
              onChange={handleChange}
            />
            <label>All</label>
          </div>
        </div>
        {/* SICK */}
        <div>
          <label>Sick</label>
          <div>
            <input
              type="radio"
              name="sick__c"
              value="true"
              onChange={handleChange}
            />
            <label>Yes</label>
          </div>
          <div>
            <input
              type="radio"
              name="sick__c"
              value="false"
              onChange={handleChange}
            />
            <label>No</label>
          </div>
        </div>
        {/* Adoption Status */}
        <div>
          <label>Adoption</label>
          <div>
            <input
              type="radio"
              name="adoption_status__c"
              value="Adopted"
              onChange={handleChange}
            />
            <label>Adopted</label>
          </div>
          <div>
            <input
              type="radio"
              name="adoption_status__c"
              value="Not Adopted"
              onChange={handleChange}
            />
            <label>Not Adopted</label>
          </div>
        </div>
        {/* OLD */}
        <div>
          <label>Old</label>
          <div>
            <input
              type="radio"
              name="old__c"
              value="true"
              onChange={handleChange}
            />
            <label>Yes</label>
          </div>
          <div>
            <input
              type="radio"
              name="old__c"
              value="false"
              onChange={handleChange}
            />
            <label>No</label>
          </div>
        </div>
      </section>
      <h1 className="text-3xl font-bold tracking-wide text-center my-4">
        Adopt Gaumatas
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedItems.map((item) => (
          <CowCard imgSrc={item.cover_photo__c} key={item.id} />
        ))}
      </section>
      <div className="flex gap-3 my-12 w-full items-center justify-center">
        <button
          className="bg-secondary w-36 h-10 hover:text-secondary hover:bg-light rounded-md duration-300"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="bg-secondary w-36 h-10 hover:text-secondary hover:bg-light rounded-md duration-300"
          onClick={() => handlePageChange(page + 1)}
          disabled={page * 10 >= filteredItems.length}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default AdoptGaumata;
