    foo -------
   /   \       |
  bar   baz    quux
   |            |
   x            y


foo = {
    children: [bar, baz, quux]
}

x = {
    children: []
}


function createWalker(root) {

    var q = [];
    q.push(root);


    return function(){
        var node = q.shift();
        for( var i=0; i<node.children.length; i++ ){
            q.push(node.children[i]);

        }
        return node;
    }
}


var walker = createWalker(foo);
walker(); // foo
walker(); // bar
...
walker(); // y
walker(); // undefined

const pythonImgUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/810379/python.png'
const rubyImgUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/810379/ruby.png'

$( "#start_game" ).click(function() {
  var val = $('#grid_size').val()
  if (val > 10 ) val = 10;
  $('div#grid').removeAttr('id');
  for( var i = 0; i<val; i++ ){
    var row = $('<div class="row"></div>');
    for( var j = 0; j < val; j++ ){
      var column = $('<div class="game-space"></div>');
      row.append(column);
    }
    $('.viewport').append(row);
  }
  var cells = $(".game-space");
  var random = Math.floor(Math.random()*cells.length);
    cells[random].className += " python";
  var ruby = Math.floor(Math.random()*cells.length);
  if( ruby === random ) ruby = Math.floor(Math.random()*cells.length);
  cells[ruby].className += " ruby";
  $( "body" ).keydown(function(e) {
    e.preventDefault();
    if(e.keyCode === 37) { // left
      console.log('l')
      if(random%val === 1){
        $('div.python').removeClass('python');
        cells[random - 1].className += " python";
        random = random-1;
      }
  } else if(e.keyCode === 39) { // right
    console.log('r')
      if(random%val !== val -1){
        $('div.python').removeClass('python');
        cells[random + 1].className += " python";
        random = random+1;
      }
  }else if(e.keyCode === 38) { // up
      console.log('hit')
      if(random/val !== 0){
        $('div.python').removeClass('python');
        cells[random - val].className += " python";
        random = random-val;
      }
  }
    else if(e.keyCode === 40) { // down
      console.log('d')
      if(random/val !== val -1){
        $('div.python').removeClass('python');

        cells[random + val].addClass("python");
        random = random+val;
        console.log(val)
      }
    }
  });
});

    body, input, button {
  font-size: 15px;
  font-family: 'Helvetica Neue';
}
#grid {
  display: none;
}
#start_game, .form , #grid_size{
  display: block;
  width: 500px;
  padding: 15px 0;
  margin: 10px auto 20px;
  text-align: center;
}
#main {
  float: right;
}
.instruction {
  width: 400px;
  float: left;
  line-height: 1.3em;
}
.viewport {
  margin: 0 auto;
  height: 500px;
  width: 500px;
  border: 1px solid #555;
  display: table;
}
.row {
  display: table-row;
}
.game-space {
  border: 1px dotted gray;
  width: 50px;
  height: 50px;
  display: table-cell;
}
.python {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/810379/python.png');
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
}
.ruby {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/810379/ruby.png');
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: center;
}

<div class="instruction">
  <h1>Exercise: A basic game in browser</h1>

  <h2>Goal</h2>
  <p>
    This exercise is inteded to assess a candidate's fundamental understanding of
    manipulating HTML DOM elements by utilizing JavaScript. As well as problem solving
    skill around how to strategize on a simple game.
  </p>

  <h2>Requirement</h2>
  <p>Any modern browser</p>

  <h2>Information</h2>
  <p>
    Use whatever JavaScript libaray or framework as you like to help achieve the objective.
    This exercise is not meant for you to know everything about JavaScript. Rather it's
    a way for us to tell how a candidate approaches the problem and how to execute.
  </p>
  <p>
    This exercise is open book, use Google as you wish to find out reference. Questions are
    encouraged, there is no dumb question and you won't be count against the questions you ask.
  </p>

  <h2>Objective</h2>
    <p>By the end of the test, we should be able to render the game grid, draw images to it, and listen to user input and simulate basic gameplay. There are six milestones for this test that break down as so:</p>

  <ol>
    <h3>--Game Setup--</h3>
    <li>When the start game button is clicked, the grids should be rendered properly based on the input number. Once the grid is rendered, the start button should be disabled.</li>
    <li>Place Python randomly on any cell</li>
    <li>After the board has been rendered, add the ruby class to a random cell on the grid.</li>

    <h3>--Game Mechanics--</h3>
    <li>When a user presses an arrow key, we should move the python one tile in that direction if possible (not against a wall).</li>
    <li>The user should see an alert when the python moves onto the same tile as the ruby notifying them of how many moves it took for them to catch the ruby.</li>
    <li>If the user does not move onto a ruby tile, the turn should end with the ruby moving one tile in a direction away from the python (e.g. if the python is to a cell to the top right, move either to the left or down). Extra points are awarded for smarter movement strategies.</li>

    <h3>--Customization--</h3>
    <li>Before the game starts, a user should be able to use a custom image instead of the python image using the upload file button.</li>
  </ol>
</div>
<div id="main">
  <input id="grid_size" type="number" placeholder="grid size" /><button id="start_game">Start Game</button>
  <div id="grid">
    <div class="viewport">
<!--       <div class="row">
        <div class="game-space"></div>
        <div class="game-space"></div>
        <div class="game-space"></div>
      </div>
      <div class="row">
        <div class="game-space"></div>
        <div class="game-space"></div>
        <div class="game-space"></div>
      </div>
      <div class="row">
        <div class="game-space">
        </div>
        <div class="game-space"></div>
        <div class="game-space"></div>
      </div> -->
    </div>
  </div>
  <div class="form">
    <!-- File picker will only work with modern browsers! -->
    <input type="file" />
  </div>
</div>


