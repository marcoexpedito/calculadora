function inputKey(key){
    let screen = document.getElementById('screen');
    screen.value += key;
}

function excluirChar(){
    let screen = document.getElementById('screen');
    let screenText = screen.value;
    screen.value = screenText.substring(0, screenText.length -1);
}

function limparTela(){
    document.getElementById('screen').value = '';
}

function calcularResultado(){
    let screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Erro!'
    }
}