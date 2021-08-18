import { useState } from "react";
import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Section } from "../../common/Section";
import { Buttons } from "./Buttons";
import { Header } from "../../common/Header";
import { Main } from "../../common/Main";
import { useTasks } from "../../useTasks";
import { useLocalStorageTasks } from "../../useLocalStorageTasks";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const [tasks, setTasks] = useLocalStorageTasks();

  const {
    newTaskContent,
    addNewTask,
    toggleTaskDone,
    renameTask,
    removeTask,
    cancelRenameTask,
    setNewTaskContent,
    changeTaskContent,
    finishAllTasks,
  } = useTasks({ tasks, setTasks });

  return (
    <>
      <Header title="Lista zadań" />
      <Main>
        <Section
          title={"Dodaj nowe zadanie"}
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title={"Lista zadań"}
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              finishAllTasks={finishAllTasks}
              toggleHideDone={toggleHideDone}
            />
          }
          body={
            <TasksList
              tasks={tasks}
              newTaskContent={newTaskContent}
              hideDone={hideDone}
              toggleTaskDone={toggleTaskDone}
              renameTask={renameTask}
              removeTask={removeTask}
              changeTaskContent={changeTaskContent}
              cancelRenameTask={cancelRenameTask}
              setNewTaskContent={setNewTaskContent}
            />
          }
        />
      </Main>
    </>
  );
}

export default Tasks;