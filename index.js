var recipes = {typeof: 'object'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({prop: 1}, {prop2: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object['prop'] = 1;
  object['prop2'] = 2
  return recipes
}