import axios from "axios";
import "./CreateAccount.css";


// page to create a new user 
const CreateAccount = ({ api}) => {
  async function createAccount(formData) {
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
      alert("Account Successfully Created")
    
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
      {/* run the createAccount function when submit is pressed */}

        <form action={createAccount}>
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
            Password: <input type='password' name="password"></input>
          </label>
          <button type="submit"> Create </button>
          </div>
        </form>

    </div>
  );
};

export default CreateAccount;
