var recipes = {typeof: 'object'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({prop: 1}, {prop2: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes['prop'] = 1;
  recipes['prop2'] = 2
  return recipes
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj)
  return delete newObj.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete recipes.key
}