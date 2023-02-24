import React, { useState } from 'react'
import Title from '../components/Title';

const Home = () => {
    const [title, setTitle] = useState("Ms Dhoni");
    const [desc, setDesc] = useState("Mahmadamin Lodhiya");

    return (
        <div  >
            <Title title={title} desc={desc} />
        </div>
    )
}

export default Home
