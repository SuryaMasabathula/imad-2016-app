var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
 title:"Article One",
 heading: "Primary Education",
 date:"Sept 21st 2016",
 content:`The Indian government lays emphasis on primary education, also referred to as elementary education, to children aged 6 to 14 years old.The Indian government has also banned child labour in order to ensure that the children do not enter unsafe working conditions.However, both free education and the ban on child labour are difficult to enforce due to economic disparity and social conditions.80% of all recognised schools at the elementary stage are government run or supported, making it the largest provider of education in the country.`
};

var htmlObject={
    <html>
  <head>
        <title>${title}</title>
  </head>
  <body>
      <div class="container">
      <h1> ${title} </h1>  
      <h2>Here it starts... ${title} </h2>
      <h3>${heading}</h3>
      <p>
       ${content}
      </p>
     </div>
  </body>
</html>
    
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article_one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleOne.html'));
});

app.get('/article_two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleTwo.html'));
});

app.get('/article_three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleThree.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
