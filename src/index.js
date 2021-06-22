let theme = () => console.log('default theme')

try {
  theme = require('../../modules/theme')
} catch (e) {
  console.log('theme module not found')
}

function main () {
  theme()
  console.log('main')
}

main()
