

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

// fetch posts from the api
const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        buildPosts(data);
    })
        
}

// builds posts on the frontend
const buildPosts = (blogPosts) => {
    // console.log(blogPosts);
    let blogPostsContent = "";
    for(blogPost of blogPosts) {
        blogPostsContent += `
            <div class='post'>
                <div class='post-image'></div>
                <div class='post-content'>
                    <div class='post-date'>Jan 11, 2021</div>
                    <div class='post-title'>Title</div>
                    <div class='post-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat.</div>
                </div>
            </div>
        `
    }
}