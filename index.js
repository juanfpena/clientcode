const API_URL = 'http://0.0.0.0:5000'

function calcFunc () {
    console.log(document.getElementById('calculatorForm'));
};

// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//     if (this.readyState == 4 && this.status == 200) {
//     // 0 = UNSET, no se ha llamado al método open
//     // 1 = OPENED, se ha llamado al método open
//     // 2 = HEADERS_RECEIVED, se ha llamado al método send()
//     // 3 = LOADING, esta recibiendo la respuesta
//     // 4 = DONE, se ha completado la operación
//     const data = JSON.parse(this.response);
//     const HTMLResponse = document.querySelector('#test');
    
//     const tpl = data.map(ping => `<li>${ping.ping}</li>`);
//     HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
//     };
// };

//     const xhr = new XMLHttpRequest();

//     function onRequestHandler() {
//         if (this.readyState == 4 && this.status == 200) {

//             const data = JSON.parse(this.response);
//             console.log(data)
//         };
//     };
// };

// xhr.addEventListener('load', onRequestHandler);
// xhr.open('GET', `${API_URL}/services/calculator`);
// xhr.send();