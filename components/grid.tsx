import React from 'react';

const Grid = () => {
  return (
    <div className="grid grid-flow-row-dense gap-4 lg:grid-cols-4 md:grid-cols-2">
      <div className="col-span-2  h-100px w-100px text-center bg-purple-400 rounded border-white border-2">
        01
      </div>
      <div className="col-span-2  h-100px w-100px text-center bg-purple-400 rounded border-white border-2">
        02
      </div>
      <div className="col-span-2  h-100px w-100px text-center bg-purple-400 rounded border-white border-2">
        03
      </div>
      <div className="col-span-2  h-100px w-100px text-center bg-purple-400 rounded border-white border-2">
        03
      </div>
    </div>
  );
};

export default Grid;
