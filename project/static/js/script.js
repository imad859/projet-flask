async function validateForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (!username || !password) {
        errorMessage.textContent = 'Veuillez remplir tous les champs.';
        errorMessage.style.color = 'red';
        return;
    }

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (result.success) {
            errorMessage.style.color = 'green';
            errorMessage.textContent = 'Vous êtes connecté !';
        } else {
            errorMessage.style.color = 'red';
            errorMessage.textContent = 'Erreur : recommencez.';
        }
    } catch (error) {
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Erreur lors de la connexion au serveur.';
    }
}

async function addAccount() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (!username || !password) {
        errorMessage.textContent = 'Veuillez remplir tous les champs.';
        errorMessage.style.color = 'red';
        return;
    }

    try {
        const response = await fetch('/add_account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (result.success) {
            errorMessage.style.color = 'green';
            errorMessage.textContent = 'Compte créé avec succès.';
        } else {
            errorMessage.style.color = 'red';
            errorMessage.textContent = result.message;
        }
    } catch (error) {
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Erreur lors de la création du compte.';
    }
}

function resetForm() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('errorMessage').textContent = '';
}
