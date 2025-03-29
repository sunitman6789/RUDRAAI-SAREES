function submitComment(commentSectionId) {
    let commentBox = document.querySelector(`#${commentSectionId} textarea`);
    let commentText = commentBox.value;
    if (commentText.trim() === "") return;
    
    let commentDiv = document.createElement("div");
    commentDiv.textContent = commentText;
    
    document.getElementById(commentSectionId).appendChild(commentDiv);
    commentBox.value = "";
}

document.querySelectorAll('.rating span').forEach((star, index, stars) => {
    star.addEventListener('click', function() {
        let rating = index + 1;
        alert("You rated " + rating + " stars");
    });
});
