console.log("works")
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const member = {
  name,
  role,
  imag,
  email,
}

for (let index = 0; index < teamMembers.length; index++) {
  const thisMember = teamMembers[index];
  console.log(thisMember)
  cardsEl.innerHTML += getMarkup

}

function getMarkup(memberjob) {

  const { img, job, name, role } = memberjob

  const markup = `<div class="bg-dark col-4 d-flex">

    <div id="photo" class=""> <img src="${member.img}" class="card-img-top">
    </div>
    <div id="person-info" class="card-body text-white p-3">
      <h3>${member.name}</h3>
      <p>${member.job}</p>
      <p>${member.email}</p>
    </div>`
}


