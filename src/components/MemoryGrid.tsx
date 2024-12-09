import React from 'react';
import Interactive3DCard from './Interactive3DCard';

const letterDetails = [
  { letter: 'A', quality: "Always there to support and guide." },
  { letter: 'P', quality: "Patient beyond measure, always listening." },
  { letter: 'P', quality: "Protective and caring, ensuring our safety." },
  { letter: 'A', quality: "A heart full of unconditional love." }
];

const MemoryGrid = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Map over the "APPA" letters and qualities */}
          {letterDetails.map((detail, index) => (
            <Interactive3DCard
              key={index}
              letter={detail.letter}
              quality={detail.quality}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryGrid;
