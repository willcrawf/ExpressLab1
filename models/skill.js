const skills = [
    {id: 125223, skill: 'JavaScript', mastered: false},
    {id: 127904, skill: 'HTML', mastered: true},
    {id: 139608, skill: 'CSS', mastered: false},
    {id: 123008, skill: 'MatLab', mastered: false}
];

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}