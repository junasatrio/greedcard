const dataTestiomoni = [
  {
    name :"satrio",
    comment :"sangat baik", 
    rating:"2",
    image :""
  }
]
  
  function showTestimoni() {
    let testimoniForHtml = ""
  
    dataTestiomoni.forEach(item => {
      testimoniForHtml += `
        <div class="testimoni">
          <img src=${item.image} class="profile-testimoni" />
          <p class="quote">${item.comment}</p>
          <p class="author">- ${item.name}</p>
        </div>
      `
    })
  
    document.getElementById("testimoni").innerHTML = testimoniForHtml
  }
  showTestimoni()
  
  
  function filterTestimoni(rating) {
    let testimoniForHtml = ""
  
    const dataFiltered = dataTestiomoni.filter(data => data.rating === rating)
    console.log(dataFiltered);
  
    if(dataFiltered.length === 0) {
      testimoniForHtml = `<h3>Not Data</h3>`
    } else {
      dataFiltered.forEach(item => {
        testimoniForHtml += `
          <div class="testimoni">
            <img src=${item.image} class="profile-testimoni" />
            <p class="quote">${item.comment}</p>
            <p class="author">- ${item.name}</p>
          </div>
        `
      })
    }
  
    document.getElementById("testimoni").innerHTML = testimoniForHtml
  }