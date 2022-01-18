const jwt = require("express-jwt");

const authorize = (roles = []) => {
  // roles param can be a single role string (e.g. Role.User or 'User')
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === "string") {
    roles = [roles];
  }

  return [
    jwt({ secret: "Secret Movie Review", algorithms: ["HS256"] }),
    (req, res, next) => {
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      //successful
      next();
    },
  ];
};

module.exports = authorize;
