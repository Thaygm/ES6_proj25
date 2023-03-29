const alunos = [
    {nome: 'Levi', nota: 9},
    {nome: 'Caio', nota: 7},
    {nome: 'Catarina', nota: 5},
    {nome: 'Pedro', nota: 6},
    {nome: 'Fernando', nota: 4},
];

console.log(alunos)

const alunosAprovados = alunos.filter(function(item) {
    return item.nota >=6
})

console.log( alunosAprovados );