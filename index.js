const enesbatur = {
    name: "Enes Batur",
    channelname: "Enes Batur",
    totalSubs: 15.9 + "million",
    view: 9.9 + "billion"

}
const freecode= {
    channelname: "freecodeCamp.org",
    totalSubs: 9.89 + "million",
    view: 7.58 + "million"

}


function click1(){

    document.getElementById("2").style.visibility = "hidden"
    document.getElementById("3").style.visibility = "hidden"
    document.getElementById("1").innerHTML=`
    <link rel="stylesheet" href="style.css">
    <p >Welcome to  the new page </p>
    <p > Here you can see many propeties. </p>
    <p>Firsly, all stages have three properties. 1. Channel Name 2. Sub count 3. View   </p>
    <br> <br>
    <p>1.Enes Batur </p>

    <div id="p10">
       <p>Channel Link </p>
    <a href="https://www.youtube.com/@newdaynewgame" target="_blank"  >Enes Batur Official Channel </a>
    <br> <br>
    <p> Channel Name </p>
    <p id="p4"><p>
     <br> <br>
   <p>Subs Count</p>
    <p id="p5"> </p> 
     <br> 
    <p> View</p>
    <p id="p6"> </p> 

    </div>
<br> <br>
    <p>2.FreecodeCamp.org</p>
   <div id="p10">
   <p>Channel Link </p>
    <a href="https://www.youtube.com/@freecodecamp" target="_blank"  > Freecode Official Channel </a>
    <br> <br>
    <p> Channel Name </p>
    <p id="p7"><p>
     <br> <br>
   <p>Subs Count</p>
    <p id="p8"> </p> 
     <br> 
    <p> View</p>
    <p id="p9"> </p> 

   </div>

   <button onclick=click2()>Return to home page </button>


    

    `
    document.getElementById("p7").innerHTML = freecode.channelname
    document.getElementById("p8").innerHTML = freecode.totalSubs
    document.getElementById("p9").innerHTML = freecode.view
    document.getElementById("p4").innerHTML = enesbatur.channelname
    document.getElementById("p5").innerHTML  = enesbatur.totalSubs
    document.getElementById("p6").innerHTML  = enesbatur.view


}
