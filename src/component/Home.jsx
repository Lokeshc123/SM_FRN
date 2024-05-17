import React, { useState } from 'react'
import styled from 'styled-components'
import Tasks from './Tasks'

const Home = () => {
    const [tasks, setTasks] = useState([{
        id: 1,
        title: 'Task 1',
        status: "Not started"
    },
    {
        id: 2,
        title: 'Task 2',
        status: "Not started"
    },
    {
        id: 3,
        title: 'Task 3',
        status: "In progress"
    },
    {
        id: 4,
        title: 'Task 4',
        status: "In progress"
    },
    {
        id: 5,
        title: 'Task 5',
        status: "In progress"
    },
    {
        id: 6,
        title: 'Task 6',
        status: "Not started"
    },
    {
        id: 7,
        title: 'Task 7',
        status: "In progress"
    },
    {
        id: 8,
        title: 'Task 8',
        status: "Not started"
    },
    {
        id: 9,
        title: 'Task 9',
        status: "Not started"
    },
    {
        id: 10,
        title: 'Task 10',
        status: "Completed"
    }
    ])

    return (
        <Container>
            <NotStartedContainer>
                <Heading>
                    Not Started
                </Heading>


                {tasks.filter(task => task.status === "Not started").map(task => (
                    <Tasks key={task.id} task={task} setTasks={setTasks} />
                ))}


            </NotStartedContainer>
            <InProgressContainer>
                <Heading>
                    In Progress
                </Heading>
                {tasks.filter(task => task.status === "In progress").map(task => (
                    <Tasks key={task.id} task={task} setTasks={setTasks} />
                ))}
            </InProgressContainer>

            <CompletedContainer>
                <Heading>
                    Completed
                </Heading>
                {tasks.filter(task => task.status === "Completed").map(task => (
                    <Tasks key={task.id} task={task} setTasks={setTasks} />
                ))}
            </CompletedContainer>
        </Container>
    )
}

export default Home

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f1f1f1; /* Light gray background */
    `;

const NotStartedContainer = styled.div`
    width : 30vw;
    height : 60vh;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    margin : 5px;
    border : 1px solid black;
    
    `;
const InProgressContainer = styled.div`
    width : 30vw;
    height : 60vh;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    margin : 5px;
    border : 1px solid black;
    `;
const CompletedContainer = styled.div`
    width : 30vw;
    height : 60vh;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    margin : 5px;
    border : 1px solid black;
    `;

const Heading = styled.h1`
    font-size : 24px;
    margin : 10px;
    align-self: center;
    `;
