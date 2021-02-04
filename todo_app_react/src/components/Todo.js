import React from 'react';
import { List, ListItem, ListItemText, Button, Modal } from '@material-ui/core';
import '../components-css/Todo.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

import db from '../firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: 100,
    left: 450,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const { id, todo } = props.todo;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState();

  const updateTodo = () => {
    // update the todo with the new input text
    db.collection('todos').doc(id).set({ todo: input }, { merge: true });
    setOpen(false);
  };

  return (
    <div className="section-center">
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Update the todos</h1>
          <form>
            <input
              type="text"
              placeholder={todo}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="modal-input"
            />
            <Button
              type="submit"
              onClick={updateTodo}
              variant="outlined"
              size="small"
              color="primary"
            >
              Update Todo
            </Button>
          </form>
        </div>
      </Modal>
      <List className="todo-item">
        <ListItem>
          <ListItemText
            primary={todo}
            secondary={`make it until the end of the ${new Date().getFullYear()} year`}
          />
        </ListItem>
        <EditIcon className="icon-edit" onClick={(e) => setOpen(true)}>
          Edit me
        </EditIcon>
        <DeleteIcon
          className="icon-delete"
          onClick={(event) => db.collection('todos').doc(id).delete()}
        ></DeleteIcon>
      </List>
    </div>
  );
}

export default Todo;
