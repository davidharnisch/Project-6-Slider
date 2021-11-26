// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
  
  let btnLeft = document.querySelector(".btn-left")
  let btnRight = document.querySelector(".btn-right")
  let bgImage = document.querySelector(".img-container")
  let x = 0
  


  btnLeft.addEventListener("click", changeImageLeft);
  btnRight.addEventListener("click", changeImageRight);

  function changeImageLeft() {
        
    x--;
    if (x<0) {
      x = pictures.length - 1
    }
    bgImage.style.backgroundImage = "url('../img/" + pictures[x] + ".jpeg')";
  }

  function changeImageRight() {
        
    x++;
    if (x>4) {
      x = 0
    }
    bgImage.style.backgroundImage = "url('../img/" + pictures[x] + ".jpeg')";
  }
 
})();
