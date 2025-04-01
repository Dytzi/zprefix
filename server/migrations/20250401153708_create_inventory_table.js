/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary(); // adds an auto incrementing PK column
    table.integer('user_id'); //create user_id column
    table.foreign("user_id").references("users.id"); // foreign key user_id column
    table.string("item_name"); // item name column
    table.string("description"); // description column
    table.integer("quantity"); // quantity column
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("items");
};
