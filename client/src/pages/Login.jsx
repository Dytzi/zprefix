// page to handle login 

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ api, setUserId }) => {
  const navigate = useNavigate()
  async function login(formData) {
    // set the data from form
    let userName = formData.get("userName");
    let password = formData.get("password");
    const apiUrl = `${api}/users`;

    //post request to /users
    try {
      const response = await axios.post(apiUrl, {
        username: userName,
        password: password,
      });

      alert("Login successful, You'll Now Be Redirected To Your Inventory")

      setUserId(response.data.id); // set UserId to imitate a logged in user
      navigate('/my-inventory')
    } catch (err) {
      console.log(err);
      if(err.response){
        alert("error: " + err.response.data.message);
      }
    }
  }

  return (
    <>
      <h1>Login</h1>
      {/* run the login function when submit is pressed */}
      <form action={login}>
        <label>
          User Name: <input name="userName"></input>
        </label>
        <label>
          Password: <input name="password"></input>
        </label>
        <button type="submit"> Login </button>
      </form>
    </>
  );
};

export default Login;
