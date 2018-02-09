/**
 * Constants file
 */
const constants = {

	// Constants for movement module
  // Code: 2xxx
  movement: {
    // 20xx
    success: {
      CREATED: { code: 2000, message: 'movement successfully created' },
      UPDATED: { code: 2001, message: 'movement successfully updated' },
      REMOVED: { code: 2002, message: 'movement successfully removed' },
    },
    // 21xx
    error: {
      DESTINY_HARDWARE: { code: 2100, message: 'Target hardware is different from the station hardware' },
    },
  },

  // Constants for operator module
  // Code: 3xxx
  operator: {
    // 30xx
    success: {
      CREATED: { code: 3000, message: 'Operator successfully created' },
      UPDATED: { code: 3001, message: 'Operator successfully updated' },
      REMOVED: { code: 3002, message: 'Operator successfully removed' },
    },
    // 31xx
    error: {
      OPERATOR_INVALID: { code: 3100, message: 'The operator is invalid!' },
    },
  },

  // Constants for production order module
  // Code: 4xxx
  production_order: {
    // 40xx
    success: {
      CREATED: { code: 4000, message: 'Production Order successfully created' },
      UPDATED: { code: 4001, message: 'Production Order successfully updated' },
      REMOVED: { code: 4002, message: 'Production Order successfully removed' },
    },
    // 41xx
    error: {
      PRODUCTION_ORDER_INVALID: { code: 4100, message: 'The production order is invalid!' },
    },
  },
};

export { constants as default };
