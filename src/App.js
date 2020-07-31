import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ children, requestAddBooking, handleFindTrips, handleListBooking }) => {
  return (
    <>
      <Header 
      requestAddBooking={requestAddBooking}
      handleFindTrips={handleFindTrips}
      handleListBooking={handleListBooking}/>
        { children }
      <Footer/>
    </>
  );
}

export default App;
