#!/usr/bin/env bun
import { runCLI, registerCommand } from "./src/core/cli";

import { InstallCmd } from "./src/functions/theme/installCmd";
import { listThemesCmd } from "./src/functions/theme/listThemes";
import { TestCustom, CustomInstall } from "./src/functions/theme/customTheme";
const cmds = [InstallCmd, listThemesCmd, TestCustom, CustomInstall];

async function main() {
	cmds.forEach((cmd) => {
		registerCommand(cmd);
	});
	runCLI();
}

main();
