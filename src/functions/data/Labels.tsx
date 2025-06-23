function inkLabel() {
	const label = `\n\n
    /* 
    -- Generated Note --
    [Iroshiki]
    This theme was generated with Iroshiki.
    Read More: https://github.com/mackenziebowes/iroshiki

    [Ink Theme]
    This is an Ink Theme, a simplified and minimal One-Bit-Like array of colours inspired by pen-on-paper and early binary embedded displays like analogue oscilloscopes.
    Ink themes are composed of two primary colours, the Surface (--color0) and the Marker (--color7).
    Like most Iroshiki themes, there are 'bright' versions in the upper ANSI register (--color8, --color15) that are usually lighter and desaturated.
    The rest of the ANSI register, the source for tailwind and semantic overrides, are filled with incremental Surface variations (an Indexed Colour Ramp).

    [Usage]
    Ink themes can be gorgeous, but you need to edit your classes to use them effectively.
    Restrict your design palette to use the Surface Ramp for soft, minimal, textural contrast rather than embedded semantics (--color1 is unlikely to be Red/Error, --color2 is unlikely to be Green/Success, etc)
    You can freely swap between other Iroshiki Ink Themes if you do so.

    -- End Note --
    */
    \n\n
    `;
	return label;
}

function ansiLabel() {
	const label = `
    \n\n
    /* 
    -- Generated Note --
    [Iroshiki]
    This theme was generated with Iroshiki.
    Read More: https://github.com/mackenziebowes/iroshiki

    [Ansi Theme]
    This is an Ansi Theme, a simplified and minimal 16-byte-index based array of colours inspired by early computer graphics technology like ANSI escape sequences for terminals, MUDs, and pixel art.
    ANSI themes are composed of 8 primary colors, and their indexes are Semantic. 
    Typically, there is a neutral Surface (--color0) and a neutral Marker (--color7).
    The intervening colors, (--color1, --color2, etc) are, historically, Red, Green, Yellow, Blue, 'Magenta', and 'Cyan' respectively, combining the two primary colour sets.
    These indexes have stable semantic associations as computers developed - use Red for Errors, Green for Success, Yellow for Warnings, and Blue for optional Information.
    Indexes --color5 and --color6 are non semantic, often used for non-semantic elevation of outputs. 
    Like most Iroshiki themes, there are 'bright' versions in the upper ANSI register (--color8 - --color15) that are usually lighter and desaturated.
    Tailwind and Semantic overrides are filled with incremental variations (an Indexed Colour Ramp).
    Low values are brighter.

    [Usage]
    Ansi Palettes tend to be high contrast. 
    Use --color0, --surface-n or any tailwind neutral above 500, eg:  --gray-700, --stone-800, --slate-900 etc. aliases 
    for your multi-level/mildly contrasting backgrounds colors, they're all built off --color0.
    Use --color15, --color8, --marking-n or any tailwind netural below 300, eg: --slate-200, --stone-300, --zinc-50 etc. aliases for your text. 
    Lower tailwind numbers are closer to white. 

    Use --color1 or the --error-n alias for errors. These also index to red tailwind colours, red/pink/rose etc.
    Use --color2 or the --succes-n alias for success. These also index to green tailwind colours, emerald/green etc.
    Use --color3 or the --warn-n alias for warnings. These also index to the yellow/orange tailwind colours.
    Use --color4 or the --info-n alias for extra information like tips, notes, tutorials, etc. These also index to the blue tailwind colours.
    You can do whatever you want with indices 5 and 6. We provided --focus-n and --outline-n aliases for them, and they map to tailwind fuschia/purple and teal/cyan colors respectively.

    Use the upper register for hover/focus states if not using tailwind.

    [Swapping]
    Ansi Palettes are designed to be interchangeable, but sometimes reindex the semantic colours for flavour, eg --color1 is not red, but green, pink, or orange.
    This is part of the fun of the system - non-standard indexes create non-standard experiences. 

    Go with the flow <3
    -- End Note --
    */
    \n\n
    `;
	return label;
}

function nordLabel() {
	const label = `
    \n\n
    /* 
    -- Generated Note --
    [Iroshiki]
    This theme was generated with Iroshiki.
    Read More: https://github.com/mackenziebowes/iroshiki

    [Nord Theme]
    This is a port of the open-source Nord theme, an Arctic, north-bluish colour palette.
    Read More: https://www.nordtheme.com

    [Usage]
    Nord is not an ANSI palette.
    Iroshiki parsed Nord through it's ANSI-based system to create this theme.
    Therefore, the indexes can be off - the main ideas (--color0 - --color4, color7) are in the right place, 
    but if your design system is using the upper register or the miscellaneous indices, your design may be broken.

    [Swapping]
    Because of Nord's peculiarities, it's best to simply swap it for other Nord themes (eg: Nord Light).
    As Always, you can observe the layout of --color0 - --color15 and make manual changes as you see fit.
    -- End Note --
    */
    \n\n
    `;
	return label;
}

function catLabel() {
	const label = `
    /* 
    -- Generated Note --
    [Iroshiki]
    This theme was generated with Iroshiki.
    Read More: https://github.com/mackenziebowes/iroshiki

    [Catpuccin Theme]
    This is a port of the open-source Catpuccin theme, a "Soothing pastel theme for the high-spirited!"
    Read More: https://catppuccin.com

    Catppuccin is not an ANSI palette - it is complex and large, offering 4 distinct palette flavours.
    This is also not a complete port.
    
    Catppuccin has a lot of bases:
        [Colors]
        Catppuccin has 7 base colors in two registers (ie; Flamingo/Rosewater, Red/Maroon, etc)

        We included just 6 base colors (12 tones per flavour) in an opinionated deduplication
        [Surface/Marker]
        Catppucin offers two distinct neutral colour ramps:
        [Crust/Mantle/Base]: The "background" color ramp, used for deep wells.
        [Surface/Text]: The "foreground" colour ramp, with several distinct naming categories like Surface (mild background contrast), Overlay, Subtext (disabled buttons, etc.), etc.

        We included just 4 tones per flavour, mostly from the Surface/Text colour ramp, to serve as neutrals.

    [Usage]
    The lower register (--color1 - --color6) is basically semantic.
    Use --color0, --surface-n or any tailwind neutral above 500, eg:  --gray-700, --stone-800, --slate-900 etc. aliases 
    for your multi-level/mildly contrasting backgrounds colors, they're all built off --color0.
    Use --color15, --color8, --marking-n or any tailwind netural below 300, eg: --slate-200, --stone-300, --zinc-50 etc. aliases for your text. 
    Lower tailwind numbers are closer to white. 

    Use --color1 or the --error-n alias for errors. These also index to red tailwind colours, red/pink/rose etc.
    Use --color2 or the --succes-n alias for success. These also index to green tailwind colours, emerald/green etc.
    Use --color3 or the --warn-n alias for warnings. These also index to the yellow/orange tailwind colours.
    Use --color4 or the --info-n alias for extra information like tips, notes, tutorials, etc. These also index to the blue tailwind colours.

    The upper register has some neat ideas - go wild!

    [Swapping]
    Because of Catppuccin's peculiarities, it's best to simply swap it for other Catppuccin themes.
    -- End Note --
    */\n\n
    `;
	return label;
}

function customLabel() {
	const label = `
    /* 
    -- Generated Note --
    [Iroshiki]
    This theme was generated with Iroshiki.
    Read More: https://github.com/mackenziebowes/iroshiki

    [Custom Theme]
    This is a user supplied theme. Iroshiki can make no claims to it's quality, usage, intent, or history.

    -- End Note --
    */\n\n
    `;
	return label;
}

const label = {
	ink: inkLabel,
	nord: nordLabel,
	cat: catLabel,
	ansi: ansiLabel,
	custom: customLabel,
};

export default label;
