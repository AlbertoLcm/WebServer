const http = require('http');


//request = a todo lo que estan solicitando (Solicitud al webserver)
//response = es lo que el servidor responde al cliente
http.createServer((request, response) => {

    console.log(request);

    //response.writeHead(200, {'Content-Type': 'application/json'});

    // const objeto = {
    //     valor: 1,
    //     nombre: 'Objeto de prueba',
    //     tipo: 'tipo 1'
    // }
    
    // response.write(JSON.stringify(objeto))

    response.write('Hola Mundo')
    response.end();
})
    .listen(8080);

console.log('Escuchando en el puerto', 8080);