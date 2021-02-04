import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import firebase from 'firebase';

import db from './firebase';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
    // return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput('');
  };
  return (
    <div className="App">
      <h1 style={{ marginBottom: '50px', color: 'blue' }}>TODO App</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              marginRight: '20px',
              textTransform: 'capitalize',
            }}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
        >
          Add todo
        </Button>
      </form>

      <ul style={{ margin: '0', padding: '0' }}>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
}

export default App;
