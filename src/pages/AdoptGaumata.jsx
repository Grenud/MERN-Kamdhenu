import { useEffect, useState, useCallback, useMemo } from "react";
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

  // Memoize totalPagesList using useMemo
  const totalPagesList = useMemo(() => {
    const list = [];
    for (let i = 1; i <= totalPages; i++) {
      list.push(i);
    }
    return list;
  }, [totalPages]);

  useEffect(() => {
    fetchItems();
  }, [page, gender, sick, adoption, old]);

  useEffect(() => {
    fetchTotalPages();
  }, []);

  // useCallback for fetching total pages
  const fetchTotalPages = useCallback(async () => {
    try {
      const { data } = await axios.get('/api/cattle/get-pages');
      setTotalPages(data.noOfPages);
    } catch (error) {
      setTotalPages(0);
    }
  }, []);

  // useCallback for fetching items
  const fetchItems = useCallback(async () => {
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
  }, [page, gender, sick, adoption, old]);

  return (
    <section className="min-h-screen main-container my-5">
      {/* Filter Section */}
      <h1 className="text-3xl font-bold tracking-wide text-center text-primary mb-8">
        Adopt Gaumatas
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {/* Gender Filter */}
        <div className="bg-white border-2 p-3 flex gap-2 items-center text-black rounded-sm">
          <label className="tracking-wide text-black">Gender</label>
          <select
            className="text-black py-1 px-2 outline-none transition-all duration-300 w-full h-full bg-gray-200"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Sick Filter */}
        <div className="bg-white border-2 p-3 flex gap-2 items-center text-black rounded-sm">
          <label className="tracking-wide">Sick</label>
          <select
            className="text-black py-1 px-2 w-full h-full bg-gray-200 outline-none transition-all duration-300"
            value={sick}
            onChange={(e) => setSick(e.target.value)}
          >
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Adoption Filter */}
        <div className="bg-white border-2 p-3 rounded-sm flex gap-2 items-center text-black">
          <label className="tracking-wide">Adoption</label>
          <select
            className="text-black py-1 px-2 w-full h-full bg-gray-200 outline-none transition-all duration-300"
            value={adoption}
            onChange={(e) => setAdoption(e.target.value)}
          >
            <option value="">All</option>
            <option value="Adopted">Adopted</option>
            <option value="Not Adopted">Not Adopted</option>
          </select>
        </div>

        {/* Old Filter */}
        <div className="bg-white border-2 p-3 rounded-sm flex gap-2 items-center text-black">
          <label className="tracking-wide">Old</label>
          <select
            className="text-black py-1 px-2 w-full h-full bg-gray-200 outline-none transition-all duration-300"
            value={old}
            onChange={(e) => setOld(e.target.value)}
          >
            <option value="">All</option>
            <option value="true">Old</option>
            <option value="false">Not old</option>
          </select>
        </div>
      </section>


      {/* Cow List Section */}
      {!loading ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.length > 0 &&
            items?.map((item) => (
              <Link to={`/gaumata/${item.id}`} key={item.id}>
                <CowCard imgSrc={item.cover_photo__c ?? dummyCow} name={item.name} />
              </Link>
            ))}
        </section>
      ) : (
        <Loading />
      )}

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

          {/* First Page */}
          {page > 4 && (
            <>
              <li>
                <button
                  onClick={() => setPage(1)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight border ${page === 1
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

          {/* Previous 3 Pages */}
          {Array.from({ length: 3 }, (_, index) => {
            const pageNumber = page - 3 + index;
            if (pageNumber > 1) {
              return (
                <li key={pageNumber}>
                  <button
                    onClick={() => setPage(pageNumber)}
                    className={`flex items-center justify-center px-4 h-10 leading-tight border ${page === pageNumber
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

          {/* Current Page */}
          <li>
            <button className="flex items-center justify-center px-4 h-10 leading-tight text-blue-600 bg-blue-50 border border-blue-300">
              {page}
            </button>
          </li>

          {/* Next 3 Pages */}
          {Array.from({ length: 3 }, (_, index) => {
            const pageNumber = page + index + 1;
            if (pageNumber < totalPages) {
              return (
                <li key={pageNumber}>
                  <button
                    onClick={() => setPage(pageNumber)}
                    className={`flex items-center justify-center px-4 h-10 leading-tight border ${page === pageNumber
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

          {/* Last Page */}
          {page < totalPages - 3 && (
            <>
              <li>...</li>
              <li>
                <button
                  onClick={() => setPage(totalPages)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight border ${page === totalPages
                    ? "text-blue-600 bg-blue-50 border-blue-300"
                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                >
                  {totalPages}
                </button>
              </li>
            </>
          )}

          {/* Next */}
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

function CowCardWithLoading({ imgSrc, name }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      {isLoading ? (
        <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
      ) : (
        <img
          className="w-full h-64 object-cover"
          src={imgSrc}
          alt={name}
          loading="lazy"
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
    </div>
  );
}

export default AdoptGaumata;
