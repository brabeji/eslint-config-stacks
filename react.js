module.exports = {
	"extends": [
		"airbnb",
		"plugin:flowtype/recommended"
	],
	"parser": "babel-eslint",
	"plugins": [
		"babel",
		"flowtype"
	],
	"rules": {
		"no-tabs": [
			0
		],
		"react/jsx-filename-extension": [
			0
		],
		"indent": [
			2,
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"quotes": [
			2,
			"single"
		],
		"linebreak-style": [
			2,
			"unix"
		],
		"semi": [
			2,
			"always"
		],
		"prefer-const": [
			2
		],
		"no-unused-vars": [
			2,
			{
				"varsIgnorePattern": "React"
			}
		],
		"no-mixed-spaces-and-tabs": [
			2,
			"smart-tabs"
		],
		"no-console": [
			0
		],
		"react/jsx-indent": [
			2,
			"tab"
		],
		"react/jsx-indent-props": [
			2,
			"tab"
		],
		"react/prefer-stateless-function": [
			0
		],
		"comma-dangle": [
			2,
			"always-multiline"
		]
	},
	"env": {
		"es6": true,
		"node": true,
		"browser": true
	}
};
