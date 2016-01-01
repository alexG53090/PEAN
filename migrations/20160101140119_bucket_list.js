
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bucket', function(table){
    table.increments();
    table.string('name');
    table.integer('awesomeness');
    table.boolean('completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bucket');
};
