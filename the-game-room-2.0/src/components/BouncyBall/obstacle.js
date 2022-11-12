let obstacles = []
let timeSinceLastObstacle
let passedObstacleCount
const Obstacle_Interval = 1432
const Gap_Height = 190
const Obstacle_Width = 110
const Obstacle_movement = 0.74

export function setupObstacles() {
  document.documentElement.style.setProperty("--obstacle-width", Obstacle_Width)
  document.documentElement.style.setProperty("--gap-height", Gap_Height)
  obstacles.forEach(obstacle => obstacle.remove())
  timeSinceLastObstacle = Obstacle_Interval
  passedObstacleCount = 0
}

export function updateObstacles(delta) {
  timeSinceLastObstacle += delta

  if (timeSinceLastObstacle > Obstacle_Interval) {
    timeSinceLastObstacle -= Obstacle_Interval
    createObstacle()
  }

  obstacles.forEach(obstacle => {
    if (obstacle.left + Obstacle_Width< 0) {
      passedObstacleCount++
      return obstacle.remove()
    }
    obstacle.left = obstacle.left - delta * Obstacle_movement
  }
  )
}

export function getPassedObstaclesCount() {
  return passedObstacleCount
}

export function getObstacleRects() {
  return obstacles.flatMap
  (obstacle => obstacle.rects())
}


function createObstacle() {
  const obstacleElem = document.createElement("div")
  const topElem = createObstacleSegment("top")
  const bottomElem = createObstacleSegment("bottom")
  obstacleElem.append(topElem)
  obstacleElem.append(bottomElem)
  obstacleElem.classList.add("obstacle")
  obstacleElem.style.setProperty(
    "--hole-top",
    randomNumberBetween(
      Gap_Height * 1.4,
      window.innerHeight - Gap_Height * 0.4
    )
  )
  const obstacle = {
    get left() {
      return parseFloat(
        getComputedStyle(obstacleElem).getPropertyValue
        ("--obstacle-left")
      )
    },
    set left(value) {
      obstacleElem.style.setProperty
      ("--obstacle-left", value)
    },
    remove() {
      obstacles = obstacles.filter
      (p => p !== obstacle)
      obstacleElem.remove()
    },
    rects() {
      return [
        topElem.getBoundingClientRect(),
        bottomElem.getBoundingClientRect(),
      ]
    },
  }
  obstacle.left = window.innerWidth
  document.body.append
  (obstacleElem)
  obstacles.push(obstacle)
}

function createObstacleSegment(position) 
{
  const segment = document.createElement
  ("div")
  segment.classList.add
  ("segment", position)
  return segment
}

function randomNumberBetween(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) + min)
}
