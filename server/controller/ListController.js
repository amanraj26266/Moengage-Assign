const List = require("../schema/List");

const createList = async (req, res) => {
  try {
    const list = new List({
      name: req.body.name,
      description: req.body.description,
      items: req.body.items,
    });
    await list.save();
    res.json({
      message: "List created successfully",
      data: list,
    });
  } catch (error) {
    res.json({
      message: "List creation failed",
      error: error,
    });
  }
};

const getLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.json({
      message: "Lists fetched successfully",
      data: lists,
    });
  } catch (error) {
    res.json({
      message: "Lists fetch failed",
      error: error,
    });
  }
};

const getListById = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.json({
      message: "List fetched successfully",
      data: list,
    });
  } catch (error) {
    res.json({
      message: "List fetch failed",
      error: error,
    });
  }
};

module.exports = {
  createList,
  getLists,
  getListById,
};
