import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to get route params
import './Css/style.css'; 

function Workshop() {
    const { workshopId } = useParams();  // Extract the workshop ID from the URL
    const [workshop, setWorkshop] = useState(null);

    useEffect(() => {
        const mockWorkshops = [
          {
            id: 1,
            title: "Python Workshop",
            description: ["Python Basics", "Advanced Topics", "Real-world Projects"],
            benefits:["Certificate" , "Workshop Material"],
            date: "30-05-2025",
            time: "5:00 PM",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
          },
          {
            id: 2,
            title: "AWS Workshop",
            description: [
              "Cloud Foundations",
              "Deployment & Scaling",
              "Security Best Practices",
              "Real-world Projects"
            ],
            benefits:["Certificate" , "Workshop Material"],
            date: "28-12-2024",
            time: "5:00 PM",
            image: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
          }
        ];

        // Find the workshop based on the workshopId from the route
        const selectedWorkshop = mockWorkshops.find(ws => ws.id === parseInt(workshopId));
        setWorkshop(selectedWorkshop);  // Set the selected workshop data
    }, [workshopId]);

    if (!workshop) {
        return <div>Loading...</div>;  // Display loading while workshop data is being fetched
    }

    return (
      <div className="workshop-container">
        <header className="workshop-header">
          <h1>{workshop.title}</h1>
        </header>
          <div className='wshp-card-container'>
              <div className="workshop-card">
                  <div className="workshop-info col-6">
                      <h2>{workshop.title}</h2>
                      <ul>
                          {workshop.description.map((item, index) => (
                              <li key={index}>{item}</li>
                          ))}
                      </ul>
                      <h3>Benefits</h3>
                      <ul>
                          {workshop.benefits.map((item, index) => (
                              <li key={index}>{item}</li>
                          ))}
                      </ul>
                      <p>{workshop.date} | {workshop.time}</p>
                  </div>

                  <div className="workshop-image col-6">
                      <img src={workshop.image} alt={`${workshop.title} Logo`} />
                      <button className="workshop-btn">OPEN NOW</button>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default Workshop;
