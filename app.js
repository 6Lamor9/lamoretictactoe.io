function toogle_animation() {
    const toogle_efect = document.querySelector(".mainu-toogle");
    const mainu = document.querySelector(".mainu");
    var myconter = 1;
      
      
    let ecfect = toogle_efect.addEventListener("click", e=>{
          if (myconter%2==0){
              document.querySelector(".line2").style.opacity = '1'
              document.querySelector(".line1").style.transform = ''
              document.querySelector(".line3").style.transform = ''
              mainu.style.display ="none"
              myconter++
          }
          else {
              document.querySelector(".line2").style.opacity = '0'
              document.querySelector(".line1").style.transform = 'translate(0px,0.5rem)  rotate(45deg)'
              document.querySelector(".line3").style.transform = 'translate(0px,-0.5rem) rotate(135deg)'
              mainu.style.display ="flex"
              myconter++
          }
          // toogle_efect.style.backgroundColor = "red"
      })};
toogle_animation()