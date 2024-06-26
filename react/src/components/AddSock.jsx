import React, { useState } from 'react';

const AddSock = () => {
  const [userId, setUserId] = useState('');
  const [size, setSize] = useState('Small');
  const [color, setColor] = useState('');
  const [pattern, setPattern] = useState('');
  const [material, setMaterial] = useState('');
  const [condition, setCondition] = useState('New');
  const [forFoot, setForFoot] = useState('Left');
  const [waterResistant, setWaterResistant] = useState(false);
  const [padded, setPadded] = useState(false);
  const [antiBacterial, setAntiBacterial] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newSock = {
      userId,
      sockDetails: { size, color, pattern, material, condition, forFoot },
      additionalFeatures: { waterResistant, padded, antiBacterial },
      addedTimestamp: new Date().toISOString(),
    };
  
    const response = await fetch('https://ecs.the-sock-exchange.com/api/socks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSock),
    });
  
    // You might handle response status or other checks here if necessary
  
    setSuccess(true);
  };
  

  return (
    <div>
      <h2>Create a New Sock</h2>
      <form className="p-3" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size</label>
          <select
            className="form-control"
            id="size"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            className="form-control"
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pattern">Pattern</label>
          <input
            type="text"
            className="form-control"
            id="pattern"
            name="pattern"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="material">Material</label>
          <input
            type="text"
            className="form-control"
            id="material"
            name="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="condition">Condition</label>
          <select
            className="form-control"
            id="condition"
            name="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          >
            <option>Used</option>
            <option>New</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="forFoot">For Foot</label>
          <select
            className="form-control"
            id="forFoot"
            name="forFoot"
            value={forFoot}
            onChange={(e) => setForFoot(e.target.value)}
            required
          >
            <option>Left</option>
            <option>Right</option>
            <option>Both</option>
          </select>
        </div>
        <div className="row">
          <div className="form-check col">
            <input
              className="form-check-input"
              type="checkbox"
              id="waterResistant"
              name="waterResistant"
              checked={waterResistant}
              onChange={(e) => setWaterResistant(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="waterResistant">
              Water Resistant
            </label>
          </div>
          <div className="form-check col">
            <input
              className="form-check-input"
              type="checkbox"
              id="padded"
              name="padded"
              checked={padded}
              onChange={(e) => setPadded(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="padded">
              Padded
            </label>
          </div>
          <div className="form-check col">
            <input
              className="form-check-input"
              type="checkbox"
              id="antiBacterial"
              name="antiBacterial"
              checked={antiBacterial}
              onChange={(e) => setAntiBacterial(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="antiBacterial">
              Anti Bacterial
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {loading ? 'Creating...' : 'Create Sock'}
        </button>
      </form>
      {error && <p className="text-danger mt-3">Error: {error}</p>}
      {success && <p className="text-success mt-3">Sock created successfully!</p>}
    </div>
  );
};

export default AddSock;
