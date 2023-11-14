import { useContext } from "react";
import Context from "../store/context.js";

export default function Timer() {
  const ctx = useContext(Context);

  return (
    <div>
      <h4>Timer</h4>
      {ctx.go === true && ctx.timer}
    </div>
  )
}
