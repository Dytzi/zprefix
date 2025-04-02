import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = ({ api }) => {
  let params = useParams();
  const [item, setItem] = useState(0);
  const [editMode, setEditMode] = useState(false)
  const id = params.id;
  const apiUrl = `${api}/items/${id}`;

  useEffect(() => {
    async function fetchData() {
      let itemData = await fetch(apiUrl);
      itemData = await itemData.json();
      setItem(itemData[0]);
      console.log(itemData)
    }

    fetchData();
  }, []);

  return (
    <>
      {editMode 
      ? 
      <p>WIP</p>
      :
      <>
      <h3> {item.item_name} </h3>
      <p> Description : {item.description}</p>
      <p> Quantity : {item.quantity}</p>
      </>
}
    </>
  );
};

export default Details;
