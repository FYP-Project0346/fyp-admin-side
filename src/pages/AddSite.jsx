import React, { useState } from 'react';

function AddSite() {
  const [siteName, setSiteName] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [status, setStatus] = useState('allow');

  const handleSubmit = (e) => {
    e.preventDefault();
    const siteData = {
      siteName,
      siteUrl,
      logoUrl,
      status: status === 'allow', // Convert to boolean for backend
    };
    console.log('Site Data:', siteData);
    // You can add your API call here to submit the form data to the backend
  };

  return (
    <div className="add-site-container">
      <h2>Add New Site</h2>
      <form className="add-site-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="siteName">Site Name</label>
          <input
            type="text"
            id="siteName"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="siteUrl">Site URL</label>
          <input
            type="url"
            id="siteUrl"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="logoUrl">Logo URL</label>
          <input
            type="url"
            id="logoUrl"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="allow">Allow</option>
            <option value="deny">Deny</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Add Site</button>
      </form>
    </div>
  );
}

export default AddSite;
