import { Link } from "react-router-dom";

const Navbar = ({ userId, setUserId}) => {

  function logOut(){
    setUserId(null)
  }

  return (
    <nav>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">Home </Link>

        {userId  ? <Link to="/my-inventory">My Inventory</Link> : null} 
        {/* conditionally renders the create item link if user is logged in */}
        {userId  ? <Link to="/create-item">Create Item</Link> : null} 
        <Link to='/items'>All Items</Link>
        <Link to="/create-account">Create Account</Link>
        {userId  ? <Link to="/" onClick={logOut}>Log Out</Link> : <Link to="/login">Login </Link>} 
      </div>
    </nav>
  );
};

export default Navbar;
