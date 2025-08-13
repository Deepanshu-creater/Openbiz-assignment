import React, { useEffect, useState } from 'react';
import { getRegistrations } from '../services/api';

const AdminPanel = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllRegistrations = async () => {
      try {
        const response = await getRegistrations();
        setRegistrations(response.data);
      } catch (error) {
        console.error('Failed to fetch registrations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRegistrations();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/registrations/${id}`, { status });
      setRegistrations(registrations.map(reg => 
        reg._id === id ? { ...reg, status } : reg
      ));
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="adminpanel">
      <h1>Admin Panel</h1>
      <table>
        <thead>
          <tr>
            <th>Business Name</th>
            <th>Applicant</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map(reg => (
            <tr key={reg._id}>
              <td>{reg.businessName}</td>
              <td>{reg.name}</td>
              <td>{reg.status}</td>
              <td>
                {reg.status === 'PENDING' && (
                  <>
                    <button onClick={() => updateStatus(reg._id, 'APPROVED')}>Approve</button>
                    <button onClick={() => updateStatus(reg._id, 'REJECTED')}>Reject</button>
                  </>
                )}
                <a href={`/status/${reg._id}`}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;