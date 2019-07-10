import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import TextField from '@material-ui/core/TextField';
import SplashScreen from 'react-native-splash-screen';

const LoginPage = () => {
  SplashScreen.hide();
  return (
    <View>
    <TextField
       id="standard-name"
       label="Name"
       value="Hi"
       margin="normal"
     />
    </View>
  );
};

export default LoginPage;
