function celsius() {
    var celsius = window.document.querySelector('input#txtcelsius')
    var res = window.document.querySelector('div#resposta')
    var celsius = Number(txtcelsius.value)
    var fahrenheit = ((9 * celsius) + 160)/5;
    res.innerHTML = `<p><strong>${celsius}°C</strong> equivale a graus <strong>${fahrenheit}°F</strong></p>`
}

function fahrenheit() {
    var fahrenheit = window.document.querySelector('input#txtfahrenheit')
    var res = window.document.querySelector('div#resposta1')
    var fahrenheit = Number(txtfahrenheit.value)
    var celsius = ((fahrenheit - 32) / 9) * 5;
    res.innerHTML = `<p><strong>${fahrenheit}°F</strong> equivale a graus <strong>${celsius}°C</strong></p>`
}