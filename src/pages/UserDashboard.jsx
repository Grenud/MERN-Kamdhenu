import { useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";
import axios from 'axios';

const UserDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("general");
  const { user } = useSelector((state) => state.Auth);
  const [donations, setDonations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchDonations = async (page = 1) => {
    setLoading(true); // Set loading to true when fetching data
    try {
      const { data } = await axios.get(`/api/payment/user/${user._id}/donations?page=${page}`);
      setDonations(data?.donations || []);
      setTotalPages(data?.totalPages || 1);
    } catch (error) {
      console.error(error.message);
      setDonations([]);
      alert("Failed to fetch donations. Please try again later."); // User feedback
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    fetchDonations(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-6 my-10 text-black">
      <h2 className="font-bold py-3 mb-4 mt-10">User Dashboard</h2>
      <div className="bg-white shadow-lg overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <div className="list-group flex flex-col space-y-10 bg-gray-100 rounded-md">
              <button
                className={`block p-4 cursor-pointer ${selectedTab === "general" ? "font-bold text-gray-900" : ""}`}
                onClick={() => setSelectedTab("general")}
              >
                General
              </button>
              <button
                className={`block p-4 cursor-pointer ${selectedTab === "donation" ? "font-bold text-gray-900" : ""}`}
                onClick={() => setSelectedTab("donation")}
              >
                Donations
              </button>
              <button
                className={`block p-4 cursor-pointer ${selectedTab === "order" ? "font-bold text-gray-900" : ""}`}
                onClick={() => setSelectedTab("order")}
              >
                Previous Orders
              </button>
            </div>
          </div>

          <div className="col-span-9 mx-10">
            {selectedTab === "general" && (
              <div id="account-general">
                <div className="mt-4">
                  <label className="block text-sm font-bold mb-3">Username</label>
                  <h2 className='mb-2'>{user.name + "@321"}</h2>
                  <label className="block text-sm font-bold mb-3">Name</label>
                  <h2 className='mb-2'>{user.name}</h2>
                  <label className="block text-sm font-bold mb-2">E-mail</label>
                  <h2>{user.email}</h2>
                  <div className="text-green-600 bg-green-100 p-2 mt-2">
                    Your email is confirmed. Please check your inbox.
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "donation" && (
              <div id="account-donations">
                <h2 className="text-xl font-semibold mb-4">Previous Donations</h2>
                {loading ? (
                  <p>Loading donations...</p>
                ) : donations.length === 0 ? (
                  <p>No donations found.</p>
                ) : (
                  donations.map((donation,i) => (
                    <div key={i} className="p-4 border rounded-md shadow-sm flex items-center space-x-4 bg-gray-50">
                      <div className="w-24 h-24">
                        {donation.cover_photo__c ? (
                          <img
                            src={donation.cover_photo__c}
                            alt={donation.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        ) : (
                          <div className="bg-gray-300 w-full h-full rounded-md flex items-center justify-center text-gray-500">
                            No Image
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{donation.name}</h3>
                        <p className="text-sm">Order ID: {donation.order_id}</p>
                        <p className="text-sm">Amount: ₹{donation.amount}</p>
                        <p className="text-sm">Status: {donation.status}</p>
                        <p className="text-sm">Date: {new Date(donation.created_at).toLocaleString()}</p>
                      </div>
                    </div>
                  ))
                )}
                <div className="flex justify-between items-center mt-6">
                  <button
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {selectedTab === "order" && (
              <div id="account-orders">
                <h2>Previous Orders</h2>
              </div>
            )}
          </div>
        </div>
        <div className="text-right p-4 bg-gray-100">
          <button className="btn bg-green-700 hover:bg-green-800 text-white p-2 rounded">Save changes</button>
          <button className="btn bg-gray-500 text-white p-2 rounded ml-2">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
