<%--
  Created by IntelliJ IDEA.
  User: yunlongliu
  Date: 4/23/17
  Time: 11:23 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>emotion detection</title>
  <meta charset="UTF-8">
  <script type="text/javascript" src="js/js.js"></script>
  <link href="css/style.css" rel="stylesheet" type="text/css" />

  <script type="text/javascript" src="http://jt.875.cn/js/jquery.js"></script>
  <script type="text/javascript" src="http://jt.875.cn/js/scrollto.js"></script>
  <script type="text/javascript" src="js/twitterFetcher_min.js"></script>
  <script type="text/javascript" src="js/exampleUsage.js"></script>
</head>

<body>
<div id="info" class="info">
  <h2 align="center"  >COMP-SCI 5542 (SP17) - Big Data Analytics and Applications
  </h2>
  <p align="center" style="margin-right: 62px;color:#1A5F95;font-size:18px;line-height: 0.3">Team 9: <em>Dayu Wang </em>(45)</p>
  <p align="center" style="color:#1A5F95;font-size:18px;line-height: 0.3"><em>Chen Wang </em>(44)</p>
  <p align="center" style="color:#1A5F95;font-size:18px;line-height: 0.3"><em>Yunlong Liu </em>(22)</p>
</div>
<div class="text">
  <!--	<p align="center">part 1, text to emoji</p>-->
  <h2>Emotion detection from text</h2>
  <div id="1" class="text-info">
    <div class="text-info-left">
      <h1 style="line-height: 2">Today's Moments</h1>
      <form>
        <input type="text" placeholder="What's up" style="width: 100%;height: 165px;font-size: 15px; padding-top: 0px;border:none">
        <!--						<textarea type="text" value="what's up" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value ='whats up...';}" required>what's up...</textarea>-->
        <div id="parent">
          <select onChange="document.outputemoji.src=options[selectedIndex].value">
            <option value="images/default.png">Emoji List</option>
            <option value="images/Standard_Emoji/Anger.jpg">Anger</option>
            <option value="images/Standard_Emoji/Anticipation.jpg">Anticipation</option>
            <option value="images/Standard_Emoji/Disgust.jpg">Disgust</option>
            <option value="images/Standard_Emoji/Fear.jpg">Fear</option>
            <option value="images/Standard_Emoji/Joy.jpg">Joy</option>
            <option value="images/Standard_Emoji/Sadness.jpg">Sadness</option>
            <option value="images/Standard_Emoji/Surprise.jpg">Surprise</option>
            <option value="images/Standard_Emoji/Trust.jpg">Trust</option>
          </select>
        </div>
        <button id="bt_sub" type="submit" > Submit </button>
        <!--   <input type="submit" value="Submit" >-->
        <p style="text-align: right; font-size: 14px;color: red;">Just click submit, we'll choose the emoji for you</p>
      </form>
    </div>
    <div class="text-output">

      <div style="float: left;height: 80px;width: 78%">
        <p style="font: normal;font-size: 18px;color: aliceblue;margin-left: 10px;margin-top: 28px">The emoji we asign to these words is:</p>
      </div>
      <div style="float: right;height: 80px;width: 20%;"><img width="80px" height="80px" src="images/default.png" name="outputemoji"> </div>
    </div>
    <div class="text-info-right">

      <h2>Detect Emotion</h2>
      <p style="color:#1A5F95;font-size:18px ">Simply type in your moments, we will know your today's emotion and automatically asign an emoji to your words.</p>

    </div>
    <div class="content"> </div>
  </div>
  <div style="float: left;position:fixed ; bottom:0px;height: 33px" >
    <a href="#" class="tobottom">
      <img border="0" src="images/arrowdown.png">
    </a>
  </div>
</div>
<div id="twitter" class="twitter">
  <h2>Emotion detection from text</h2>
  <p class="description">simlpy choose an emoji from your local, we will generate emoji base on the image, and show you the top ten twitter using this emoji</p>
  <div class="twitter-bottom">
    <form>
      <input type="file" value="Name" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Name';}" required="">
      <input type="submit" value="Submit" >
    </form>
    <div class="result">
      <h4>Related tweets shows here</h4>
    </div>
    <div style="overflow:scroll; margin-left:42%; max-height: 500px;max-width: 60%" id="example">
      <!--            <img src="images/twitterimg.png" style="width:450px;height:280px">-->
    </div>
  </div>
</div>
<div style="background: white;float: right">
  <a href="#" class="totop">
    <img border="0" src="images/arrow.png">
  </a>
</div>
<script type="text/javascript">

    $(".totop").click(function(){
        $.scrollTo('#info',499);
    });

    $(".tobottom").click(function(){
        $.scrollTo('#twitter',499);
    });
</script>
</body>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.3/moment.min.js"></script>
</html>
