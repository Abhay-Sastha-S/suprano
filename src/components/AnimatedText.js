import {Typewriter} from 'react-simple-typewriter'
function AnimatedText() {
  return (
    <div className='aboutUsBodyTitle'>
    <Typewriter
            words={['Where Imagination Meets Innovation', 'Redefine Exhibition Excellence with Suprano Exhibits', 'Ignite Your Exhibition Success with Suprano Exhibits']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
    </div>
  );
}

export default  AnimatedText;