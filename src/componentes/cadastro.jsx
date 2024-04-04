import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!email.endsWith('@ifpr.edu.br')) {
      console.log('Erro', 'Por favor, use um email do IFPR (ifpr.edu.br)');
      return;
    }

    if (password !== confirmPassword) {
      console.log('Erro', 'As senhas não coincidem');
      return;
    }
    

    // Lógica de registro aqui
    console.log('Sucesso', 'Registrado com sucesso!');
    // Reiniciar os campos
    setNome('');
    setMatricula('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    navigation.navigate('login')
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      
      <Text style={styles.accessTitle}>Cadastro</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Matricula"
          value={matricula}
          onChangeText={text => setMatricula(text)}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <Button
        title="Cadastrar"
        onPress={handleRegister}
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
  accessTitle: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 33,
    color: '#FEFEFE',
    marginTop: 30,
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
  registerButton: {
    width: 327,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
});

export default RegisterScreen;
