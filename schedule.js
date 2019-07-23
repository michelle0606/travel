const dataPanel = document.getElementById('data-panel')
const data = JSON.parse(localStorage.getItem('schedule')) || []

function displayData(data) {
  data.forEach(function(item, index) {
    dataPanel.innerHTML += `
          <div class="col-6 col-sm-4 col-md-4">
            <div class="card mb-2" data-id="${
              item.Id
            }" data-toggle="modal" data-target="#show-movie-modal">
              <img class="card-img-top" style="filter: brightness(0.6);" src="https://picsum.photos/300/200" alt="Card image cap" data-id="${
                item.Id
              }" data-toggle="modal" data-target="#show-movie-modal">
              <div class="card-body justify-content-between pt-4" style="position: relative;">
              <button class="btn btn-danger btn-remove-favorite" data-id="${
                item.id
              }">X</button>
                <h6 class="card-title" style="font-family:monospace; font-size:22px;">${
                  item.Name
                }</h6>
                <div>
                  <small>${item.Add}</small>
                </div>
              </div>
            </div>
          </div>
        `
  })
}

function showInfo(id) {
  const modalBody = document.querySelector('.modal-body')

  const data = info.filter(x => x.Id == id)
  modalBody.innerHTML = `
                <div class="row">
                    <div class="col-sm-6" id="modal-image">
                        <img src='https://picsum.photos/300/200' class="card-img-top" alt="..." >
                    </div> 
                    <div class="col-sm-6" id="modal-description">
                        <h4>${data[0].Name}</h4>
                        <p>${data[0].Toldescribe}</p>
                        <br>
                        <p>地址：${data[0].Add}</p>
                        <p>電話：${data[0].Tel}</p>
                    </div> 
                </div>
            `
}

function addAttraction(detail) {
  const id = detail.dataset.id

  const list = JSON.parse(localStorage.getItem('schedule')) || []
  const place = info.find(item => item.Id == id)
  if (list.some(item => item.Id == id)) {
    alert(`${place.Name}已
經在行程表中！`)
  } else {
    list.push(place)
    alert(`成功將 ${place.Name} 加入行程表!`)
    detail.querySelector('.fa-plus').classList.remove('fa-plus')
    detail.querySelector('.fas').classList.add('fa-check')
    detail.querySelector('.add').classList.add('scheduled')
  }
  localStorage.setItem('schedule', JSON.stringify(list))
}

dataPanel.addEventListener('click', e => {
  if (e.target.matches('.add') || e.target.matches('.fa-plus')) {
    addAttraction(e.target.closest('.card'))
    e.stopPropagation() //終止事件傳導
  } else {
    showInfo(e.target.dataset.id)
  }
})

displayData(data)
