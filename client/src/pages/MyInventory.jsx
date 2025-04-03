import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";



const MyInventory = ({ api, userid }) => {
  const [inventory, setInventory] = useState([]);
  const apiUrl = `${api}/my-inventory`;

  useEffect(() => {
    async function fetchInventory() {
      let inventoryData = await fetch(`${apiUrl}/${userid}`);

      inventoryData = await inventoryData.json();
      setInventory(inventoryData);
    }

    fetchInventory();
  }, []);

  return (
    <>
    <h2>My Inventory</h2>
      {inventory.length > 0 ? (
        // create itemCard components to display needed information
        inventory.map((i) => <ItemCard id={i.id} user_id={i.user_id} name={i.item_name} description={i.description} quantity={i.quantity}></ItemCard>)
      ) : (
        <p> no items</p>
      )}
    </>
  );
};

export default MyInventory;
