import express from "express";
const app = express();
const port = 3000;
import mongoose from "mongoose";
import cors from "cors";
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb+srv://Esmer:esmer123@cluster0.zbeu6hy.mongodb.net/")
  .then(() => console.log("Connected!"));

const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const Employee = mongoose.model("Kitten", employeeSchema);

app.get("/employee", async (req, res) => {
  const getAllEmployee = await Employee.find();
  res.send(getAllEmployee);
});
app.get("/employee/:id", async (req, res) => {
  let { id } = req.params;
  const getEmployee = await Employee.findById(id);
  res.send(getEmployee);
});

app.post("/employee", async (req, res) => {
  const obj = req.body;

  const postEmployee = new Employee(obj);
  await postEmployee.save();
  res.send(postEmployee);
});

app.put("/employee/:id", async (req, res) => {
  const obj = req.body;
  let { id } = req.params;
  const putEmployee = new Employee.findByIdAndUpdate(id, obj);
  res.send(putEmployee);
});

app.delete("/employee/:id", async (req, res) => {
  let { id } = req.params;
  const deleteEmployee = await Employee.findByIdAndDelete(id);
  res.send(deleteEmployee);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
