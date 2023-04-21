
import { useNavigate } from "react-router-dom";
import "./navbar.scss";


const Navbar = () => {

const navigate=useNavigate()

  const user=JSON.parse(localStorage.getItem("currentUser"))

function handleClick(){
  localStorage.removeItem("currentUser")

  navigate("/")

}

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">


<div className="nav_user_name">
  <h1>{user.user.name}</h1>
</div>
          <div className="item">
          <button className="nav_login_button"  onClick={handleClick}>logout</button>
        <span className="nav__profile_txt">  D</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
