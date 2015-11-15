/*
Bio object with encapsulated display function
*/
var bio = {
	"name" : "Alan Sánchez",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "+52 55 8888 8888",
		"email" : "alan247@gmail.com",
		"github" : "alan247",
		"location" : "Mexico City"
	},
	"welcomeMessage" : "This is a sentence, isn't it amazing?",
	"skills" : [
		"Web development",
		"Private pilot",
		"Guitar player",
		"Potential polyglot"
	],
	"biopic" : "https://avatars0.githubusercontent.com/u/15384320?v=3&s=460"
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	var skills = bio.skills;
	if (skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
}

/*
Bio object with encapsulated display function
*/
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
			"employer" : "Myself",
			"title" : "Freelancer",
			"location" : "N/A",
			"dates" : "2007 - today",
			"description" : "Working on own projects and a few external ones"
		}
	]
}

work.display = function () {
	if (work.jobs.length > 0) {
		for (var i in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
	      	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
	      	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
	      	var finalFormat = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

			$(".work-entry:last").append(finalFormat);
		}
	}
}

/*
Projects object with encapsulated display function
*/
var projects = {
	"projects" : [
		{
			"title" : "Porfolio",
			"dates" : "October - November 2015",
			"description" : "Portfolio project for Udacity Nanodegree",
			"images" : [
				"http://placehold.it/500x300/110000",
				"http://placehold.it/501x301/330000"
			]
		},
		{
			"title" : "Responsive Blog",
			"dates" : "October 2015",
			"description" : "Blog with full responsiveness for Udacity Nanodegree",
			"images" : [
				"http://placehold.it/502x302/550000",
				"http://placehold.it/503x303/770000"
			]
		},
		{
			"title" : "Resume made with Javascript",
			"dates" : "November 2015",
			"description" : "This page",
			"images" : [
				"http://placehold.it/504x304/990000",
				"http://placehold.it/505x305/110000"
			]
		}
	]
}

projects.display = function () {
	projects = projects.projects;
	for (i in projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects[i].description);
		var formattedInput = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;

		$(".project-entry:last").append(formattedInput);

		var pImages = projects[i].images;

		if (pImages.length > 0) {
			for (var j = 0; j < pImages.length; j++) {
				var formattedImage = HTMLprojectImage.replace("%data%", pImages[j]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

/*
Education object with encapsulated display function
*/
var education = {
	"schools" : [
		{
			"name" : "University First",
			"location" : "Lodz",
			"degree" : "Life Sciences",
			"majors" : [
				"Love",
				"Communication"
			],
			"dates" : 2008,
			"url" : "http://school.com"
		},
		{
			"name" : "Unversity Second Experience",
			"location" : "Munich",
			"degree" : "Air Studies",
			"majors" : [
				"Winds",
				"Pressure",
				"Bernoulli"
			],
			"dates" : 2010,
			"url" : "http://school.com"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Design 101",
			"school" : "Designlab",
			"dates" : 2015,
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

education.display = function() {
	var schools = education.schools;
	for(i in schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", schools[i].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", schools[i].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", schools[i].location);
		var schoolsFinalFormat = formattedName + formattedDegree + formattedDates + formattedLocation;

		$(".education-entry:last").append(schoolsFinalFormat);

		var majors = schools[i].majors;

		for(var j = 0; j < majors.length; j++) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", majors[j]);
			$(".education-entry:last").append(formattedMajor);
		}
	}

	var online = education.onlineCourses;

	if (online.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for(var k = 0; k < online.length; k++){
			var formattedTitle = HTMLonlineTitle.replace("%data%", online[k].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", online[k].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", online[k].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", online[k].url);
			var onlineFinalFormat = formattedTitle + formattedSchool + formattedOnlineDates + formattedURL;

			$(".education-entry:last").append(onlineFinalFormat);
		}
	}
}

/*
Click logging function
*/
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

/*
Function to internationalize names (capitalized firstname and uppercase lastname)
*/
function inName(name) {
    name = name.trim().split(" ");
	var lastName = name[1].toUpperCase();
	var firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	var finalName = firstName + " " + lastName;
	return finalName;
}

/*
Add internationalize button to page
*/
$("#header").prepend(internationalizeButton);

/*
Add map to the page using pre-written functions in helper.js
*/
$("#mapDiv").append(googleMap);

/*
Call functions to fill out resume
*/
bio.display();
work.display();
projects.display();
education.display();

