let projects = [
  {
    website: "Game hub",
    link: "",
    languages: ["React", "Javascript",]
  },
  {
    website: "Larby",
    link: "",
    languages: ["HTML", "CSS", "Javascript",],
    img: 'images/360_F_344673825_6fU6IORyipkYpfU1mg2vmxtHxDToUO6Q.jpg'
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