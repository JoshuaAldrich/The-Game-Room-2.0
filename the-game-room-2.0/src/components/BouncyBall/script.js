import { updateBall, setupBall, getBallRect } from "./BouncyBall"
import {
  updatePipes,
  setupobstable,
  getPassedobstableCount,
  getobstableRects,
} from "./obstable.js"

document.addEventListener("keypress", handleStart, { once: true })
const title = document.querySelector("[data-title]")
const subtitle = document.querySelector("[data-subtitle]")

let lastTime
function updateLoop(time) {
  if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(updateLoop)
    return
  }