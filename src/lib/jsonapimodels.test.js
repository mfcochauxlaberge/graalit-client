import { JSONAPIModels } from './jsonapimodels.js'

test('empty model registration', () => {
  let models = new JSONAPIModels()

  let model = models.registerModel({ type: 'empty' })

  expect(model).toEqual({
    type: 'empty',
    attributes: {},
    relationships: {},
  })
})

test('typical model registration', () => {
  let models = new JSONAPIModels()

  let model = models.registerModel({
    type: 'people',

    // Attributes
    name: 'attr,string',
    age: 'attr,int',
    'born-at': 'attr,time',
    male: 'attr,bool',

    // Relationships
    parents: 'many,people',
    'best-friend': 'one,people',
  })

  expect(model).toEqual({
    type: 'people',

    // Attributes
    attributes: {
      name: 'string',
      age: 'int',
      'born-at': 'time',
      male: 'bool',
    },

    // Relationships
    relationships: {
      parents: { kind: 'many', type: 'people' },
      'best-friend': { kind: 'one', type: 'people' },
    },
  })

  expect(model.type).toBe('people')

  expect(model.attributes.name).toBe('string')
  expect(model.attributes.age).toBe('int')
  expect(model.attributes['born-at']).toBe('time')
  expect(model.attributes.male).toBe('bool')

  expect(model.relationships.parents.kind).toBe('many')
  expect(model.relationships.parents.type).toBe('people')

  expect(model.relationships['best-friend'].kind).toBe('one')
  expect(model.relationships['best-friend'].type).toBe('people')
})

test('three valid models', () => {
  let models = new JSONAPIModels()

  let users = models.registerModel({
    type: 'users',

    // Attributes
    username: 'attr,string',

    // Relationships
    articles: 'many,articles',
    comments: 'many,comments',
  })

  let articles = models.registerModel({
    type: 'articles',

    // Attributes
    title: 'attr,string',
    content: 'attr,string',
    'created-at': 'attr,time',
    public: 'attr,bool',

    // Relationships
    author: 'many,users',
    comments: 'many,comments',
  })

  let comments = models.registerModel({
    type: 'comments',

    // Attributes
    content: 'attr,string',
    'created-at': 'attr,time',

    // Relationships
    author: 'one,users',
    article: 'one,articles',
  })

  expect(models.checkIntegrity()).toBeTruthy()

  expect(models.checkExistence('users')).toBeTruthy()
  expect(models.checkExistence('articles')).toBeTruthy()
  expect(models.checkExistence('comments')).toBeTruthy()
  expect(models.checkExistence('users.articles')).toBeTruthy()
  expect(models.checkExistence('users.comments')).toBeTruthy()
  expect(models.checkExistence('articles.author')).toBeTruthy()
  expect(models.checkExistence('articles.comments')).toBeTruthy()
  expect(models.checkExistence('comments.author')).toBeTruthy()
  expect(models.checkExistence('comments.article')).toBeTruthy()

  expect(models.checkExistence('nonexistent')).toBeFalsy()
  expect(models.checkExistence('articles.nonexistent')).toBeFalsy()
  expect(models.checkExistence('nonexistent.nonexistent')).toBeFalsy()
})

test('invalid registry', () => {
  let models = new JSONAPIModels()

  models.registerModel({
    type: 'invalid',

    // Relationships
    nothing: 'one,nonexistent',
  })

  expect(models.checkExistence('invalid')).toBeTruthy()
  expect(models.checkExistence('invalid.nothing')).toBeFalsy()

  expect(models.checkIntegrity).toThrow()
})
