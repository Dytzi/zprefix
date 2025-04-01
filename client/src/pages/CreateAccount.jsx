import axios from "axios";
import "./CreateAccount.css";

const CreateAccount = ({ api}) => {
  async function login(formData) {
    let userName = formData.get("userName");
    let password = formData.get("password");
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName")

    const apiUrl = `${api}/users-create`;
    console.log(apiUrl);

    try {
      const response = await axios.post(apiUrl, {
        username: userName,
        password: password,
        firstName: firstName,
        lastName: lastName
      });

      console.log("Account Created", response.data);
      console.log(response.data.id);
    
    } catch (err) {
      console.log(err);
      if (err.response) {
        alert("error: " + err.response.data.message);
      }
    }
  }

  return (
    <div className="account-body">
      <h1>Account Creation</h1>
      {/* run the login function when submit is pressed */}

        <form action={login}>
        <div className="creation-form">
          <label>
            First Name: <input name="firstName"></input>
          </label>
          <label>
            Last Name: <input name="lastName"></input>
          </label>
          <label>
            User Name: <input name="userName"></input>
          </label>
          <label>
            Password: <input name="password"></input>
          </label>
          <button type="submit"> Create </button>
          </div>
        </form>

    </div>
  );
};

export default CreateAccount;
