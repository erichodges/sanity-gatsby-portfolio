export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d59c74fed8ddb76c06a68a8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-agd2azap',
                  apiId: '974f2ace-6376-46e8-8f53-4e5da131ce0b'
                },
                {
                  buildHookId: '5d59c7507f965ba7c4df677a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-simhtoy3',
                  apiId: '580b6be9-66ff-4bfd-b7f1-cb4a9785cd78'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erichodges/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-simhtoy3.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
