const linksSocialMedia = {
  github: 'francisco-das-chagas',
  instagram: 'rocketseat_oficial',
  youtube: 'rocketseat',
  facebook: 'rocketseat',
  twitter: 'rocketseat'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// Incrementar:
// i = i + 1
// i++

// camelCase
// PascalCase
// snake_case

// Pegar e Trazer informações da API

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

// ARROW FUNCTIONS
// function nomedafuncao(argumentos) {
//   codigo
// }
