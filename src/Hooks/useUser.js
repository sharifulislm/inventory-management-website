import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../components/firebase.init';

const useUser = () => {
    const [users,setUsers]=useState([]);
    const [user] =useAuthState(auth);
    useEffect(() => {
        if(user){
            fetch(``)
            .then(res => res.json())
            .then(data => setUsers(data));
        }
    } ,[user])
    return [users];
};

export default useUser;