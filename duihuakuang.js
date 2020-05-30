function Duixiang(obj){
	this.title = obj.title;
	this.w = obj.w;
	this.h = obj.h;
	this.content = obj.content;	
	this.align = obj.align;
	this.div = '<div class="content"><div class="header"><h4>'+this.title+'</h4></div><div class="body"><p>'+this.content+'</p></div><div class="footer"><button class="bi">关闭</button><button>保存</button></div></div>';
	this.body = document.getElementsByTagName("body")[0];
	this.body.insertAdjacentHTML('beforeend',this.div);	
	this.content = document.getElementsByClassName("content")[0];
	this.bi = document.getElementsByClassName("bi")[0];
	this.content.style.width = this.w + "px";
	this.content.style.height = this.h + "px";
	if(obj.shadow){
		this.init()
	}else{
		return
	};
	if(this.align == "top"){
		this.weizhi();
	}
	if(this.align == "center"){
		this.center();
	}
	if(this.align == "bottom"){
		this.bottom();
	}
}
Duixiang.prototype.init = function(){
	this.content.style.boxShadow = "0 5px 15px rgba(0,0,0,.5)"
}
Duixiang.prototype.weizhi = function(){
		this.content.style.margin = "0 auto"
}

Duixiang.prototype.center = function(){
		this.content.style.position = "absolute";
		this.content.style.top = "50%";
		this.content.style.left = "50%";
		this.content.style.margin = "-100px 0 0 -250px"
}
Duixiang.prototype.bottom = function(){
	this.content.style.position = "absolute";
	this.content.style.bottom = "2%";
	this.content.style.left = "50%";
	this.content.style.margin = "0 0 0 -250px"	
}


