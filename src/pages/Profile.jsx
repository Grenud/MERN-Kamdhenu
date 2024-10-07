import React, { useEffect, useState } from 'react';

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('/api/user/profile'); // Adjust this URL to your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <section className="main-container min-h-screen bg-dark-primary text-light flex items-center justify-center text-3xl">
        Loading...
      </section>
    );
  }

  if (error) {
    return (
      <section className="main-container min-h-screen bg-dark-primary text-light flex items-center justify-center text-3xl">
        Error: {error}
      </section>
    );
  }

  return (
    <section className="main-container min-h-screen bg-dark-primary text-light flex flex-col items-center justify-center text-5xl font-bold">
      <h1 className="text-9xl mb-4">Profile</h1>
      {user ? (
        <div className="text-lg">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </section>
  );
}

export default Profile;
