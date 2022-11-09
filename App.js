
import React, { Component, useEffect, useState } from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { Logo } from './src/components/Logo';
import { colors } from './src/constants/theme';
import { Block, Text } from './src/components';
import { theme } from './src/constants/theme';
import { Button } from './src/components/Button';

import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const renderPhoneNumberInput = () => {
    return (
      <View style={{ paddingHorizontal: 20, height: '100%', flex: 1, justifycontent: 'center', backgroundColor: '#e9d9cb' }}>
        <Logo />
        <Text color={colors.gray2} h3 style={{ alignSelf: 'flex-start', marginBottom: -16 }}>Username</Text>
        <TextInput
          style={{
            marginTop: 15, borderRadius: 0, paddingBottom: 4,
            borderWidth: 0,
            borderBottomColor: colors.gray2,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
          placeholder={"Please enter username"}
        />
        <Text color={colors.gray2} h3 style={{ alignSelf: 'flex-start', marginTop: 24, marginBottom: -5 }}>Password</Text>
        <TextInput
          style={{
            marginTop: 15, marginBottom: 20, borderRadius: 0, paddingBottom: 4,
            borderWidth: 0,
            borderBottomColor: colors.gray2,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
          secureTextEntry={true}
          placeholder={"Please enter password"}
        />
        <Block style={{ marginTop: 60 }}>
          <Button style={{ backgroundColor: '#280606'}} onPress={this.onSubmit} title={"Login"} />
        </Block>

        <Block center style={{ alignSelf: 'center', marginTop: 115, marginBottom: 16 }} flex={false} row>
          <Text h2 gray>Don't have an account? </Text>
          <Button textStyle={{ fontSize: 16, fontFamily: "Roboto-Medium" }} onlyText title={"Signup"} />
        </Block>
        <Block center style={{ alignSelf: 'center', marginTop: 10, marginBottom: 16 }} flex={false} row>
          <Button textStyle={{ fontSize: 16, fontFamily: "Roboto-Medium" }} onlyText title={"Forgot password?"} />
        </Block>
      </View>
    );
  }


  return (
    <KeyboardAvoidingView style={{ flex: 1, height: '100%', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#e9d9cb' }} enabled behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={50}>
        <ScrollView>
          {renderPhoneNumberInput()}
        </ScrollView>
      </KeyboardAvoidingView>
  )
}