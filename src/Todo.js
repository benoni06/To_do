export const Todo = ({ text, taskValueChange, addTask, setFilter }) => {
  return (
    <div className="Tod">
      <div className="centered">
        <span>
          <input
            type="text"
            className="border"
            placeholder="Add Task"
            value={text}
            onChange={(e) => taskValueChange(e.target.value)}
          />
          
        </span>
      </div>
      <br></br>
      <span>
      <button type="button" class="butt" onClick={() => addTask()}>
            Add
          </button>
        <button type="button" class="butt" onClick={() => setFilter("done")}>
          Show Done
        </button>
        <button
          type="button"
          class="butt"
          onClick={() => setFilter("not done")}
        >
          Not Done
        </button>
        <button type="button" class="butt" onClick={() => setFilter("All")}>
          Show All
        </button>
      </span>
    </div>
  );
};