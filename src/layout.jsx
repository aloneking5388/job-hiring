import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function layout() {
    const { user } = useSelector((state) => state.user);
    const location = useLocation();

  return user?.token? (
    <Outlet /> ) : (
        <Navigate to="/user-auth" from={{ from: location }} replace />
  )
}

export default layout