function loadPokedex() {
	var pokedex = [];
	pokedex[1] = new t_Pokemon(1,"Bulbasaur",118,118,90);
	pokedex[2] = new t_Pokemon(2,"Ivysaur",151,151,120);
	pokedex[3] = new t_Pokemon(3,"Venusaur",198,198,160);
	pokedex[4] = new t_Pokemon(4,"Charmander",116,96,78);
	pokedex[5] = new t_Pokemon(5,"Charmeleon",158,129,116);
	pokedex[6] = new t_Pokemon(6,"Charizard",223,176,156);
	pokedex[7] = new t_Pokemon(7,"Squirtle",94,122,88);
	pokedex[8] = new t_Pokemon(8,"Wartortle",126,155,118);
	pokedex[9] = new t_Pokemon(9,"Blastoise",171,210,158);
	pokedex[10] = new t_Pokemon(10,"Caterpie",55,62,90);
	pokedex[11] = new t_Pokemon(11,"Metapod",45,94,100);
	pokedex[12] = new t_Pokemon(12,"Butterfree",167,151,120);
	pokedex[13] = new t_Pokemon(13,"Weedle",63,55,80);
	pokedex[14] = new t_Pokemon(14,"Kakuna",46,86,90);
	pokedex[15] = new t_Pokemon(15,"Beedrill",169,150,130);
	pokedex[16] = new t_Pokemon(16,"Pidgey",85,76,80);
	pokedex[17] = new t_Pokemon(17,"Pidgeotto",117,108,126);
	pokedex[18] = new t_Pokemon(18,"Pidgeot",166,157,166);
	pokedex[19] = new t_Pokemon(19,"Rattata",103,70,60);
	pokedex[20] = new t_Pokemon(20,"Raticate",161,144,110);
	pokedex[21] = new t_Pokemon(21,"Spearow",112,61,80);
	pokedex[22] = new t_Pokemon(22,"Fearow",182,135,130);
	pokedex[23] = new t_Pokemon(23,"Ekans",110,102,70);
	pokedex[24] = new t_Pokemon(24,"Arbok",167,158,120);
	pokedex[25] = new t_Pokemon(25,"Pikachu",112,101,70);
	pokedex[26] = new t_Pokemon(26,"Raichu",193,165,120);
	pokedex[27] = new t_Pokemon(27,"Sandshrew",126,145,100);
	pokedex[28] = new t_Pokemon(28,"Sandslash",182,202,150);
	pokedex[29] = new t_Pokemon(29,"Nidoran",86,94,110);
	pokedex[30] = new t_Pokemon(30,"Nidorina",117,126,140);
	pokedex[31] = new t_Pokemon(31,"Nidoqueen",180,174,180);
	pokedex[32] = new t_Pokemon(32,"Nidoran",105,76,92);
	pokedex[33] = new t_Pokemon(33,"Nidorino",137,112,122);
	pokedex[34] = new t_Pokemon(34,"Nidoking",204,157,162);
	pokedex[35] = new t_Pokemon(35,"Clefairy",107,116,140);
	pokedex[36] = new t_Pokemon(36,"Clefable",178,171,190);
	pokedex[37] = new t_Pokemon(37,"Vulpix",96,122,76);
	pokedex[38] = new t_Pokemon(38,"Ninetales",169,204,146);
	pokedex[39] = new t_Pokemon(39,"Jigglypuff",80,44,230);
	pokedex[40] = new t_Pokemon(40,"Wigglytuff",156,93,280);
	pokedex[41] = new t_Pokemon(41,"Zubat",83,76,80);
	pokedex[42] = new t_Pokemon(42,"Golbat",161,153,150);
	pokedex[43] = new t_Pokemon(43,"Oddish",131,116,90);
	pokedex[44] = new t_Pokemon(44,"Gloom",153,139,120);
	pokedex[45] = new t_Pokemon(45,"Vileplume",202,170,150);
	pokedex[46] = new t_Pokemon(46,"Paras",121,99,70);
	pokedex[47] = new t_Pokemon(47,"Parasect",165,146,120);
	pokedex[48] = new t_Pokemon(48,"Venonat",100,102,120);
	pokedex[49] = new t_Pokemon(49,"Venomoth",179,150,140);
	pokedex[50] = new t_Pokemon(50,"Diglett",109,88,20);
	pokedex[51] = new t_Pokemon(51,"Dugtrio",167,147,70);
	pokedex[52] = new t_Pokemon(52,"Meowth",92,81,80);
	pokedex[53] = new t_Pokemon(53,"Persian",150,139,130);
	pokedex[54] = new t_Pokemon(54,"Psyduck",122,96,100);
	pokedex[55] = new t_Pokemon(55,"Golduck",191,163,160);
	pokedex[56] = new t_Pokemon(56,"Mankey",148,87,80);
	pokedex[57] = new t_Pokemon(57,"Primeape",207,144,130);
	pokedex[58] = new t_Pokemon(58,"Growlithe",136,96,110);
	pokedex[59] = new t_Pokemon(59,"Arcanine",227,166,180);
	pokedex[60] = new t_Pokemon(60,"Poliwag",101,82,80);
	pokedex[61] = new t_Pokemon(61,"Poliwhirl",130,130,130);
	pokedex[62] = new t_Pokemon(62,"Poliwrath",182,187,180);
	pokedex[63] = new t_Pokemon(63,"Abra",195,103,50);
	pokedex[64] = new t_Pokemon(64,"Kadabra",232,138,80);
	pokedex[65] = new t_Pokemon(65,"Alakazam",271,194,110);
	pokedex[66] = new t_Pokemon(66,"Machop",137,88,140);
	pokedex[67] = new t_Pokemon(67,"Machoke",177,130,160);
	pokedex[68] = new t_Pokemon(68,"Machamp",234,162,180);
	pokedex[69] = new t_Pokemon(69,"Bellsprout",139,64,100);
	pokedex[70] = new t_Pokemon(70,"Weepinbell",172,95,130);
	pokedex[71] = new t_Pokemon(71,"Victreebel",207,138,160);
	pokedex[72] = new t_Pokemon(72,"Tentacool",97,182,80);
	pokedex[73] = new t_Pokemon(73,"Tentacruel",166,237,160);
	pokedex[74] = new t_Pokemon(74,"Geodude",132,163,80);
	pokedex[75] = new t_Pokemon(75,"Graveler",164,196,110);
	pokedex[76] = new t_Pokemon(76,"Golem",211,229,160);
	pokedex[77] = new t_Pokemon(77,"Ponyta",170,132,100);
	pokedex[78] = new t_Pokemon(78,"Rapidash",207,167,130);
	pokedex[79] = new t_Pokemon(79,"Slowpoke",109,109,180);
	pokedex[80] = new t_Pokemon(80,"Slowbro",177,194,190);
	pokedex[81] = new t_Pokemon(81,"Magnemite",165,128,50);
	pokedex[82] = new t_Pokemon(82,"Magneton",223,182,100);
	pokedex[83] = new t_Pokemon(83,"Farfetchd",124,118,104);
	pokedex[84] = new t_Pokemon(84,"Doduo",158,88,70);
	pokedex[85] = new t_Pokemon(85,"Dodrio",218,145,120);
	pokedex[86] = new t_Pokemon(86,"Seel",85,128,130);
	pokedex[87] = new t_Pokemon(87,"Dewgong",139,184,180);
	pokedex[88] = new t_Pokemon(88,"Grimer",135,90,160);
	pokedex[89] = new t_Pokemon(89,"Muk",190,184,210);
	pokedex[90] = new t_Pokemon(90,"Shellder",116,168,60);
	pokedex[91] = new t_Pokemon(91,"Cloyster",186,323,100);
	pokedex[92] = new t_Pokemon(92,"Gastly",186,70,60);
	pokedex[93] = new t_Pokemon(93,"Haunter",223,112,90);
	pokedex[94] = new t_Pokemon(94,"Gengar",261,156,120);
	pokedex[95] = new t_Pokemon(95,"Onix",85,288,70);
	pokedex[96] = new t_Pokemon(96,"Drowzee",89,158,120);
	pokedex[97] = new t_Pokemon(97,"Hypno",144,215,170);
	pokedex[98] = new t_Pokemon(98,"Krabby",181,156,60);
	pokedex[99] = new t_Pokemon(99,"Kingler",240,214,110);
	pokedex[100] = new t_Pokemon(100,"Voltorb",109,114,80);
	pokedex[101] = new t_Pokemon(101,"Electrode",173,179,120);
	pokedex[102] = new t_Pokemon(102,"Exeggcute",107,140,120);
	pokedex[103] = new t_Pokemon(103,"Exeggutor",233,158,190);
	pokedex[104] = new t_Pokemon(104,"Cubone",90,165,100);
	pokedex[105] = new t_Pokemon(105,"Marowak",144,200,120);
	pokedex[106] = new t_Pokemon(106,"Hitmonlee",224,211,100);
	pokedex[107] = new t_Pokemon(107,"Hitmonchan",193,212,100);
	pokedex[108] = new t_Pokemon(108,"Lickitung",108,137,180);
	pokedex[109] = new t_Pokemon(109,"Koffing",119,164,80);
	pokedex[110] = new t_Pokemon(110,"Weezing",174,221,130);
	pokedex[111] = new t_Pokemon(111,"Rhyhorn",140,157,160);
	pokedex[112] = new t_Pokemon(112,"Rhydon",222,206,210);
	pokedex[113] = new t_Pokemon(113,"Chansey",60,176,500);
	pokedex[114] = new t_Pokemon(114,"Tangela",183,205,130);
	pokedex[115] = new t_Pokemon(115,"Kangaskhan",181,165,210);
	pokedex[116] = new t_Pokemon(116,"Horsea",129,125,60);
	pokedex[117] = new t_Pokemon(117,"Seadra",187,182,110);
	pokedex[118] = new t_Pokemon(118,"Goldeen",123,115,90);
	pokedex[119] = new t_Pokemon(119,"Seaking",175,154,160);
	pokedex[120] = new t_Pokemon(120,"Staryu",137,112,60);
	pokedex[121] = new t_Pokemon(121,"Starmie",210,184,120);
	pokedex[122] = new t_Pokemon(122,"Mr_mime",192,233,80);
	pokedex[123] = new t_Pokemon(123,"Scyther",218,170,140);
	pokedex[124] = new t_Pokemon(124,"Jynx",223,182,130);
	pokedex[125] = new t_Pokemon(125,"Electabuzz",198,173,130);
	pokedex[126] = new t_Pokemon(126,"Magmar",206,169,130);
	pokedex[127] = new t_Pokemon(127,"Pinsir",238,197,130);
	pokedex[128] = new t_Pokemon(128,"Tauros",198,197,150);
	pokedex[129] = new t_Pokemon(129,"Magikarp",29,102,40);
	pokedex[130] = new t_Pokemon(130,"Gyarados",237,197,190);
	pokedex[131] = new t_Pokemon(131,"Lapras",165,180,260);
	pokedex[132] = new t_Pokemon(132,"Ditto",91,91,96);
	pokedex[133] = new t_Pokemon(133,"Eevee",104,121,110);
	pokedex[134] = new t_Pokemon(134,"Vaporeon",205,177,260);
	pokedex[135] = new t_Pokemon(135,"Jolteon",232,201,130);
	pokedex[136] = new t_Pokemon(136,"Flareon",246,204,130);
	pokedex[137] = new t_Pokemon(137,"Porygon",153,139,130);
	pokedex[138] = new t_Pokemon(138,"Omanyte",155,174,70);
	pokedex[139] = new t_Pokemon(139,"Omastar",207,227,140);
	pokedex[140] = new t_Pokemon(140,"Kabuto",148,162,60);
	pokedex[141] = new t_Pokemon(141,"Kabutops",220,203,120);
	pokedex[142] = new t_Pokemon(142,"Aerodactyl",221,164,160);
	pokedex[143] = new t_Pokemon(143,"Snorlax",190,190,320);
	pokedex[144] = new t_Pokemon(144,"Articuno",192,249,180);
	pokedex[145] = new t_Pokemon(145,"Zapdos",253,188,180);
	pokedex[146] = new t_Pokemon(146,"Moltres",251,184,180);
	pokedex[147] = new t_Pokemon(147,"Dratini",119,94,82);
	pokedex[148] = new t_Pokemon(148,"Dragonair",163,138,122);
	pokedex[149] = new t_Pokemon(149,"Dragonite",263,201,182);
	pokedex[150] = new t_Pokemon(150,"Mewtwo",330,200,212);
	pokedex[151] = new t_Pokemon(151,"Mew",210,210,200);
	pokedex[152] = new t_Pokemon(152,"Chikorita",92,122,90);
	pokedex[153] = new t_Pokemon(153,"Bayleef",122,155,120);
	pokedex[154] = new t_Pokemon(154,"Meganium",168,202,160);
	pokedex[155] = new t_Pokemon(155,"Cyndaquil",116,96,78);
	pokedex[156] = new t_Pokemon(156,"Quilava",158,129,116);
	pokedex[157] = new t_Pokemon(157,"Typhlosion",223,176,156);
	pokedex[158] = new t_Pokemon(158,"Totodile",117,116,100);
	pokedex[159] = new t_Pokemon(159,"Croconaw",150,151,130);
	pokedex[160] = new t_Pokemon(160,"Feraligatr",205,197,170);
	pokedex[161] = new t_Pokemon(161,"Sentret",79,77,70);
	pokedex[162] = new t_Pokemon(162,"Furret",148,130,170);
	pokedex[163] = new t_Pokemon(163,"Hoothoot",67,101,120);
	pokedex[164] = new t_Pokemon(164,"Noctowl",145,179,200);
	pokedex[165] = new t_Pokemon(165,"Ledyba",72,142,80);
	pokedex[166] = new t_Pokemon(166,"Ledian",107,209,110);
	pokedex[167] = new t_Pokemon(167,"Spinarak",105,73,80);
	pokedex[168] = new t_Pokemon(168,"Ariados",161,128,140);
	pokedex[169] = new t_Pokemon(169,"Crobat",194,178,170);
	pokedex[170] = new t_Pokemon(170,"Chinchou",106,106,150);
	pokedex[171] = new t_Pokemon(171,"Lanturn",146,146,250);
	pokedex[172] = new t_Pokemon(172,"Pichu",77,63,40);
	pokedex[173] = new t_Pokemon(173,"Cleffa",75,91,100);
	pokedex[174] = new t_Pokemon(174,"Igglybuff",69,34,180);
	pokedex[175] = new t_Pokemon(175,"Togepi",67,116,70);
	pokedex[176] = new t_Pokemon(176,"Togetic",139,191,110);
	pokedex[177] = new t_Pokemon(177,"Natu",134,89,80);
	pokedex[178] = new t_Pokemon(178,"Xatu",192,146,130);
	pokedex[179] = new t_Pokemon(179,"Mareep",114,82,110);
	pokedex[180] = new t_Pokemon(180,"Flaaffy",145,112,140);
	pokedex[181] = new t_Pokemon(181,"Ampharos",211,172,180);
	pokedex[182] = new t_Pokemon(182,"Bellossom",169,189,150);
	pokedex[183] = new t_Pokemon(183,"Marill",37,93,140);
	pokedex[184] = new t_Pokemon(184,"Azumarill",112,152,200);
	pokedex[185] = new t_Pokemon(185,"Sudowoodo",167,198,140);
	pokedex[186] = new t_Pokemon(186,"Politoed",174,192,180);
	pokedex[187] = new t_Pokemon(187,"Hoppip",67,101,70);
	pokedex[188] = new t_Pokemon(188,"Skiploom",91,127,110);
	pokedex[189] = new t_Pokemon(189,"Jumpluff",118,197,150);
	pokedex[190] = new t_Pokemon(190,"Aipom",136,112,110);
	pokedex[191] = new t_Pokemon(191,"Sunkern",55,55,60);
	pokedex[192] = new t_Pokemon(192,"Sunflora",185,148,150);
	pokedex[193] = new t_Pokemon(193,"Yanma",154,94,130);
	pokedex[194] = new t_Pokemon(194,"Wooper",75,75,110);
	pokedex[195] = new t_Pokemon(195,"Quagsire",152,152,190);
	pokedex[196] = new t_Pokemon(196,"Espeon",261,194,130);
	pokedex[197] = new t_Pokemon(197,"Umbreon",126,250,190);
	pokedex[198] = new t_Pokemon(198,"Murkrow",175,87,120);
	pokedex[199] = new t_Pokemon(199,"Slowking",177,194,190);
	pokedex[200] = new t_Pokemon(200,"Misdreavus",167,167,120);
	pokedex[201] = new t_Pokemon(201,"Unown",136,91,96);
	pokedex[202] = new t_Pokemon(202,"Wobbuffet",60,106,380);
	pokedex[203] = new t_Pokemon(203,"Girafarig",182,133,140);
	pokedex[204] = new t_Pokemon(204,"Pineco",108,146,100);
	pokedex[205] = new t_Pokemon(205,"Forretress",161,242,150);
	pokedex[206] = new t_Pokemon(206,"Dunsparce",131,131,200);
	pokedex[207] = new t_Pokemon(207,"Gligar",143,204,130);
	pokedex[208] = new t_Pokemon(208,"Steelix",148,333,150);
	pokedex[209] = new t_Pokemon(209,"Snubbull",137,89,120);
	pokedex[210] = new t_Pokemon(210,"Granbull",212,137,180);
	pokedex[211] = new t_Pokemon(211,"Qwilfish",184,148,130);
	pokedex[212] = new t_Pokemon(212,"Scizor",236,191,140);
	pokedex[213] = new t_Pokemon(213,"Shuckle",17,396,40);
	pokedex[214] = new t_Pokemon(214,"Heracross",234,189,160);
	pokedex[215] = new t_Pokemon(215,"Sneasel",189,157,110);
	pokedex[216] = new t_Pokemon(216,"Teddiursa",142,93,120);
	pokedex[217] = new t_Pokemon(217,"Ursaring",236,144,180);
	pokedex[218] = new t_Pokemon(218,"Slugma",118,71,80);
	pokedex[219] = new t_Pokemon(219,"Magcargo",139,209,100);
	pokedex[220] = new t_Pokemon(220,"Swinub",90,74,100);
	pokedex[221] = new t_Pokemon(221,"Piloswine",181,147,200);
	pokedex[222] = new t_Pokemon(222,"Corsola",118,156,110);
	pokedex[223] = new t_Pokemon(223,"Remoraid",127,69,70);
	pokedex[224] = new t_Pokemon(224,"Octillery",197,141,150);
	pokedex[225] = new t_Pokemon(225,"Delibird",128,90,90);
	pokedex[226] = new t_Pokemon(226,"Mantine",148,260,130);
	pokedex[227] = new t_Pokemon(227,"Skarmory",148,260,130);
	pokedex[228] = new t_Pokemon(228,"Houndour",152,93,90);
	pokedex[229] = new t_Pokemon(229,"Houndoom",224,159,150);
	pokedex[230] = new t_Pokemon(230,"Kingdra",194,194,150);
	pokedex[231] = new t_Pokemon(231,"Phanpy",107,107,180);
	pokedex[232] = new t_Pokemon(232,"Donphan",214,214,180);
	pokedex[234] = new t_Pokemon(234,"Stantler",192,132,146);
	pokedex[235] = new t_Pokemon(235,"Smeargle",40,88,110);
	pokedex[236] = new t_Pokemon(236,"Tyrogue",64,64,70);
	pokedex[237] = new t_Pokemon(237,"Hitmontop",173,214,100);
	pokedex[238] = new t_Pokemon(238,"Smoochum",153,116,90);
	pokedex[239] = new t_Pokemon(239,"Elekid",135,110,90);
	pokedex[240] = new t_Pokemon(240,"Magby",151,108,90);
	pokedex[241] = new t_Pokemon(241,"Miltank",157,211,190);
	pokedex[242] = new t_Pokemon(242,"Blissey",129,229,510);
	pokedex[243] = new t_Pokemon(243,"Raikou",241,210,180);
	pokedex[244] = new t_Pokemon(244,"Entei",235,176,230);
	pokedex[245] = new t_Pokemon(245,"Suicune",180,235,200);
	pokedex[246] = new t_Pokemon(246,"Larvitar",115,93,100);
	pokedex[247] = new t_Pokemon(247,"Pupitar",155,133,140);
	pokedex[248] = new t_Pokemon(248,"Tyranitar",251,212,200);
	pokedex[249] = new t_Pokemon(249,"Lugia",193,323,212);
	pokedex[250] = new t_Pokemon(250,"Ho_oh",263,301,212);
	pokedex[251] = new t_Pokemon(251,"Celebi",210,210,200);
	pokedex.sort(function(a,b) { return a.name.localeCompare(b.name); });
	return pokedex;
}