<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">

<title>Geocoding</title>

<!-- Bootstrap Core CSS -->
<link href="../xlib/bootstrap-3.3.5/css/bootstrap.min.css" rel="stylesheet">
<link href="../image/icon-api.gif" rel="icon">
<!-- Custom CSS -->
<link href="../xlib/bootstrap-3.3.5/css/1-col-portfolio.css"
	rel="stylesheet">
<style>
      #map {
        width: 600px;
        height: 300px;
      }
</style>

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body onload="getCurrentLocation()">

	<!-- Navigation -->
	<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="../index.jsp">Google API's</a>
			</div>
			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li><a href="#">About</a></li>
					<li><a href="#">Services</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container -->
	</nav>

	<!-- Page Content -->
	<div class="container">

		<!-- Page Heading -->
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">Geocoding API</h1>
			</div>
		</div>
		<!-- /.row -->

		<!-- Project One -->
		<div class="row">
			<div class="col-md-7">
				<div class="img-responsive" id="map">
				</div>
			</div>
			<div class="col-md-5">
				<p>Enter the address in the text box, or click on the button to
					get coordinates</p>
				<table>
				<tr><td>Address&nbsp</td><td><input type="text" id="userAddress"></td></tr>
				</table>
				<br>
				<button class="btn btn-primary" onclick="getCurrentLocation()">Get
					coordinates</button><br><br>
				<div id="coordinatesMsg">
				</div>
			</div>
		</div>
		<!-- /.row -->
		<hr>
		<!-- Footer -->
		<footer>
			<div class="row">
				<div class="col-lg-12">
					<p>Copyright &copy; Dheeraj 2015</p>
				</div>
			</div>
			<!-- /.row -->
		</footer>

	</div>
	<!-- /.container -->

	<!-- jQuery -->
	<script type="text/javascript" src="../xlib/jquery/jquery-2.1.4.min.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script type="text/javascript"
		src="../xlib/bootstrap-3.3.5/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="geoLocScript.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js"></script>
</body>

</html>
