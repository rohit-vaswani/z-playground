import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Label = Text

interface IProps {
  id: string
  name: string
  onSelection: () => void
  isActive: boolean
}


export const SubCategoryItem = (props: IProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('HERE')
        props.onSelection()
      }}
    >
      <Label
        style={StyleSheet.flatten([
          styles.tag,
          {
            backgroundColor: props.isActive ? 'blue' : undefined
          }
        ])}
        children={props.name}
      />
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#2b2b2b',
    borderRadius: 16,
    overflow: 'hidden'
  }
})