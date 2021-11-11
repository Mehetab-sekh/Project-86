var canvas = new fabric.Canvas('myCanvas');
var audio= document.getElementById("myAudio");
card_image="";
width=screen.width;
new_width=width-70;
 new_height=screen.height-300;
if(width <992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
function birthday_card(){
fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
card_image=Img;
card_image.scaleToWidth(700);
card_image.scaleToHeight(510);
card_image.set({
top:0,
left:0
    });
canvas.add(card_image);
});
};
function playSound(){
	audio.play();
}