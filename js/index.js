window.onload = function(){ 

// 三板头条整个大的tab切换
	var tabsSwiper1 = new Swiper('.swiper-container1',{
		onlyExternal : true,
		speed:500
	})
	
	$(".tabs1 a").on('touchstart mousedown',function(e){
		e.preventDefault()
		$(".tabs1 .active").removeClass('active')
		$(this).addClass('active')
		tabsSwiper1.swipeTo( $(this).index() )
	})
	$(".tabs1 a").click(function(e){
		e.preventDefault()
	})



// 三板资讯中整个大的tab切换
	var tabsSwiper3 = new Swiper('.swiper-container3',{
		onlyExternal : true,
		speed:500
	})
	$(".tabs3 a").on('touchstart mousedown',function(e){
		e.preventDefault()
		$(".tabs3 .active").removeClass('active')
		$(this).addClass('active')
		tabsSwiper3.swipeTo( $(this).index() )
	})
	$(".tabs3 a").click(function(e){
		e.preventDefault()
	})
   

// 三板资讯中行业解析里的垂直tab切换
	var tabsSwiper4 = new Swiper('.swiper-container4',{
		onlyExternal : true,
		speed:500
	})
	$(".tabs4 a").on('touchstart mousedown',function(e){
		e.preventDefault()
		$(".tabs4 .active").removeClass('active')
		$(this).addClass('active')
		tabsSwiper4.swipeTo( $(this).index() )
	})
	$(".tabs4 a").click(function(e){
		e.preventDefault()
	})
	

// 原创研究整个大的tab轮播
	var tabsSwiper5 = new Swiper('.swiper-container5',{
		onlyExternal : true,
		speed:500
	})
	$(".tabs5 a").on('touchstart mousedown',function(e){
		e.preventDefault()
		$(".tabs5 .active").removeClass('active')
		$(this).addClass('active')
		tabsSwiper5.swipeTo( $(this).index() )
	})
	$(".tabs5 a").click(function(e){
		e.preventDefault()
	})
    


// 原创研究中推荐内容的垂直轮播
    var mySwiper = new Swiper('.swiper-container6',{
	    pagination: '.pagination6',
	    paginationClickable: true,
	    mode: 'vertical',
	    autoplay:4000,
	    loop:true,
	    speed:2000
	  })


//专题栏目的轮播

	    var segmentWidth = 0; 
	    $("#index5-con #index5-ul li").each(function(){ 
	      segmentWidth+= $(this).outerWidth(true); 
	    }); 
	  
	    $("#index5-con #index5-ul li").clone().appendTo($("#index5-con #index5-ul")); 
	  
	    run(16000); 
	  
	    function run(interval){ 
	      $("#index5-con #index5-ul").animate({"left":-segmentWidth}, interval,"linear",function(){ 
	        $("#index5-con #index5-ul").css("left",0); 
	        run(16000); 
	      }); 
	    } 
	  
	    $("#index5-con").mouseenter(function(){ 
	    	$("#index5-con #index5-ul").stop(); 
	    }).mouseleave(function(){ 
	      var passedCourse = -parseInt($("#index5-con #index5-ul").css("left")); 
	      var time = 16000 * (1 - passedCourse/segmentWidth); 
	      run(time); 
	    }); 



//合作券商的轮播  
		
		// var segmentWidth1 = 0; 
	 //    $("#index9-con #index9-ul li").each(function(){ 
	 //      segmentWidth1+= $(this).outerWidth(true); 
	 //    }); 
	  
	 //    $("#index9-con #index9-ul li").clone().appendTo($("#index9-con #index9-ul")); 
	  
	 //    run1(16000); 
	  
	 //    function run1(interval){ 
	 //      $("#index9-con #index9-ul").animate({"left":-segmentWidth1}, interval,"linear",function(){ 
	 //        $("#index9-con #index9-ul").css("left",0); 
	 //        run1(16000); 
	 //      }); 
	 //    } 
	  
	 //    $("#index9-con").mouseenter(function(){ 
	 //    	$("#index9-con #index9-ul").stop(); 
	 //    }).mouseleave(function(){ 
	 //      var passedCourse1 = -parseInt($("#index9-con #index9-ul").css("left")); 
	 //      var time1 = 16000 * (1 - passedCourse1/segmentWidth1); 
	 //      run1(time1); 
	 //    }); 

}; 



//股权项目的滚动

	var autoLb = false;          //autoLb=true为开启自动轮播
	var autoLbtime = 1;         //autoLbtime为轮播间隔时间（单位秒）
	var touch = true;           //touch=true为开启触摸滑动
	var index3SlideBt = true;         //index3SlideBt=true为开启滚动按钮
	var index3SlideNub;               //轮播图片数量

//窗口大小改变时改变轮播图宽高
	$(window).resize(function(){
	   $(".index3Slide").height($(".index3Slide").width()*0.5);
	});


	$(function(){
	    $(".index3Slide").height($(".index3Slide").width()*0.5);
	    index3SlideNub = $(".index3Slide .img").size();             //获取轮播图片数量
	    for(i=0;i<index3SlideNub;i++){
	        $(".index3Slide .img:eq("+i+")").attr("data-index3Slide-imgId",i);
	    }


	    //根据轮播图片数量设定图片位置对应的class
	    if(index3SlideNub==1){
	        for(i=0;i<index3SlideNub;i++){
	            $(".index3Slide .img:eq("+i+")").addClass("img3");
	        }
	    }
	    if(index3SlideNub==2){
	        for(i=0;i<index3SlideNub;i++){
	            $(".index3Slide .img:eq("+i+")").addClass("img"+(i+3));
	        }
	    }
	    if(index3SlideNub==3){
	        for(i=0;i<index3SlideNub;i++){
	            $(".index3Slide .img:eq("+i+")").addClass("img"+(i+2));
	        }
	    }
	    if(index3SlideNub>3&&index3SlideNub<6){
	        for(i=0;i<index3SlideNub;i++){
	            $(".index3Slide .img:eq("+i+")").addClass("img"+(i+1));
	        }
	    }
	    if(index3SlideNub>=6){
	        for(i=0;i<index3SlideNub;i++){
	            if(i<5){
	               $(".index3Slide .img:eq("+i+")").addClass("img"+(i+1)); 
	            }else{
	                $(".index3Slide .img:eq("+i+")").addClass("img5"); 
	            }
	        }
	    }


	    //根据轮播图片数量设定轮播图按钮数量
	    if(index3SlideBt){
	        for(i=1;i<=index3SlideNub;i++){
	            $(".index3Slide-bt").append("<span data-index3Slide-bt='"+i+"' onclick='tz("+i+")'></span>");
	        }
	        $(".index3Slide-bt").width(index3SlideNub*34);
	        $(".index3Slide-bt").css("margin-left","-"+index3SlideNub*17+"px");
	    }


	    //自动轮播
	    if(autoLb){
	        setInterval(function(){
		        right();
		    }, autoLbtime*1000);
	    }


	    if(touch){
	        k_touch('index3Slide');
	    }
	    index3SlideLi();
	    imgClickFy();
	})


//右滑动
function right(){
    var fy = new Array();
    for(i=0;i<index3SlideNub;i++){
        fy[i]=$(".index3Slide .img[data-index3Slide-imgId="+i+"]").attr("class");
    }
    for(i=0;i<index3SlideNub;i++){
        if(i==0){
            $(".index3Slide .img[data-index3Slide-imgId="+i+"]").attr("class",fy[index3SlideNub-1]);
        }else{
           $(".index3Slide .img[data-index3Slide-imgId="+i+"]").attr("class",fy[i-1]); 
        }
    }
    imgClickFy();
    index3SlideLi();
}


//左滑动
function left(){
    var fy = new Array();
    for(i=0;i<index3SlideNub;i++){
        fy[i]=$(".index3Slide .img[data-index3Slide-imgId="+i+"]").attr("class");
    }
    for(i=0;i<index3SlideNub;i++){
        if(i==(index3SlideNub-1)){
            $(".index3Slide .img[data-index3Slide-imgId="+i+"]").attr("class",fy[0]);
        }else{
           $(".index3Slide .img[data-index3Slide-imgId="+i+"]").attr("class",fy[i+1]); 
        }
    }
    imgClickFy();
    index3SlideLi();
}


//轮播图片左右图片点击翻页
function imgClickFy(){
    $(".index3Slide .img").removeAttr("onclick");
    $(".index3Slide .img2").attr("onclick","left()");
    $(".index3Slide .img4").attr("onclick","right()");
}


//修改当前最中间图片对应按钮选中状态
function index3SlideLi(){
    var index3SlideList = parseInt($(".index3Slide .img3").attr("data-index3Slide-imgId")) + 1;
    $(".index3Slide-bt span").removeClass("on");
    $(".index3Slide-bt span[data-index3Slide-bt="+index3SlideList+"]").addClass("on");
}


//轮播按钮点击翻页
function tz(id){
    var tzcs = id - (parseInt($(".index3Slide .img3").attr("data-index3Slide-imgId")) + 1);
    if(tzcs>0){
        for(i=0;i<tzcs;i++){
            setTimeout(function(){
              right();  
            },1);
        }
    }
    if(tzcs<0){
        tzcs=(-tzcs);
        for(i=0;i<tzcs;i++){
            setTimeout(function(){
              left();  
            },1);
        }
    }
    index3SlideLi();
}


//触摸滑动模块
function k_touch(id) {
    var _start = 0, _end = 0, _content = document.getElementById(id);
    _content.addEventListener("touchstart", touchStart, false);
    _content.addEventListener("touchmove", touchMove, false);
    _content.addEventListener("touchend", touchEnd, false);
    function touchStart(event) {
        var touch = event.targetTouches[0];
        _start = touch.pageX;
    }
    function touchMove(event) {
        var touch = event.targetTouches[0];
        _end = (_start - touch.pageX);
    }

    function touchEnd(event) {
        if (_end < -100) {
            left();
            _end=0;
        }else if(_end > 100){
            right();
            _end=0;
        }
    }
}
