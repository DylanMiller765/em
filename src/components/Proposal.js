// src/components/Proposal.js
import React from 'react';

const Proposal = ({ proposalText }) => {
  return (
    <div className="text-center p-8 bg-red-100 border-l-4 border-red-500">
      <h1 className="text-4xl font-bold mb-4">Will You Be My Valentine?</h1>
      <p className="mb-8 text-lg">{proposalText}</p>
    </div>
  );
};

export default Proposal;
