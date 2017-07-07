import React from 'react'
import WhatIDo from './whatIDo.js'
import Skills from './skills.js'
import Timeline from './timeline.js'
import Work from './work.js'
import Social from './social.js'
import './HomeView.scss'
import $ from 'jquery';


export default class HomeView extends React.Component{
	scroll(id){
		let elem = document.getElementById(id)
		//elem.scrollIntoView({behaviour:"smooth"})
		$('html, body').animate({
        	scrollTop: $('#'+id).offset().top
    	}, 500);
	}
	render(){
		return(
			<div>
				<div>
					<ul className="nav justify-content-end navBarTop">
					  <li className="nav-item" onClick={this.scroll.bind(this,'home')}>
					    Home
					  </li>
					  <li className="nav-item" onClick={this.scroll.bind(this,'whatIDo')}>
					    About Me
					  </li>
					  <li className="nav-item" onClick={this.scroll.bind(this,'work')}>
					    Projects
					  </li>
					  <li className="nav-item" onClick={this.scroll.bind(this,'social')}>
					    Contact
					  </li>
					</ul>
				</div>
				<div className="homeContainer" id="home">
					<div className="homeText">
						<p><b>Hey, I m Tejashree<br/>
						<span>Web Developer</span></b></p>
					</div>
				</div>
				<WhatIDo />
				<Skills />
				<Timeline />
				<Work />
				<Social />
				<a href="javascript:" id="return-to-top"><i className="fa fa-chevron-up"></i></a>
			</div>

		)
	}
}
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});
})
