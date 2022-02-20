import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/LandingPage/Navbar'
import ProfileInfo from '../components/ProfilePage/ProfileInfo';
import { UserContext } from "../context/userContext";

import { API } from "../config/api";

function Profile() {

  const [state] = useContext(UserContext);

  var data = state.user

  return(
    <div>
        <Navbar />
        {state !== null ?
        <ProfileInfo item={data} />
        :
        <div>error</div>
        }
        
    </div>
  )
}

export default Profile;
