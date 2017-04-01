// 用户注册
$(".start").click(function(){
	$(".files_mask").show();
});

// 填写注册信息
var $ipt = $(".files_mask input[type=text]:hidden");
var $btn = $(".files_mask input[type=button]:hidden");

$btn.click(function(){
	if($ipt.eq(0).val() == ""  && $ipt.eq(1).val() == ""){
		alert("请填写个人信息");
		return false;
	}
	if($ipt.eq(0).val() == ""){
		alert("请填写用户姓名");
		return false;
	}
	if($ipt.eq(1).val() == ""){
		alert("请填写联系电话");
		return false;
	}
	$(".play:hidden").show().siblings().hide();
	// timeCountFn();	
})

addclickFn();

function addclickFn(){
	// 数钱榜
	$(".ranking:visible").click(function(){
		$(".leaderboard").show();
	});

	// 活动规则
	$(".rule:visible").click(function(){
		$(".activity_rule").show();
	});

	// 活动奖品
	$(".prize:visible").click(function(){
		$(".reward").show();
	});

	// 奖券使用说明
	$(".instruction:visible").click(function(){
		$(".use_instruction").show();
	});


	// 关闭弹框
	$(".close").click(function(){
		$(this).parent().hide();
	});


}
// 游戏title

var imgSrcArr = ["img/p2_txt1.png","img/p2_txt2.png","img/p2_txt3.png"];
var messageImg = document.querySelector(".title img");

// 初始化下标
var index = 0;
var timer = setInterval(function(){
	messageImg.src = imgSrcArr[index];
	index++;
	if(index >= imgSrcArr.length){
		index = 0;
	}
},1000);


// 游戏时间
var time = 60;
function timeCountFn(){
	var timeSpan = document.querySelector("#time");
	var gameTimer = setInterval(function(){
		timeSpan.innerText = time;
		time--;
		if(time <= 0){
			clearInterval(gameTimer);
			$(".again:hidden").show().siblings().hide();
			
		}
	},1000);
}

// 数钱


var $money = $(".money img");

$money.on("touchstart",function(e){
	e.preventDefault();
	var touches = e.touches[0];
	var startY = touches.clientY;
	$money.on("touchend",function(e){
		e.preventDefault();
		var touches = e.changedTouches[0];
		var endY = touches.clientY;
		var diff = startY - endY;
		if(diff > 10){
			console.log(diff)
			// var $img = $("<img>",{
			// 	src:"img/money.jpg"
			// });

			// $money.append($img);
			// $img.animate({
			// 	"width":"20%",
			// 	"height":"20%",
			// 	"top":"-120%"
			// },1000)
		}
	})
	
})




touch.on($money,"swipeup",function(){
	// timeCountFn();
	var $img = $("<img>",{
		src:"img/money.jpg"
	});

	$money.append($img);
	$img.animate({
		"width":"20%",
		"height":"20%",
		"top":"-120%"
	},1000,function(){
		$(this).remove();
	})
})




// 分享朋友
$(".share:hidden").click(function(){
	$(".toFriends").show();
});

$(window).click(function(){
	$(".toFriends").hide();
});

// 再来一次

$("again_pic:hidden").click(function(){
	$(".play:hidden").show().siblings().hide();
})
