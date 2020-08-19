const skills = [
    {id: 125223, skill: 'JavaScript', mastered: false},
    {id: 127904, skill: 'HTML', mastered: true},
    {id: 139608, skill: 'CSS', mastered: false},
    {id: 123008, skill: 'MatLab', mastered: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.mastered= false
    skills.push(skill)
}

function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
}