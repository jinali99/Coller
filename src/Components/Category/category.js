import { get } from 'lodash'
import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/productCard'
import classes from './category.module.css'
import { productData } from '../../data'

const Category = () => {
    const params = useParams()
    const categoryName = get(params, 'categoryName')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const products = productData.filter(
        (item) => item.categoryName === categoryName,
    )
    const productList = useMemo(
        () =>
            products.map((item) => {
                return (
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
            }),
        [products],
    )

    return (
        <div>
            <h1 className={classes.categoryTitle}>
                {categoryName.toUpperCase()}
            </h1>
            <div className={classes.container}>{productList}</div>
        </div>
    )
}

export default Category
