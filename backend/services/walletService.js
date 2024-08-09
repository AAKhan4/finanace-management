const Wallet = require("../schema/WalletSchema");

exports.findByUser = async (user) => {
  try {
    return await Wallet.find({ user: user });
  } catch (e) {
    console.log(e);
  }
};

exports.findById = async (id) => {
  try {
    return await Wallet.findById(id);
  } catch (e) {
    console.log(e);
  }
};

exports.createWallet = async (name, type, balance, user) => {
  try {
    let wallet = new Wallet({
      name,
      type,
      balance,
      user,
    });
    wallet = await wallet.save();
    return wallet;
  } catch (e) {
    console.log(e);
  }
};

exports.updateWallet = async (id, data) => {
  try {
    return await Wallet.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteWallet = async (id) => {
  try {
    return await Wallet.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
  }
};
