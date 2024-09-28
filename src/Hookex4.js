import { useRef } from "react";

const Hookex4 = () => {
    const textAreaEl = useRef(null);
    const handleBtnClick = () => {
      textAreaEl.current.value =
      "The is the story of your life. You are an human being, and you're on a website about React Hooks";
      textAreaEl.current.focus();
    };
    return (
      <section style={{ textAlign: "center" }}>
        <div>
          <button onClick={handleBtnClick}>Focus and Populate Text Field</button>
        </div>
        <label
          htmlFor="story"
          style={{
            display: "block",
            background: "olive",
            margin: "1em",
            padding: "1em"
          }}
        >
          The input box below will be focused and populated with some text
          (imperatively) upon clicking the button above.
        </label>
        <textarea ref={textAreaEl} id="story" rows="5" cols="33" />
      </section>
    );
  };
  
  export default Hookex4