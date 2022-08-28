/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable("archives", (table) => {
      table.increments("id").primary();
      table.decimal("CNPJ").notNullable();
      table.decimal("Nome").notNullable();
      table.string("data").notNullable();
    });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable("archives");
};
