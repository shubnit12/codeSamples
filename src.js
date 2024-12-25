let main = document.querySelector("#main");
console.log(main);
main.addEventListener("click", (event) => {
  let isButton = event.target.getAttribute("class");
  if (isButton === "downButton" || isButton === "upButton") {
    let currentClickedNode = event.target.parentNode;
    let outerParentNode = currentClickedNode.parentNode;
    let arrowDirection = event.target.getAttribute("class");
    let aboveNode = currentClickedNode.previousElementSibling;
    let belowNode = currentClickedNode.nextElementSibling;
    console.log("outerParentNode", outerParentNode);
    console.log("currentClickedNode ", currentClickedNode);
    console.log("aboveNode ", aboveNode);
    console.log("belowNode ", belowNode);
    console.log("arrowDirection", arrowDirection);
    //
    //aerrow directction
    if (arrowDirection === "downButton") {
      outerParentNode.insertBefore(belowNode, currentClickedNode);
    }
    if (arrowDirection === "upButton") {
      outerParentNode.insertBefore(currentClickedNode, aboveNode);
    }
    outerParentNode.querySelectorAll("button").forEach((element) => {
      element.remove();
    });
    let mappingButtons = outerParentNode.querySelectorAll("div");
    console.log(mappingButtons);
    for (let i = 0; i < mappingButtons.length; i++) {
      if (i === 0) {
        mappingButtons[i].appendChild(downButtonCreate());
      } else if (i === mappingButtons.length - 1) {
        mappingButtons[i].appendChild(upButtonCreate());
      } else {
        mappingButtons[i].appendChild(upButtonCreate());
        mappingButtons[i].appendChild(downButtonCreate());
      }
    }
  }
});
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {

//   });
// });

function isTopNode(aboveNode) {
  if (!aboveNode) {
    return true;
  } else {
    return false;
  }
}
function isBottomNode(belowNode) {
  if (!belowNode) {
    return true;
  } else {
    return false;
  }
}

function downButtonCreate() {
  let button = document.createElement("button");
  button.setAttribute("class", "downButton");
  button.setAttribute("type", "button");
  button.innerText = "↓";
  return button;
}
function upButtonCreate() {
  let button = document.createElement("button");
  button.setAttribute("class", "upButton");
  button.setAttribute("type", "button");
  button.innerText = "↑";
  return button;
}
// document.body.class;
