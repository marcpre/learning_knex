exports.up = function(knex, Promise) {
    return knex.schema.createTable('easyPosts', function(t) {
        t.increments('id').unsigned().primary();
        t.string('title').notNull();
        t.text('description').nullable();
        t.boolean('deleted').nullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('easyPosts');
};
