var currentDayEl = $("#currentDay");
var timeBlockEl = $(".time-block");
var items = [];
var count = 0;

var currentDate = moment().format("dddd, MMMM Do");
var currentHour = parseInt(moment().format("H"));
console.log("current hour:" + currentHour);


// var currentDate = function() {
//     var current = moment().format("dddd, MMMM Do");
//     $("#currentDay").text(current);
// }

var timeBlockColor = function() {
    timeBlockEl.each(function() {
        var timeBlock = $(this);
        var blockHour = parseInt(timeBlock.attr("hour"));

        if(blockHour === currentHour) {
            timeBlock.addClass("present").removeClass("past future");
            console.log(blockHour + " pres");
        }
        if(blockHour > currentHour) {
            timeBlock.addClass("future").removeClass("past present");
            console.log(blockHour + " fut");
        }
        if(blockHour < currentHour) {
            timeBlock.addClass("past").removeClass("present future");
            console.log(blockHour + " past");
        }
    })
}

var renderPage = function() {
    count = items[items.length -1 ].count + 1;
    console.log(count);
    console.log(items);
    for(var i = 0; i < items.length; i++) {
        // console.log(items[i].text);
        switch(parseInt(items[i].hour)) {
            case 9:
            $("#txt9").text(items[i].text)
            break;
            case 10:
            $("#txt10").text(items[i].text)
            break;
            case 11:
            $("#txt11").text(items[i].text)
            break;
            case 12:
            $("#txt12").text(items[i].text)
            break;
            case 13:
            $("#txt13").text(items[i].text)
            break;
            case 14:
            $("#txt14").text(items[i].text)
            break;
            case 15:
            $("#txt15").text(items[i].text)
            break;
            case 16:
            $("#txt16").text(items[i].text)
            break;
            case 17:
            $("#txt17").text(items[i].text)
            break;
        }
    }
}

var loadPage = function() {
    timeBlockColor();
    currentDayEl.text(currentDate);
    var tempItems = JSON.parse(localStorage.getItem("items"));
    if(tempItems) {
        for(var i = 0; i < tempItems.length; i++) {
            if(tempItems[i].date === currentDate) {
                items.push(tempItems[i]);
            }
        }
        renderPage();
    }
}

var saveItem = function() {
    var hourSaved = $(this).parent().attr("hour");
    var textSaved = $(this).parent().children("textarea").val();
    var dateSaved = currentDate;
    console.log("hour: " + hourSaved + "  text: " + textSaved + "    Date: " + dateSaved);
    items[count] = {
        hour: hourSaved,
        text: textSaved,
        date: dateSaved,
        count: count
    }
    count++;
    console.log(items);
    localStorage.setItem("items", JSON.stringify(items));
}

$(".time-block").on("click", "button", saveItem);

loadPage();