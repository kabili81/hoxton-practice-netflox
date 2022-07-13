import './style.css'

// This is the exercise for the refresher thing

// Today we're building a very simplified version of Netflix from scratch. Netflox :kappa:

// The implementation is up to you. The primary focus is core javascript . Don't worry about styling too much, use minimal CSS to make the app usable.

// The purpose of this exercise:
// - to find out which concepts you get stuck on
// - unblock you where you get stuck
// - to see how well you know your tools
// - check how confident you are with trying things yourselves

// Nico and myself will be checking in on every one of you and to get them brains rollin'.

// Repo: hoxton-practice-netflox

// Instructions:
// - jump into a 🍐
// - share your screen
// - start coding

// Deliverables:
// - The app should have 4 movies.
// - Each movie should contain:
//   - an id
//   - a title
//   - a thumbnail URL
//   - a short description (you can lorem ipsum it)
//   - comments (just strings are fine)
// - As a user, when I launch the app, I should see a grid of movie thumbnails on a page.
// - Clicking on a movie should take the user to a page with:
//    - the rest of the information about the movie
//    - a back button that takes them back to the list.

//    ⚠⚠⚠- BONUS  a form to leave a comment for that movie. entering a comment in a form and hitting enter should:
//      - add a comment to the rest
//      - clear the form
type CommentData = {
  id: number
  content:string
  imageid: number
}

type film = {
  id: number
  title: string
  images: string
  description: string
  comments: CommentData[]
}
let state = {
   films: [
    {
      id: 1,
      title: "The Terminator",
      image: "https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg",
      description: "The Terminator is a 1984 American science fiction action film directed by James Cameron.",
      comments:[
        "I love this film",
        "Where nice" 
      ]
    },
    {
      id: 2,
      title: "Mission: Impossible - Fallout",
      image: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_FMjpg_UX1000_.jpg",
      description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
      comments:[
        "I love this film",
        "Where nice" 
      ]
    },
    {
      id: 3,
      title: "Gladiator",
      image: "https://m.media-amazon.com/images/I/91ATO4sRPVL._SL1500_.jpg",
      description: "Gladiator is a 2000 epic historical drama film directed by Ridley Scott and written by David Franzoni, John Logan, and William Nicholson.",
      comments:[
        "I love this film",
        "Where nice" 
      ]
    },
    {
      id: 4,
      title: "Love and Thunder",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtVjX9NcAQ-6H3qldA0oI-F8AcmBe1fEVoglBXWOFsys8CTtCd",
      description: "American superhero film based on Marvel Comics featuring the character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Thor: Ragnarok (2017) and the 29th film in the Marvel Cinematic Universe (MCU).",
      comments:[
        "I love this film",
        "Where nice" 
      ]
    }
   ]
}

function renderFilmList () {
  let bodyEl = document.querySelector('body')
  

let mainEl = document.createElement('main')
mainEl.textContent = ''

let divMain = document.createElement('div')
divMain.className = 'List of films'


let titleh2 = document.createElement('h2')
titleh2.textContent = 'Thor: Love and Thunder'

let imageFilm = document.createElement('img')
imageFilm.src = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtVjX9NcAQ-6H3qldA0oI-F8AcmBe1fEVoglBXWOFsys8CTtCd'
imageFilm.alt = ''
imageFilm.className = 'film-img'

let descriptionSpane = document.createElement('spane')
descriptionSpane.textContent = 'American superhero film based on Marvel Comics featuring the character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Thor: Ragnarok (2017) and the 29th film in the Marvel Cinematic Universe (MCU).'

bodyEl.append(mainEl)

mainEl.append(divMain,)

divMain.append(titleh2, imageFilm, descriptionSpane)
}
renderFilmList()
