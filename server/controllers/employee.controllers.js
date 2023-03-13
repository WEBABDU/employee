import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Employee from "../mongodb/models/employee.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllEmployees = async (req, res) => {
  try {
    const match = {};

    if (req.query.first_name) {
      match.first_name = new RegExp(req.query.first_name, "i");
    }

    const employees = await Employee.aggregate([{ $match: match }]);

    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createEmployee = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      middle_name,
      avatar,
      gender,
      position,
      experience,
      hired_date,
      status,
      birth_date,
      phone_number,
      mail,
      adress,
      nationality,
      marital_status,
      salary,
      mother_tongue,
      religion,
      working_status,
      comment,
    } = req.body;

    const condidate = await Employee.findOne({ mail });

    if (condidate) {
      return res
        .status(400)
        .json({ message: "User with this email already exist" });
    }

    const photoUrl = await cloudinary.uploader.upload(avatar);

    const employee = new Employee({
      first_name,
      last_name,
      middle_name,
      avatar: photoUrl.url,
      gender,
      position,
      experience,
      hired_date,
      status,
      birth_date,
      phone_number,
      mail,
      adress,
      nationality,
      marital_status,
      salary,
      mother_tongue,
      religion,
      working_status,
      comment,
    });

    await employee.save();

    res.status(201).json({ massage: "employee created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      middle_name,
      avatar,
      gender,
      position,
      experience,
      hired_date,
      status,
      birth_date,
      phone_number,
      mail,
      adress,
      nationality,
      marital_status,
      salary,
      mother_tongue,
      religion,
      working_status,
      comment,
    } = req.body;

    const { id } = req.params;
    const photoUrl = await cloudinary.uploader.upload(avatar);

    await Employee.findByIdAndUpdate(
      { _id: id },
      {
        first_name,
        last_name,
        middle_name,
        avatar: photoUrl.url || avatar,
        gender,
        position,
        experience,
        hired_date,
        status,
        birth_date,
        phone_number,
        mail,
        adress,
        nationality,
        marital_status,
        salary,
        mother_tongue,
        religion,
        working_status,
        comment,
      }
    );

    res.status(200).json({ message: "employee updated" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.status(204).json({ message: "employee was deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
