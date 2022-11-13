import React from 'react'

function Card(props) {
    return (
        <div
            style={{
                borderTop: `5px solid ${props.borderColor}`
            }}
            className='card-style d-flex flex-column justify-content-around shadow'>
            <div className='ms-3'>
                <h4 className='card-heading fw-bold'>{props.title}</h4>
                <p className='card-paragraph'>{props.description}</p>
            </div>
            <div className='d-flex justify-content-end me-4'>
                {props.image}
            </div>
        </div>
    )
}

export default Card