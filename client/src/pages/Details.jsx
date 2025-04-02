import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Details = ({ api, userId }) => {
    const navigate = useNavigate()
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
  }, []);

  function changeEditMode() {
    setEditMode(!editMode);
  }

  async function deleteItem() {
    let deletedData = await axios.delete(apiUrl)
    console.log(deletedData)
    alert(deletedData.data.message)

    navigate('/my-inventory')
  }

  return (
    <>
      {editMode ? (
        <p>WIP</p>
      ) : (
        <>
          <h3> {item.item_name} </h3>
          <p> Description : {item.description}</p>
          <p> Quantity : {item.quantity}</p>
        </>
      )}
      {userId === item.user_id ? (
        <>
          <button onClick={changeEditMode}>Edit</button>
          <button onClick={deleteItem}>Delete</button>
        </>
      ) : null}
    </>
  );
};

export default Details;
