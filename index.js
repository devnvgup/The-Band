const contentImg = [
    {
        imgUrl: "/assets/img/slider/chicago.jpg",
        heading: "Chicago",
        des: "Thank you, Chicago - A night we won't forget",
    },
    {
        imgUrl: "/assets/img/slider/la.jpg",
        heading: "Los Angeles",
        des: "We had the best time playing at Venice Beach!",
    },
    {
        imgUrl: "/assets/img/slider/ny.jpg",
        heading: "New York",
        des: "The atmosphere in New York is lorem ipsum.",
    }
]

let currentIndex = 0

function changeBackGround() {
    const slider = document.querySelector("#slider")
    const heading = document.querySelector(".text-heading")
    const des = document.querySelector(".text-description")
    currentIndex++
    if (currentIndex >= contentImg.length) currentIndex = 0
    slider.style.background = `url(${contentImg[currentIndex].imgUrl}) top center / cover no-repeat`
    heading.textContent = contentImg[currentIndex].heading
    des.textContent = contentImg[currentIndex].des
}

function setNameAndAvatar() {
    const contentMember = document.querySelector(".member-list")
    for (let i = 0; i < 3; i++) {
        contentMember.innerHTML += `
        <div class="member-item">
            <p class="member-name">Name</p>
            <img src="./assets/img/band/bandmember.jpg" alt="" class="member-img">
        </div>`
    }
}

setInterval(changeBackGround, 2000)
setNameAndAvatar()

