import React from 'react';
import './stylesheets/App.scss';

const App = () => {

  let skills = ['HTML', 'Sass', 'JavaScript', 'Gsap', 'React', 'Redux', 'Axios', 'Figma', 'Photoshop', 'Illustrator', 'After Effects', 'Cinema4D']

  let urls = ['https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/dragon-japo_Mesa_de_trabajo_1_zUNYJ28U2.png', 'https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/ninja-cat_Mesa_de_trabajo_1_MG-Xu5EId.png', 'https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/crazy-scorpio_Mesa_de_trabajo_1_IqM6pWpqt.png', 'https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/koi-fish_Mesa_de_trabajo_1_-BDkO0BH_.png', 'https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/inner-light_Mesa_de_trabajo_1_Xaw4XDioL.png', 'https://ik.imagekit.io/c9tj2d0xqow/tr:w-auto/cool-stuff_Mesa_de_trabajo_1_ctX0lEl10.png']


  return (
    <div className='App'>

      <div className='App__name'>
        <p>Erika Agrelo</p>
      </div>

      <div className="App__title">
        <h1>Frontend Developer</h1>
        <h1>Multimedia Designer</h1>
      </div>

      <div className="App__info">
        <p>Creative and detail-oriented Frontend Developer, with a background in Multimedia Design. With a keen sense of aesthetic and UI Design, and a passion for developing responsive website design. Skilled in HTLM, CSS, SASS, JavaScript and React, as well as Adobe Creative Cloud Suite.</p>
        <p>Scroll Down</p>
      </div>

      <div className="App__skills">
        <div className='App__skills__title'>
          <h4>Skills</h4>
        </div>
        {skills.map((skill, index) => {
          return (
            <div className={`App__skills__box img${index}`} key={index}>
              <p>{skill}</p>
              <p>{`0${index + 1}`}</p>
            </div>
          )
        })}
      </div>

      <div className='App__behance'>
        <div className="App__behance__title">
          <h4>Behance</h4>
          <p>Scroll Right</p>
        </div>
        <div className="App__behance__scroll">
          {urls.map((url, index) => <img src={url} alt="" key={index}/>)}
        </div>
      </div>

      <div className="App__resume">

        <div className="App__resume__content resume">
          <div className="App__resume__content__title">
            <h4>Resume</h4>
          </div>
          <div className='App__resume__content__info'>
            <p>Frontend Developer</p>
            <p>Shake Again</p>
            <p>2021 - Now</p>
          </div>
          <div className='App__resume__content__info'>
            <p>Illustrator</p>
            <p>Freelance</p>
            <p>2018 - 2021</p>
          </div>
        </div>

        <div className="App__resume__content">
          <div className="App__resume__content__title">
            <h4>Education</h4>
          </div>
          <div className='App__resume__content__info'>
            <p>Coding Bootcamp</p>
            <p>Plataforma5</p>
            <p>2021</p>
          </div>
          <div className='App__resume__content__info'>
            <p>Multimedia Design</p>
            <p>Escuela Da Vinci</p>
            <p>2018 - 2021</p>
          </div>
        </div>
      </div>

      <div className="App__socials">
        <div className="App__socials__title">
          <h4>Socials</h4>
        </div>
        <a href="https://www.linkedin.com/in/agreloerika/">LinkedIn</a>
        <a href="https://github.com/agreloe">Github</a>
        <a href="https://www.behance.net/agreloe">Behance</a>
      </div>

      <div className="App__contact">
        <div className="App__contact__title">
          <h4>Contact</h4>
        </div>
        <p>Send me and e-mail at agreloerica@gmail.com</p>
      </div>

      <p className='App__author'>Agreloe 2021</p>

    </div>
  );
}

export default App;