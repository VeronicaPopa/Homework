
let carti = [
  {
    titlu: "\"Thinking, Fast and slow\"",
    autor: "Daniel Kahneman",
    statut: "citita",
    cover: "https://images-na.ssl-images-amazon.com/images/I/41wI53OEpCL._SX332_BO1,204,203,200_.jpg"
  },
  {
    titlu: "\"When the body says No\"",
    autor: "Gabor Mate",
    statut: "necitita",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81PvAO9G+HL.jpg"
  },
  {
    titlu: "\"Only dull people are brilliant at breakfast\"",
    autor: "Oscar Wilde",
    statut: "citita",
    cover: "https://advocateofbooks.files.wordpress.com/2016/11/img_3615.jpg"
  },
  {
    titlu: "\"Why we sleep\"",
    autor: "Matthew Walker",
    statut: "citita",
    cover: "https://images-na.ssl-images-amazon.com/images/I/8174kfNgcwL.jpg"
  },
  {
    titlu: "\"How to win friends and influence people\"",
    autor: "Dale Carnegie",
    statut: "necitita",
    cover: "https://image.ebooks.com/previews/000/000606/000606957/000606957.jpg"
  },
  {
    titlu: "\"The intelligent investor\"",
    autor: "Benjamin Graham",
    statut: "citita",
    cover: "https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg"
  }
];
const existingScript = document.body.firstElementChild;

const h1 = document.createElement("h1");
h1.textContent = "Book List";
document.body.insertBefore(h1, existingScript);

const ul = document.createElement('ul');
document.body.insertBefore(ul, existingScript);

for (let i = 0; i < carti.length; i++) {
  const li = document.createElement("li");

  const img = document.createElement('img');
  img.setAttribute("src", carti[i].cover);
  img.setAttribute("alt", carti[i].titlu);
  img.style.width = "40px";
  li.appendChild(img);

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", carti[i].cover);
  linkElement.textContent = carti[i].titlu;

  const spanElement = document.createElement("span");
  spanElement.textContent = ' by ' + carti[i].autor + ' - ' + carti[i].statut;

  const spanContent = document.createElement("span");
  spanContent.appendChild(linkElement);
  spanContent.appendChild(spanElement);
  li.appendChild(spanContent);

  if (carti[i].statut === "citita") {
    spanContent.style.backgroundColor = "green";
  } else {
    spanContent.style.backgroundColor = "yellow";
  };
  ul.appendChild(li);
}