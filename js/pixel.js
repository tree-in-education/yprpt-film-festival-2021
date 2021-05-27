/*!

=========================================================
* Pixel Bootstrap 4 UI Kit
=========================================================

* Product Page: http://pixel.themesberg.com
* Copyright 2018 Themesberg (https://www.themesberg.com)

* Coded by themesberg.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

"use strict";
$(document).ready(function () {

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Popover
    $('[data-toggle="popover"]').each(function () {
        var popoverClass = '';
        if ($(this).data('color')) {
            popoverClass = 'popover-' + $(this).data('color');
        }
        $(this).popover({
            trigger: 'focus',
            template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
    });

    // Additional .focus class on form-groups
    $('.form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    // When in viewport
    $('[data-toggle="on-screen"]')[0] && $('[data-toggle="on-screen"]').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function () {
            //alert();
        },
        doOut: function () {
            // Do something to the matched elements as they get off scren
        },
        tolerance: 200,
        throttle: 50,
        toggleClass: 'on-screen',
        debug: false
    });

    // Scroll to anchor with scroll animation
    $('[data-toggle="scroll"]').on('click', function (event) {
        var hash = $(this).attr('href');
        var offset = $(this).data('offset') ? $(this).data('offset') : 0;

        // Animate scroll to the selected section
        $('html, body').stop(true, true).animate({
            scrollTop: $(hash).offset().top - offset
        }, 600);

        event.preventDefault();
    });

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    $('.time').text(formatAMPM(new Date()));

    // copy docs
    $('.copy-docs').on('click', function () {
        var $copy = $(this);
        var htmlEntities = $copy.parents('.nav-wrapper').siblings('.card').find('.tab-pane:last-of-type').html();
        var htmlDecoded = $('<div/>').html(htmlEntities).text().trim();

        var $temp = $('<textarea>');
        $('body').append($temp);
        $temp.val(htmlDecoded).select();
        document.execCommand('copy');
        $temp.remove();

        $copy.text('Copied!');
        $copy.addClass('copied');

        setTimeout(function () {
            $copy.text('Copy');
            $copy.removeClass('copied');
        }, 1000);
    });

});

// // Sparkly cursor
// var colour="random"; // "random" can be replaced with any valid colour ie: "red"...
// var sparkles=100;// increase of decrease for number of sparkles falling

// var x=ox=400;
// var y=oy=300;
// var swide=800;
// var shigh=600;
// var sleft=sdown=0;
// var tiny=new Array();
// var star=new Array();
// var starv=new Array();
// var starx=new Array();
// var stary=new Array();
// var tinyx=new Array();
// var tinyy=new Array();
// var tinyv=new Array();

// colours=new Array('#ff0000','#00ff00','#ffffff','#ff00ff','#ffa500','#ffff00','#00ff00','#ffffff','ff00ff')

// n = 10;
// y = 0;
// x = 0;
// n6=(document.getElementById&&!document.all);
// ns=(document.layers);
// ie=(document.all);
// d=(ns||ie)?'document.':'document.getElementById("';
// a=(ns||n6)?'':'all.';
// n6r=(n6)?'")':'';
// s=(ns)?'':'.style';

// if (ns){
// 	for (i = 0; i < n; i++)
// 		document.write('<layer name="dots'+i+'" top=0 left=0 width='+i/2+' height='+i/2+' bgcolor=#ff0000></layer>');
// }

// if (ie)
// 	document.write('<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">');

// if (ie||n6){
// 	for (i = 0; i < n; i++)
// 		document.write('<div id="dots'+i+'" style="position:absolute;top:0px;left:0px;width:'+i/2+'px;height:'+i/2+'px;background:#ff0000;font-size:'+i/2+'"></div>');
// }

// if (ie)
// 	document.write('</div></div>');
// (ns||n6)?window.captureEvents(Event.MOUSEMOVE):0;

// function Mouse(evnt){

// 	y = (ns||n6)?evnt.pageY+4 - window.pageYOffset:event.y+4;
// 	x = (ns||n6)?evnt.pageX+1:event.x+1;
// }

// (ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;

// function animate(){

// 	o=(ns||n6)?window.pageYOffset:0;

// 	if (ie)con.style.top=document.body.scrollTop + 'px';

// 	for (i = 0; i < n; i++){

// 		var temp1 = eval(d+a+"dots"+i+n6r+s);

// 		randcolours = colours[Math.floor(Math.random()*colours.length)];

// 		(ns)?temp1.bgColor = randcolours:temp1.background = randcolours;

// 		if (i < n-1){

// 			var temp2 = eval(d+a+"dots"+(i+1)+n6r+s);
// 			temp1.top = parseInt(temp2.top) + 'px';
// 			temp1.left = parseInt(temp2.left) + 'px';

// 		}
// 		else{

// 			temp1.top = y+o + 'px';
// 			temp1.left = x + 'px';
// 		}
// 	}

// 	setTimeout("animate()",10);
// }

// animate();

// window.onload=function() { if (document.getElementById) {
// 	var i, rats, rlef, rdow;
// 	for (var i=0; i<sparkles; i++) {
// 		var rats=createDiv(3, 3);
// 		rats.style.visibility="hidden";
// 		rats.style.zIndex="999";
// 		document.body.appendChild(tiny[i]=rats);
// 		starv[i]=0;
// 		tinyv[i]=0;
// 		var rats=createDiv(5, 5);
// 		rats.style.backgroundColor="transparent";
// 		rats.style.visibility="hidden";
// 		rats.style.zIndex="999";
// 		var rlef=createDiv(1, 5);
// 		var rdow=createDiv(5, 1);
// 		rats.appendChild(rlef);
// 		rats.appendChild(rdow);
// 		rlef.style.top="2px";
// 		rlef.style.left="0px";
// 		rdow.style.top="0px";
// 		rdow.style.left="2px";
// 		document.body.appendChild(star[i]=rats);
// 	}
// 	set_width();
// 	sparkle();
// }}

// function sparkle() {
// 	var c;
// 	if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
// 		ox=x;
// 		oy=y;
// 		for (c=0; c<sparkles; c++) if (!starv[c]) {
// 			star[c].style.left=(starx[c]=x)+"px";
// 			star[c].style.top=(stary[c]=y+1)+"px";
// 			star[c].style.clip="rect(0px, 5px, 5px, 0px)";
// 			star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
// 			star[c].style.visibility="visible";
// 			starv[c]=50;
// 			break;
// 		}
// 	}
// 	for (c=0; c<sparkles; c++) {
// 		if (starv[c]) update_star(c);
// 		if (tinyv[c]) update_tiny(c);
// 	}
// 	setTimeout("sparkle()", 40);
// }

// function update_star(i) {
// 	if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
// 	if (starv[i]) {
// 		stary[i]+=1+Math.random()*3;
// 		starx[i]+=(i%5-2)/5;
// 		if (stary[i]<shigh+sdown) {
// 			star[i].style.top=stary[i]+"px";
// 			star[i].style.left=starx[i]+"px";
// 		}
// 		else {
// 			star[i].style.visibility="hidden";
// 			starv[i]=0;
// 			return;
// 		}
// 	}
// 	else {
// 		tinyv[i]=50;
// 		tiny[i].style.top=(tinyy[i]=stary[i])+"px";
// 		tiny[i].style.left=(tinyx[i]=starx[i])+"px";
// 		tiny[i].style.width="2px";
// 		tiny[i].style.height="2px";
// 		tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
// 		star[i].style.visibility="hidden";
// 		tiny[i].style.visibility="visible"
// 	}
// }

// function update_tiny(i) {
// 	if (--tinyv[i]==25) {
// 		tiny[i].style.width="1px";
// 		tiny[i].style.height="1px";
// 	}
// 	if (tinyv[i]) {
// 		tinyy[i]+=1+Math.random()*3;
// 		tinyx[i]+=(i%5-2)/5;
// 		if (tinyy[i]<shigh+sdown) {
// 			tiny[i].style.top=tinyy[i]+"px";
// 			tiny[i].style.left=tinyx[i]+"px";
// 		}
// 		else {
// 			tiny[i].style.visibility="hidden";
// 			tinyv[i]=0;
// 			return;
// 		}
// 	}
// 	else tiny[i].style.visibility="hidden";
// }

// document.onmousemove=mouse;
// function mouse(e) {
// 	if (e) {
// 		y=e.pageY;
// 		x=e.pageX;
// 	}
// 	else {
// 		set_scroll();
// 		y=event.y+sdown;
// 		x=event.x+sleft;
// 	}
// }

// window.onscroll=set_scroll;
// function set_scroll() {
// 	if (typeof(self.pageYOffset)=='number') {
// 		sdown=self.pageYOffset;
// 		sleft=self.pageXOffset;
// 	}
// 	else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
// 		sdown=document.body.scrollTop;
// 		sleft=document.body.scrollLeft;
// 	}
// 	else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
// 		sleft=document.documentElement.scrollLeft;
// 		sdown=document.documentElement.scrollTop;
// 	}
// 	else {
// 		sdown=0;
// 		sleft=0;
// 	}
// }

// window.onresize=set_width;
// function set_width() {
// 	var sw_min=999999;
// 	var sh_min=999999;
// 	if (document.documentElement && document.documentElement.clientWidth) {
// 		if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
// 		if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
// 	}
// 	if (typeof(self.innerWidth)=='number' && self.innerWidth) {
// 		if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
// 		if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
// 	}
// 	if (document.body.clientWidth) {
// 		if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
// 		if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
// 	}
// 	if (sw_min==999999 || sh_min==999999) {
// 		sw_min=800;
// 		sh_min=600;
// 	}
// 	swide=sw_min;
// 	shigh=sh_min;
// }

// function createDiv(height, width) {
// 	var div=document.createElement("div");
// 	div.style.position="absolute";
// 	div.style.height=height+"px";
// 	div.style.width=width+"px";
// 	div.style.overflow="hidden";
// 	return (div);
// }

// function newColour() {
// 	var c=new Array();
// 	c[0]=255;
// 	c[1]=Math.floor(Math.random()*256);
// 	c[2]=Math.floor(Math.random()*(256-c[1]/2));
// 	c.sort(function(){return (0.5 - Math.random());});
// 	return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
// }

const Draggable = function (element) {
   this.element = element;
   this.isMouseDown = false;

   // mouse button down over the element
   this.onMouseDown = function (ev) {
      this.isMouseDown = true;

      // set element X & Y:
      const bbox = this.element.getBoundingClientRect();
      this.elementX = bbox.left;
      this.elementY = bbox.top;

      this.mouseX = ev.clientX;
      this.mouseY = ev.clientY;
   };

   this.onMouseUp = function (ev) {
      this.isMouseDown = false;
   };

   this.onMouseMove = function (ev) {
      if (!this.isMouseDown) return;
      var deltaX = ev.clientX - this.mouseX;
      var deltaY = ev.clientY - this.mouseY;
      this.element.style.left = this.elementX + deltaX + "px";
      this.element.style.top = this.elementY + deltaY + "px";
   };

   // init event listeners:
   this.element.addEventListener("mousedown", this.onMouseDown.bind(this));
   this.element.addEventListener("mouseup", this.onMouseUp.bind(this));
   document.addEventListener("mousemove", this.onMouseMove.bind(this));
};

new Draggable(document.querySelector('#team0'));
new Draggable(document.querySelector('#team1'));
new Draggable(document.querySelector('#team2'));
new Draggable(document.querySelector('#team3'));
new Draggable(document.querySelector('#team4'));
new Draggable(document.querySelector('#team5'));
new Draggable(document.querySelector('#team6'));
new Draggable(document.querySelector('#team7'));
new Draggable(document.querySelector('#team8'));
