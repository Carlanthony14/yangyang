// script.js

// Authentication Logic
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const fileUploadContainer = document.getElementById('file-upload-container');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

// Toggle between login and signup
showSignup.addEventListener('click', () => {
  loginContainer.classList.add('hidden');
  signupContainer.classList.remove('hidden');
});

showLogin.addEventListener('click', () => {
  signupContainer.classList.add('hidden');
  loginContainer.classList.remove('hidden');
});

// Handle login and signup submission
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Login Successful!');
  loginContainer.classList.add('hidden');
  fileUploadContainer.classList.remove('hidden');
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Sign Up Successful!');
  signupContainer.classList.add('hidden');
  loginContainer.classList.remove('hidden');
});

// File Upload Logic
const fileInput = document.getElementById('file-input');
const browseButton = document.getElementById('browse-button');
const fileList = document.getElementById('file-list');

// Open file dialog on button click
browseButton.addEventListener('click', () => fileInput.click());

// Handle file input change
fileInput.addEventListener('change', (event) => {
  const files = event.target.files;

  for (const file of files) {
    addFileToList(file.name);
  }
});

// Add file to the uploaded list
function addFileToList(fileName) {
  const li = document.createElement('li');
  li.textContent = fileName;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'X';
  removeButton.addEventListener('click', () => li.remove());

  li.appendChild(removeButton);
  fileList.appendChild(li);
}
