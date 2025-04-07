let projects = [
  {
    website: "Random Video Chat",
    link: "https://video-app-29gw.onrender.com/",
    languages: ["HTML", "Javascript","PeerJs","NodeJs"],
    img: 'images/Screenshot_20250407-190050~2.png',
    url: "https://github.com/E40sr/test.git",
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
     <a href=${}>Code</a> <a href=${project.link}>Visit site</a>
   </div>
    <p>${project.description || "No info..."}</p>
  </div>
  `
})

const root = document.querySelector("#projects").innerHTML += projectHTML;
