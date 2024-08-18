{
  type ToDo = {
    title: string;
    description: string;
  };
  // Readonly 붙일수 있다.
  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja';
  }
}
