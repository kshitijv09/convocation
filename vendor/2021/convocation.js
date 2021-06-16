

var finaltime=new Date("July 31, 2021 11:00:00").getTime();
timer();
setInterval(timer,1000);
function timer()
{
    var now=new Date().getTime();
    var distance=finaltime-now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var box=document.querySelectorAll(".box h1");
  box[0].textContent=days;
  box[1].textContent=hours;
  box[2].textContent=minutes;
  box[3].textContent=seconds;
  for(var i=1;i<4;i++)
  {
    if(box[i].textContent.length=='1')
        box[i].textContent="0"+box[i].textContent;
  }
  
}

