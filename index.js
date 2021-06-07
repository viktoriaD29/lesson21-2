export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
getItemsList()

export const getItemsArray = () => {
  const elemTool = document.querySelectorAll('.tool');
  const elementsArray = Array.from(elemTool)
  console.dir(elementsArray)
  return elementsArray;
}
getItemsArray()