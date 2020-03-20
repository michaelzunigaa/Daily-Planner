var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate() + 1);    
$('#date').text(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

var $plannerEle = $('#calendar-container');
  // clear existing elements
  $plannerEle.empty();
  for (let hour = 9; hour <=17; hour++)  {
      let hour = -9;
      
  }


  var $timeBlocks = $(".timeblocks");
  $timeBlocks.addClass('plannerRow');
  $timeBlocks.attr('hour-index', hour);
