export default {
    items: [
        {
            name: 'Novedades',
            url: '/dashboard',
            icon: 'icon-emotsmile'
            // badge: {
            //     variant: 'info',
            //     text: 'NEW'
            // }
        },
        // {
        //     title: true,
        //     name: 'Administracion',
        //     wrapper: {
        //         element: '',
        //         attributes: {}
        //     }
        // },
        {
            name: 'Propiedades',
            url: '/Dwellings',
            icon: 'icon-home',
            children: [
                {
                    name: 'Agregar Propiedad',
                    url: '/dwellings/general',
                    icon: 'icon-pencil'
                },
                {
                    name: 'Buscar',
                    url: '/dwellings/search',
                    icon: 'icon-magnifier'
                },
                {
                    name: 'Últimas Publicadas',
                    url: '/dwellings/latest',
                    icon: 'icon-energy'
                },
                {
                    name: 'Reportes',
                    url: '/dwellings/reports',
                    icon: 'icon-chart'
                },
                {
                    name: 'Favoritas',
                    url: '/dwellings/bookmark',
                    icon: 'icon-star'
                }
            ]
        },
        {
            name: 'Clientes',
            url: '/clientes',
            icon: 'icon-people',
            children: [
                {
                    name: 'Agregar Cliente',
                    url: '/clients/new',
                    icon: 'icon-pencil'
                },
                {
                    name: 'Buscar',
                    url: '/clients/search',
                    icon: 'icon-magnifier'
                }
            ]
        },
        // {
        //     title: true,
        //     name: 'Configuración',
        //     wrapper: {
        //         element: '',
        //         attributes: {}
        //     }
        // },
        {
            name: 'Equipos SIOC',
            url: '',
            icon: 'icon-layers',
            children: [
                {
                    name: 'Agregar Inmobiliaria',
                    url: '/team/add',
                    icon: 'icon-pencil'
                },
                {
                    name: 'Integrantes',
                    url: '/team/list',
                    icon: 'icon-magnifier'
                },
                {
                    name: 'Pedidos de visita',
                    url: '/team/ask',
                    icon: 'icon-emotsmile'
                    // badge: {
                    //     variant: 'info',
                    //     text: 'Nuevo'
                    // }
                }
            ]
        },
        {
            name: 'Usuarios',
            url: '',
            icon: 'icon-user',
            children: [
                {
                    name: 'Agregar Usuario',
                    url: '/users/add',
                    icon: 'icon-pencil'
                },
                {
                    name: 'Listado',
                    url: '/users/list',
                    icon: 'icon-magnifier'
                }
            ]
        }
    ]
};
