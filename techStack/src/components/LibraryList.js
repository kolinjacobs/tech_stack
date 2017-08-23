import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';
//connect is used to get access to the the redux state
class LibraryList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library){
    return <ListItem library={library} />;
  }

  render() {
    return(
      <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
      />
    );
  }
}

//this calls the connect function, which returns another function
//that next function is called with LibraryList
//then

//this map state to props takes in an argument of state
const mapStateToProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
