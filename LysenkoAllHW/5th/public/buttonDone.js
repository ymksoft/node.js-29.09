document.addEventListener('DOMContentLoaded', (e) => {
  const button = document.querySelectorAll('.buttonDone')
  button.forEach((val) => {
    // console.log(val.dataset.id)
    val.addEventListener('click', (e) => {
      e.preventDefault()
      const id = val.dataset.id
      fetch(`/setdone?id=${id}`)
      .then( (response) => {response.json()} )
      .then(res => {})
      location.reload()
    })
  })
})

