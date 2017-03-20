$(function() {
var $this = $("#news");
var scrollTimer;
$this.hover(function() {
clearInterval(scrollTimer);
}, function() {
scrollTimer = setInterval(function() {
scrollNews($this);
}, 2000);
}).trigger("mouseleave");

function scrollNews(obj) {
var $self = obj.find("#gdul");
var lineHeight = $self.find(".lili:first").height();
$self.animate({
"marginTop": -lineHeight + "px"
}, 600, function() {
$self.css({
marginTop: 0
}).find(".lili:first").appendTo($self);
})
}
})
//
 $(function() {
				$(".login").click(function() {
					$(".loginbg").css("display", "block")
					$(".loginbox").css("display", "block")
					$(".login").css("display", "none")
					$(".close").click(function() {
						$(".loginbg").css("display", "none")
						$(".loginbox").css("display", "none")
						$(".login").css("display", "block")
					})
					$(".submit").click(function() {
						var x = $("#username").val();
						re = /^1[34578]\d{9}$/;
						if(x == "") {
							$(".errorbox").css("display", "block");
							$(".errorbox span").text("帐号不能为空")
							return false

						} else if(!re.test(x)) {
							$(".errorbox").css("display", "block");
							$(".errorbox span").text("帐号格式不正确")
							return false

						} else if(re.test(x)) {

							$(".errorbox").css("display", "none");
							$(".errorbox span").text("")

						} else {

						}
						$(".submit").submit()
					})
				})
			})