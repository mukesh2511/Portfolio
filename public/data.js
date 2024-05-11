const projectData = [
  {
    id: 1,
    title: "NEXT Blog App",
    description: "A NEXT JS portfolio cum blog website with usesr login.",
    img: "https://github.com/mukesh2511/next_blog_app/blob/master/images/portfolio.png?raw=true",
    gitHubLink: "https://github.com/mukesh2511/Next_PortFolio",
    host: "https://next-blog-app-dusky.vercel.app/",
    type: ["NEXT", "NODE", "TAILWIND"],
  },
  {
    id: 2,
    title: "JobQuest",
    description:
      "This is the job searching website in which users can register as a job finder or Job provider and post new jobs and also sell courses.",
    img: "https://github.com/mukesh2511/JobQuest-Client/blob/master/images/Untitled-1.png?raw=true",
    gitHubLink: "https://github.com/userName/projectOne",
    host: "https://github.com/mukesh2511/JobQuest-Client",
    type: ["REACT", "NODE"],
  },
  {
    id: 3,
    title: "Chitra",
    description:
      "It is a video sharing site like youtube . where you can upload videos, watch videos, like and subscribe to another user.",
    img: "https://github.com/mukesh2511/chitra_client/blob/master/images/home.png?raw=true",
    gitHubLink:
      "https://github.com/mukesh2511/chitra_client/blob/master/images/home.png",
    host: "chitram.netlify.app",
    type: ["REACT", "NODE"],
  },
  {
    id: 4,
    title: "myDiary",
    description:
      "This is a todo website on which you can login & create your own todo list or save anything you want ..",
    img: "https://github.com/mukesh2511/myDiary_Client/raw/master/images/home.png",
    gitHubLink: "https://github.com/mukesh2511/myDiary_Client",
    host: "mydiary25.netlify.app",
    type: ["REACT", "NODE"],
  },
  {
    id: 5,
    title: "Booking App",
    description:
      "Developed a MERN (MongoDB, Express.js, React, Node.js) application for seamless User CRUD operations. Designed a user-friendly platform with intuitive hotel search by city and advanced filtering for price and date selection.",
    img: "https://github.com/mukesh2511/BookingAppClient/raw/master/screenshots/home.png?raw=true",
    gitHubLink: "https://github.com/mukesh2511/BookingAppClient",
    host: "mybookingclient.onrender.com",
    type: ["REACT", "NODE", "TAILWIND"],
  },
  {
    id: 6,
    title: "NewsWala",
    description:
      "A News App where you can stay updated with the current and fresh news.",
    img: "https://github.com/mukesh2511/News_app/blob/master/public/img.png?raw=true",
    gitHubLink: "https://github.com/mukesh2511/News_app",
    host: "https://github.com/mukesh2511/News_app",
    type: ["REACT"],
  },
  {
    id: 7,
    title: "ToDo List",
    description: "React ToDo List application .",
    img: "https://github.com/mukesh2511/react_todoList/blob/master/Screenshot%202024-05-05%20115444.png?raw=true",
    gitHubLink: "https://github.com/mukesh2511/react_todoList",
    host: "https://github.com/mukesh2511/react_todoList",
    type: ["REACT"],
  },
  {
    id: 8,
    title: "Mukesh Keep",
    description: "React ToDo List application .",
    img: "https://github.com/mukesh2511/keep_notes/blob/master/Screenshot%202024-05-05%20115928.png?raw=true",
    gitHubLink: "https://github.com/mukesh2511/keep_notes",
    host: "https://mukesh2511.github.io/keep_notes/",
    type: ["REACT"],
  },
  {
    id: 9,
    title: "Microsoft Clone",
    description: "Clone of microsoft website frontend .",
    img: "https://github.com/mukesh2511/Microsoft-Clone/raw/master/public/images/screenshot/screenshot_1.png",
    gitHubLink: "https://github.com/mukesh2511/Microsoft-Clone",
    host: "microsoftclone2511.netlify.app",
    type: ["REACT", "TAILWIND"],
  },
  {
    id: 10,
    title: "Let's Joke",
    description: "Jokes website which fetches new joke .",
    img: "https://github.com/mukesh2511/lets_Joke/raw/master/screenshots/screenshot_1.png",
    gitHubLink: "https://github.com/mukesh2511/lets_Joke",
    host: "mukesh2511.github.io/lets_Joke/",
    type: ["JAVASCRIPT"],
  },
  {
    id: 11,
    title: "beSocial",
    description:
      "This is a social media frontend website with Beautiful UI which has a key feature to change font size and color.",
    img: "https://github.com/mukesh2511/beSocial/blob/master/Screenshot%202024-05-05%20130213.png?raw=true",
    gitHubLink: "https://github.com/mukesh2511/Music-website",
    host: "mukesh2511.github.io/Music-website/",
    type: ["JAVASCRIPT"],
  },
  {
    id: 12,
    title: "Music Website",
    description:
      "This website shows a beautyfull user interface . it has functionality of onclick play ,pause , songs shuffle, skip next and previous.",
    img: "https://github.com/mukesh2511/Music-website/blob/master/Screenshot%202024-05-05%20122505.png?raw=true",
    gitHubLink: "https://github.com/mukesh2511/Music-website",
    host: "mukesh2511.github.io/Music-website/",
    type: ["JAVASCRIPT"],
  },
  {
    id: 13,
    title: "Weather Website",
    description:
      "This site fetch weather data of whole world from a Weather API and display when searched for a particular country or city.",
    img: "https://github.com/mukesh2511/weather-website/blob/master/Screenshot%202024-05-05%20123316.png?raw=true",
    gitHubLink: "https://github.com/mukesh2511/weather-website",
    host: "mukesh2511.github.io/weather-website/",
    type: ["JAVASCRIPT"],
  },
  {
    id: 14,
    title: "Travel Website",
    description:
      "Static Restaurant website shows a wonderful UI and animations which is created by CSS ..",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7Tov375ZRYgBr26ObImhRr7GaGX5rXmd2g&s",
    gitHubLink: "https://mukesh2511.github.io/Travel-Website/",
    host: "https://mukesh2511.github.io/Travel-Website/",
    type: [],
  },
  {
    id: 15,
    title: "Restaurant Website",
    description:
      "Static Restaurant website shows a wonderful UI and animations which is created by CSS ..",
    img: "https://github.com/mukesh2511/Restaurent-website/blob/master/Screenshot%202024-05-05%20125216.png?raw=true",
    gitHubLink: "https://github.com/mukesh2511/Restaurent-website",
    host: "https://mukesh2511.github.io/Restaurent-website/",
    type: [],
  },
  {
    id: 16,
    title: "Parallax Website",
    description: "A Parallax Website .",
    img: "https://github.com/mukesh2511/parallax-website/blob/main/Screenshot%202024-05-05%20125931.png?raw=true",
    gitHubLink: "https://github.com/mukesh2511/parallax-website",
    host: "mukeshparallax-website.netlify.app/",
    type: [],
  },
];

const progressBardata = [
  {
    id: 1,
    name: "HTML",
    percent: "80%",
  },
  {
    id: 2,
    name: "CSS",
    percent: "60%",
  },
  {
    id: 3,
    name: "TAILWIND CSS",
    percent: "50%",
  },
  {
    id: 4,
    name: "JAVASCRIPT",
    percent: "60%",
  },
  {
    id: 5,
    name: "REACT JS",
    percent: "60%",
  },
  {
    id: 6,
    name: "NEXT JS",
    percent: "40%",
  },
  {
    id: 7,
    name: "NODE JS",
    percent: "60%",
  },
  {
    id: 8,
    name: "EXPRESS JS",
    percent: "80%",
  },
  {
    id: 9,
    name: "MONGOOSE",
    percent: "80%",
  },
  {
    id: 10,
    name: "MONGODB",
    percent: "80%",
  },
  {
    id: 11,
    name: "MYSQL",
    percent: "50%",
  },
];

const education = [
  {
    id: 1,
    type: "School",
    inst: "M.K.E.S. English School",
    percent: "76.40% -2019",
  },
  {
    id: 2,
    type: "High School",
    inst: "B.S.G.D's Junior College",
    percent: "69.17%       -2021",
  },
  {
    id: 3,
    type: "Degree",
    inst: "SMT K.G Mittal College",
    percent: "9.9 CGPA - till third SEM       -Present",
  },
];
export { projectData, progressBardata, education };
