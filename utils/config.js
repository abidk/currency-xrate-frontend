if (typeof window === "undefined") {
  /**
   * Settings exposed to the server.
   */
  module.exports = {
    BACKEND_URL: process.env.BACKEND_URL,
  };
} else {
  /**
   * Settings exposed to the client.
   */
  module.exports = {
    BACKEND_URL: process.env.BACKEND_URL,
  };
}
