import React from 'react'

const Product = (props) => {
    console.log('props--->', props)
    return (
        <div>
            PRODUCT
            {props.name}
        </div>
    )
}

export default Product
