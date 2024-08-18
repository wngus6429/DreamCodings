{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };
  // Partial 은 부분적인것만 허용하고 싶을때 이용한다.
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
  // {
  //   title: 'learn TypeScript',
  //   description: 'study hard',
  //   label: 'study',
  //   priority: 'low'
  // }
}
