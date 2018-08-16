class JSONAPIModels {
  models = Object.create(null)

  registerModel = (model) => {
    model = Object.create(null, model)

    return false
  }

  checkIntegrity = () => {
    return false
  }
  
  isValid = () => {
    return false
  }
}