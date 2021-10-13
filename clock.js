let info = prompt("Adınızı giriniz")

document.querySelector("#myName").innerHTML = info
if(info == ""){
    alert("Lütfen isim giriniz")
}

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var day = date.getDay();

    if(day == 1) {
        day = "Monday";
    }
    else if(day == 2){
        day = "Tuesday";
    }
    else if(day == 3){
        day = "Wednesday";
    }
    else if(day == 4){
        day = "Thursday";
    }
    else if(day == 5){
        day = "Friday";
    }
    else if(day == 6){
        day = "Saturday";
    }
    else if(day == 7){
        day = "Sunday";
    }

    h = h < 10 ? "0" + h : h;
    m = m <10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + day;

    var myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${time}`

    setTimeout(showTime, 1000)
}

showTime();