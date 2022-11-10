const ballElem = document.querySelector("[data-ball]")
const Ball_Haste = 0.45
const Bounce_Motion = 124
let BounceGap = Number.POSITIVE_INFINITY

export function setupBird() {
  setTop(window.innerHeight / 2)
  document.removeEventListener("keydown", handleJump)
  document.addEventListener("keydown", handleJump)
}
