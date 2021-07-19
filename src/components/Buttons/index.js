import "./style.css";

export const Buttons = ({ tasks, hideDone, setTasks, setHideDone }) => {
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const finishAllTasks = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  return (
    <div className="buttons">
      {tasks.length > 0 && (
        <>
          <button
            onClick={toggleHideDone}
            className="buttons__button "
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
          <button
            onClick={finishAllTasks}
            className="buttons__button"
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
      </button>
        </>
      )}
    </div>
  );
};