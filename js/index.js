const renderPosts = async (term) => {
  let uri = 'http://localhost:3000/posts?_sort=id&_order=desc'
  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri)
  const posts = await res.json()

  let output = ''
  posts.forEach(post => {
    output += `
      <div class="post">
        <h3>${post.title}</h3>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="/details.html?id=${post.id}">Read More...</a>
      </div>
    `
  })
  document.querySelector('#blogs').querySelector('.container').innerHTML = output
}

// Search
const search = document.querySelector('#search')
search.addEventListener('submit', (e) => {
  e.preventDefault()
  renderPosts(search.term.value.trim())
})

window.addEventListener('DOMContentLoaded', () => renderPosts())