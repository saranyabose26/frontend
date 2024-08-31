import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  const handleSubmit = (values) => {
    console.log(values);

    if (
      values.email === 'testuser123@gmail.com' &&
      values.password === 'test@123'
    ) {
      navigate(`/home`);
    }

    // Add logic to handle login
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            position: 'fixed',
            inset: 0,
            width: 'fit-content',
            height: 'fit-content',
            margin: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              fontSize: 12,
              backgroundColor: 'yellow',
              padding: 10,
            }}
          >
            <div>Credentials to Login :</div>
            <div>Email: testuser123@gmail.com</div>
            <div>Password: test@123</div>
          </div>
          <div style={{ gap: 10, display: 'flex', flexDirection: 'row' }}>
            <label style={{ maginRight: 10 }} htmlFor='email'>
              Email
            </label>
            <Field name='email' type='email' />
          </div>
          <ErrorMessage
            style={{ color: 'red', marginLeft: '10px' }}
            name='email'
            component='div'
          />
          <div style={{ gap: 10, display: 'flex', flexDirection: 'row' }}>
            <label htmlFor='password'>Password</label>
            <Field name='password' type='password' />
          </div>
          <ErrorMessage
            style={{ color: 'red', marginLeft: '10px' }}
            name='password'
            component='div'
          />
          <button type='submit'>Login</button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
