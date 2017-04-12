
function hexIt(str)
{
	var hex = str;
	switch(str) {
		case 10:
			hex = "A";
			break;
		case 11:
			hex = "B";
			break;
		case 12:
			hex = "C";
			break;
		case 13:
			hex = "D";
			break;
		case 14:
			hex = "E";
			break;
		case 15:
			hex = "F";
			break;
			}
			return hex;
}

function submitthis() {
	var pokedex = loadPokedex();
	var id = document.getElementById('pokename').value;
	for (p in pokedex)
	{
		if (pokedex[p].id === id)
		{
			var pokename = pokedex[p].name;
			var atk = pokedex[p].atk;
			var def = pokedex[p].def;
			var sta = pokedex[p].sta;
		}
	}
	var cp = document.getElementById('cpv').value;
	var hp = document.getElementById('hpv').value;
	var sd = Number(document.getElementById('sdv').value);
	var pu = document.getElementById('puv').checked;
	var a = document.getElementById('appraisalv');
	var app = Number(a.options[a.selectedIndex].value);
	var atkhi = document.getElementById('atkv').checked;
	var defhi = document.getElementById('defv').checked;
	var stahi = document.getElementById('stav').checked;
	var s = document.getElementById('statsv');
	var stats = Number(s.options[s.selectedIndex].value);
	
	var ivub;
	var ivlb;
	var statub;
	var statlb;
	var attub;
	var attlb;
	var defub;
	var deflb;
	var staub;
	var stalb;
	var strstatus="";
	var minlevel;
	var maxlevel;
	var stepincrement;
	var dustlevels;
	var cplevels;
	var validsarray;
	var lvl;
	
	switch(app) {
		case 0:
			ivub =100;
			ivlb = 0;
			break;
		case 1:
			ivub = 100;
			ivlb = 81;
			break;
		case 2:
			ivub =80;
			ivlb = 67;
			break;
		case 3:
			ivub = 66;
			ivlb = 51;
			break;
		case 4:
			ivub = 50;
			ivlb = 0;
			break;
	}
	switch(stats) {
		case 0:
			statub = 15;
			statlb = 0;
			break;
		case 1:
			statub = 15;
			statlb = 15;
			break;
		case 2:
			statub = 14;
			statlb = 13;
			break;
		case 3:
			statub = 12;
			statlb = 8;
			break;
		case 4:
			statub = 7;
			statlb = 0;
			break;
	}
	if (atkhi === false ) {
		attub = 15;
		attlb = 0;
		strstatus += "0";
	}
	else {
		attub = statub;
		attlb = statlb;
		strstatus += "1";
	}
	if (defhi === false ) {
		defub = 15;
		deflb = 0;
		strstatus += "0";
	}
	else {
		defub = statub;
		deflb = statlb;
		strstatus += "1";
	}
	if (stahi === false ) {
		staub = 15;
		stalb = 0;
		strstatus += "0";
	}
	else {
		staub = statub;
		stalb = statlb;
		strstatus += "1";
	}
	stepincrement = pu === true ? 0.5 : 1;
	dustlevels = loadDustLevels();
	minlevel = dustlevels[sd];
	maxlevel = minlevel + 1.5;
	cplevels = loadCPScale();
	validsarray = [];
	for (lvl = Number(minlevel); lvl <= Number(maxlevel); lvl += stepincrement) {	
		var cpx = cplevels[lvl];
		for (var staiv = stalb; staiv <= staub; staiv++) {
			var testhp = Math.floor((Number(sta) + staiv) * cpx);
			var hpmatch = testhp === hp;
			if (hpmatch) {
				for (var attiv = attlb; attiv <= attub; attiv++) {
					for (var defiv = deflb; defiv <= defub; defiv++) {
						var attcomp = (Number(atk) + attiv) * cpx;
						var defcomp = (Number(def) + defiv) * cpx;
						var stacomp = (Number(sta) + staiv) * cpx;
						var cpc = Math.max( 10, Math.floor( 0.1 * Math.pow( stacomp, 0.5 ) * attcomp * Math.pow( defcomp, 0.5 ) ) );
						if (cpc === cp) {	
							var ivstr = "";
							if (stats !== 0) {
								ivstr += (attiv >= defiv) && (attiv >= staiv) ?  "1" : "0";
								ivstr += (defiv >= attiv) && (defiv >= staiv) ? "1" : "0";
								ivstr += (staiv >= attiv) && (staiv >= defiv	) ? "1" : "0";
							}	
							if ((ivstr === strstatus) || (stats === 0)) {
								var ivp = ((attiv + defiv + staiv) / 45)*100;
								if ((ivp <= ivub) && (ivp >= ivlb)) {
									var validset = new t_Valid(lvl,attiv,defiv,staiv);
									validsarray.push(validset);
								}
							}
						}
					}
				}
			}
		}
	}
	var numvalids = validsarray.length;
	var myTable = document.getElementById("calc");
	var rename = "";
	var newHeadRow = document.createElement("tr");
	var newResultRow = document.createElement("tr");
	if (myTable.rows.length > 6) {
		myTable.deleteRow(-1);
		myTable.deleteRow(-1);
		}
	if (numvalids === 0) {
		var th1 = document.createElement("th");
		th1.innerText = "Result";
		th1.colSpan = 8;
		newHeadRow.append(th1);
		var td1 = document.createElement("td");
		td1.innerText = "Unknown";
		td1.colSpan = 8;
		newResultRow.append(td1);
		myTable.append(newHeadRow);
		myTable.append(newResultRow);
	 rename = pokename;
	}
	else if (numvalids === 1) {
		for (set in validsarray)	{		
			var th1 = document.createElement("th");
			th1.innerText = "Level";
			th1.colSpan = 2;
			var th2 = document.createElement("th");
			th2.innerText = "ATK/DEF/STA";
			th2.colSpan = 4;
			var th3 = document.createElement("th");
			th3.innerText = "% Perfect";
			th3.colSpan = 2;
			newHeadRow.append(th1);
			newHeadRow.append(th3);
			newHeadRow.append(th2);
	  
	  atk1 = validsarray[set].atk;
	  def1 = validsarray[set].def;
	  sta1 = validsarray[set].sta;
			var adsstr = atk1 + " / " + def1 + " / " + sta1;
			var td1 = document.createElement("td");
			td1.innerText = validsarray[set].lvl;
			td1.colSpan = 2;
			var td2 = document.createElement("td");
			td2.innerText = adsstr;
			td2.colSpan = 4;
			var td3 = document.createElement("td");
			td3.innerText = validsarray[set].per.toFixed(2) + "%";
			td3.colSpan = 2;
			newResultRow.append(td1);
			newResultRow.append(td3);
			newResultRow.append(td2);
			myTable.append(newHeadRow);
			myTable.append(newResultRow);	
	  var hexcode = hexIt(atk1) + "" + hexIt(def1) + "" + hexIt(sta1);
 	 rename = validsarray[set].per.toFixed(2) + "% " + hexcode;
		}
	}
	else {
		maxiv = 0.00;
		miniv = 100.00;
		runtot = 0;
		for (set in validsarray)	{
			var ivp = validsarray[set].per;
			runtot += ivp;
			maxiv = Math.max(maxiv, ivp);
			miniv = Math.min(miniv, ivp);	
		}
		maxiv = parseFloat(maxiv).toFixed(2);
		miniv = parseFloat(miniv).toFixed(2);
		avgiv = Math.round(runtot/numvalids*100);
		var th1 = document.createElement("th");
		th1.innerText = "Combinations";
		th1.colSpan = 4;
		var th2 = document.createElement("th");
		th2.innerText = "Min Perf. %";
		th2.colSpan = 2;
		var th3 = document.createElement("th");
		th3.innerText = "Max Perf. %";
		th3.colSpan = 2;
		newHeadRow.append(th1);
		newHeadRow.append(th2);
		newHeadRow.append(th3);
			var td1 = document.createElement("td");
		td1.innerText = numvalids;
		td1.colSpan = 4;
		var td2 = document.createElement("td");
		td2.innerText = miniv;
		td2.colSpan = 2;
		var td3 = document.createElement("td");
		td3.innerText = maxiv;
		td3.colSpan = 2;
		newResultRow.append(td1);
		newResultRow.append(td2);
		newResultRow.append(td3);
		myTable.append(newHeadRow);
		myTable.append(newResultRow);	
		rename = "C"	+ numvalids + ":" + Math.round(miniv,0) + "-" + Math.round(maxiv);
		}
 var ok = tk.setClip(rename,false);
	tk.flash(rename);
}

function setValue(ele,val) {
		document.getElementById(ele).value = val;
	}
function setbox(ele,val) {
		var bool = val === 1 ? true : false;
		document.getElementById(ele).checked = bool;
}
function loadsingle() {
	setValue("cpv",494);
	setValue("hpv",57);
	setValue("sdv",3000);
	setbox("atkv",1);
	setbox("defv",1);
	setbox("stav",1);
	setValue("pokename",1);
	setValue("appraisalv",4);
	setValue("statsv",4);
}
function loadmulti() {
	setValue("cpv",258);
	setValue("hpv",20);
	setValue("sdv",2500);
	setbox("atkv",0);
	setbox("defv",0);
	setbox("stav",1);
	setValue("pokename",50);
	setValue("appraisalv",1);
	setValue("statsv",1);
}
function loadfail() {
	setValue("cpv",494);
 setValue("hpv",0);
	setValue("sdv",3000);
	setbox("atkv");
	setbox("defv");
	setbox("stav");
	setValue("pokename",1);
	setValue("appraisalv",4);
	setValue("statsv",4);
}

function t_Pokemon(pokeID, pokeName, pokeATT, pokeDEF, pokeSTA, pokeType1, pokeType2, pokeCandyType, eggID, pokeEvoTo, pokeCandyToEvo, pokeDesc) {
	this.id = pokeID;
	this.name = pokeName;
	this.atk = pokeATT;
	this.def = pokeDEF;
	this.sta = pokeSTA;
	this.type1 = pokeType1;
	this.type2 = pokeType2;
	this.candyType = pokeCandyType;
	this.eggID = eggID;
	this.evoTo = pokeEvoTo;
	this.candyToEvo = pokeCandyToEvo;
	this.description = pokeDesc;
}

function t_Valid(vlvl,vatk,vdef,vsta) {
	this.lvl = vlvl;
	this.atk = vatk;
	this.def = vdef;
	this.sta = vsta;
	this.per = ((this.atk + this.def + this.sta)/45)*100;
}

