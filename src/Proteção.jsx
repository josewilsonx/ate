import { Navigate } from "react-router-dom";

export default function Protecao({ children }) {
  const isAuthenticated = localStorage.getItem("auth"); // simples controle

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
