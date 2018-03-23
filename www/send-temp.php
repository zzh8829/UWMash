<?php
       $con = mysqli_connect("localhost","root","beast","facemash");
       $pic1 =mysqli_query($con,"SELECT `pic` FROM `students` ORDER BY RAND() LIMIT 2");
       $obj = array(
              "pic1" => mysqli_fetch_array($pic1)['pic'],
              "pic2" => mysqli_fetch_array($pic1)['pic'],
       );

       echo json_encode($obj);
?>