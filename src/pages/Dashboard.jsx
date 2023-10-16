import React from 'react';
import Sidebar from '../components/SideBar';
import MainDashboard from '../components/Dashboard';

function Dashboard() {
  return (
    <div className='pt-24 flex h-screen'>
      <Sidebar />
      <MainDashboard />
    </div>
  );
}

export default Dashboard;
