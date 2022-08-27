/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.decimal("CNPJ").notNullable();
        table.decimal("Nome").notNullable();
        table.string("data").notNullable();
        table.string("Adress").notNullable();
        table.string("CEP").notNullable();
        table.decimal("Entreprise").notNullable();
        table.string("Represent").notNullable();
        table.string("Email").notNullable();
        table.string("CPF").notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
