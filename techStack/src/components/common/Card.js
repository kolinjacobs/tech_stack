import React from 'react';
import { View } from 'react-native';

//when a compnent is placed inside of other
//than that component will show up as props.children
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
    {/*this will render the components passed inside of card*/}
    {props.children}
    </View>
  );
};

//add style
const styles = {
  //the style names are arbitrary
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export  { Card };
