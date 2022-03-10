<?php 
    $title = 'Book';
    include('includes/_top.php'); 
?>
<section id="book">
<h1> Book A Cruise</h1>
<form>
    <div class="form-control-container">
    <label for="name">Full Name</label>
    <input type="text" name="name" id="name" class="form-control">
</div>
    <div class="form-control-container">
    <label for="address">Address Line</label>
    <input type="text" name="address" id="address" class="form-control">
</div>
    <div class="form-control-container">
    <label for="city">City</label>
    <input type="text" name="city" id="city" class="form-control">
</div>
    <div class="form-control-container">
    <label for="state">State</label>
   <select name="state" id="state" class="form-control" data-select="state">
       <option value="Please Select" selected>Please Select...</option>
   </select>
</div>
<div class="form-control-container">
    <label for="zip">Zip Code</label>
    <input type="text" name="zip" id="zip" class="form-control">
</div>
<div class="form-control-container">
    <label for="phone">Phone Number</label>
    <input type="text" name="phone" id="phone" class="form-control">
</div>
<div class="form-control-container">
    <label for="email">Email Address</label>
    <input type="text" name="city" id="city" class="form-control">
</div>
<div class="form-control-container">
    <label for="cruise">Cruise Selection</label>
   <select name="cruise" id="cruise" class="form-control">
       <option value="Please Select" selected>Please Select...</option>
       <option value="Some Cruise 1">Some Cruise 1</option>
       <option value="Some Cruise 2">Some Cruise 2</option>
       <option value="Some Cruise 3">Some Cruise 3</option>
   </select>
</div>
<div class="form-control-container">
    <button class="btn large-btn" data-btn-submit> Book My Cruise </button>
</div>
</form>
</section>
<?php include('includes/_bottom.php') ?>