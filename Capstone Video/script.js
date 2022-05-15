
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
    if(pos.y<-60&&pos.y>-265){
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
    document.getElementById('video-103-cat').style.display='block';
  }
  }
  else{
    document.getElementById('video-103-cat').style.display='none';
  }

  if(pos.x>245&&pos.x<330){
    if(pos.y>-25&&pos.y<55){
    document.getElementById('video-103-cat2').style.display='block';
  }
  }
  else{
    document.getElementById('video-103-cat2').style.display='none';
  }

  if(pos.x>390&&pos.x<455){
    if(pos.y>-315&&pos.y<-160){
    document.getElementById('video-103-bathroom').style.display='block';
  }
  }
  else{
    document.getElementById('video-103-bathroom').style.display='none';
  }
  
  if(pos.x>455&&pos.x<510){
    if(pos.y>-315&&pos.y<-160){
    document.getElementById('video-103-22').style.display='block';
  }
  }
  else{
    document.getElementById('video-103-22').style.display='none';
  }

  if(pos.x>-410&&pos.x<-320){
    if(pos.y>-30&&pos.y<90){
    document.getElementById('room2-ball-video').style.display='block';
  }
  }
  else{
    document.getElementById('room2-ball-video').style.display='none';
  }

  if(pos.x>-460&&pos.x<-410){
    if(pos.y>-30&&pos.y<90){
    document.getElementById('room2-ball-video2').style.display='block';
  }
  }
  else{
    document.getElementById('room2-ball-video2').style.display='none';
  }


  if(pos.x>-410&&pos.x<-320){
    if(pos.y>125&&pos.y<365){
    document.getElementById('room2-storage-video').style.display='block';
  }

  }
  else{
    document.getElementById('room2-storage-video').style.display='none';
  }

  if(pos.x>-515&&pos.x<-410){
    if(pos.y>125&&pos.y<365){
    document.getElementById('room2-storage-video2').style.display='block';
  }
  }
  else{
    document.getElementById('room2-storage-video2').style.display='none';
  }

  if(pos.x>-230&&pos.x<-125){
    if(pos.y>50&&pos.y<280){
    document.getElementById('room2-working-video').style.display='block';
  }
  }
  else{
    document.getElementById('room2-working-video').style.display='none';
  }

  if(pos.x>-310&&pos.x<-230){
    if(pos.y>50&&pos.y<280){
    document.getElementById('room2-working-video2').style.display='block';
  }
  }
  else{
    document.getElementById('room2-working-video2').style.display='none';
  }

  if(pos.x>-250&&pos.x<-150){
    if(pos.y>-500&&pos.y<-330){
    document.getElementById('room3-12').style.display='block';
  }
  }
  else{
    document.getElementById('room3-12').style.display='none';
  }

  if(pos.x>-380&&pos.x<-250){
    if(pos.y>-500&&pos.y<-330){
    document.getElementById('room3-1').style.display='block';
  }
  }
  else{
    document.getElementById('room3-1').style.display='none';
  }

  //new
  if(pos.x>-440&&pos.x<-350){
    if(pos.y<-520&&pos.y>-630){
    document.getElementById('room3-22').style.display='block';
  }
  }
  else{
    document.getElementById('room3-22').style.display='none';
  }

  if(pos.x>-510&&pos.x<-440){
    if(pos.y<-520&&pos.y>-630){
    document.getElementById('room3-2').style.display='block';
  }
  }
  else{
    document.getElementById('room3-2').style.display='none';
  }

  if(pos.x>-440&&pos.x<-350){
    if(pos.y<-150&&pos.y>-320){
    document.getElementById('room3-32').style.display='block';
  }
  }
  else{
    document.getElementById('room3-32').style.display='none';
  }

  if(pos.x>-510&&pos.x<-440){
    if(pos.y<-150&&pos.y>-320){
    document.getElementById('room3-3').style.display='block';
  }
  }
  else{
    document.getElementById('room3-3').style.display='none';
  }

  if(pos.x>360&&pos.x<450){
    if(pos.y<510&&pos.y>360){
    document.getElementById('room5-12').style.display='block';
  }
  }
  else{
    document.getElementById('room5-12').style.display='none';
  }

  if(pos.x>450&&pos.x<540){
    if(pos.y<510&&pos.y>360){
    document.getElementById('room5-1').style.display='block';
  }
  }
  else{
    document.getElementById('room5-1').style.display='none';
  }

  if(pos.x>240&&pos.x<330){
    if(pos.y<360&&pos.y>240){
    document.getElementById('room5-22').style.display='block';
  }
  }
  else{
    document.getElementById('room5-22').style.display='none';
  }

  if(pos.x>330&&pos.x<390){
    if(pos.y<360&&pos.y>240){
    document.getElementById('room5-2').style.display='block';
  }
  }
  else{
    document.getElementById('room5-2').style.display='none';
  }


  if(pos.x>60&&pos.x<155){
    if(pos.y<390&&pos.y>240){
    document.getElementById('room5-32').style.display='block';
  }
  }
  else{
    document.getElementById('room5-32').style.display='none';
  }

  if(pos.x>155&&pos.x<215){
    if(pos.y<390&&pos.y>240){
    document.getElementById('room5-3').style.display='block';
  }
  }
  else{
    document.getElementById('room5-3').style.display='none';
  }

  if(pos.x>240&&pos.x<550){
    if(pos.y>390&&pos.y<540){
    document.getElementById('room5-4').style.display='block';
  }
  }
  else{
    document.getElementById('room5-4').style.display='none';
  }

  if(pos.x>150&&pos.x<240){
    if(pos.y>390&&pos.y<540){
    document.getElementById('room5-42').style.display='block';
  }
  }
  else{
    document.getElementById('room5-42').style.display='none';
  }


  if(pos.x>-930&&pos.x<-840){
    if(pos.y>270&&pos.y<510){
    document.getElementById('video-room6-12').style.display='block';
  }
  }
  else{
    document.getElementById('video-room6-12').style.display='none';
  }

  if(pos.x>-1020&&pos.x<-930){
    if(pos.y>270&&pos.y<510){
    document.getElementById('video-room6-1').style.display='block';
  }
  }
  else{
    document.getElementById('video-room6-1').style.display='none';
  }


  if(pos.x>-815&&pos.x<-780){
    if(pos.y>210&&pos.y<270){
    document.getElementById('video-room6-22').style.display='block';
  }
  }
  else{
    document.getElementById('video-room6-22').style.display='none';
  }

  if(pos.x>-870&&pos.x<-815){
    if(pos.y>210&&pos.y<270){
    document.getElementById('video-room6-2').style.display='block';
  }
  }
  else{
    document.getElementById('video-room6-2').style.display='none';
  }

  if(pos.x>-720&&pos.x<-690){
    if(pos.y>240&&pos.y<310){
    document.getElementById('video-room6-32').style.display='block';
  }
  }
  else{
    document.getElementById('video-room6-32').style.display='none';
  }

  if(pos.x>-750&&pos.x<-720){
    if(pos.y>240&&pos.y<310){
    document.getElementById('video-room6-3').style.display='block';
  }
  }
  else{
    document.getElementById('video-room6-3').style.display='none';
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
    Left:  () => pos.x += 30, 
    Right: () => pos.x -= 30,
    Up:    () => pos.y += 30,
    Down:  () => pos.y -= 30,
  }[dir])(); 
  

  EL_img.style.transform = `translate(${pos.x}px, ${pos.y}px)`

  console.log(pos.x,pos.y)


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