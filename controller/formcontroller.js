import Form from "../models/form.js";

export const getForm = async (req, res) => {
  try {
    const forms = await Form.find({}, "ownerName addressType phoneNo createdAt");
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: "Forms not found", error: error.message });
  }
};

export const getFormById = async (req, res) => {
    try {
      const form = await Form.findById(req.params.id);
      if (!form) {
        return res.status(404).json({ message: "Form not found" });
      }
      console.log(form)
      res.status(200).json(form);
    } catch (error) {
      res.status(500).json({ message: "Error fetching form", error });
    }
  };

  export const createForm = async (req, res) => {
    try {
      const newForm = new Form(req.body);
      const savedForm = await newForm.save();
      res.status(201).json(savedForm);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to create form", error });
    }
  };