// Write your code here
import './index.css'

import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {destinationItem} = this.props
    const {name, imgUrl} = destinationItem
    return (
      <li className="Item">
        <img src={imgUrl} className="Img" alt={name} />
        <p className="para">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
