$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	var player = createObjectPic ("Images/player.png")
	player.addFrames ("Images/children.png")
	player.animationDelay = 8
	//var cherry = createObjectPic ("Images/cherry.png")
	
	
	
	
	
	var aispeed
	var sispeed1
	var score
	score = 0
	var square = createObjectPic ("Images/square.png")
	var square1 = createObjectPic ("Images/square.png")
	var extra = createObjectPic ("Images/extra.png")
	var extra1 = createObjectPic ("Images/extra1.png")
	var extra2 = createObjectPic ("Images/extra2.png")
	var extra3 = createObjectPic ("Images/extra3.png")
	
	
	var easy = createButton (500, 100, 200,	100, null,"Easy");
	easy.colour = 'Green'
	easy. textCol = 'Black'
	easy.job = function () {
	screen = 2
	aispeed = 1
	aispeed1 = 3
	}
	
	
	var next = createButton (500, 100, 200,	100, null,"NEXT LEVEL");
	next.colour = 'Orange'
	next. textCol = 'Black'
	next.job = function () {
	screen = 9
	aispeed += 2
	aispeed1 += 2
	ghost.x = 20
	ghost.y = 20
	ghost.scale = .08
	ghost1.x = 1100
	ghost1.y = 20
	ghost1.scale = .16
	//sound.play();
	
	
	//Chomper, left, start
	
	ball.scale = .08
	ball.x = 500
	ball.y = 410
	ball1.x = 460
	ball1.y = 410
	ball1.scale = .08
	ball2.x = 420
	ball2.y = 410
	ball2.scale = .08
	ball3.x = 380
	ball3.y = 410
	ball3.scale = .08
	ball4.x = 340
	ball4.y = 410
	ball4.scale = .08
	ball5.x = 300
	ball5.y = 410
	ball5.scale = .08
	ball6.x = 260
	ball6.y = 410
	ball6.scale = 0.08
	ball7.x = 220
	ball7.y = 410
	ball7.scale = .08
	ball8.x = 180
	ball8.y = 410
	ball8.scale = .08
	ball9.x = 140
	ball9.y = 410
	ball9.scale = .08
	ball10.x = 100
	ball10.y = 410
	ball10.scale = .08
	ball11.x = 60
	ball11.y = 410
	ball11.scale = .08
	ball12.x = 20
	ball12.y = 410
	ball12.scale = .08
	ball39.scale = .08
	ball39.x = 500
	ball39.y = 460
	ball40.x = 460
	ball40.y = 460
	ball40.scale = .08
	ball41.x = 420
	ball41.y = 460
	ball41.scale = .08
	ball42.x = 380
	ball42.y = 460
	ball42.scale = .08
	ball43.x = 340
	ball43.y = 460
	ball43.scale = .08
	ball44.x = 300
	ball44.y = 460
	ball44.scale = .08
	ball45.x = 260
	ball45.y = 460
	ball45.scale = 0.08
	ball46.x = 220
	ball46.y = 460
	ball46.scale = .08
	ball47.x = 180
	ball47.y = 460
	ball47.scale = .08
	ball48.x = 140
	ball48.y = 460
	ball48.scale = .08
	ball49.x = 100
	ball49.y = 460
	ball49.scale = .08
	ball50.x = 60
	ball50.y = 460
	ball50.scale = .08
	ball51.x = 20
	ball51.y = 460
	ball51.scale = .08
	ball52.scale = .08
	ball52.x = 500
	ball52.y = 510
	ball53.x = 460
	ball53.y	= 510
	ball53.scale = .08
	ball54.x = 420
	ball54.y = 510
	ball54.scale = .08
	ball55.x = 380
	ball55.y = 510
	ball55.scale = .08
	ball56.x = 340
	ball56.y = 510
	ball56.scale = .08
	ball57.x = 300
	ball57.y = 510
	ball57.scale = .08
	ball58.x = 260
	ball58.y = 510
	ball58.scale = 0.08
	ball59.x = 220
	ball59.y = 510
	ball59.scale = .08
	ball60.x = 180
	ball60.y = 510
	ball60.scale = .08
	ball61.x = 140
	ball61.y = 510
	ball61.scale = .08
	ball62.x = 100
	ball62.y = 510
	ball62.scale = .08
	ball63.x = 60
	ball63.y = 510
	ball63.scale = .08
	ball64.x = 20
	ball64.y = 510
	ball64.scale = .08
	ball125.x = 20
	ball125.y = 360
	ball125.scale = .08
	ball126.x = 60
	ball126.y = 360
	ball126.scale = .08
	ball127.x = 100
	ball127.y = 360
	ball127.scale = .08
	ball128.x = 140
	ball128.y = 360
	ball128.scale = .08
	ball129.x = 180
	ball129.y = 360
	ball129.scale = .08
	ball130.x = 220
	ball130.y = 360
	ball130.scale = .08
	ball131.x = 260
	ball131.y = 360
	ball131.scale = .08
	ball132.x = 300
	ball132.y = 360
	ball132.scale = .08
	ball133.x = 340
	ball133.y = 360
	ball133.scale = .08
	ball134.x = 20
	ball134.y = 320
	ball134.scale = .08
	
	
	//Chomper right, start
	
	ball13.x = 680
	ball13.y = 410
	ball13.scale = .08
	ball14.x = 720
	ball14.y = 410
	ball14.scale = .08
	ball15.x = 760
	ball15.y = 410
	ball15.scale = .08
	ball16.x = 800
	ball16.y = 410
	ball16.scale = .08
	ball17.x = 840
	ball17.y = 410
	ball17.scale = .08
	ball18.x = 880
	ball18.y = 410
	ball18.scale = .08
	ball19.x = 920
	ball19.y = 410
	ball19.scale = .08
	ball20.x = 960
	ball20.y = 410
	ball20.scale = .08
	ball21.x = 1000
	ball21.y = 410
	ball21.scale = .08
	ball22.x = 1040
	ball22.y = 410
	ball22.scale = .08
	ball23.x = 1080
	ball23.y = 410
	ball23.scale = .08
	ball24.x = 1120
	ball24.y = 410
	ball24.scale = .08
	ball25.x = 1160
	ball25.y = 410
	ball25.scale = .08
	ball26.x = 680
	ball26.y = 460
	ball26.scale = .08
	ball27.x = 720
	ball27.y = 460
	ball27.scale = .08
	ball28.x = 760
	ball28.y = 460
	ball28.scale = .08
	ball29.x = 800
	ball29.y = 460
	ball29.scale = .08
	ball30.x = 840
	ball30.y = 460
	ball30.scale = .08
	ball31.x = 880
	ball31.y = 460
	ball31.scale = .08
	ball32.x = 920
	ball32.y = 460
	ball32.scale = .08
	ball33.x = 960
	ball33.y = 460
	ball33.scale = .08
	ball34.x = 1000
	ball34.y = 460
	ball34.scale = .08
	ball35.x = 1040
	ball35.y = 460
	ball35.scale = .08
	ball36.x = 1080
	ball36.y = 460
	ball36.scale = .08
	ball37.x = 1120
	ball37.y = 460
	ball37.scale = .08
	ball38.x = 1160
	ball38.y = 460
	ball38.scale = .08
	ball65.x = 680
	ball65.y = 510
	ball65.scale = .08
	ball66.x = 720
	ball66.y = 510
	ball66.scale = .08
	ball67.x = 760
	ball67.y = 510
	ball67.scale = .08
	ball68.x = 800
	ball68.y = 510
	ball68.scale = .08
	ball69.x = 840
	ball69.y = 510
	ball69.scale = .08
	ball70.x = 880
	ball70.y = 510
	ball70.scale = .08
	ball71.x = 920
	ball71.y = 510
	ball71.scale = .08
	ball72.x = 960
	ball72.y = 510
	ball72.scale = .08
	ball73.x = 1000
	ball73.y = 510
	ball73.scale = .08
	ball74.x = 1040
	ball74.y = 510
	ball74.scale = .08
	ball75.x = 1080
	ball75.y = 510
	ball75.scale = .08
	ball76.x = 1120
	ball76.y = 510
	ball76.scale = .08
	ball77.x = 1160
	ball77.y = 510
	ball77.scale = .08
	ball115.x = 1160
	ball115.y = 360
	ball115.scale = .08
	ball116.x = 1120
	ball116.y = 360
	ball116.scale = .08
	ball117.x = 1080
	ball117.y = 360
	ball117.scale = .08
	ball118.x = 1040
	ball118.y = 360
	ball118.scale = .08
	ball119.x = 1000
	ball119.y = 360
	ball119.scale = .08
	ball120.x = 960
	ball120.y = 360
	ball120.scale = .08
	ball121.x = 920
	ball121.y = 360
	ball121.scale = .08
	ball122.x = 880
	ball122.y = 360
	ball122.scale = .08
	ball123.x = 840
	ball123.y = 360
	ball123.scale = .08
	ball124.x = 1160
	ball124.y = 320
	ball124.scale = .08
	
	
	//Bottom half, left
	
	ball78.x = 30
	ball78.y = 560
	ball78.scale = .08
	ball79.x = 70
    ball79.y = 560
    ball79.scale = .08
    ball80.x = 110
    ball80.y = 560
    ball80.scale = .08
	ball81.x = 150
	ball81.y = 560
	ball81.scale = .08
	ball82.x = 30
	ball82.y = 600
	ball82.scale = .08
	ball83.x = 70
	ball83.y = 600
	ball83.scale = .08
	ball84.x = 110
	ball84.y = 600
	ball84.scale = .08
	ball85.x = 150
	ball85.y = 600
	ball85.scale = .08
	ball86.x = 30
	ball86.y = 640
	ball86.scale = .08
	ball87.x = 70
	ball87.y = 640
	ball87.scale = .08
	ball88.x = 110
	ball88.y = 640
	ball88.scale = .08
	ball89.x = 150
	ball89.y = 640
	ball89.scale = .08
	ball90.x = 30
	ball90.y = 680
	ball90.scale = .08
	ball91.x = 70
	ball91.y = 680
	ball91.scale = .08
	ball92.x = 110
	ball92.y = 680
	ball92.scale = .08
	ball93.x = 150
	ball93.y = 680
	ball93.scale = .08
	ball94.x = 110
	ball94.y = 730
	ball94.scale = .08
	ball95.x = 150
	ball95.y = 730
	ball95.scale = .08
	
	//Bottom half, right
	
	ball96.x = 1150
	ball96.y = 560
	ball96.scale = .08
	ball97.x = 1110
    ball97.y = 560
    ball97.scale = .08
    ball98.x = 1070
    ball98.y = 560
    ball98.scale = .08
	ball99.x = 1030
	ball99.y = 560
	ball99.scale = .08
	ball100.x = 1150
	ball100.y = 600
	ball100.scale = .08
	ball101.x = 1110
	ball101.y = 600
	ball101.scale = .08
	ball102.x = 1070
	ball102.y = 600
	ball102.scale = .08
	ball103.x = 1030
	ball103.y = 600
	ball103.scale = .08
	ball104.x = 1150
	ball104.y = 600
	ball104.scale = .08
	ball105.x = 1110
	ball105.y = 640
	ball105.scale = .08
	ball106.x = 1070
	ball106.y = 640
	ball106.scale = .08
	ball107.x = 1030
	ball107.y = 640
	ball107.scale = .08
	ball108.x = 1150
	ball108.y = 640
	ball108.scale = .08
	ball109.x = 1110
	ball109.y = 680
	ball109.scale = .08
	ball110.x = 1070
	ball110.y = 680
	ball110.scale = .08
	ball111.x = 1030
	ball111.y = 680
	ball111.scale = .08
	ball112.x = 1150
	ball112.y = 680
	ball112.scale = .08
	ball113.x = 1070
	ball113.y = 730
	ball113.scale = .08
	ball114.x = 1030
	ball114.y = 730
	ball114.scale = .08
	
	player.x = 570
	player.y = 605
	
	power1.y = 720
	power1.x = 20
	power1.scale = .2
	
	power2.y = 720
	power2.x = 1120
	power2.scale = .2
	
	
	}
	
	var medium = createButton (500, 250, 200,	100, null,"Medium");
	medium.colour = 'Yellow'
	medium. textCol = 'Black'
	medium.job = function () {
	screen = 2
	aispeed = 2
	aispeed1 = 4
	}
	
	var hard = createButton (500, 400, 200,	100, null,"Hard");
	hard.colour = 'Red'
	hard.textCol = 'Black'
	hard.job = function () {
	screen = 2
	aispeed = 4
	aispeed1 = 6
	}
	
	var insane = createButton (500, 550, 200,	100, null,"Insane");
	insane.colour = 'White'
	insane. textCol = 'Black'
	insane.job = function () {
	screen = 2
	aispeed = 6
	aispeed1 = 8
	}
	
	
	
	var con = createButton (500, 100,200,100, null, "Unlimited Levels");
	con.colour = 'Orange'
	con.textCol = 'Black'
	con.job = function (){
	screen = 9
	aispeed = 1
	aispeed1 = 3
	}
	
	var can = createButton (500, 250,200,100,null,"Single Level");
	can.colour = 'Orange'
	can.textCol = 'Black'
	can.job = function (){
	screen = 7	
	}
	
	var start = createButton (500,100,200,100, null ,"Play");
	start.colour = 'Orange'
	start.textCol = 'Black'
	start.job = function (){
	screen = 10
	score = 0
	ghost.x = 20
	ghost.y = 20
	ghost.scale = .08
	ghost1.x = 1100
	ghost1.y = 20
	ghost1.scale = .16
	player.scale = .110
	//sound.play();
	
	//Chomper, left, start
	
	ball.scale = .08
	ball.x = 500
	ball.y = 410
	ball1.x = 460
	ball1.y = 410
	ball1.scale = .08
	ball2.x = 420
	ball2.y = 410
	ball2.scale = .08
	ball3.x = 380
	ball3.y = 410
	ball3.scale = .08
	ball4.x = 340
	ball4.y = 410
	ball4.scale = .08
	ball5.x = 300
	ball5.y = 410
	ball5.scale = .08
	ball6.x = 260
	ball6.y = 410
	ball6.scale = 0.08
	ball7.x = 220
	ball7.y = 410
	ball7.scale = .08
	ball8.x = 180
	ball8.y = 410
	ball8.scale = .08
	ball9.x = 140
	ball9.y = 410
	ball9.scale = .08
	ball10.x = 100
	ball10.y = 410
	ball10.scale = .08
	ball11.x = 60
	ball11.y = 410
	ball11.scale = .08
	ball12.x = 20
	ball12.y = 410
	ball12.scale = .08
	ball39.scale = .08
	ball39.x = 500
	ball39.y = 460
	ball40.x = 460
	ball40.y = 460
	ball40.scale = .08
	ball41.x = 420
	ball41.y = 460
	ball41.scale = .08
	ball42.x = 380
	ball42.y = 460
	ball42.scale = .08
	ball43.x = 340
	ball43.y = 460
	ball43.scale = .08
	ball44.x = 300
	ball44.y = 460
	ball44.scale = .08
	ball45.x = 260
	ball45.y = 460
	ball45.scale = 0.08
	ball46.x = 220
	ball46.y = 460
	ball46.scale = .08
	ball47.x = 180
	ball47.y = 460
	ball47.scale = .08
	ball48.x = 140
	ball48.y = 460
	ball48.scale = .08
	ball49.x = 100
	ball49.y = 460
	ball49.scale = .08
	ball50.x = 60
	ball50.y = 460
	ball50.scale = .08
	ball51.x = 20
	ball51.y = 460
	ball51.scale = .08
	ball52.scale = .08
	ball52.x = 500
	ball52.y = 510
	ball53.x = 460
	ball53.y	= 510
	ball53.scale = .08
	ball54.x = 420
	ball54.y = 510
	ball54.scale = .08
	ball55.x = 380
	ball55.y = 510
	ball55.scale = .08
	ball56.x = 340
	ball56.y = 510
	ball56.scale = .08
	ball57.x = 300
	ball57.y = 510
	ball57.scale = .08
	ball58.x = 260
	ball58.y = 510
	ball58.scale = 0.08
	ball59.x = 220
	ball59.y = 510
	ball59.scale = .08
	ball60.x = 180
	ball60.y = 510
	ball60.scale = .08
	ball61.x = 140
	ball61.y = 510
	ball61.scale = .08
	ball62.x = 100
	ball62.y = 510
	ball62.scale = .08
	ball63.x = 60
	ball63.y = 510
	ball63.scale = .08
	ball64.x = 20
	ball64.y = 510
	ball64.scale = .08
	ball125.x = 20
	ball125.y = 360
	ball125.scale = .08
	ball126.x = 60
	ball126.y = 360
	ball126.scale = .08
	ball127.x = 100
	ball127.y = 360
	ball127.scale = .08
	ball128.x = 140
	ball128.y = 360
	ball128.scale = .08
	ball129.x = 180
	ball129.y = 360
	ball129.scale = .08
	ball130.x = 220
	ball130.y = 360
	ball130.scale = .08
	ball131.x = 260
	ball131.y = 360
	ball131.scale = .08
	ball132.x = 300
	ball132.y = 360
	ball132.scale = .08
	ball133.x = 340
	ball133.y = 360
	ball133.scale = .08
	ball134.x = 20
	ball134.y = 320
	ball134.scale = .08
	
	
	//Chomper right, start
	
	ball13.x = 680
	ball13.y = 410
	ball13.scale = .08
	ball14.x = 720
	ball14.y = 410
	ball14.scale = .08
	ball15.x = 760
	ball15.y = 410
	ball15.scale = .08
	ball16.x = 800
	ball16.y = 410
	ball16.scale = .08
	ball17.x = 840
	ball17.y = 410
	ball17.scale = .08
	ball18.x = 880
	ball18.y = 410
	ball18.scale = .08
	ball19.x = 920
	ball19.y = 410
	ball19.scale = .08
	ball20.x = 960
	ball20.y = 410
	ball20.scale = .08
	ball21.x = 1000
	ball21.y = 410
	ball21.scale = .08
	ball22.x = 1040
	ball22.y = 410
	ball22.scale = .08
	ball23.x = 1080
	ball23.y = 410
	ball23.scale = .08
	ball24.x = 1120
	ball24.y = 410
	ball24.scale = .08
	ball25.x = 1160
	ball25.y = 410
	ball25.scale = .08
	ball26.x = 680
	ball26.y = 460
	ball26.scale = .08
	ball27.x = 720
	ball27.y = 460
	ball27.scale = .08
	ball28.x = 760
	ball28.y = 460
	ball28.scale = .08
	ball29.x = 800
	ball29.y = 460
	ball29.scale = .08
	ball30.x = 840
	ball30.y = 460
	ball30.scale = .08
	ball31.x = 880
	ball31.y = 460
	ball31.scale = .08
	ball32.x = 920
	ball32.y = 460
	ball32.scale = .08
	ball33.x = 960
	ball33.y = 460
	ball33.scale = .08
	ball34.x = 1000
	ball34.y = 460
	ball34.scale = .08
	ball35.x = 1040
	ball35.y = 460
	ball35.scale = .08
	ball36.x = 1080
	ball36.y = 460
	ball36.scale = .08
	ball37.x = 1120
	ball37.y = 460
	ball37.scale = .08
	ball38.x = 1160
	ball38.y = 460
	ball38.scale = .08
	ball65.x = 680
	ball65.y = 510
	ball65.scale = .08
	ball66.x = 720
	ball66.y = 510
	ball66.scale = .08
	ball67.x = 760
	ball67.y = 510
	ball67.scale = .08
	ball68.x = 800
	ball68.y = 510
	ball68.scale = .08
	ball69.x = 840
	ball69.y = 510
	ball69.scale = .08
	ball70.x = 880
	ball70.y = 510
	ball70.scale = .08
	ball71.x = 920
	ball71.y = 510
	ball71.scale = .08
	ball72.x = 960
	ball72.y = 510
	ball72.scale = .08
	ball73.x = 1000
	ball73.y = 510
	ball73.scale = .08
	ball74.x = 1040
	ball74.y = 510
	ball74.scale = .08
	ball75.x = 1080
	ball75.y = 510
	ball75.scale = .08
	ball76.x = 1120
	ball76.y = 510
	ball76.scale = .08
	ball77.x = 1160
	ball77.y = 510
	ball77.scale = .08
	ball115.x = 1160
	ball115.y = 360
	ball115.scale = .08
	ball116.x = 1120
	ball116.y = 360
	ball116.scale = .08
	ball117.x = 1080
	ball117.y = 360
	ball117.scale = .08
	ball118.x = 1040
	ball118.y = 360
	ball118.scale = .08
	ball119.x = 1000
	ball119.y = 360
	ball119.scale = .08
	ball120.x = 960
	ball120.y = 360
	ball120.scale = .08
	ball121.x = 920
	ball121.y = 360
	ball121.scale = .08
	ball122.x = 880
	ball122.y = 360
	ball122.scale = .08
	ball123.x = 840
	ball123.y = 360
	ball123.scale = .08
	ball124.x = 1160
	ball124.y = 320
	ball124.scale = .08
	
	
	//Bottom half, left
	
	ball78.x = 30
	ball78.y = 560
	ball78.scale = .08
	ball79.x = 70
    ball79.y = 560
    ball79.scale = .08
    ball80.x = 110
    ball80.y = 560
    ball80.scale = .08
	ball81.x = 150
	ball81.y = 560
	ball81.scale = .08
	ball82.x = 30
	ball82.y = 600
	ball82.scale = .08
	ball83.x = 70
	ball83.y = 600
	ball83.scale = .08
	ball84.x = 110
	ball84.y = 600
	ball84.scale = .08
	ball85.x = 150
	ball85.y = 600
	ball85.scale = .08
	ball86.x = 30
	ball86.y = 640
	ball86.scale = .08
	ball87.x = 70
	ball87.y = 640
	ball87.scale = .08
	ball88.x = 110
	ball88.y = 640
	ball88.scale = .08
	ball89.x = 150
	ball89.y = 640
	ball89.scale = .08
	ball90.x = 30
	ball90.y = 680
	ball90.scale = .08
	ball91.x = 70
	ball91.y = 680
	ball91.scale = .08
	ball92.x = 110
	ball92.y = 680
	ball92.scale = .08
	ball93.x = 150
	ball93.y = 680
	ball93.scale = .08
	ball94.x = 110
	ball94.y = 730
	ball94.scale = .08
	ball95.x = 150
	ball95.y = 730
	ball95.scale = .08
	
	//Bottom half, right
	
	ball96.x = 1150
	ball96.y = 560
	ball96.scale = .08
	ball97.x = 1110
    ball97.y = 560
    ball97.scale = .08
    ball98.x = 1070
    ball98.y = 560
    ball98.scale = .08
	ball99.x = 1030
	ball99.y = 560
	ball99.scale = .08
	ball100.x = 1150
	ball100.y = 600
	ball100.scale = .08
	ball101.x = 1110
	ball101.y = 600
	ball101.scale = .08
	ball102.x = 1070
	ball102.y = 600
	ball102.scale = .08
	ball103.x = 1030
	ball103.y = 600
	ball103.scale = .08
	ball104.x = 1150
	ball104.y = 600
	ball104.scale = .08
	ball105.x = 1110
	ball105.y = 640
	ball105.scale = .08
	ball106.x = 1070
	ball106.y = 640
	ball106.scale = .08
	ball107.x = 1030
	ball107.y = 640
	ball107.scale = .08
	ball108.x = 1150
	ball108.y = 640
	ball108.scale = .08
	ball109.x = 1110
	ball109.y = 680
	ball109.scale = .08
	ball110.x = 1070
	ball110.y = 680
	ball110.scale = .08
	ball111.x = 1030
	ball111.y = 680
	ball111.scale = .08
	ball112.x = 1150
	ball112.y = 680
	ball112.scale = .08
	ball113.x = 1070
	ball113.y = 730
	ball113.scale = .08
	ball114.x = 1030
	ball114.y = 730
	ball114.scale = .08
	
	player.x = 570
	player.y = 605
	
	power1.y = 720
	power1.x = 20
	power1.scale = .2
	
	power2.y = 720
	power2.x = 1120
	power2.scale = .2
	
	}
	
	var intro = createButton (500,250,200,100, null , "Instructions");
	intro.colour = 'Orange'
	intro.textCol = 'Black'
	intro.job = function (){
	screen = 4
	}
	
	var back = createButton (500,500,200,100, null, "Back")
	back.colour = 'Orange'
	back.textCol = 'Black'
	back.job = function (){
	screen = 1
	}
	
	var ball = createObjectPic ("Images/ball.png")
	var ball1 = createObjectPic ("Images/ball.png")
	var ball2 = createObjectPic ("Images/ball.png")
	var ball3 = createObjectPic ("Images/ball.png")
	var ball4 = createObjectPic ("Images/ball.png")
	var ball5 = createObjectPic ("Images/ball.png")
	var ball6 = createObjectPic ("Images/ball.png")
	var ball7 = createObjectPic ("Images/ball.png")
	var ball8 = createObjectPic ("Images/ball.png")
	var ball9 = createObjectPic ("Images/ball.png")
	var ball10 = createObjectPic ("Images/ball.png")
	var ball11 = createObjectPic ("Images/ball.png")
	var ball12 = createObjectPic ("Images/ball.png")
	var ball13 = createObjectPic ("Images/ball.png")
	var ball14 = createObjectPic ("Images/ball.png")
	var ball15 = createObjectPic ("Images/ball.png")
	var ball16 = createObjectPic ("Images/ball.png")
	var ball17 = createObjectPic ("Images/ball.png")
	var ball18 = createObjectPic ("Images/ball.png")
	var ball19 = createObjectPic ("Images/ball.png")
	var ball20 = createObjectPic ("Images/ball.png")
	var ball21 = createObjectPic ("Images/ball.png")
	var ball22 = createObjectPic ("Images/ball.png")
	var ball23 = createObjectPic ("Images/ball.png")
	var ball24 = createObjectPic ("Images/ball.png")
	var ball25 = createObjectPic ("Images/ball.png")
	var ball26 = createObjectPic ("Images/ball.png")
	var ball27 = createObjectPic ("Images/ball.png")
	var ball28 = createObjectPic ("Images/ball.png")
	var ball29 = createObjectPic ("Images/ball.png")
	var ball30 = createObjectPic ("Images/ball.png")
	var ball31 = createObjectPic ("Images/ball.png")
	var ball32 = createObjectPic ("Images/ball.png")
	var ball33 = createObjectPic ("Images/ball.png")
	var ball34 = createObjectPic ("Images/ball.png")
	var ball35 = createObjectPic ("Images/ball.png")
	var ball36 = createObjectPic ("Images/ball.png")
	var ball37 = createObjectPic ("Images/ball.png")
	var ball38 = createObjectPic ("Images/ball.png")
	var ball39 = createObjectPic ("Images/ball.png")
	var ball40 = createObjectPic ("Images/ball.png")
	var ball41 = createObjectPic ("Images/ball.png")
	var ball42 = createObjectPic ("Images/ball.png")
	var ball43 = createObjectPic ("Images/ball.png")
	var ball44 = createObjectPic ("Images/ball.png")
	var ball45 = createObjectPic ("Images/ball.png")
	var ball46 = createObjectPic ("Images/ball.png")
	var ball47 = createObjectPic ("Images/ball.png")
	var ball48 = createObjectPic ("Images/ball.png")
	var ball49 = createObjectPic ("Images/ball.png")
	var ball50 = createObjectPic ("Images/ball.png")
	var ball51 = createObjectPic ("Images/ball.png")
	var ball52 = createObjectPic ("Images/ball.png")
	var ball53 = createObjectPic ("Images/ball.png")
	var ball54 = createObjectPic ("Images/ball.png")
	var ball55 = createObjectPic ("Images/ball.png")
	var ball56 = createObjectPic ("Images/ball.png")
	var ball57 = createObjectPic ("Images/ball.png")
	var ball58 = createObjectPic ("Images/ball.png")
	var ball59 = createObjectPic ("Images/ball.png")
	var ball60 = createObjectPic ("Images/ball.png")
	var ball61 = createObjectPic ("Images/ball.png")
	var ball62 = createObjectPic ("Images/ball.png")
	var ball63 = createObjectPic ("Images/ball.png")
	var ball64 = createObjectPic ("Images/ball.png")
	
	var ball65 = createObjectPic ("Images/ball.png")
	var ball66 = createObjectPic ("Images/ball.png")
	var ball67 = createObjectPic ("Images/ball.png")
	var ball68 = createObjectPic ("Images/ball.png")
	var ball69 = createObjectPic ("Images/ball.png")
	var ball70 = createObjectPic ("Images/ball.png")
	var ball71 = createObjectPic ("Images/ball.png")
	var ball72 = createObjectPic ("Images/ball.png")
	var ball73 = createObjectPic ("Images/ball.png")
	var ball74 = createObjectPic ("Images/ball.png")
	var ball75 = createObjectPic ("Images/ball.png")
	var ball76 = createObjectPic ("Images/ball.png")
	var ball77 = createObjectPic ("Images/ball.png")
	
	
	var ball78 = createObjectPic ("Images/ball.png")
	var ball79 = createObjectPic ("Images/ball.png")
	var ball80 = createObjectPic ("Images/ball.png")
	var ball81 = createObjectPic ("Images/ball.png")
	var ball82 = createObjectPic ("Images/ball.png")
	var ball83 = createObjectPic ("Images/ball.png")
	var ball84 = createObjectPic ("Images/ball.png")
	var ball85 = createObjectPic ("Images/ball.png")
	var ball86 = createObjectPic ("Images/ball.png")
	var ball87 = createObjectPic ("Images/ball.png")
	var ball88 = createObjectPic ("Images/ball.png")
	var ball89 = createObjectPic ("Images/ball.png")
	var ball90 = createObjectPic ("Images/ball.png")
	var ball91 = createObjectPic ("Images/ball.png")
	var ball92 = createObjectPic ("Images/ball.png")
	var ball93 = createObjectPic ("Images/ball.png")
	var ball94 = createObjectPic ("Images/ball.png")
	var ball95 = createObjectPic ("Images/ball.png")
	
	var ball96 = createObjectPic ("Images/ball.png")
	var ball97 = createObjectPic ("Images/ball.png")
	var ball98 = createObjectPic ("Images/ball.png")
	var ball99 = createObjectPic ("Images/ball.png")
	var ball100 = createObjectPic ("Images/ball.png")
	var ball101 = createObjectPic ("Images/ball.png")
	var ball102 = createObjectPic ("Images/ball.png")
	var ball103 = createObjectPic ("Images/ball.png")
	var ball104 = createObjectPic ("Images/ball.png")
	var ball105 = createObjectPic ("Images/ball.png")
	var ball106 = createObjectPic ("Images/ball.png")
	var ball107 = createObjectPic ("Images/ball.png")
	var ball108 = createObjectPic ("Images/ball.png")
	var ball109 = createObjectPic ("Images/ball.png")
	var ball110 = createObjectPic ("Images/ball.png")
	var ball111 = createObjectPic ("Images/ball.png")
	var ball112 = createObjectPic ("Images/ball.png")
	var ball113 = createObjectPic ("Images/ball.png")
	var ball114 = createObjectPic ("Images/ball.png")
	var ball115 = createObjectPic ("Images/ball.png")
	var ball116 = createObjectPic ("Images/ball.png")
	var ball117 = createObjectPic ("Images/ball.png")
	var ball118 = createObjectPic ("Images/ball.png")
	var ball119 = createObjectPic ("Images/ball.png")
	var ball120 = createObjectPic ("Images/ball.png")
	var ball121 = createObjectPic ("Images/ball.png")
	var ball122 = createObjectPic ("Images/ball.png")
	var ball123 = createObjectPic ("Images/ball.png")
	var ball124 = createObjectPic ("Images/ball.png")
	
	var ball125 = createObjectPic ("Images/ball.png")
	var ball126 = createObjectPic ("Images/ball.png")
	var ball127 = createObjectPic ("Images/ball.png")
	var ball128 = createObjectPic ("Images/ball.png")
	var ball129 = createObjectPic ("Images/ball.png")
	var ball130 = createObjectPic ("Images/ball.png")
	var ball131 = createObjectPic ("Images/ball.png")
	var ball132 = createObjectPic ("Images/ball.png")
	var ball133 = createObjectPic ("Images/ball.png")
	var ball134 = createObjectPic ("Images/ball.png")
	var ball135 = createObjectPic ("Images/ball.png")
	
	var power1 = createObjectPic ("Images/ball.png")
	var power2 = createObjectPic ("Images/ball.png")
	
	var wall1 = createObjectPic ("Images/wall.png")
	var wall2 = createObjectPic ("Images/wall.png")
	var wall3 = createObjectPic ("Images/wall2.png")
	var wall4 = createObjectPic ("Images/wall2.png")
	var wall5 = createObjectPic ("Images/wall3.png")
	var wall6 = createObjectPic ("Images/wall3.png")
	var wall7 = createObjectPic ("Images/wall4.png")
	var wall8 = createObjectPic ("Images/wall4.png")
	var wall9 = createObjectPic ("Images/wall5.png")
	var wall10 = createObjectPic ("Images/wall3.png")
	var wall11 = createObjectPic ("Images/wall3.png")
	var wall12 = createObjectPic ("Images/wall3.png")
	var wall13 = createObjectPic ("Images/wall3.png")
	
	var ghost = createObjectPic ("Images/pacmanP.png")
	var ghost1 = createObjectPic ("Images/pacmanPP.png")
	
	var mySound = addSound ("Sounds/waka waka1.mp3")
	var sound = addSound ("Sounds/woww.mp3")
	var wow = addSound ("Sounds/extra.mp3")
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.
	extra1.scale = .3
	extra.scale = .3
	
	extra.x = 1200
	extra1.x = 1400
	
	extra.y = 10
	extra1.y = 500
	
	extra2.scale = .3
		extra3.scale = .3
	
		extra2.x = 1200
		extra3.x = 1400
	
		extra2.y = 150
		extra3.y = 350
	
	
	aispeed = 6
	aispeed1 = 8
	player.speedx = 8
    player.scale = .110
	
	player.x = 570
	player.y = 405
	
	square.x = 100
	square.y = 100
	
	square1.x = 900
	square1.y = 100
	
	power1.y = 720
	power1.x = 20
	power1.scale = .2
	
	power2.y = 720
	power2.x = 1120
	power2.scale = .2
	
	wall1.y = 790
	wall1.x = 0
	wall2.y = -90
	wall2.x = 0
	wall3.x = -40
	wall3.y = 0
	wall4.x = 1190
	wall4.y = 0
	wall5.x = 400
	wall5.y = 200
	wall6.x = 800
	wall6.y = 200
	wall7.x = 400
	wall7.y = 200
	wall8.x = 400
	wall8.y = 390
	wall9.x = 200
	wall9.y = 550
	wall10.x = 400
	wall10.y = 560
	wall10.scale = .8
	wall11.x = 992
	wall11.y = 560
	wall11.scale = .8
	wall12.x = 200
	wall12.y = 560
	wall12.scale = .8
	wall13.x = 800
	wall13.y = 560
	wall13.scale = .8
	ghost.x = 500
	ghost.y = 225
	ghost.scale = .08
	ghost1.x = 520
	ghost1.y = 225
	ghost1.scale = .16
	//Chomper, left, start
	
	ball.scale = .08
	ball.x = 500
	ball.y = 410
	ball1.x = 460
	ball1.y = 410
	ball1.scale = .08
	ball2.x = 420
	ball2.y = 410
	ball2.scale = .08
	ball3.x = 380
	ball3.y = 410
	ball3.scale = .08
	ball4.x = 340
	ball4.y = 410
	ball4.scale = .08
	ball5.x = 300
	ball5.y = 410
	ball5.scale = .08
	ball6.x = 260
	ball6.y = 410
	ball6.scale = 0.08
	ball7.x = 220
	ball7.y = 410
	ball7.scale = .08
	ball8.x = 180
	ball8.y = 410
	ball8.scale = .08
	ball9.x = 140
	ball9.y = 410
	ball9.scale = .08
	ball10.x = 100
	ball10.y = 410
	ball10.scale = .08
	ball11.x = 60
	ball11.y = 410
	ball11.scale = .08
	ball12.x = 20
	ball12.y = 410
	ball12.scale = .08
	ball39.scale = .08
	ball39.x = 500
	ball39.y = 460
	ball40.x = 460
	ball40.y = 460
	ball40.scale = .08
	ball41.x = 420
	ball41.y = 460
	ball41.scale = .08
	ball42.x = 380
	ball42.y = 460
	ball42.scale = .08
	ball43.x = 340
	ball43.y = 460
	ball43.scale = .08
	ball44.x = 300
	ball44.y = 460
	ball44.scale = .08
	ball45.x = 260
	ball45.y = 460
	ball45.scale = 0.08
	ball46.x = 220
	ball46.y = 460
	ball46.scale = .08
	ball47.x = 180
	ball47.y = 460
	ball47.scale = .08
	ball48.x = 140
	ball48.y = 460
	ball48.scale = .08
	ball49.x = 100
	ball49.y = 460
	ball49.scale = .08
	ball50.x = 60
	ball50.y = 460
	ball50.scale = .08
	ball51.x = 20
	ball51.y = 460
	ball51.scale = .08
	ball52.scale = .08
	ball52.x = 500
	ball52.y = 510
	ball53.x = 460
	ball53.y	= 510
	ball53.scale = .08
	ball54.x = 420
	ball54.y = 510
	ball54.scale = .08
	ball55.x = 380
	ball55.y = 510
	ball55.scale = .08
	ball56.x = 340
	ball56.y = 510
	ball56.scale = .08
	ball57.x = 300
	ball57.y = 510
	ball57.scale = .08
	ball58.x = 260
	ball58.y = 510
	ball58.scale = 0.08
	ball59.x = 220
	ball59.y = 510
	ball59.scale = .08
	ball60.x = 180
	ball60.y = 510
	ball60.scale = .08
	ball61.x = 140
	ball61.y = 510
	ball61.scale = .08
	ball62.x = 100
	ball62.y = 510
	ball62.scale = .08
	ball63.x = 60
	ball63.y = 510
	ball63.scale = .08
	ball64.x = 20
	ball64.y = 510
	ball64.scale = .08
	
	//Chomper right, start
	
	ball13.x = 680
	ball13.y = 410
	ball13.scale = .08
	ball14.x = 720
	ball14.y = 410
	ball14.scale = .08
	ball15.x = 760
	ball15.y = 410
	ball15.scale = .08
	ball16.x = 800
	ball16.y = 410
	ball16.scale = .08
	ball17.x = 840
	ball17.y = 410
	ball17.scale = .08
	ball18.x = 880
	ball18.y = 410
	ball18.scale = .08
	ball19.x = 920
	ball19.y = 410
	ball19.scale = .08
	ball20.x = 960
	ball20.y = 410
	ball20.scale = .08
	ball21.x = 1000
	ball21.y = 410
	ball21.scale = .08
	ball22.x = 1040
	ball22.y = 410
	ball22.scale = .08
	ball23.x = 1080
	ball23.y = 410
	ball23.scale = .08
	ball24.x = 1120
	ball24.y = 410
	ball24.scale = .08
	ball25.x = 1160
	ball25.y = 410
	ball25.scale = .08
	ball26.x = 680
	ball26.y = 460
	ball26.scale = .08
	ball27.x = 720
	ball27.y = 460
	ball27.scale = .08
	ball28.x = 760
	ball28.y = 460
	ball28.scale = .08
	ball29.x = 800
	ball29.y = 460
	ball29.scale = .08
	ball30.x = 840
	ball30.y = 460
	ball30.scale = .08
	ball31.x = 880
	ball31.y = 460
	ball31.scale = .08
	ball32.x = 920
	ball32.y = 460
	ball32.scale = .08
	ball33.x = 960
	ball33.y = 460
	ball33.scale = .08
	ball34.x = 1000
	ball34.y = 460
	ball34.scale = .08
	ball35.x = 1040
	ball35.y = 460
	ball35.scale = .08
	ball36.x = 1080
	ball36.y = 460
	ball36.scale = .08
	ball37.x = 1120
	ball37.y = 460
	ball37.scale = .08
	ball38.x = 1160
	ball38.y = 460
	ball38.scale = .08
	ball65.x = 680
	ball65.y = 510
	ball65.scale = .08
	ball66.x = 720
	ball66.y = 510
	ball66.scale = .08
	ball67.x = 760
	ball67.y = 510
	ball67.scale = .08
	ball68.x = 800
	ball68.y = 510
	ball68.scale = .08
	ball69.x = 840
	ball69.y = 510
	ball69.scale = .08
	ball70.x = 880
	ball70.y = 510
	ball70.scale = .08
	ball71.x = 920
	ball71.y = 510
	ball71.scale = .08
	ball72.x = 960
	ball72.y = 510
	ball72.scale = .08
	ball73.x = 1000
	ball73.y = 510
	ball73.scale = .08
	ball74.x = 1040
	ball74.y = 510
	ball74.scale = .08
	ball75.x = 1080
	ball75.y = 510
	ball75.scale = .08
	ball76.x = 1120
	ball76.y = 510
	ball76.scale = .08
	ball77.x = 1160
	ball77.y = 510
	ball77.scale = .08
	
	//Bottom half, left
	
	ball78.x = 30
	ball78.y = 560
	ball78.scale = .08
	ball79.x = 70
    ball79.y = 560
    ball79.scale = .08
    ball80.x = 110
    ball80.y = 560
    ball80.scale = .08
	ball81.x = 150
	ball81.y = 560
	ball81.scale = .08
	ball82.x = 30
	ball82.y = 600
	ball82.scale = .08
	ball83.x = 70
	ball83.y = 600
	ball83.scale = .08
	ball84.x = 110
	ball84.y = 600
	ball84.scale = .08
	ball85.x = 150
	ball85.y = 600
	ball85.scale = .08
	ball86.x = 30
	ball86.y = 640
	ball86.scale = .08
	ball87.x = 70
	ball87.y = 640
	ball87.scale = .08
	ball88.x = 110
	ball88.y = 640
	ball88.scale = .08
	ball89.x = 150
	ball89.y = 640
	ball89.scale = .08
	ball90.x = 30
	ball90.y = 680
	ball90.scale = .08
	ball91.x = 70
	ball91.y = 680
	ball91.scale = .08
	ball92.x = 110
	ball92.y = 680
	ball92.scale = .08
	ball93.x = 150
	ball93.y = 680
	ball93.scale = .08
	ball94.x = 110
	ball94.y = 730
	ball94.scale = .08
	ball95.x = 150
	ball95.y = 730
	ball95.scale = .08
	
	//Bottom half, right
	
	ball96.x = 1150
	ball96.y = 560
	ball96.scale = .08
	ball97.x = 1110
    ball97.y = 560
    ball97.scale = .08
    ball98.x = 1070
    ball98.y = 560
    ball98.scale = .08
	ball99.x = 1030
	ball99.y = 560
	ball99.scale = .08
	ball100.x = 1150
	ball100.y = 600
	ball100.scale = .08
	ball101.x = 1110
	ball101.y = 600
	ball101.scale = .08
	ball102.x = 1070
	ball102.y = 600
	ball102.scale = .08
	ball103.x = 1030
	ball103.y = 600
	ball103.scale = .08
	ball104.x = 1150
	ball104.y = 600
	ball104.scale = .08
	ball105.x = 1110
	ball105.y = 640
	ball105.scale = .08
	ball106.x = 1070
	ball106.y = 640
	ball106.scale = .08
	ball107.x = 1030
	ball107.y = 640
	ball107.scale = .08
	ball108.x = 1150
	ball108.y = 640
	ball108.scale = .08
	ball109.x = 1110
	ball109.y = 680
	ball109.scale = .08
	ball110.x = 1070
	ball110.y = 680
	ball110.scale = .08
	ball111.x = 1030
	ball111.y = 680
	ball111.scale = .08
	ball112.x = 1150
	ball112.y = 680
	ball112.scale = .08
	ball113.x = 1070
	ball113.y = 730
	ball113.scale = .08
	ball114.x = 1030
	ball114.y = 730
	ball114.scale = .08
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = 'black';
		ctx.fillRect(0,0, w, h);	
		
		
		
		if(screen == 0){
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'red';
			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		
		}else if(screen == 1){
		////////////////////
		//	MAIN MENU
			
			start.draw();
			intro.draw();
		   
		//Easy//
		
		}else if(screen == 2){
		////////////////////
		//	GAME SCREEN 1
		
		 //player.x = mx
			//player.y = my
			
			//ghost.x = player.x
			//ghost.y = player.y
		
			//ctx.fillStyle = 'blue'
			//ctx.fillText("Loaded",100,100);
			
			//ghost.x = ghost.x +15
			
			
			
		
			
			if(ghost.collideObject (player)){
				alert ("You Lose")
				screen = 6
			}
			
			if(ghost1.collideObject (player)){
				alert ("You Lose")
				screen = 6
			}
			
			
			
			if(player.collideObject (power1)){
				ghost.x = 600
				ghost.y = 250
				ghost1.x = 600
				ghost1.y = 250
			    power1.x = 8000
				sound.play();
				score += 1000
			}
			
			
			if(player.collideObject (power2)){
				ghost.x = 600
				ghost.y = 250
				ghost1.x = 600
				ghost1.y = 250
				power2.x = 8000
				sound.play();
				score += 1000
			}
			
			if(ghost.x>player.x){
				ghost.x-=aispeed
			};

			if(ghost.x<player.x){
				ghost.x+=aispeed
			};
			
			if(ghost.y>player.y){
				ghost.y-=aispeed  
			};

			if(ghost.y<player.y){
				ghost.y+=aispeed
			};
			
			if(ghost1.x>player.x){
				ghost1.x-=aispeed1
			};

			if(ghost1.x<player.x){
				ghost1.x+=aispeed1
			};
			
			if(ghost1.y>player.y){
				ghost1.y-=aispeed1
			};

			if(ghost1.y<player.y){
				ghost1.y+=aispeed1
			};
			
		

			
			if(player.collideObject (square)){
				player.x = 1110
			}
			
			if(player.collideObject (square1)){
				player.x = 20
			}
			
			if(player.collideObject (wall1)){
				player.y = 730
				}
				
			if(player.collideObject (wall2)){
				player.y = 10
			}	
			
			if(player.collideObject (wall3)){
				player.x = 10
			}
			
			if(player.collideObject (wall4)){
				player.x = 1135
			}
			
			if(player.collideObject (wall5)){
				player.x = 340
			}
			
			if(player.collideObject (wall6)){
				player.x = 810
			}
			
			if(player.collideObject (wall7)){
				player.y = 140
			}
			
			if(player.collideObject (wall8)){
				player.y = 400
			}
			
			if(player.collideObject (wall9)){
				player.y = 490
			}
			
			if(player.collideObject (wall10)){
				player.x = 410
			}
			
			if(player.collideObject (wall13)){
				player.x = 738
			}
			
			/*
			
			if(ghost.collideObject (wall5)){
				ghost.x = 340
			}
			
			if(ghost.collideObject (wall6)){
				ghost.x  = 810
			}
			
			if(ghost.collideObject (wall8)){
				ghost.y = 350
			}
			
			
			
			if(ghost.collideObject (wall9)){
				ghost.y = 490
			}
			
			if(ghost.collideObject (wall10)){
				ghost.x = 410
			}
			
			if(ghost.collideObject (wall13)){
				ghost.x = 738
			}		
			
			*/
			
			if(player.collideObject (ball)){
				ball.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball1)){
				ball1.x = 8000
				mySound.play();
			    score += 100
			}
			
			if(player.collideObject (ball2)){
				ball2.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball3)){
				ball3.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball4)){
				ball4.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball5)){
				ball5.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball6)){
				ball6.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball7)){
				ball7.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball8)){
				ball8.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball9)){
				ball9.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball10)){
				ball10.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball11)){
				ball11.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball12)){
				ball12.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball13)){
				ball13.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball14)){
				ball14.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball15)){
				ball15.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball16)){
				ball16.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball17)){
				ball17.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball18)){
				ball18.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball19)){
				ball19.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball20)){
				ball20.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball21)){
				ball21.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball22)){
				ball22.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball23)){
				ball23.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball24)){
				ball24.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball25)){
				ball25.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball26)){
				ball26.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball26)){
				ball26.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball27)){
				ball27.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball28)){
				ball28.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball29)){
				ball29.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball30)){
				ball30.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball31)){
				ball31.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball32)){
				ball32.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball33)){
				ball33.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball34)){
				ball34.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball35)){
				ball35.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball36)){
				ball36.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball37)){
				ball37.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball38)){
				ball38.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball38)){
				ball38.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball39)){
				ball39.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball40)){
				ball40.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball41)){
				ball41.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball42)){
				ball42.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball43)){
				ball43.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball44)){
				ball44.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball45)){
				ball45.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball46)){
				ball46.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball47)){
				ball47.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball48)){
				ball48.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball49)){
				ball49.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball50)){
				ball50.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball51)){
				ball51.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball52)){
				ball52.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball53)){
				ball53.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball54)){
				ball54.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball55)){
				ball55.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball56)){
				ball56.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball57)){
				ball57.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball58)){
				ball58.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball59)){
				ball59.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball60)){
				ball60.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball61)){
				ball61.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball62)){
				ball62.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball63)){
				ball63.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball64)){
				ball64.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball65)){
				ball65.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball66)){
				ball66.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball67)){
				ball67.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball68)){
				ball68.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball69)){
				ball69.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball70)){
				ball70.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball71)){
				ball71.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball72)){
				ball72.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball73)){
				ball73.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball74)){
				ball74.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball75)){
				ball75.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball76)){
				ball76.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball77)){
				ball77.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball78)){
				ball78.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball79)){
				ball79.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball80)){
				ball80.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball81)){
				ball81.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball82)){
				ball82.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball83)){
				ball83.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball84)){
				ball84.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball85)){
				ball85.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball86)){
				ball86.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball87)){
				ball87.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball88)){
				ball88.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball89)){
				ball89.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball90)){
				ball90.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball91)){
				ball91.x = 8000
				mySound.play();
				score+=100
			}
		
		    if(player.collideObject (ball92)){
				ball92.x = 8000
				mySound.play();
				score += 100
			}
			
			 if(player.collideObject (ball93)){
				ball93.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball94)){
				ball94.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball95)){
				ball95.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball96)){
				ball96.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball97)){
				ball97.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball98)){
				ball98.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball99)){
				ball99.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball100)){
				ball100.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball101)){
				ball101.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball102)){
				ball102.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball103)){
				ball103.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball104)){
				ball104.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball105)){
				ball105.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball106)){
				ball106.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball107)){
				ball107.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball108)){
				ball108.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball109)){
				ball109.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball110)){
				ball110.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball111)){
				ball111.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball112)){
				ball112.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball113)){
				ball113.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball114)){
				ball114.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball115)){
				ball115.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball116)){
				ball116.x = 8000
				mySound.play();
				score += 100
			}
			
			
				
			if(player.collideObject (ball117)){
				ball117.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball118)){
				ball118.x = 8000
				mySound.play();
				score += 100
			}
		
			
			if(player.collideObject (ball119)){
				ball119.x = 8000
				mySound.play();
				score += 100
			}
				
			if(player.collideObject (ball120)){
				ball120.x = 8000
				mySound.play();
				score += 100
			}
				
			if(player.collideObject (ball121)){
				ball121.x = 8000
				mySound.play();
				score += 100
			}
				
			if(player.collideObject (ball122)){
				ball122.x = 8000
				mySound.play();
				score += 100
			}
				
			if(player.collideObject (ball123)){
				ball123.x = 8000
				mySound.play();
				score += 100
			}
				
			if(player.collideObject (ball124)){
				ball124.x = 8000
				mySound.play();
				score += 100
			}
				
		
			if(player.collideObject (ball125)){
				ball125.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball126)){
				ball126.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball127)){
				ball127.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball128)){
				ball128.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball129)){
				ball129.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball130)){
				ball130.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball131)){
				ball131.x = 8000
				mySound.play();
				score += 100
			}
			
			
				
			if(player.collideObject (ball132)){
				ball132.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball133)){
				ball133.x = 8000
				mySound.play();
				score += 100
			}
		
			
			if(player.collideObject (ball134)){
				ball134.x = 8000
				mySound.play();
				score += 100
			}
				
		
		
				
			
			
			
				
			if(ball.x >4000 && ball1.x >4000 && ball2.x >4000 && ball3.x >4000  && ball4.x >4000 && ball5.x >4000 && ball6.x >4000 && ball7.x >4000  && ball8.x >4000 && ball9.x >4000 && ball10.x >4000 && ball11.x >4000  && ball12.x >4000 && ball13.x >4000 && ball14.x >4000 && ball15.x >4000  && ball16.x >4000 && ball17.x >4000 && ball18.x >4000 && ball19.x >4000  && ball20.x >4000 && ball21.x >4000 && ball22.x >4000 && ball23.x >4000  && ball24.x >4000 && ball25.x >4000 && ball26.x >4000 && ball27.x >4000  && ball28.x >4000 && ball29.x >4000 && ball30.x >4000 && ball31.x >4000 && ball32.x >4000 && ball33.x >4000 && ball34.x >4000 && ball35.x >4000 && ball36.x >4000 && ball37.x >4000 && ball38.x >4000 && ball39.x >4000 && ball40.x >4000 && ball41.x >4000 && ball42.x >4000 && ball43.x >4000 && ball44.x >4000 && ball45.x >4000 && ball46.x >4000 && ball47.x >4000 && ball48.x >4000 && ball49.x >4000 && ball50.x >4000 && ball51.x >4000 && ball52.x >4000 && ball53.x >4000 && ball54.x >4000 && ball55.x >4000 && ball56.x >4000 && ball57.x >4000 && ball58.x >4000 && ball59.x >4000 && ball60.x >4000 && ball61.x >4000 && ball62.x >4000 && ball63.x >4000 && ball64.x >4000 && ball65.x >4000 && ball66.x >4000 && ball67.x >4000 && ball68.x >4000 && ball69.x >4000 && ball70.x >4000 && ball71.x >4000 && ball72.x >4000 && ball73.x >4000 && ball74.x >4000 && ball75.x >4000 && ball76.x >4000 && ball77.x >4000 && ball78.x >4000 && ball79.x >4000 && ball80.x >4000 && ball81.x >4000 && ball82.x >4000 && ball83.x >4000 && ball84.x >4000 && ball85.x >4000 && ball86.x >4000 && ball87.x >4000 && ball88.x >4000 && ball89.x >4000 && ball90.x >4000 && ball91.x >4000 && ball92.x >4000 && ball93.x >4000 && ball94.x >4000 && ball95.x >4000 && ball96.x >4000 && ball97.x >4000 && ball98.x >4000 && ball99.x >4000 && ball100.x >4000 && ball101.x >4000 && ball102.x >4000 && ball103.x >4000 && ball104.x >4000 && ball105.x >4000 && ball106.x >4000 && ball107.x >4000 && ball108.x >4000 && ball109.x >4000 && ball110.x >4000 && ball111.x >4000 && ball112.x >4000 && ball113.x >4000 && ball114.x >4000 && ball115.x >4000 && ball116.x >4000 && ball117.x >4000 && ball118.x >4000 && ball119.x >4000 && ball120.x >4000 && ball121.x >4000 && ball122.x >4000 && ball123.x >4000 && ball124.x >4000 && ball125.x >4000 && ball126.x >4000 && ball127.x >4000 && ball128.x >4000 && ball129.x >4000 && ball130.x >4000 && ball131.x >4000 && ball132.x >4000 && ball133.x >4000 && ball134.x >4000){ 
				screen = 5
			}
			
			
			wall1.draw();
			wall2.draw();
			wall3.draw();
			wall4.draw();
			wall5.draw();
			wall6.draw();
			wall7.draw();
			wall8.draw();
			wall9.draw();
			wall10.draw();
			wall11.draw();
			wall12.draw();
			wall13.draw();
			
			square.draw();
			square1.draw();
			
			
			
			
			ball.draw();
			ball1.draw();
			ball2.draw();
			ball3.draw();
			ball4.draw();
			ball5.draw();
			ball6.draw();
			ball7.draw();
			ball8.draw();
			ball9.draw();
			ball10.draw();
			
			ball11.draw();
			ball12.draw();
			ball13.draw();
			ball14.draw();
			ball15.draw();
			ball16.draw();
			ball17.draw();
			ball18.draw();
			ball19.draw();
			ball20.draw();
			ball21.draw();
			ball22.draw();
			ball23.draw();
			ball24.draw();
			ball25.draw();
			ball26.draw();
			ball27.draw();
			ball28.draw();
			ball29.draw();
			ball30.draw();
			ball31.draw();
			ball32.draw();
			ball33.draw();
			ball34.draw();
			ball35.draw();
			ball36.draw();
			ball37.draw();
			ball38.draw();
			ball39.draw();
			ball40.draw();
			ball41.draw();
			ball42.draw();
			ball43.draw();
			ball44.draw();
			ball45.draw();
			ball46.draw();
			ball47.draw();
			ball48.draw();
			ball49.draw();
			ball50.draw();
			
			ball51.draw();
			ball52.draw();
			ball53.draw();
			ball54.draw();
			ball55.draw();
			ball56.draw();
			ball57.draw();
			ball58.draw();
			ball59.draw();
			ball60.draw();
			ball61.draw();
			ball62.draw();
			ball63.draw();
			ball64.draw();
			ball65.draw();
			ball66.draw();
			ball67.draw();
			ball68.draw();
			ball69.draw();
			ball70.draw();
			ball71.draw();
			ball72.draw();
			ball73.draw();
			ball74.draw();
			ball75.draw();
			ball76.draw();
			ball77.draw();
			ball78.draw();
			ball79.draw();
			
			ball80.draw();
			ball81.draw();
			ball82.draw();
			ball83.draw();
			ball84.draw();
			ball85.draw();
			ball86.draw();
			ball87.draw();
			ball88.draw();
			ball89.draw();
			ball90.draw();
			
			ball91.draw();
			ball92.draw();
			ball93.draw();
			ball94.draw();
			ball95.draw();
			ball96.draw();
			
			ball97.draw();
			
			ball98.draw();
			
			ball99.draw();
			
			ball100.draw();
			ball101.draw();
			ball102.draw();
			ball103.draw();
			ball104.draw();
			ball105.draw();
			ball106.draw();
			ball107.draw();
			ball108.draw();
			ball109.draw();
			ball110.draw();
			ball111.draw();
			ball112.draw();
			ball113.draw();
			ball114.draw();
			ball115.draw();
			ball116.draw();
			ball117.draw();
			ball118.draw();
			ball119.draw();
			ball120.draw();
			ball121.draw();
			ball122.draw();
			ball123.draw();
			ball124.draw();
			ball125.draw();
			ball126.draw();
			ball127.draw();
			ball128.draw();
			ball129.draw();
			ball130.draw();
			ball131.draw();
			ball132.draw();
			ball133.draw();
			ball134.draw();
			//ball135.draw();
			
		    player.draw();
			power1.draw();
			power2.draw();
			ghost1.draw();
			ghost.draw();
			
			ctx.font = "80px Times New Roman"
			
			ctx.fillStyle = 'white';
			
			ctx.fillText(score,520,100);
			
			
		}else if (screen == 4){
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w, h);	
		ctx.font = "28px Times New Roman"
		ctx.fillStyle = 'black';
		ctx.fillText("Instructions:",10,50);
		ctx.fillText("Move your character with the arrow keys",10,100)
		ctx.fillText("Collect all the dots on the screen in order to win",10,150)
		ctx.fillText("Hit certain blocks in order to teleport to different places (hint, hint)",10,200)
		ctx.fillText("Press R to go back to the main menu anytime.",10,250)
		ctx.fillText("Press M for a surprise",10,300)
		
		back.draw();
		
		}else if (screen == 5){
		    //next.draw();
		     
			
			ctx.fillStyle = 'white'
			ctx.fillRect(0,0, w, h);
			ctx.font = "50px Times New Roman"
			ctx.fillStyle = 'black'
			ctx.fillText("You Have Won!!", 450, 50)
			ctx.fillStyle = 'black';
			ctx.font = "28px Times New Roman"
			ctx.fillText("Your Score Was:",500,300);
			ctx.fillText(score,500,400)
			
			back.draw();
			
		}else if (screen == 6){
			ctx.fillStyle = 'white'
			ctx.fillRect(0,0, w, h);
			ctx.font = "50px Times New Roman"
			ctx.fillStyle = 'black'
			ctx.fillText("You Have Lost", 450, 50)
			ctx.fillStyle = 'black';
			ctx.font = "28px Times New Roman"
			ctx.fillText("Your Score Was:",500,300);
			ctx.fillText(score,500,400)
			
			back.draw();
			
		}else if (screen == 7){
	    easy.draw();
		medium.draw();
		hard.draw();
		insane.draw();
		
		
		
		}else if (screen == 10){
		con.draw();
		can.draw();
			
			
			
		}else if (screen == 9){
			 //player.x = mx
			//player.y = my
			
			//ghost.x = player.x
			//ghost.y = player.y
		
			//ctx.fillStyle = 'blue'
			//ctx.fillText("Loaded",100,100);
			
			//ghost.x = ghost.x +15
			
			
			
		
			
			if(ghost.collideObject (player)){
				alert ("You Lose")
				screen = 6
			}
			
			if(ghost1.collideObject (player)){
				alert ("You Lose")
				screen = 6
			}
			
			
			
			if(player.collideObject (power1)){
				ghost.x = 600
				ghost.y = 250
				ghost1.x = 600
				ghost1.y = 250
			    power1.x = 8000
				sound.play();
				score += 1000
			}
			
			
			if(player.collideObject (power2)){
				ghost.x = 600
				ghost.y = 250
				ghost1.x = 600
				ghost1.y = 250
				power2.x = 8000
				sound.play();
				score += 1000
			}
			
			if(ghost.x>player.x){
				ghost.x-=aispeed
			};

			if(ghost.x<player.x){
				ghost.x+=aispeed
			};
			
			if(ghost.y>player.y){
				ghost.y-=aispeed
			};

			if(ghost.y<player.y){
				ghost.y+=aispeed
			};
			
			if(ghost1.x>player.x){
				ghost1.x-=aispeed1
			};

			if(ghost1.x<player.x){
				ghost1.x+=aispeed1
			};
			
			if(ghost1.y>player.y){
				ghost1.y-=aispeed1
			};

			if(ghost1.y<player.y){
				ghost1.y+=aispeed1
			};
			
		

			
			if(player.collideObject (square)){
				player.x = 1110
			}
			
			if(player.collideObject (square1)){
				player.x = 20
			}
			
			if(player.collideObject (wall1)){
				player.y = 730
				}
				
			if(player.collideObject (wall2)){
				player.y = 10
			}	
			
			if(player.collideObject (wall3)){
				player.x = 10
			}
			
			if(player.collideObject (wall4)){
				player.x = 1135
			}
			
			if(player.collideObject (wall5)){
				player.x = 340
			}
			
			if(player.collideObject (wall6)){
				player.x = 810
			}
			
			if(player.collideObject (wall7)){
				player.y = 140
			}
			
			if(player.collideObject (wall8)){
				player.y = 400
			}
			
			if(player.collideObject (wall9)){
				player.y = 490
			}
			
			if(player.collideObject (wall10)){
				player.x = 410
			}
			
			if(player.collideObject (wall13)){
				player.x = 738
			}
			
			/*
			
			if(ghost.collideObject (wall5)){
				ghost.x = 340
			}
			
			if(ghost.collideObject (wall6)){
				ghost.x  = 810
			}
			
			if(ghost.collideObject (wall8)){
				ghost.y = 350
			}
			
			
			
			if(ghost.collideObject (wall9)){
				ghost.y = 490
			}
			
			if(ghost.collideObject (wall10)){
				ghost.x = 410
			}
			
			if(ghost.collideObject (wall13)){
				ghost.x = 738
			}		
			
			*/
			
			if(player.collideObject (ball)){
				ball.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball1)){
				ball1.x = 8000
				mySound.play();
			    score += 100
			}
			
			if(player.collideObject (ball2)){
				ball2.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball3)){
				ball3.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball4)){
				ball4.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball5)){
				ball5.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball6)){
				ball6.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball7)){
				ball7.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball8)){
				ball8.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball9)){
				ball9.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball10)){
				ball10.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball11)){
				ball11.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball12)){
				ball12.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball13)){
				ball13.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball14)){
				ball14.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball15)){
				ball15.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball16)){
				ball16.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball17)){
				ball17.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball18)){
				ball18.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball19)){
				ball19.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball20)){
				ball20.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball21)){
				ball21.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball22)){
				ball22.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball23)){
				ball23.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball24)){
				ball24.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball25)){
				ball25.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball26)){
				ball26.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball26)){
				ball26.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball27)){
				ball27.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball28)){
				ball28.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball29)){
				ball29.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball30)){
				ball30.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball31)){
				ball31.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball32)){
				ball32.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball33)){
				ball33.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball34)){
				ball34.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball35)){
				ball35.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball36)){
				ball36.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball37)){
				ball37.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball38)){
				ball38.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball38)){
				ball38.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball39)){
				ball39.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball40)){
				ball40.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball41)){
				ball41.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball42)){
				ball42.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball43)){
				ball43.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball44)){
				ball44.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball45)){
				ball45.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball46)){
				ball46.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball47)){
				ball47.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball48)){
				ball48.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball49)){
				ball49.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball50)){
				ball50.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball51)){
				ball51.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball52)){
				ball52.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball53)){
				ball53.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball54)){
				ball54.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball55)){
				ball55.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball56)){
				ball56.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball57)){
				ball57.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball58)){
				ball58.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball59)){
				ball59.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball60)){
				ball60.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball61)){
				ball61.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball62)){
				ball62.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball63)){
				ball63.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball64)){
				ball64.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball65)){
				ball65.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball66)){
				ball66.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball67)){
				ball67.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball68)){
				ball68.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball69)){
				ball69.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball70)){
				ball70.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball71)){
				ball71.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball72)){
				ball72.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball73)){
				ball73.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball74)){
				ball74.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball75)){
				ball75.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball76)){
				ball76.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball77)){
				ball77.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball78)){
				ball78.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball79)){
				ball79.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball80)){
				ball80.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball81)){
				ball81.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball82)){
				ball82.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball83)){
				ball83.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball84)){
				ball84.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball85)){
				ball85.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball86)){
				ball86.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball87)){
				ball87.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball88)){
				ball88.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball89)){
				ball89.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball90)){
				ball90.x = 8000
				mySound.play();
								score += 100
			}
			
			if(player.collideObject (ball91)){
				ball91.x = 8000
				mySound.play();
				score+=100
			}
		
		    if(player.collideObject (ball92)){
				ball92.x = 8000
				mySound.play();
				score += 100
			}
			
			 if(player.collideObject (ball93)){
				ball93.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball94)){
				ball94.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball95)){
				ball95.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball96)){
				ball96.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball97)){
				ball97.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball98)){
				ball98.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball99)){
				ball99.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball100)){
				ball100.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball101)){
				ball101.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball102)){
				ball102.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball103)){
				ball103.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball104)){
				ball104.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball105)){
				ball105.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball106)){
				ball106.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball107)){
				ball107.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball108)){
				ball108.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball109)){
				ball109.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball110)){
				ball110.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball111)){
				ball111.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball112)){
				ball112.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball113)){
				ball113.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball114)){
				ball114.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball115)){
				ball115.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball116)){
				ball116.x = 8000
				mySound.play();
				score += 100
			}
			
			
				
			if(player.collideObject (ball117)){
				ball117.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball118)){
				ball118.x = 8000
				mySound.play();
				score += 100
			}
		
			
			if(player.collideObject (ball119)){
				ball119.x = 8000
				mySound.play();
				score += 100
			}
				
			if(player.collideObject (ball120)){
				ball120.x = 8000
				mySound.play();
				score += 100
			}
				
			if(player.collideObject (ball121)){
				ball121.x = 8000
				mySound.play();
				score += 100
			}
				
			if(player.collideObject (ball122)){
				ball122.x = 8000
				mySound.play();
				score += 100
			}
				
			if(player.collideObject (ball123)){
				ball123.x = 8000
				mySound.play();
				score += 100
			}
				
			if(player.collideObject (ball124)){
				ball124.x = 8000
				mySound.play();
				score += 100
			}
				
		
			if(player.collideObject (ball125)){
				ball125.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball126)){
				ball126.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball127)){
				ball127.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball128)){
				ball128.x = 8000
				mySound.play();
				score += 100
			}
			
			if(player.collideObject (ball129)){
				ball129.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball130)){
				ball130.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball131)){
				ball131.x = 8000
				mySound.play();
				score += 100
			}
			
			
				
			if(player.collideObject (ball132)){
				ball132.x = 8000
				mySound.play();
				score += 100
			}
			
				
			if(player.collideObject (ball133)){
				ball133.x = 8000
				mySound.play();
				score += 100
			}
		
			
			if(player.collideObject (ball134)){
				ball134.x = 8000
				mySound.play();
				score += 100
			}
				
		
		
				
			
			
			
				
			if(ball.x >4000 && ball1.x >4000 && ball2.x >4000 && ball3.x >4000  && ball4.x >4000 && ball5.x >4000 && ball6.x >4000 && ball7.x >4000  && ball8.x >4000 && ball9.x >4000 && ball10.x >4000 && ball11.x >4000  && ball12.x >4000 && ball13.x >4000 && ball14.x >4000 && ball15.x >4000  && ball16.x >4000 && ball17.x >4000 && ball18.x >4000 && ball19.x >4000  && ball20.x >4000 && ball21.x >4000 && ball22.x >4000 && ball23.x >4000  && ball24.x >4000 && ball25.x >4000 && ball26.x >4000 && ball27.x >4000  && ball28.x >4000 && ball29.x >4000 && ball30.x >4000 && ball31.x >4000 && ball32.x >4000 && ball33.x >4000 && ball34.x >4000 && ball35.x >4000 && ball36.x >4000 && ball37.x >4000 && ball38.x >4000 && ball39.x >4000 && ball40.x >4000 && ball41.x >4000 && ball42.x >4000 && ball43.x >4000 && ball44.x >4000 && ball45.x >4000 && ball46.x >4000 && ball47.x >4000 && ball48.x >4000 && ball49.x >4000 && ball50.x >4000 && ball51.x >4000 && ball52.x >4000 && ball53.x >4000 && ball54.x >4000 && ball55.x >4000 && ball56.x >4000 && ball57.x >4000 && ball58.x >4000 && ball59.x >4000 && ball60.x >4000 && ball61.x >4000 && ball62.x >4000 && ball63.x >4000 && ball64.x >4000 && ball65.x >4000 && ball66.x >4000 && ball67.x >4000 && ball68.x >4000 && ball69.x >4000 && ball70.x >4000 && ball71.x >4000 && ball72.x >4000 && ball73.x >4000 && ball74.x >4000 && ball75.x >4000 && ball76.x >4000 && ball77.x >4000 && ball78.x >4000 && ball79.x >4000 && ball80.x >4000 && ball81.x >4000 && ball82.x >4000 && ball83.x >4000 && ball84.x >4000 && ball85.x >4000 && ball86.x >4000 && ball87.x >4000 && ball88.x >4000 && ball89.x >4000 && ball90.x >4000 && ball91.x >4000 && ball92.x >4000 && ball93.x >4000 && ball94.x >4000 && ball95.x >4000 && ball96.x >4000 && ball97.x >4000 && ball98.x >4000 && ball99.x >4000 && ball100.x >4000 && ball101.x >4000 && ball102.x >4000 && ball103.x >4000 && ball104.x >4000 && ball105.x >4000 && ball106.x >4000 && ball107.x >4000 && ball108.x >4000 && ball109.x >4000 && ball110.x >4000 && ball111.x >4000 && ball112.x >4000 && ball113.x >4000 && ball114.x >4000 && ball115.x >4000 && ball116.x >4000 && ball117.x >4000 && ball118.x >4000 && ball119.x >4000 && ball120.x >4000 && ball121.x >4000 && ball122.x >4000 && ball123.x >4000 && ball124.x >4000 && ball125.x >4000 && ball126.x >4000 && ball127.x >4000 && ball128.x >4000 && ball129.x >4000 && ball130.x >4000 && ball131.x >4000 && ball132.x >4000 && ball133.x >4000 && ball134.x >4000){ 
				screen = 11
			}
			
			
			wall1.draw();
			wall2.draw();
			wall3.draw();
			wall4.draw();
			wall5.draw();
			wall6.draw();
			wall7.draw();
			wall8.draw();
			wall9.draw();
			wall10.draw();
			wall11.draw();
			wall12.draw();
			wall13.draw();
			
			square.draw();
			square1.draw();
			
			
			
			
			ball.draw();
			ball1.draw();
			ball2.draw();
			ball3.draw();
			ball4.draw();
			ball5.draw();
			ball6.draw();
			ball7.draw();
			ball8.draw();
			ball9.draw();
			ball10.draw();
			
			ball11.draw();
			ball12.draw();
			ball13.draw();
			ball14.draw();
			ball15.draw();
			ball16.draw();
			ball17.draw();
			ball18.draw();
			ball19.draw();
			ball20.draw();
			ball21.draw();
			ball22.draw();
			ball23.draw();
			ball24.draw();
			ball25.draw();
			ball26.draw();
			ball27.draw();
			ball28.draw();
			ball29.draw();
			ball30.draw();
			ball31.draw();
			ball32.draw();
			ball33.draw();
			ball34.draw();
			ball35.draw();
			ball36.draw();
			ball37.draw();
			ball38.draw();
			ball39.draw();
			ball40.draw();
			ball41.draw();
			ball42.draw();
			ball43.draw();
			ball44.draw();
			ball45.draw();
			ball46.draw();
			ball47.draw();
			ball48.draw();
			ball49.draw();
			ball50.draw();
			
			ball51.draw();
			ball52.draw();
			ball53.draw();
			ball54.draw();
			ball55.draw();
			ball56.draw();
			ball57.draw();
			ball58.draw();
			ball59.draw();
			ball60.draw();
			ball61.draw();
			ball62.draw();
			ball63.draw();
			ball64.draw();
			ball65.draw();
			ball66.draw();
			ball67.draw();
			ball68.draw();
			ball69.draw();
			ball70.draw();
			ball71.draw();
			ball72.draw();
			ball73.draw();
			ball74.draw();
			ball75.draw();
			ball76.draw();
			ball77.draw();
			ball78.draw();
			ball79.draw();
			
			ball80.draw();
			ball81.draw();
			ball82.draw();
			ball83.draw();
			ball84.draw();
			ball85.draw();
			ball86.draw();
			ball87.draw();
			ball88.draw();
			ball89.draw();
			ball90.draw();
			
			ball91.draw();
			ball92.draw();
			ball93.draw();
			ball94.draw();
			ball95.draw();
			ball96.draw();
			
			ball97.draw();
			
			ball98.draw();
			
			ball99.draw();
			
			ball100.draw();
			ball101.draw();
			ball102.draw();
			ball103.draw();
			ball104.draw();
			ball105.draw();
			ball106.draw();
			ball107.draw();
			ball108.draw();
			ball109.draw();
			ball110.draw();
			ball111.draw();
			ball112.draw();
			ball113.draw();
			ball114.draw();
			ball115.draw();
			ball116.draw();
			ball117.draw();
			ball118.draw();
			ball119.draw();
			ball120.draw();
			ball121.draw();
			ball122.draw();
			ball123.draw();
			ball124.draw();
			ball125.draw();
			ball126.draw();
			ball127.draw();
			ball128.draw();
			ball129.draw();
			ball130.draw();
			ball131.draw();
			ball132.draw();
			ball133.draw();
			ball134.draw();
			//ball135.draw();
			
		    player.draw();
			power1.draw();
			power2.draw();
			ghost1.draw();
			ghost.draw();
			
			ctx.font = "80px Times New Roman"
			
			ctx.fillStyle = 'white';
			
			ctx.fillText(score,520,100);
			
			
		}else if (screen == 11){
		next.draw();	
			
		}else if (screen == 12){
		player.y = my
		player.x = 10
		player.scale = .15
		
		
		
		if(player.y < 0) player.y = 0;
		
		if(player.y > 700) player.y = 700;
			 
		
		extra.x = extra.x -60
		extra.y = extra.y +2
		extra1.x = extra1.x -60
		extra1.y = extra1.y +2
		extra2.x = extra2.x -70
		extra2.y = extra2.y +2
		extra3.x = extra3.x -80
		extra3.y = extra3.y +2
		
		if(extra.x < 0){
		extra.x += 1100
		extra.y += 2
		score+=1 *1
		}
		
		
		if(extra1.x < 0){
		extra1.x += 1100
		extra1.y += 2
		score+=1 *1
		}
		
		if(extra.y > 725){
		extra.y = 10
		}
	
		if(extra1.y > 725){
		extra1.y = 10
		}
		
		if(extra2.x < 0){
		extra2.x += 1600
		extra2.y += 2
		score+=1 *1
		}
		
		
		if(extra3.x < 0){
		extra3.x += 1600
		extra3.y += 2
		score+=1 *1
		}
		
		if(extra2.y > 725){
		extra2.y = 10
		}
	
		if(extra3.y > 725){
		extra3.y = 10
		}
		
		if(player.collideObject (extra)){
		screen = 6
		alert ("You Lost")
		wow.stop();
		}
		
		if(player.collideObject (extra1)){
		screen = 6
		alert ("You Lost")
		wow.stop();
		}
		
			if(player.collideObject (extra2)){
		screen = 6
		alert ("You Lost")
		wow.stop();
		}
		
		if(player.collideObject (extra3)){
		screen = 6
		alert ("You Lost")
		wow.stop();
		}
		
			ctx.font = "80px Times New Roman"
			
			ctx.fillStyle = 'white';
			
			ctx.fillText(score,520,100);
			
			
		
		extra.draw();
		extra2.draw();
		extra3.draw();
		extra1.draw();
		player.draw();
		}
			
		}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	

	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		if(screen == 0){
		
		
		}else if (screen == 1){
		if(start.isMouseOver()) start.job()
		if(intro.isMouseOver()) intro.job()
			
		}else if (screen == 4){
		if(back.isMouseOver()) back.job()
			
		
		}else if (screen == 5){
		if(back.isMouseOver()) back.job()	
		
			
		}else if (screen == 6){
	    if(back.isMouseOver()) back.job()	
		
	
		}else if (screen == 7){
		if(easy.isMouseOver()) easy.job()	
		if(medium.isMouseOver()) medium.job()
		if(hard.isMouseOver()) hard.job()
		if(insane.isMouseOver()) insane.job()	
		
		
		}else if (screen == 10){
		if(con.isMouseOver()) con.job()
		if(can.isMouseOver()) can.job()	
		}else if (screen == 11){
		if(next.isMouseOver()) next.job()	
		}		
	
	
		
		 
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
	
	    if(key==37){//left
		player.x -= player.speedx;
		player.rotation = 180

	
		}else if (key == 38){//up
		player.y -= player.speedx;
		player.rotation = -90
		
		}else if (key == 39){//right
	    player.x += player.speedx;
	   player.rotation = 0
		
		}else if (key == 40){
		player.y += player.speedx
	    player.rotation = 90
		}else if (key == 82){
		screen = 1	
		
		//Mini Game
		
		}else if (key == 77){
		screen = 12
		score = 0
		extra1.scale = .3
		extra.scale = .3
	
		extra.x = 1200
		extra1.x = 1400
	
		extra.y = 10
		extra1.y = 500
		
		extra2.scale = .3
		extra3.scale = .3
	
		extra2.x = 1200
		extra3.x = 1400
	
		extra2.y = 150
		extra3.y = 350
		
		wow.play();
	
		}
		
		
	}, false); //End the event listener

       

	

})

