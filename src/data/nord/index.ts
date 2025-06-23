import type { InputTheme } from "../../types";

const base = {
	color0: "#2e3440", // black
	color1: "#bf616a", // err || red
	color2: "#a3be8c", // success || green
	color3: "#ebcb8b", // warn || yellow
	color4: "#88c0d0", // info || blue
	color5: "#81a1c1", // misc a
	color6: "#d08770", // misc b
	color7: "#e5e9f0", // white
	color8: "#3b4252", // dark grey
	color9: "#81a1c1", // misc c || bright red
	color10: "#5e81ac", // misc d || bright green
	color11: "#ebcb8b", // misc e || bright yellow
	color12: "#8fbcbb", // misc f || bright blue
	color13: "#5e81ac", // misc g || bright misc a
	color14: "#b48ead", // misc h || bright misc b
	color15: "#eceff4", // bright white
};

const light = {
	color0: "#e5e9f0", // black
	color1: "#bf616a", // err || red
	color2: "#a3be8c", // success || green
	color3: "#ebcb8b", // warn || yellow
	color4: "#88c0d0", // info || blue
	color5: "#81a1c1", // misc a
	color6: "#d08770", // misc b
	color7: "#2e3440", // white
	color8: "#eceff4", // dark grey
	color9: "#bf616a", // misc c || bright red
	color10: "#a3be8c", // misc d || bright green
	color11: "#ebcb8b", // misc e || bright yellow
	color12: "#8fbcbb", // misc f || bright blue
	color13: "#5e81ac", // misc g || bright misc a
	color14: "#b48ead", // misc h || bright misc b
	color15: "#3b4252", // bright white
};

const nordDarkToneTokens = [
	"#2e3440", // black
	"#e5e9f0", // white
	"#3b4252", // dark grey
	"#eceff4", // bright white
] as const;

const nordLightToneTokens = [
	"#e5e9f0", // black
	"#2e3440", // white
	"#eceff4", // dark grey
	"#3b4252", // bright white
] as const;

const nordColorTokens = [
	"#bf616a", // err || red
	"#a3be8c", // success || green
	"#ebcb8b", // warn || yellow
	"#88c0d0", // info || blue
	"#81a1c1", // misc a
	"#d08770", // misc b
	"#bf616a", // misc c || bright red
	"#a3be8c", // misc d || bright green
	"#ebcb8b", // misc e || bright yellow
	"#8fbcbb", // misc f || bright blue
	"#5e81ac", // misc g || bright misc a
	"#b48ead", // misc h || bright misc b
] as const;

const shiftToToken = (index: number, number: number): string => {
	if (number > nordColorTokens.length || number < -nordColorTokens.length) {
		throw new Error("Shift too large");
	}
	if (index < 0 || index >= nordColorTokens.length) {
		throw new Error("Index out of bounds");
	}
	const wrappedVal =
		(nordColorTokens.length * 2 + index + number) % nordColorTokens.length;
	return nordColorTokens[wrappedVal] as string;
};

function nordShift(shift_amount: number, lightmode?: boolean) {
	const shiftedTheme: InputTheme = {
		color0: "", // black
		color1: "", // err || red
		color2: "", // success || green
		color3: "", // warn || yellow
		color4: "", // info || blue
		color5: "", // misc a
		color6: "", // misc b
		color7: "", // white
		color8: "", // dark grey
		color9: "", // misc c || bright red
		color10: "", // misc d || bright green
		color11: "", // misc e || bright yellow
		color12: "", // misc f || bright bluew
		color13: "", // misc g || bright misc a
		color14: "", // misc h || bright misc b
		color15: "", // bright white
	};
	shiftedTheme.color0 = lightmode
		? nordLightToneTokens[0]
		: nordDarkToneTokens[0];
	shiftedTheme.color1 = shiftToToken(0, shift_amount);
	shiftedTheme.color2 = shiftToToken(1, shift_amount);
	shiftedTheme.color3 = shiftToToken(2, shift_amount);
	shiftedTheme.color4 = shiftToToken(3, shift_amount);
	shiftedTheme.color5 = shiftToToken(4, shift_amount);
	shiftedTheme.color6 = shiftToToken(5, shift_amount);
	shiftedTheme.color7 = lightmode
		? nordLightToneTokens[1]
		: nordDarkToneTokens[1];
	shiftedTheme.color8 = lightmode
		? nordLightToneTokens[2]
		: nordDarkToneTokens[2];
	shiftedTheme.color9 = shiftToToken(6, shift_amount);
	shiftedTheme.color10 = shiftToToken(7, shift_amount);
	shiftedTheme.color11 = shiftToToken(8, shift_amount);
	shiftedTheme.color12 = shiftToToken(9, shift_amount);
	shiftedTheme.color13 = shiftToToken(10, shift_amount);
	shiftedTheme.color14 = shiftToToken(11, shift_amount);
	shiftedTheme.color15 = lightmode
		? nordLightToneTokens[3]
		: nordDarkToneTokens[3];
}

const nord = {
	base,
	light,
	shift: nordShift,
};

export default nord;
