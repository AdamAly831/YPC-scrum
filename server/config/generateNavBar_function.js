var exps = {

  memo: {
    notLoggedIn: {},
    loggedIn: {}
  },

  signInOrEdit: {
    text:{
      notLoggedIn: "Sign In",
      loggedIn: "Edit Info"
    },
    link:{
      notLoggedIn: "/login",
      loggedIn: "/edit"
    }
  },

  generate: function(linkName, req){
    var navBar = "";
    var loggedInKey
    var name
    if (!req.session.data){
      name = exps.signInOrEdit.text.notLoggedIn;
      loggedInKey = "notLoggedIn";
    }
    else{
      loggedInKey = "loggedIn";
      name = req.session.data.first_name;
    }
      let links = {
      home: "",
      executives: "",
      events: "",
      registration: "",
      blog: "",
      contact: "",
      login: "",
    }
    if(exps.memo[loggedInKey][linkName] === undefined){


      links[linkName] = " class='active'";

      navBar =
              `<li${links["home"]}><a href="/">Home</a></li>`
              +`<li${links["executives"]}><a href="/executives">Executives</a></li>`
              +`<li${links["events"]}><a href="/events">Events</a></li>`
              +`<li${links["blog"]}><a href="/blog">Blog</a></li>`
              +`<li${links["contact"]}><a href="/contact">Contact</a></li>`
                if (!req.session.data){
                  navBar +=`<li${links["registration"]}><a href="/registration">Join</a></li>`;
                }
      exps.memo[loggedInKey][linkName] = navBar;
    }
    var final_navBar = exps.memo[loggedInKey][linkName]+`<li class='btn btn-primary'><a href="${exps.signInOrEdit.link[loggedInKey]}">${name}</a></li>`;

    return final_navBar; 
  }
}

module.exports = exps;