var module =angular.module("myApp",['ngRoute']);
module.config(function($routeProvider) {
    $routeProvider.when('/me',{
        templateUrl:"sections/me.html",
        controller:"meController"
    }).when('/education',{
        templateUrl:"sections/education.html",
        controller:"educationController"      
    }).when('/skills',{
        templateUrl:"sections/skills.html",
        controller:"skillsController"      
    }).when('/experince',{
        templateUrl:"sections/experince.html",
        controller:"experinceController"      
    }).when('/projects',{
        templateUrl:"sections/projects.html",
        controller:"projectsController"      
    }).when('/contact',{
        templateUrl:"sections/contact.html",
        controller:"contactController"  
    }).when('/',{
        templateUrl:"sections/me.html",
        controller:"meController"
    });
});
module.controller("meController",function(){});
module.controller("contactController",function(){});
module.controller("skillsController",function(){});
module.controller("projectsController",function($scope){
    $scope.projects=[{
        projectName:"Nova TimeSheet",
        description:"Web Application to calculate, and manage work hours for each programmer to get the salary range .",
        reference:"AbdelMalek ALmouzaen – +9639446877774"
    },{
        projectName:"MTIC",
        description:"It is a web application for the management of an import and export company by recording the entered and outgoing shipments, specifying the details of these shipments, dealing with customers and keeping their information .",
        reference:"AbdelMalek ALmouzaen – +9639446877774"
    },{
        projectName:"BeeOrder",
        description:"Member on team that Development Beeorder web application as back-end developer Beeorder is the first food application in Syria .",
        reference:"AbdelMalek ALmouzaen – +9639446877774"
    }]
});
module.controller("experinceController",function($scope){
    $scope.Companies=[{
        Name:"Image ADV.",
        Date:"8/2016 to 9/2016",
        Task:"Analyzing Systems , Extracting Requirements , use cases , ERD ,CBD"
      },{
        Name:"BlueBrand",
        Date:"11/2016 to 2/2017",
        Task:"Building web applications , analyzing systems , Design UX , and UI"
      },{
        Name:"Store X Web",
        Date:"4/2017 to 5/2017",
        Task:"Websites Development"
      },{
        Name:"LoanStreet",
        Date:"8/2017 to 9/2017",
        Task:"implementing loanstreet Website"
      }]
});
module.controller("educationController",function($scope){
    $scope.universities=[{
      universityName:"Damascuse University",
      graduatedClass:"2016",
      department:"Software Engineering",
      certificate:"Diploma on SoftWare Engineering",
    },{
      universityName:"Syrian Virtual University",
      graduatedClass:"2018",
      department:"Managment Information Systems",
      certificate:"Bachelor on Managment Information Systems",
    }]
});