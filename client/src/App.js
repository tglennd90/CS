import React, { Component } from 'react';

import Navigation from './components/common/Navbar';
import CitizenLogin from './components/uncommon/CitizenLogin';
import UserList from './components/uncommon/UserList';

class App extends Component {



  render() {



    return(
      <div>
        <Navigation />
        <CitizenLogin />
        <UserList />
      </div>
    )

  }

}

export default App;