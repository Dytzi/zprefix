import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Details = ({ api, userId }) => {
  const navigate = useNavigate();
  let params = useParams();
  const [item, setItem] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const id = params.id;
  const apiUrl = `${api}/items/${id}`;

  useEffect(() => {
    async function fetchData() {
      let itemData = await fetch(apiUrl);
      itemData = await itemData.json();
      setItem(itemData[0]);
      console.log(itemData);
    }

    fetchData();
  }, [editMode]);

  function changeEditMode() {
    setEditMode(!editMode);
  }

  async function deleteItem() {
    let deletedData = await axios.delete(apiUrl);
    console.log(deletedData);
    alert(deletedData.data.message);

    navigate("/my-inventory");
  }

  async function editItem(formData) {
    let item_name = formData.get("item_name");
    let description = formData.get("description");
    let quantity = formData.get("quantity");

    let updatedData = await axios.patch(apiUrl, {
      item_name: item_name,
      description: description,
      quantity: quantity,
    });

    changeEditMode()

    console.log(updatedData.data.message)
  }

  return (
    <>
      {editMode ? (
        <form action={editItem}>
          <div className="creation-form">
            <label>
              Item Name:{" "}
              <input name="item_name" defaultValue={item.item_name}></input>
            </label>
            <label>
              Description:{" "}
              <textarea name="description" defaultValue={item.description} />
            </label>
            <label>
              Quantity:{" "}
              <input name="quantity" defaultValue={item.quantity}></input>
            </label>
            <button type="submit"> Submit Changes </button>
          </div>
        </form>
      ) : (
        <>
          <h3> {item.item_name} </h3>
          <p> Description : {item.description}</p>
          <p> Quantity : {item.quantity}</p>
        </>
      )}
      {userId === item.user_id ? (
        <>
          <button onClick={changeEditMode}>Edit Mode</button>
          <button onClick={deleteItem}>Delete</button>
        </>
      ) : null}
    </>
  );
};

export default Details;
