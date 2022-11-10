const Gap_Height = 200
const Obstacle_Width = 120
const Obstacle_INTERVAL = 1500
const Obstacle_SPEED = 0.75
let obstacle = []
let timeSinceLastObstacle
let passedObstacleCount

export function setupObstacle() {
  document.documentElement.style.setProperty("--obstacle-width", Obstacle_Width)
  document.documentElement.style.setProperty("--gap-height", Gap_Height)
  obstacle.forEach(obstacle => obstacle.remove())
  timeSinceLastObstacle = Obstacle_INTERVAL
  passedObstacleCount = 0
}

export function updateObstacle(delta) {
  timeSinceLastObstacle += delta

  if (timeSinceLastObstacle > Obstacle_INTERVAL) {
    timeSinceLastObstacle -= Obstacle_INTERVAL
    createObstacle()
  }

  obstacle.forEach(pipe => {
    if (pipe.left + Obstacle_Width< 0) {
      passedObstacleCount++
      return pipe.remove()
    }
    pipe.left = pipe.left - delta * Obstacle_SPEED
  })
}

export function getPassedObstacleCount() {
  return passedObstacleCount
}

export function getObstacleRects() {
  return obstacle.flatMap(pipe => pipe.rects())
}
