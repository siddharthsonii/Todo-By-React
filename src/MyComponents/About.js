import React from 'react'

export const About = () => {
    let myStyle1 = {
        minHeight: "74.5vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle1}>
            <h3>Hello, This app is designed by Siddharth Soni.</h3>
            <p>This app is completely designed with React Native.</p>
            <p>This is my first app which is designed to create Todos.
            </p>
        </div>
    )
} 
