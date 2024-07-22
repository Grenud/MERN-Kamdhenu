import app from "./api/index.js";
const PORT = process.env.PORT;



app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}..............`)
})


