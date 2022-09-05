// default variables
const doc = document;

// async is set by default in case you want to fetch data from APIs
async function handlePageSwitch() {
  // pages
  const homePage = doc.querySelector("#home_page");
  const aboutPage = doc.querySelector("#about_page");
  const blogPage = doc.querySelector("#blog_page");

  // events to switch pages
  doc.querySelectorAll(".nav_button").forEach((button) => {
    // check the data attribute of each button
    const content = button.dataset.button;

    // if the content matches call the switch pages
    button.addEventListener("click", () => {
      if (content == "about") {
        switchPages(aboutPage, [homePage, blogPage]);
      }

      if (content == "blog") {
        switchPages(blogPage, [homePage, aboutPage]);
      }

      if (content == "home") {
        switchPages(homePage, [aboutPage, blogPage]);
      }
    });
  });

  function switchPages(page, otherPages) {
    // unhide the element clicked and hide the others
    page.classList.remove("hidden");

    otherPages.forEach((page) => {
      page.classList.add("hidden");
    });
  }
}

handlePageSwitch();
