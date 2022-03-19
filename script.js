function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}
angry = 0;
level = -1;
progress = 0
onload = {
	3:function(){
		$("body").css("background-color", "#005075")
		setTimeout(()=>{
			if (level === 3){
				die("You took too long to restart.")
			}
		}, 5000)
	},
	4:function(){
		$("body").css("background-color", "black")
	},
	5: function(){
		$("body").css("background-color", "#005075")
		var i = 0;
			if (i == 0) {
				i = 1;
				var elem = document.getElementById("myBar");
				var width = 0;
				var id = setInterval(frame, 200);
				function frame() {
				$()
						if (width >= 100) {
					$("#progress").fadeOut()
					$("#antivirus_pic").fadeIn()
							clearInterval(id);
							i = 0;
						} else {
							width++;
							elem.style.width = width + "%";
					$("#progress_percent").html(width)
						}
				}
			}
	},
	6: function(){
		setTimeout(()=>{
		if (level === 6){
				die("You took too long to throw it away.")
			}
		}, 5000)
	},
	15:function(){
		conf()
	}
}

next_level(); //hides all the levels
$("#angry_face").click(()=>{
	angry++;
	$("#anger_meter").html("Angry Meter: "+ angry)
	if (angry > 4){
		$("#angry_face").html("😠");
	}
	if (angry > 10){
		$("#angry_face").html("😡")
	}
	if (angry > 15){
		$("#angry_face").html("🤬")
	}
	if (angry > 20){
		next_level();
	}
})

function next_level(){
	$(".level").hide()
	level += 1
	$("#lvl" + level).css("display", "flex");
	$("#power").hide();
	if (Object.keys(onload).includes(level.toString())){
		onload[level.toString()]()
	}
}

function dev_goto(id){
	$(".level").hide()
	level = id
	$("#lvl" + level).css("display", "flex");
	if (Object.keys(onload).includes(level.toString())){
		onload[level.toString()]()
	}

}
$("#task_manager tr").click((e)=>{
	if (e.currentTarget.id === "task_manager_header"){
		return
	}
	$("#task_manager tr:not(#task_manager_header)").css("background-color", "white")
	$("#task_manager tr").removeClass("selected")
	
	e.currentTarget.style.backgroundColor = "lightblue"
	$(e.currentTarget).addClass("selected")
})

$("#files tr").dblclick((e)=>{
	if (e.currentTarget.id === "files_header"){
		return
	}
	if (Number($(e.currentTarget).data("id")) === 6){
		next_level()
	}else{
		die("You just went to a bad website that may or may not have broke your computer...")
	}
})


function die(message){
	$(".level").hide();
	$("#desc").html(message)
	$("#dead").show()
}

function endproccess(){	
	if ($("#task_manager tr.selected").length === 0){
		return
	}
	if (Number($("#task_manager tr.selected").data("id")) === 1){ 
		next_level()
	}else{
		die("That wasn't the virus")
	}
}
function shutdown(){
	$("body").fadeOut()
	setTimeout(()=>{
		next_level()
		$("body").fadeIn()
	}, 1000)
}
$("#antivirus_pic").dblclick(()=>{
	$("#rate_admins").fadeIn()
})

$("#starrating .fa").click((e)=>{
	let element = $(e.currentTarget)
	$("#starrating .fa").removeClass("orange")
	for (let i = 0; i < Number(element.data("id")); i++){
		$($("#starrating .fa")[i]).addClass("orange")
	}
})
$("#likedislike button").click((e)=>{
	$("#likedislike button").removeClass("selected")
	$(e.currentTarget).addClass("selected")
})

$("#rate_admins > button").click(()=>{
	if ($("#starrating .fa.orange").length === 1 && $("#likedislike button.selected").data("id") === "dislike"){
		next_level() //the thumbs up does not work
	}
	else{
		die("You supported the administrator");
	}
})

function changel(){
	if (document.getElementById("language").value == "Russian"){
		next_level();
	}
	else{
		die("The virus was not afraid of your language.")
	}
}

function scan(){
		$("body").css("background-color", "#005075")
		var i = 0;
			if (i == 0) {
				i = 1;
				var elem = document.getElementById("bar_8");
				var width = 0;
				var id = setInterval(frame, 200);
				function frame() {
				$()
						if (width >= 100) {
							$("#progress2").fadeOut()
							
							$("#threat").show();
							clearInterval(id);
							i = 0;
						} else {
							width+=Math.floor(Math.random()*3)+1;
							elem.style.width = width + "%";
					$("#progress_percent2").html(width)
						}
				}
			}
}

























function conf() {
	confetti(); // skipcq: JS-0125
	//confetti.reset(); // skipcq: JS-0125
	const duration = 1000;
	const animationEnd = Date.now() + duration;
	const defaults = {
		startVelocity: 50,
		spread: 1000,
		ticks: 1000,
		zIndex: 0,
	};

	function randomInRange(min, max) {
		return Math.random() * (max - min) + min;
	}

	const interval = setInterval(function () {
		let timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			return clearInterval(interval);
		}

		const particleCount = 200 * (timeLeft / duration);
		// since particles fall down, start a bit higher than random
		confetti(
			Object.assign({}, defaults, {
				// skipcq: JS-0125
				particleCount,
				origin: {
					x: randomInRange(0.1, 0.3),
					y: Math.random() - 0.2,
				},
			})
		);
		confetti(
			Object.assign({}, defaults, {
				// skipcq: JS-0125
				particleCount,
				origin: {
					x: randomInRange(0.7, 0.9),
					y: Math.random() - 0.2,
				},
			})
		);
	}, 250);
}