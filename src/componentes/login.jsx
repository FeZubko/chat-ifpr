import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import RegisterScreen from './cadastro';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.endsWith('@ifpr.edu.br')) {
      Alert.alert('Erro', 'Por favor, use um email do IFPR (ifpr.edu.br)');
      return;
    }
    navigation.navigate('chat')
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      {/* Seu código de status bar aqui */}

    
      <Text style={styles.accessTitle}>Acesso ao Chat</Text>
      <Text style={styles.infoText}>Use seu e-mail e senha cadastrados para acessar o painel de conversas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <Button
        title="Login"
        onPress={handleLogin}
        color="#219653"
        style={styles.loginButton}
      />
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('cadastro')}
        color="#219653"
        style={styles.registerButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#052F0E',
  },
  statusBar: {
    width: '100%',
    height: 44,
    backgroundColor: '#052F0E',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 108,
  },
  accessTitle: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
    color: '#FEFEFE',
    marginTop: 30,
  },
  infoText: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 32,
    color: '#FEFEFE',
    textAlign: 'center',
    width: 255,
    marginTop: 41,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 55,
  },
  input: {
    width: 327,
    height: 64,
    backgroundColor: '#C9FDD5',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  loginButton: {
    width: 327,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    width: 327,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
