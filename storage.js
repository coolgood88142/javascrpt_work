function setStroage(name,value,isLocal){
	if(isLocal){
		localStorage.setItem(name,value);
	}else{
		sessionStorage.setItem(name,value);
	}
}

function getStroage(name,isLocal){
	if(isLocal){
		return localStorage.getItem(name);
	}else{
		return sessionStorage.getItem(name);
	}
}

function delStroagename(name,isLocal){
	if(isLocal){
		localStorage.removeItem(name);
	}else{
		sessionStorage.removeItem(name);
	}
}