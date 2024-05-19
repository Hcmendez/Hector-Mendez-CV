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
        modalBody.innerHTML = '<h2>¿Por qué la Programación?</h2><p>Mi nombre es Héctor José Méndez Novas y soy un apasionado estudiante de Software, enfocado principalmente en el desarrollo front-end, pero mi entusiasmo por la programación va mucho más allá. Estoy decidido a explorar y aprender todo lo que esta carrera tiene para ofrecer, tomando riesgos e innovando en el mundo de la programación. Mi interés abarca tanto el front-end como el back-end, y me motiva la idea de convertirme en un desarrollador integral, capaz de enfrentar y resolver problemas complejos en ambos ámbitos. A continuación, presento un resumen de mi perfil profesional, destacando mis habilidades, conocimientos y objetivos:</p><p><h2>Perfil Profesional</h2></p><p>Soy un joven motivado y con muchas ganas de aprender más sobre la programación. Mi objetivo es aplicar y expandir los conocimientos adquiridos en el desarrollo de software, integrando tanto tecnologías front-end como back-end. Me apasiona la idea de contribuir con soluciones innovadoras y de alto impacto en el mundo tecnológico.</p><p><h2>Habilidades y Conocimientos</h2></p><p>•Desarrollo Front-End: Tengo experiencia en HTML, CSS, y JavaScript, así como en bases de datos como SQL, NOSQL</p><p>•Desarrollo Back-End: Estoy comenzando a familiarizarme con lenguajes y tecnologías de back-end como Node.js, Python, y bases de datos mongodb y PHP.<p><h2>Objetivos Profesionales</h2><p>•Desarrollo Integral: Aspiro a convertirme en un desarrollador full-stack, dominando tanto el front-end como el back-end.<p>•Innovación y Creatividad: Quiero participar en proyectos innovadores que permitan aplicar mis habilidades y aprender nuevas tecnologías.</p></p>•Colaboración y Crecimiento: Busco oportunidades de colaborar en equipos dinámicos, donde pueda crecer profesionalmente y contribuir de manera significativa.<p>Estoy entusiasmado por continuar mi camino en el desarrollo de software y espero poder aportar mi pasión y habilidades a proyectos desafiantes y gratificantes.<p>¡Gracias por considerar mi perfil!</p><img src="fotos/Captura de pantalla_19-5-2024_141749_www.instagram.com.jpeg" alt="Foto" style="max-width: 100%; max-height: 300px;">';
        modalBody.classList.add('app1'); // Agrega clase específica para App 1
    } else if (appNumber === 2) {
        modalBody.innerHTML = '<h2>Lenguajes de Programación</h2><ul><li>HTML: Muy bien</li><li>CSS: Muy bien</li><li>JavaScript: Muy bien</li><li>C#: en proceso</li><li>Java: en proceso</li><li>SQL: Muy Bien</li></li>NoSQL: Bien</li></li>PHP: en process</li></li>MongoDB: en proceso</li></ul>';
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


