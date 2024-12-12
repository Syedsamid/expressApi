import axios from "axios";

async function apicall(){

    try {
        let call =  await axios.get ("https://jsonplaceholder.typicode.com/posts");
        console.log(call.data);

        let finalData = call.data;
        finalData.map((x)=>{
            console.log(x.title, x.id);
        });

    } catch (error) {
        console.log(error);
    }
}
apicall("id")