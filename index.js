import express from 'express';

const app = express();

app.use(express.json());
const tasks = [];

app.get ('/health' , (req,res)=>{
 res.json({
    success : true,
    message: 'server is Healthy'
 })
})
app.post('/create-task' , (req,res)=> {
    const {id , title , priority }  = req.body;

    const newTask = {
     "id": id ,
     "title" : title ,
     "priority" : priority  
    }
    task.push(newTask);

    res.json({
        success: true ,
        message : 'Task created successfully'  ,
        data:newTask
    })
})

app.get('/all-tasks' , (req,res)=> {
   res.json({
    success:true ,
    message: 'All Task feteched successfully' ,
    data:tasks
   })
})




const PORT = 5000;

app.listen(PORT , ()=> {
    console.log(`Server is running on port ${PORT}`);
    });
