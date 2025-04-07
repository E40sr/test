let projects = [
  {
    website: "Random Video Chat",
    link: "",
    languages: ["HTML", "Javascript","PeerJs","NodeJs"],
    img: 'images/Screenshot_20250407-190050~2.png',
    description: "This is a video app that connects users randomly, I used nodejs for the backend and peerjs for the video and audio."
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
    <p>${project.description || "No info..."}</p>
  </div>
  `
})

const root = document.querySelector("#projects").innerHTML += projectHTML;
