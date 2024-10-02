import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../component/Loading";
import dummyCow from "../assets/cowcover4.png";
import AdminPopup from "../component/AdminPopup";

function AdminDashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCattle, setSelectedCattle] = useState(null);
  const [newCattle, setNewCattle] = useState({
    name: "",
    gender: "",
    sick: "",
    adoption_status: "",
    old: "",
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/cattle/get-cattle");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching cattle", error);
    } finally {
      setLoading(false);
    }
  };

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
      gender: cattle.gender,
      sick: cattle.sick,
      adoption_status: cattle.adoption_status,
      old: cattle.old,
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
            value={newCattle.name}
            onChange={(e) => setNewCattle({ ...newCattle, name: e.target.value })}
            className="p-2 rounded bg-gray-100"
          />
          <select
            value={newCattle.gender}
            onChange={(e) => setNewCattle({ ...newCattle, gender: e.target.value })}
            className="p-2 rounded bg-gray-100"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            value={newCattle.sick}
            onChange={(e) => setNewCattle({ ...newCattle, sick: e.target.value })}
            className="p-2 rounded bg-gray-100"
          >
            <option value="">Sick</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select
            value={newCattle.adoption_status}
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

      {/* Cattle List */}
      {!loading ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.length > 0 &&
            items.map((item) => (
              <AdminPopup
                key={item.id}
                imgSrc={item.cover_photo__c || dummyCow}
                id={item.id}
                name={item.name}
                onClick={() => handleCardClick(item)} // Show popup on image click
              />
            ))}
        </section>
      ) : (
        <Loading />
      )}

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
        <p className="text-gray-600 mb-2">Gender: {selectedCattle.gender}</p>
        <p className="text-gray-600 mb-2">Status: {selectedCattle.sick ? "Sick" : "Healthy"}</p>
        <p className="text-gray-600 mb-2">Adoption Status: {selectedCattle.adoption_status}</p>
        <p className="text-gray-600">Age: {selectedCattle.old} years</p>
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
          value={newCattle.gender}
          onChange={(e) => setNewCattle({ ...newCattle, gender: e.target.value })}
          className="p-2 rounded bg-green-700 text-white"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          value={newCattle.sick}
          onChange={(e) => setNewCattle({ ...newCattle, sick: e.target.value })}
          className="p-2 rounded bg-green-700 text-white"
        >
          <option value="">Sick</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select
          value={newCattle.adoption_status}
          onChange={(e) => setNewCattle({ ...newCattle, adoption_status: e.target.value })}
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
