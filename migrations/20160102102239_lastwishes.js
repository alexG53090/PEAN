exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('lastwishes', function(table){
      table.increments();
      table.string('user');
      table.string('wish');
      table.integer('radness');
      table.boolean('complete');
    }),
    knex.schema.createTable('wisdom', function(table){
      table.increments():
      table.string('topic');
      table.string('comment');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('lastwishes');
    knex.schema.dropTable('wisdom');
  ])
};
