import { CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router';
import { Card, CardContent, Container, Grid } from 'semantic-ui-react';
import Navigation from '../../Navigation/Navigation';
import { allProjects } from '../../Projects/Projects';

const ProjectDetails = () => {
  const projects = allProjects;
  const projectId = useParams();
  console.log(projectId.pid);
  console.log(projects);
  return (
    <Box id='project-bg'>
      <Navigation />
      <Container
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography
          color='whitesmoke'
          variant='h3'
          gutterBottom
          component='div'
          sx={{ textAlign: 'center' }}
        >
          Description
        </Typography>

        {projects.map(
          (p) =>
            p.id === parseInt(projectId.pid) && <Details key={p.id} p={p} />
        )}
      </Container>
    </Box>
  );
};

export default ProjectDetails;

const Details = ({ p }) => {
  const { name, description, url } = p;
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Card sx={{ width: '100%' }}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='auto'
          image={url}
          width='100%'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
