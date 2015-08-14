/*
	-- Content for index.html -> nicandcynthia.com --
	
	-- link for script in html file --
	*<script type="text/jsx" src="js/react/index.js"></script>*

*/
		// variables for content 
		var welcome = "Welcome";
		var about = "About";
		var weddingevents = "Wedding Events"; 
	

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
	 

		// render
		React.render(<Welcome />, document.getElementById('welcome-title'));
		React.render(<About />, document.getElementById('about-title'));
		React.render(<Weddingevents />, document.getElementById('we-title'));
		


		