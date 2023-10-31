import QuoteCards from "../components/quote/QuoteCards";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || (!token && !user)) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <QuoteCards />
    </div>
  );
}

export default Dashboard;
