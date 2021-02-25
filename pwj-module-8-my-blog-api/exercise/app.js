const express = require('express');
const app = express();
const Post = require('./api/models/posts.js');
const postsData = new Post();


// adding middleware to handle Access-Control-Allow-Origin. Stands in between api endpoints and request that gets hit
app.use( function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

// Getting the api posts from our json
app.get('/api/posts', (req, res)=>{
    res.status(200).send(postsData.get());
});

// Getting an individual post via post_id
app.get('/api/posts/:post_id', (req, res)=>{
    const postId = req.params.post_id;
    const foundPost = postsData.getIndividualBlog(postId);
    if(foundPost) {
        res.status(200).send(foundPost)
    } else {
        res.status(404).send("Not Found.")
    }
})

app.listen(3000, ()=>console.log('Listening on http://localhost:3000'));