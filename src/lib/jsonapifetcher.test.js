import { JSONAPIModels } from './jsonapimodels.js'
import { JSONAPIFetcher, buildURL, buildResponse } from './jsonapifetcher.js'

describe('url builder', () => {
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

  let fetcher = new JSONAPIFetcher({})

  test('empty urls', () => {
    expect(() => {
      buildURL()
    }).toThrow()

    expect(() => {
      buildURL(0)
    }).toThrow()

    expect(() => {
      buildURL('')
    }).toThrow()

    expect(() => {
      buildURL({})
    }).toThrow()
  })

  test('basic urls', () => {
    expect(buildURL({ type: 'type' })).toBe('/type')

    expect(buildURL({ base: 'https://example.com', type: 'type' })).toBe(
      'https://example.com/type',
    )

    expect(
      buildURL({ base: 'https://example.com', type: 'type', id: 'abc123' }),
    ).toBe('https://example.com/type/abc123')

    expect(buildURL({ type: 'type', id: 'abc123' })).toBe('/type/abc123')

    expect(
      buildURL({
        base: 'https://example.com',
        type: 'type',
        id: 'abc123',
        relationship: 'rel',
        relKind: 'related',
      }),
    ).toBe('https://example.com/type/abc123/rel')

    expect(
      buildURL({
        base: 'https://example.com',
        type: 'type',
        id: 'abc123',
        relationship: 'rel',
      }),
    ).toBe('https://example.com/type/abc123/rel')

    expect(
      buildURL({
        base: 'https://example.com',
        type: 'type',
        id: 'abc123',
        relationship: 'rel',
        relKind: 'self',
      }),
    ).toBe('https://example.com/type/abc123/relationships/rel')
  })

  test('basic urls with registry', () => {
    expect(buildURL({ type: 'users' })).toBe('/users')

    expect(() => {
      buildURL({ type: 'nonexistent' })
    }).toThrow()
  })
})
