var apiDocumentation = {
    openapi: '3.0.0',
    info: {
        title: 'PCTE',
        description: 'PCTE',
        version: '1.0.0'
    },
    host: 'localhost:3000',
    servers: [
        {
            url: 'localhost:3000',
            description: 'HTTP server listening on port 3000'
        }
    ],
    basePath: '/',
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
    ],
    schemes: [
        'http'
    ],
    paths: {
        '/comercializador/': {
            get: {
                description: '',
                tags: ['Comercializador'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
                tags: ['Comercializador'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/comercializador/{id}': {
            get: {
                description: '',
                tags: ['Comercializador'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            put: {
                description: '',
                tags: ['Comercializador'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            delete: {
                description: '',
                tags: ['Comercializador'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/desconto/': {
            get: {
                description: '',
                tags: ['Desconto'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
                tags: ['Desconto'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/desconto/{id}': {
            get: {
                description: '',
                tags: ['Desconto'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            put: {
                description: '',
                tags: ['Desconto'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            delete: {
                description: '',
                tags: ['Desconto'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/potencia/': {
            get: {
                description: '',
                tags: ['Potencia'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
                tags: ['Potencia'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/potencia/{id}': {
            get: {
                description: '',
                tags: ['Potencia'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            put: {
                description: '',
                tags: ['Potencia'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            delete: {
                description: '',
                tags: ['Potencia'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/tar/': {
            get: {
                description: '',
                tags: ['Tar'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
                tags: ['Tar'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/tar/{id}': {
            get: {
                description: '',
                tags: ['Tar'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            put: {
                description: '',
                tags: ['Tar'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            delete: {
                description: '',
                tags: ['Tar'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/tarifario/': {
            get: {
                description: '',
                tags: ['Tarifario'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
                tags: ['Tarifario'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/tarifario/{id}': {
            get: {
                description: '',
                tags: ['Tarifario'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            put: {
                description: '',
                tags: ['Tarifario'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            delete: {
                description: '',
                tags: ['Tarifario'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/taxa/': {
            get: {
                description: '',
                tags: ['Taxa'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
                tags: ['Taxa'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/taxa/{id}': {
            get: {
                description: '',
                tags: ['Taxa'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            put: {
                description: '',
                tags: ['Taxa'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            delete: {
                description: '',
                tags: ['Taxa'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/utilizador/': {
            get: {
                description: '',
                tags: ['Utilizador'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
                tags: ['Utilizador'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/utilizador/{id}': {
            get: {
                description: '',
                tags: ['Utilizador'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            put: {
                description: '',
                tags: ['Utilizador'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            delete: {
                description: '',
                tags: ['Utilizador'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/valor/': {
            get: {
                description: '',
                tags: ['Valor'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
                tags: ['Valor'],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        },
        '/valor/{id}': {
            get: {
                description: '',
                tags: ['Valor'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            put: {
                description: '',
                tags: ['Valor'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            delete: {
                description: '',
                tags: ['Valor'],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            }
        }
    }
};
module.exports = apiDocumentation;
