timer = 0
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
level = -2;
restart = 0
progress = 0
skipped = false
onload = {
	0: story,
	1: function(){
		timer = Date.now()	
	},
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
	9:function(){
		$("body").css("background-color", "black")
		setTimeout(()=>{
			$("#lvl9 .bigbtn").attr("onclick", "next_level()")
			$("#lvl9 .bigbtn").html("Next Level")
			$("#lvl9 .header").html("OMG THAT WAS FAKE")
			$("#lvl9 .desc").html("You nearly got scammed")
			
		}, 5000)
	},
	10:function(){
		simp_virus = false
		$("#simp_virus").show()
		$("#simp_virus").click(()=>{
			simp_virus = true
			$('#simp_virus').remove()
		})
	},
	13: function(){
		let prog = 0
		let o = setInterval(()=>{
			if (prog >= 100){
				if (level === 13){
					die("The virus killed your computer")
				}
				clearInterval(o)
			}
			$("#lvl13_prog").html(prog)
			prog += 1;
		}, 40)
	},
	14:function(){
		$("#coins").show()
	},
	15:function(){
		timer = ((Date.now()-timer) / 1000).toFixed(2)
		$("#numsecs").html(timer+" seconds")
		conf()
		$("#copy").click(() =>{
			navigator.clipboard.writeText("I destroyed the virus in "+timer+" seconds\nhttps://novirusgame.tk/");
		})
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
	$("#level_num_span").html(level)
}

function dev_goto(id){
	$(".level").hide()
	level = id
	$("#lvl" + level).css("display", "flex");
	if (Object.keys(onload).includes(level.toString())){
		onload[level.toString()]()
	}
	$("#level_num_span").html(level)
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
	}
	else if (Number($(e.currentTarget).data("id")) === 4){
		open("https://youtube.com/watch?v=dQw4w9WgXcQ")
		die("You just rickrolled yourself...")
	}
	else{
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
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function typewriter(ms) {
	let i = 0;
	let text = "Download free RAM for computer"
    return new Promise(resolve => {
		let j = setInterval(()=>{
		$("#google_search").val($("#google_search").val() + text[i])
		i += 1
		if (i >= text.length){
			resolve("done")
			clearInterval(j)
		}
	}, 100)
	});
}
async function story(){
	$("#skip").show()
	$("#lvl0 .mouse").show()
	$("#lvl0 .step1").fadeIn()
	await timeout(500)
	$("#lvl0 .step2").slideDown()
	await timeout(1000)
	$("#lvl0 .step3").fadeIn()
	await timeout(2000)
	$("#lvl0 :is(.step1, .step2, .step3)").fadeOut()
	await timeout(700)
	$("#google").fadeIn()
	await timeout(800)
	$("#lvl0 .mouse").animate({
		"left":"50vw",
		"top":"250px"
	})
	await timeout(1000)
	await typewriter()
	
	$("#lvl0 .mouse").animate({
		"left":window.innerWidth / 2 - 100,
		"top":"310px"
	})
	await timeout(500)
	$("#google").html("").css("height", "406px")
	await timeout(1000)
	$("#google").hide()
	$("#search_res").show().css("min-height", "406px")
	await timeout(1000)
	$("#lvl0 .mouse").animate({
		"left":window.innerWidth * 0.125 +50,
		"top":"165px"
	})
	await timeout(1000)
	$("#search_res").html("")
	await timeout(1000)
	$("#search_res").hide()
	$("#downloadram").show()
	await timeout(500)
	$("#lvl0 .mouse").animate({
		"left":"50%",
		"top":"300px"
	})
	await timeout(1000)
	$("#downloadram .btn").css("opacity", "0.8")
	await timeout(1000)
	$("#downloadram .btn").css("opacity", "1")
	await timeout(100)
	for (let i = 0; i < 30; i++){
		if (skipped){
			$("body").css("background", "black")
			return
		}
		$("body").css("background", getRandomColor())
		$("#downloadram").css("background", getRandomColor())
		$("#body").css("transform", "rotate("+randint(0, 360)+"deg)")
		$("#downloadram").css("transform", "rotate("+randint(0, 360)+"deg)")
		$("#downloadram h1").css("transform", "rotate("+randint(0, 360)+"deg)")
		$("#downloadram h2").css("transform", "rotate("+randint(0, 360)+"deg)")
		$("#downloadram .btn").css("transform", "rotate("+randint(0, 360)+"deg)")
		$("#downloadram h1").css("color", getRandomColor())
		$("#downloadram h2").css("color", getRandomColor())
		$("#downloadram .btn").css("background", getRandomColor())
		$("#downloadram .btn").css("color", getRandomColor())
		$("#downloadram .btn").css("border-color", getRandomColor())
		await timeout(300)
	}
	await timeout(1000)
	$("body").css("background", "black")
	next_level()
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}



function turninpswd(){
	if (!simp_virus){
		die("The virus was NOT sympathetic towards you. Maybe you missed something?")
		return
	}
	
	var password = document.getElementById("password").value;
	if (password != ""){
		$("#fail").css("display", "inline");
		$("#fail").css("color", "red");
		setTimeout(function(){next_level()}, 1000)
	}
	else{
		die("You did not change your password")
	}
}

function toggleinternet(){
	if (document.getElementById("internet").src == 'https://virus-remover-game.ryantang11.repl.co/assets/interneton.png'){
		document.getElementById("internet").src="/assets/internetoff.png";
		setTimeout(function(){next_level()}, 1000);
	}
	else{
		document.getElementById("internet").src="/assets/interneton.png";
	}
}

$("#skip").click(()=>{
	next_level()
	skipped = true
	$("body").css("background", "black")
})
// just run this function when you want the music to play :)
audio = document.createElement("audio")
audio.src = "assets/background.mp3"
audio.loop = true
audio.volume = Number($("#volume").val())/100;
audio.id = "background";
function play_background(){
	audio.play()
}

function lvl10submit(){
	var folder = document.getElementById("place").value;
	if (folder == "assets (138 MB)"){
		next_level();
	}
	else{
		die(`"1/4 chance" - Yuuki Sawanoi<br><br>Anyways, you got it wrong.`);
	}
}
function change_audio(){
	audio.volume = Number($("#volume").val())/100;
}
$("#volume").change(change_audio)
$("#volume").on("input", change_audio) // Why, Firefox, IE?

async function add_fetch_files(){
	for (let i = 1;i < 7;i++){
		file = await fetch("fake/"+i+".py")
		file = await file.text()
		$("#fakefile"+i).html(`<h1>File #${i}</h1><pre><code class="language-python"></code></pre>`)
		$("#fakefile"+i+" code").text(file)
	}
	hljs.highlightAll()
}
add_fetch_files()
$("#viruses tr").click((e)=>{
	let el = e.currentTarget
	$("#fakefile"+$(el).data("id")).toggle()
})
function check11(){
	if (!$("#console").val().trim()){
		return
	}
	if ($("#console").val().trim() == "show_internet()"){
		$("#internet").show()
	}
	$("#terminal_log").append(`<div class="term_msg">${$("#console").val()}</div>`)
	$("#console").val("")
}
$("#console").keypress(e=>{
	if (e.key === "Enter"){
		check11()
	}
})

ctrled = false
alted = false
deleted = false

$(".key_el").click((e)=>{
	let el = $(e.currentTarget)
	switch (el.data("selected")==="yes"){
		case false:
			el.css("background-color", "#e0f3ff")
			el.data("selected", "yes")
			break
		default:
			el.css("background-color", "white")
			el.data("selected", "no")
		
	}
	if (el.html() === "Ctrl"){
		ctrled = !ctrled
	}else if (el.html() === "Alt"){
		alted = !alted
	}else if (el.html() === "Delete"){
		deleted = !deleted
	}
	if (ctrled && alted && deleted){
		next_level()
	}
})


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
num_coins = 0
perclick = 1
$("#lvl14 .bigbtn").click(()=>{
	if (num_coins < 500){
		$("#lvl14_err").show()
	}else{
		$("#coins").hide()
		next_level()
		
	}
})
const steal_time = {
	l100: 20,
	l200: 60,
	l300: 80,
	l400: 120,
	l500: 20
}
const steal_msgs = {
	l100: "The virus stole some money. Who said life was fair?",
	l200: "The virus stole some money. Who said life was fair?",
	l300: "The virus stole some money. Who said life was fair?",
	l400: "The virus stole some money. Who said life was fair?",
	l500: "The virus stole some money. Who said life was fair?"
}
$("#clicker").click(()=>{
	num_coins += perclick
	$("#coins .count").html(num_coins)
	if (steal_time.hasOwnProperty("l"+num_coins)){
		$("#lvl14_virus_err").html(steal_msgs["l"+num_coins])
		prev = num_coins;
		num_coins -= steal_time["l"+num_coins]
		delete steal_time["l"+prev]
		$("#lvl14_virus_err").fadeIn()
		setTimeout(()=>{
			$("#lvl14_virus_err").fadeOut()
		}, 2000)
	}

})

$("#mult").click(() =>{
	if (num_coins >= 50){
		perclick = 4;
		num_coins -= 50;
		num_coins = parseInt(num_coins/4)*4; //round so it hits the steal_time
		$("#mult").hide();
	}
})