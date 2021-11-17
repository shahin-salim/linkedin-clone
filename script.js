document.getElementById("For").addEventListener("mouseover",function(){
    document.getElementById("For").style.backgroundColor = "rgba(235, 235, 235, 1)";
    document.getElementsByClassName("four-firstchild")[0].style.backgroundColor = "rgba(235, 235, 235, 1)";
    document.getElementsByClassName("try-premium")[0].style.color = "blue";
})
document.getElementById("For").addEventListener("mouseleave",function(){
    document.getElementById("For").style.backgroundColor = "white";
    document.getElementsByClassName("four-firstchild")[0].style.backgroundColor = "white";
    document.getElementsByClassName("try-premium")[0].style.color = "rgba(0, 0, 0, 0.9)";
})