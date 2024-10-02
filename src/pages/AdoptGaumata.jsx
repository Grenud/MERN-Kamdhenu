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
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;
  const totalPagesList = []

  useEffect(() => {
    fetchItems();
  }, [page, gender, sick, adoption, old]);

  useEffect(() => {
    fetchTotalPages()
  }, [])

  const fetchTotalPages = async () => {
    try {
      const { data } = await axios.get('/api/cattle/get-pages');
      setTotalPages((page) => page = data.noOfPages)
      for(let i=1;i<totalPages;i++){
        totalPagesList.push(i)
      }
    } catch (error) {
      setTotalPages((page)=>page=0)
    }
  }

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
              <Link to={`/gaumata/${item.id}`}>
              <CowCard
                imgSrc={item.cover_photo__c ?? dummyCow}  // Replace with a dynamic image source if available
                name={item.name}
                key={item.id}
                className="hover:shadow-lg transition-shadow duration-300"
              />
              </Link>
            ))}
        </section>
      ) : (
        <Loading />
      )}

      {/* Pagination */}
      {/* Pagination */}
<nav aria-label="Page navigation example" className="mt-8">
  <ul className="flex items-center justify-center space-x-2">
    <li>
      <button
        onClick={() => setPage((page) => page - 1)}
        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
        disabled={page === 1}
      >
        Previous
      </button>
    </li>

    {/* Show the first page */}
    {page > 4 && (
      <>
        <li>
          <button
            onClick={() => setPage(1)}
            className={`flex items-center justify-center px-4 h-10 leading-tight border ${
              page === 1
                ? "text-blue-600 bg-blue-50 border-blue-300"
                : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            1
          </button>
        </li>
        <li>...</li>
      </>
    )}

    {/* Show 3 previous pages */}
    {Array.from({ length: 3 }, (_, index) => {
      const pageNumber = page - 3 + index;
      if (pageNumber > 1) {
        return (
          <li key={pageNumber}>
            <button
              onClick={() => setPage(pageNumber)}
              className={`flex items-center justify-center px-4 h-10 leading-tight border ${
                page === pageNumber
                  ? "text-blue-600 bg-blue-50 border-blue-300"
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {pageNumber}
            </button>
          </li>
        );
      }
      return null;
    })}

    {/* Show current page */}
    <li>
      <button
        className="flex items-center justify-center px-4 h-10 leading-tight text-blue-600 bg-blue-50 border border-blue-300"
      >
        {page}
      </button>
    </li>

    {/* Show 3 next pages */}
    {Array.from({ length: 3 }, (_, index) => {
      const pageNumber = page + index + 1;
      if (pageNumber < totalPages) {
        return (
          <li key={pageNumber}>
            <button
              onClick={() => setPage(pageNumber)}
              className={`flex items-center justify-center px-4 h-10 leading-tight border ${
                page === pageNumber
                  ? "text-blue-600 bg-blue-50 border-blue-300"
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {pageNumber}
            </button>
          </li>
        );
      }
      return null;
    })}

    {/* Show the last page */}
    {page < totalPages - 3 && (
      <>
        <li>...</li>
        <li>
          <button
            onClick={() => setPage(totalPages)}
            className={`flex items-center justify-center px-4 h-10 leading-tight border ${
              page === totalPages
                ? "text-blue-600 bg-blue-50 border-blue-300"
                : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            {totalPages}
          </button>
        </li>
      </>
    )}

    <li>
      <button
        onClick={() => setPage((page) => page + 1)}
        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
        disabled={page === totalPages}
      >
        Next
      </button>
    </li>
  </ul>
</nav>

    </section>
  );
}

export default AdoptGaumata;