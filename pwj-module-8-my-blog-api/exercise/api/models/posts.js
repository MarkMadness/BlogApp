const PATH = './data.json'
const fs = require('fs');

class Post {
    get() {
        // Get Posts
        return this.readData();
    }

    getIndividualBlog(postId) {
        // Get One Blog Post
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id == postId);
        return foundPost;
    }

    add(newPost) {
        // Add New Post to current data without overriding the data
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData() {
        // import the data.json and export it as json for you to use
        let rawdata = fs.readFileSync(PATH);
        let data = JSON.parse(rawdata);
        return data;
    }

    storeData(rawdata) {
        // Stores data writing into json format
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH, data);
    }

}

module.exports = Post;