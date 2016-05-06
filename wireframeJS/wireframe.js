function teamCaptianLogIn() {
  if(typeof(Storage) !== "undefined") {
    localStorage.isLoggedIn = 2;
  	displayTeamCaptian();
  }
}

function logIn() {
  if(typeof(Storage) !== "undefined") {
    localStorage.isLoggedIn = 1;
  	displayUser();
  }
}

function logOut() {
  if(typeof(Storage) !== "undefined") {
    localStorage.isLoggedIn = 0;
  	displayGeneralPublic();
  }
}

function updateCitySelected() {
    var citySelectListValue = document.getElementById("CitySelectList").value;
    var teamSelectList = document.getElementById("TeamSelectList");
    teamSelectList.options.length = 0;
    
    if(citySelectListValue=="novalue"){
    
      var noTeams = document.createElement("option");
      noTeams.text = "No teams to show";
      teamSelectList.add(noTeams);
      
    }else if(citySelectListValue=="Guelph"){
    
      var Team1 = document.createElement("option");
      Team1.text = "Guelph Team 1";
      teamSelectList.add(Team1);
      
      var Team2 = document.createElement("option");
      Team2.text = "Guelph Team 2";
      teamSelectList.add(Team2);
      
    }else if(citySelectListValue=="Kitchener"){
    
      var Team1 = document.createElement("option");
      Team1.text = "Team Kitchener 1";
      teamSelectList.add(Team1);
      
      
      var Team1 = document.createElement("option");
      Team1.text = "Team Kitchener 2";
      teamSelectList.add(Team1);
      
    }else if(citySelectListValue=="Toronto"){
    
      var Team1 = document.createElement("option");
      Team1.text = "1st Toronto Team";
      teamSelectList.add(Team1);
      
      var Team2 = document.createElement("option");
      Team2.text = "2nd Toronto Team";
      teamSelectList.add(Team2);
      
      var Team3 = document.createElement("option");
      Team3.text = "3rd Toronto Team";
      teamSelectList.add(Team3);
      
      var Team4 = document.createElement("option");
      Team4.text = "4th Toronto Team";
      teamSelectList.add(Team4);
    }   
}

function updateTeamSelected() {
    var teamSelectListValue = document.getElementById("TeamSelectList").value;
    if(teamSelectListValue != "no"){
      document.getElementById("SelectedTeam").innerHTML = "You selected: " + teamSelectListValue;
    }
}