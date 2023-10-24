const categoriesElements = document.querySelectorAll(".item");
console.log("number of categories:", categoriesElements.length);

categoriesElements.forEach((el) => {
  const categoryName = el.firstElementChild.textContent;
  console.log("category:", categoryName);

  const categoryTypeList = el.lastElementChild;
  const categoryTypesLenght = categoryTypeList.children.length;
  console.log("Elements:", categoryTypesLenght);
});

