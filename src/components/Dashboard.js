import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';

function Dashboard(props) {
  const user = getUser();

  //click event logout button //

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  return (
    <div> Hello {user.name}!<br /><br />
      <input type="button" 
      onClick={handleLogout} value="Logout"
    />
    </div>
  );
}

export default Dashboard;
