import React, { useState } from 'react';
import { TextField, Button, Container, Typography,Link } from '@mui/material';
import './Css/style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-Container">
      <div className='bg-con1'>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Email" 
            type="email" 
            fullWidth 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            margin="normal" 
          />
          <TextField 
            label="Password" 
            type="password" 
            fullWidth 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            margin="normal" 
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
        {/* Add Sign Up Link here */}
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '15px',color:"white" }}>
          Don't have an account?{' '}
          <Link href="/register" variant="body2">
            Sign Up
          </Link>
        </Typography>
      </div>
    </div>
  );
}

export default Login;
