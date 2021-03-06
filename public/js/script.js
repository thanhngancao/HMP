$(document).ready(function () {
	$('.menu-toggle').click(function () {
		$('.menu-toggle').toggleClass('active');
		//.toggleClass('active'); cho thẻ nav		
		$('nav').toggleClass('active');
	})

	$('nav ul li a').click(function () {
		if ($('nav ul li a.active').attr('id') == 'contact') {
			toggleContainer();
		}

		if ($('nav ul li a.active').attr('id') == 'super') {
			toggleSuper();
		}

		if ($('nav ul li a.active').attr('id') == 'luxury') {
			toggleLuxury();
		}

		if ($('nav ul li a.active').attr('id') == 'ordinary') {
			toggleOrdinary();
		}
		//Thêm hoặc xóa active class cho thẻ $('nav ul li a.active')
		//a.active là thẻ a có class là active
		//Trường hợp này là xóa active class cho thẻ a đang active
		$('nav ul li a.active').toggleClass('active');
		//$(this) ~> thẻ gọi sự
		//Thêm active class cho thẻ vừa click vào
		$(this).toggleClass('active');
		//nếu thẻ this có id="contact"
		if ($(this).attr('id') == 'contact') {
			//thì thực hiện hàm toggleContainer();
			toggleContainer();
		}
		if ($(this).attr('id') == 'super') {
			toggleSuper();
		}
		if ($(this).attr('id') == 'luxury') {
			toggleLuxury();
		}
		if ($(this).attr('id') == 'ordinary') {
			toggleOrdinary();
		}
	})
	//function không tham số, có tên toggleContainer
	var toggleContainer = function () {
		//Thêm animate cho các thẻ chọn được
		$(".container").animate({  
			height: 'toggle'
		});
	}

	var toggleSuper = function () {
		//Thêm animate cho các thẻ chọn được
		$(".supercar").animate({
			height: 'toggle'
		});
	}

	var toggleLuxury = function () {
		//Thêm animate cho các thẻ chọn được
		$(".luxurycar").animate({
			height: 'toggle'
		});
	}

	var toggleOrdinary = function () {
		//Thêm animate cho các thẻ chọn được
		$(".ordinarycar").animate({
			height: 'toggle'
		});
	}
	//Sự kiện click cho button có id='btnRead'
	$('#btnCheck').click(() => {
		//.val() ~> lấy giá trị trong thẻ html được chọn
		const reqURL = 'users/' + $('#inUserName2').val();
		//$.ajax({}); ~> ajax trong jQuey
		$.ajax({
			type: "GET", //Phương thức GET đối với reqURL
			url: reqURL,
			dataType: "json", //Dữ liệu trả về là json
			//Gửi request và nhập respone thành công
			//data là dữ liệu về từ server
			//thay vì viết function(data){} thì ta có thể viết (data)=>{}
			success: (data) => {
				//.html(content); ~> gán content vào val của thẻ html được chọn
				$('#result').html(' Email: ' + data.email + '; Message: ' + data.message);
				$('#status').html(reqURL);
			}
		});
	});

	//Tạo mới cmt của user
	//Sự kiện click cho button có id = 'btnSend'
	$('#btnSend').click(() => {
		const reqURL = 'users/Send';
		//Tạo object
		var user = new Object();
		user.userName = $('#inUserName').val();
		user.email = $('#inEmail').val();
		user.message = $('#inMessage').val();
		$.ajax({
			type: 'POST', //Phương thức GET đối với reqURL
			url: reqURL,
			dataType: 'text', //Dữ liệu trả về là text
			data: user, //Dữ liệu gửi lên server
			success: (data) => {
				$('#status').html('POST' + data);
			}
		});
	});
});

	