let boldItems;

window.onload = () => {
  getBoldItems();
};

let getBoldItems = () => {
  boldItems = document.getElementsByTagName('strong');
};

let highlightText = () => {
  for (var i = 0; i < boldItems.length; i++) {
    boldItems[i].style.color = "green";
  }
};

let returnNormal = () => {
  for (var i = 0; i < boldItems.length; i++) {
    boldItems[i].style.color = "black";
  }
};
