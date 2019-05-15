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
const articleData = [
  {
    heading: 'Sheep',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
    paragraph2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
  },
  {
    heading: 'Lambs',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
    paragraph2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
  },
  {
    heading: 'Wolves',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
    paragraph2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
  },
  {
    heading: 'Giraffe',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
    paragraph2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
  },
  {
    heading: 'Lion',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
    paragraph2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
  },
  {
    heading: 'Chimpanzee',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
    paragraph2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut ab vel asperiores inventore tempore odio laboriosam et rerum debitis laudantium voluptatem laborum maiores, accusamus doloribus eaque sit, odit magnam assumenda ea vitae obcaecati? Quisquam sapiente mollitia debitis repudiandae deserunt nobis dolores expedita iure placeat, quibusdam beatae fugit optio culpa, repellat vel! Dignissimos, voluptatibus. Eius, voluptate earum porro minus exercitationem sapiente assumenda, modi recusandae eos sunt tenetur quo ex iure quos! Incidunt ut dignissimos vero nesciunt repellendus commodi fugiat quo error temporibus tenetur nostrum, sit earum repellat sequi? Doloremque sint facere impedit perspiciatis voluptas similique quos eaque. Nam, excepturi labore?',
  },
];

class createNewArticle {
  constructor(data, articleData) {
    this.data = data;
    this.articleData = articleData;
    const article = document.createElement('div');
    article.classList.add('article');
    article.style.overflow = 'scroll';
    const articles = document.querySelector('.articles');
    articles.append(article);
    this.createHeading(article);
    this.createParagraphs(article);
    this.createButton(article);
  }

  createHeading(article) {
    const heading = document.createElement('h2'); 
    heading.classList.add('h2');
    heading.textContent = this.articleData.heading;
    article.appendChild(heading);
  }

  createParagraphs(article){
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = this.articleData.paragraph1;
    article.append(paragraph1);
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = this.articleData.paragraph2;
    article.append(paragraph2);
  }

  createButton(article) {
    const button = document.createElement('button');
    button.classList.add('expandButton');
    button.textContent = 'expand';
    article.append(button); 
    button.addEventListener('click', () => {
      article.classList.toggle('article-open');
    })
  }
}


articleData.forEach((article, index) => new createNewArticle(articleData, articleData[index]));
