import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email,  password, loading } = this.state;

    this.setState({error: '', loading: true})

    firebase.auth().signInWithEmailAndPassword(email,  password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,  password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this))
      });
      //.catch runs if a log in attemp failed
  }
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }
  onLoginFail() {
    this.setState({loading: false, error: 'authentication Failed'});
  }

  renderButton() {
    if (this.state.loading){
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Log In
      </Button>
    );
  }

  render() {
    //when set state is called the component re-render
    //when the components is rerendered the value of the text is set equal to state.text
    return(
      <Card>
        <CardSection >
          <Input
            placeholder='user@gmail.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
           />
        </CardSection>

        <CardSection >
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
           />
        </CardSection>

        <Text style={styles.errorTextStyles}>
        {this.state.error}
        </Text>

        <CardSection >
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyles: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};

export default LoginForm;
