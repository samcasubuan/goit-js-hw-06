const categoriesElements = document.querySelectorAll(".item");
console.log("number of categories:", categoriesElements.length);

categoriesElements.forEach((el) => {
  const categoriesElements = el.firstElementChild.textContent;
  console.log("category:", categoryName);

  const categoryTypesList = el.lastElementChild;
  const categoryTypesList = categoryTypesList.childElementCount.length;
  console.log("Elements:", categoryTypesLength);
});
