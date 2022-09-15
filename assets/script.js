let dataProject = []


function addProject() {
    let title = document.getElementById("input-project-title").value
    let startDate = document.getElementById("input-project-start").value
    let endDate = document.getElementById("input-project-end").value
    let desc = document.getElementById("input-project-description").value
    let image = document.getElementById("input-project-image").files


    image = URL.createObjectURL(image[0])

    let durasi = endDate - startDate

    let project = {
        title,
        durasi,
        desc,
        image
    }

    dataProject.push(project);
    renderProject();
    console.log(dataProject);

}

function renderProject() {
    document.getElementById("contents").innerHTML = ''

    for (let i = 0; i < dataProject.length; i++) {
        console.log(dataProject[i]);

        document.getElementById("contents").innerHTML += `
        <div class="col">
                        <img src="${dataProject[i].image}" alt="">
                        <div>
                            <h2>${dataProject[i].title}</h2>
                            <p>durasi 3 bulan</p>
                            <br>
                            <p>${dataProject[i].desc}.<br>
                                Happy download</p>
                            <div>
                                <!-- checkbox -->
                            </div>
                            <div class="btn-action">
                                <button class="edit">edit</button>
                                <button class="delete">delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        `
        
    }
}
