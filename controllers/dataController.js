import Data from "../models/Data.js";

export const createData = async (req, res) => {
  console.log(req.body);
  // const newData = new Data(req.body);
  const jsonData = req.body;

  try {
    // const savedData = await newData.save();
    const savedData = await Data.insertMany(jsonData);

    res.status(200);
    res.json({
      success: true,
      message: "Successfully created",
      data: savedData,
    });
  } catch (err) {
    res.status(500);
    res.json({
      success: false,
      message: "Failed to create. Try again",
      error: err.message,
    });
  }
};

export const updateData = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedData = await Data.findOneAndUpdate(
      { id: id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200);
    res.json({
      success: true,
      message: "Successfully updated",
      data: updatedData,
    });
  } catch (err) {
    res.status(500);
    res.json({
      success: false,
      message: "Failed to update",
      error: err.message,
    });
  }
};

export const deleteData = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteData = await Data.findOneAndDelete(
      { id: id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200);
    res.json({
      success: true,
      message: "Successfully delete",
      data: deleteData,
    });
  } catch (err) {
    res.status(500);
    res.json({
      success: false,
      message: "Failed to Delete",
      error: err.message,
    });
  }
};

export const getAllData = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(200);
    res.json({
      success: true,
      message: "Successfully",
      data: data,
    });
  } catch (err) {
    res.status(500);
    res.json({
      success: false,
      message: "Not Found",
      error: err.message,
    });
  }
};
export const getSingleData = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Data.findOne({ id: id });
    res.status(200);
    res.json({
      success: true,
      message: "Successfully",
      data: data,
    });
  } catch (err) {
    res.status(500);
    res.json({
      success: false,
      message: "Not Found",
      error: err.message,
    });
  }
};
