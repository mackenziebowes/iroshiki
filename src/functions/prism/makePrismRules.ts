// function createSemanticRules() {
// 	Array.from({ length: 9 }, (_, i) => {
// 		RuleMap.set(`error-${(i + 1) * 100}`, `var(--color1-${(i + 1) * 100})`);
// 		RuleMap.set(`success-${(i + 1) * 100}`, `var(--color2-${(i + 1) * 100})`);
// 		RuleMap.set(`warn-${(i + 1) * 100}`, `var(--color3-${(i + 1) * 100})`);
// 		RuleMap.set(`info-${(i + 1) * 100}`, `var(--color4-${(i + 1) * 100})`);
// 		RuleMap.set(`focus-${(i + 1) * 100}`, `var(--color5-${(i + 1) * 100})`);
// 		RuleMap.set(`outline-${(i + 1) * 100}`, `var(--color6-${(i + 1) * 100})`);
// 	});
// 	RuleMap.set(`well`, "var(--surface-100)");
// 	RuleMap.set(`base`, "var(--surface-200)");
// 	RuleMap.set(`overlay`, "var(--surface-400)");
// 	RuleMap.set(`text`, "var(--marking-100)");
// 	RuleMap.set(`subtext`, "var(--marking-200)");
// 	RuleMap.set(`disabled`, "var(--marking-300)");
// }

function addDarkPrismRules() {
	let ruleString = `/* -- Prism Rules -- */`;
	ruleString += `code[class*="language-"], pre[class*="language-"] { color: var(--text); }\n`;
	ruleString += `:not(pre) > code[class*="language-"], pre[class*="language-"] { background: var(--surface-200); }\n`;
	ruleString += `.token.keyword,.token.prolog,.token.doctype,.token.atrule { color: var(--color-violet-300); }\n`;
	ruleString += `.token.builtin,.token.entity,.token.deleted { color: var(--color-red-300); }\n`;
	ruleString += `.token.class-name,.token.attr-name,.token.namespace { color: var(--color-yellow-300); }\n`;
	ruleString += `.token.function,.token.selector {color: var(--color-blue-300) }\n`;
	ruleString += `.token.boolean,.token.number,.token.constant {color: var(--color-orange-200);}\n`;
	ruleString += `.token.string,.token.char,.token.url,.token.attr-value,.token.inserted { color: var(--color-green-300); }\n`;
	ruleString += `.token.symbol { color: var(--color-yellow-300); }\n`;
	ruleString += `.token.regex { color: var(--color-red-200); }\n`;
	ruleString += `.token.operator { color: var(--color-blue-200); }\n`;
	ruleString += `.token.variable { color: var(--color-gray-100); }\n`;
	ruleString += `.token.property,.token.tag { color: var(--color-blue-300); }\n`;
	ruleString += `.token.punctuation,.token.comment {color: var(--marking-300);}\n`;
	ruleString += `.token.cdata {color: var(--color-teal-300);}\n`;
	ruleString += `.token.important,.token.bold { font-weight: bold; }\n.token.italic { font-style: italic; }\n`;
	return ruleString;
}

function addLightPrismRules() {
	let ruleString = `/* -- Prism Rules -- */`;
	ruleString += `code[class*="language-"], pre[class*="language-"] { color: var(--text); }\n`;
	ruleString += `:not(pre) > code[class*="language-"], pre[class*="language-"] { background: var(--surface-800); }\n`;
	ruleString += `.token.keyword,.token.prolog,.token.doctype,.token.atrule { color: var(--color-violet-700); }\n`;
	ruleString += `.token.builtin,.token.entity,.token.deleted { color: var(--color-red-700); }\n`;
	ruleString += `.token.class-name,.token.attr-name,.token.namespace { color: var(--color-yellow-700); }\n`;
	ruleString += `.token.function,.token.selector {color: var(--color-blue-700) }\n`;
	ruleString += `.token.boolean,.token.number,.token.constant {color: var(--color-orange-800);}\n`;
	ruleString += `.token.string,.token.char,.token.url,.token.attr-value,.token.inserted { color: var(--color-green-700); }\n`;
	ruleString += `.token.symbol { color: var(--color-yellow-700); }\n`;
	ruleString += `.token.regex { color: var(--color-red-800); }\n`;
	ruleString += `.token.operator { color: var(--color-blue-800); }\n`;
	ruleString += `.token.variable { color: var(--color-gray-900); }\n`;
	ruleString += `.token.property,.token.tag { color: var(--color-blue-700); }\n`;
	ruleString += `.token.punctuation,.token.comment {color: var(--marking-700);}\n`;
	ruleString += `.token.cdata {color: var(--color-teal-700);}\n`;
	ruleString += `.token.important,.token.bold { font-weight: bold; }\n.token.italic { font-style: italic; }\n`;
	return ruleString;
}

export const prism = {
	dark: addDarkPrismRules,
	light: addLightPrismRules,
};
