import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Modal } from 'react-native';

const Home = () => {
  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text style={styles.header}>
        Home Page
      </Text>

      <Text style={styles.secondaryText}>
        Type some text and submit:
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(!modalVisible)}
      ><Text style={styles.textStyle}>Submit</Text></Pressable>

      <Modal
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You have typed: {text}!</Text>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
  },
  secondaryText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#000',
  },
  input: {
    height: 50,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 3,
    padding: 10,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
});

export default Home;