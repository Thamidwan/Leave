<?php


$severName="localhost:3306";
$useName="techtlom_proc";
$password="#_H?VphVtTXk";
$db="techtlom_proc";



/*connection*/
$mysqli=new mysqli($severName,$useName,$password,$db) or die(mysqli_error($mysqli));


$userLogin=filter_input(INPUT_POST,'userLogin');

if(isset($_POST['btnsign'])){
       
    $sql="SELECT * FROM registration WHERE studNumber='$userLogin'";
    $results=mysqli_query($mysqli,$sql);
    $count=mysqli_num_rows($results);
      
    if($count>0){
      
        header("Location:xx2/test.php");
          
    }
    else{
        header("Location:index.php");
        
    }

}


?>