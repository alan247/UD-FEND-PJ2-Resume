var bio = {
	"name" : "Alan Sánchez",
	"role" : "Web Developer",
	"welcomeMessage" : "This is a sentence, isn't it amazing?",
	"pictureURL" : "https://avatars0.githubusercontent.com/u/15384320?v=3&s=460",
	"contacts" : {
		"mobile" : "+52 1 55 8888 8888",
		"email" : "alan247@gmail.com",
		"github" : "alan247",
		"location" : "Mexico City"
	},
	"skills" : [
		"Web development",
		"Guitar",
		"Others"
	]
}

var education = {
	"schools" : [
		{
			"name" : "NCCA",
			"city" : "Mexico City",
			"degree" : "Junior High",
			"dates" : "??"
		},
		{
			"name" : "ENP6",
			"city" : "Mexico City",
			"degree" : "High School",
			"dates" : "??"
		},
		{
			"name" : "University of Lodz",
			"city" : "Lodz",
			"degree" : "BA",
			"dates" : "??"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Design 101",
			"school" : "Designlab",
			"dates" : "2015",
			"url" : "http://trydesignlab.com"
		},
		{
			"title" : "FEND Nanodegree",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://udacity.com"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Bricks",
			"title" : "waiter",
			"location" : "Mexico City",
			"dates" : "2006 - 2007",
			"description" : "Waiting tables with a smile"
		},
		{
			"employer" : "Self",
			"title" : "Freelancer",
			"location" : "Around the world",
			"dates" : "2007 - today",
			"description" : "Working on own projects and a few external ones"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Porfolio",
			"dates" : "October - November 2015",
			"description" : "Portfolio project for Udacity Nanodegree",
			"images" : "http://placehold.it/200/200"
		},
		{
			"title" : "Responsive Blog",
			"dates" : "Late October 2015",
			"description" : "Blog with full responsiveness for Udacity Nanodegree",
			"images" : "http://placehold.it/200/200"
		}
	]
}


if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);

	for (var i in bio.skills) {
		var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
		$('#skills').append(formattedSkill);
	}
}


if (work.jobs.length > 0) {

	for (var i in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
      	var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
      	var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
      	var finalFormat = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
		$('.work-entry:last').append(finalFormat);
	}
}






