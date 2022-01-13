// send prompt to get user name
let userName = prompt("Please enter your name!");

userName.length > 0 ? userName : alert("Name can't be empty");

// upperCase to first letter and lowerCaser to rest
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

// select myName element in DOM and manipulate it by userName variable
let myName = document.querySelector("#myName");

myName.innerHTML = `${userName}`;

function showTime(){
    const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    const date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let d = days[date.getDay()];
        
    m = (m < 10) ? "0" + m : m;  // put 0 for the first character of minute and second
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + ", " + d;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
