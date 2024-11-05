import { useNavigate } from 'react-router-dom';
import GCB_companie from "../assets/gcb-15.png";
import "../style/pages/landing.css";

const Landing = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/compagnie');

  };
  return (
    <>
      <div className="container_landing">
          <img src={GCB_companie} alt="" className="gcb_companie"onClick={handleClick} />
      </div>
    </>
  );
};
export default Landing;
