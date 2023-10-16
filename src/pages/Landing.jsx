import React from 'react';
import AdminLogin from '../components/AdminLogin';
import Cards from '../components/Cards';
import CTA from '../components/CTA';
import OurTeam from '../components/OurTeam';

function Landing() {
  return (
    <>
      <CTA />
      {/* <AdminLogin /> */}
      <Cards />
      <OurTeam />
    </>
  );
}

export default Landing;
