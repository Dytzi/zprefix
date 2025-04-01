/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Alice', last_name: 'Johnson', username: 'alicej', password: 'securepass1' },
    {first_name: 'Bob', last_name: 'Smith', username: 'bobsmith', password: 'securepass2' },
    {first_name: 'Charlie', last_name: 'Brown', username: 'charlieb', password: 'securepass3' }
  ]);
  
};
