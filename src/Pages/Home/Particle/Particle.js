import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { tsParticles } from 'tsparticles';
import Navigation from '../../Navigation/Navigation';
import './Particle.css';
import portfolio from './../../../images/pp.png';
import resume from './../../../images/resume.pdf';
import { Box } from '@mui/system';

const Particle = () => {
  tsParticles.load('tsparticles', {
    fps_limit: 60,
    fullScreen: { enable: false },
    detectRetina: true,
    interactivity: {
      detect_on: 'window',
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
          speed: 1,
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
        speed: 1,
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
          value: ['HTML5', 'CSS3', 'JavaScript', 'ReactJs', 'NodeJs'],
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
      <Container className='home-section'>
        <Grid container spacing={2}>
          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            item
            xs={12}
            md={6}
          >
            <img src={portfolio} className='ppImg' alt='' />
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            item
            xs={12}
            md={6}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                m: 1,
                p: 1,
              }}
              className='home-text'
            >
              <Typography
                variant='h3'
                color='whitesmoke'
                gutterBottom
                component='div'
                sx={{ textAlign: 'center' }}
              >
                Welcome To <br />
                <span style={{ color: 'goldenrod' }}>My World</span>
              </Typography>
              <Typography
                variant='h5'
                color='whitesmoke'
                gutterBottom
                component='div'
                sx={{ textAlign: 'center' }}
              >
                I'm Md. Iqbal Hossain
              </Typography>
              <Typography
                variant='h5'
                color='goldenrod'
                gutterBottom
                component='div'
                sx={{ textAlign: 'center' }}
              >
                Full Stack Web Developer
              </Typography>
              <a
                rel='noreferrer'
                style={{ textDecoration: 'none', margin: '0 auto' }}
                href={resume}
                target='_blank'
              >
                <Button variant='contained'>DownLoad Resume</Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/*  <form>
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
      </form> */}
    </div>
  );
};

export default Particle;
