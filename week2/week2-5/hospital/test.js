var users = [{
    name: 'Harry',
    kidneys: [{
        healthy: true
    }] 
}]

const userkidney = users[0].kidneys
const countkidney = userkidney.length

console.log(countkidney)