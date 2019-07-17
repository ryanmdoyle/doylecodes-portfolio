export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      title: 'Feature Image',
      name: 'featureImage',
      type: 'featureImage',
    },
    {
      title: 'Github Link',
      name: 'github',
      type: 'url'
    },
    {
      title: 'Live Site Link',
      name: "liveSiteURL",
      type: 'url'
    }
  ]
}