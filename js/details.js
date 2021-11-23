const id = new URLSearchParams(window.location.search).get('id')

const renderDetails = async () => {
  const res = await fetch('http://localhost:3000/posts/' + id)
  const post = await res.json()

  const output = `
    <div class="post">
      <h1>${post.title}</h1>
      <p><small>${post.likes} likes</small></p>
      <p>${post.body}</p>
      <button class="del">Delete</button>
    </div>
  `
  document.querySelector('.details').querySelector('.container').innerHTML = output

  // Delete a post
  const del = document.querySelector('.del')
  del.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/posts/' + id, {
      method: 'DELETE'
    })
    window.location.replace('/index.html')
  })
}

window.addEventListener('DOMContentLoaded', () => renderDetails())