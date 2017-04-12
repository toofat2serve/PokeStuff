/*eslint-env jquery */
function initDex() {
	initPickers();
	$("input").attr("type", "number").on("click", attachNumPad());
}

function attachNumPad(event) {
	$("label").each(function() {
		if ($.attr("for") === event.target.id) {
			console.log(p);
			p.after(makeNumpad());
		}
	});
}



function makeNumpad() {
	var digits = "1234567890AB";
	var digit = digits.split("");
	var t = $("<table></table>").prop("class", "keypad");
	t.append("<tr></tr");
	$("body").append(t);
	digit.forEach(function(value, index) {
		var tr = $("table.keypad > tbody > tr:last-child");
		var td = $("<td></td>");

		function makeKey(disp, val) {
			var a = $('<a href="#">' + disp + '</a>').addClass("keybutton");
			a.prop("value", val);
			return a;
		}
		if (index < 10) {
			td.append(makeKey(value, value));
		} else if (index === 10) {
			td.append(makeKey("X", index));
		} else if (index === 11) {
			td.append(makeKey("&crarr;", index));
		}
		tr.append(td);
		var col = $("table.keypad > tbody > tr:last-child > td").length;
		if (col === 3) {
			t.append("<tr></tr>");
		}
	});
	return t;
}
