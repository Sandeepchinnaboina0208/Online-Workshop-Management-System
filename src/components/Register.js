import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import './Css/style.css'; // Make sure this path is correct based on your folder structure

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debugging: log the form data
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Confirm Password: ", confirmPassword);
    console.log("Role: ", role);

    // Perform form validation before submitting to the backend
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // After validation, send the data to the backend (API or backend logic)
    // Example: axios.post('/api/register', { name, email, password, role });
  };

  return (
    <div className="reg-Container">
      <div className="reg-bg-con">
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form className='reg-form' onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin="normal"
            required
          />

          {/* Role Selector */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Role"
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="instructor">Instructor</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>

        {/* Add Login Link here */}
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '15px', color: 'white' }}>
          Already have an account?{' '}
          <Link href="/login" variant="body2">
            Login
          </Link>
        </Typography>
      </div>
    </div>
  );
}

export default Register;
