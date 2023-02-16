import React from 'react'

export const Card = (props) => {
    const {image,name,genre,produced,studio} = props
    return (
        <>
            <div className="box">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="data">
                    <div className='title'>{name}</div>
                    <div className="p"><span>genre:</span>{genre}</div>
                    <div className='studios'><span>studios:</span>{studio}</div>
                    <div className="produce"><span>produced by:</span>{produced}</div>
                </div>
            </div>
        </>
    )
}
