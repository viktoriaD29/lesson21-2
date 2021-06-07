export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  const listItem = document.querySelector('ul')
  return listItem
}
getItemsList()

export const getItemsArray = () => {
  const elemTool = document.querySelectorAll('.tool');
  const elementsArray = Array.from(elemTool)
  console.dir(elementsArray)
}
getItemsArray()