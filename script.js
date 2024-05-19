function togglePower() {
    const screen = document.getElementById('screen');
    screen.style.display = screen.style.display === 'none' ? 'flex' : 'none';
}

function volumeUp() {
    alert('Subir volumen');
}

function volumeDown() {
    alert('Bajar volumen');
}

function openApp(appNumber) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = '';
    modalBody.className = ''; // Reinicia la clase del modalBody

    if (appNumber === 1) {
        modalBody.innerHTML = '<h2>¿Por qué la Programación?</h2><p>Saludos, espero se encuentren super bien, mi nombre es Hector Jose Mendez Novasd, soy estudiante de Software, es una carrera que me apasiona bastante, realmente en estos últimos meses me he dedicado al front-end pero realmente me gustaría aprender mucho más de lo que esta carrera pueda ofrecer tomando riesgos e innovando en este mundo de la programación lo que me ha llevado a decidir que realmente me llama la atención aprender un poco de ambas tanto front-end como back-end, si se dirige a la siguiente aplicación denominada lenguaje, podrá ver una cantidad de lenguajes el cual tengo conocimiento de ellos.</p><img src="fotos/Captura de pantalla_19-5-2024_141749_www.instagram.com.jpeg" alt="Foto" style="max-width: 100%; max-height: 300px;">';
        modalBody.classList.add('app1'); // Agrega clase específica para App 1
    } else if (appNumber === 2) {
        modalBody.innerHTML = '<h2>Lenguajes de Programación</h2><ul><li>HTML: Muy bien</li><li>CSS: Muy bien</li><li>JavaScript: Muy bien</li><li>C#: Más o menos</li><li>Java: Más o menos</li></ul>';
        modalBody.classList.add('app2'); // Agrega clase específica para App 2
    } else if (appNumber === 3) {
        modalBody.innerHTML = `<h2>Calculadora</h2>
                               <div id="calculator">
                                   <input type="text" id="calc-display" disabled>
                                   <div id="calc-buttons">
                                       <button onclick="calcInput('1')">1</button>
                                       <button onclick="calcInput('2')">2</button>
                                       <button onclick="calcInput('3')">3</button>
                                       <button onclick="calcInput('+')">+</button>
                                       <button onclick="calcInput('4')">4</button>
                                       <button onclick="calcInput('5')">5</button>
                                       <button onclick="calcInput('6')">6</button>
                                       <button onclick="calcInput('-')">-</button>
                                       <button onclick="calcInput('7')">7</button>
                                       <button onclick="calcInput('8')">8</button>
                                       <button onclick="calcInput('9')">9</button>
                                       <button onclick="calcInput('*')">*</button>
                                       <button onclick="calcInput('0')">0</button>
                                       <button onclick="calcClear()">C</button>
                                       <button onclick="calcEqual()">=</button>
                                       <button onclick="calcInput('/')">/</button>
                                   </div>
                               </div>`;
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

let calcExpression = '';

function calcInput(value) {
    calcExpression += value;
    document.getElementById('calc-display').value = calcExpression;
}

function calcClear() {
    calcExpression = '';
    document.getElementById('calc-display').value = '';
}

function calcEqual() {
    try {
        calcExpression = eval(calcExpression).toString();
        document.getElementById('calc-display').value = calcExpression;
    } catch {
        document.getElementById('calc-display').value = 'Error';
        calcExpression = '';
    }
}


