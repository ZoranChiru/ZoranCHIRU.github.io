// Variables DEHORS des fonctions pour être accessibles partout
let mot_a_ecrire = ["Rien", "Cachalot", "Pétunia", "Serviette"]
let i = 0
let score = 0

// Affiche le premier mot au chargement
document.getElementById("motAAfficher").textContent = mot_a_ecrire[i]

function deroulement() {
    let mot_utilisateur = document.getElementById("MotUtilisateur").value

    if (mot_utilisateur === mot_a_ecrire[i]) {
        score += 1
        document.getElementById("resultat").textContent = "Bravo !"
    } else {
        document.getElementById("resultat").textContent = "Raté !"
    }

    i += 1
    document.getElementById("MotUtilisateur").value = ""

    if (i < mot_a_ecrire.length) {
        document.getElementById("motAAfficher").textContent = mot_a_ecrire[i]
    } else {
        document.getElementById("motAAfficher").textContent = "Fin de la partie !"
        document.getElementById("resultat").textContent = "Score : " + score + "/" + mot_a_ecrire.length
    }
}

// Sans parenthèses après deroulement !
document.getElementById("btnvalider").addEventListener("click", deroulement)