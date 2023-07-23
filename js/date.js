const newdate = document.querySelector(".date");

function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    const day = week[today.getDay()];

    newdate.innerText = `${day}/${year}/${month}/${date}`;


}

getDate()



