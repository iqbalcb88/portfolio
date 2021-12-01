import React from 'react';
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.css';
import { Box, Typography } from '@mui/material';
import Navigation from '../../Navigation/Navigation';

const SERVICE_ID = 'service_cfpds0l';
const TEMPLATE_ID = 'template_cb08dfj';
const USER_ID = 'user_PHOAV2GvV8evXh7XhYXmj';
const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <Box className='contact-bg'>
      <Navigation />
      <Container className='contact'>
        <Box className='form-style'>
          <Typography
            color='whitesmoke'
            gutterBottom
            variant='h1'
            component='div'
          >
            Write Me!
          </Typography>
          <Form onSubmit={handleOnSubmit}>
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              name='user_email'
              placeholder='Email…'
              required
              icon='mail'
              iconPosition='left'
            />
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Name'
              name='user_name'
              placeholder='Name…'
              required
              icon='user circle'
              iconPosition='left'
            />
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Message'
              name='user_message'
              placeholder='Message…'
              required
            />
            <Button type='submit' color='green'>
              Submit
            </Button>
          </Form>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
