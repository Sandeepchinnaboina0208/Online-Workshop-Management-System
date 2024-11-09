import React, { useState } from 'react';
import './Css/style.css'; // Import your CSS file for styling

function AdminWorkshops() {
  const [workshops, setWorkshops] = useState([
    { id: 1, title: 'Python Workshop', description: 'Learn Python from basics', time: '5:00 PM', slots: 0, status: 'Closed', attendance: 0 },
    { id: 2, title: 'AWS Workshop', description: 'Master AWS Cloud', time: '6:00 PM', slots: 10, status: 'Open', attendance: 5 },
  ]);

  // Function to add a new workshop
  const handleCreateWorkshop = () => {
    const newWorkshop = {
      id: workshops.length + 1, // Increment ID
      title: `New Workshop ${workshops.length + 1}`,
      description: 'Description of the new workshop',
      time: 'TBD',
      slots: 20,
      status: 'Open',
      attendance: 0,
    };
    setWorkshops([...workshops, newWorkshop]); // Add new workshop to the list
  };

  return (
    <div className="admin-container">
      {/* Header */}
      <header className="workshop-header">
        <h1>WORKSHOPS</h1>
      </header>

      {/* Workshop Table */}
      <div className="workshop-table-container">
        <table className="workshop-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Time</th>
              <th>Slots</th>
              <th>Status</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {workshops.map((workshop) => (
              <tr key={workshop.id}>
                <td>{workshop.title}</td>
                <td>{workshop.description}</td>
                <td>{workshop.time}</td>
                <td>{workshop.slots}</td>
                <td>{workshop.status}</td>
                <td>{workshop.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create New Workshop Button */}
      <div className="create-workshop-btn-container">
        <button className="create-workshop-btn" onClick={handleCreateWorkshop}>
          Create New Workshop
        </button>
      </div>
    </div>
  );
}

export default AdminWorkshops;
