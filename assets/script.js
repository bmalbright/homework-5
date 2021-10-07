
var day = moment().format('MMMM Do YYYY');
$("#currentDay").text(day)


$(".saveBtn").click (
    function () {
        var task = $(this).siblings(".description").val()
        var id = $(this).parent().attr("id")

        localStorage.setItem(id, task);        
    }
)

$(".time-block").each (function () {
    var timeId = $(this).attr("id")
    console.log(timeId)

    var localTask = localStorage.getItem(timeId)
    $(this).children(".description").val(localTask)

    var currentHour = moment.getHour;
    console.log(currentHour)

    if (currentHour < timeId) {

    }
})



