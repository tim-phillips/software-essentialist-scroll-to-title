scrollTitleIntoView();

function scrollTitleIntoView() {
  const catTitle = document.querySelector(
    ".category-banner-title"
  )?.textContent;
  const lessonTitle = document.querySelector(".post-body-title")?.textContent;
  const title = lessonTitle ?? catTitle;

  if (title) {
    const el = findNavElementContainingText(title);
    if (el) el.scrollIntoView();
  }
}

function findNavElementContainingText(text) {
  const catNavElements = document.querySelectorAll(".product-outline-category");
  const subCatNavElements = document.querySelectorAll(
    ".product-outline-subcategory"
  );
  const lessonNavElements = document.querySelectorAll(".product-outline-post");
  const navElements = [
    ...catNavElements,
    ...subCatNavElements,
    ...lessonNavElements,
  ];
  for (const element of navElements) {
    if (element.textContent.includes(text)) {
      return element;
    }
  }
}
