import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return <input onChange={this.handleInputChange} />;
  }
}

export default SearchBar;
