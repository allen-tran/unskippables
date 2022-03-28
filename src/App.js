import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
// import UnauthedView from './Pages/UnauthedView';
// import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Feed from './Components/Feed/Feed';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/feed" exact component={Feed} />
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
