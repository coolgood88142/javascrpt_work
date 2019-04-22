function setTableCookie(obj){
	let table = obj;
	let length = table.rows.length;
	
	//從第二行開始setCookie
	for(let i=1; i<length; i++){
		let row = table.rows[i];
		setCookie(row.id,row.innerHTML);
	}
	setCookie(table.id,length-1);
}

function setCookie(name,value){
	let days = 30;
	let date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	document.cookie = name + "=" + escape(value) + ";expires=" + date.toGMTString();
}

function getCookie(name){
	var name = name + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
			while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}	
		if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
    }
  }
  return "";
	//let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	//if (arr != null)return unescape(arr[2]); return null;
}

function delCookie(name){
	let date = new Date();
	date.setTime(date.getTime()-1);
	let cval = getCookie(name);
	if (cval != null) document.cookie = name + "=" + cval + ";expires=" + date.toGMTString();
}