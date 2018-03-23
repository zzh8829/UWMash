<?php
	function elo_update(id1,id2) {
		$con = mysqli_connect("localhost","root","beast","facemash");
		if(mysqli_connect_errno()) {
			echo "Failed to connect to MySQL: ". mysqli_connect_error();
		}

		$p1 = mysqli_query($con,"SELECT * FROM students")


		mysqli_close($con);
	}
?>
