'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
  [
    {
      full_name: 'Carolina',
      email: 'carol@test.com',
      // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      full_name: 'Bruno',
      email: 'bruno@test.com',
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  // função bulkInsert insere múltiplos dados na tabela
  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
