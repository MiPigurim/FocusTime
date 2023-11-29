import { controls } from "./elements.js";

export function registersControls() {
  controls.addEventListener("click", (event) => {
    console.log(event.target);
  });
}
