import {FlatList} from 'react-native'
import {ProductView} from "./product.view"


interface IProductListProps {
  products: Array<any>
}

export const ProductsListView = (props: IProductListProps) => {

  // Needs to be memoized using useCallback
  const itemRenderer = (info) => {
    return (
      <ProductView
        {...info.item}
      />
    )
  }

  return (
    <FlatList
        data={props.products}
        horizontal={false}
        renderItem={itemRenderer}
    />
  )

}