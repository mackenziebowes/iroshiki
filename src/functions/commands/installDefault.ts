import { type Command } from "~/core/cli";
import {
	intro,
	outro,
	multiselect,
	text,
	select,
	group,
	cancel,
} from "@clack/prompts";
import ansi from "~/data/gesena/ansi";
import nord from "~/data/nord";
import catppucin from "~/data/catpuccin";
import type { InputTheme } from "~/types";

const installDefault = async () => {
	const installGroup = await group(
		{
			theme: () =>
				select({
					message: "Select a theme",
					options: [
						{
							value: catppucin.latte,
							label: "Latte",
							hint: "Lightest Catppuccin",
						},
						{
							value: catppucin.frappe,
							label: "Frappe",
							hint: "Lightly Toasted Catppuccin",
						},
						{
							value: catppucin.macchiato,
							label: "Macchiato",
							hint: "Toasted Catppuccin",
						},
						{
							value: catppucin.mocha,
							label: "Mocha",
							hint: "Dark and Sweet Catppuccin",
						},
						{
							value: nord.base,
							label: "Nord",
							hint: "A dark, arctic, north-bluish theme",
						},
						{
							value: ansi.ruined,
							label: "Ruined",
							hint: "Ancient and worn down",
						},
						{
							value: ansi.ruined_pastel,
							label: "Ruined Pastel",
							hint: "Ancient and worn down, yet soothing",
						},
						{
							value: ansi.spring,
							label: "Spring",
							hint: "Dawn of Life",
						},
						{
							value: ansi.spring_pastel,
							label: "Spring Pastel",
							hint: "Soothing Dawn of Life",
						},
						{
							value: ansi.vivid,
							label: "Vivid",
							hint: "Cyberoptimism",
						},
						{
							value: ansi.sakura,
							label: "Sakura",
							hint: "Spring, Japan :O",
						},
						{
							value: ansi.sakura_pastel,
							label: "Sakura Pastel",
							hint: "Soothing Spring, Japan :O",
						},
						{
							value: ansi.sweetie,
							label: "Sweetie",
							hint: "Syrupy Compote",
						},
					],
				}),
			output: () => text({ message: "Where are we installing this?" }),
			extras: () =>
				multiselect({
					message: "Any extras?",
					options: [
						{
							value: "tailwind",
							label: "Tailwind Override",
							hint: "Override tailwinds built in color variables",
						},
						{
							value: "prism",
							label: "Prism Theme",
							hint: "Add styles for the Prism code syntax highlighter",
						},
					],
					initialValues: ["tailwind", "prism"],
				}),
		},
		{
			// On Cancel callback that wraps the group
			// So if the user cancels one of the prompts in the group this function will be called
			onCancel: ({ results }) => {
				cancel("Operation cancelled.");
				process.exit(0);
			},
		}
	);
};
