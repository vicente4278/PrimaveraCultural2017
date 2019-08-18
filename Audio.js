

function start() {
	document.getElementById('title').style.animationName = "unlocking";
	document.getElementById('title').style.opacity = "0";
	document.getElementById('title2').style.opacity = "1";
	document.getElementById('description').style.opacity = "0";
	document.getElementById('arrow1').style.opacity = "1";
	document.getElementById('arrow1').style.visibility = "visible";
	document.getElementById('arrow2').style.opacity = "1";
	document.getElementById('arrow2').style.visibility = "visible";
	document.getElementById('arrow3').style.opacity = "1";
	document.getElementById('arrow3').style.visibility = "visible";
	document.getElementById('arrow4').style.opacity = "1";
	document.getElementById('arrow4').style.visibility = "visible";
	document.getElementById('main').style.visibility = "visible";
	document.getElementById('main').style.opacity = "1";
	document.getElementById('main').style.marginTop = "0%";
	document.getElementById('body').style.backgroundRepeat = "no-repeat";
	document.getElementById('bg0').className = "backgroundPicH";
	document.getElementById('bg1').className = "backgroundPic";
}

function setColor(color) {
	
	document.getElementById('cp1').className = "colorPick";
	document.getElementById('cp2').className = "colorPick";
	document.getElementById('cp3').className = "colorPick";
	document.getElementById('cp4').className = "colorPick";
	document.getElementById('cp5').className = "colorPick";
	document.getElementById('cp6').className = "colorPick";
	
	if (color==1) {
		document.getElementById('body').style.background = "linear-gradient(to bottom right, #3F51B5, #009688)";
		document.getElementById('cp1').className = "colorPickS";
	} else if (color==2) {
		document.getElementById('body').style.background = "linear-gradient(to bottom right, #F44336, #9C27B0)";
		document.getElementById('cp2').className = "colorPickS";
	} else if (color==3) {
		document.getElementById('body').style.background = "linear-gradient(to bottom right, #EF6C00, #D84315)";
		document.getElementById('cp3').className = "colorPickS";
	} else if (color==4){
		document.getElementById('body').style.background = "linear-gradient(to bottom right, #43A047, #33691E)";
		document.getElementById('cp4').className = "colorPickS";
	} else if (color==5){
		document.getElementById('body').style.background = "linear-gradient(to bottom right, #FF5722, #E91E63)";
		document.getElementById('cp5').className = "colorPickS";
	} else if (color==6){
		document.getElementById('body').style.background = "linear-gradient(to bottom right, #009688, #006064)";
		document.getElementById('cp6').className = "colorPickS";
	}
}

var page = 1;
var load = 0;

function init() {
	prev();
}

function prev() {
	if (page > 1) {
		page--;
	}
	setPage();
}

function next() {
	if (page < 11) {
		page++;
	}
	setPage();
}

function setPage() {
	
	document.getElementById('bg0').className = "backgroundPicH";
	document.getElementById('bg1').className = "backgroundPicH";
	document.getElementById('bg2').className = "backgroundPicH";
	document.getElementById('bg3').className = "backgroundPicH";
	document.getElementById('bg4').className = "backgroundPicH";
	document.getElementById('bg5').className = "backgroundPicH";
	document.getElementById('bg6').className = "backgroundPicH";
	document.getElementById('bg7').className = "backgroundPicH";
	document.getElementById('bg8').className = "backgroundPicH";
	document.getElementById('bg9').className = "backgroundPicH";
	document.getElementById('bg10').className = "backgroundPicH";
	document.getElementById('bg11').className = "backgroundPicH";
	
	//	Irmãos Lumière
	if (page!=1) {
		document.getElementById('card1').style.bottom = "110%";
		document.getElementById('card1').style.opacity = "0";
		document.getElementById('card2').style.bottom = "120%";
		document.getElementById('card2').style.opacity = "0";
		document.getElementById('card24').style.bottom = "130%";
		document.getElementById('card24').style.opacity = "0";
		document.getElementById('t1').style.marginTop = "-30%";
		document.getElementById('t1').style.opacity = "0";
	}
	if (page==1) {
		document.getElementById('card1').style.bottom = "10%";
		document.getElementById('card1').style.opacity = "1";
		document.getElementById('card2').style.bottom = "10%";
		document.getElementById('card2').style.opacity = "1";
		document.getElementById('card24').style.bottom = "10%";
		document.getElementById('card24').style.opacity = "1";
		document.getElementById('t1').style.marginTop = "2%";
		document.getElementById('t1').style.opacity = "1";
		document.getElementById('bg1').className = "backgroundPic";
	}
	
	//	Chaplin e Singing in the Rain
	if (page!=2) {
		document.getElementById('card3').style.bottom = "110%";
		document.getElementById('card3').style.opacity = "0";
		document.getElementById('card19').style.bottom = "120%";
		document.getElementById('card19').style.opacity = "0";
		document.getElementById('card20').style.bottom = "130%";
		document.getElementById('card20').style.opacity = "0";
		document.getElementById('t2').style.marginTop = "-30%";
		document.getElementById('t2').style.opacity = "0";
	}
	if (page==2) {
		document.getElementById('card3').style.bottom = "10%";
		document.getElementById('card3').style.opacity = "1";
		document.getElementById('card19').style.bottom = "10%";
		document.getElementById('card19').style.opacity = "1";
		document.getElementById('card20').style.bottom = "10%";
		document.getElementById('card20').style.opacity = "1";
		document.getElementById('t2').style.marginTop = "2%";
		document.getElementById('t2').style.opacity = "1";
		document.getElementById('bg2').className = "backgroundPic";
	}
	
	//	Titanic
	if (page!=3) {
		document.getElementById('card4').style.bottom = "110%";
		document.getElementById('card4').style.opacity = "0";
		//document.getElementById('card5').style.bottom = "120%";
		//document.getElementById('card5').style.opacity = "0";
		document.getElementById('card6').style.bottom = "120%";
		document.getElementById('card6').style.opacity = "0";
		document.getElementById('t3').style.marginTop = "-30%";
		document.getElementById('t3').style.opacity = "0";
	}
	if (page==3) {
		document.getElementById('card4').style.bottom = "10%";
		document.getElementById('card4').style.opacity = "1";
		//document.getElementById('card5').style.bottom = "10%";
		//document.getElementById('card5').style.opacity = "1";
		document.getElementById('card6').style.bottom = "10%";
		document.getElementById('card6').style.opacity = "1";
		document.getElementById('t3').style.marginTop = "2%";
		document.getElementById('t3').style.opacity = "1";
		document.getElementById('bg3').className = "backgroundPic";
	}
	
	//	Avatar
	if (page!=4) {
		document.getElementById('card7').style.bottom = "110%";
		document.getElementById('card7').style.opacity = "0";
		document.getElementById('t4').style.marginTop = "-30%";
		document.getElementById('t4').style.opacity = "0";
	}
	if (page==4) {
		document.getElementById('card7').style.bottom = "10%";
		document.getElementById('card7').style.opacity = "1";
		document.getElementById('t4').style.marginTop = "2%";
		document.getElementById('t4').style.opacity = "1";
		document.getElementById('bg4').className = "backgroundPic";
	}
	
	//	A Bela e a Fera
	if (page!=5) {
		document.getElementById('card8').style.bottom = "120%";
		document.getElementById('card8').style.opacity = "0";
		document.getElementById('card25').style.bottom = "110%";
		document.getElementById('card25').style.opacity = "0";
		document.getElementById('card26').style.bottom = "130%";
		document.getElementById('card26').style.opacity = "0";
		document.getElementById('t5').style.marginTop = "-30%";
		document.getElementById('t5').style.opacity = "0";
	}
	if (page==5) {
		document.getElementById('card8').style.bottom = "10%";
		document.getElementById('card8').style.opacity = "1";
		document.getElementById('card25').style.bottom = "10%";
		document.getElementById('card25').style.opacity = "1";
		document.getElementById('card26').style.bottom = "10%";
		document.getElementById('card26').style.opacity = "1";
		document.getElementById('t5').style.marginTop = "2%";
		document.getElementById('t5').style.opacity = "1";
		document.getElementById('bg5').className = "backgroundPic";
	}
	
	//	Star Wars
	if (page!=6) {
		document.getElementById('card9').style.bottom = "110%";
		document.getElementById('card9').style.opacity = "0";
		document.getElementById('card10').style.bottom = "120%";
		document.getElementById('card10').style.opacity = "0";
		document.getElementById('IAmYourFather').style.top = "-120%";
		document.getElementById('t6').style.marginTop = "-30%";
		document.getElementById('t6').style.opacity = "0";
	}
	if (page==6) {
		document.getElementById('card9').style.bottom = "10%";
		document.getElementById('card9').style.opacity = "1";
		document.getElementById('card10').style.bottom = "10%";
		document.getElementById('card10').style.opacity = "1";
		document.getElementById('IAmYourFather').style.top = "5%";
		document.getElementById('t6').style.marginTop = "2%";
		document.getElementById('t6').style.opacity = "1";
		document.getElementById('bg6').className = "backgroundPic";
	}
	
	//	Terror
	if (page!=7) {
		document.getElementById('card11').style.bottom = "110%";
		document.getElementById('card11').style.opacity = "0";
		document.getElementById('card12').style.bottom = "120%";
		document.getElementById('card12').style.opacity = "0";
		document.getElementById('card13').style.bottom = "130%";
		document.getElementById('card13').style.opacity = "0";
		document.getElementById('t7').style.marginTop = "-30%";
		document.getElementById('t7').style.opacity = "0";
	}
	if (page==7) {
		document.getElementById('card11').style.bottom = "10%";
		document.getElementById('card11').style.opacity = "1";
		document.getElementById('card12').style.bottom = "10%";
		document.getElementById('card12').style.opacity = "1";
		document.getElementById('card13').style.bottom = "10%";
		document.getElementById('card13').style.opacity = "1";
		document.getElementById('t7').style.marginTop = "2%";
		document.getElementById('t7').style.opacity = "1";
		document.getElementById('bg7').className = "backgroundPic";
	}
	
	//	Tropa de Elite e Grease
	if (page!=8) {
		document.getElementById('card14').style.bottom = "110%";
		document.getElementById('card14').style.opacity = "0";
		document.getElementById('card15').style.bottom = "120%";
		document.getElementById('card15').style.opacity = "0";
		document.getElementById('card21').style.bottom = "130%";
		document.getElementById('card21').style.opacity = "0";
		document.getElementById('t8').style.marginTop = "-30%";
		document.getElementById('t8').style.opacity = "0";
	}
	if (page==8) {
		document.getElementById('card14').style.bottom = "10%";
		document.getElementById('card14').style.opacity = "1";
		document.getElementById('card15').style.bottom = "10%";
		document.getElementById('card15').style.opacity = "1";
		document.getElementById('card21').style.bottom = "10%";
		document.getElementById('card21').style.opacity = "1";
		document.getElementById('t8').style.marginTop = "2%";
		document.getElementById('t8').style.opacity = "1";
		document.getElementById('bg8').className = "backgroundPic";
	}
	
	//	A Sociedade Dos Poetas Mortos
	if (page!=9) {
		document.getElementById('card22').style.bottom = "110%";
		document.getElementById('card22').style.opacity = "0";
		document.getElementById('t9').style.marginTop = "-30%";
		document.getElementById('t9').style.opacity = "0";
	}
	if (page==9) {
		document.getElementById('card22').style.bottom = "10%";
		document.getElementById('card22').style.opacity = "1";
		document.getElementById('t9').style.marginTop = "2%";
		document.getElementById('t9').style.opacity = "1";
		document.getElementById('bg9').className = "backgroundPic";
	}
	
	//	Oscar
	if (page!=10) {
		document.getElementById('card16').style.bottom = "110%";
		document.getElementById('card16').style.opacity = "0";
		document.getElementById('card17').style.bottom = "130%";
		document.getElementById('card17').style.opacity = "0";
		document.getElementById('card23').style.bottom = "120%";
		document.getElementById('card23').style.opacity = "0";
		document.getElementById('t10').style.marginTop = "-30%";
		document.getElementById('t10').style.opacity = "0";
	}
	if (page==10) {
		document.getElementById('card16').style.bottom = "10%";
		document.getElementById('card16').style.opacity = "1";
		document.getElementById('card17').style.bottom = "10%";
		document.getElementById('card17').style.opacity = "1";
		document.getElementById('card23').style.bottom = "10%";
		document.getElementById('card23').style.opacity = "1";
		document.getElementById('t10').style.marginTop = "2%";
		document.getElementById('t10').style.opacity = "1";
		document.getElementById('bg10').className = "backgroundPic";
	}
	
	//	Quarto
	if (page!=11) {
		document.getElementById('card18').style.bottom = "110%";
		document.getElementById('card18').style.opacity = "0";
		document.getElementById('t11').style.marginTop = "-30%";
		document.getElementById('t11').style.opacity = "0";
	}
	if (page==11) {
		document.getElementById('card18').style.bottom = "10%";
		document.getElementById('card18').style.opacity = "1";
		document.getElementById('t11').style.marginTop = "2%";
		document.getElementById('t11').style.opacity = "1";
		document.getElementById('bg11').className = "backgroundPic";
	}
	
	if (load==0) {
		document.getElementById('bg0').className = "backgroundPic";
		document.getElementById('bg1').className = "backgroundPicH";
		load++;
	}
	
	searchIOv = 1;
	searchIO();
	settingsIOv = 1;
	settingsIO();
}

var searchIOv = 0;
var settingsIOv = 0;

function searchIO() {
	if (searchIOv==0) {
		document.getElementById('searchBox').style.right = "5%";
		document.getElementById('darkSide').className = "";
		document.getElementById('settingsBox').style.right = "-25%";
		document.getElementById('arrow3').style.transform = "skew(-10deg)";
		document.getElementById('arrow4').style.transform = "rotate(0deg)";
		searchIOv = 1;
	} else if (searchIOv==1) {
		document.getElementById('searchBox').style.right = "-25%";
		document.getElementById('darkSide').className = "hide";
		document.getElementById('arrow3').style.transform = "skew(0deg)";
		searchIOv = 0;
		settingsIOv = 1;
		settingsIO();
	}
}

function settingsIO() {
	if (settingsIOv==0) {
		document.getElementById('settingsBox').style.right = "5%";
		document.getElementById('darkSide').className = "";
		document.getElementById('searchBox').style.right = "-25%";
		document.getElementById('arrow4').style.transform = "rotate(33deg)";
		document.getElementById('arrow3').style.transform = "skew(0deg)";
		settingsIOv = 1;
	} else if (settingsIOv==1) {
		document.getElementById('settingsBox').style.right = "-25%";
		document.getElementById('darkSide').className = "hide";
		document.getElementById('arrow4').style.transform = "rotate(0deg)";
		settingsIOv = 0;
	}
}

function closeIO() {
	searchIOv = 1;
	searchIO();
}

function search(s) {
	page = s;
	setPage();
}
/*function internet(status) {
	if (status==true) {
		document.getElementById("CNEstatus").innerHTML = "Conectado";
	} else {
		document.getElementById("CNEstatus").innerHTML = "Offline";
	}
	
}*/