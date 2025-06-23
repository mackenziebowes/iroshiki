const pure_ink = {
	color0: "#333333", // black
	color1: "#DEDEDE", // err || red
	color2: "#DEDEDE", // success || green
	color3: "#DEDEDE", // warn || yellow
	color4: "#DEDEDE", // info || blue
	color5: "#DEDEDE", // misc a
	color6: "#DEDEDE", // misc b
	color7: "#DEDEDE", // white
	color8: "#ABABAB", // dark grey
	color9: "#EFEFEF", // misc c || bright red
	color10: "#EFEFEF", // misc d || bright green
	color11: "#EFEFEF", // misc e || bright yellow
	color12: "#EFEFEF", // misc f || bright bluew
	color13: "#EFEFEF", // misc g || bright misc a
	color14: "#EFEFEF", // misc h || bright misc b
	color15: "#EFEFEF", // bright white
} as const;

const maple_ink = {
	color0: "#C2313F", // black
	color1: "#F3EAD6", // err || red
	color2: "#F3EAD6", // success || green
	color3: "#F3EAD6", // warn || yellow
	color4: "#F3EAD6", // info || blue
	color5: "#F3EAD6", // misc a
	color6: "#F3EAD6", // misc b
	color7: "#F3EAD6", // white
	color8: "#DD3C4B", // dark grey
	color9: "#F8F4ED", // misc c || bright red
	color10: "#F8F4ED", // misc d || bright green
	color11: "#F8F4ED", // misc e || bright yellow
	color12: "#F8F4ED", // misc f || bright bluew
	color13: "#F8F4ED", // misc g || bright misc a
	color14: "#F8F4ED", // misc h || bright misc b
	color15: "#F8F4ED", // bright white
} as const;

const hayfield_ink = {
	color0: "#2E6B5D", // black
	color1: "#F3EAD6", // err || red
	color2: "#F3EAD6", // success || green
	color3: "#F3EAD6", // warn || yellow
	color4: "#F3EAD6", // info || blue
	color5: "#F3EAD6", // misc a
	color6: "#F3EAD6", // misc b
	color7: "#F3EAD6", // white
	color8: "#7FB0A5", // dark grey
	color9: "#F8F4ED", // misc c || bright red
	color10: "#F8F4ED", // misc d || bright green
	color11: "#F8F4ED", // misc e || bright yellow
	color12: "#F8F4ED", // misc f || bright bluew
	color13: "#F8F4ED", // misc g || bright misc a
	color14: "#F8F4ED", // misc h || bright misc b
	color15: "#F8F4ED", // bright white
} as const;

const bubblegum_ink = {
	color0: "#2C1C5F", // black
	color1: "#F6CBED", // err || red
	color2: "#F6CBED", // success || green
	color3: "#F6CBED", // warn || yellow
	color4: "#F6CBED", // info || blue
	color5: "#F6CBED", // misc a
	color6: "#F6CBED", // misc b
	color7: "#F6CBED", // white
	color8: "#564785", // dark grey
	color9: "#FFF0FC", // misc c || bright red
	color10: "#FFF0FC", // misc d || bright green
	color11: "#FFF0FC", // misc e || bright yellow
	color12: "#FFF0FC", // misc f || bright bluew
	color13: "#FFF0FC", // misc g || bright misc a
	color14: "#FFF0FC", // misc h || bright misc b
	color15: "#FFF0FC", // bright white
} as const;

const ink = {
	pure: pure_ink,
	maple: maple_ink,
	hayfield: hayfield_ink,
	bubblegum: bubblegum_ink,
};

export default ink;
