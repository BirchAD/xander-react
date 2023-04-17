import ConditionalRendering from "./tutorial/MultipleReturnsTernary";
import ConditionalClassNames from "./tutorial/ConditionalClassNames";
import ShortCircuitEvaluation from "./tutorial/ShortCircuitEvaluation";
import Iteration from "./tutorial/Iteration";
import ChangeChildren from "./exercises/01-change-children/ChangeChildren";
import AlternatingBackground from "./exercises/02-alternating-background/AlternatingBackground";
import CardContainer from "./exercises/03-map-components/ComponentExercise";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faArrowUp, fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas, faArrowUp);

import "./App.css";

function App() {
  return (
    <div className="App">
      <AlternatingBackground />
    </div>
  );
}

export default App;
