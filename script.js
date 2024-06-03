let projects = [
  {
    website: "Game hub",
    link: "",
    languages: ["React", "Javascript",],
    img: 'images/Screenshot_20231221-212259.JPG'
  },
  {
    website: "Larby",
    link: "",
    languages: ["HTML", "CSS", "Javascript",],
    img: 'images/Capture.JPG'
  },
  {

  },
  {

  },
  {

  }
]


let projectHTML = ""

projects.forEach((project) => {
  projectHTML += `
  <div class="project-div">
    <h3>
      ${project.website}
    </h3>
    <img src=${project.img} class="project-img">
    
    <p>
      ${project.languages}
    </p>
   <div class="project-links">
     <a href="#">Code</a> <a href="">Visit site</a>
   </div>
    
  </div>
  `
})

const root = document.querySelector("#projects").innerHTML += projectHTML;