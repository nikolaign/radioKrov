window.onload = () => {
 const scheduleBar = document.createElement("div");
 scheduleBar.id = "schedule-bar";
 const textSpan = document.createElement("span");
 textSpan.textContent = "";
 scheduleBar.appendChild(textSpan);
 document.body.appendChild(scheduleBar);
 // Function to update text content
 function updateText(newText) {
  textSpan.textContent = newText;
 }

  
 updateText("Krovdjendan // 26.02. - 03.03. // dc krov"); // EDIT THIS //


  
 // Function to show and hide the text animation:
 function showMovingText() {
  const scheduleBar = document.getElementById("schedule-bar");
  scheduleBar.style.display = "block";
  scheduleBar.style.animation = "move-words 15s linear";
  setTimeout(() => {
   scheduleBar.style.display = "none";
   scheduleBar.style.animation = "";
  }, 15000);
 }
 // Show the text initially:
 showMovingText();
 // Repeat every 5 minutes:
 setInterval(showMovingText, 490000);
};
// Create the header element
const header = document.createElement('div');
header.classList.add('header');
// Insert the header at the top of the body
document.body.insertBefore(header, document.body.firstChild);
// Show the header
header.style.display = 'block';
// Create the footer element
const footer = document.createElement('div');
footer.classList.add('footer');
// Append the footer to the body regardless of screen size
document.body.appendChild(footer);
// Create the text element only for desktop
if (window.innerWidth > 767) {
  const text = document.createTextNode('[next playing]');
  footer.appendChild(text);
  // Add line breaks and links as before (adjust content as needed)
  footer.appendChild(document.createElement("br"));


  footer.appendChild(document.createTextNode("||"));  // EDIT THIS //

  
  document.body.appendChild(footer);
}
// Show the footer
footer.style.display = 'block';
footer.style.cssText += "::first-line { font-size: 1.2em; }";
// Create the chat button
const chatButton = document.createElement('button22');
chatButton.textContent = '[chat]';
chatButton.style.position = 'fixed';
chatButton.style.top = '35px'; // Adjust for spacing from top
chatButton.style.right = '6px'; // Adjust for spacing from right
chatButton.style.zIndex = 1; // Ensure it stays on top
// Create the iframe element
const chatIframe = document.createElement('iframe');
chatIframe.src = 'https://organizations.minnit.chat/227787082142131/c/Main?embed&nickname=';
chatIframe.style.border = '0';
chatIframe.style.width = '350px'; // Adjust as needed
chatIframe.style.height = '450px'; // Adjust as needed
chatIframe.style.position = 'fixed';
chatIframe.style.top = '70px'; // Position below header
chatIframe.style.right = '0';
chatIframe.style.margin = '10px'; // Adjust spacing
chatIframe.style.display = 'none'; // Hide initially
chatIframe.style.zIndex = 9999;
// Add click event listener to the button
chatButton.addEventListener('click', () => {
  // Toggle the iframe's display property instead of visibility
  chatIframe.style.display = chatIframe.style.display === 'none' ? 'block' : 'none';
});
// Add the button and iframe to the body
document.body.appendChild(chatButton);
document.body.appendChild(chatIframe);
var today = new Date();
// Regular days just use these emoji
var lastEmojiCount = 0;
var clearEmojiTimeout; // Declare globally
var possibleEmoji = [
   '🇦🇴','🇧🇫','🇧🇮','🇧🇯','🇧🇼','🇨🇩','🇨🇫','🇨🇬','🇨🇮','🇨🇲','🇨🇻','🇩🇯','🇩🇿','🇪🇬','🇪🇭','🇪🇷','🇪🇹','🇬🇦','🇬🇭','🇬🇲',
'🇬🇳','🇬🇶','🇬🇼','🇰🇪','🇰🇲','🇱🇷','🇱🇸','🇱🇾','🇲🇦','🇲🇬','🇲🇱','🇲🇷','🇲🇺','🇲🇼','🇲🇿','🇳🇦','🇳🇪','🇳🇬','🇷🇼','🇸🇨','🇸🇩',
'🇸🇱','🇸🇳','🇸🇴','🇸🇸','🇸🇿','🇹🇩','🇹🇬','🇹🇳','🇹🇿','🇺🇬','🇿🇦','🇿🇲','🇿🇼','🇦🇬','🇦🇮','🇦🇷','🇦🇼','🇧🇧','🇧🇱','🇧🇲','🇧🇴',
'🇧🇶','🇧🇷','🇧🇸','🇧🇿','🇨🇦','🇨🇱','🇨🇴','🇨🇷','🇨🇺','🇨🇼','🇩🇲','🇩🇴','🇪🇨','🇫🇰','🇬🇩','🇬🇫','🇬🇵','🇬🇹','🇬🇾','🇭🇳','🇭🇹',
'🇯🇲','🇰🇳','🇰🇾','🇱🇨','🇲🇫','🇲🇶','🇲🇸','🇲🇽','🇳🇮','🇵🇦','🇵🇪','🇵🇲','🇵🇷','🇵🇾','🇸🇷','🇸🇻','🇸🇽','🇹🇨','🇹🇹','🇺🇸','🇺🇾','🇻🇪',
'🇻🇬','🇻🇮','🇦🇪','🇦🇫','🇦🇿','🇧🇩','🇧🇭','🇧🇳','🇧🇹','🇨🇳','🇭🇰','🇮🇩','🇮🇱','🇮🇳','🇮🇶','🇮🇷','🇯🇴','🇯🇵','🇰🇬','🇰🇭','🇰🇵','🇰🇷',
'🇰🇼','🇰🇿','🇱🇦','🇱🇧','🇱🇰','🇲🇲','🇲🇳','🇲🇴','🇲🇻','🇲🇾','🇴🇲','🇵🇭','🇵🇰','🇵🇸','🇶🇦','🇷🇺','🇸🇦','🇸🇬','🇸🇾','🇹🇭','🇹🇯','🇹🇱',
'🇹🇲','🇹🇷','🇹🇼','🇺🇿','🇻🇳','🇾🇪','🇦🇩','🇦🇱','🇦🇲','🇦🇹','🇧🇦','🇧🇪','🇧🇬','🇧🇾','🇨🇭','🇨🇾','🇨🇿','🇩🇪','🇩🇰','🇪🇦','🇪🇪','🇪🇸','🇪🇺',
'🇫🇮','🇫🇷','🇬🇧','🇬🇪','🇬🇬','🇬🇮','🇬🇷','🇭🇷','🇭🇺','🇮🇪','🇮🇲','🇮🇸','🇮🇹','🇯🇪','🇱🇮','🇱🇹','🇱🇺','🇱🇻','🇲🇨','🇲🇩','🇲🇪','🇲🇰','🇲🇹',
'🇳🇱','🇳🇴','🇵🇱','🇵🇹','🇷🇴','🇷🇸','🇷🇺','🇸🇪','🇸🇮','🇸🇰','🇸🇲','🇺🇦','🇻🇦','🇽🇰','🏴󠁧󠁢󠁥󠁮󠁧󠁿','🏴󠁧󠁢󠁳󠁣󠁴󠁿','🏴󠁧󠁢󠁷󠁬󠁳󠁿','🇦🇨','🇦🇶','🇦🇸','🇦🇺','🇦🇽','🇧🇻',
'🇨🇨','🇨🇰','🇫🇷','🇨🇽','🇩🇬','🇫🇯','🇫🇲','🇬🇱','🇬🇸','🇬🇺','🇭🇲','🇮🇨','🇮🇴','🇰🇮','🇲🇭','🇲🇵','🇳🇨','🇳🇫','🇳🇷','🇳🇺','🇳🇿','🇵🇫','🇵🇬',
'🇵🇳','🇵🇼','🇷🇪','🇸🇧','🇸🇯','🇸🇹','🇹🇦','🇹🇰','🇹🇴','🇹🇻','🇺🇲','🇻🇨','🇻🇺','🇼🇫','🇼🇸','🇾🇹'
  ];
// Special emoji if close to Halloween
if (today.getMonth() === 9 && [31, 30, 29, 28].indexOf(today.getDate()) !== -1) {
 possibleEmoji = [
  '👻','🎃','🧟‍♀️'
 ];
}
// Special emoji if close to Christmas
if (today.getMonth() === 11 && [21, 22, 23, 24, 25, 26].indexOf(today.getDate()) !== -1) {
 possibleEmoji = [
  '❄️','🎅','🎁'
 ];
}
document.body.addEventListener('click', function (event) {
 /* 
  * generate random number that falls between 0 and the total number 
  * of emoji possibilities
 */
 var randomNumber = Math.round(Math.random() * possibleEmoji.length);
 var span = document.createElement('span'); 
 span.textContent = possibleEmoji[randomNumber];
 span.className= 'emoji click-emoji';
 /* 
  * event.clientX is where the mouse was horizontally at the time of 
  * the click. This way we can insert the emoji in the exact location 
  * the user clicked.
 */
 span.style.left = event.clientX + 'px';
 // event.clientY - same idea as clientX, but vertical position.
 span.style.top = event.clientY + 'px'; 
 /* Of course these values are useless if we don’t set the emoji's
  * position to something outside the normal flow of content. */
 span.style.position = 'fixed';
 document.body.appendChild(span); 
  lastEmojiCount++;
  // Set a timeout to clear all emojis after 20 seconds (adjust as needed)
  clearTimeout(clearEmojiTimeout); // Clear any existing timeout
  // Set a new timeout to clear emojis
  clearEmojiTimeout = setTimeout(function() {
    var emojis = document.querySelectorAll('.click-emoji');
    emojis.forEach(function(emoji) {
      // Trigger the fade-out animation
      emoji.style.opacity = 0;
      // Set a timeout to remove the emoji after it has faded out
      setTimeout(function() {
        emoji.remove();
      }, 900); // Adjust this timeout based on your transition duration
    });
    lastEmojiCount = 0;
  }, 9999); // Delay for 9.9 seconds
});
/*link on player title*/
document.addEventListener('click', (event) => {
  const titleElement = event.target.closest('.card-title');
  if (titleElement) {
    window.location.href = 'https://radiotalas.dckrov.rs'; // Replace with your URL
  }
});
/*javascript code for these clickable images*/
const clickableImage = document.createElement("img");
clickableImage.src = "https://i.ibb.co/2FMxGSj/IMG-4627.png";
clickableImage.alt = "Clickable Image";
clickableImage.classList.add("clickable-image");
clickableImage.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage.style.zIndex = 0;
const clickableImage2 = document.createElement("img");
clickableImage2.src = "https://i.ibb.co/59LkyRV/VAC-logotip-negative-transparent-02.png";
clickableImage2.alt = "Clickable Image 2";
clickableImage2.classList.add("clickable-image");
clickableImage2.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage2.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage2.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage2.style.zIndex = 0;
const clickableImage3 = document.createElement("img");
clickableImage3.src = "https://i.ibb.co/y4wD89c/imageedit-27-3297434636.png";
clickableImage3.alt = "Clickable Image 3";
clickableImage3.classList.add("clickable-image");
clickableImage3.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage3.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage3.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage3.style.zIndex = 0;
const clickableImage4 = document.createElement("img");
clickableImage4.src = "https://i.ibb.co/bdvXYGD/imageedit-20-3487657905.png";
clickableImage4.alt = "Clickable Image 4";
clickableImage4.classList.add("clickable-image");
clickableImage4.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage4.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage4.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage4.style.zIndex = 0;
const clickableImage44 = document.createElement("img");
clickableImage44.src = "https://i.ibb.co/N3tVPQD/imageedit-18-5515847896.png";
clickableImage44.alt = "Clickable Image 44";
clickableImage44.classList.add("clickable-image");
clickableImage44.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage44.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage44.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage44.style.zIndex = 0;
const clickableImage45 = document.createElement("img");
clickableImage45.src = "https://i.ibb.co/2kTkHnQ/imageedit-30-6983434446.png";
clickableImage45.alt = "Clickable Image 45";
clickableImage45.classList.add("clickable-image");
clickableImage45.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage45.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage45.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage45.style.zIndex = 0;
const clickableImage5 = document.createElement("img");
clickableImage5.src = "https://i.ibb.co/SBvsPjx/Vizantrop-removebg-preview.png";
clickableImage5.alt = "Clickable Image 5";
clickableImage5.classList.add("clickable-image");
clickableImage5.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage5.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage5.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage5.style.zIndex = 0;
const clickableImage6 = document.createElement("img");
clickableImage6.src = "https://i.ibb.co/W2W96sJ/imageedit-2-4872921866.png";
clickableImage6.alt = "Clickable Image 6";
clickableImage6.classList.add("clickable-image");
clickableImage6.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage6.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage6.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage6.style.zIndex = 0;
const clickableImage7 = document.createElement("img");
clickableImage7.src = "https://i.ibb.co/fnShSF2/photo-2024-01-14-16-01-19-removebg-preview.png";
clickableImage7.alt = "Clickable Image 7";
clickableImage7.classList.add("clickable-image");
clickableImage7.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage7.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage7.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage7.style.zIndex = 0;
const clickableImage8 = document.createElement("img");
clickableImage8.src = "https://i.ibb.co/cb9mRVW/cirilica-beli.png";
clickableImage8.alt = "Clickable Image 8";
clickableImage8.classList.add("clickable-image");
clickableImage8.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage8.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage8.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage8.style.zIndex = 0;
const clickableImage99 = document.createElement("img");
clickableImage99.src = "https://i.ibb.co/DPFgfkp/blankpng.png";
clickableImage99.alt = "Clickable Image 99";
clickableImage99.classList.add("clickable-image");
clickableImage99.style.width = "40px"; /* Set a minimum width in pixels */
clickableImage99.style.minWidth = "3vw"; /* Ensure a minimum width relative to viewport */
clickableImage99.style.objectFit = "contain"; /* Maintain aspect ratio */
clickableImage99.style.zIndex = 0;
// Position the image 1 within the footer
clickableImage.style.position = "fixed";
clickableImage.style.left = "0%"; /* Center the image horizontally */
clickableImage.style.transform = "translateX(25%)"; /* Adjust for centering */
clickableImage.style.bottom = "0.1rem"; /* Match the header's bottom position */
// Position the image 2 within the footer
clickableImage2.style.position = "fixed";
clickableImage2.style.left = "0%"; /* Center the image horizontally */
clickableImage2.style.transform = "translateX(155%)"; /* Adjust for centering */
clickableImage2.style.bottom = "0.9rem"; /* Match the header's bottom position */
// Position the image 3 within the header schedule
clickableImage3.style.position = "fixed";
clickableImage3.style.left = "50%"; /* Center the image horizontally */
clickableImage3.style.transform = "translateX(-118%)"; /* Adjust for centering */
clickableImage3.style.top = "1.05rem"; /* Match the header's bottom position */
// Position the image 4 within the header archive
clickableImage4.style.position = "fixed";
clickableImage4.style.left = "50%"; /* Center the image horizontally */
clickableImage4.style.transform = "translateX(30%)"; /* Adjust for centering */
clickableImage4.style.top = "1.05rem"; /* Match the header's bottom position */
// Position the image 44 within the header podcasts
clickableImage44.style.position = "fixed";
clickableImage44.style.left = "50%"; /* Center the image horizontally */
clickableImage44.style.transform = "translateX(-275%)"; /* Adjust for centering */
clickableImage44.style.top = "1.15rem"; /* Match the header's bottom position */
// Position the image 45 within the header podcasts
clickableImage45.style.position = "fixed";
clickableImage45.style.left = "50%"; /* Center the image horizontally */
clickableImage45.style.transform = "translateX(180%)"; /* Adjust for centering */
clickableImage45.style.top = "1.05rem"; /* Match the header's bottom position */
// Position the image 5 within the footer
clickableImage5.style.position = "fixed";
clickableImage5.style.left = "0%"; /* Center the image horizontally */
clickableImage5.style.transform = "translateX(295%)"; /* Adjust for centering */
clickableImage5.style.bottom = "1.4rem"; /* Match the header's bottom position */
// Position the image 6 within the footer
clickableImage6.style.position = "fixed";
clickableImage6.style.left = "0%"; /* Center the image horizontally */
clickableImage6.style.transform = "translateX(575%)"; /* Adjust for centering */
clickableImage6.style.bottom = "0.2rem"; /* Match the header's bottom position */
// Position the image 7 within the footer
clickableImage7.style.position = "fixed";
clickableImage7.style.left = "0%"; /* Center the image horizontally */
clickableImage7.style.transform = "translateX(705%)"; /* Adjust for centering */
clickableImage7.style.bottom = "0.35rem"; /* Match the header's bottom position */
// Position the image 8 within the footer
clickableImage8.style.position = "fixed";
clickableImage8.style.left = "0%"; /* Center the image horizontally */
clickableImage8.style.transform = "translateX(440%)"; /* Adjust for centering */
clickableImage8.style.bottom = "0.85rem"; /* Match the header's bottom position */
// Position the image 99 within the footer
clickableImage99.style.position = "fixed";
clickableImage99.style.right = "0%"; /* Center the image horizontally */
clickableImage99.style.bottom = "0.85rem"; /* Match the header's bottom position */
//add zoom inout effect
const isDesktop = window.matchMedia("(min-width: 768px)").matches;
if (isDesktop) {
  // Apply hover zoom effect only for desktop
  clickableImage2.addEventListener("mouseout", () => {
    clickableImage2.style.transform = "translateX(155%)";
  });
  clickableImage2.addEventListener("mouseover", () => {
    clickableImage2.style.transform = "translateX(155%) scale(1.3)";
  });
  clickableImage.addEventListener("mouseout", () => {
    clickableImage.style.transform = "translateX(25%)";
  });
  clickableImage.addEventListener("mouseover", () => {
    clickableImage.style.transform = "translateX(25%) scale(1.3)";
  });
  clickableImage3.addEventListener("mouseout", () => {
    clickableImage3.style.transform = "translateX(-118%)";
  });
  clickableImage3.addEventListener("mouseover", () => {
    clickableImage3.style.transform = "translateX(-118%) scale(1.4)";
  });
  clickableImage4.addEventListener("mouseout", () => {
    clickableImage4.style.transform = "translateX(30%)";
  });
  clickableImage4.addEventListener("mouseover", () => {
    clickableImage4.style.transform = "translateX(30%) scale(1.4)";
  });
  clickableImage44.addEventListener("mouseout", () => {
    clickableImage44.style.transform = "translateX(-275%)";
  });
  clickableImage44.addEventListener("mouseover", () => {
    clickableImage44.style.transform = "translateX(-275%) scale(1.4)";
  });
  clickableImage45.addEventListener("mouseout", () => {
    clickableImage45.style.transform = "translateX(180%)";
  });
  clickableImage45.addEventListener("mouseover", () => {
    clickableImage45.style.transform = "translateX(180%) scale(1.4)";
  });
  clickableImage5.addEventListener("mouseout", () => {
    clickableImage5.style.transform = "translateX(295%)";
  });
  clickableImage5.addEventListener("mouseover", () => {
    clickableImage5.style.transform = "translateX(295%) scale(1.3)";
  });
  clickableImage6.addEventListener("mouseout", () => {
    clickableImage6.style.transform = "translateX(575%)";
  });
  clickableImage6.addEventListener("mouseover", () => {
    clickableImage6.style.transform = "translateX(575%) scale(1.3)";
  });
  clickableImage7.addEventListener("mouseout", () => {
    clickableImage7.style.transform = "translateX(705%)";
  });
  clickableImage7.addEventListener("mouseover", () => {
    clickableImage7.style.transform = "translateX(705%) scale(1.3)";
  });
  clickableImage8.addEventListener("mouseout", () => {
    clickableImage8.style.transform = "translateX(440%)";
  });
  clickableImage8.addEventListener("mouseover", () => {
    clickableImage8.style.transform = "translateX(440%) scale(1.3)";
  });
}
// Create the hidden link button1
const hiddenLink = document.createElement("a");
hiddenLink.href = "https://dckrov.rs"; /* Your target URL */
hiddenLink.target = "_blank";
hiddenLink.style.display = "none"; /* Hide the button */
// Create the hidden link button2
const hiddenLink2 = document.createElement("a");
hiddenLink2.href = "http://vac.rs"; /* Your target URL */
hiddenLink2.target = "_blank";
hiddenLink2.style.display = "none"; /* Hide the button */
// Create the hidden link button3
const hiddenLink3 = document.createElement("a");
hiddenLink3.href = "https://radiotalas.dckrov.rs/public/dckrov/schedule"; /* Your target URL */
hiddenLink3.target = "_blank";
hiddenLink3.style.display = "none"; /* Hide the button */
// Create the hidden link button4
const hiddenLink4 = document.createElement("a");
hiddenLink4.href = "https://audio.com/krov"; /* Your target URL */
hiddenLink4.target = "_blank";
hiddenLink4.style.display = "none"; /* Hide the button */
// Create the hidden link button44
const hiddenLink44 = document.createElement("a");
hiddenLink44.href = "https://radiotalas.dckrov.rs/public/dckrov/podcasts"; /* Your target URL */
hiddenLink44.target = "_blank";
hiddenLink44.style.display = "none"; /* Hide the button */
// Create the hidden link button45
const hiddenLink45 = document.createElement("a");
hiddenLink45.href = "https://dckrov.rs/c/program/15"; /* Your target URL */
hiddenLink45.target = "_blank";
hiddenLink45.style.display = "none"; /* Hide the button */
// Create the hidden link button5
const hiddenLink5 = document.createElement("a");
hiddenLink5.href = "https://vizantrop.org"; /* Your target URL */
hiddenLink5.target = "_blank";
hiddenLink5.style.display = "none"; /* Hide the button */
// Create the hidden link button6
const hiddenLink6 = document.createElement("a");
hiddenLink6.href = "https://dmz.rs"; /* Your target URL */
hiddenLink6.target = "_blank";
hiddenLink6.style.display = "none"; /* Hide the button */
// Create the hidden link button7
const hiddenLink7 = document.createElement("a");
hiddenLink7.href = "https://www.facebook.com/ced.beograd?mibextid=kFxxJD"; /* Your target URL */
hiddenLink7.target = "_blank";
hiddenLink7.style.display = "none"; /* Hide the button */
// Create the hidden link button8
const hiddenLink8 = document.createElement("a");
hiddenLink8.href = "https://www.facebook.com/trigrosa/"; /* Your target URL */
hiddenLink8.target = "_blank";
hiddenLink8.style.display = "none"; /* Hide the button */
// Create an array to hold the target URLs
const targetURLs = [
  "https://www.fallingfalling.com",
  "https://www.psychedelicio.us",
  "https://psilly.com/experiments/polygons.html",
  "https://hotdoom.com/",
  // Add more URLs as needed
];
// Create the hidden link element
const hiddenLink99 = document.createElement("a");
hiddenLink99.target = "_blank";
hiddenLink99.style.display = "none";
// Function to set a random link and trigger redirection
const setRandomLink = () => {
  const randomIndex = Math.floor(Math.random() * targetURLs.length);
  hiddenLink99.href = targetURLs[randomIndex];
  hiddenLink99.click();
};
// Attach the event listener to the clickable image
clickableImage99.addEventListener("click", setRandomLink);
//Add floating effect icons
let originalTransform = clickableImage2.style.transform;
let floatingTimer;
const floatInterval = 34700; // 34.7 seconds of inactivity before floating
function resetFloatingTimer() {
  clearTimeout(floatingTimer);
  floatingTimer = setTimeout(() => {
    // Add floating effect here
    const imageWidth = 40; // Adjust based on actual image width
    const imageHeight = 40; // Adjust based on actual image height
    // Calculate maximum X and Y positions to keep the image within window boundaries
    const maxX = window.innerWidth - imageWidth;
    const maxY = window.innerHeight - imageHeight;
    // Calculate random X and Y positions within window boundaries
    const randomX = Math.min(Math.random() * maxX, maxX);
    const randomY = Math.min(Math.random() * -600, maxY);
    clickableImage2.style.transition = "transform 34.2s ease-in-out";
    clickableImage2.style.transform = `translate(${randomX}px, ${randomY}px)`;
    // Reset the timer for continuous floating
    resetFloatingTimer();
  }, floatInterval);
}
// Attach event listeners for user activity
document.addEventListener("mousemove", (event) => {
  // Check if the mouse is over the image
  const isMouseOver = event.target === clickableImage2 || clickableImage2.contains(event.target);
  // Reset the icon's position to its original location
  clickableImage2.style.transition = "transform 1.1s ease-in-out";
  clickableImage2.style.transform = originalTransform;
  // Restart the timer for continuous floating only if the mouse is not over the image
  if (!isMouseOver) {
    resetFloatingTimer();
  }
});
document.addEventListener("click", () => {
  // Reset the icon's position to its original location
  clickableImage2.style.transition = "transform 1.1s ease-in-out";
  clickableImage2.style.transform = originalTransform;
  // Restart the timer for continuous floating
  resetFloatingTimer();
});
let originalTransform1 = clickableImage.style.transform;
let floatingTimer1;
const floatInterval1 = 34000; // 34 seconds of inactivity before floating
function resetFloatingTimer1() {
  clearTimeout(floatingTimer1);
  floatingTimer1 = setTimeout(() => {
    // Add floating effect here
    const imageWidth = 40; // Adjust based on actual image width
    const imageHeight = 40; // Adjust based on actual image height
    // Calculate maximum X and Y positions to keep the image within window boundaries
    const maxX = window.innerWidth - imageWidth;
    const maxY = window.innerHeight - imageHeight;
    // Calculate random X and Y positions within window boundaries
    const randomX = Math.min(Math.random() * maxX, maxX);
    const randomY = Math.min(Math.random() * -600, maxY);
    clickableImage.style.transition = "transform 33.5s ease-in-out";
    clickableImage.style.transform = `translate(${randomX}px, ${randomY}px)`;
    // Reset the timer for continuous floating
    resetFloatingTimer1();
  }, floatInterval1);
}
// Attach event listeners for user activity
document.addEventListener("mousemove", (event) => {
  // Check if the mouse is over the image
  const isMouseOver = event.target === clickableImage || clickableImage.contains(event.target);
  // Reset the icon's position to its original location
  clickableImage.style.transition = "transform 1.6s ease-in-out";
  clickableImage.style.transform = originalTransform1;
  // Restart the timer for continuous floating only if the mouse is not over the image
  if (!isMouseOver) {
    resetFloatingTimer1();
  }
});
document.addEventListener("click", () => {
  // Reset the icon's position to its original location
  clickableImage.style.transition = "transform 1.6s ease-in-out";
  clickableImage.style.transform = originalTransform1;
  // Restart the timer for continuous floating
  resetFloatingTimer1();
});
let originalTransform2 = clickableImage5.style.transform;
let floatingTimer2;
const floatInterval2 = 34750; // 34.75 seconds of inactivity before floating
function resetFloatingTimer2() {
  clearTimeout(floatingTimer2);
  floatingTimer2 = setTimeout(() => {
    // Add floating effect here
    const imageWidth = 40; // Adjust based on actual image width
    const imageHeight = 40; // Adjust based on actual image height
    // Calculate maximum X and Y positions to keep the image within window boundaries
    const maxX = window.innerWidth - imageWidth;
    const maxY = window.innerHeight - imageHeight;
    // Calculate random X and Y positions within window boundaries
    const randomX = Math.min(Math.random() * maxX, maxX);
    const randomY = Math.min(Math.random() * -600, maxY);
    clickableImage5.style.transition = "transform 34.2s ease-in-out";
    clickableImage5.style.transform = `translate(${randomX}px, ${randomY}px)`;
    // Reset the timer for continuous floating
    resetFloatingTimer2();
  }, floatInterval2);
}
// Attach event listeners for user activity
document.addEventListener("mousemove", (event) => {
  // Check if the mouse is over the image
  const isMouseOver = event.target === clickableImage5 || clickableImage5.contains(event.target);
  // Reset the icon's position to its original location
  clickableImage5.style.transition = "transform 0.5s ease-in-out";
  clickableImage5.style.transform = originalTransform2;
  // Restart the timer for continuous floating only if the mouse is not over the image
  if (!isMouseOver) {
    resetFloatingTimer2();
  }
});
document.addEventListener("click", () => {
    // Reset the icon's position to its original location
  clickableImage5.style.transition = "transform 0.5s ease-in-out";
  clickableImage5.style.transform = originalTransform2;
  // Restart the timer for continuous floating
  resetFloatingTimer2();
});
let originalTransform3 = clickableImage6.style.transform;
let floatingTimer3;
const floatInterval3 = 34500; // 34.5 seconds of inactivity before floating
function resetFloatingTimer3() {
  clearTimeout(floatingTimer3);
  floatingTimer3 = setTimeout(() => {
    // Add floating effect here
    const imageWidth = 40; // Adjust based on actual image width
    const imageHeight = 40; // Adjust based on actual image height
    // Calculate maximum X and Y positions to keep the image within window boundaries
    const maxX = window.innerWidth - imageWidth;
    const maxY = window.innerHeight - imageHeight;
    // Calculate random X and Y positions within window boundaries
    const randomX = Math.min(Math.random() * maxX, maxX);
    const randomY = Math.min(Math.random() * -600, maxY);
    clickableImage6.style.transition = "transform 34s ease-in-out";
    clickableImage6.style.transform = `translate(${randomX}px, ${randomY}px)`;
    // Reset the timer for continuous floating
    resetFloatingTimer3();
  }, floatInterval3);
} // Attach event listeners for user activity
document.addEventListener("mousemove", (event) => {
  // Check if the mouse is over the image
  const isMouseOver = event.target === clickableImage6 || clickableImage6.contains(event.target);
  // Reset the icon's position to its original location
  clickableImage6.style.transition = "transform 1.3s ease-in-out";
  clickableImage6.style.transform = originalTransform3;
  // Restart the timer for continuous floating only if the mouse is not over the image
  if (!isMouseOver) {
    resetFloatingTimer3();
  }
});
document.addEventListener("click", () => {
    // Reset the icon's position to its original location
  clickableImage6.style.transition = "transform 1.3s ease-in-out";
  clickableImage6.style.transform = originalTransform3;
  // Restart the timer for continuous floating
  resetFloatingTimer3();
});
let originalTransform4 = clickableImage7.style.transform;
let floatingTimer4;
const floatInterval4 = 34800; // 34.8 seconds of inactivity before floating
function resetFloatingTimer4() {
  clearTimeout(floatingTimer4);
  floatingTimer4 = setTimeout(() => {
    // Add floating effect here
    const imageWidth = 40; // Adjust based on actual image width
    const imageHeight = 40; // Adjust based on actual image height
    // Calculate maximum X and Y positions to keep the image within window boundaries
    const maxX = window.innerWidth - imageWidth;
    const maxY = window.innerHeight - imageHeight;
    // Calculate random X and Y positions within window boundaries
    const randomX = Math.min(Math.random() * maxX, maxX);
    const randomY = Math.min(Math.random() * -600, maxY);
    clickableImage7.style.transition = "transform 34.3s ease-in-out";
    clickableImage7.style.transform = `translate(${randomX}px, ${randomY}px)`;
    // Reset the timer for continuous floating
    resetFloatingTimer4();
  }, floatInterval4);
} // Attach event listeners for user activity
document.addEventListener("mousemove", (event) => {
  // Check if the mouse is over the image
  const isMouseOver = event.target === clickableImage7 || clickableImage7.contains(event.target);
  // Reset the icon's position to its original location
  clickableImage7.style.transition = "transform 1.1s ease-in-out";
  clickableImage7.style.transform = originalTransform4;
  // Restart the timer for continuous floating only if the mouse is not over the image
  if (!isMouseOver) {
    resetFloatingTimer4();
  }
});
document.addEventListener("click", () => {
    // Reset the icon's position to its original location
  clickableImage7.style.transition = "transform 1.1s ease-in-out";
  clickableImage7.style.transform = originalTransform4;
  // Restart the timer for continuous floating
  resetFloatingTimer4();
});
let originalTransform5 = clickableImage8.style.transform;
let floatingTimer5;
const floatInterval5 =34900; // 34.9 seconds of inactivity before floating
function resetFloatingTimer5() {
  clearTimeout(floatingTimer5);
  floatingTimer5 = setTimeout(() => {
    // Add floating effect here
    const imageWidth = 40; // Adjust based on actual image width
    const imageHeight = 40; // Adjust based on actual image height
    // Calculate maximum X and Y positions to keep the image within window boundaries
    const maxX = window.innerWidth - imageWidth;
    const maxY = window.innerHeight - imageHeight;
    // Calculate random X and Y positions within window boundaries
    const randomX = Math.min(Math.random() * maxX, maxX);
    const randomY = Math.min(Math.random() * -600, maxY);
    clickableImage8.style.transition = "transform 34.4s ease-in-out";
    clickableImage8.style.transform = `translate(${randomX}px, ${randomY}px)`;
    // Reset the timer for continuous floating
    resetFloatingTimer5();
  }, floatInterval5);
} // Attach event listeners for user activity
document.addEventListener("mousemove", (event) => {
  // Check if the mouse is over the image
  const isMouseOver = event.target === clickableImage8 || clickableImage8.contains(event.target);
  // Reset the icon's position to its original location
  clickableImage8.style.transition = "transform 0.8s ease-in-out";
  clickableImage8.style.transform = originalTransform5;
  // Restart the timer for continuous floating only if the mouse is not over the image
  if (!isMouseOver) {
    resetFloatingTimer5();
  }
});
document.addEventListener("click", () => {
    // Reset the icon's position to its original location
  clickableImage8.style.transition = "transform 0.8s ease-in-out";
  clickableImage8.style.transform = originalTransform5;
  // Restart the timer for continuous floating
  resetFloatingTimer5();
});
// Append both elements to the body image 1
document.body.appendChild(hiddenLink);
document.body.appendChild(clickableImage);
// Append both elements to the body image 2
document.body.appendChild(hiddenLink2);
document.body.appendChild(clickableImage2);
// Append both elements to the body image 3
document.body.appendChild(hiddenLink3);
document.body.appendChild(clickableImage3);
// Append both elements to the body image 4
document.body.appendChild(hiddenLink4);
document.body.appendChild(clickableImage4);
// Append both elements to the body image 44
document.body.appendChild(hiddenLink44);
document.body.appendChild(clickableImage44);
// Append both elements to the body image 45
document.body.appendChild(hiddenLink45);
document.body.appendChild(clickableImage45);
// Append both elements to the body image 5
document.body.appendChild(hiddenLink5);
document.body.appendChild(clickableImage5);
// Append both elements to the body image 6
document.body.appendChild(hiddenLink6);
document.body.appendChild(clickableImage6);
// Append both elements to the body image 7
document.body.appendChild(hiddenLink7);
document.body.appendChild(clickableImage7);
// Append both elements to the body image 8
document.body.appendChild(hiddenLink8);
document.body.appendChild(clickableImage8);
// Append both elements to the body image 99
document.body.appendChild(hiddenLink99);
document.body.appendChild(clickableImage99);

// Trigger the link click when the image 1 is clicked
clickableImage.addEventListener("click", () => {
    hiddenLink.click();
});
// Trigger the link click when the image 2 is clicked
clickableImage2.addEventListener("click", () => {
    hiddenLink2.click();
});
// Trigger the link click when the image 3 is clicked
clickableImage3.addEventListener("click", () => {
    hiddenLink3.click();
});
// Trigger the link click when the image 4 is clicked
clickableImage4.addEventListener("click", () => {
    hiddenLink4.click();
});
// Trigger the link click when the image 44 is clicked
clickableImage44.addEventListener("click", () => {
    hiddenLink44.click();
});
// Trigger the link click when the image 45 is clicked
clickableImage45.addEventListener("click", () => {
    hiddenLink45.click();
});
// Trigger the link click when the image 5 is clicked
clickableImage5.addEventListener("click", () => {
    hiddenLink5.click();
});
// Trigger the link click when the image 6 is clicked
clickableImage6.addEventListener("click", () => {
    hiddenLink6.click();
});
// Trigger the link click when the image 7 is clicked
clickableImage7.addEventListener("click", () => {
    hiddenLink7.click();
});
// Trigger the link click when the image 8 is clicked
clickableImage8.addEventListener("click", () => {
    hiddenLink8.click();
});
// Add text above images header
const imageContainer = document.createElement("div");
imageContainer.classList.add("image-container1");
const textElement = document.createElement("span");
textElement.textContent = "schedule";
textElement.classList.add("image-text1");
textElement.style.position = "fixed";
textElement.style.left = "50%"; /* Center the image horizontally */
textElement.style.transform = "translateX(-100%)"; /* Adjust for centering */
textElement.style.top = "5rem"; /* Match the header's bottom position */
textElement.style.textShadow = '0px 3px 6px rgba(0, 0, 0, 0.8)';
textElement.style.zIndex = 0;
imageContainer.appendChild(clickableImage3);
imageContainer.appendChild(textElement);
document.body.appendChild(imageContainer);
const imageContainer2 = document.createElement("div");
imageContainer2.classList.add("image-container1");
const textElement2 = document.createElement("span");
textElement2.textContent = "archives"; // Replace with your desired text
textElement2.classList.add("image-text1");
textElement2.style.position = "fixed";
textElement2.style.left = "50%";
textElement2.style.transform = "translateX(15%)";
textElement2.style.top = "5rem";
textElement2.style.textShadow = '0px 3px 6px rgba(0, 0, 0, 0.8)';
textElement2.style.zIndex =0;
imageContainer2.appendChild(clickableImage4);
imageContainer2.appendChild(textElement2);
document.body.appendChild(imageContainer2);
const imageContainer3 = document.createElement("div");
imageContainer3.classList.add("image-container1");
const textElement3 = document.createElement("span");
textElement3.textContent = "podcasts"; // Replace with your desired text
textElement3.classList.add("image-text1");
textElement3.style.position = "fixed";
textElement3.style.left = "50%";
textElement3.style.transform = "translateX(-215%)";
textElement3.style.top = "5rem";
textElement3.style.textShadow = '0px 3px 6px rgba(0, 0, 0, 0.8)';
textElement3.style.zIndex = 0;
imageContainer3.appendChild(clickableImage44);
imageContainer3.appendChild(textElement3);
document.body.appendChild(imageContainer3);
const imageContainer45 = document.createElement("div");
imageContainer45.classList.add("image-container1");
const textElement45 = document.createElement("span");
textElement45.textContent = "next cooking"; // Replace with your desired text
textElement45.classList.add("image-text1");
textElement45.style.position = "fixed";
textElement45.style.left = "50%";
textElement45.style.transform = "translateX(65%)";
textElement45.style.top = "5rem";
textElement45.style.textShadow = '0px 3px 6px rgba(0, 0, 0, 0.8)';
textElement45.style.zIndex = 0;
imageContainer45.appendChild(clickableImage45);
imageContainer45.appendChild(textElement45);
document.body.appendChild(imageContainer45);
// Add text above images footer
const imageContainer4 = document.createElement("div");
imageContainer4.classList.add("image-container");
const textElement4 = document.createElement("span");
textElement4.style.textShadow = '0px 1px 2px rgba(0, 0, 0, 0.8)';
textElement4.style.filter = 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4))';
textElement4.textContent = "community center Krov [Roof] is a collective of anthropologists, visual anthropologists, ﬁlm and theater directors, artists, ethnomusicologists and decentralized open source orchestra gathered around the idea of creating an open common space for the development of an audiovisual archive for ethnographic ﬁlms, multimedia exhibitions, ethnomusicological works, open source decentralization and knowledge sharing."; // Replace with your desired text
textElement4.classList.add("image-text");
textElement4.style.color = "white";
textElement4.style.position = "fixed";
textElement4.style.left = "0%";
textElement4.style.transform = "translateX(0%)";
textElement4.style.bottom = "5rem";
textElement4.style.zIndex = 1;
imageContainer4.appendChild(clickableImage);
imageContainer4.appendChild(textElement4);
document.body.appendChild(imageContainer4);
const imageContainer5 = document.createElement("div");
imageContainer5.classList.add("image-container1");
const textElement5 = document.createElement("span");
textElement5.style.textShadow = '0px 1px 2px rgba(0, 0, 0, 0.7)';
textElement5.style.filter = 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4))';
textElement5.textContent = "visual anthropology center"; // Replace with your desired text
textElement5.classList.add("image-text1");
textElement5.style.position = "fixed";
textElement5.style.left = "0%";
textElement5.style.transform = "translateX(7%)";
textElement5.style.bottom = "3.6rem";
textElement5.style.zIndex = 1;
imageContainer5.appendChild(clickableImage2);
imageContainer5.appendChild(textElement5);
document.body.appendChild(imageContainer5);
const imageContainer6 = document.createElement("div");
imageContainer6.classList.add("image-container1");
const textElement6 = document.createElement("span");
textElement6.style.textShadow = '0px 1px 2px rgba(0, 0, 0, 0.7)';
textElement6.style.filter = 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4))';
textElement6.textContent = "vizantrop"; // Replace with your desired text
textElement6.classList.add("image-text1");
textElement6.style.position = "fixed";
textElement6.style.left = "0%";
textElement6.style.transform = "translateX(205%)";
textElement6.style.bottom = "3.6rem";
textElement6.style.zIndex = 1;
imageContainer6.appendChild(clickableImage5);
imageContainer6.appendChild(textElement6);
document.body.appendChild(imageContainer6);
const imageContainer7 = document.createElement("div");
imageContainer7.classList.add("image-container1");
const textElement7 = document.createElement("span");
textElement7.style.textShadow = '0px 1px 2px rgba(0, 0, 0, 0.7)';
textElement7.style.filter = 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4))';
textElement7.textContent = "threepenny"; // Replace with your desired text
textElement7.classList.add("image-text1");
textElement7.style.position = "fixed";
textElement7.style.left = "0%";
textElement7.style.transform = "translateX(245%)";
textElement7.style.bottom = "3.6rem";
textElement7.style.zIndex = 1;
imageContainer7.appendChild(clickableImage8);
imageContainer7.appendChild(textElement7);
document.body.appendChild(imageContainer7);
const imageContainer8 = document.createElement("div");
imageContainer8.classList.add("image-container1");
const textElement8 = document.createElement("span");
textElement8.style.textShadow = '0px 1px 2px rgba(0, 0, 0, 0.9)';
textElement8.style.filter = 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4))';
textElement8.textContent = "decentrala"; // Replace with your desired text
textElement8.classList.add("image-text1");
textElement8.style.position = "fixed";
textElement8.style.left = "0%";
textElement8.style.transform = "translateX(350%)";
textElement8.style.bottom = "3.6rem";
textElement8.style.zIndex = 1;
imageContainer8.appendChild(clickableImage6);
imageContainer8.appendChild(textElement8);
document.body.appendChild(imageContainer8);
const imageContainer9 = document.createElement("div");
imageContainer9.classList.add("image-container1");
const textElement9 = document.createElement("span");
textElement9.style.textShadow = '0px 1px 2px rgba(0, 0, 0, 0.9)';
textElement9.style.filter = 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4))';
textElement9.textContent = "center for ethnomusicology activities"; // Replace with your desired text
textElement9.classList.add("image-text1");
textElement9.style.position = "fixed";
textElement9.style.left = "0%";
textElement9.style.transform = "translateX(85%)";
textElement9.style.bottom = "3.6rem";
textElement9.style.zIndex = 1;
imageContainer9.appendChild(clickableImage7);
imageContainer9.appendChild(textElement9);
document.body.appendChild(imageContainer9);
