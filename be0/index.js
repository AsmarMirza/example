import express from 'express'
const app = express()
const port = 3000
import mongoose from 'mongoose';
import cors from 'cors'
app.use(express.json())
app.use(cors())

const projectSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    title: String
  });
  const Project = mongoose.model('Project', projectSchema);
mongoose.connect('mongodb+srv://Esmer:esmer123@cluster0.zbeu6hy.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(()=>console.log("not connected!"))

app.get('/Project', async (req, res) => {
    const getAllProject= await Project.find()
  res.send(getAllProject)
})


app.get('/Project/:id', async (req, res) => {
    let {id}=req.params
    const getDataById= await Project.findById(id)
  res.send(getDataById)
})


app.put('/Project/:id', async (req, res) => {
    const obj=req.body
    let {id}=req.params
    const updateData= await Project.findByIdAndUpdate(id,obj)
  res.send(updateData)
})

app.delete('/Project/:id', async (req, res) => {
    
    let {id}=req.params
    const deleteData= await Project.findByIdAndDelete(id)
  res.send(deleteData)
})

app.post('/Project', async (req, res) => {
const obj=req.body
    const postData= new Project(obj)
    await postData.save()
  res.send(postData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})