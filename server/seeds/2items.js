/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    // Items for user 1
    { user_id: 1, item_name: 'Laptop', description: 'MacBook Pro 16-inch', quantity: 1 },
    { user_id: 1, item_name: 'Smartphone', description: 'iPhone 13 Pro', quantity: 1 },
  
    // Items for user 2
    { user_id: 2, item_name: 'Headphones', description: 'Sony WH-1000XM4', quantity: 2 },
    { user_id: 2, item_name: 'Smartwatch', description: 'Apple Watch Series 7', quantity: 1 },
  
    // Items for user 3
    { user_id: 3, item_name: 'Backpack', description: 'Hiking backpack with multiple compartments', quantity: 1 },
    { user_id: 3, item_name: 'Tent', description: '2-person camping tent', quantity: 1 }
  ]);
  
};
