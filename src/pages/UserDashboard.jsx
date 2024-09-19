import React from 'react';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const {user} = useSelector((state)=>state.Auth)
  console.log(user)
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    orders: [
      { id: 1, product: 'Laptop', date: '2024-09-15' },
      { id: 2, product: 'Smartphone', date: '2024-08-12' },
    ],
    donations: [
      {
        id: 1,
        name: "B14 Janardan",
        gender: "Male",
        adoptionStatus: "Not Adopted",
        images: [
          "https://bayava-test-bucket.s3.ap-southeast-2.amazonaws.com/Kamdhenu+Seva/Not+Adopted/Bulls/NA+Ashram+Bulls/B14+Janardan/main.JPG",
        ],
        donationDate: "2024-07-22",
      },
      {
        id: 2,
        name: "B15 Samatma",
        gender: "Male",
        adoptionStatus: "Not Adopted",
        images: [
          "https://bayava-test-bucket.s3.ap-southeast-2.amazonaws.com/Kamdhenu+Seva/Not+Adopted/Bulls/NA+Ashram+Bulls/B15+Samatma/main.JPG",
        ],
        donationDate: "2024-07-22",
      },
      // Add other donations similarly
    ],
  };

  return (
    <div className="p-8 bg-gray-100 text-primary min-h-screen pt-[15vh]">
      <h1 className="text-3xl font-bold mb-6 text-primary">User Dashboard</h1>

      <div className="bg-gray-300 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-2">User Info</h2>
        {user.name && <p className="text-lg"><span className="font-bold">Name:</span> {user.name}</p>}
        {user.email && <p className="text-lg"><span className="font-bold">Email:</span> {user.email}</p>}
      </div>

      <div className="bg-gray-300 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Previous Orders</h2>
        <ul className="">
          {userData.orders.map(order => (
            <li key={order.id} className="bg-gray-300 p-4 rounded-md">
              <p><span className="font-bold">Product:</span> {order.product}</p>
              <p><span className="font-bold">Order Date:</span> {order.date}</p>
              <hr className='bg-gray-500 h-[1px] border-0 mt-3'/>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Past Donations</h2>
        <ul className="">
          {userData.donations.map(donation => (
            <li key={donation.id} className="bg-gray-300 p-4 rounded-md">
              <p><span className="font-bold">Cow Name:</span> {donation.name}</p>
              <p><span className="font-bold">Gender:</span> {donation.gender}</p>
              <p><span className="font-bold">Adoption Status:</span> {donation.adoptionStatus}</p>
              <p><span className="font-bold">Donation Date:</span> {donation.donationDate}</p>
              <div className="flex space-x-2 mt-2">
                {donation.images.map((image, index) => (
                  <img key={index} src={image} alt={donation.name} className="w-32 h-32 object-cover rounded-md" />
                ))}
              </div>
              <hr className='bg-gray-500 h-[1px] border-0 mt-3'/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
