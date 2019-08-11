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
  let boxSize = getRandom(30, 100);
  $game.innerHTML = "";
  let gameSize = $game.getBoundingClientRect();
  let maxTop = gameSize.height - boxSize;
  let maxLeft = gameSize.width - boxSize;
  let box = document.createElement("div");
  box.style.cssText = `height : ${boxSize}px;
                        width : ${boxSize}px;
                        position : absolute;
                        background : #${Math.floor(
                          Math.random() * (999999 - 100000) + 100000
                        )};
                        left : ${getRandom(0, maxLeft)}px;
                        top : ${getRandom(0, maxTop)}px;
                        cursor : pointer`;
  box.setAttribute("data-box", "true");
  $game.insertAdjacentElement("afterbegin", box);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
