import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import UnauthedView from './Pages/UnauthedView';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        {/* <Navigation authed={authenticated}> */}
        <div>
          <UnauthedView />
          {/* <UnauthedView /> */}

        </div>
        <Footer />
        {/* </Navigation> */}
      </BrowserRouter>
    </div>

  );
}

export default App;
