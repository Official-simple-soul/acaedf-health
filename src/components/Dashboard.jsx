import React from 'react';

function Dashboard() {
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Dashboard</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          {/* Feature 1 Content */}
          <h3 className='text-lg font-semibold mb-2'>Feature 1</h3>
          {/* Add content for feature 1 here */}
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          {/* Feature 2 Content */}
          <h3 className='text-lg font-semibold mb-2'>Feature 2</h3>
          {/* Add content for feature 2 here */}
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h3 className='text-lg font-semibold mb-2'>Feature 3</h3>
          {/* Add content for feature 3 here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
