var React = require("react");
var ReactDOM = require("react-dom");

var data = ["Blog", "Projects"];

var Navbar = props => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Kenny Yang</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          {data.map(function(item, i) {
            return <li><a href="#">{item}</a></li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

var Home = () => {
  const BGG_LINK = "https://www.boardgamegeek.com/collection/user/kyang321?rankobjecttype=subtype&rankobjectid=1&columns=title%7Cthumbnail%7Cstatus%7Crank%7Crating%7Cplays%7Ccomment&geekranks=Board+Game+Rank&excludesubtype=boardgameexpansion&own=1&objecttype=thing&ff=1&subtype=boardgame";
  return (
    <div>
      <Navbar />
      <div className="container col-sm-8 col-sm-offset-2">
        <div className="col-sm-4">
          <img src="./fatherandson.jpg" className="img-responsive" />
        </div>
        <p>
          Hi, my name is Kenny and this page is about the things that I've been learning how to build.
        </p>
        <p>
          I originally graduated from the University of Maryland, College Park in 2010 with a BA in Economics but over the years I've been getting more and more into software development. I plan to graduate in 2018 with a BS in Computer Science. I currently work at the National Academy of Sciences as a Sales Representative.
        </p>
        <p>
          My hobbies include Video Games and <a href={BGG_LINK}>Board Games</a>
        </p>
      </div>
    </div>
  );
};

ReactDOM.render(<Home/>, document.getElementById("app"));
