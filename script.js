// Check if the user is already registered
const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
  alert("You must register first!");
  window.location.href = "register.html";
} else {
  // Display the registered user's information
  document.getElementById("user-info").innerHTML = `
    <strong>Welcome, ${user.name}!</strong><br>
    Email: ${user.email}<br>
    Citizenship: ${user.citizenship}
  `;

  // Display the citizenship image
  const imgElement = document.createElement("img");
  imgElement.src = user.citizenshipImage;
  imgElement.style.maxWidth = "200px";
  imgElement.style.borderRadius = "8px";
  document.getElementById("user-citizenship-image").appendChild(imgElement);
}

// Handle vote submission
document.getElementById('vote-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the selected candidate
  const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
  
  if (selectedCandidate) {
    const candidate = selectedCandidate.value;

    // Get current vote count from localStorage or initialize to 0
    let votes = JSON.parse(localStorage.getItem('votes')) || { candidate1: 0, candidate2: 0, candidate3: 0 };

    // Increment the vote for the selected candidate
    votes[candidate] += 1;

    // Store the updated vote counts
    localStorage.setItem('votes', JSON.stringify(votes));

    // Mark that the user has voted
    localStorage.setItem('voted', 'true');

    // Redirect to thank you page
    window.location.href = 'thankyou.html';
  } else {
    alert("Please select a candidate to vote!");
  }
});
