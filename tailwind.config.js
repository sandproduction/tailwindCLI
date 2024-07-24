/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode:'class',
            theme:{
                extend:{
                    spacing:{
                        13: '3.25rem',
                    },
                    fontFamily:{
                        poppins:['Poppins']
                    },
                    colors:{
                      matcha:'#88D66C',
                      greenSand:'#40534C',
                    },
                    animation:{
                        'spin-slow': 'spin 3s linear',
                        'goyang': 'goyang 1s ease-in-out infinite'
                    },
                    keyframes:{
                        goyang:{
                            '0%, 100%':{ transform: 'skew(-5deg)'},
                            '50%': {transform: 'skew(5deg)'}
                        }
                    }
                }
            },
  plugins: [],
}

