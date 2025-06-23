/** Testing/Dev functions for custom themes */

import chroma, { type Color } from "chroma-js";
import type { InputTheme } from "../../types";
import log from "../../core/log";

export function checkCustomPalette(theme: InputTheme) {
	log.title("Iroshiki", "Custom Palette Review");
	log.single.info("Neutrals", "Your neutral results:");
	const neutrals = checkNeutrals(theme);
	log.single.info("Colors on Neutrals", "Your color results:");
	checkColorsOnNeutrals(theme, neutrals);
	log.single.info("Done", "Analysis complete.");
}

function checkNeutrals(theme: InputTheme): Neutrals {
	const base = chroma(theme.color0);
	const subtext = chroma(theme.color7);
	const text = chroma(theme.color15);
	const surface = chroma(theme.color8);
	console.log("\n[Test]: color15 on color0");
	checkAndLogContrast(text, base);
	console.log("\n[Test]: color7 on color0");
	checkAndLogContrast(subtext, base);
	console.log("\n[Test]: color15 on color8");
	checkAndLogContrast(text, surface);
	console.log("\n[Test]: color7 on color8");
	checkAndLogContrast(subtext, surface);
	return { base, subtext, text, surface };
}

type Neutrals = {
	base: Color;
	surface: Color;
	subtext: Color;
	text: Color;
};

const isNeutral = (k: string) => {
	return k == "color0" || k == "color7" || k == "color8" || k == "color15";
};

function checkColorsOnNeutrals(theme: InputTheme, neutrals: Neutrals) {
	for (const [k, v] of Object.entries(theme)) {
		if (!isNeutral(k)) {
			console.log(`\n[Test]: ${k} on color0`);
			checkAndLogContrast(chroma(v), neutrals.base);
			console.log(`\n[Test]: ${k} on color7`);
			checkAndLogContrast(chroma(v), neutrals.subtext);
			console.log(`\n[Test]: ${k} on color8`);
			checkAndLogContrast(chroma(v), neutrals.subtext);
			console.log(`\n[Test]: ${k} on color15`);
			checkAndLogContrast(chroma(v), neutrals.subtext);
		}
	}
}

function checkAndLogContrast(color1: Color, color2: Color) {
	const contrast = chroma.contrast(color1, color2);
	const minimumSize = chroma.contrastAPCA(color1, color2);
	if (contrast < 3) {
		console.error(`[Extremeley Low]`);
		console.log(
			"The minimum font size required for this to be legible is: ",
			minimumSize
		);
		return;
	}
	if (contrast >= 3 && contrast < 4.5) {
		console.warn(`[Low]`);
		console.log(
			"The minimum font size required for this to be legible is: ",
			minimumSize
		);
		return;
	}
	if (contrast >= 4.5 && contrast < 7) {
		console.log(`[Medium]`);
		console.log(
			"The minimum font size required for this to be legible is: ",
			minimumSize
		);
		return;
	}
	if (contrast > 7) {
		console.log(`[Excellent]`);
		console.log(
			"The minimum font size required for this to be legible is: ",
			minimumSize
		);
		return;
	}
}
