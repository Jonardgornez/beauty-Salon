import express from 'express';
import user from "./routes/router.js"
const app = express();


app.use("/user" ,user)



const PORT = 3001
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));

