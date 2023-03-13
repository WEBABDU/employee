import mongoose from "mongoose";

const EmployeeShema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  middle_name: { type: String, required: true },
  avatar: { type: String, default: null },
  gender: { type: Number, required: true },
  position: { type: String, required: true },
  experience: { type: Number, required: true },
  hired_date: { type: Number, required: true },
  birth_date: { type: Number, required: true },
  phone_number: { type: String, required: true },
  mail: { type: String, required: true },
  adress: { type: String, required: true },
  nationality: { type: String, required: true },
  marital_status: { type: Number, required: true },
  salary: { type: Number, required: true },
  mother_tongue: { type: String, required: true },
  religion: { type: String, required: true },
  working_status: { type: Number, required: true },
  comment: { type: String, default: "" },
});

const employeeModel = mongoose.model("Employee", EmployeeShema);

export default employeeModel;
