// ====================================================================
// --- CONSTANTES DE CONTENU DE PAGE (simule le chargement de fichiers)
// ====================================================================

// --- CODES DE DÉVERROUILLAGE (à partager avec le Game Master)
const AUTOPSIE_CODE = '851A';
const ADN_CODE = '851B';

// Contenu de la page d'accueil
const HOME_CONTENT = `
    <h2>Accueil du Dossier - ENQUÊTE N°851</h2>
    <p><strong>Affaire :</strong> Meurtre de Madeline Shaw, 48 ans.</p>
    <p><strong>Lieu :</strong> 124, Chemin des Arbres Silencieux, banlieue Ouest.</p>
    <p><strong>Date de découverte :</strong> Vendredi 15 novembre, 17h30.</p>
    
    <div class="info-section">
        <h3>Description Sommaire</h3>
        <p>Madeline Shaw, critique d'art et militante locale, a été retrouvée morte dans sa cuisine. Le décès est survenu par traumatisme contondant à la tête. L'arme du crime n'a pas été retrouvée sur la scène.</p>
        <p>Ce dossier est mis à disposition des enquêteurs pour analyse et recoupement des indices. Les pages "Autopsie" et "Analyse ADN" nécessitent un code de sécurité (fourni par le Game Master) pour accès aux informations sensibles.</p>
    </div>
    <div class="info-section">
        <h3>Instructions pour les Joueurs (Élèves)</h3>
        <ul>
            <li>Utilisez le menu ci-dessus pour naviguer dans les éléments du dossier.</li>
            <li>Cherchez les éléments "cliquables" (texte en bleu) pour révéler des notes confidentielles destinées au Game Master (GM), qui peuvent vous donner des indices ou des informations d'interprétation.</li>
            <li>Recoupez les informations des Suspects, de la Scène de crime et des Témoins pour identifier l'auteur.</li>
        </ul>
    </div>
`;

// Contenu de la page Victime (Placeholder simple)
const VICTIME_CONTENT = `
    <h2>Victime : Madeline Shaw (48 ans)</h2>
    <div class="victime-container">
        <div class="victime-photo">
            <img src="https://placehold.co/200x250/1a2533/4ef0c3?text=Madeline\nShaw" alt="Photo de Madeline Shaw">
        </div>
        <div class="victime-info">
            <h3>Informations Générales</h3>
            <ul>
                <li><strong>Nom :</strong> Shaw, Madeline</li>
                <li><strong>Âge :</strong> 48 ans</li>
                <li><strong>Profession :</strong> Critique d'art et activiste communautaire.</li>
                <li><strong>Dernière vue :</strong> Jeudi 14 novembre, 23h00 (par son voisin).</li>
                <li class="clickable" data-note="Madeline avait de nombreux conflits : un avec un promoteur immobilier (Ryan Kessler), et des tensions avec une voisine (Hannah Leroux)."><strong>Conflits récents :</strong> Multiples (voir Interrogatoires).</li>
            </ul>
        </div>
    </div>
    <div class="info-section">
        <h3>Contexte Social</h3>
        <p>Madeline Shaw était bien connue dans la ville pour ses opinions tranchées et son engagement. Elle venait de terminer un article acerbe sur les pratiques d'un promoteur local.</p>
        <ul>
            <li class="clickable" data-note="Indice pour l'enquête : elle n'était pas mariée, pas d'enfants. Ses bénéficiaires sont des associations.">Situation familiale : Célibataire.</li>
            <li class="clickable" data-note="Ses habitudes : Café au lait tous les matins, promenades avec son chien (absent du domicile, il était chez une amie).">Habitudes : Très régulières.</li>
        </ul>
    </div>
`;

// Contenu de la page Suspects (fourni par l'utilisateur)
const SUSPECTS_CONTENT = `
    <h2>Fiche Suspects Initiaux</h2>
    <p>Quatre individus présentant un lien avec la victime ou la scène ont été identifiés par la police. Leurs profils sont mis à jour après la première série d'interrogatoires.</p>

    <div class="suspects-container">

        <!-- Suspect A - Evan Reed -->
        <div class="suspect-card">
            <img src="https://via.placeholder.com/150x200/151e29/4aa3ff?text=Evan+Reed" alt="Evan Reed">
            <h3>Evan Reed (25 ans)</h3>
            <ul>
                <li class="clickable" data-note="Livreur UPS, connu pour attendre devant des maisons après livraison.">Profession : Livreur UPS</li>
                <li class="clickable" data-note="Vu près de la maison de Madeline la veille du meurtre.">Lien avec la victime : Livraison régulière</li>
                <li class="clickable" data-note="Comportement impulsif, agitation, contradictions possibles en interrogatoire.">Profil psychologique : Instable, impulsif</li>
                <li class="clickable" data-note="Empreinte partielle correspond au groupe sanguin d’Evan.">Indices physiques : Empreinte partielle</li>
            </ul>
        </div>

        <!-- Suspect B - Hannah Leroux -->
        <div class="suspect-card">
            <img src="https://via.placeholder.com/150x200/151e29/4aa3ff?text=Hannah+Leroux" alt="Hannah Leroux">
            <h3>Hannah Leroux (33 ans)</h3>
            <ul>
                <li>Profession : Voisine directe</li>
                <li class="clickable" data-note="Conflit léger avec Madeline (chien, places de parking).">Lien avec la victime : Voisine</li>
                <li class="clickable" data-note="Anxieuse, agressivité latente. Appels multiples à la police pour des plaintes minimes.">Profil psychologique : Anxieuse, impulsive</li>
                <li class="clickable" data-note="Pas de lien ADN, alibi faible mais non impossible.">Indices : Aucun ADN trouvé</li>
            </ul>
        </div>

        <!-- Suspect C - Jonah Miller -->
        <div class="suspect-card">
            <img src="https://via.placeholder.com/150x200/151e29/4aa3ff?text=Jonah+Miller" alt="Jonah Miller">
            <h3>Jonah Miller (17 ans)</h3>
            <ul>
                <li>Profession : Lycéen</li>
                <li class="clickable" data-note="Élève soutenu par Madeline, réaction émotionnelle excessive à un rejet affectif.">Lien avec la victime : Élève</li>
                <li class="clickable" data-note="Profil fragile, en crise émotionnelle. Absence le jour du meurtre.">Profil psychologique : Fragile, sensible</li>
                <li class="clickable" data-note="Aucune trace physique mais peut être mis sous pression lors de l’interrogatoire.">Indices : Aucun physique</li>
            </ul>
        </div>

        <!-- Suspect D - Ryan Kessler -->
        <div class="suspect-card">
            <img src="https://via.placeholder.co/150x200/151e29/4aa3ff?text=Ryan+Kessler" alt="Ryan Kessler">
            <h3>Ryan Kessler (42 ans)</h3>
            <ul>
                <li>Profession : Propriétaire immobilier</li>
                <li class="clickable" data-note="Madeline avait dénoncé l’état d’une de ses maisons.">Lien avec la victime : Propriétaire mécontent</li>
                <li class="clickable" data-note="Colérique mais organisé. Alibi solide (restaurant avec témoins).">Profil psychologique : Organisé, colérique</li>
                <li>Indices : Alibi solide, faible probabilité</li>
            </ul>
        </div>

    </div>
`;


// Contenu de la page Scène de crime
const SCENE_CONTENT = `
    <h2>Scène de crime : Maison de Madeline Shaw </h2>

    <div class="scene-container">

        <!-- Image globale de la maison -->
        <div class="scene-image">
            <!-- Remplacement par une image placeholder plus générique et interactive -->
            <img src="https://placehold.co/700x450/1a2533/4ef0c3?text=Plan+de+la+Scène+de+Crime" alt="Plan de la Scène de Crime" usemap="#scene-map">
        </div>

        <!-- Map interactive : NOTE : Les coordonnées sont basées sur une image de 700x450 -->
        <map name="scene-map">
            <!-- Lampe renversée (140, 200) -->
            <area shape="circle" coords="140, 200, 40" href="#" class="clickable" data-note="Lampe renversée : trace de choc au sol. L'objet a pu être utilisé comme arme. Les fragments de verre (non montrés) portent l'ADN Inconnu A.">
            <!-- Pile de livres (230, 330) -->
            <area shape="circle" coords="230, 330, 30" href="#" class="clickable" data-note="Pile de livres renversée : signe de lutte impulsive ou de bousculade.">
            <!-- Plante brisée (430, 250) -->
            <area shape="circle" coords="430, 250, 45" href="#" class="clickable" data-note="Plante verte brisée (2 pots sur 7) : indique des mouvements brusques. Contient de la terre fine (voir rapport Indices).">
            <!-- Mug cassé (335, 335) -->
            <area shape="circle" coords="335, 335, 15" href="#" class="clickable" data-note="Mug cassé sous la table : éclats projetés à 1 m → geste impulsif. Mug personnel de la victime.">
            <!-- Porte arrière (590, 200) -->
            <area shape="rect" coords="500, 150, 680, 250" href="#" class="clickable" data-note="Porte arrière mal fermée : le sol à l'extérieur est boueux. Possible voie d'entrée/sortie du tueur. Le témoin a vu une silhouette s'échapper par là.">
        </map>

    </div>

    <div class="info-section">
        <h3>Synthèse de l'Unité Technique</h3>
        <p>L'analyse de la scène indique un crime de nature impulsive et non préméditée, mais potentiellement dissimulé par une fuite organisée.</p>
        <ul>
            <li class="clickable" data-note="L'arme du crime n'a pas été retrouvée. Elle a été emportée par le tueur.">Arme du crime : Non présente sur la scène.</li>
            <li class="clickable" data-note="Les indices suggèrent que le tueur connaissait la maison et n'a pas eu besoin d'entrer par effraction par la porte principale.">Accès : Possiblement par la porte arrière ou une entrée non verrouillée.</li>
        </ul>
    </div>
`;

// Contenu de la page Témoins
const TEMOINS_CONTENT = `
    <h2>Témoin : Arthur "Art" Gladstone</h2>

    <div class="info-section">
        <p>Arthur Gladstone, 72 ans, est le voisin qui a alerté la police. Les élèves peuvent cliquer sur les éléments ci-dessous pour obtenir ses observations détaillées.</p>

        <ul>
            <li class="clickable" data-note="Arthur a vu un homme immobile devant la maison jeudi soir → probable Evan Reed.">Homme immobile jeudi soir (avant le meurtre)</li>
            <li class="clickable" data-note="Un bruit brusque vendredi vers 16h, probablement la lampe ou la plante renversée. Heure estimée du meurtre : 16h00 - 16h30.">Bruit brusque vendredi (jour du meurtre)</li>
            <li class="clickable" data-note="Il a vu une silhouette sortir par la porte arrière, trop vite pour identifier → suspect potentiel.">Silhouette sortie par la porte arrière</li>
            <li class="clickable" data-note="Aucun véhicule n’a démarré, donc le suspect est probablement parti à pied.">Aucun véhicule aperçu (départ du suspect)</li>
        </ul>

        <p>Les élèves peuvent utiliser ces observations pour **recouper avec la scène de crime, les suspects et les indices ADN**.</p>
    </div>

    <div class="info-section">
        <h3>Fiche acteur pour animateur (GM)</h3>
        <ul>
            <li class="clickable" data-note="Attitude à jouer : très bavard, aime donner des détails inutiles, un peu paranoïaque.">Attitude à jouer</li>
            <li class="clickable" data-note="Informations à révéler seulement si les élèves posent les bonnes questions : casquette UPS (lien potentiel avec Evan Reed), porte mal fermée, aucun véhicule.">Informations à révéler (détails supplémentaires)</li>
        </ul>
    </div>
`;

// Contenu de la page Chronologie
const CHRONOLOGIE_CONTENT = `
    <h2>Chronologie de l’affaire</h2>

    <div class="chronologie-container">
        <p>La chronologie rassemble tous les événements importants de l’enquête. Cliquez sur chaque élément pour obtenir des détails supplémentaires.</p>

        <!-- Timeline -->
        <div class="timeline-wrapper">
            <ul>
                <li class="clickable timeline-item" data-note="Jeudi soir : Arthur Gladstone aperçoit un homme immobile devant la maison → probable Evan Reed (Livreur).">
                    <span class="timeline-time">Jeu. Soir (23h00)</span> : Observation du voisin
                </li>
                <li class="clickable timeline-item" data-note="Vendredi matin : Madeline aperçue au supermarché, rentre chez elle. Dernière trace de vie certaine.">
                    <span class="timeline-time">Ven. Matin</span> : Activité de la victime
                </li>
                <li class="clickable timeline-item highlight" data-note="Vendredi entre 15h45 et 17h00 : Heure estimée par l'autopsie et le témoignage du bruit. C'est la fenêtre de temps critique.">
                    <span class="timeline-time">Ven. 15h45 - 17h00</span> : DÉCÈS DE MADELINE SHAW
                </li>
                <li class="clickable timeline-item" data-note="Vendredi vers 16h : bruit brusque signalé par le voisin (Hannah Leroux le confirme) → lampe ou plante renversée sur la scène de crime.">
                    <span class="timeline-time">Ven. ~16h00</span> : Bruit suspect
                </li>
                <li class="clickable timeline-item" data-note="Vendredi fin d’après-midi : Voisin appelle la police après avoir remarqué la porte arrière mal fermée et l'absence de la victime.">
                    <span class="timeline-time">Ven. 17h30</span> : Découverte du corps et appel à la police
                </li>
                <li class="clickable timeline-item" data-note="Samedi : scène de crime sécurisée et premiers relevés. L'ADN Inconnu A est prélevé.">
                    <span class="timeline-time">Samedi</span> : Sécurisation et relevés initiaux
                </li>
                <li class="clickable timeline-item" data-note="Dimanche : prélèvements ADN et analyses d’indices (Terre, Mug) envoyés au laboratoire. Début de l'identification de l'ADN Inconnu A.">
                    <span class="timeline-time">Dimanche</span> : Prélèvements ADN & Indices
                </li>
                <li class="clickable timeline-item" data-note="Lundi : résultats d’autopsie disponibles → traumatisme crânien et heure précise du décès.">
                    <span class="timeline-time">Lundi</span> : Résultats d'Autopsie
                </li>
                <li class="clickable timeline-item" data-note="Mardi : résultats ADN reçus. Evan Reed devient le suspect principal.">
                    <span class="timeline-time">Mardi</span> : Résultats ADN
                </li>
            </ul>
        </div>
    </div>
`;


// Contenu de la page Interrogatoires
const INTERROGATOIRES_CONTENT = `
    <h2>Interrogatoire des suspects</h2>

    <div class="interrogatoire-container">

        <div class="info-section">
            <h3>Techniques d'Interrogatoire</h3>
            <p>Pour mener l'interrogatoire, les enquêteurs doivent utiliser des techniques psychologiques et factuelles pour déceler la vérité et tester la cohérence des récits :</p>

            <ul>
                <li class="clickable" data-note="Posez des questions ouvertes pour obtenir des réponses détaillées et non orientées. Ex: 'Décrivez-moi votre journée de vendredi de A à Z'.">Pose des questions ouvertes</li>
                <li class="clickable" data-note="Demandez les détails précis (couleurs, odeurs, bruits) pour vérifier la cohérence de leurs réponses. Ex: 'De quelle couleur était le sac ?'.">Demande les détails précis</li>
                <li class="clickable" data-note="Revenez sur un détail plus tard dans l'interrogatoire pour tester la cohérence de leurs réponses. Les menteurs ont du mal à se souvenir de leurs faux détails.">Reviens sur un détail plus tard</li>
                <li class="clickable" data-note="Observez les réactions physiques (gestes, regard, voix, agitation) pour détecter des contradictions ou tensions. Un changement d'attitude est souvent révélateur de stress ou d'un mensonge.">Observe les réactions physiques</li>
            </ul>
        </div>
        
        <div class="info-section">
            <h3>Focus Interrogatoire</h3>
            <p>Les suspects principaux pour l'interrogatoire en direct (roleplay) sont :</p>
            <ul>
                <li class="clickable" data-note="Evan Reed (Livreur) — suspect impulsif, nerveux, vu la veille. Il ment sur son emploi du temps de vendredi après-midi. Le forcer à détailler ses livraisons.">Evan Reed</li>
                <li class="clickable" data-note="Hannah Leroux (Voisine) — sera trop coopérative. La mettre face au fait qu'elle n'a pas vu de voiture s'en aller (Témoin).">Hannah Leroux</li>
                <li class="clickable" data-note="Jonah Miller (Lycéen) — lycéen fragile, émotionnel. Ses messages de menaces sont une fausse piste (ne pas le relâcher complètement, mais se concentrer sur l'ADN).">Jonah Miller</li>
            </ul>

            <p class="final-instruction">Les élèves doivent utiliser ces techniques pour guider leur enquête et tester les alibis des suspects. L'ADN est la clé pour relâcher les innocents.</p>
        </div>

    </div>
`;


// Contenu de la page Autopsie (Verrouillé par code)
const AUTOPSIE_CONTENT = `
    <h2>Rapport d'Autopsie : VERROUILLÉ</h2>
    <div id="autopsie-locked" class="report-locked">
        <h3>ACCÈS RESTREINT</h3>
        <p>Ce rapport contient des informations sensibles. Un code de sécurité est nécessaire pour y accéder.</p>
        <input type="text" id="unlock-code-autopsie" placeholder="Entrez le code de déverrouillage">
        <button id="unlock-btn-autopsie" onclick="attemptUnlock('autopsie', AUTOPSIE_CODE)">Déverrouiller</button>
        <p id="unlock-message-autopsie" style="color: #ff7f7f; margin-top: 10px;"></p>
    </div>

    <div id="autopsie-content-unlocked" class="report-content" style="display: none;">
        <h3>Rapport d'Autopsie : Madeline Brooks</h3>

        <h3>Informations générales</h3>
        <ul>
            <li class="clickable" data-note="Victime confirmée : Madeline Brooks, 38 ans.">Victime : Madeline Brooks</li>
            <li class="clickable" data-note="Date officielle de l'autopsie réalisée par Dr. L. Powers.">Date : 13 février 2025</li>
            <li class="clickable" data-note="Médecin légiste : Dr. L. Powers, certifié pour enquêtes criminelles.">Médecin légiste : Dr. L. Powers</li>
        </ul>

        <h3>Cause du décès</h3>
        <p class="clickable" data-note="Traumatisme crânien sur le côté droit du crâne → correspond aux indices de la scène (lampe).">Traumatisme crânien dû à un impact sur le côté droit du crâne.</p>

        <h3>Arme probable</h3>
        <p class="clickable" data-note="Objet contondant léger mais rigide → compatible avec la lampe renversée retrouvée sur la scène.">Objet contondant, non métallique, léger mais rigide.</p>

        <h3>Signes de lutte</h3>
        <ul>
            <li class="clickable" data-note="Éraflures sur l’avant-bras droit → la victime a tenté de se protéger. ADN de l'agresseur (Evan Reed) trouvé.">Éraflures sur l’avant-bras droit</li>
            <li class="clickable" data-note="Petite ecchymose sur la clavicule → agresseur inexpérimenté, gestes chaotiques.">Petite ecchymose sur la clavicule</li>
        </ul>

        <h3>Heure probable de la mort</h3>
        <p class="clickable" data-note="Vendredi entre 15h45 et 17h00 → heure cohérente avec le bruit signalé par le voisin (~16h).">Vendredi entre 15h45 et 17h00</p>

        <h3>Autres éléments</h3>
        <ul>
            <li class="clickable" data-note="Pas de drogues ou alcool détectés dans le corps.">Pas de drogues ou alcool</li>
            <li class="clickable" data-note="Indices de lutte corroborés par la scène de crime → confirme que l’agresseur était impulsif.">Indices de lutte corroborés par la scène de crime</li>
        </ul>
    </div>
`;

// Contenu de la page ADN (Verrouillé par code)
const ADN_CONTENT = `
    <h2>Rapport d'Analyse ADN : VERROUILLÉ</h2>
    <div id="adn-locked" class="report-locked">
        <h3>ACCÈS RESTREINT</h3>
        <p>Ce rapport contient des informations sensibles. Un code de sécurité est nécessaire pour y accéder.</p>
        <input type="text" id="unlock-code-adn" placeholder="Entrez le code de déverrouillage">
        <button id="unlock-btn-adn" onclick="attemptUnlock('adn', ADN_CODE)">Déverrouiller</button>
        <p id="unlock-message-adn" style="color: #ff7f7f; margin-top: 10px;"></p>
    </div>

    <div id="adn-content-unlocked" class="report-content" style="display: none;">
        <h3>Rapport ADN : Analyse des preuves</h3>

        <div class="adn-container">

            <h3>Échantillon A — ADN sur la lampe renversée</h3>
            <ul>
                <li class="clickable" data-note="ADN masculin correspondant aux marqueurs génétiques d’Evan Reed (Livreur) à 99.8% → Preuve absolue qu'il a touché l'arme du crime.">ADN sur arme présumée : Evan Reed</li>
            </ul>

            <h3>Échantillon B — Traces sous l’ongle droit de la victime</h3>
            <ul>
                <li class="clickable" data-note="ADN masculin correspondant à Evan Reed avec 89% de probabilité → la victime a tenté de se défendre contre Evan Reed.">Trace sous l’ongle : Evan Reed</li>
            </ul>

            <h3>Échantillon C — Empreinte de chaussure boueuse</h3>
            <ul>
                <li class="clickable" data-note="Taille 42, marque courante → non discriminant. Evan Reed porte du 42.">Empreinte : non concluante mais compatible avec Evan Reed</li>
            </ul>

            <h3>Conclusion ADN</h3>
            <ul>
                <li class="clickable" data-note="Evan Reed est l'unique source de l'ADN étranger sur la scène et l'arme présumée. Jonah Miller et Ryan Kessler sont exclus. Hannah Leroux est exclue.">Suspect principal : Evan Reed (Livreur)</li>
            </ul>

        </div>
    </div>
`;


// Contenu de la page Indices (Générique) - MAINTENANT DÉTAILLÉ
const INDICES_CONTENT = `
    <h2>Synthèse des Indices Matériels</h2>
    <p>Ce rapport rassemble et détaille l'analyse des indices prélevés sur la scène du crime. Le recoupement des indices mène directement au suspect principal.</p>

    <div class="indices-table-wrapper">
        <table class="indices-table">
            <thead>
                <tr>
                    <th>Code Indice</th>
                    <th>Élément</th>
                    <th>Localisation</th>
                    <th>Analyse des Experts</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>I-001A</td>
                    <td>Lampe sur pied (brisée)</td>
                    <td>Salon (près du corps)</td>
                    <td class="clickable" data-note="Objet contondant, compatible avec les blessures de la victime (voir Autopsie). Contient des traces d'ADN étranger non-identifié à ce stade (voir ADN).">Objet potentiellement utilisé comme arme.</td>
                </tr>
                <tr>
                    <td>I-002T</td>
                    <td>Terre fine (échantillon)</td>
                    <td>Sous la table du salon, près de la plante brisée.</td>
                    <td class="clickable" data-note="Le type de terre correspond aux jardinières des maisons de la rue, y compris la maison de la victime et celle d'Evan Reed (suspect).">Type de terre commun à la zone.</td>
                </tr>
                <tr>
                    <td>I-003E</td>
                    <td>Empreinte de chaussure</td>
                    <td>Sol boueux près de la porte arrière.</td>
                    <td class="clickable" data-note="Taille 42. Marque de semelle standard. Compatible avec le témoin qui a vu une silhouette s'échapper.">Compatible avec plusieurs suspects.</td>
                </tr>
                <tr>
                    <td>I-004V</td>
                    <td>Mug en céramique (cassé)</td>
                    <td>Sous une table du salon.</td>
                    <td class="clickable" data-note="Mug de la victime. Aucune trace d'ADN étranger. Indique un mouvement brusque ou une lutte.">Objet de la victime, brisé lors de la lutte.</td>
                </tr>
                <tr>
                    <td>I-005S</td>
                    <td>Éraflures cutanées (prélèvement)</td>
                    <td>Avant-bras droit de la victime.</td>
                    <td class="clickable" data-note="Indique un mouvement de défense. Le prélèvement ADN est envoyé au laboratoire. (Résultat : ADN Evan Reed)">Preuve de légitime défense de la victime.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="info-section">
        <h3>Piste à Explorer</h3>
        <p class="clickable" data-note="L'ensemble des indices matériels (Lampe brisée, Terre et Empreinte) est cohérent avec une intrusion rapide et une agression impulsive, puis une fuite par la porte arrière.">Recouper les indices de la scène avec le profil psychologique d'Evan Reed.</p>
    </div>
`;


// ====================================================================
// --- LOGIQUE DE L'APPLICATION
// ====================================================================

const pages = {
    'home': HOME_CONTENT,
    'victime': VICTIME_CONTENT,
    'suspects': SUSPECTS_CONTENT,
    'scene': SCENE_CONTENT,
    'autopsie': AUTOPSIE_CONTENT,
    'adn': ADN_CONTENT,
    'temoins': TEMOINS_CONTENT,
    'chronologie': CHRONOLOGIE_CONTENT,
    'interrogatoires': INTERROGATOIRES_CONTENT,
    'indices': INDICES_CONTENT,
};

// Fonction principale pour charger le contenu
function loadPage(pageName) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[pageName] || HOME_CONTENT;
    
    // Défilement en haut de la page pour une meilleure UX
    contentDiv.scrollTo(0, 0);

    // Réinitialiser la zone de note de police
    const notePoliceDiv = document.getElementById('note-police');
    if (notePoliceDiv) {
        notePoliceDiv.innerHTML = '<p>Cliquez sur un élément pour voir les détails.</p>';
        notePoliceDiv.classList.remove('active-note');
    } else {
         // Créer la zone de note si elle n'existe pas encore (pour les pages chargées via JS)
        const newNotePoliceDiv = document.createElement('div');
        newNotePoliceDiv.id = 'note-police';
        newNotePoliceDiv.className = 'hidden-note';
        newNotePoliceDiv.innerHTML = '<p>Cliquez sur un élément pour voir les détails.</p>';
        contentDiv.appendChild(newNotePoliceDiv);
    }
    

    // Activer les listeners pour les éléments cliquables sur la nouvelle page chargée
    activateClickableElements();

    // Vérifier l'état de déverrouillage au chargement de la page
    if (pageName === 'autopsie') {
        checkUnlockStatus('autopsie');
    } else if (pageName === 'adn') {
        checkUnlockStatus('adn');
    }
}

// Fonction pour gérer le clic sur les éléments interactifs
function activateClickableElements() {
    // Éléments cliquables (texte, li, td)
    const clickableElements = document.querySelectorAll('#content .clickable');
    clickableElements.forEach(el => {
        el.removeEventListener('click', showNote);
        el.addEventListener('click', showNote);
    });

    // Éléments de la Map (area) - Nécessite un événement sur la map elle-même pour la délégation
    const sceneMap = document.getElementById('content').querySelector('map[name="scene-map"]');
    if (sceneMap) {
        // Ajouter le listener sur la zone d'image pour capturer les clics d'area
        const sceneImage = document.getElementById('content').querySelector('.scene-image img');
        if (sceneImage) {
            sceneImage.removeEventListener('click', handleMapClick);
            sceneImage.addEventListener('click', handleMapClick);
        }
    }
}

function handleMapClick(e) {
    e.preventDefault(); 
    
    // Récupérer l'élément img
    const img = e.target;
    // Récupérer la map associée à l'image
    const mapName = img.getAttribute('usemap').substring(1);
    const mapElement = document.querySelector(`map[name="${mapName}"]`);

    if (mapElement) {
        // Obtenir toutes les zones (area)
        const areas = mapElement.querySelectorAll('area');
        
        // Calculer la distance du clic par rapport au centre de chaque zone (simplification pour les cercles)
        let closestArea = null;
        let minDistance = Infinity;

        areas.forEach(area => {
            if (area.shape === 'circle') {
                const coords = area.coords.split(',').map(Number);
                const [cx, cy, r] = coords;
                
                // Distance du clic au centre du cercle
                const distance = Math.sqrt(Math.pow(e.offsetX - cx, 2) + Math.pow(e.offsetY - cy, 2));

                // Si le clic est dans le rayon du cercle ET c'est l'area la plus proche
                if (distance <= r && distance < minDistance) {
                    minDistance = distance;
                    closestArea = area;
                }
            }
             // NOTE: Simplification pour les rectangles (area.shape === 'rect') : un clic dans la zone rectangulaire déclenche
            if (area.shape === 'rect') {
                const coords = area.coords.split(',').map(Number);
                const [x1, y1, x2, y2] = coords;

                if (e.offsetX >= x1 && e.offsetX <= x2 && e.offsetY >= y1 && e.offsetY <= y2) {
                    closestArea = area;
                }
            }
        });

        // Si une zone cliquable est trouvée
        if (closestArea) {
             const note = closestArea.getAttribute('data-note');
             if (note) {
                 // Afficher la note
                 const notePoliceDiv = document.getElementById('note-police');
                 if (notePoliceDiv) {
                     notePoliceDiv.innerHTML = `<p><strong>Note de la Scène de Crime :</strong> ${note}</p>`;
                     notePoliceDiv.classList.add('active-note');
                 }
             }
        }
    }
}


// Fonction pour afficher la note de police
function showNote(e) {
    // Empêcher l'action par défaut (comme naviguer si c'est un lien area)
    e.preventDefault(); 
    
    // Trouver l'élément cliquable réel
    const targetElement = e.target.closest('.clickable') || e.target;
    const note = targetElement.getAttribute('data-note');
    
    if (note) {
        const notePoliceDiv = document.getElementById('note-police');
        if (notePoliceDiv) {
            // Afficher la note
            notePoliceDiv.innerHTML = `<p><strong>Note de l'enquête :</strong> ${note}</p>`;
            notePoliceDiv.classList.add('active-note');
        }
    }
}

// Fonction pour vérifier l'état de déverrouillage (utilisée au chargement de la page)
function checkUnlockStatus(page) {
    // Par défaut, nous considérons que le contenu n'est pas verrouillé dans le localStorage
    if (localStorage.getItem(`${page}Unlocked`) === null) {
        localStorage.setItem(`${page}Unlocked`, 'false');
    }
    
    const isUnlocked = localStorage.getItem(`${page}Unlocked`) === 'true';
    const lockedDiv = document.getElementById(`${page}-locked`);
    const unlockedDiv = document.getElementById(`${page}-content-unlocked`);

    if (lockedDiv && unlockedDiv) {
        if (isUnlocked) {
            lockedDiv.style.display = 'none';
            unlockedDiv.style.display = 'block';
            activateClickableElements(); // Réactiver au cas où
        } else {
            lockedDiv.style.display = 'block';
            unlockedDiv.style.display = 'none';
            
            // Assurez-vous que l'écouteur d'événement est toujours attaché au bouton de déverrouillage
            const unlockButton = document.getElementById(`unlock-btn-${page}`);
            if (unlockButton) {
                // Le onclick est directement dans le HTML généré dans la constante (e.g., onclick="attemptUnlock('adn', ADN_CODE)")
            }
        }
    }
}

// Fonction pour déverrouiller le contenu
function attemptUnlock(page, correctCode) {
    const inputElement = document.getElementById(`unlock-code-${page}`);
    const messageElement = document.getElementById(`unlock-message-${page}`);
    const code = inputElement ? inputElement.value.trim() : '';

    if (code.toUpperCase() === correctCode) {
        localStorage.setItem(`${page}Unlocked`, 'true');
        // Remplacement de l'alerte par un message interne
        if (messageElement) {
            messageElement.textContent = 'Accès accordé. Contenu déverrouillé !';
            messageElement.style.color = '#4ef0c3';
        }
        // Recharger la page après un court délai pour que l'utilisateur voie le message
        setTimeout(() => loadPage(page), 500); 

    } else {
        localStorage.setItem(`${page}Unlocked`, 'false');
        // Remplacement de l'alerte par un message interne
        if (messageElement) {
            messageElement.textContent = 'Code incorrect. Veuillez réessayer.';
            messageElement.style.color = '#ff7f7f';
        }
    }
}

// --- Style CSS pour l'application
const CSS_STYLE = `
body {
    font-family: 'Inter', sans-serif;
    background-color: #121212;
    color: #e0e0e0;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    min-height: 100vh;
}

#app {
    width: 100%;
    max-width: 1200px;
    background-color: #1e1e1e;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    overflow: hidden;
    margin: 20px;
}

/* === HEADER === */
header {
    background-color: #1a2533;
    color: #4ef0c3;
    padding: 15px 30px;
    border-bottom: 2px solid #2a3d52;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

header h1 {
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 2px;
}

header .case-id {
    font-size: 1rem;
    font-weight: bold;
    color: #a0a0a0;
}

/* === DASHBOARD MENU === */
.dashboard {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 30px;
    background-color: #151e29;
    gap: 8px;
    border-bottom: 1px solid #2a3d52;
}

.dashboard button {
    background-color: #2a3d52;
    color: #e0e0e0;
    border: none;
    padding: 8px 15px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
    flex-grow: 1;
    min-width: 120px;
}

.dashboard button:hover {
    background-color: #4ef0c3;
    color: #121212;
    box-shadow: 0 0 10px rgba(78, 240, 195, 0.5);
}

/* Styles pour le bouton actif (simulé via JS ou classe) */
.dashboard button.active {
    background-color: #4ef0c3;
    color: #121212;
    font-weight: bold;
}

/* === CONTENT ZONE === */
#content {
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

#content h2 {
    color: #4ef0c3;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
    margin-top: 0;
    grid-column: 1 / -1;
}

#content h3 {
    color: #e0e0e0;
    border-left: 4px solid #4ef0c3;
    padding-left: 10px;
    margin-top: 20px;
}

.info-section {
    background-color: #2a2a2a;
    padding: 15px;
    border-radius: 8px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
}

/* Style pour le texte interactif (indice) */
.clickable {
    color: #4aa3ff;
    cursor: pointer;
    font-weight: 500;
    transition: color 0.1s;
    display: inline-block;
}

.clickable:hover {
    color: #72b3ff;
    text-decoration: underline;
}

/* === ZONE NOTE DE POLICE (Révélation d'indice) === */
#note-police {
    background-color: #151e29;
    border: 1px solid #2a3d52;
    padding: 15px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    grid-column: 1 / -1; /* S'étaler sur toute la largeur */
}

#note-police p {
    margin: 0;
    color: #a0a0a0;
    font-style: italic;
    min-height: 20px; /* Assure une hauteur minimale */
}

#note-police.active-note {
    background-color: #333333;
    border-color: #4ef0c3;
    box-shadow: 0 0 15px rgba(78, 240, 195, 0.4);
}

#note-police strong {
    color: #4ef0c3;
}

/* === VICTIME & SUSPECTS Layouts === */
.victime-container {
    display: flex;
    gap: 30px;
    align-items: flex-start;
    margin-bottom: 20px;
    background-color: #2a2a2a;
    padding: 20px;
    border-radius: 8px;
}

.victime-photo img {
    border-radius: 8px;
    object-fit: cover;
    border: 3px solid #333;
}

.victime-info ul, .info-section ul {
    list-style: none;
    padding-left: 0;
}

.victime-info li, .info-section li {
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
}

.victime-info li::before, .info-section li::before {
    content: "•";
    color: #4ef0c3;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}

.suspects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.suspect-card {
    background-color: #2a2a2a;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    text-align: center;
    transition: transform 0.2s;
}

.suspect-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
}

.suspect-card img {
    width: 100%;
    max-width: 150px;
    height: auto;
    border-radius: 6px;
    margin-bottom: 10px;
    border: 2px solid #333;
}

.suspect-card h3 {
    margin: 10px 0 15px 0;
    color: #4ef0c3;
    font-size: 1.2rem;
    border: none;
    padding-left: 0;
}

.suspect-card ul {
    list-style: none;
    padding: 0;
    text-align: left;
}
.suspect-card li::before {
    content: "→";
    color: #a0a0a0;
}

/* === SCÈNE DE CRIME === */
.scene-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
}

.scene-image {
    text-align: center;
    border: 2px solid #333;
    border-radius: 8px;
    overflow: hidden;
}

.scene-image img {
    max-width: 100%;
    height: auto;
    display: block;
    cursor: pointer;
}

/* Pour que les zones cliquables AREA soient visibles uniquement si l'image est active/interne */
/* Les styles AREA sont gérés par l'attribut data-note et la fonction JS showNote */

/* === AUTOPSIE/ADN Locked Reports === */
.report-locked {
    background-color: #333;
    border: 2px solid #8b0000;
    padding: 40px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(139, 0, 0, 0.5);
}

.report-locked h3 {
    color: #ff7f7f;
    font-size: 1.8rem;
}

.report-locked p {
    font-size: 1.1rem;
    color: #a0a0a0;
}

.report-locked input {
    padding: 10px;
    margin: 15px 0;
    border-radius: 6px;
    border: 1px solid #555;
    background-color: #1e1e1e;
    color: #e0e0e0;
    text-align: center;
    width: 200px;
}

.report-locked button {
    background-color: #ff7f7f;
    color: #121212;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s, box-shadow 0.2s;
}

.report-locked button:hover {
    background-color: #ff9999;
    box-shadow: 0 0 10px rgba(255, 127, 127, 0.7);
}

.report-content ul {
    list-style: none;
    padding: 0;
}
.report-content li {
    padding-left: 20px;
    position: relative;
    margin-bottom: 10px;
}
.report-content li::before {
    content: "✓";
    color: #4ef0c3;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}

/* === CHRONOLOGIE === */
.timeline-wrapper {
    position: relative;
    padding: 20px 0;
    border-left: 3px solid #333;
    margin-left: 20px;
}

.timeline-wrapper ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.timeline-item {
    position: relative;
    padding: 10px 20px;
    background-color: #2a2a2a;
    margin-bottom: 15px;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    border-left: 4px solid #4ef0c3;
    cursor: pointer;
    transition: background-color 0.2s, border-left-color 0.2s;
}

.timeline-item:hover {
    background-color: #333333;
    border-left-color: #e0e0e0;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background-color: #4ef0c3;
    border-radius: 50%;
    border: 3px solid #1e1e1e;
}

.timeline-time {
    display: block;
    font-weight: bold;
    color: #4ef0c3;
    margin-bottom: 5px;
}

.timeline-item.highlight {
    border-left-color: #ff7f7f;
}
.timeline-item.highlight::before {
    background-color: #ff7f7f;
}

/* === INTERROGATOIRES === */
.interrogatoire-container .final-instruction {
    font-style: italic;
    color: #4ef0c3;
    font-weight: bold;
    margin-top: 20px;
}

/* === INDICES Table === */
.indices-table-wrapper {
    overflow-x: auto;
    background-color: #2a2a2a;
    border-radius: 8px;
    padding: 10px;
}

.indices-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    font-size: 0.95rem;
}

.indices-table th, .indices-table td {
    border: 1px solid #333;
    padding: 12px;
    text-align: left;
}

.indices-table th {
    background-color: #1a2533;
    color: #4ef0c3;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.85rem;
}

.indices-table tr:nth-child(even) {
    background-color: #252525;
}

.indices-table tr:hover {
    background-color: #333333;
}


/* === Media Queries for Responsiveness === */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        text-align: center;
    }
    header h1 {
        font-size: 1.3rem;
    }
    header .case-id {
        margin-top: 5px;
    }
    
    .dashboard {
        padding: 10px 15px;
        justify-content: center;
    }
    
    .dashboard button {
        flex-grow: 1;
        min-width: unset;
    }

    #content {
        padding: 15px;
    }

    .victime-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .victime-info ul, .info-section ul {
        text-align: left;
    }
    
    .suspect-card {
        padding: 10px;
    }
    
    .timeline-wrapper {
        margin-left: 10px;
    }

    .timeline-item::before {
        left: -18px;
    }
}
`;


// Injecter le CSS dans la page
const styleTag = document.createElement('style');
styleTag.innerHTML = CSS_STYLE;
document.head.appendChild(styleTag);

// Charger la page d'accueil par défaut au démarrage
document.addEventListener('DOMContentLoaded', () => {
    // Injecter les fonctions de déverrouillage dans le scope global pour que le HTML in-content puisse y accéder
    window.attemptUnlock = attemptUnlock;
    window.loadPage = loadPage;
    window.AUTOPSIE_CODE = AUTOPSIE_CODE;
    window.ADN_CODE = ADN_CODE;

    // Charger la page d'accueil
    loadPage('home');
    
    // Assurer que les événements cliquables sont actifs, surtout pour les boutons du menu
    document.querySelectorAll('.dashboard button').forEach(button => {
        button.addEventListener('click', function() {
            // Logique pour mettre en évidence le bouton actif (optionnel)
            document.querySelectorAll('.dashboard button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});