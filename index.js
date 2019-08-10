let $start = document.querySelector("#start"),
  $game = document.querySelector("#game"),
  score = 0;

$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBoxClick);

function startGame() {
  $start.classList.add("hide");
  $game.style.cssText = "background : #fff";

  renderBox();
}

function handleBoxClick(e) {
  if (e.target.dataset.box) {
    score++;
    renderBox();
  }
}

function renderBox() {
  $game.innerHTML = "";
  let box = document.createElement("div");
  box.style.cssText = `height : 50px;
                        width : 50px;
                        position : absolute;
                        background : #000;
                        left : 70px;
                        top : 50px;
                        cursor : pointer`;
  box.setAttribute("data-box", "true");
  $game.insertAdjacentElement("afterbegin", box);
}
