exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('wisdom', function(table){
      table.increments();
      table.string('topic');
      table.string('comment');
    }),
    knex.schema.createTable('lastwish', function(table){
      table.increments();
      table.string('user');
      table.string('wish');
      table.string('radness');
      table.boolean('complete');
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('wisdom');
  knex.schema.dropTable('lastwish');
  knex.schema.dropTable('lastwishes');
};
