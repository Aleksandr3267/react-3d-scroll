import './App.css';
import Gallery from './components/Gallery';
import Soundbutton from './components/SoundButton';



window.onload = function() {
  /* --------------------------------- scripts -------------------------------- */
  let zSpacing = -1000,
  lastPos = zSpacing / 5,
  $frames = document.getElementsByClassName('frame'),
  frames = Array.from($frames),
  zVals = []

  window.onscroll = function() {
  let top = document.documentElement.scrollTop,
      delta = lastPos - top

  lastPos = top

  frames.forEach(function(n, i) {
      zVals.push((i * zSpacing) + zSpacing)
      zVals[i] += delta * -5.5
      let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0

      frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  })
  }
  window.scrollTo(0, 1)


  /* ---------------------------------- audio --------------------------------- */
  let soundBut = document.querySelector('.sound-button'),
    audio = document.querySelector('.audio')

    soundBut.addEventListener('click', e => {
        soundBut.classList.toggle('paused')
        audio.paused ? audio.play() : audio.pause()
    })

    window.onfocus = function(){
      soundBut.classList.contains('paused') ? audio.pause() : audio.play()
    }
    window.onblur = function(){
      audio.pause()
    }
}


function App() {
  return (
    <div className="App">
      <div className='main-content'>
        <Gallery/>
      </div>

      <Soundbutton/>
    </div>
  );
}

export default App;
