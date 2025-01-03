import './App.css'
import Header from './Header/Header'

import About from './About/About';
import Work from './Work/Work';
import Contact from './Contact/Contact';

function App() {






  return (
    <>
    <body>


    
    {/* <a href="#about">Click Here to Smoothly Scroll Down</a> */}
    <Header/>
   
   
  
    <div className='nav-section'>
      <button className='nav' ><a href='#about'><h1 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>About</h1></a></button>
      <button className='nav'><a href='#work'><h1 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>Work</h1></a></button>
      <button className='nav'><a href='#contact'><h1 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>Contact</h1></a></button>

    </div>
    
    <div className="app-sections">


    <div id='work'>
    <Work/> 

    </div>

    <div id='about'>
    <About/>
    </div>

    <footer>
    <div className="contact-section-test" id='contact'>
    <Contact/>
    </div>
    </footer>

    </div>
   
   

    <br/>

    </body>
    


   
          </>
  )
}

export default App
