import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Project.css';

const Projects = () => {
  return (
    <Box id='project-bg'>
      <Navigation />
      <Container>
        <Typography
          color='whitesmoke'
          variant='h2'
          gutterBottom
          component='div'
        >
          Projects
        </Typography>
        <Grid container spacing={2}>
          {allProjects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

const Project = ({ project }) => {
  const { name, description, url, live } = project;
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='auto'
          image={url}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography
            sx={{ height: 100 }}
            variant='body2'
            color='text.secondary'
          >
            {description.slice(0, 200)}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button variant='contained'>Details</Button>
          <a
            target='_blank'
            rel='noreferrer'
            style={{ textDecoration: 'none' }}
            href={live}
          >
            {' '}
            <Button variant='contained'>Visit Site</Button>
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
};

const allProjects = [
  {
    name: 'Mrittika Pottery',
    description:
      'Mrittika is an ethical brand to empower rural artisans to rise above poverty    Mrittika is truly a household brand in bangladesh growing presence outside of bangladesh. As an user anyone can place order amd manage order users orders will be on pending status until confirmed by an admin users will have multiple login options an admin can see more options on dashboard than a user admin can add new product remove product admin have priviliges to change product status of any users and updated status will be shown on users dashboard   admin can make any user an admin admin able to cancalled any users orders an admin can manage other users orders',
    url: 'https://i.ibb.co/J5F2Mt1/m1.png',
    live: 'https://mrittika-pottery.web.app/',
  },
  {
    name: 'Fantasy Park',
    description:
      'This sites created conceptually on theme park.Admin/User Login System Implemented. Admin Can See All Orders also manage them.Admin able to add new event and delete exist events.users able to place order and manage there order . Users can see theres order review order place order with some additional information. Its responsive for mobile and pc',
    url: 'https://i.ibb.co/JR65R4w/f1.png',
    live: 'https://fantasypark-3c085.web.app/',
  },
  {
    name: 'Fantasy Park',
    description:
      'This sites created based on eye care facility.    It is an eye hospital website.    you can take consultancy online. online payment system online appointment system',
    url: 'https://i.ibb.co/Kh8TQ7B/v1.png',
    live: 'https://vision-care-hospital.web.app/',
  },
];
