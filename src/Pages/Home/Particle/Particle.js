import React from 'react';
import { tsParticles } from 'tsparticles';
import Navigation from '../../Navigation/Navigation';
import './Particle.css';

const Particle = () => {
  tsParticles.load('tsparticles', {
    fps_limit: 60,
    fullScreen: { enable: false },
    detectRetina: true,
    interactivity: {
      detect_on: 'canvas',
      events: {
        onclick: { enable: false, mode: 'push' },
        onhover: {
          enable: false,
          mode: 'repulse',
          parallax: { enable: false, force: 60, smooth: 10 },
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
          speed: 3,
        },
        grab: { distance: 400, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#ffffff' },
      line_linked: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.8,
        width: 1,
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: 'none',
        enable: true,
        out_mode: 'bounce',
        random: false,
        speed: 8,
        straight: false,
      },
      number: { density: { enable: false, value_area: 800 }, value: 30 },
      opacity: {
        anim: { enable: true, opacity_min: 0.5, speed: 1, sync: false },
        random: false,
        value: 1,
      },
      shape: {
        character: {
          fill: true,
          font: 'Verdana',
          style: '',
          value: ['testo 1', 'testo 2', 'testo 3', 'testo 4', 'testo 5'],
          weight: '400',
        },
        image: {
          height: 100,
          replace_color: true,
          src: 'images/github.svg',
          width: 100,
        },
        polygon: { nb_sides: 5 },
        stroke: { color: '#ffffff', width: 1 },
        type: 'char',
      },
      size: {
        anim: { enable: true, size_min: 10, speed: 10, sync: false },
        random: false,
        value: 10,
      },
    },
    polygon: {
      draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: 'none',
      url: '',
    },
    retina_detect: true,
  });

  return (
    <div id='bg-container'>
      <div id='navParticle'>
        <Navigation />
      </div>
      <div id='tsparticles'></div>
      <form>
        <h3>Login Here</h3>
        <label for='username'>Username</label>
        <input type='text' placeholder='Email or Phone' id='username'></input>
        <label for='password'>Password</label>
        <input type='password' placeholder='Password' id='password'></input>
        <button className='bannerBtn'>Log In</button>
        <div class='social'>
          <div class='go'>
            <i class='fab fa-google'></i> Google
          </div>
          <div class='fb'>
            <i class='fab fa-facebook'></i> Facebook
          </div>
        </div>
      </form>
      {/* <div id="tsparticles"></div>
<form>
  <h3>Login Here</h3>

  <label for="username">Username</label>
  <input type="text" placeholder="Email or Phone" id="username">

  <label for="password">Password</label>
  <input type="password" placeholder="Password" id="password">

  <button>Log In</button>
  <div class="social">
    <div class="go"><i class="fab fa-google"></i> Google</div>
    <div class="fb"><i class="fab fa-facebook"></i> Facebook</div>
  </div>
</form> */}
    </div>
  );
};

export default Particle;
