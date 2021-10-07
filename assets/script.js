
// uses moment.js to set the day and put it at the top of the page
var day = moment().format('MMMM Do YYYY');
$("#currentDay").text(day)

// when the submit button is clicked, the task the user inputed and stores it in local storage
$(".saveBtn").click (
    function () {
        var task = $(this).siblings(".description").val()
        var id = $(this).parent().attr("id")

        localStorage.setItem(id, task);        
    }
)

//takes the task from local storage and shows it on the page. 
$(".time-block").each (function () {
    var timeId = $(this).attr("id")
    console.log(timeId)

    var localTask = localStorage.getItem(timeId)
    $(this).children(".description").val(localTask)

  //this section changes the background color of the time blocks as the day progresses. 
   var currentHour = moment().hour();
   console.log(currentHour)

    if (currentHour < timeId) {
            $(this).addClass("future");
          } 
          else if (currentHour == timeId) {
            $(this).addClass("present");
          } 
          else if (currentHour > timeId) {
            $(this).addClass("past");
          }
    })



