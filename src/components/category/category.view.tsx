import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

interface ICategoryProps {
  name?: string
}

const Container = View
const CategoryName = Text
const ImagePlaceHolder = View

export const CategoryView = (props: ICategoryProps) => {



  return (
    <Container style={styles.container}>
      <ImagePlaceHolder style={styles.imagePlaceHolder} />
      <CategoryName children={props.name} />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  imagePlaceHolder: {
    height: 20,
    width: 20,
    backgroundColor: '#2b2b2b',
    marginRight: 20
  }
})