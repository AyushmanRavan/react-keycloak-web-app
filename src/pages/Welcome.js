import React, { Component } from 'react';

const Welcome = () => {
  localStorage.setItem('Realm', "ORGA2")
    return (
      <div className="Welcome">
        <p>This is your public-facing component.</p>
      </div>
    );
}

export default Welcome;