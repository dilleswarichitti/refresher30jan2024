import { Link } from "react-router-dom";
import './Menu.css';

function Menu(){
  const logout=()=>{
    localStorage.clear();
    window.location.reload();
 }

    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-light line pad ">
            <Link className="navbar-brand pad" to="/Home"><strong>📅My Calendar</strong></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse">☰</button> 
            <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav ml-auto">
                {localStorage.getItem("token")? "" : <div> <li className="nav-item active">
                <Link className="nav-link" to="/login" ><strong>Register/Login</strong></Link>
              </li>
              </div>}
              {localStorage.getItem("token")? <li className="nav-item">
              <Link className="nav-link" to="/Events" ><strong>🗓Events</strong></Link>
            </li> : "" }
              {localStorage.getItem("token")? <li className="nav-item">
              <Link className="nav-link" to="/GetAccess" ><strong>✔️GetAccess</strong></Link>
            </li> : "" }
            {localStorage.getItem("token")? <li className="nav-item">
              <Link className="nav-link" to="/Schedules" ><strong>🕔Schedules</strong></Link>
            </li> : "" }
            {localStorage.getItem("token")? <li className="nav-item">
              <Link className="nav-link" to="/profile"><strong>👥Profile</strong></Link>
            </li> : "" }
            {localStorage.getItem("token")? <li className="nav-item">
            <Link className="nav-link" onClick={logout}><strong>↪️logout</strong></Link>
            </li> :"" }
                </ul>
            </div>
        </nav>
    );
}

export default Menu;