'use strict';

module.exports = {
  up: (queryInterface) =>
      queryInterface.bulkInsert(
          'Users',
          [
            {
              id: 1,
              full_name: 'Fabio Solenzo',
              email: 'fabious@gmail.com ',
              phone: 2348062368553,
              country_code: '+234',
              created_at: new Date(0).toISOString(),
              updated_at: new Date(0).toISOString(),
            },
            {
              id: 2,
              full_name: 'Mano lariga',
              email: 'manoloous@gmail.com ',
              phone: 23462368543,
              country_code: '+234',
              created_at: new Date(0).toISOString(),
              updated_at: new Date(0).toISOString(),
            },
            {
              id: 3,
              full_name: 'DOntega mapusa',
              email: 'mapungo@gmail.com ',
              phone: 234623643253,
              country_code: '+234',
              created_at: new Date(0).toISOString(),
              updated_at: new Date(0).toISOString(),
            },
          ],
          {}
      ),
  down: (queryInterface) =>
      queryInterface.bulkDelete('Users', null, {}),
}