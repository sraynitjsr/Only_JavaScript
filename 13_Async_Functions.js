document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts-container");
  async function fetchPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await response.json();
      displayPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  function displayPosts(posts) {
    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>
      `;
      postsContainer.appendChild(postElement);
    });
  }
  fetchPosts();
});
