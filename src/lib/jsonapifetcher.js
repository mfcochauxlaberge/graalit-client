import buildUrl from 'build-url'

import { JSONAPIModels } from './jsonapimodels.js'

class JSONAPIFetcher {
  base = ''

  constructor({ base, registry }) {
    this.base = base ? base : ''
    this.registry = registry ? registry : null
  }

  // TODO
  getOne = ({ type, id, fields, include }) => {
    let url = buildURL({ base, type, id, fields, include })

    new Promise((resolve, reject) => {
      fetch(url, {
        method: 'get',
      })
        .then(response => response.json())
        .then(payload => {
          let response = buildResponse(payload)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  // TODO
  getMany = ({ type, fields, filter, sort, pageSize, pageNumber, include }) => {
    let url = buildURL({
      base,
      type,
      fields,
      filter,
      sort,
      pageSize,
      pageNumber,
      include,
    })

    new Promise((resolve, reject) => {
      fetch(url, {
        method: 'get',
      })
        .then(response => response.json())
        .then(payload => {
          let response = buildResponse(payload)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  // TODO
  post = ({ type, data, include }) => {
    let url = buildURL({ base, type, data, include })

    new Promise((resolve, reject) => {
      fetch(url, {
        method: 'post',
      })
        .then(response => response.json())
        .then(payload => {
          let response = buildResponse(payload)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  // TODO
  patch = ({ type, id, updates }) => {
    let url = buildURL({ base, type, id, updates })

    new Promise((resolve, reject) => {
      fetch(url, {
        method: 'get',
      })
        .then(response => response.json())
        .then(payload => {
          let response = buildResponse(payload)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  // TODO
  delete = ({ type, id }) => {
    let url = buildURL({ base, type, id })

    new Promise((resolve, reject) => {
      fetch(url, {
        method: 'get',
      })
        .then(response => response.json())
        .then(payload => {
          let response = buildResponse(payload)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

// TODO
const buildURL = ({
  registry,
  base,
  type,
  id,
  relationship,
  relKind,
  fields,
  filter,
  sort,
  pageSize,
  pageNumber,
  include,
}) => {
  if (!type) {
    throw new Error('no type provided')
  }

  if (!registry || !registry.checkExistence) {
    registry = { checkExistence: () => true }
  }

  let url = base ? base : ''

  // Path
  let path = '/' + type
  if (id) {
    path += '/' + id

    if (relationship) {
      // Default relationship kind
      if (relKind !== 'related' && relKind !== 'self') {
        relKind = 'related'
      }

      path += (relKind === 'related' ? '/' : '/relationships/') + relationship
    }
  } else {
    if (!registry.checkExistence(type)) {
      throw new Error(`type ${type} does not exist`)
    }
  }

  // Query params
  let queryParams = {}

  if (Object.keys(queryParams).length === 0) {
    queryParams = undefined
  }

  url = buildUrl(url, {
    path,
    queryParams,
  })

  return url
}

const buildResponse = payload => {
  let response = Object.create(null)

  if (payload.errors) {
    // TODO
  }

  if (payload.data) {
    // TODO
  }

  if (payload.links) {
    // TODO
  }

  if (payload.meta) {
    // TODO
  }

  if (payload.jsonapi) {
    // TODO
  }

  return response
}

export { JSONAPIFetcher, buildURL, buildResponse }
