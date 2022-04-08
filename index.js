function Play()
{
  var myAudio = document.getElementById("audioval");
  if(myAudio.paused) {
      myAudio.play();
  }
  else {
     myAudio.pause();
  }
}
let correctAudio = new Audio();
correctAudio.src = './assets/correct.mp3'

let incorrectAudio = new Audio();
incorrectAudio.src = './assets/wrong.mp3'



//*********************************** DropDown Icon Function ***********************************//


arr = [1, 2, 3, 4, 5];

function getSelectedOption(sel) {
  var sel = document.getElementById('dropdown_1');
  var opt = sel.options[sel.selectedIndex];
  console.log(opt.value);
  if (opt.value == arr[1]) {
      correctAudio.play();

      document.getElementById("dropdown_1").style.color = "blue";
      document.getElementById("dropdown_1").style.border = "3px solid green";
      document.getElementById("dropdown_1").style.pointerEvents="none";

  } else {
      incorrectAudio.play();

      setTimeout(() => {
          document.getElementById("dropdown_1").value = "";



      }, 2000)


  }
}

function getSelectedOption2(sel) {
  var sel = document.getElementById('dropdown_2');
  var opt = sel.options[sel.selectedIndex];
  console.log(opt.value);
  if (opt.value == arr[2]) {
      correctAudio.play();
      document.getElementById("dropdown_2").style.color = "blue";
      document.getElementById("dropdown_2").style.border = "3px solid green";
      document.getElementById("dropdown_2").style.pointerEvents="none";

  } else {
      incorrectAudio.play();
      setTimeout(() => {
          document.getElementById("dropdown_2").value = "";



      }, 2000)


  }
}

function getSelectedOption3(sel) {
  var sel = document.getElementById('dropdown_3');
  var opt = sel.options[sel.selectedIndex];
  console.log(opt.value);
  if (opt.value == arr[4]) {
      correctAudio.play();
      document.getElementById("dropdown_3").style.color = "blue";
      document.getElementById("dropdown_3").style.border = "3px solid green";
      document.getElementById("dropdown_3").style.pointerEvents="none";

  } else {

      incorrectAudio.play();
      setTimeout(() => {
          document.getElementById("dropdown_3").value = "";



      }, 2000)


  }
}
function getSelectedOption4(sel) {
  var sel = document.getElementById('dropdown_4');
  var opt = sel.options[sel.selectedIndex];
  console.log(opt.value);
  if (opt.value == arr[3]) {
      correctAudio.play();
      document.getElementById("dropdown_4").style.color = "blue";
      document.getElementById("dropdown_4").style.border = "3px solid green";
      document.getElementById("dropdown_4").style.pointerEvents="none";
  } else {
      incorrectAudio.play();
      setTimeout(() => {
          document.getElementById("dropdown_4").value = "";



      }, 2000)


  }
}
function getSelectedOption5(sel) {
  var sel = document.getElementById('dropdown_5');
  var opt = sel.options[sel.selectedIndex];
  console.log(opt.value);
  if (opt.value == arr[0]) {
      correctAudio.play();
      document.getElementById("dropdown_5").style.color = "blue";
      document.getElementById("dropdown_5").style.border = "3px solid green";
      document.getElementById("dropdown_5").style.pointerEvents="none";

  } else {
      incorrectAudio.play();
      setTimeout(() => {
          document.getElementById("dropdown_5").value = "";



      }, 2000)


  }
}

function replay() {
  //img1
  document.getElementById("dropdown_1").value = "";
  document.getElementById("dropdown_1").style.opacity = "";
  document.getElementById("img1").style.opacity = "";
  document.getElementById("dropdown_1").style.pointerEvents = "";
  document.getElementById("img1").style.pointerEvents = "";

  document.getElementById("dropdown_1").style.color = "black";
   document.getElementById("dropdown_1").style.border = "1px solid black";
  //img2
  document.getElementById("dropdown_2").value = "";
  document.getElementById("dropdown_2").style.opacity = "";
  document.getElementById("img2").style.opacity = "";
  document.getElementById("dropdown_2").style.pointerEvents = "";
  document.getElementById("img2").style.pointerEvents = "";
  document.getElementById("dropdown_2").style.color = "black";
   document.getElementById("dropdown_2").style.border = "1px solid black";

  //img3
  document.getElementById("dropdown_3").value = "";
  document.getElementById("dropdown_3").style.opacity = "";
  document.getElementById("img3").style.opacity = "";
  document.getElementById("dropdown_3").style.pointerEvents = "";
  document.getElementById("img3").style.pointerEvents = "";
  document.getElementById("dropdown_3").style.color = "black";
   document.getElementById("dropdown_3").style.border = "1px solid black";

  //img4
  document.getElementById("dropdown_4").value = "";
  document.getElementById("dropdown_4").style.opacity = "0.2";
  document.getElementById("img4").style.opacity = "0.8";
  document.getElementById("dropdown_4").style.pointerEvents = "";
  document.getElementById("img4").style.pointerEvents = "";
  document.getElementById("dropdown_4").style.color = "black";
  document.getElementById("dropdown_4").style.border = "1px solid black";
  //img5
  document.getElementById("dropdown_5").value = "";
  document.getElementById("dropdown_5").style.opacity = "";
  document.getElementById("img5").style.opacity = "";
  document.getElementById("dropdown_5").style.pointerEvents = "";
  document.getElementById("img5").style.pointerEvents = "";
  document.getElementById("dropdown_5").style.color = "black";
  document.getElementById("dropdown_5").style.border = "1px solid black";


}
function show() {
  //img1
  

  document.getElementById("dropdown_1").value = "2";
  document.getElementById("dropdown_1").style.opacity = "0.2";
  document.getElementById("img1").style.opacity = "0.8";
  document.getElementById("img1").style.pointerEvents = "none";
  //img2
  document.getElementById("dropdown_2").value = "1";
  document.getElementById("dropdown_2").style.opacity = "0.2";
  document.getElementById("img2").style.opacity = "0.8";
  document.getElementById("img2").style.pointerEvents = "none";


  //img3
  document.getElementById("dropdown_3").value = "4";
  document.getElementById("dropdown_3").style.opacity = "0.2";
  document.getElementById("img3").style.opacity = "0.8";
  document.getElementById("img3").style.pointerEvents = "none";

  //img4
  document.getElementById("dropdown_4").value = "5";
  document.getElementById("dropdown_4").style.opacity = "0.2";
  document.getElementById("img4").style.opacity = "0.8";
  document.getElementById("img4").style.pointerEvents = "none";

  //img5
  document.getElementById("dropdown_5").value = "3";
  document.getElementById("dropdown_5").style.opacity = "0.2";
  document.getElementById("img5").style.opacity = "0.8";
  document.getElementById("img5").style.pointerEvents = "none";


}
