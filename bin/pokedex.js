/*eslint-env jquery */
$.mobile.defaultPageTransition = "slide";
function initPickers() {
	$("#azpicker").css("display", "none");
	$("#pokepicker").css("display", "none");
}

function initDex() {
	initPickers();
	$(".inputSpan").on("click", attachNumPad);
}


function ltrPick(e) {
	if (e.target !== e.currentTarget) {
		var firstletter = e.target.id;
		getPokemon(firstletter);
	}
	e.stopPropagation();
}

function jqazPick() {
	document.body.style.backgroundImage = "none";
	
	var abcs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var abc = abcs.split("");
	var tbl = $("#azpicker");
	var trow;
	abc.forEach(function(letter, index) {
		if (index % 5 === 0) {
			if (index > 0) {
				tbl.append(trow);
			}
			trow = $("<tr></tr>");
		}
		var tdiv = $("<td>" + letter + "</td>").prop("id", letter);
		trow.append(tdiv);
		if (index === (abc.length - 1)) {
			tdiv = $("<td></td>");
			tdiv.colSpan = 4;
			trow.append(tdiv);
			tbl.append(trow);
		}
	});
	tbl.on("click", ltrPick);
	tbl.css("display", "inline-table");
}