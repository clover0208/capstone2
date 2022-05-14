function myFunction(){
    document.getElementById('video-103').style.display='block';
    // document.getElementById('door').style.display='block';
}
function myFunctiontwo(){
    console.log("hello")
    document.getElementById('door').style.display='block';
}

const EL_img = document.querySelector("#bigdiv");
const pos = {x:0, y:0};


// player.image = new Image();
// player.image.src = "./people_down.png";
// player.imgUp = new Image();
// player.imgUp.src = "./people_up.png";
// player.imgLeft = new Image();
// player.imgLeft.src = "./people_left.png";
// player.imgRight = new Image();
// player.imgRight.src = "./people_righ[]]]]].png";

document.addEventListener("keydown", (ev) => {

//   function updateKeys() {
//     if (keysPressed[0])
//         left -= speed;
//     if (keysPressed[2])
//         left += speed;
//     if (keysPressed[1])
//         top -= speed;
//     if (keysPressed[3])
//         top += speed;

//     document.getElementById("bigdiv").style.left = left + "px";
//     document.getElementById("bigdiv").style.top = top + "px";
//     if (spacePressed)
//         document.getElementById("bigdiv").style.display = "block";
//     else
//         document.getElementById("bigdiv").style.display = "none";
// }

// setInterval(updateKeys, 1);

  $(function() {
    var myRealUrl = "./people_down.png";
    $("body").on("keydown", function(e) {
      if (e.which == 38) {
        $("#people").attr("src", "./people_up.png");
      }
    });
  
    $("body").keyup(function(e) {
      if (e.which == 38) {
        $("#people").attr("src", myRealUrl);
      }
    });
  });

  $(function() {
    var myRealUrl = "./people_down.png";
    $("body").on("keydown", function(e) {
      if (e.which == 37) {
        $("#people").attr("src", "./people_left.png");
      }
    });
  
    $("body").keyup(function(e) {
      if (e.which == 37) {
        $("#people").attr("src", myRealUrl);
      }
    });
  });

  $(function() {
    var myRealUrl = "./people_down.png";
    $("body").on("keydown", function(e) {
      if (e.which == 39) {
        $("#people").attr("src", "./people_right.png");
      }
    });
  
    $("body").keyup(function(e) {
      if (e.which == 39) {
        $("#people").attr("src", myRealUrl);
      }
    });
  });

  //room1
  if(pos.x<240&&pos.x>150){
    if(pos.y<-60&&pos.y>-270){
    document.getElementById('video-1032').style.display='block';
  }
  }
  else{
    document.getElementById('video-1032').style.display='none';
  }

  if(pos.x>105&&pos.x<150){
    if(pos.y<-60&&pos.y>-270){
    document.getElementById('video-103').style.display='block';
  }
  }
  else{
    document.getElementById('video-103').style.display='none';
  }

  if(pos.x<245&&pos.x>170){
    if(pos.y>-25&&pos.y<55){
    // if(pos.y<210&&pos.y>-265){
    document.getElementById('video-103-cat').style.display='block';
  }
    // document.getElementById('people').style.display='none';
  // }
  }
  else{
    document.getElementById('video-103-cat').style.display='none';
  }

  if(pos.x>245&&pos.x<330){
    if(pos.y>-25&&pos.y<55){
    // if(pos.y<210&&pos.y>-265){
    document.getElementById('video-103-cat2').style.display='block';
  }
    // document.getElementById('people').style.display='none';
  // }
  }
  else{
    document.getElementById('video-103-cat2').style.display='none';
  }

  if(pos.x>390&&pos.x<455){
    if(pos.y>-315&&pos.y<-160){
    // if(pos.y<210&&pos.y>-265){
    document.getElementById('video-103-bathroom').style.display='block';
  }
    // document.getElementById('people').style.display='none';
  // }
  }
  else{
    document.getElementById('video-103-bathroom').style.display='none';
  }
  
  if(pos.x>455&&pos.x<510){
    if(pos.y>-315&&pos.y<-160){
    // if(pos.y<210&&pos.y>-265){
    document.getElementById('video-103-22').style.display='block';
  }
    // document.getElementById('people').style.display='none';
  // }
  }
  else{
    document.getElementById('video-103-22').style.display='none';
  }




  $(function() {
    var myRealUrl = "./people_down.png";
    $("body").on("keydown", function(e) {
      if (e.which == 40) {
        $("#people").attr("src", "./people_down.png");
      }
    });
  
    $("body").keyup(function(e) {
      if (e.which == 40) {
        $("#people").attr("src", myRealUrl);
      }
    });
  });





  const dir = (ev.key.match(/(?<=^Arrow)\w+/)||[])[0];
  if (!dir) return; // Not an arrow key.
  
  ev.preventDefault(); // Prevent Browser scroll if overflow

  ({
    Left:  () => pos.x += 5, 
    Right: () => pos.x -= 5,
    Up:    () => pos.y += 5,
    Down:  () => pos.y -= 5,
  }[dir])(); 
  
  EL_img.style.transform = `translate(${pos.x}px, ${pos.y}px)`

  console.log(pos.x,pos.y)
  // //room-1-door
  // if(pos.x<5&&pos.x>-54){
  //   // document.getElementById('door').style.display='block';
  // }
  // if(pos.x<-55){
  //   document.getElementById('door').style.display='none';
  // }
  // if(pos.x>5){
  //   // document.getElementById('door').style.display='none';
  // }

//room-1-water

  // if(pos.x<-155){
  //   document.getElementById('video-103').style.display='none';
  //   document.getElementById('people').style.display='block';
  // }
  // if(pos.x>-139){
  //   document.getElementById('video-103').style.display='none';
  //   document.getElementById('people').style.display='block';
  // }




  //room2-storage

});

$(document).ready(function () {
  all_notes = $("li a");

  all_notes.on("keyup", function () {
    note_title = $(this).find("h2").text();
    note_content = $(this).find("p").text();

    item_key = "list_" + $(this).parent().index();

    data = {
      title: note_title,
      content: note_content
    };

    window.localStorage.setItem(item_key, JSON.stringify(data));
  });

  all_notes.each(function (index) {
    data = JSON.parse(window.localStorage.getItem("list_" + index));

    if (data !== null) {
      note_title = data.title;
      note_content = data.content;

      $(this).find("h2").text(note_title);
      $(this).find("p").text(note_content);
    }
  });
});