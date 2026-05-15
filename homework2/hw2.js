function displayToday() {
    const now = new Date(); // 현재 날짜와 시간 가져오기

    const year = now.getFullYear(); // 년
    

    const month = String(now.getMonth() + 1).padStart(2, '0');
    

    const day = String(now.getDate()).padStart(2, '0');


    const formattedDate = `${year}/${month}/${day}`;


    document.getElementById('today-date').textContent = formattedDate;
}

displayToday();

function t() {
    alert("작동?");
}