export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f749b4c42a76500aa6207a9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9zme9maw',
                  apiId: 'aa50af78-1905-4fc4-93c4-be4e9b5bff87'
                },
                {
                  buildHookId: '5f749b4c4adfd300f22e7213',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mi9txfsr',
                  apiId: '95782c0c-80d1-4223-9547-1fd40d825de6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mi9txfsr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
