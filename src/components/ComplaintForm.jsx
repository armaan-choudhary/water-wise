import React, { useState, useEffect } from 'react';
import './ComplaintForm.css';
import illustration from '../assets/undraw-love.svg';
import { db } from '../FireBaseConfig'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';

const ComplaintForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('NA');
  const [complaintDesc, setComplaintDesc] = useState('');
  const [complaintTag, setComplaintTag] = useState('');
  const [complaintImageUrl, setComplaintImageUrl] = useState('');
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Function to handle successful location retrieval
    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    // Function to handle errors
    const handleError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setError('User denied the request for Geolocation.');
          break;
        case error.POSITION_UNAVAILABLE:
          setError('Location information is unavailable.');
          break;
        case error.TIMEOUT:
          setError('The request to get user location timed out.');
          break;
        case error.UNKNOWN_ERROR:
          setError('An unknown error occurred.');
          break;
        default:
          setError('An error occurred while retrieving location.');
      }
    };

    // Requesting the user's current position
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []); // Empty dependency array to run only on mount

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new document with a generated ID
      await addDoc(collection(db, 'complaints'), {
        name,
        phoneNumber,
        complaintDesc,
        complaintTag,
        complaintImageUrl,
        location, // Include location in the data
        createdAt: new Date(),
      });

      setIsSubmitted(true); // Set isSubmitted to true on successful submission

      // Reset form fields
      setName('');
      setPhoneNumber('NA');
      setComplaintDesc('');
      setComplaintTag('');
      setComplaintImageUrl('');
      setLocation({ latitude: null, longitude: null });
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('Failed to submit complaint.');
    }
  };

  return (
    <div className="wrapper">
      <div className='complaintFormWrapper'>
        <h1>Water Wise Complaint Registration</h1>
        {isSubmitted ? (
          <div className="submissionMessage">
            <p>Complaint submitted successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="inputFieldWrapper">
              <label>Name :<span className='required'> * </span></label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="inputFieldWrapper">
              <label>Phone Number :</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="inputFieldWrapper">
              <label>Complaint Description :<span className='required'> * </span></label>
              <input
                value={complaintDesc}
                onChange={(e) => setComplaintDesc(e.target.value)}
                required
              />
            </div>
            <div className="inputFieldWrapper">
              <label>Complaint Tag :<span className='required'> * </span></label>
              <input
                value={complaintTag}
                onChange={(e) => setComplaintTag(e.target.value)}
                required
              />
            </div>
            <div className="inputFieldWrapper">
              <label>Complaint Image URL :</label>
              <input
                value={complaintImageUrl}
                onChange={(e) => setComplaintImageUrl(e.target.value)}
              />
            </div>
            <div className="inputFieldWrapper">
              <label>Location :</label>
              {error ? (
                <p style={{ color: 'red' }}>{error}</p>
              ) : (
                <p>
                  Auto-Detected!
                </p>
              )}
            </div>
            <button type="submit">Submit Complaint</button>
          </form>
        )}
      </div>
      <div className="image">
        <img src={illustration} alt="Illustration" />
      </div>
    </div>
  );
};

export default ComplaintForm;