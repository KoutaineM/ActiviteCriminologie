function loadPage(page) {
    const content = document.getElementById("content");

    fetch(`pages/${page}.html`)
        .then(res => {
            if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
            return res.text();
        })
        .then(htmlString => {
            // Parse the fetched full HTML and extract the #content element
            // This prevents injecting a full <html>/<head>/<body> into the current page
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            const fragment = doc.getElementById('content');

            if (fragment) {
                content.innerHTML = fragment.innerHTML;
            } else if (doc.body) {
                // fallback: inject body content if no #content found
                content.innerHTML = doc.body.innerHTML;
            } else {
                // ultimate fallback: raw HTML
                content.innerHTML = htmlString;
            }

            // Re-setup page-specific listeners after content injection
            if (page === 'autopsie') {
                setupAutopsieUnlock();
            }

            if (page === 'adn') {
                setupADNUnlock();
            }

        })
        .catch(err => {
            console.error('loadPage error:', err);
            content.innerHTML = "<p>Erreur : page introuvable ou problème de chargement.</p>";
        });
}

// Interactions pour la fiche Victime
document.addEventListener("click", function(e) {
    if(e.target.classList.contains("clickable")) {
        const note = e.target.getAttribute("data-note");
        const noteBox = document.getElementById("note-police");
        noteBox.querySelector("p").textContent = note;
        noteBox.style.display = "block";
        noteBox.scrollIntoView({ behavior: "smooth" });
    }
});

// Code secret du game master (à modifier selon vos préférences)
const SECRET_CODE_AUTOPSIE = "unlock_autopsie4829";
const SECRET_CODE_ADN = "unlock_adn7391";


// Fonction de déblocage pour la page autopsie (appelée après loadPage)
function setupAutopsieUnlock() {
    const unlockBtn = document.getElementById("unlock-btn");
    const unlockInput = document.getElementById("unlock-code");
    const autopsieLocked = document.getElementById("autopsie-locked");
    const autopsieContent = document.getElementById("autopsie-content");
    const unlockMessage = document.getElementById("unlock-message");

    if (unlockBtn) {
        unlockBtn.addEventListener("click", function() {
            const codeEntered = unlockInput.value;
            if(codeEntered === SECRET_CODE_AUTOPSIE) {
                autopsieLocked.style.display = "none";
                autopsieContent.style.display = "block";
            } else {
                unlockMessage.textContent = "Code incorrect. Réessayez.";
            }
        });
    }
}

function setupADNUnlock() {
    const unlockBtn = document.getElementById("unlock-btn");
    const unlockInput = document.getElementById("unlock-code");
    const adnLocked = document.getElementById("adn-locked");
    const adnContent = document.getElementById("adn-content");
    const unlockMessage = document.getElementById("unlock-message");

    if (unlockBtn) {
        unlockBtn.addEventListener("click", function() {
            const codeEntered = unlockInput.value;
            if(codeEntered === SECRET_CODE_ADN) {
                adnLocked.style.display = "none";
                adnContent.style.display = "block";
            } else {
                unlockMessage.textContent = "Code incorrect. Réessayez.";
            }
        });
    }
}
