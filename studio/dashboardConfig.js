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
                  buildHookId: '5fe98a7811f328e19bc9c864',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-h82y2mmw',
                  apiId: 'b0b7804e-b405-4d34-8f9c-edfcc44cf260'
                },
                {
                  buildHookId: '5fe98a78a3b5c86ce97dfe70',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-w5i9fbg8',
                  apiId: '520bb5f6-f7ee-4405-bff6-c07c444980f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kanhaiya007/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-w5i9fbg8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
