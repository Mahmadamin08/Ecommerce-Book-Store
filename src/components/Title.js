import React from 'react'

const Title = (props) => {
    const title = props.title;
    const desc = props.desc;
    return (
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default Title
