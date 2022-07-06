import {StyleSheet, View, Button, Text} from 'react-native'

const Container = View
const CoreProductDetails = View
const AddCTA = Button // To be honest, it's a custom View with TouchableOpacity
const ImagePlaceHolder = View // It's a view, with source={{uri; ''}}
const ProductInfo = View
const ProductName = Text
const ProductQuantity = Text
const ProductPrice = Text
export const ProductView = (props: any) => {

  return (
    <Container style={styles.container}>
      <CoreProductDetails style={styles.coreProductDetailsContainer}>
        <ImagePlaceHolder style={styles.productLogo} />
        <ProductInfo style={styles.productInfoContainer}>
          <ProductName children={props.name} numOfLines={2} />
          <ProductQuantity children={props.quantity} />
          <ProductPrice children={props.price} />
        </ProductInfo>
      </CoreProductDetails>
      <AddCTA
        title={'Add'}
        onPress={() => {

        }}
        style={styles.cta}
      />
    </Container>
  )

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  coreProductDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  productLogo: {
    height: 50,
    width: 50,
    backgroundColor: '#2b2b2b'
  },
  productInfoContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  cta: {
    minWidth: 60,
    height: 30
  }
})