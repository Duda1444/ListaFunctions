function calcularMedia(nota1, nota2){
    return (nota1 + nota2) /2;
}

function verificarSituacao(media){
    return media >= 6 ? "aprovado": "reprovado";
}

let media = calcularMedia(8, 7);
let situacao = verificarSituacao(media);

console.log("média:", media);
console.log("situação:", situacao);

