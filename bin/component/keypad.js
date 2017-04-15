/*eslint-env jquery */
/* 
Keypad abstraction:
Properties: columns, *buttons, target
Button type: label, value, colspan, function

Methods: draw, kill, update
 */
function t_Keypad(columns, buttons, target) {
	function t_Button(label, value, colspan, func) {
		this.label = label;
		this.value = value;
		this.colspan = colspan;
		this.func = func;

		function drawButton(tgt) {
			var a = $('<span>' + this.label + '</span>').addClass("keybutton");
			var tr = $(".keypad > tbody > tr:last-child");
			var td = $("<td></td>");
			a.attr("value", this.value);
			a.attr("tgt", tgt);
			a.on("click", updateValue);
			return a;
		}
	} //End Button
	
	
	function draw() {
		var t = $("<table></table>").addClass("keypad");
		t.attr("id", this.target);
		t.append("<tr></tr");
		$("body").append(t);
		buttons.each(this.drawButton(this.target));


	}
}


function attachNumPad(e) {
	if ($("table").hasClass("keypad")) {
		killNumpad();
	}
	var tid = e.target.id;
	var t = $("#" + tid);
	var np = makeNumpad(tid);
	var tpos = t.offset();
	t.after(np);
	var nppos = {
		"left": tpos.left,
		"top": tpos.top + t.outerHeight
	};
	np.offset(nppos);
}

function updateValue(e) {
	var tgtid = $(e.target).attr("tgt");
	var keyVal = $(e.target).attr("value");
	var inField = $("#" + tgtid);
	var val = inField.val();
	if (keyVal < 11) {
		if (Number(keyVal) === 10) {
			if (val.length > 1) {
				val = String(val).substr(0, val.length - 1);
			} else {
				val = "0";
			}
		} else {
			if ((val.length >= 1) && (val !== "0")) {
				val += keyVal;
			} else {
				val = String(keyVal);
			}
		}
		inField.val(val);
		inField.text(val);
	} else {
		killNumpad();
	}
}

function killNumpad() {
	$("table.keypad").remove();
}

function makeNumpad(id) {
	var numCols = 3;
	var digits = "1234567890AB";
	var digit = digits.split("");
	var t = $("<table></table>").addClass("keypad");
	t.attr("id", id);
	t.append("<tr></tr");
	$("body").append(t);
	digit.forEach(function(value, index) {
		var tr = $(".keypad > tbody > tr:last-child");
		var td = $("<td></td>");

		function makeKey(disp, val) {
			var a = $('<span>' + disp + '</span>').addClass("keybutton");
			a.attr("value", val);
			a.attr("tgt", id);
			a.on("click", updateValue);
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
	return t;
}