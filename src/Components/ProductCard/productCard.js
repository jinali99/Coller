import React from 'react'

const ProductCard = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.name} height={200} width={200} />
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div>{props.description}</div>
        </div>
    )
}

export default ProductCard
