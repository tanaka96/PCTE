const apiDocumentation = {
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
                tags: 'Comercializador',
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
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
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
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
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
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
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
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
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
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
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
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
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
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
                responses: {
                    '200': {
                        description: 'OK'
                    }
                }
            },
            post: {
                description: '',
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
}

module.exports = apiDocumentation;