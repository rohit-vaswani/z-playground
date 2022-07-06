import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useDataSource} from "./src/hooks/useCategoryDataSource"
import {API_REGISTRY} from "./src/configurations"
import {CategoryView} from "./src/components/category/category.view"
import {SubCategoryView} from "./src/components/sub-category/sub-category.view"
import {getProductsEndPoint} from "./src/helpers/sub-category-api"
import {ProductsListView} from "./src/components/products/product-list.view"


const Container = View
const ResponseCount = Text

export default function App() {

    const [response] = useDataSource(API_REGISTRY.CATEGORY)
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
    const [activeSubCategoryIndex, setSubActiveCategoryIndex] = useState(0)
    const subCategories = response?.data[activeCategoryIndex]?.sub_categories

    const [productsResponse, fetchData] = useDataSource(getProductsEndPoint(API_REGISTRY.PRODUCTS, '{{subcategory_dummy_id}}', subCategories?.[activeSubCategoryIndex]?.dummy_id))

    useEffect(() => {
        fetchData()
    }, [activeCategoryIndex, activeSubCategoryIndex])

    return (
        <Container style={styles.container}>
            <CategoryView
                name={response?.data[activeCategoryIndex]?.category}
            />
            <SubCategoryView
                data={subCategories}
                containerStyle={styles.subCategoryContainer}
                onSelection={ (newIndex) => {
                    console.log('CB Called?')
                    setSubActiveCategoryIndex(newIndex)
                }}
                activeIndex={activeSubCategoryIndex}
            />
            <ProductsListView
                products={productsResponse?.data}
            />
        </Container>
    );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 20
    },
    subCategoryContainer: {
        marginTop: 16
    },

});





const cartInfo = {}
const cardProductMap = {
    1: {quantity: 11, price: 100},
    2: {quantity: 10, price: 10},
}


// Product 1 - Add
// Product 1 - Add
const onProductChange = (productId, basePrice, operation) => {

    const productDetails = cardProductMap[productId] ?? {}
    let {quantity = 0, price} = productDetails

    const newQuantity = operation === 'ADD' ? ++quantity : --quantity
    cardProductMap[productId] = {
        ...cardProductMap[productId],
        quantity: newQuantity,
        price: price
    }

    const derivedMap = {
        totalQuantity: 0,
        totalAmount: 0
    }

    const cartDetails = Object.keys(cardProductMap).reduce( (derivedMap, productId) => {
        const {quantity = 0, price} = cardProductMap[productId]
        derivedMap.quantity += quantity
        derivedMap.totalAmount += price*quantity
        return derivedMap
    }, derivedMap)


    return {
        ...cartDetails,
        productMap: cardProductMap
    }

}


























/*


        // Derived Data
        Cart Amount
        Total Items


        const cardProductMap = {
            1: {quantity: 11, price: 100},
            2: {quantity: 10, price: 10},
        }


        const cartInfo = {
            cardProductMap: cardProductMap,
            amount: 1100,
            items: 21
        }

        Products ID with quantity.
 */


/*

            <ResponseCount children={(response ?? []).data?.length} style={{
                color: '#fff',
                fontSize: 12
            }}/>
 */