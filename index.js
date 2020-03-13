shell = require('shelljs')

shell.exec(`
	cd pug
	pug . -o ..
`)