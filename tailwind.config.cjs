const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			spacing: {
				'1/1': '100%',
				'3/2': '66.666667%',
				'3/4': '75%',
				'9/16': '56.25%',
			}
		}
	},

	plugins: []
};

module.exports = config;
