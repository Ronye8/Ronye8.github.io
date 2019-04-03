window.onload=function(){
	const count=50;
	(function init(){
		var container=document.getElementById("leafContainer");
		for (var i = 0; i < count; i++) {
			container.appendChild(createLeaf());
		};
	})()
	function randomInteger(min,max){
		return parseInt(Math.random()*(max-min)-1)+min;
	}
	function randomFloat(min,max){
		return min+Math.random()*(max-min);
	}
	function durationValue(value)
	{
    	return value + 's';
	}
	function createLeaf(){
		this.srcs="img/realLeaf"+randomInteger(1,5)+".png";
		this.tops="-100px";
		this.lefts=""+randomInteger(0,document.body.clientWidth)+"px";
		this.imgSpinName=(Math.random()<0.5)?'leftRotation':'rightRotation';
		this.divName="fade,drop";
		this.aniDuration=durationValue(randomFloat(5,11));
		this.imgSpinDuration=durationValue(randomFloat(4,8));
		this.leafDelay=durationValue(randomFloat(0,5));
		var leafDiv=document.createElement('div');
		var leafImage=document.createElement('img');
		leafImage.src=this.srcs;
		leafDiv.style.top=this.tops;
		leafDiv.style.left=this.lefts;
		leafDiv.style.webkitAnimationName=this.divName;
		leafImage.style.webkitAnimationName=this.imgSpinName;
		leafDiv.style.webkitAnimationDuration=this.aniDuration+','+this.aniDuration;
		leafDiv.style.webkitAnimationDelay=this.leafDelay+','+this.leafDelay;
		leafImage.style.webkitAnimationDuration=this.imgSpinDuration;
		leafDiv.appendChild(leafImage);
		return leafDiv;
	}
}
