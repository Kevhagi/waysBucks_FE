import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/LandingPage/Navbar'
import ProfileInfo from '../components/ProfilePage/ProfileInfo';
import { UserContext } from "../context/userContext";
import jwt_decode from 'jwt-decode'

import { API } from "../config/api";

function Profile() {

  const [state] = useContext(UserContext);

  var token = state.user.token
  var decoded = jwt_decode(token)

  return(
    <div>
        <Navbar />
        {state !== null ?
        <ProfileInfo item={decoded} />
        :
        <div>error</div>
        }
        
    </div>
  )
}

export default Profile;
