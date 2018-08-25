class JSONAPIModels {
  models = Object.create(null)

  registerModel = model => {
    if (!model || typeof model !== 'object') {
      throw new Error('model is not an object')
    }

    // Type
    if (!model.type) {
      throw new Error('model does not have a type attribute')
    }
    let type = model.type

    // Attributes and relationships
    let attributes = {},
      relationships = {}
    Object.keys(model).forEach(fieldName => {
      if (typeof model[fieldName] === 'string') {
        let field = model[fieldName]

        if (field !== '') {
          let fragments = field.split(',')
          if (fragments[0] === 'attr') {
            if (
              fragments[1] === 'string' ||
              fragments[1] === 'int' ||
              fragments[1] === 'bool' ||
              fragments[1] === 'time'
            ) {
              attributes[fieldName] = fragments[1]
            }
          } else if (fragments[0] === 'one' || fragments[0] === 'many') {
            if (fragments[1] !== '') {
              relationships[fieldName] = {
                kind: fragments[0],
                type: fragments[1],
              }
            }
          }
        }
      }
    })

    let registeredModel = Object.create(null, {
      type: {
        configurable: false,
        enumerable: true,
        writable: false,
        value: type,
      },
      attributes: {
        configurable: false,
        enumerable: true,
        writable: false,
        value: attributes,
      },
      relationships: {
        configurable: false,
        enumerable: true,
        writable: false,
        value: relationships,
      },
    })

    this.models[type] = registeredModel

    return registeredModel
  }

  checkIntegrity = () => {
    let errors = []

    Object.keys(this.models).forEach(typeName => {
      const model = this.models[typeName]

      Object.keys(model.relationships).forEach(relName => {
        const rel = model.relationships[relName]

        console.log('${model.type}.${relName}', `${model.type}.${relName}`)
        if (!this.checkExistence(`${model.type}.${relName}`)) {
          throw new Error(`${model.type}.${relName} is invalid`)
        }
      })
    })

    return true
  }

  checkExistence = path => {
    if (path === '') {
      return false
    }

    let fragments = path.split('.')

    if (!this.models[fragments[0]]) {
      return false
    }
    let currObj = this.models[fragments[0]]

    for (let i = 1; i < fragments.length; i++) {
      if (currObj.relationships[fragments[i]]) {
        currObj = this.models[currObj.relationships[fragments[i]].type]
        if (!currObj) {
          return false
        }
      } else {
        return false
      }
    }

    return true
  }
}

export { JSONAPIModels }
