import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, FlatList, StyleSheet } from 'react-native';

// Componente que representa uma mensagem no chat
const ChatMessage = ({ message }) => (
  <View style={[styles.messageContainer, message.isAluno ? styles.alunoMessage : styles.professorMessage]}>
    <Text style={styles.messageSender}>{message.sender}</Text>
    <Text style={styles.messageTime}>{message.time}</Text>
    <Text style={styles.messageContent}>{message.content}</Text>
  </View>
);

// Componente principal do aplicativo
function Chat() {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'Professor', time: '10:00', content: 'Olá alunos!', isAluno: false },
    { id: '2', sender: 'Aluno', time: '10:05', content: 'Olá professor!', isAluno: true },
  ]); // Estado para armazenar as mensagens do chat
  const [inputText, setInputText] = useState(''); // Estado para armazenar o texto digitado pelo usuário
  const [filter, setFilter] = useState(null); // Estado para controlar o filtro de mensagens

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: Math.random().toString(),
        sender: 'Aluno', // Exemplo: sempre que enviar uma mensagem, será considerado como "Aluno"
        time: new Date().toLocaleTimeString(),
        content: inputText.trim(),
        isAluno: true,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const filteredMessages = filter ? messages.filter(message => filter === 'aluno' ? message.isAluno : !message.isAluno) : messages;

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Pressable
          style={[styles.filterButton, filter === null && styles.activeFilter]}
          onPress={() => setFilter(null)}
        >
          <Text style={styles.filterText}>Todos</Text>
        </Pressable>
        <Pressable
          style={[styles.filterButton, filter === 'aluno' && styles.activeFilter]}
          onPress={() => setFilter('aluno')}
        >
          <Text style={styles.filterText}>Alunos</Text>
        </Pressable>
        <Pressable
          style={[styles.filterButton, filter === 'professor' && styles.activeFilter]}
          onPress={() => setFilter('professor')}
        >
          <Text style={styles.filterText}>Professores</Text>
        </Pressable>
      </View>
      <FlatList
        data={filteredMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatMessage message={item} />}
        contentContainerStyle={styles.messagesContainer}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          value={inputText}
          onChangeText={setInputText}
          multiline
          onSubmitEditing={sendMessage}
          onKeyPress={handleKeyPress}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
  },
  filterButton: {
    paddingVertical: 8,
  },
  activeFilter: {
    borderBottomWidth: 2,
    borderColor: '#25D366',
  },
  filterText: {
    fontSize: 16,
  },
  messagesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
  },
  messageContainer: {
    maxWidth: '80%',
    marginBottom: 8,
    padding: 12,
    borderRadius: 8,
  },
  alunoMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  professorMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E4E4E4',
  },
  messageSender: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  messageTime: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  messageContent: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#CCCCCC',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#25D366',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Chat;
