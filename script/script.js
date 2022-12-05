//object arrays
const ourTeam = [{
    "name": "Wayne Barnett",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    }, {
        "name": "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    }, {
        "name": "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    }, {
        "name": "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
];

let cardOne = document.getElementById("wayne_barnett");
cardOne.innerHTML = '<div class="card" style="width: 18rem;">
    < img src = "..." class="card-img-top" alt = "..." >
        <div class="card-body">
            <p class="card-text"></p>
        </div>
                    </div >'
//print in console properties and values 
for (let i = 0; i < ourTeam.length; i++) {
    console.log(ourTeam[i].name);
    console.log(ourTeam[i].role);
    console.log(ourTeam[i].photo);
}