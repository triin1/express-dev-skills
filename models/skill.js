const skills = [
    {id: 1, skill: "Programming language", level: "beginner", inProgress: true},
    {id: 2, skill: "Database administration", level: "beginner", inProgress: true},
    {id: 3, skill: "Testing", level: "beginner", inProgress: true},
    {id: 4, skill: "Debugging", level: "beginner", inProgress: true},
    {id: 5, skill: "Communication", level: "advanced", inProgress: false},
    {id: 6, skill: "Problem solving", level: "intermediate", inProgress: true},
    {id: 7, skill: "Teamwork", level: "advanced", inProgress: false},
    {id: 8, skill: "Attention to detail", level: "advanced", inProgress: false},    
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

