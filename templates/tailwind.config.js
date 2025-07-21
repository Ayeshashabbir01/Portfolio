tailwind.config = {
    theme: {
        extend:{
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
              },
              fontFamily:{
                outfit:["Outfit", "sans-serif"],
                ovo:["Ovo", "serif"]
              },
              animation:{
                spin_slow : 'spin 6s linear infinite'
              },
              colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F'
              },
              boxShadow:{
                'black':'4px_4px_0_#000',
                'white':'4px_4px_0_#000',


              }
             
            }
           

        },
         darkMode:'selector'
     
  }
  