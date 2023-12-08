import { get } from 'lodash'
import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/productCard'
import classes from './category.module.css'
import { ProductData } from '../../data'

const Category = () => {
    const params = useParams()
    // eslint-disable-next-line no-restricted-globals
    scroll(0, 0)
    const categoryname = get(params, 'categoryname')
    return (
        <div>
            <h1 className={classes.categoryTitle}>
                {categoryname.toUpperCase()}
            </h1>
            <div className={classes.container}>
                {ProductData.map((item) => {
                    return (
                        item.categoryName === categoryname && (
                            <div className={classes.productCardWrapper}>
                                <ProductCard
                                    key={item.sku}
                                    categoryName={item.categoryName}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    sku={item.sku}
                                    image={item.image}
                                    id={item.id}
                                    qty={item.qty}
                                    stock={item.stock}
                                    rating={item.rating}
                                />
                            </div>
                        )
                    )
                })}
            </div>
        </div>
    )
}

export default Category
