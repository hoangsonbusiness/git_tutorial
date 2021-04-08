<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Login Page</title>
<link href="css/style.css" rel="stylesheet" />
</head>
<body>
	<div class="main-content">
		<h3>Login to continue</h3>
		<form action="/spring/login" method="POST">
			<input type="text" name="email" placeholder="Your email" /><br />
			<input type="password" name="password" placeholder="Your password" /><br />
			<button type="submit">Login</button> <br />
		</form>
	</div>
</body>
</html>
