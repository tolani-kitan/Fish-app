import React from 'react';
import './App.css';
import AddFish from './components/AddFish';
import FishList from './components/FishList';

const App = () => {

    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Fish App</a>
        </nav>
        <div className='container'>
               <AddFish />
               <FishList />
        </div>
        
      </div>
    );
  
}

export default App;
