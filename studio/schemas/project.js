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
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    }
  ]
}