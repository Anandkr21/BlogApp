const express = require('express')
const app = express()

app.use(express.json({extended:false}))

const articlesInfo = {
    "learn-react":{
        comments:[],
    },
    "learn-node":{
        comments:[],
    },
    "my-thoughts-on-learning-react":{
        comments:[],
    },
}

app.post("/api/articles/:name/add-comments", (req,res) =>{
    const {username, text} = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({username,text});
    res.status(200).send(articlesInfo[articleName])
})


app.listen(8080, () =>{
    console.log('Running');
})

