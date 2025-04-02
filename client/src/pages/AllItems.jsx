import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";



const AllItems = ({ api }) => {
  const [inventory, setInventory] = useState(0);
  const apiUrl = `${api}/items`;

  useEffect(() => {
      async function fetchInventory() {
        let inventoryData = await fetch(`${apiUrl}`);
  
        inventoryData = await inventoryData.json();
        setInventory(inventoryData);
        console.log(inventoryData)
      }
  
      fetchInventory();

    }, []);

  return (
    <>
      <h1>Inventory</h1>
      {inventory.length > 0 
      ?
      inventory.map((i) => <ItemCard key={i.id} id={i.id} user_id={i.user_id} name={i.item_name} description={i.description} quantity={i.quantity}/>)
      :
      <p>loading</p>
      }
    </>
  );
};

export default AllItems;
