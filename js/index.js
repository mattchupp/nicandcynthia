/*
	-- Content for index.html -> nicandcynthia.com --
	
	-- link for script in html file --
	*<script type="text/jsx" src="index.js"></script>*

*/
		// variables for content 
		var name = ""; 
	

		// ****
		var Name = React.createClass({
			render: function() {
    			return <div>{name}</div>;
			}
		});
	 

		// render
		React.render(<Name />, document.getElementById(''));
		


		