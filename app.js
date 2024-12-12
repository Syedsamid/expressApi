import express from "express"

const PORT = 5000;

const app = express();
app.use(express.json())

app.get("/sdf",(req,res)=>{
    try {
        res.send("hello samid")
    } catch (error) {
        console.log(error);
    }
    
})

app.post("/api/register",(req,res)=>{
    try {
        let userInpur = req.body;
        console.log(userInpur);

        res.status(200).json(userInpur)
    } catch (error) {
        console.log(error);
    }
})

// Using PUT api
 
app.put("/api/users/:id",(req,res)=>{
    try {
        let userID = req.params.id;
        console.log(userID);
        res.status(200).json(userID)

    } catch (error) {
        console.log(error.name);
    }
})

app.get("/link/:url",(req,res)=>{
    try {
        let usereUrl = req.params.url;
        console.log(usereUrl);
        res.status (200).redirect(`https://${usereUrl}`)

    } catch (error) {
        console.log(error.name);
    }
})


app.put("/search",(req,res)=>{
    try {
        let query = req.query;
        console.log(query);
        res.status(200).json(query)
    } catch (error) {
        console.log(error.name);
    }
})

app.listen(PORT,()=>{

    console.log(`Server is running ${PORT}`);
})
