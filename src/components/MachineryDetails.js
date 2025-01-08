import React from 'react';

const MachineryDetails = () => {
  const machineryData = [
    {
      line: 'PDW Line',
      details: [
        { id: 1, name: 'Bore-well Motor', company: 'HP', capacity: '10 HP', quantity: '' },
        { id: 2, name: 'R.O System', company: '', capacity: '16 KL', quantity: '' },
        { id: 3, name: 'PET Blowing Machine', company: 'SBR', capacity: '7200/Hrs', quantity: '' },
        { id: 4, name: 'PDW Water Filling Machine', company: 'SATJAI Bottling', capacity: '120 BPM', quantity: '' },
        { id: 5, name: 'Coding Machine', company: 'Hitachi', capacity: '', quantity: '' },
        { id: 6, name: 'PDW Labeller Machine', company: 'SATJAI Bottling', capacity: '120 BPM', quantity: '' },
      ],
    },
    {
      line: 'CSD Line',
      details: [
        { id: 7, name: 'Transformer', company: '', capacity: '1200 KVA', quantity: '1' },
        { id: 8, name: 'H.P Compressor', company: 'CP', capacity: '200 CFM', quantity: '2' },
        { id: 9, name: 'Cooling Tower', company: '', capacity: '80 TR', quantity: '3' },
        { id: 10, name: 'Soda PET Blowing Machine', company: 'SBR', capacity: '7200 BPH', quantity: '' },
        { id: 11, name: 'CSD Filling Machine', company: 'Hiemense Bottling', capacity: '200 BPM', quantity: '' },
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <h2>Manufacturing Machinery Details</h2>
      <p>Below is the list of machinery used in our production lines:</p>
      {machineryData.map((line, index) => (
        <div key={index} className="mb-4">
          <h4>{line.line}</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Company</th>
                <th>Capacity</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {line.details.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.company || 'N/A'}</td>
                  <td>{item.capacity || 'N/A'}</td>
                  <td>{item.quantity || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MachineryDetails;
