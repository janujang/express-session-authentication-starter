module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.admin) {
    return next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
};
