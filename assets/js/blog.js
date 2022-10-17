let dataBlog = []

function addProject(event){
    event.preventDefault();
    
    let project = document.getElementById("blog-input").value
    let startDate = document.getElementById("date-start").value
    let endDate = document.getElementById("date-end").value
    let checkbox = document.getElementsByName("inputCheck").value
    let description = document.getElementById("blog-description").value
    let image = document.getElementById("upload-image").files[0]

    image = URL.createObjectURL(image)
    console.log(image)

    let blog= {
        project,
        startDate,
        endDate,
        checkbox,
        description,
        image,
        postAt: new Date(),
        author: "Try Widodo Putra"
    }


    dataBlog.push(blog)
    console.log(dataBlog)

    renderBlog()
}


function renderBlog() {
    document.getElementById("contents").innerHTML = ''

    for (let index = 0; index < dataBlog.length; index++) {
        console.log("test",dataBlog[index])

        document.getElementById("contents").innerHTML += `
        <article class="blog-item">
                    <div class="blog-img">
                        <img src="${dataBlog[index].image}">
                    </div>
                    <div class="blog-name">
                        <h3> <a href="blog-detail.html">DumbWays MobileApp 2022
                        ${dataBlog[index].project}
                        </a> </h3>
                        <div class="blog-duration">
                            <p>Durasi: 1 Bulan Lalu</p>
                        </div>
                    </div>
                    <div class="blog-description">
                        <p>
                        ${dataBlog[index].description}
                        </p>
                        <div class="blog-tech-info">
                            <img src="./assets/img/playstore.png">
                            <img src="./assets/img/android.png">
                            <img src="./assets/img/java.png">
                        </div>
                    </div>
                    <div class="action-btn">
                        <button class="btn btn-primary">edit</button>
                        <button class="btn btn-white">delete</button>
                    </div>
                </article>
        `
    }
}


function getFullTime(time) {
    // time = new Date()
    // console.log(time)

    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // console.log(monthName[9])

    // 14
    let date = time.getDate()
    console.log(date)

    // 9
    let monthIndex = time.getMonth()
    console.log(monthIndex)

    // 2022
    let year = time.getFullYear()
    console.log(year)

    let hours = time.getHours()
    let minutes = time.getMinutes()

    console.log(hours)

    if (hours <= 9) {
        hours = "0" + hours
    } 
    
    if (minutes <= 9) {
        minutes = "0" + minutes
    }

    // 14 Oct 2022 09:07 WIB
    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(time) {
    let timeNow = new Date()
    let timePost = time

    let distance = timeNow - timePost //milisecond
    console.log(distance)

    let milisecond = 1000 // milisecond
    let secondInHours = 3600 // 1 jam = 3600 detik
    let hoursInDay = 24 // 1 hari = 24 jam

    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSecond = Math.floor(distance / milisecond)

    if (distanceDay > 0) {
        return `${distanceDay} day(s) ago`
    } else if (distanceHours > 0) {
        return `${distanceHours} hour(s) ago`
    } else if (distanceMinutes > 0) {
        return `${distanceMinutes} minute(s) ago`
    } else {
        return `${distanceSecond} second(s) ago`
    }
}

// 1#
setInterval(function() {
    renderBlog()
}, 3000)