const createChassis = () => {
    const newChassisObject = {}
    return newChassisObject
}
let chassis = createChassis()
console.log(chassis)

const addBody = (chassisObject) => {
    chassisObject.body = "Fever"
    
    return chassisObject
}

let chassisWithBody = addBody(chassis)
console.log(chassisWithBody)


const addWheels = (chassisWheels) => {
    chassisWheels.wheels = 4
    return chassisWheels
}
let chassisWithWheels = addWheels(chassis)
console.log(chassisWithWheels)

const addEngine = (chassisEngine) => {
    chassisEngine.engine = "4.8L"
    return chassisEngine
}
let chassisWithEngine = addEngine(chassis)
console.log(chassisWithEngine)


const addSteeringWheel = (chassisSteeringWheel) => {
    chassisSteeringWheel.steeringWheel = "Tilting"
    return chassisSteeringWheel
}
let chassisWithSteeringWheel = addSteeringWheel(chassis)
console.log(chassisWithSteeringWheel)

const addDriveTrain = (chassisDriveTrain) => {
    chassisDriveTrain.drivetrain = "Two wheel drive"
    return chassisDriveTrain

}
let chassisWithDriveTrain = addDriveTrain(chassis)
console.log(chassisWithDriveTrain)