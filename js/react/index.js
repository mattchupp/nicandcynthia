/*
	-- Content for index.html -> nicandcynthia.com --
	
	-- link for script in html file --
	*<script type="text/jsx" src="js/react/index.js"></script>*

*/
		// variables for content 
		var welcome = "Welcome";
		var about = "About";
		var weddingevents = "Wedding Events"; 
		var accommodations = "Accommodations";
		var registry = "Registry";
		var photos = "Photo Album";
		var weddingparty = "Wedding Party";
	

		// ****
		var Welcome = React.createClass({
			render: function() {
    			return <div>{welcome}</div>;
			}
		});
		var About = React.createClass({
			render: function() {
    			return <div>{about}</div>;
			}
		});
		var Weddingevents = React.createClass({
			render: function() {
    			return <div>{weddingevents}</div>;
			}
		});
		var Accommodations = React.createClass({
			render: function() {
    			return <div>{accommodations}</div>;
			}
		});
		var Registry = React.createClass({
			render: function() {
    			return <div>{registry}</div>;
			}
		});
		var Photos = React.createClass({
			render: function() {
    			return <div>{photos}</div>;
			}
		});
		var Weddingparty = React.createClass({
			render: function() {
    			return <div>{weddingevents}</div>;
			}
		});
	 

		// render
		React.render(<Welcome />, document.getElementById('welcome-title'));
		React.render(<Welcome />, document.getElementById('welcome-nav'));
		React.render(<About />, document.getElementById('about-title'));
		React.render(<About />, document.getElementById('about-nav'));
		React.render(<Weddingevents />, document.getElementById('we-title'));
		React.render(<Weddingevents />, document.getElementById('we-nav'));
		React.render(<Accommodations />, document.getElementById('accommodations-title'));
		React.render(<Accommodations />, document.getElementById('accommodations-nav'));
		React.render(<Registry />, document.getElementById('registry-title'));
		React.render(<Registry />, document.getElementById('registry-nav'));
		React.render(<Photos />, document.getElementById('photos-title'));
		React.render(<Photos />, document.getElementById('photos-nav'));
		React.render(<Weddingparty />, document.getElementById('wp-title'));
		React.render(<Weddingparty />, document.getElementById('wp-nav'));
		


		