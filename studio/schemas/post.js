export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'person' }]
    },
    {
      title: 'Feature Image',
      name: 'featureImage',
      type: 'featureImage',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ]
}