import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './Css/style.css'; 

function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    const mockWorkshops = [
      {
        id: 1,
        title: "Python Workshop",
        status: "REGISTRATIONS OPENING SOON",
        availableSlots: 0
      },
      {
        id: 2,
        title: "AWS Workshop",
        status: "AVAILABLE",
        availableSlots: 48
      }
    ];  
    setWorkshops(mockWorkshops);
  }, []);

  // Redirect function when a user clicks on a workshop
  function handleWorkshopClick(workshopId) {
    navigate(`/workshop/${workshopId}`);  // Redirect to Workshop page with ID
  }

  return (
      <div className='container-fluid bg-wshp'>
        <div className='row'>
          <Typography variant="h3" className="wsheading col-12">
            Available Workshops
          </Typography>
        </div>
        <div className='row wshp-container'>
          {workshops.map((workshop) => (
            <div key={workshop.id} 
                 className='wsp-card col-12 col-sm-6 col-md-4 col-lg-3'
                 onClick={() => handleWorkshopClick(workshop.id)}  // Handle click
                 style={{ cursor: 'pointer' }}  // Make cursor a pointer on hover
            >
              <h1 className='wsp-head'>{workshop.title}</h1>
              <p className='wsp-status'>
                {workshop.status === 'AVAILABLE' ? `Available: ${workshop.availableSlots}` : workshop.status}
              </p>
              <div style={{ textAlign: "center" }}>
                <button className='wsp-btn'>
                  {workshop.status === 'AVAILABLE' ? 'Register' : 'Notify'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Workshops;
