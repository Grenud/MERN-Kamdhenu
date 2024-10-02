import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../component/Loading";
import dummyCow from "../assets/cowcover4.png";
import CowCard from "../component/CowCard";

function AdminDashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCattle, setSelectedCattle] = useState(null);
  const [newCattle, setNewCattle] = useState({
    name: "",
    gender__c: "",
    sick__c: "",
    adoption_status__c: "",
    old__c: "",
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreateCattle = async () => {
    try {
      const response = await axios.post("/api/cattle/create", newCattle);
      setItems([...items, response.data]);
      setNewCattle({ name: "", gender: "", sick: "", adoption_status: "", old: "" });
    } catch (error) {
      console.error("Error creating cattle", error);
    }
  };

  const handleDeleteCattle = async (id) => {
    try {
      await axios.delete(`/api/cattle/delete/${id}`);
      setItems(items.filter((item) => item.id !== id));
      setSelectedCattle(null);
    } catch (error) {
      console.error("Error deleting cattle", error);
    }
  };

  const handleOpenUpdatePopup = (cattle) => {
    setSelectedCattle(cattle);
    setNewCattle({
      name: cattle.name,
      gender__c: cattle.gender__c,
      sick__c: cattle.sick__c,
      adoption_status__c: cattle.adoption_status__c,
      old__c: cattle.old__c,
    });
  };

  const handleUpdateCattle = async () => {
    try {
      await axios.put(`/api/cattle/update/${selectedCattle.id}`, newCattle);
      setItems(
        items.map((item) => (item.id === selectedCattle.id ? { ...item, ...newCattle } : item))
      );
      setSelectedCattle(null);
    } catch (error) {
      console.error("Error updating cattle", error);
    }
  };

  const handleCardClick = (cattle) => {
    handleOpenUpdatePopup(cattle); // Opens the popup without navigating
  };


  // --------------------------------------------------
  // const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [sick, setSick] = useState("");
  const [adoption, setAdoption] = useState("");
  const [old, setOld] = useState("");
  // const [loading, setLoading] = useState(false);
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
      for (let i = 1; i < totalPages; i++) {
        totalPagesList.push(i)
      }
    } catch (error) {
      setTotalPages((page) => page = 0)
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
  // --------------------------------------------------

  return (
    <section className="container mt-28 mx-auto px-6 md:px-10 lg:px-16 min-h-screen mb-10">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

      {/* Create New Cattle Form */}
      <section className="bg-green-800 p-5 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4 text-white">Create New Cattle</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <input
            type="text"
            placeholder="Cattle Name"
            value=""
            onChange={(e) => setNewCattle({ ...newCattle, name: e.target.value })}
            className="p-2 rounded bg-gray-100"
          />
          <select
            value=""
            onChange={(e) => setNewCattle({ ...newCattle, gender: e.target.value })}
            className="p-2 rounded bg-gray-100"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            value=""
            onChange={(e) => setNewCattle({ ...newCattle, sick: e.target.value })}
            className="p-2 rounded bg-gray-100"
          >
            <option value="">Sick</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select
            value=""
            onChange={(e) => setNewCattle({ ...newCattle, adoption_status: e.target.value })}
            className="p-2 rounded bg-gray-100"
          >
            <option value="">Adoption Status</option>
            <option value="Adopted">Adopted</option>
            <option value="Not Adopted">Not Adopted</option>
          </select>
        </div>
        <button
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
          onClick={handleCreateCattle}
        >
          Add Cattle
        </button>
      </section>
      {/* -----------------Cow listing------------------------- */}
      <section className="min-h-screen my-5">
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
                <div key={item.id} onClick={() => handleCardClick(item)} // Show popup on image click
                >
                  <CowCard
                    imgSrc={item.cover_photo__c ?? dummyCow}  // Replace with a dynamic image source if available
                    name={item.name}
                    key={item.id}
                    className="hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
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

            {/* Show 3 previous pages */}
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

            {/* Show the last page */}
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
      {/* ---------------------cow listing end--------------------- */}

      {/* Update Cattle Popup */}
      {selectedCattle && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4 md:p-0">
          <div className="relative bg-white p-4 sm:p-5 rounded shadow-lg w-full sm:max-w-lg md:max-w-2xl h-[84vh] md:h-auto overflow-y-auto "> {/* Added relative positioning */}
            {/* Close button */}
            <button
              className="absolute top-2 right-4 text-gray-600 hover:text-gray-700"
              onClick={() => setSelectedCattle(null)}
            >
              <span className="text-3xl">&times;</span>
            </button>

            {/* Popup content */}
            <h2 className="text-xl font-bold mb-4">Update Cattle</h2>
            <div className="mb-4">
              <img
                src={selectedCattle.cover_photo__c || dummyCow}
                alt={selectedCattle.name}
                className="w-full h-52 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{selectedCattle.name}</h3>
              <p className="text-gray-600 mb-2">Gender: {selectedCattle.gender__c}</p>
              <p className="text-gray-600 mb-2">Status: {selectedCattle.sick__c ? "Sick" : "Healthy"}</p>
              <p className="text-gray-600 mb-2">Adoption Status: {selectedCattle.adoption_status__c}</p>
              <p className="text-gray-600">Age: {selectedCattle.old__c} years</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-3 gap-2 mb-5">
              <input
                type="text"
                placeholder="Cattle Name"
                value={newCattle.name}
                onChange={(e) => setNewCattle({ ...newCattle, name: e.target.value })}
                className="p-2 rounded bg-white text-gray-600 border-2"
              />
              <select
                value={newCattle.gender__c}
                onChange={(e) => setNewCattle({ ...newCattle, gender__c: e.target.value })}
                className="p-2 rounded bg-green-700 text-white"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select
                value={newCattle.sick__c}
                onChange={(e) => setNewCattle({ ...newCattle, sick__c: e.target.value })}
                className="p-2 rounded bg-green-700 text-white"
              >
                <option value="">Sick</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              <select
                value={newCattle.adoption_status__c}
                onChange={(e) => setNewCattle({ ...newCattle, adoption_status__c: e.target.value })}
                className="p-2 rounded bg-green-700 text-white"
              >
                <option value="">Adoption Status</option>
                <option value="Adopted">Adopted</option>
                <option value="Not Adopted">Not Adopted</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleUpdateCattle}>
                Update
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={() => handleDeleteCattle(selectedCattle.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default AdminDashboard;
