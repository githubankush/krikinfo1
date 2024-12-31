import React from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
export const Logout = () => {
  const {LogoutUser} = useTheme();
  
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser])
  return <Navigate to={"/login"} />
}

