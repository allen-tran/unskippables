import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
// import UnauthedView from './Pages/UnauthedView';
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />

        <Footer />

      </BrowserRouter>
    </div>

  );
}

export default App;
