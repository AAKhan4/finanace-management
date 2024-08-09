const Category = require("../schema/CategorySchema");

exports.findByUser = async (user) => {
  try {
    return await Category.find({ user });
  } catch (e) {
    console.log(e);
  }
};

exports.findById = async (id) => {
  try {
    return await Category.findById(id);
  } catch (e) {
    console.log(e);
  }
};

exports.findDefault = async (user) => {
  try {
    return await Category.findOne({ name: "Other", user });
  } catch (e) {
    console.log(e);
  }
};

exports.createCategory = async (name, description, user) => {
  const category = new Category({
    name,
    description,
    user,
  });

  try {
    return await category.save();
  } catch (e) {
    console.log(e);
  }
};

exports.updateCategory = async (id, data) => {
  try {
    const category = await Category.findById(id);
    if (data.name) category.name = data.name;
    if (data.description) category.description = data.description;

    return await category.save();
  } catch (e) {
    console.log(e);
  }
};

exports.deleteCategory = async (id) => {
  try {
    await Category.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
  }
};
