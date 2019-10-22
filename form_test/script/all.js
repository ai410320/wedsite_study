var xhr = new XMLHttpRequest();

// readyState 
//0 : 代表已經有產生 XMLHttpRquest , 但是還沒有連結你要撈的資料
//1 : 用了 open 但還沒有把資料傳送過去
//2 : 偵測到你有用 send
//3 : loading 中
//4 : 撈到資料且數據完全收到了 

xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);
// 格式 , 你要讀取的網址 , 同步與非同步
// get : 讀取 , post : 傳送資料到 server 
// true : 非同步

xhr.send(null);
// 因為沒有要傳送資料 , 所以可以打 null 傳送空值

xhr.onload = function(){
	console.log(xhr.responseText);
	var str = JSON.parse(xhr.responseText);
	document.querySelector('.message').textContent = str[0].name;
}

// 1. 建立一個 XMLHttpRequest
// 2. 傳送到對方伺服器要資料
// 3. 回傳資料到自己瀏覽器
// 4. 拿到資料後再看要怎麼處理 