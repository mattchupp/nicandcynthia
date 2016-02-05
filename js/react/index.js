/*
	-- Content for index.html -> nicandcynthia.com --

	-- link for script in html file --
	*<script type="text/jsx" src="js/react/index.js"></script>*

*/
		// variables for content
		var welcome = "Welcome";
		// var about = "About";
		var weddingevents = "Wedding Events";
		var accommodations = "Travel & Accommodations";
		var registry = "Registry";
		// var photos = "Photo Album";
		// var weddingparty = "Wedding Party";

		var weddingdate = "Saturday, June 25";
		// var weddingtime = "8:00 pm";
		var receptiondate = weddingdate;
		var receptiontime = "8:00pm";

		var nameheader = "Nic & Cynthia";


		// ****
		var Welcome = React.createClass({
			render: function() {
    			return <div>{welcome}</div>;
			}
		});
		// var About = React.createClass({
		// 	render: function() {
    // 			return <div>{about}</div>;
		// 	}
		// });
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
		// var Photos = React.createClass({
		// 	render: function() {
    // 			return <div>{photos}</div>;
		// 	}
		// });
/*
		var Weddingparty = React.createClass({
			render: function() {
    			return <div>{weddingparty}</div>;
			}
		});
*/
		var Weddingdate = React.createClass({
			render: function() {
    			return <div>{weddingdate}</div>;
			}
		});
		var Receptiondate = React.createClass({
			render: function() {
    			return <div>{weddingdate}</div>;
			}
		});
		var Weddingtime = React.createClass({
			render: function() {
    			return <div>{weddingtime}</div>;
			}
		});
		var Receptiontime = React.createClass({
			render: function() {
    			return <div>{receptiontime}</div>;
			}
		});
		var Nameheader = React.createClass({
			render: function() {
    			return <div>{nameheader}</div>;
			}
		});


		// welcome page render content
		// wedding date
		// React.render(<Weddingdate />, document.getElementById('welcome-wedding-date'));
		// React.render(<Weddingdate />, document.getElementById('we-wedding-date'));
		// wedding time
		// React.render(<Weddingtime />, document.getElementById('wedding-time'));

		// reception date
		React.render(<Receptiondate />, document.getElementById('we-reception-date'));
		// reception time
		React.render(<Receptiontime />, document.getElementById('reception-time'));

		React.render(<Nameheader />, document.getElementById('name-header'));


		React.render(<Welcome />, document.getElementById('welcome-title'));
		React.render(<Welcome />, document.getElementById('welcome-nav'));


		// about page render content
		// React.render(<About />, document.getElementById('about-title'));
		// React.render(<About />, document.getElementById('about-nav'));

		// wedding events page render content
		React.render(<Weddingevents />, document.getElementById('we-title'));
		React.render(<Weddingevents />, document.getElementById('we-nav'));

		// accommodations page render content
		React.render(<Accommodations />, document.getElementById('accommodations-title'));
		React.render(<Accommodations />, document.getElementById('accommodations-nav'));

		// registry page render content
		React.render(<Registry />, document.getElementById('registry-title'));
		React.render(<Registry />, document.getElementById('registry-nav'));

		// photos page render content
		// React.render(<Photos />, document.getElementById('photos-title'));
		// React.render(<Photos />, document.getElementById('photos-nav'));

		// wedding party page render content
		// React.render(<Weddingparty />, document.getElementById('wp-title'));
		// React.render(<Weddingparty />, document.getElementById('wp-nav'));
