const profilesContainer = document.getElementsByClassName("profiles-container")[0];


fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(post => {
    for (let profile of post.data) {
      const profileContainer = document.createElement("div");
      profileContainer.setAttribute("class", "profile-container");
      profilesContainer.appendChild(profileContainer);
      const avatar = document.createElement("img");
      avatar.setAttribute("src", profile.avatar);
      profileContainer.appendChild(avatar);
      const h3 = document.createElement("h3");
      h3.textContent = profile.first_name + " " + profile.last_name;
      profileContainer.appendChild(h3);
      const email = document.createElement("p");
      email.textContent = profile.email;
      profileContainer.appendChild(email);
    }
  });