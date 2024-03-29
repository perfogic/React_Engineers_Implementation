module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/preset-typescript",
		"@storybook/addon-storysource",
		"@storybook/addon-knobs",
		"@storybook/addon-a11y",
	],
	framework: "@storybook/react",
};
