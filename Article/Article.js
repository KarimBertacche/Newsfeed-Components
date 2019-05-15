// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    const expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // console.log(event.target + 'button was clicked')
    this.domElement.classList.toggle('article-open');
    
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(article => new Article(article));



//FUNCTION THAT BUILDS ARTICLE COMPONENTS 
// const articleSection = document.querySelector('.articles');


// class createNewArticle {
//   constructor(data) {
//     this.data = data;
//     this.index = this.iterateDataContent(this.data);
//     console.log(this.data);
//     console.log(this.index);
  
//     this.createArticlesContainers();
//     this.createHeadingSecondary();
//     this.createDateParagraph();
//     this.createArticleParagraphs();
//     this.appendElements();
//   }

//   createArticlesContainers() {
//     const articles = document.createElement('div');
//     articles.classList.add('articles');
//     const article = document.createElement('div');
//     article.classList.add('article');
//   }

//   iterateDataContent(data) {
//     Array.from(data);
//     const dataIndex = data.map((data, index)=> index);
//     console.log(dataIndex);
//   }

//   createHeadingSecondary() {
//     const h2 = document.createElement('h2');
//     h2.classList.add('h2');
//     h2.textContent = this.data[this.index].heading;
//   }

//   // createDateParagraph() {
//   //   const dateParagraph = createElement('p');
//   //   dateParagraph.classList.add('date')
//   //   dateParagraph.textContent = this.singleData.date;
//   // }
    
//   createArticleParagraphs() {
//     const paragraph1 = document.createElement('p');
//     paragraph1.textContent = this.data[this.index].paragraph1;
//     const paragraph2 = document.createElement('p');
//     paragraph2.textContent = this.data[this.index].paragraph2;
//     const paragraph3 = createElement('p');
//     paragraph3.textContent = this.singleData.paragraph3;
//   }
   
//   appendElements() {
//     this.articles.appendChild(article);
//     this.article.append(h2, dateParagraph, paragraph1, paragraph2);
//   }
// }



// const articleData = [
//   {
//     heading: 'Sheep',
//     paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     heading: 'Lambs',
//     paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     heading: 'Wolves',
//     paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
// ];


// const newArticle = new createNewArticle(articleData);
// console.log(newArticle);