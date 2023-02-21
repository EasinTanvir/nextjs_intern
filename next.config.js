const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        SERVER_URL: "http://localhost:5000",
      },
    };
  }

  return {
    env: {
      SERVER_URL: "https://form-submit-uxr0.onrender.com",
    },
  };
};
