export const menuItems = [
  {
    title: 'Configuracion',
    routerLink: 'tables',
    icon: 'fa fa-cog',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Configuracion de Sistema',
        routerLink: 'usuarios/configuracion',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Sucursales',
        subMenu: [
          {
            title: 'Nueva Sucursal',
            routerLink: 'sucursales/crear',
            disabled: true,
            selected: false,
            expanded: false
          },
           {
            title: 'Listado de Sucursales',
            routerLink: 'sucursales/listado',
            disabled: true,
            selected: false,
            expanded: false
          },
          {
            title: 'Depreciaciones',
            routerLink: 'sucursales/depreciacion',
            disabled: true,
            selected: false,
            expanded: false
          }
        ]
      },
       {
        title: 'Configuracion de Cuenta',
        routerLink: 'cuenta/ver',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Tiempos de Liquidaciones',
        routerLink: 'usuarios/tiempos-liquidaciones',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Tiempos de Autorizacion',
        routerLink: 'usuarios/tiempos-autorizacion',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Links de ayuda',
        routerLink: 'usuarios/links',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Logs del sistema',
        routerLink: 'usuarios/logs',
        disabled: true,
        selected: false,
        expanded: false
      },
      
    ]

  }
  ,
  {
    title: 'Roles',
    routerLink: 'tables',
    icon: 'fa fa-tasks',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Nuevo Rol',
        routerLink: 'usuarios/nuevo_rol',
        disabled: true,
        selected: false,
        expanded: false
      },
       {
        title: 'Listado de Roles',
        routerLink: 'usuarios/roles',
        disabled: true,
        selected: false,
        expanded: false
      }
    ]

  },
  {
    title: 'Usuarios',
    routerLink: 'tables',
    icon: 'fa-user',
    selected: false,
    expanded: false,
    order: 0,
    subMenu: [
      {
        title: 'Crear Usuario',
        routerLink: 'usuarios/crear',
        disabled: true,
        selected: false,
        expanded: false
      },
   
       {
        title: 'Listado de Usuarios',
        routerLink: 'usuarios/listado',
        disabled: true,
        selected: false,
        expanded: false
      }
      
    ]
  },
   {
    title: 'Empresas',
    routerLink: 'tables',
    icon: 'fa-user',
    selected: false,
    expanded: false,
    order: 0,
    subMenu: [
      {
        title: 'Nueva empresa',
        routerLink: 'empresas/crear',
        disabled: true,
        selected: false,
        expanded: false
      },
   
       {
        title: 'Listado',
        routerLink: 'empresas/listado',
        disabled: true,
        selected: false,
        expanded: false
      },
   
      
    ]
  },
  {
    title: 'Ramos',
    routerLink: 'seguros',

    icon: 'fa-building',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [
      {
        title: 'Crear Ramo',
        routerLink: 'seguros/crear',
        disabled: true,
        selected: false,
        expanded: false
      },
       {
        title: 'Listado de Ramos',
        routerLink: 'seguros/listado',
        disabled: true,
        selected: false,
        expanded: false
      },
       {
        title: 'Porcentaje del Ramo',
        routerLink: 'seguros/porcentaje',
        disabled: true,
        selected: false,
        expanded: false
      }
      
    ]
  },


  {
    title: 'Aseguradoras',
    routerLink: 'seguros',

    icon: 'fa-building',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [
      {
        title: 'Nueva Aseguradora',
        routerLink: 'aseguradoras/crear',
        disabled: true,
        selected: false,
        expanded: false
      },
       {
        title: 'Listado de Aseguradoras',
        routerLink: 'aseguradoras/listado',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Deducibles',
        subMenu: [
          {
            title: 'Crear deducible',
            routerLink: 'deducibles/crear',
            disabled: true,
            selected: false,
            expanded: false
          },
           {
            title: 'Deducibles',
            routerLink: 'deducibles/listado',
            disabled: true,
            selected: false,
            expanded: false
          }
          
        ]
      },
      {
        title: 'Derechos de Emision',
        routerLink: 'emision',
        icon: 'fa-building',
    
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
          {
            title: 'Listado',
            routerLink: 'emision/listado',
            disabled: false,
            selected: false,
            expanded: false
          }
          
        ]
      },
      
      {
        title: 'Tipos de Pago',
        routerLink: 'bancos',
        icon: 'fa-building',
    
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
          {
            title: 'Listado',
            routerLink: 'pagos/listado',
            disabled: false,
            selected: false,
            expanded: false
          }
          
        ]
      },
      {
        title: 'Tasas',
        routerLink: 'tasas',
        icon: 'fa-building',
    
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
          {
            title: 'Listado de Tasas',
            routerLink: 'tasas/tasa',
            disabled: false,
            selected: false,
            expanded: false
          }
          
        ]
      },
      {
        title: 'Formato Carta Accidente',
        routerLink: 'cartas',
        icon: 'fa-building',
    
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
          {
            title: 'Listado de Formatos',
            routerLink: 'cartas/listado',
            disabled: false,
            selected: false,
            expanded: false
          }
          
        ]
      },
      
    ]
  },
  {
    title: 'Recepcion',
    routerLink: 'presupuestos',

    icon: 'fa-building',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [
      {
        title: 'Rutas',
        routerLink: 'polizas/rutas',
        disabled: true,
        selected: false,
        expanded: false
      },
       {
        title: 'Ingresos',
        routerLink: 'polizas/ingresos',
        disabled: true,
        selected: false,
        expanded: false
      }, 
      {
        title: 'Envios',
        routerLink: 'polizas/envios',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Recogida',
        routerLink: 'polizas/pickup',
        disabled: true,
        selected: false,
        expanded: false
      },   
    ]
  },
  {
    title: 'AMV',
    routerLink: 'presupuestos',

    icon: 'fa-building',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [
      {
        title: 'Planes',
        routerLink: 'empresas/plan',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Alternativas',
        routerLink: 'empresas/alternativas',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Asociacion de Planes',
        routerLink: 'empresas/asociaciones',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Planes Alternativos',
        routerLink: 'empresas/plan-alternativo',
        disabled: true,
        selected: false,
        expanded: false
      },
     
      
     
    ]
  },
  {
    title: 'Clientes',
    routerLink: 'clientes',

    icon: 'fa-building',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [
      {
        title: 'Listado',
        routerLink: 'clientes/listado',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Tipo de Clientes',
        routerLink: 'tipoClientes',
    
        icon: 'fa-building',
    
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
          {
            title: 'Listado',
            routerLink: 'tipoClientes/listado',
            disabled: true,
            selected: false,
            expanded: false
          },
      
          
        ]
      },
      {
        title: 'Empresas Clientes',
        routerLink: 'clientes/empresas',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Dependiente',
        routerLink: 'clientes/dependiente',
        disabled: true,
        selected: false,
        expanded: false
      },
    
   
  
      
    ]
  },
   {
    title: 'Carros',
    routerLink: 'clientes',

    icon: 'fa-car',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [
      {
        title: 'Listado',
        routerLink: 'autos/listado',
        disabled: true,
        selected: false,
        expanded: false
      },
       {
        title: 'Tipos de Carros',
        routerLink: 'autos/car-types',
        disabled: true,
        selected: false,
        expanded: false
      },
        {
        title: 'Marcas de Carros',
        routerLink: 'autos/car-brands',
        disabled: true,
        selected: false,
        expanded: false
      },
        {
        title: 'Modelos de Carros',
        routerLink: 'autos/car-models',
        disabled: true,
        selected: false,
        expanded: false
      },
        {
        title: 'Colores de Carros',
        routerLink: 'autos/car-colors',
        disabled: true,
        selected: false,
        expanded: false
      },
  
      
    ]
  },
  {
    title: 'Polizas',
    routerLink: 'polizas',

    icon: 'fa-building',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [

      {
        title: 'Listado de Polizas',
        routerLink: 'polizas/polizas',
        disabled: true,
        selected: false,
        expanded: false
      },
      
      {
        title: 'Tipo de Polizas',
        routerLink: 'polizas/tipo-polizas',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Frecuencias de Pago',
        routerLink: 'polizas/frecuencias',
        disabled: true,
        selected: false,
        expanded: false
      }

  
      
    ]
  },
  {
    title: 'Renovaciones',
    routerLink: 'presupuestos',

    icon: 'fa-file-text',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [
      {
        title: 'Causas No Renovacion',
        routerLink: 'renovacion/no-renovacion',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Causas por ramo',
        routerLink: 'renovacion/no-renovacion-ramo',
        disabled: true,
        selected: false,
        expanded: false
      },
    ]
  },
    {
    title: 'Facturacion',
    routerLink: 'polizas',

    icon: 'fa-building',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [

      {
        title: 'Listado de Facturas',
        routerLink: 'facturas/facturas',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Notas de Credito',
        routerLink: 'facturas/notas-credito',
        disabled: true,
        selected: false,
        expanded: false
      }

      
    ]
  },
  {
    title: 'Cartera',
    routerLink: 'cartera',

    icon: 'fa-building',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [

      {
        title: 'Carteras',
        routerLink: 'cartera/listado',
        disabled: true,
        selected: false,
        expanded: false
      }
      
    ]
  },

  // Reportes
  
  // SUBITEMS
  
  // Reporte Pólizas
  // Reporte Renovaciones
  // Reporte Facturación
  // Reporte Siniestros
  // Reporte Cartera
  // Reporte Super Compañias
   {
    title: 'Siniestros',
    routerLink: 'siniestros',

    icon: 'fa-building',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [

      {
        title: 'Listado de Siniestros',
        routerLink: 'siniestros/listado',
        disabled: true,
        selected: false,
        expanded: false
      },
    
      {
        title: 'Listado de Documentacion',
        routerLink: 'siniestros/documentacion',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Documentacion Ramo',
        routerLink: 'siniestros/documentacion-ramo',
        disabled: true,
        selected: false,
        expanded: false
      }
    ]
  },
  {
    title: 'Reportes',
    routerLink: 'reportes',

    icon: 'fa-bar-chart',

    selected: false,
    expanded: false,
    order: 0,
    subMenu: [

      {
        title: 'Reporte Pólizas',
        routerLink: 'reportes/poliza',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Reporte Renovaciones',
        routerLink: 'reportes/renovacion',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Reporte Facturación',
        routerLink: 'reportes/billing',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Reporte Siniestros',
        routerLink: 'reportes/sinister',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Reporte Cartera',
        routerLink: 'reportes/wallet',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Reporte Super Compañias',
        routerLink: 'reportes/super',
        disabled: true,
        selected: false,
        expanded: false
      },
      
    ]
  },




  
  
];

const menuExamples = [
  {
    title: 'Charts',
    routerLink: 'charts',
    icon: 'fa-bar-chart',
    selected: false,
    expanded: false,
    order: 200,
    subMenu: [
      {
        title: 'Ng2-Charts',
        routerLink: 'charts/ng2charts',
      },
    ]
  },
  {
    title: 'UI Features',
    routerLink: 'ui',
    icon: 'fa-laptop',
    selected: false,
    expanded: false,
    order: 300,
    subMenu: [
      {
        title: 'Buttons',
        routerLink: 'ui/buttons'
      },
      {
        title: 'Cards',
        routerLink: 'ui/cards'
      },
      {
        title: 'Components',
        routerLink: 'ui/components'
      },           
      {
        title: 'Icons',
        routerLink: 'ui/icons'
      },
      {
        title: 'Grid',
        routerLink: 'ui/grid'
      },
      {
        title: 'List Group',
        routerLink: 'ui/list-group'
      },
      {
        title: 'Media Objects',
        routerLink: 'ui/media-objects'
      },
      {
        title: 'Tabs & Accordions',
        routerLink: 'ui/tabs-accordions'
      },
      {
        title: 'Typography',
        routerLink: 'ui/typography'
      }
    ]
  },
  {
    title: 'Mail',
    routerLink: 'mail/mail-list/inbox',
    icon: 'fa-envelope-o',
    selected: false,
    expanded: false,
    order: 330
  },
  {
    title: 'Calendar',
    routerLink: 'calendar',
    icon: 'fa-calendar',
    selected: false,
    expanded: false,
    order: 350
  }, 
  {
    title: 'Form Elements',
    routerLink: 'form-elements',
    icon: 'fa-pencil-square-o',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Form Inputs',
        routerLink: 'form-elements/inputs'
      },
      {
        title: 'Form Layouts',
        routerLink: 'form-elements/layouts'
      },
      {
        title: 'Form Validations',
        routerLink: 'form-elements/validations'
      },
      {
        title: 'Form Wizard',
        routerLink: 'form-elements/wizard'
      }
    ]
  },  
  {
    title: 'Tables',
    routerLink: 'tables',
    icon: 'fa-table',
    selected: false,
    expanded: false,
    order: 500,
    subMenu: [
      {
        title: 'Basic Tables',
        routerLink: 'tables/basic-tables'
      },
      {
        title: 'Dynamic Tables',
        routerLink: 'tables/dynamic-tables'
      }
    ]
  },
  {
    title: 'Editors',
    routerLink: 'editors',
    icon: 'fa-pencil',
    selected: false,
    expanded: false,
    order: 550,
    subMenu: [
      {
        title: 'Froala Editor',
        routerLink: 'editors/froala-editor'
      },
      {
        title: 'Ckeditor',
        routerLink: 'editors/ckeditor'
      }
    ]
  },
  {
    title: 'Maps',
    routerLink: 'maps',
    icon: 'fa-globe',
    selected: false,
    expanded: false,
    order: 600,
    subMenu: [
      {
        title: 'Vector Maps',
        routerLink: 'maps/vectormaps'
      },
      {
        title: 'Google Maps',
        routerLink: 'maps/googlemaps'
      },         
      {
        title: 'Leaflet Maps',
        routerLink: 'maps/leafletmaps'
      }     
    ]
  },
  {
    title: 'Pages',
    routerLink: ' ',
    icon: 'fa-file-o',
    selected: false,
    expanded: false,
    order: 650,
    subMenu: [        
      {
        title: 'Login',
        routerLink: '/login'
      },
      {
        title: 'Register',
        routerLink: '/register'
      },
      {
        title: 'Blank Page',
        routerLink: 'blank'
      },
      {
        title: 'Error Page',
        routerLink: '/pagenotfound'
      }
    ]
  },
  {
    title: 'Menu Level 1',
    icon: 'fa-ellipsis-h',
    selected: false,
    expanded: false,
    order: 700,
    subMenu: [
      {
        title: 'Menu Level 1.1',
        url: '#',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Menu Level 1.2',
        url: '#',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      }
    ]
  },
  {
    title: 'External Link',
    url: 'http://themeseason.com',
    icon: 'fa-external-link',
    selected: false,
    expanded: false,
    order: 800,
    target: '_blank'
  }
];
