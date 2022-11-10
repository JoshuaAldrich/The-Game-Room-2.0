const ballElem = document.querySelector("[data-ball]")
const Ball_Haste = 0.45
const Bounce_Motion = 124
let BounceGap = Number.POSITIVE_INFINITY

export function setupBall() 
{
  setTop(window.innerHeight / 2)
  document.removeEventListener("keydown", handleJump)
  document.addEventListener("keydown", handleJump)
}
export function updateBall(momentum) 
{
  if (BounceGap < Bounce_Motion) {
    setTop(getTop() - Ball_Haste * momentum)
  } else {
    setTop(getTop() + Ball_Haste * momentum)
  }
  BounceGap += momentum
}
export function getBallRect() 
{
  return ballElem.getBoundingClientRect()
}
function setTop(top) 
{
  ballElem.style.setProperty("--ball-top", top)
}
function getTop() 
{
  return parseFloat(getComputedStyle(ballElem).getPropertyValue("--ball-top"))
}
function handleJump(e) {
  if (e.code !== "Space") return
  BounceGap = 0
}
