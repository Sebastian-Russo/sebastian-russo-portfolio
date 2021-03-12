import apps from '../project.json';

// categories from json file 
const duplicatesArray = apps.map((app,i) => app.categories.map((c,i) => c)).flat();
const cleanDulpicates = (array) => {
  let seen = {};
  return array.filter((item) => {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true); 
  })
}

const cleaned = cleanDulpicates(duplicatesArray)
// console.log(cleaned)
const removeSpecific = cleaned.filter(item => item !== "Node.js" && item !== "Redux")
// console.log(removeSpecific)
export const categories = removeSpecific;