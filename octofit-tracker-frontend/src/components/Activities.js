
import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched activities data:', data);
        setActivities(data.results || data);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  const handleRowClick = (activity) => {
    setSelectedActivity(activity);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedActivity(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Activities</h2>
      <div className="card p-3 mb-4 shadow-sm">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={activity.id || idx} style={{cursor: 'pointer'}} onClick={() => handleRowClick(activity)}>
                <th scope="row">{activity.id || idx + 1}</th>
                <td>{activity.name || '-'}</td>
                <td>{activity.type || '-'}</td>
                <td>{activity.details || JSON.stringify(activity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for activity details */}
      {showModal && selectedActivity && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{background: 'rgba(0,0,0,0.3)'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Activity Details</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p><strong>Name:</strong> {selectedActivity.name || '-'}</p>
                <p><strong>Type:</strong> {selectedActivity.type || '-'}</p>
                <p><strong>Details:</strong> {selectedActivity.details || JSON.stringify(selectedActivity)}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
