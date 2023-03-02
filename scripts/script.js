function calcular(n1, n2) {
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    Selection = document.getElementById("selector").value

    switch (Selection) {
        case '+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
            break

        case '-':
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}`
            break

            case '*':
            calculo = (n1 * n2)
            document.getElementById("resultado").innerHTML = `O resultado da multiplicação de ${n1} * ${n2} é = ${calculo}`
            break

        case '/':
            calculo = Math.round(n1 / n2)
            if (Number.isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = `Inseria um divisível válido!`
            } else {
                document.getElementById("resultado").innerHTML = `O resultado da divisão de ${n1} / ${n2} é = ${calculo}`
                break
            }
    }
}