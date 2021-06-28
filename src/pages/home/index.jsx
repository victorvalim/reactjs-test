import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from './components/todoList';
import TodoHeader from './components/todoHeader';
import { GlobalStyle } from './components/globalStyle';

const useStyles = makeStyles(() => ({
  root: {
    padding: 10,
  },
}));

export default function TodoIndex() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TodoHeader />
      <hr />
      <TodoList />
      <GlobalStyle />
    </div>
  );
}
