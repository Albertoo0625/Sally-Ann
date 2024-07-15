import React from 'react';
import {useState,useEffect} from 'react';

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  return (
    <div className='Nav-Container'>
      <header>
        <nav>
        <img src="assets\images\logo.png" alt="logo"  className='nav-img'/>
          <ul>  
            <li><a href="#">Staff Portal</a></li>
            <li><a href="#">Student Portal</a></li>
            <li><a href="#">E-learning Portal</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Exam Portal</a></li>       
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">About us</a></li>
            <li><button onClick={toggleTheme}>
                  {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Nav