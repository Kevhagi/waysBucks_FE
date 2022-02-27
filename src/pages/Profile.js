import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/LandingPage/Navbar'
import ProfileInfo from '../components/ProfilePage/ProfileInfo';
import { UserContext } from "../context/userContext";

import { API } from "../config/api";

function Profile() {

  const [state] = useContext(UserContext);

  const [myTransactions, setMyTransactions] = useState([])

  var data = state.user
  
  const getUserTransactions = async () => {
    try {
      const response = await API.get("/my-transactions/")
      setMyTransactions(response.data.data.transactions)
    } catch (error) {
      console.log(error.response);
    }
  }

  console.log(myTransactions);
  
  useEffect(() => {
    getUserTransactions();
  }, []);

  return(
    <div>
        <Navbar />
        {state !== null ?
        <ProfileInfo item={data} item2={myTransactions} />
        :
        <div>error</div>
        }
        
    </div>
  )
}

export default Profile;
