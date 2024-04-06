let projects = [
  {
    website: "Weather",
    link: "",
    languages: ["React", "Javascript",]
  },
  {
    website: "Larby",
    link: "",
    languages: ["HTML", "CSS", "Javascript",]
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
    <p>
      
    </p>
  </div>
  `
})

const root = document.querySelector("#projects").innerHTML = projectHTML;