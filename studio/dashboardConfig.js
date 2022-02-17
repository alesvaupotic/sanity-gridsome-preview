export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '620e87ddf6ace51945b79ca8',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-preview-studio',
                  apiId: '614cf2f7-2868-4f3f-823e-080b991ce411'
                },
                {
                  buildHookId: '620e87dc081223117aea7f95',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-preview',
                  apiId: '117f306a-a0de-477a-85b1-4d06d10dcd29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alesvaupotic/sanity-gridsome-preview',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-preview.netlify.app', category: 'apps'}
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
