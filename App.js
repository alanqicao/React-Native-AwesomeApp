import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import Todo from "./Todo";
//uuid

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [gigs, setEigs] = useState([
    {
      description:'freelance job with Qazi',
      amount:499.99
    }
  ]);

  const addTodo = () => {
    setTodos([input, ...todos]);
    setInput("");
  };


  const addGig =()=>{
      setEigs([
        ...gigs,{
          description:description,
          amount:amount,
        }
      ])
      setDescription('');
      setAmount('');
  };


  return (
    <SafeAreaView>
      <View>
        <Text style={styles.fireLabel}> Hello world 🚀 </Text>
      </View>
      <ScrollView>
        {todos.map((todo) => (
          <Todo title={todo} />
        ))}
      </ScrollView>

      <TextInput
        style={styles.todoInput}
        value={input}
        
        onChangeText={(text) => {
          setInput(text);
        }}
      />
      <Button title="ADD to do" onPress={addTodo} />
      <View>
        <Text>-----------Freelance Devs to Track Income----------</Text>
      </View>
      <TextInput
        style={styles.gigInput}
        value={description}
        
        placeholder='Enter a description'
        onChangeText={(text) => {
          setDescription(text);
        }}
      />

      <TextInput
        style={styles.gigInput}
        value={amount}
        placeholder='Enter the amount you made($)'
        keyboardType='numeric'
        onChangeText={(text) => {
          setAmount(text);
        }}
      />
<Button disabled={!amount && !description} title="Add gig" onPress={addGig} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoInput: {
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    margin: 20,
  },

  fireLabel: {
    backgroundColor: "red",
    fontSize: 20,
    fontWeight: "bold",
  },

  gigInput:{
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    margin: 20,
  }
});
