import { useSelector } from 'react-redux';
import React, { useState } from "react";

const UserDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("general");
  const { user } = useSelector((state) => state.Auth)
  console.log(user)
  return (
    <div className="container mx-auto p-6 my-10 text-black ">

      <h2 className="font-bold py-3 mb-4">User DashBoard</h2>
      <div className="bg-white  shadow-lg overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <div className="list-group flex flex-col space-y-10  bg-gray-100 rounded-md">
              <a
                href="#account-general"
                className={`block p-4 cursor-pointer ${selectedTab === "general" ? "font-bold text-gray-900" : ""
                  }`}
                onClick={() => setSelectedTab("general")}
              >
                General
              </a>
              <a
                href="#account-info"
                className={`block p-4 cursor-pointer ${selectedTab === "info" ? "font-bold text-gray-900" : ""
                  }`}
                onClick={() => setSelectedTab("info")}
              >
                Donation
              </a>

              <a
                href="#account-connections"
                className={`block p-4 cursor-pointer ${selectedTab === "connections" ? "font-bold text-gray-900" : ""
                  }`}
                onClick={() => setSelectedTab("connections")}
              >
                Previous Orders
              </a>

            </div>
          </div>


          <div className="col-span-9 mx-10 ">
            {/* General Tab */}
            {selectedTab === "general" && (
              <div id="account-general">
                <div className="mt-4">
                  <label className="block text-sm font-bold mb-3">Username</label>
                  <h2 className='mb-2'>{user.name + "@321"}</h2>
                  <label className="block text-sm font-bold mb-3">Name</label>
                  <h2 className='mb-2'>{user.name}</h2>
                  <label className="block text-sm font-bold mb-2">E-mail</label>
                  <h2>{user.email}</h2>

                  <div className="text-green-600 bg-green-100 p-2 mt-2 ">
                    Your email is confirmed. Please check your inbox.
                  </div>
                </div>
              </div>
            )}
            {/*buttons*/}
          </div>
        </div>
        <div className="text-right p-4 bg-gray-100">
          <button className="btn bg-green-700 hover:bg-green-800 text-white p-2 rounded">
            Save changes
          </button>
          <button className="btn bg-gray-500 text-white p-2 rounded ml-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;






