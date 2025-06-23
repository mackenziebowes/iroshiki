export const PostInstall = () => {
	console.log("");
	console.log("  [POST-INSTALL REMINDER]");
	console.log("");
	console.log("    Iroshiki seems to upset Tailwind.");
	console.log("    Current fix: Open the new version of the created css file.");
	console.log("");
	console.log("    Iroshiki only adds colors and aliases to the root.");
	console.log(
		"    Be sure to modify your other css files to apply base styling:"
	);
	console.log("    html {background-color: var(--color1);}, for example.");
	console.log("");
};
