import chroma from "chroma-js";

export const chromaTransforms = {
	catpuccin: {
		default: CatpuccinBaseBrighten,
		latte: CatpuccinLatteBrighten,
	},
	basics: {
		surface: surfaceStages,
		marking: markingStages,
		ink: inkStages,
		center: getCenter,
		scale: colorScale,
	},
};

function CatpuccinBaseBrighten(color: string) {
	try {
		const col = chroma(color).lch();
		col[0] *= 0.94; // Ensure lightness doesn't go negative
		col[1] += 8;
		col[2] = (col[2] + 2) % 360;
		return chroma.lch(col[0], col[1], col[2]).hex();
	} catch {
		return "#000000"; // Return black if the input is invalid
	}
}

function CatpuccinLatteBrighten(color: string) {
	try {
		const col = chroma(color).lch();
		col[0] *= 1.09;
		col[2] = (col[2] + 2) % 360;
		console.log({ col });
		return chroma.lch(col[0], col[1], col[2]).hex();
	} catch {
		return "#000000"; // Return black if the input is invalid
	}
}

function surfaceStages(color: string): string[] {
	try {
		const col = chroma(color).set("hsl.l", "*2");
		const res = chroma.scale([col, color]).correctLightness().colors(9);
		return [...res];
	} catch {
		console.log("[Failed to produce Surface Stages]");
		return [];
	}
}

function markingStages(color: string): string[] {
	try {
		const col = chroma(color).set("hsl.l", "/2").set("hsl.s", "/2");
		const res = chroma.scale([color, col]).colors(9);
		return [...res];
	} catch {
		console.log("[Failed to produce Marking Stages]");
		return [];
	}
}

function inkStages(color: string): string[] {
	const deepest = chroma(color).set("hsl.l", 0.1).set("hsl.s", "*2");
	const lightest = chroma(color).set("hsl.l", 0.6).set("hsl.s", "/2");
	const res = chroma
		.scale([deepest, chroma(color), lightest])
		.domain([1, 4, 8])
		.colors(7);
	return res;
}

function getCenter(colors: string[]) {
	const scale = chroma.bezier(colors);
	return scale(0.5).hex();
}

function colorScale(color: string) {
	const highlight = chroma(color).set("hsl.l", 0.95);
	const shade = chroma(color).set("hsl.l", 0.2);
	// find the hue value, return a 9 stage array iterating through dark - light;
	const scale = chroma.scale([highlight, color, shade]).mode("oklch").colors(9);
	return [...scale];
}
