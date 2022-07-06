import {Text} from 'react-native'

interface ICardProps {
  index: number
}

export const CardView = (props: ICardProps) => {
  return (<Text children={`Card: ${props.index}`} />)
}