import axios from "axios";

const Login = ({ api, setUserId }) => {
  async function login(formData) {
    let userName = formData.get("userName");
    let password = formData.get("password");
    const apiUrl = `${api}/users`;
    console.log(apiUrl);

    try {
      const response = await axios.post(apiUrl, {
        username: userName,
        password: password,
      });

      console.log("Login successful", response.data);
      console.log(response.data.id);
      setUserId(response.data.id)
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
