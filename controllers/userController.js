const users = [
  { id: 1, username: "alex" },
  { id: 2, username: "maria" },
];

function getUsers(req, res) {
  res.render("users/index", { users });
}

function getUserById(req, res) {
  const user = users.find((item) => item.id === Number(req.params.userId));

  if (!user) {
    return res.status(404).send("User not found.");
  }

  res.render("users/show", { user });
}

function createUser(req, res) {
  const { username, password } = req.body;

  const user = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    username: username.trim(),
  };

  users.push(user);

  res.status(201).send(`User "${user.username}" created successfully.`);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
