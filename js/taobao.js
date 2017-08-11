// JavaScript Document


/*淘宝头条a标签区域*/
var ra='蓝斑马yeezy 350 v2也要来了';
var rb='新手or老司机，必备打蜡技术不可少！';
var rc='老爸这样哄哭闹的孩子，真的是太拎不清了';
var rd='三星S8 mini：配置不变，价格亮了';
var re='249元！小米米家智能运动鞋发布';
var rf='oversize这样穿，充满时髦感';
var wz=[ra,rb,rc,rd,re,rf];
var i=0;
	setInterval(function(){
		i++;
		if(i==6){
			i=0;
			}
		$('#first a').html(wz[i]);	
		},3000)
/*淘宝头条a标签区域结束*/



/*轮播图区域*/
var c=0;
var timer1=setInterval(function(){
	c++;
	if(c==8){
		c=0;
		}
	$('#flash .con img').eq(c).show().siblings('img').hide();
	$('#flash .but li').eq(c).addClass('dq').siblings('li').removeClass('dq');	
	},3000)
/*轮播图区域结束*/

/*淘抢购倒计时区域*/
var m=59;
var f=10;
setInterval(function(){
	m--;
	if(m==-1){
		m=59;
		}
	$('#miao').html(m);
	if(m<10){
		$('#miao').html('0'+m);
		}	
	},1000)
	
	
 var timer2=setInterval(function(){
	f--;
	if(f==-1){
		f=0;
		clearInterval(timer1);
		clearInterval(timer2);
		}
	$('#fen').html(f);
	if(f<10){
		$('#fen').html('0'+f);
		}	
	},60000)	
	
/*淘抢购倒计时区域结束*/

/*获得手机屏幕的高度*/
//var win_height=$(window).height();
//alert(win_height);
/*获得手机屏幕高度结束*/


/*顶部固定区域*/
$(window).scroll(function(){
	var t=$(document).scrollTop();
	var gaodu=$('#top').height();
	if(t>gaodu){
		$('#top').css({'position':'fixed','top':'0px','left':'0px'});
		}else{
			$('#top').css({'position':'relative'});
			}
	})


/*顶部固定区域结束*/

