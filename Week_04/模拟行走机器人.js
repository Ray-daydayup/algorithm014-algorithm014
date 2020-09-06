/**
 * https://leetcode-cn.com/problems/walking-robot-simulation/description/
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  /**
   * 首先确定方向，然后确定移动后的坐标，每次计算平方和比较更新
   */
  // [x,y] 1正向走，0不走，-1反方向走,最后为度数
  const set = new Set()
  obstacles.forEach((item) => {
    set.add(item.toString())
  })
  let max = 0
  const direction = [0, 1, 90]
  const location = [0, 0]
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] < 0) {
      changeDirection(direction, commands[i])
      continue
    }
    for (let j = 0; j < commands[i]; j++) {
      location[0] += direction[0]
      location[1] += direction[1]
      if (set.has(location.toString())) {
        location[0] -= direction[0]
        location[1] -= direction[1]
        break
      }
    }

    const temp = location[0] ** 2 + location[1] ** 2
    if (temp > max) max = temp
  }
  return max

  function changeDirection(direction, command) {
    if (command === -1) {
      direction[2] += 90
      if (direction[2] >= 360) direction[2] -= 360
    } else {
      direction[2] -= 90
      if (direction[2] < 0) direction[2] += 360
    }
    if (direction[2] === 0) {
      ;[direction[0], direction[1]] = [-1, 0]
    }
    if (direction[2] === 90) {
      ;[direction[0], direction[1]] = [0, 1]
    }
    if (direction[2] === 180) {
      ;[direction[0], direction[1]] = [1, 0]
    }
    if (direction[2] === 270) {
      ;[direction[0], direction[1]] = [0, -1]
    }
  }
}

console.log(
  robotSim(
    [7, -2, -2, 7, 5],
    [
      [-3, 2],
      [-2, 1],
      [0, 1],
      [-2, 4],
      [-1, 0],
      [-2, -3],
      [0, -3],
      [4, 4],
      [-3, 3],
      [2, 2]
    ]
  )
)
