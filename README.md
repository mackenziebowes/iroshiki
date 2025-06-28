![Iroshiki - Indexed Palettes For The Web](https://github.com/mackenziebowes/iroshiki/blob/main/display/Small_Iroshiki_banner.png)

# Iroshiki - Indexed Palettes For The Web

## The Name

色 | Iro = "Color", used euphemistically for type, timbre, mood, and beauty as in beautiful women.

式 | Shiki = "Method", collides with "system," "formula," "equation," as in English, in addition to "function" and just so happens to also collide with "ceremony," "event," "celebration," ie "party" (including Weddings!)

So - take your pick! There's homophony and semantic collision to play with. "Color System" was the intention, but it can also mean "mood ritual" and "sexy party" which is what a colour system should be!

## What does it do?

Iroshiki transforms a 16-item indexed color palette (based on the ANSI escape codes for colouring terminal output) into ~140 CSS variables for use in modern web colour systems.

It also adds convenient aliases for those colors:

- `--error-400: var(--color1-400)`;
- `--base: var(--surface-200);`

It also overrides default tailwind colors, so you can instantly drop it in to your ShadCN/Custom component library using Tailwind.

### Public Classic Themes

Includes [Nord](https://www.nordtheme.com) and [Catppuccin](https://catppuccin.com) out of the box.

### Custom Themes

I wrote some custom indices, some inspired by [Lospec](https://lospec.com/palette-list), and some pulled from digital art.

#### ANSI Themes

ANSI themes are consistently semantically indexed - --color1 can always be used to mean "error," but might not always be red.
You can easily drop an ANSI theme to an existing Tailwind project and have a good time.

#### Ink Themes

Ink themes are experimental 1-bit-like colour combinations - most combinations produce remarkably low contrast, **not a drop in replacement** into a Tailwind project.

## Installation

```bash
git clone https://github.com/mackenziebowes/iroshiki.git ~/your-install-here
```

```bash
bun install
```

```bash
bun link
```

## Usage

```bash
iroshiki -h
```

## Sibling Projects

Built for `https://github.com/mackenziebowes/deko-client-solid`
Works with Tailwind!

This project was created using `bun init` in bun v1.2.16. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
