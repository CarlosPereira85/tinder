import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import logotinder from '../src/assets/tinder-2.svg'
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">
        
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
       </IconButton>
       <img className="header__logo" src={logotinder} alt={logotinder} />

     <  IconButton>
       <ForumIcon fontSize="large" className="header_icon" />
       </IconButton>
        </div>
    );
}
export default Header;