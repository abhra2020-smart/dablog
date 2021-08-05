function like(postId) {
  const likeCount = document.getElementById(`likes-count-${postId}`);
  const like = document.getElementById(`like-button-${postId}`);

  fetch(`/like-post/${postId}`, { method: "POST" })
    .then((res) => res.json())
    .then((data) => {
      likeCount.innerHTML = data["likes"];
      if (data["liked"] === true) {
        like.className = "fas fa-thumbs-up";
      } else {
        like.className = "far fa-thumbs-up";
      }
    })
    .catch((e) => alert("Error: Could not like post. Try again or reload."));
}
