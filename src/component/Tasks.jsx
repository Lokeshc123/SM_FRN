import React from 'react'
import styled from 'styled-components'
const Tasks = ({ task, setTasks }) => {
    const changeStatus = () => {
        const newStatus = task.status === "Not started" ? "In progress" : "Completed";
        setTasks(prevTasks => prevTasks.map(item => (
            item.id === task.id ? { ...item, status: newStatus } : item
        )));
    }

    return (
        <Container>
            <Title>{task.title}</Title>
            <Status>{task.status}</Status>
            <Button onClick={changeStatus}>Change Status</Button>
        </Container>
    )
}

export default Tasks

const Container = styled.div`
    background-color: #fff;
   height: 8%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
   flex-direction: row;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    align-self: center;
`;
const Title = styled.h3`
    font-size: 18px;
    margin: 0;
    color: #333;
    display: flex;
    align-items: center;
   
`;
const Status = styled.p`
    font-size: 16px;
    color: #666;
    margin: 0;
`;
const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;