import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import SignIn from '../Components/SignIn/SignIn';

export default function UnauthedView() {
  return (
    <div className="fragment">
      <Navbar />
      <SignIn />
    </div>
  );
}
