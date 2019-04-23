function setStroage(stroage,name,value){
	localStorage.setItem(name,value);
}

function getStroage(stroage,name){
  return localStorage.getItem(name);
}

function delStroagename(stroage,name){
	localStorage.removeItem(name);
}