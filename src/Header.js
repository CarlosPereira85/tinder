import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import logotinder from '../src/assets/tinder-2.svg'
import ForumIcon from '@material-ui/icons/Forum';
import { Link, } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


function Header({backButton, backButton2}) {
  const navigate = useNavigate();


  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
   
  };
  const navigateHome2 = () => {
    // 👇️ navigate to /
    navigate('/chat');
   
  };

    return (
        <div className="header">
          {backButton  ? (
            <IconButton onClick={navigateHome} >
            <ArrowBackIosIcon fontSize="large" className="header__icon" />
            </IconButton>
            
          ): (
        <IconButton onClick={navigateHome2}>
        <PersonIcon fontSize="large" className="header__icon" />
       </IconButton>
            
         ) }
       
        
        <Link to="/">
       <img className="header__logo" src={logotinder} alt={logotinder} />
       </Link>

<Link to="/chat">

     <  IconButton>
       <ForumIcon fontSize="large" className="header_icon" />
       </IconButton>
        </Link>
        </div>
    );
}
export default Header;