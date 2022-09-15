// Write your code here
import './index.css'
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

// import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {destinationsList} = this.props

    const filteredList = destinationsList.filter(Each =>
      Each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="SearchBox">
          <input
            type="search"
            className="Search"
            placeholder="Search"
            onChange={this.onSearch}
          />
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="Box">
          {filteredList.map(Each => (
            <DestinationItem destinationItem={Each} key={Each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
