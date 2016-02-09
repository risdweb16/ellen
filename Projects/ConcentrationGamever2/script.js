$(document).ready(function() {
    $('div').fadeIn('slow');
});



var myImgs = [
  "leaf1.png",
  "leaf2.png",
  "leaf3.png",
  "leaf4.png",
  "leaf5.png",
  "leaf6.png",
  "leaf7.png",
  "leaf8.png",
  "leaf9.png",
  "leaf10.png",
];


var index;
var myImgs = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10"];
for (index = 0; index < myImgs.length; index++) {
    text += myImgs[index];
}


function shuffle(array) {
  var index = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {


    randomIndex = "leaf1.png"(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
});


object.onclick=function(){myScript};
$("myImgs").hide(fast);
}
});

$("button").click(function(){
    $("myImgs").hide(1000);
});

