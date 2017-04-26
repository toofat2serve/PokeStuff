/*eslint-env jquery */
function drawTable(columns, total, id) {
    var t = $('<table></table>').prop("class", id);
    for (var i = 0; i < total; i++) {
        if ((i === 0) || (i % columns === 0)) {
            var tr = $('<tr></tr>');
        }
        tr.append('<td></td>');
        if ((i % columns === 0) || (i === total)) {
            t.append(tr);
        }
    }
    return t;
}

function pokePicked(e) {
    if (e.target !== e.currentTarget) {
        var eti = e.target.id;
        if ($(e.target).is("td")) {
            eti = $(e.target).children("figure").attr("id");
        }
        var pokedex = loadPokedex(false);
        var p;
        pokedex.some(function(pokemon) {
            p = pokemon;
            return pokemon.id === Number(eti);
        });
        var tbl;
        var tr;
        var td;
        var typ;
		 $('.basetitle > h1').text('#' + p.id + " " + p.name);
        tbl = $('<table></table>').attr('class', 'pokebasetable');
   
        tr = $('<tr></tr>');
         tr.append('<th>Type</th>');
        tr.append($('<td></td>').attr('class', 'poketype'));
        td = $('<td></td>').attr('class', 'pokepic');
        td.attr('rowspan', '4');
        tr.append(td);
        tbl.append(tr);

        tr = $('<tr></tr>');
        tr.append('<th>Attack</th>');
        tr.append($('<td></td>').addClass('pokebaseatk stat'));
        tbl.append(tr);
        
        tr = $('<tr></tr>');
         tr.append('<th>Defense</th>');
         tr.append($('<td></td>').addClass('pokebasedef stat'));
        tbl.append(tr);
        
        tr = $('<tr></tr>');
        tr.append('<th>Stamina</th>');
                tr.append($('<td></td>').addClass('pokebasesta stat'));
        tbl.append(tr);

       
	
        $('.basetable').append(tbl);
       
        $('.pokebaseatk').text(p.atk);
        $('.pokebasedef').text(p.def);
        $('.pokebasesta').text(p.sta);
        $('.poketype').append($('<span>' + p.type1 + '</span>').attr('class',p.type1));
        if (p.type2.length > 0) {
        	$('.poketype').append($('<span>   </span>'));
        	$('.poketype').append($('<span>' + p.type2 + '</span>').attr('class',p.type2));
        }
        $('.poketype').html(typ);
        var pic = $('<img>').attr("src", imgSRC(p.id));
        $('td.pokepic').html(pic);
    }
    e.stopPropagation();
    $.mobile.pageContainer.pagecontainer("change", $("#info"));
}

function clearSelect() {
    $('.pokepicker').remove();
    $('.azpicker').remove();
    $('.pokebasetable').remove();
}

function jqazPick() {
    var abcs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var abc = abcs.split("");
    var tbl = $("<table></table>").attr("id", "azpicker");
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
    $("#select > .ui-content").append(tbl);
    $.mobile.pageContainer.pagecontainer("change", $("#select"));
}

function selectPokemon(ltr) {
    //set the number of columns
    var cols = 3;
    // Loads the pokedex from data.js
    var pokedex = loadPokedex(true);
    var selection = [];
    var contents = [];
    // Looks through the pokedex for names starting with ltr and adds them to the selection collection
    for (var pokemon in pokedex) {
        var pmn = pokedex[pokemon];
        if (pmn.name.charAt(0) === ltr.charAt(0)) {
            selection.push(pmn);
        }
    }
    // Create the contents for each selection box
    for (var p in selection) {
        var tfig = $("<figure></figure>");
        var tpic = $("<img />");
        tpic.attr("src", imgSRC(selection[p].id));
        tpic.attr('class', 'pokesprite');
        var tfc = $("<figcaption></figcaption>");
        tfc.text("#" + selection[p].id + " " + selection[p].name);
        tfig.attr('id', selection[p].id);
        tpic.attr('id', selection[p].id);
        tfc.attr('id', selection[p].id);
        tfig.append(tpic);
        tfig.append(tfc);
        contents.push(tfig);
    }
    var t = drawTable(cols, contents.length, 'pokepicker');
    var tds = t.find('td');
    tds.each(function(index) {
        $(this).append(contents[index]);
    });
    t.wrapAll('<a href="#info"></a>');
    $('#azpicker').replaceWith(t);
    t.on("click", pokePicked);
}

function initDex() {

    $(".inputSpan").on("click", attachNumPad);
	var dustlevels = loadDustLevels();
	var dustselect = $('<select></select>').addClass('dustselect');
	var optionstring = "<select name=\"stardust\" id=\"sdv\" onchange=\"holdOn()\">\n";
	optionstring += "<option selected=\"selected\">SELECT</option>";
	for (entry in dustlevels) {
		optionstring += "<option value=\"" + entry + "\">" + entry + "</option>\n";
	}
	optionstring += "</select>\n";
	//document.getElementById("dustselect").innerHTML = optionstring;
}



function ltrPick(e) {

    if (e.target !== e.currentTarget) {
        var firstletter = e.target.id;
        selectPokemon(firstletter);
    }
    e.stopPropagation();
}