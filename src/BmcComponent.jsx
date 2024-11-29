import React, { useState } from 'react';
import './BmcComponent.css';
import logo from './assets/logo.png';

const BusinessModelCanvas = () => {
  const [sections, setSections] = useState({
    keyPartners: [],
    keyActivities: [],
    keyResources: [],
    valuePropositions: [],
    customerRelationships: [],
    channels: [],
    customerSegments: [],
    costStructure: [],
    revenueStreams: [],
  });

  const [editingSection, setEditingSection] = useState(null); // Track which section is being edited

  const handleAddItem = (section, item) => {
    setSections((prev) => ({ ...prev, [section]: [...prev[section], item] }));
  };

  const handleRemoveItem = (section, index) => {
    setSections((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="container">
      {/* Logo in top-left */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Title of the Business Model Canvas */}
      <h1 className="canvas-title">Business Canvas Model</h1>

      <div className="canvas-sections">
        {Object.keys(sections).map((section) => (
          <div key={section} className="box">
            <h2 className="title" onClick={() => setEditingSection(section)}>
              {section}
            </h2>
            <ul className="list">
              {sections[section].map((item, index) => (
                <li key={index} className="item">
                  <span className="text">{item}</span>
                  <button className="remove" onClick={() => handleRemoveItem(section, index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* Show the input field only when the section is clicked */}
            {editingSection === section && (
              <input
                type="text"
                className="input"
                placeholder={`Add ${section}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddItem(section, e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessModelCanvas;
