module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding:{
					lg:'13rem',
				}
			}
		},

	},
	variants: {
		extend: {
		  visibility: ["group-hover"],
		},
	   },
	plugins: []
};
