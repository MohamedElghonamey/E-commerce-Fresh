import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";
export default function Protect({ children }) {
  const { userToken } = useContext(AuthContext);
  if (!userToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
