/**
 * Created by Administrator on 2016/10/17 0017.
 */
$(function () {

    window.onscroll = function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var top_div = document.getElementById( "top_div" );
        if( t >= 5 ) {
            top_div.style.display = "inline";
        } else {
            top_div.style.display = "none";
        }
    };

    // var video = document.getElementById("video");
    // video.playbackRate = 0.5;
    var bgC = document.querySelector("#bgC");
    var bars = document.querySelector("#bars");
    var footer = document.querySelector("#footer");
    var play = 0;

    function init() {
        addHover();
        setInterval(getTime,1000);
    }

    function addHover() {
        var footer = document.getElementById("footer");
        $(document).ready(function(){$(".listBar").mouseover(function(){
            footer.style.display = "none";
        })});
        $(document).ready(function(){$(".listBar").mouseleave(function(){
            footer.style.display = "block";
        })});
    }
    function getTime() {
        var year = document.querySelector("#year");
        var data = document.querySelector("#data");
        var time = document.querySelector("#time");
        var lovedays = document.querySelector("#lovedays");
        var loveNum = 1674;
        var myDate = new Date();
        var month = myDate.getMonth()+1;
        var hours = myDate.getHours();
        var minutes = myDate.getMinutes();
        if(hours==0){
            lovedays.innerHTML = loveNum+1;
        }
        year.innerHTML = myDate.getFullYear()+"/"+month+"/"+myDate.getDate();
        if(hours<10&&minutes<10){
            time.innerHTML = "0"+hours+":"+"0"+minutes;
        }else if(hours<10&&minutes>10){
            time.innerHTML = "0"+hours+":"+minutes;
        }else if(hours>10&&minutes<10){
            time.innerHTML = hours+":"+"0"+minutes;
        }else {
            time.innerHTML = hours+":"+minutes;
        }
        switch (myDate.getDay()){
            case 0:
                data.innerHTML = "Sunday";
                break;
            case 1:
                data.innerHTML = "Monday";
                break;
            case 2:
                data.innerHTML = "Tuesday";
                break;
            case 3:
                data.innerHTML = "Wednesday";
                break;
            case 4:
                data.innerHTML = "Thursday";
                break;
            case 5:
                data.innerHTML = "Friday";
                break;
            case 6:
                data.innerHTML = "Saturday";
                break;
        }
    }

    bars.onclick = function () {
        if(play == 0){
            bgC.style.display = "block";
            bars.style.display = "none";
            footer.style.display = "none";
            play = 1;
            console.log("p");
        }else{
            bgC.style.display = "none";
            play = 0;
            console.log("n");
        }
    };

    init();
});