const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'PCTE',
        description: 'PCTE'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'HTTP server listening on port 3000',
        }
    ],
    tags: [
        {
            name: 'Comercializador',
            description: 'Comercializador'
        },
        {
            name: 'Desconto',
            description: 'Desconto'
        },
        {
            name: 'Potencia',
            description: 'Potencia'
        },
        {
            name: 'TAR',
            description: 'TAR'
        },
        {
            name: 'Tarifario',
            description: 'Tarifario'
        },
        {
            name: 'Taxa',
            description: 'Taxa'
        },
        {
            name: 'Utilizador',
            description: 'Utilizador'
        },
        {
            name: 'Valor',
            description: 'Valor'
        }

    ]
};

const outputFile = './swagger-output.json';
const routes = ['./app'];

swaggerAutogen(outputFile, routes, doc).then(() => {
    require('./app');
});