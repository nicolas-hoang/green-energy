// resources
  let resources = {
    p1: {
      title: "Government Incentives",
      url: "img/solution-1.webp",
      bodyText:
        "Governments can help by giving money to people who buy clean energy systems like solar panels. They can offer tax breaks, meaning you pay less in taxes if you install solar panels. Grants and low-interest loans can also make it cheaper to start using clean energy. Special programs can ensure you get paid for any extra energy you produce and share with the grid. These measures lower the initial cost and make clean energy more affordable. By making it cheaper upfront, more people can afford to switch to clean energy.",
    },
    p2: {
      title: "Improving Technology",
      url: "img/solution-2.webp",
      bodyText:
        "Investing in better technology can make clean energy cheaper. As scientists create more efficient solar panels and batteries, the cost of making and storing energy goes down. Producing more solar panels and wind turbines in factories also lowers the price. Over time, as technology gets better and cheaper, clean energy becomes more affordable. This means everyone can access cleaner and cheaper energy sources. Continuous improvements help make clean energy available to more people.",
    },
    p3: {
      title: "Community Projects",
      url: "img/solution-3.webp",
      bodyText:
        "Communities can come together to share clean energy resources. Projects like community solar farms let people buy a share of a larger solar installation. This is great for people who can't install their own solar panels. Energy cooperatives allow groups to invest in clean energy together, sharing costs and benefits. These shared solutions reduce individual expenses, making clean energy cheaper for everyone involved. By working together, communities can make clean energy more accessible and affordable.",
    },
  };

  // get references to the active parts of html
  let buttons = document.querySelectorAll("#controls button");
  let dc = document.getElementById("dynamic-content");

  // event handler
  function selectPage(ev) {
    buttons.forEach((button) => button.classList.remove("selected"));
    let currentButton = ev.target;
    currentButton.classList.add("selected");
    dc.innerHTML = `
    <h2>${resources[currentButton.id].title}</h2>
    <img src="${resources[currentButton.id].url}" alt="${
      resources[currentButton.id].title
    }" />
    <p>${resources[currentButton.id].bodyText}</p>`;
  }

  // registering buttons for click event
  buttons[0].addEventListener("click", selectPage);
  buttons[1].addEventListener("click", selectPage);
  buttons[2].addEventListener("click", selectPage);

  // initialize with Page 1 content on load
  document.addEventListener("DOMContentLoaded", () => {
    buttons[0].classList.add("selected");
    dc.innerHTML = `
    <h2>${resources.p1.title}</h2>
    <img src="${resources.p1.url}" alt="${resources.p1.title}" />
    <p>${resources.p1.bodyText}</p>`;
  });