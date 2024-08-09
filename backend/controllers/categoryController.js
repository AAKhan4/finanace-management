const categoryService = require("../services/categoryService");
const { swapCategoryMany } = require("../services/transactionService");
const { deleteCategoryRelationMany } = require("../services/budgetService");

exports.getCategories = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json(await categoryService.findByUser(req.cookies.user));
};

exports.getById = async (req, res) => {
  const category = await categoryService.findById(req.params.id);
  if (category.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json(category);
};

exports.createCategory = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  if (!req.body.name || !req.body.description)
    return res.status(400).json({ message: "Missing required fields" });

  res
    .status(201)
    .json(
      await categoryService.createCategory(
        req.body.name,
        req.body.description,
        req.cookies.user
      )
    );
};

exports.updateCategory = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  const category = await categoryService.findById(req.params.id);
  if (category.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  if (!(req.body.name || req.body.description))
    return res.status(400).json({ message: "Missing fields to update" });

  res
    .status(200)
    .json(await categoryService.updateCategory(req.params.id, req.body));
};

exports.deleteCategory = async (req, res) => {
  if (!req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  const category = await categoryService.findById(req.params.id);
  if (category.user != req.cookies.user)
    return res.status(401).json({ message: "Unauthorized" });

  swapCategoryMany(
    category,
    await categoryService.findDefault(req.cookies.user)
  );
  deleteCategoryRelationMany(req.params.id);

  await categoryService.deleteCategory(req.params.id);
  res.status(200).json({ message: "Category deleted" });
};
