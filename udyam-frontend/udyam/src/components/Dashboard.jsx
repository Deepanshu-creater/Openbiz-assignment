import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext/authContext';
import { getRegistrations } from '../services/api';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await getRegistrations();
        setRegistrations(response.data);
      } catch (error) {
        console.error('Failed to fetch registrations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
      
      <h2>Your Registrations</h2>
      {registrations.length === 0 ? (
        <p>No registrations found</p>
      ) : (
        <div className="registrations-list">
          {registrations.map(reg => (
            <div key={reg._id} className="registration-card">
              <h3>{reg.businessName}</h3>
              <p>Status: {reg.status}</p>
              <p>Submitted: {new Date(reg.createdAt).toLocaleDateString()}</p>
              <a href={`/status/${reg._id}`}>View Details</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;