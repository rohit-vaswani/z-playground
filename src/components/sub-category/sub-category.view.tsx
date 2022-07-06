import {FlatList, StyleSheet, View, StyleProp, ViewStyle} from 'react-native'
import {SubCategoryItem} from "./sub-category-item.view"

interface ISubCategoryProps {
  data: Array<any> // In case of TS, It would be properly typed
  containerStyle?: StyleProp<ViewStyle>
  onSelection: () => void
  activeIndex: number
}


const SubCategoryList = FlatList
const SeparatorView = View
const Container = View
export const SubCategoryView = (props: ISubCategoryProps) => {


  const itemRenderer = (info) => {
    return (<SubCategoryItem
      name={info.item.name}
      id={info.item.id}
      isActive={info.index === props.activeIndex}
      onSelection={props.onSelection.bind(null, info.index)}/>)
  }

  return (
    <Container style={props.containerStyle}>
      <SubCategoryList
        data={props.data}
        horizontal={true}
        ItemSeparatorComponent={() => <SeparatorView style={styles.separator}/>}
        renderItem={itemRenderer}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  separator: {
    width: 10,
    height: '100%',
  }
})