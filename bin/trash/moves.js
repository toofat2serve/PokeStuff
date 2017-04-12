function t_Move(moveType, moveName) {
	this.type = moveType;
	this.name = moveName;
}

function loadMoves() {
	var moves = [];
	moves[1] = new t_Move(1,"Pound");
	moves[2] = new t_Move(9,"Metal Claw");
	moves[3] = new t_Move(14,"Psycho Cut");
	moves[4] = new t_Move(11,"Water Gun");
	moves[5] = new t_Move(1,"Scratch");
	moves[6] = new t_Move(3,"Wing Attack");
	moves[7] = new t_Move(16,"Dragon Breath");
	moves[8] = new t_Move(18,"Bite");
	moves[9] = new t_Move(10,"Fire Fang");
	moves[10] = new t_Move(8,"Shadow Claw");
	moves[11] = new t_Move(18,"Feint Attack");
	moves[12] = new t_Move(4,"Poison Jab");
	moves[13] = new t_Move(14,"Zen Headbutt");
	moves[14] = new t_Move(9,"Steel Wing");
	moves[15] = new t_Move(5,"Mud-Slap");
	moves[16] = new t_Move(15,"Frost Breath");
	moves[17] = new t_Move(7,"Bug Bite");
	moves[18] = new t_Move(1,"Tackle");
	moves[19] = new t_Move(5,"Mud Shot");
	moves[20] = new t_Move(11,"Bubble");
	moves[21] = new t_Move(12,"Vine Whip");
	moves[22] = new t_Move(15,"Ice Shard");
	moves[23] = new t_Move(2,"Rock Smash");
	moves[24] = new t_Move(1,"Cut");
	moves[25] = new t_Move(4,"Poison Sting");
	moves[26] = new t_Move(12,"Razor Leaf");
	moves[27] = new t_Move(8,"Lick");
	moves[28] = new t_Move(13,"Spark");
	moves[29] = new t_Move(18,"Sucker Punch");
	moves[30] = new t_Move(14,"Confusion");
	moves[31] = new t_Move(4,"Acid");
	moves[32] = new t_Move(10,"Ember");
	moves[33] = new t_Move(6,"Rock Throw");
	moves[34] = new t_Move(3,"Peck");
	moves[35] = new t_Move(9,"Bullet Punch");
	moves[36] = new t_Move(2,"Low Kick");
	moves[37] = new t_Move(13,"Thunder Shock");
	moves[38] = new t_Move(1,"Quick Attack");
	moves[39] = new t_Move(2,"Karate Chop");
	moves[40] = new t_Move(7,"Fury Cutter");
	moves[41] = new t_Move(2,"Cross Chop");
	moves[42] = new t_Move(6,"Stone Edge");
	moves[43] = new t_Move(15,"Blizzard");
	moves[44] = new t_Move(1,"Body Slam");
	moves[45] = new t_Move(16,"Dragon Claw");
	moves[46] = new t_Move(3,"Hurricane");
	moves[47] = new t_Move(7,"Megahorn");
	moves[48] = new t_Move(12,"Solar Beam");
	moves[49] = new t_Move(12,"Power Whip");
	moves[50] = new t_Move(10,"Fire Blast");
	moves[51] = new t_Move(1,"Hyper Beam");
	moves[52] = new t_Move(5,"Earthquake");
	moves[53] = new t_Move(11,"Hydro Pump");
	moves[54] = new t_Move(13,"Thunder");
	moves[55] = new t_Move(4,"Gunk Shot");
	moves[56] = new t_Move(12,"Leaf Blade");
	moves[57] = new t_Move(4,"Sludge Bomb");
	moves[58] = new t_Move(10,"Heat Wave");
	moves[59] = new t_Move(17,"Moonblast");
	moves[60] = new t_Move(4,"Sludge Wave");
	moves[61] = new t_Move(2,"Brick Break");
	moves[62] = new t_Move(13,"Thunderbolt");
	moves[63] = new t_Move(12,"Petal Blizzard");
	moves[64] = new t_Move(14,"Psychic");
	moves[65] = new t_Move(14,"Psystrike");
	moves[66] = new t_Move(11,"Aqua Tail");
	moves[67] = new t_Move(17,"Play Rough");
	moves[68] = new t_Move(10,"Flamethrower");
	moves[69] = new t_Move(4,"Cross Poison");
	moves[70] = new t_Move(16,"Dragon Pulse");
	moves[71] = new t_Move(15,"Ice Beam");
	moves[72] = new t_Move(7,"Bug Buzz");
	moves[73] = new t_Move(1,"Hyper Fang");
	moves[74] = new t_Move(13,"Thunder Punch");
	moves[75] = new t_Move(7,"X-Scissor");
	moves[76] = new t_Move(12,"Seed Bomb");
	moves[77] = new t_Move(5,"Drill Run");
	moves[78] = new t_Move(14,"Rest");
	moves[79] = new t_Move(6,"Rock Slide");
	moves[80] = new t_Move(5,"Bone Club");
	moves[81] = new t_Move(9,"Flash Cannon");
	moves[82] = new t_Move(9,"Iron Head");
	moves[83] = new t_Move(14,"Psyshock");
	moves[84] = new t_Move(3,"Drill Peck");
	moves[85] = new t_Move(8,"Shadow Ball");
	moves[86] = new t_Move(7,"Signal Beam");
	moves[87] = new t_Move(1,"Stomp");
	moves[88] = new t_Move(10,"Fire Punch");
	moves[89] = new t_Move(10,"Flame Burst");
	moves[90] = new t_Move(2,"Submission");
	moves[91] = new t_Move(13,"Discharge");
	moves[92] = new t_Move(12,"Giga Drain");
	moves[93] = new t_Move(6,"Power Gem");
	moves[94] = new t_Move(11,"Scald");
	moves[95] = new t_Move(2,"Low Sweep");
	moves[96] = new t_Move(17,"Dazzling Gleam");
	moves[97] = new t_Move(18,"Dark Pulse");
	moves[98] = new t_Move(15,"Ice Punch");
	moves[99] = new t_Move(18,"Night Slash");
	moves[100] = new t_Move(5,"Dig");
	moves[101] = new t_Move(13,"Parabolic Charge");
	moves[102] = new t_Move(8,"Shadow Punch");
	moves[103] = new t_Move(1,"Vice Grip");
	moves[104] = new t_Move(4,"Sludge");
	moves[105] = new t_Move(5,"Mud Bomb");
	moves[106] = new t_Move(1,"Horn Attack");
	moves[107] = new t_Move(9,"Magnet Bomb");
	moves[108] = new t_Move(11,"Aqua Jet");
	moves[109] = new t_Move(11,"Water Pulse");
	moves[110] = new t_Move(14,"Psybeam");
	moves[111] = new t_Move(4,"Poison Fang");
	moves[112] = new t_Move(11,"Brine");
	moves[113] = new t_Move(11,"Bubble Beam");
	moves[114] = new t_Move(3,"Aerial Ace");
	moves[115] = new t_Move(5,"Bulldoze");
	moves[116] = new t_Move(1,"Swift");
	moves[117] = new t_Move(3,"Air Cutter");
	moves[118] = new t_Move(14,"Heart Stamp");
	moves[119] = new t_Move(6,"Ancient Power");
	moves[120] = new t_Move(6,"Rock Tomb");
	moves[121] = new t_Move(8,"Ominous Wind");
	moves[122] = new t_Move(16,"Twister");
	moves[123] = new t_Move(17,"Draining Kiss");
	moves[124] = new t_Move(10,"Flame Wheel");
	moves[125] = new t_Move(1,"Struggle");
	moves[126] = new t_Move(10,"Flame Charge");
	moves[127] = new t_Move(8,"Shadow Sneak");
	moves[128] = new t_Move(12,"Mega Drain");
	moves[129] = new t_Move(15,"Icy Wind");
	moves[130] = new t_Move(17,"Disarming Voice");
	moves[131] = new t_Move(1,"Wrap");
	return(moves);
}