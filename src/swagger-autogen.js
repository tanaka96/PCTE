const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-new.json';
const endpointsFiles = ['./app.ts'];

const config = {
    info: {
        title: 'PCTE',
        description: '',
    },
    tags: [{
        name: 'Comercializador',
        description: 'Endpoints',
    }, {
        name: 'Desconto',
        description: 'Endpoints',
    }, {
        name: 'Potencia',
        description: 'Endpoints',
    }, {
        name: 'Tar',
        description: 'Endpoints',
    }, {
        name: 'Tarifario',
        description: 'Endpoints',
    }, {
        name: 'Taxa',
        description: 'Endpoints',
    }, {
        name: 'Utilizador',
        description: 'Endpoints',
    }, {
        name: 'Valor',
        description: 'Endpoints',
    }, {
        name: 'SignUp',
        description: 'Endpoints',
    }, {
        name: 'LogIn',
        description: 'Endpoints',
    }, {
        name: 'Perfil',
        description: 'Endpoints',
    }, {
        name: 'Resultado',
        description: 'Endpoints',
    }, {
        name: 'Verificação',
        description: 'Endpoints',
    }],
    host: 'pcte.onrender.com',
    schemes: 'https',
};

swaggerAutogen(outputFile, endpointsFiles, config)
