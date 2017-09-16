var faker = require('faker');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function() {
      // Inserts seed entries
      return knex('posts').insert([{
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          createdAt: faker.date.recent(),
          updatedAt: faker.date.recent(),
          deletedAt: faker.date.recent(),
          deleted: faker.random.boolean(),
        },
        {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          createdAt: faker.date.recent(),
          updatedAt: faker.date.recent(),
          deletedAt: faker.date.recent(),
          deleted: faker.random.boolean(),
        },
        {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          createdAt: faker.date.recent(),
          updatedAt: faker.date.recent(),
          deletedAt: faker.date.recent(),
          deleted: faker.random.boolean(),
        },
      ]);
    });
};
