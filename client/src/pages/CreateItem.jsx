import axios from "axios";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";


// page to create a new user 
const CreateItem = ({ api, userId}) => {
    const navigate = useNavigate()
  async function createItem(formData) {
    let item_name = formData.get("item_name");
    let description = formData.get("description");
    let quantity = formData.get("quantity");


    const apiUrl = `${api}/item-create`;

    try {
      const response = await axios.post(apiUrl, {
        user_id : userId,
        item_name: item_name,
        description: description,
        quantity: quantity,
      });

      console.log("Item Added", response.data);
      alert("Item Successfully Created, You'll Now Be Redirected To Your Inventory")
      navigate('/my-inventory')
    
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

        <form action={createItem}>
        <div className="creation-form">
          <label>
            Item Name: <input name="item_name"></input>
          </label>
          <label>
            Description: <input name="description"></input>
          </label>
          <label>
            Quantity:  <input name="quantity"></input>
          </label>
          <button type="submit"> Create </button>
          </div>
        </form>

    </div>
  );
};

export default CreateItem;
