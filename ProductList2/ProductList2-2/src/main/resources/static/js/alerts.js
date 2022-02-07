$(document).ready(function(){
$('.deleteB').click(function(){
				
				alert("deleted");
			})
			
$('#saveB').click(function(){
			Swal.fire({
		  position: 'top-end',
		  icon: 'success',
		  title: 'Your work has been saved',
		  showConfirmButton: false,
		  timer: 15000
				})
		
		})
		
		 $("#searchText").on("keyup", function() {
	    var value = $(this).val().toLowerCase();
	    $("#dataTable tr").filter(function() {
	      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	    });
	  });


	$('#saveCoupon').click(function(){
			Swal.fire({
		  position: 'top-end',
		  icon: 'success',
		  title: 'Your Coupon has been  saved',
		  showConfirmButton: false,
		  timer: 15000
				})
		})
		
		$('#savePromotion').click(function(){
			Swal.fire({
		  position: 'top-end',
		  icon: 'success',
		  title: 'Your Promotion Event has been saved',
		  showConfirmButton: false,
		  timer: 15000
				})
		})
	$('#deleteCoupon').click(function(){
				
				alert(" Coupon deleted");
			})
	
			});
			
