export const menuItems = [
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
    title: 'Sucursales',
    routerLink: 'tables',

    icon: 'fa-building',

    selected: false,
    expanded: false,
    order: 0,
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
      }
      
    ]
  },

  

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
    title: 'Configuracion',
    routerLink: 'tables',
    icon: 'fa fa-cog',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Configuracion de sistema',
        routerLink: 'usuarios/configuracion',
        disabled: true,
        selected: false,
        expanded: false
      },
       {
        title: 'Configuracion de cuenta',
        routerLink: 'cuenta/ver',
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
      }
    ]

  }
  
  
  
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
