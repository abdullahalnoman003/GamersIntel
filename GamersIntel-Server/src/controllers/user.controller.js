function createUserController({ userCollection }) {
  const createUser = async (req, res) => {
    try {
      const userInfo = req.body;
      const userExist = await userCollection.findOne({
        email: userInfo.email,
      });

      if (userExist) {
        return res.status(200).send({
          message: "User Already Exist",
        });
      }

      const now = new Date().toISOString();
      const newUser = {
        name: userInfo.name || null,
        email: userInfo.email,
        photoURL: userInfo.photoURL || null,
        gamerTag: userInfo.gamerTag || null,
        bio: userInfo.bio || null,
        favoriteGenres: userInfo.favoriteGenres || null,
        platforms: userInfo.platforms || null,
        country: userInfo.country || null,
        joinDate: userInfo.joinDate || now,
        lastLogin: userInfo.lastLogin || now,
      };

      await userCollection.insertOne(newUser);
      return res.status(201).send({
        message: "User created successfully",
      });
    } catch (err) {
      console.error("DB error:", err);
      return res.status(500).send({ error: "Failed to save user" });
    }
  };

  const getUsers = async (req, res) => {
    try {
      const result = await userCollection.find().toArray();
      return res.send(result);
    } catch (err) {
      console.error("DB error:", err);
      return res.status(500).send({ error: "Failed to fetch users" });
    }
  };

  return {
    createUser,
    getUsers,
  };
}

module.exports = {
  createUserController,
};
