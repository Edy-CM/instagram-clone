const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.getElementById("posts")

for (post in posts) {
    post = posts[post]
    const newPost = document.createElement("div")
    newPost.className = "post-section"
    newPost.innerHTML = `
    <div class="profile-section">
        <img class="profile" src="${post.avatar}" alt="${post.name}">
        <div class="user-info">
            <h3 class="profile-name">${post.name}</h3>
            <p class="location">${post.location}</p>
        </div>
    </div>
    <img class="post-img" src="${post.post}" alt="Post from ${post.username}">
    <div class="buttons">
        <img class="btn" src="images/icon-heart.png" alt="like button">
        <img class="btn" src="images/icon-comment.png" alt="comment button">
        <img class="btn" src="images/icon-dm.png" alt="share button">
    </div>
    <div class="description">
        <p>${post.likes} likes</p>
        </p><span class="username">${post.username}</span> ${post.comment}</p>
    </div>
    `
    postsEl.appendChild(newPost)
}