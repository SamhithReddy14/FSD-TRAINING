const users = [
  {
    id: 1,
    name: "Sam",
    email: "sam@example.com"
  }
];

function getUsers(req, res) {
  res.json({
    message: "Users fetched successfully",
    data: users
  });
}

function createUser(req, res) {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    data: newUser
  });
}

module.exports = {
  getUsers,
  createUser
};
