export default {
  name: 'articles',
  type: 'document',
  title: 'Artykuły',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Główne zdjęcie',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternatywny tekst',
          type: 'string',
          validation: (Rule) => Rule.required()
        }
      ],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'teaser',
      title: 'Tizer',
      type: 'text',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'content',
      title: 'Zawartość',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'date',
      title: 'Data publikacji',
      type: 'date',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    }
  }
};
