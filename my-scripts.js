//create count in database
if(localStorage.getItem("count") == null){
   localStorage.setItem("count", "0")
}

//udpdate html to match 
function update() {
   document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

//add one to count
function plusOne() {
	localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)
    update()
}

//reset button
function reset() {
	if(confirm("Are you sure? Really sure? GO TO SLEEP!")) {
       localStorage.setItem("count", 0)
       update()
	}
 }