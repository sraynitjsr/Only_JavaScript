<!DOCTYPE html>
<html>
<body>

<h2>Vanilla JavaScript Bulb Program</h2>

<p>JavaScript Can Change HTML Attribute Values.</p>

<p>In This Case JavaScript Changes the Value of The Source Attribute of An Image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on The Light</button>

<img id="myImage" src="my_pic.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>
