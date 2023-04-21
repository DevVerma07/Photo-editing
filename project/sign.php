<!DOCTYPE html>
<html>
<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="boot/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="boot/css/bootstrap.min.css">
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>







  <center>
   <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center text-primary text-light">Student Registration Form</h1>
        <form class="form-vertical" action="form_submit.php" method="post">
          <div class="form-group">
            <label for="First" style="color: red">First Name*:</label>
            <input type="text" name="n1" class="form-control" required="">
          </div>
          <div class="form-group">
            <label for="Last" style="color: red">Last Name*:</label>
            <input type="text" name="n2" class="form-control" required="">
          </div>
          <div class="form-group">
            <label for="dob" style="color: red">Date Of Birth*:</label>
            <input type="date" name="n3" class="form-control" required="">
          </div>
          <div class="form-group">
            <label for="Email" style="color: red">Email*:</label>
            <input type="email" name="n4" class="form-control"  required="">
          </div>
          <div class="form-group">
            <label for="Contact" style="color: red">Contact:</label>
            <input type="number" name="n5" class="form-control" maxlength="12" required="">
          </div>
          <div class="form-group">
            <label for="Password" style="color: red">Password*:</label>
            <input type="password" name="n6" class="form-control" required="">
          </div>
          <div class="form-group">
            <label for="Address" style="color: red">Address*:</label>
            <input type="text" name="n7" class="form-control" required="">
          </div>
          <div class="form-group">
            <input type="submit" name="submit" value="submit" class="btn btn-primary btn-lg">
          </div>
        </form>
        
      </div>
    </div>
   </div>
 </center>
</body>
</html>