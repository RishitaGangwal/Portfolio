import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/Me.jpeg'
import Logo from './Logo'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'R',
    'i',
    's',
    'h',
    'i',
    't',
    'a',
    // ' ',
    // 'G',
    // 'a',
    // 'n',
    // 'g',
    // 'w',
    // 'a',
    // 'l',
    ',',
  ]
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
        <div className=''>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}></span>
            <span className={`${letterClass} _16`}>a</span>
            <span className={`${letterClass} _17`}>m</span>
            <span className={`${letterClass} _18`}></span>

           
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            
          </h1>

          <h2>WELCOME TO MY CODING WORLD!</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          </div>
          {/* <div> */}
          <img
              src={LogoTitle}
              height={400}
              width={400}
              className='heroImg'
              alt="JavaScript Developer Name, Web Developer Name"
            />
            {/* </div> */}
        </div>
        
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
