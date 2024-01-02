import react from "react"
import { Button } from "react-native"

const TLButton = (props) => {

  const handleMethod = () => {
    props.Method()
  }

 return(
  <Button title={props.Title} onPress={handleMethod}></Button>
 )
}

export default TLButton