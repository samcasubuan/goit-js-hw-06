const categoriesElements = document.querySelectorAll(".item");
console.log("number of categories:", categoriesElements.length);

categoriesElements.forEach((el) => {
  const categoryName = el.firstElementChild.textContent;
  console.log("category:", categoryName);

<<<<<<< HEAD
  const categoryTypesList = el.lastElementChild;
  const categoryTypesList = categoryTypesList.childElementCount.length;
  console.log("Elements:", categoryTypesLength);
=======
  const categoryTypeList = el.lastElementChild;
  const categoryTypesLenght = categoryTypeList.children.length;
  console.log("Elements:", categoryTypesLenght);
>>>>>>> b52d7912f1e7139b5f034198046c3324c840ebf6
});

