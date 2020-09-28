const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const pseudoElement = document.getElementById("pseudo");
  const pseudoValue = pseudoElement.value;
  const commentElement = document.getElementById("comment");
  const commentContent = commentElement.value;

  // ul qui contient tous les commentaires
  const commentContainer = document.getElementById("comment-container");

  // créer un <li></li> qui va contenir le nouveau
  const commentNode = document.createElement("li");

  // créer <h4>pseudo</h4>
  const pseudoNode = document.createElement("h4");
  pseudoNode.innerHTML = pseudoValue;

  // créer <p>commentaire</p>
  const contentNode = document.createElement("p");
  contentNode.innerHTML = commentContent;

  // ajoute le pseudo et commentaire au <li></li>
  commentNode.appendChild(pseudoNode);
  commentNode.appendChild(contentNode);

  // ajouter le <li></li> au parent <ul></ul>
  commentContainer.appendChild(commentNode);
});