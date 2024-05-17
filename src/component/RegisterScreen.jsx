import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(""); // Added name state
    const [confirmPassword, setConfirmPassword] = useState(""); // Added confirmPassword state
    const navigate = useNavigate();

    const handleClick = () => {

        if (confirmPassword !== password) {
            alert("Password and Confirm Password should be same");
            return;
        }
        console.log("Name: ", name); // Updated console log
        console.log("Email: ", email);
        console.log("Password", password);
        navigate("/home");

    }

    return (
        <Container>
            <LoginContainer>
                <h2 style={{ alignSelf: "center" }}>Sign Up for your account</h2> {/* Updated title */}
                <Form>
                    <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="off"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="off"
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="off"
                    />

                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        autoComplete="off"
                    />

                </Form>
                <Button onClick={handleClick}>Sign Up</Button>
                <span style={{ alignSelf: 'flex-end', margin: 5, cursor: 'pointer' }} onClick={() => navigate("/")}>Already have an account? SignIn</span>
            </LoginContainer>
        </Container>
    )
}

export default RegisterScreen

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1; /* Light gray background */
`;

const LoginContainer = styled.div`
  width: 350px; /* Adjust width as needed */
  padding: 40px;
  background-color: #fff; /* White background */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px; /* Maintain the same height */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 15px; /* Adjusted margin-bottom */
  border: 1px solid #ddd; /* Light gray border */
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #999; /* Light blue border on focus */
  }
`;



const Button = styled.button`
  width: 100%;
  padding: 15px 20px;
  background-color: #007bff; 
  color: #fff; 
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0069d9; /* Darker blue on hover */
  }
`;
