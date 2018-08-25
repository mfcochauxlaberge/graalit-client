class JSONAPIStore {
  store = Object.create(null)

  get = url => {
    let data = this.store[url]

    if (!data) {
      return ''
    }

    return data
  }

  save = (url, data) => {
    if (typeof data !== 'string') {
      throw new Error('data to save must be a string')
    }

    if (data !== '') {
      this.store[url] = data
    }
  }

  delete = url => {
    delete this.store[url]
  }

  reset = () => {
    this.store = Object.create(null)
  }
}

export { JSONAPIStore }
