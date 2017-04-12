/*eslint-env jquery */
function initDex() {
	initPickers();
	$(".inputSpan").on("click", attachNumPad);
}

function attachNumPad(event) {
	try {
		if (!($("table").hasClass("keypad"))) {
			var tid = "#" + event.target.id;
			var np = makeNumpad(tid);
			var nppos = $.offset(tid);
			$(tid).after(np));
			np.offset(nppos.left, nppos.top);
		} else { 
			killNumpad();
		}
	} catch {
		alert(err);
	}
}

function killNumpad() {
	$("table.keypad").remove();
}
function makeNumpad(id) {
	var numCols = 3;
	var digits = "1234567890AB";
	var digit = digits.split("");
	var t = $("<table></table>").prop("class", "keypad");
	t.append("<tr></tr");
	$("body").append(t);
	digit.forEach(function(value, index) {
		var tr = $("table.keypad > tbody > tr:last-child");
		var td = $("<td></td>");

		function makeKey(disp, val) {
			var a = $('<span>' + disp + '</span>').addClass("keybutton");
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
		if (col === numCols) {
			t.append("<tr></tr>");
		}
	});
	t.append('<tr><td colspan="' + numCols + '">' + id +'</td></tr>');
	return t;
}
