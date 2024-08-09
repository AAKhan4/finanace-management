const User = require("../schema/UserSchema");

exports.createUser = async (username, email, hashedPass) => {
  try {
    let user = new User({
      username,
      email,
      password: hashedPass,
    });
    user = await user.save();
    return user;
  } catch (e) {
    console.log(e);
  }
};

exports.getUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (e) {
    console.log(e);
  }
};

exports.getUserById = async (id) => {
  try {
    return await User.findById(id);
  } catch (e) {
    console.log(e);
  }
};

exports.deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
  }
};

exports.updateUser = async (id, data) => {
  try {
    return await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  } catch (e) {
    console.log(e);
  }
};
