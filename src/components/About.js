import React from "react";
import Links from "./Links"


function About({bio = 0, github, linkedin}) {
 
 console.log (bio)
  return (
    <div id="about">
      <h2>About Me</h2>
      { bio === 0 || bio === "" ? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {github} linkedin = {linkedin}/>
    </div>
  );
}

export default About;
