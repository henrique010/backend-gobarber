module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn(
      'appointments',
      'caceled_at',
      'canceled_at'
    );
  },

  down: queryInterface => {
    return queryInterface.renameColumn(
      'appointments',
      'canceled_at',
      'caceled_at'
    );
  },
};
