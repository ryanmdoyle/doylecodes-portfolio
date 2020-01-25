export default {
  title: 'Projects',
  name: 'projectsOrder',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'projectsArrayTitle',
      type: 'string',
    },
    {
      title: 'Project Order',
      name: 'projectOrder',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'project' },
          ]
        }
      ]
    }
  ]
}