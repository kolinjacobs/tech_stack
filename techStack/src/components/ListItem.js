import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
//the star gets all of the actions that are exported
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId} = this.props;

    if (library.id === selectedLibraryId){
      return(
        <Text>{library.description}</Text>
      );
    }
  }

  render() {
    const { titleStyles } = styles;
    const {id, title } = this.props.library;

    console.log(this.props);
    return(
        <TouchableWithoutFeedback onPress={() =>
          this.props.selectLibrary(id)}
          >
          <View>
            <CardSection>
              <Text style={titleStyles}>
                {title}
              </Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  return { selectedLibraryId: state.selectedLibraryId }
};
//the first connect argument is the mapStateToProps function
//the next argument passes the actions to the component as a prop
//it also send the action to the redux store
export default connect(mapStateToProps, actions)(ListItem);
