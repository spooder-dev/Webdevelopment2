// Get references to DOM elements
const jokeBox = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// A list of jokes (you can add as many as you like)
const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts!",
  "I told my computer I needed a break, and it said: ‘No problem — I’ll go to sleep.’",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why do bees have sticky hair? Because they use honeycombs!",
  "What do you call fake spaghetti? An impasta!",
  "I only know 25 letters of the alphabet. I don’t know y.",
  "Why did the math book look sad? Because it had too many problems.",
  "What do you call a belt made of watches? A waist of time.",
  "Why can’t your nose be 12 inches long? Because then it would be a foot!"
];

// Function to show a random joke
function showRandomJoke() {
  // Pick a random index
  const randomIndex = Math.floor(Math.random() * jokes.length);

  // Display the joke
  jokeBox.textContent = jokes[randomIndex];
}

// Add a click event to the button
jokeBtn.addEventListener('click', showRandomJoke);
