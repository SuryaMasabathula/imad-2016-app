console.log('Loaded!');
//change the text of the div id main11
var element=document.getElementById('main11');
element.innerHTML='Hello Heloo Hello............................................';

var img=document.getElementById('madi');


var marginLeft=0;
function marginRight(){
    marginLeft=marginLeft + 1;
     img.style.marginLeft= marginLeft + 'px';
}

img.onclick=function(){
    var interval=setInterval(marginRight,50);
};
