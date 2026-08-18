const users = [
  {
    name: "Horse",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL_LaJChPM-kg2ZeSneHHPskd9LofHO8jsRtE7QaUUItNTSN0_2C4m6A&s=10",
    bio: "Balancing on a moving horse builds deep abdominal and back muscles."
  },
  {
    name: "Dog",
    pic: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    bio: "Dogs improve our mood and encourage an active and healthy lifestyle."
  },
  {
    name: "Elephant",
    pic: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
    bio: "Elephants are highly intelligent animals with strong family bonds."
  },
  {
    name: "Lion",
    pic: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?q=80&w=1470&auto=format&fit=crop",
    bio: "Lions are powerful social animals that live and hunt together in groups."
  },
  {
    name: "Tiger",
    pic: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    bio: "Tigers are strong solitary hunters known for their speed and agility."
  },
  {
    name: "Giraffe",
    pic: "https://images.unsplash.com/photo-1566160995964-4d7bd54dbaf4?q=80&w=685&auto=format&fit=crop",
    bio: "Giraffes use their long necks to reach leaves high above the ground."
  },
  {
    name: "Panda",
    pic: "https://media.istockphoto.com/id/468446643/photo/cute-panda-bear.jpg?s=1024x1024&w=is&k=20&c=A1leaILgsgrhlB-fPZi0J6pId3uIACSd75mxZaT678k=",
    bio: "Pandas spend most of their day eating bamboo and resting."
  }
];

const cards = document.querySelector(".cards");
const inp = document.querySelector(".inp");

function showUsers(arr) {
  cards.innerHTML = "";

  arr.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${user.pic}" class="bg-img">

      <div class="blurred-layer"
           style="background-image: url('${user.pic}')">
      </div>

      <div class="content">
        <h3>${user.name}</h3>
        <p>${user.bio}</p>
      </div>
    `;

    cards.appendChild(card);
  });
}

showUsers(users);

inp.addEventListener("input", () => {
  const searchValue = inp.value.toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(searchValue)
  );

  if(filteredUsers.length === 0) {
    cards.textContent = "No User found !";
    cards.style.color = "red"
  } else {
    showUsers(filteredUsers);
  }
});