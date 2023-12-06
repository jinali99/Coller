import { get } from 'lodash'
import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/productCard'

const ProductData = [
    {
        categoryName: 'slimdrawerbox',
        name: 'slimdrawerbox',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 250,
        sku: 'slimdrawerbox',
        image: '/Images/slimdrawerbox.jpeg',
    },
    {
        categoryName: 'slimdrawerbox',
        name: 'slimdrawerbox1',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 250,
        sku: 'slimdrawerbox',
        image: '/Images/slimdrawerbox.jpeg',
    },
    {
        categoryName: 'tandomdrawerbox',
        name: 'tandomdrawerbox',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 280,
        sku: 'tandomdrawerbox',
        image: '/Images/tandomdrawerbox.png',
    },
    {
        categoryName: 'pulldown',
        name: 'pulldown',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 300,
        sku: 'pulldown',
        image: '/Images/pulldown.jpg',
    },
    {
        categoryName: 'cutlery',
        name: 'cutlery',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 350,
        sku: 'cutlery',
        image: '/Images/cutlery.jpeg',
    },
    {
        categoryName: 'pantry',
        name: 'pantry',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 400,
        sku: 'pantry',
        image: '/Images/pantry.jpg',
    },
    {
        categoryName: 'elevator',
        name: 'elevator',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 450,
        sku: 'elevator',
        image: '/Images/elevator.jpg',
    },
    {
        categoryName: 'quadrochannel',
        name: 'quadrochannel',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 500,
        sku: 'quadrochannel',
        image: '/Images/quadrochannel.jpg',
    },
    {
        categoryName: 'kitchenaccesories',
        name: 'kitchenaccesories',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 550,
        sku: 'kitchenaccesories',
        image: '/Images/kitchenaccesories.jpeg',
    },
    {
        categoryName: 'hingeseriesunit',
        name: 'hingeseriesunit',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 600,
        sku: 'hingeseriesunit',
        image: '/Images/hingeseriesunit.jpg',
    },
    {
        categoryName: 'rollingshutterbasket',
        name: 'rollingshutterbasket',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 650,
        sku: 'rollingshutterbasket',
        image: '/Images/rollingshutterbasket.jpeg',
    },
    {
        categoryName: 'doorcloser',
        name: 'doorcloser',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 700,
        sku: 'doorcloser',
        image: '/Images/doorcloser.jpg',
    },
    {
        categoryName: 'accesories',
        name: 'accesories',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 750,
        sku: 'accesories',
        image: '/Images/kitchenaccesories.jpeg',
    },
    {
        categoryName: 'cornersolution',
        name: 'cornersolution',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 800,
        sku: 'cornersolution',
        image: '/Images/cornersolution.jpg',
    },
    {
        categoryName: 'tallunit',
        name: 'tallunit',
        description:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: 850,
        sku: 'tallunit',
        image: '/Images/tallunit.jpg',
    },
]

const Category = () => {
    const params = useParams()
    // eslint-disable-next-line no-restricted-globals
    scroll(0, 0)
    const categoryname = get(params, 'categoryname')
    return (
        <div>
            <h1>{categoryname.toUpperCase()}</h1>
            {ProductData.map((item) => {
                return (
                    item.categoryName === categoryname && (
                        <ProductCard
                            key={item.sku}
                            categoryName={item.categoryName}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            sku={item.sku}
                            image={item.image}
                        />
                    )
                )
            })}
        </div>
    )
}

export default Category
