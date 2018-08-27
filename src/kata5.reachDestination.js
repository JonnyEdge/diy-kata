const reachDestination = (distance, speed) => {
    const journeyTime = distance / speed
    const journeyTimeRounded = (Math.round(journeyTime * 2) / 2).toFixed(1)
    return journeyTimeRounded
}

console.log(reachDestination(44, 10))
console.log(reachDestination(42, 10))

module.exports = reachDestination;
