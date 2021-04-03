
let carti = [
  {
    titlu : "Thinking, Fast and slow",
    autor : "Daniel Kahneman",
    statut : "citita"
  },
    {
    titlu : "When the body says No",
    autor : "Gabor Mate",
    statut : "necitita"
  },
    {
    titlu : "Only dull people are brilliant at breakfast",
    autor : "Oscar Wilde",
    statut : "citita"
  },
    {
    titlu : "Why we sleep",
    autor : "Matthew Walker",
    statut : "citita"
  },
    {
    titlu : "How to win friends and influence people",
    autor : "Dale Carnegie",
    statut : "necitita"
  },
    {
    titlu : "The intelligent investor",
    autor : "Benjamin Graham",
    statut : "citita"
  }
];
for (let i = 0; i < carti.length; i++) {
     console.log(carti[i].titlu + ' by ' + carti[i].autor);
}
for (let i = 0; i < carti.length; i++) {
  console.log(carti[i].titlu + ' by ' + carti[i].autor + " - " + carti[i].statut);
}
