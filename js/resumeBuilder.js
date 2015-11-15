var bio = {
	"name" : "Alan Sánchez",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "+52 1 55 8888 8888",
		"email" : "alan247@gmail.com",
		"github" : "alan247",
		"location" : "Mexico City"
	},
	"welcomeMessage" : "This is a sentence, isn't it amazing?",
	"skills" : [
		"Web development",
		"Guitar",
		"Others"
	],
	"biopic" : "https://avatars0.githubusercontent.com/u/15384320?v=3&s=460"
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#header').append(formattedBioPic);
	$('#header').append(formattedWelcomeMsg);
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedLocation);


	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (var i in bio.skills) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}
}


var education = {
	"schools" : [
		{
			"name" : "NCCA",
			"location" : "Mexico City",
			"degree" : "Junior High",
			"majors" : [
				"major1",
				"major2"
			],
			"dates" : 1999,
			"url" : "http://school.com"
		},
		{
			"name" : "ENP6",
			"location" : "Mexico City",
			"degree" : "Junior High",
			"majors" : [
				"major1",
				"major2"
			],
			"dates" : 1999,
			"url" : "http://school.com"
		},
		{
			"name" : "University of Lodz",
			"location" : "Lodz",
			"degree" : "BA",
			"majors" : [
				"major1",
				"major2"
			],
			"dates" : 1999,
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

		$('#education').append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace('%data%', schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', schools[i].degree);
		var formattedDates = HTMLschoolDates.replace('%data%', schools[i].dates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', schools[i].location);
		//ARRAY!var formatted Major = HTMLschoolMajor.replace('%data', schools[i].majors);

		var schoolsFinalFormat = formattedName + formattedDegree + formattedDates + formattedLocation;

		$('.education-entry:last').append(schoolsFinalFormat);
	}

	var online = education.onlineCourses;

	if (online.length > 0) {
		$('.education-entry:last').append(HTMLonlineClasses);

		for(k in online){
			var formattedTitle = HTMLonlineTitle.replace('%data%', online[k].title);
			var formattedSchool = HTMLonlineSchool.replace('%data%', online[k].school);
			var formattedOnlineDates = HTMLonlineDates.replace('%data%', online[k].dates);
			var formattedURL = HTMLonlineURL.replace('%data%', online[k].url);

			var onlineFinalFormat = formattedTitle + formattedSchool + formattedOnlineDates + formattedURL;

			$('.education-entry:last').append(onlineFinalFormat);
		}
	}
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

work.display = function () {
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
}

var projects = {
	"projects" : [
		{
			"title" : "Porfolio",
			"dates" : "October - November 2015",
			"description" : "Portfolio project for Udacity Nanodegree",
			"images" : [
				"http://placehold.it/200/200",
				"http://placehold.it/201/201"
			]
		},
		{
			"title" : "Responsive Blog",
			"dates" : "Late October 2015",
			"description" : "Blog with full responsiveness for Udacity Nanodegree",
			"images" : [
				"http://placehold.it/202/202",
				"http://placehold.it/203/203"
			]
		}
	]
}

projects.display = function () {
	projects = projects.projects;
	for (i in projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects[i].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects[i].description);
		var formattedInput = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;

		$(".project-entry:last").append(formattedInput);

		if (projects[i].images.length > 0) {
			for (j in projects[i].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects[i].images[j]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}


// Click logger functionality

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});


// Internationalize name

function inName(name) {
    name = name.trim().split(' ');
	var lastName = name[1].toUpperCase();
	var firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	var finalName = firstName + ' ' + lastName;
	return finalName;
}

$('#main').prepend(internationalizeButton);


// Map

$('#mapDiv').append(googleMap);

// Call functions
bio.display();
education.display();
work.display();
projects.display();

