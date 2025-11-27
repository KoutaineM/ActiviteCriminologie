// ====================================================================
// --- CONSTANTES DE CONTENU DE PAGE (simule le chargement de fichiers)
// ====================================================================

// --- CODES DE DÉVERROUILLAGE (à partager avec le Game Master)
const AUTOPSIE_CODE = '851A';
const ADN_CODE = '851B';

// Contenu de la page d'accueil
const HOME_CONTENT = `
    <div>
        <h2>Accueil du Dossier - ENQUÊTE N°851</h2>
        <p><strong>Affaire :</strong> Meurtre de Madeline Shaw, 48 ans.</p>
        <p><strong>Lieu :</strong> 124, Chemin des Arbres Silencieux, banlieue Ouest.</p>
        <p><strong>Date de découverte :</strong> Vendredi 15 novembre, 17h30.</p>
        
        <div class="info-section">
            <h3>Contexte de l'enquête</h3>
            <p>Madeline Shaw, professeure d'anglais, a été retrouvée morte dans sa cuisine. Le décès est survenu par traumatisme contondant à la tête. L'arme du crime n'a pas été retrouvée sur la scène.</p>
            <p>Le dossier de l'affaire est déjà passé dans les mains d'une équipe d'enquêteurs. Cependant, après avoir reçu des menaces, ils ont décidé d'abandonner l'affaire. C'est dans ce contexte que votre équipe de jeunes enquêteurs motivés évoluent. Vous n'avez rien à perdre et tout à prouver.</p>
            <p>Le dossier mis à disposition est celui des enquêteurs précédents et contient des analyses et recoupement des indices. Les rapports d'autopsie et de relevé ADN ne nous sont pas encore parvenu, les équipes scientifiques sont sur le coup et travaillent d'arrache-pied pour vous donner leur résultats au plus vite.</p>
        </div>
        <div class="info-section">
            <h3>Instructions pour les Joueurs</h3>
            <ul>
                <li>Utilisez le menu ci-dessus pour naviguer dans les éléments du dossier.</li>
                <li>Cherchez les éléments "cliquables" (texte en bleu) pour révéler des notes confidentielles laissée par les enquêteurs précédents, qui peuvent vous donner des indices ou des informations complémentaires (ou non !).</li>
                <li>Recoupez les informations des Suspects, de la Scène de crime et des Témoins pour identifier l'auteur du crime.</li>
            </ul>
        </div>
    </div>
`;

// Contenu de la page Victime
const VICTIME_CONTENT = `
    <div>
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
                    <li><strong>Profession :</strong> Professeure d'anglais.</li>
                    <li><strong>Dernière vue :</strong> Jeudi 14 novembre, 23h00 (par son voisin).</li>
                    <li class="clickable" data-note="Madeline avait un conflit bien connu avec sa voisine à propos des aboiements de son chien qui pouvaient durer des nuits entières."><strong>Conflits récents :</strong> Hannah Leroux.</li>
                </ul>
            </div>
        </div>
        <div class="info-section">
            <h3>Contexte Social</h3>
            <p>Madeline Shaw était très apprécié par ses collègues professeurs et ses élèves. De plus, elle était bien connue dans la ville, ces articles dans la gazette locale avait de beaucoup de succès. Elle venait, d'ailleurs, de terminer un article acerbe sur les pratiques d'un promoteur local Ryan Kessler.</p>
            <ul>
                <li class="clickable" data-note="Indice pour l'enquête : elle n'était pas mariée, pas d'enfants. Ses bénéficiaires sont des associations.">Situation familiale : Célibataire.</li>
                <li class="clickable" data-note="Ses habitudes : Café au lait tous les matins, promenades dans le parc municipal et acheter son pain chez la boulangère.">Habitudes : Très régulières.</li>
            </ul>
        </div>
    </div>
`;

// Contenu de la page Suspects (AJOUT DE DISSONANCE SUR L'ALIBI DE KESSLER)
const SUSPECTS_CONTENT = `
    <div>
        <h2>Fiche Suspects Initiaux</h2>
        <p>Quatre individus présentant un lien avec la victime ou la scène ont été identifiés par la police. Leurs profils sont mis à jour après la première série d'interrogatoires réalisée par les prédécents enquêteurs.</p>

        <div class="suspects-container">

            <!-- Suspect A - Evan Reed -->
            <div class="suspect-card">
                <img src="https://via.placeholder.com/150x200/151e29/4aa3ff?text=Evan+Reed" alt="Evan Reed">
                <h3>Evan Reed (25 ans)</h3>
                <ul>
                    <li class="clickable">Profession : Livreur UPS</li>
                    <li class="clickable" data-note="Vu près de la maison de Madeline la veille du meurtre. Il effectuait la livraison d'un colis bel et bien commandé par Mme Shaw.">Lien avec la victime : Dernière personne à avoir vu Mme Shaw vivante.</li>
                    <li class="clickable" data-note="Comportement impulsif lors de l'interrogatoire, et quelques contradictions.">Profil psychologique : Impulsif</li>
                    <li class="clickable" data-note="Alibi non vérifiable">Alibi : Il jouait aux jeux vidéos en ligne avec ses amis.</li>
                </ul>
            </div>

            <!-- Suspect B - Hannah Leroux -->
            <div class="suspect-card">
                <img src="https://via.placeholder.com/150x200/151e29/4aa3ff?text=Hannah+Leroux" alt="Hannah Leroux">
                <h3>Hannah Leroux (62 ans)</h3>
                <ul>
                    <li>Profession : Voisine directe</li>
                    <li class="clickable" data-note="Conflit léger avec Madeline (chien, places de parking).">Lien avec la victime : Voisine</li>
                    <li class="clickable" data-note="Anxiosité et agressivité latente durant l'interrogatoire. manque d'enphatie pour la victime. Appels multiples à la police pour des plaintes minimes.">Profil psychologique : Anxieuse, impulsive</li>
                    <li class="clickable" data-note="Alibi faible mais non impossible.">Alibi : Elle a l'habitude d'aller à la cueillette aux champignons à ces heures-ci, habitudes confirmé par plusieurs habitants du quartier. </li>
                </ul>
            </div>

            <!-- Suspect C - Jonah Miller -->
            <div class="suspect-card">
                <img src="https://via.placeholder.co/150x200/151e29/4aa3ff?text=Jonah+Miller" alt="Jonah Miller">
                <h3>Jonah Miller (17 ans)</h3>
                <ul>
                    <li>Profession : Lycéen</li>
                    <li class="clickable" data-note="Élève soutenu psychologiquement par Madeline, réaction émotionnelle excessive à un rejet affectif.">Lien avec la victime : Élève</li>
                    <li class="clickable" data-note="Profil fragile, en crise émotionnelle. Absent en cours le jour du meurtre, il raconte être resté chez lui pour cause de crise soudaine d'angoisse. Sous pression lors de l’interrogatoire, il a eu beaucoup de mal à répondre aux questions posées.">Profil psychologique : Fragile, sensible</li>
                    <li class="clickable" data-note="Alibi non vérifiable ">Alibi : Aucun</li>
                </ul>
            </div>

            <h2>Suspects</h2>

<div id="add-suspect-box">
    <input type="text" id="suspect-input" placeholder="Ajouter un suspect...">
    <button onclick="addSuspect()">Ajouter</button>
</div>

<div class="suspects-container" id="suspect-list">

    <!-- Suspect A -->
    <div class="suspect-card">
        <img src="https://via.placeholder.com/150x200?text=Evan+Reed">
        <h3>Evan Reed</h3>
        <ul>
            <li>Âge : 25</li>
            <li>Profession : Livreur UPS</li>
            <li>Lien : Livraisons régulières</li>
        </ul>

        <div class="alibi-container">
            <span class="alibi-btn" onclick="toggleAlibi(this)">➤ Alibi</span>
            <p class="alibi-text">Evan affirme qu'il était en pause dans son camion, mais son GPS contredit légèrement ses horaires.</p>
        </div>
    </div>

    <!-- Suspect B -->
    <div class="suspect-card">
        <img src="https://via.placeholder.com/150x200?text=Hannah+Leroux">
        <h3>Hannah Leroux</h3>
        <ul>
            <li>Âge : 33</li>
            <li>Profession : Voisine</li>
            <li>Lien : Conflits légers</li>
        </ul>

        <div class="alibi-container">
            <span class="alibi-btn" onclick="toggleAlibi(this)">➤ Alibi</span>
            <p class="alibi-text">Elle dit être restée chez elle toute la journée, mais aucun témoin ne confirme.</p>
        </div>
    </div>

    <!-- Suspect C -->
    <div class="suspect-card">
        <img src="https://via.placeholder.com/150x200?text=Jonah+Miller">
        <h3>Jonah Miller</h3>
        <ul>
            <li>Âge : 17</li>
            <li>Profession : Lycéen</li>
            <li>Lien : Élève de la victime</li>
        </ul>

        <div class="alibi-container">
            <span class="alibi-btn" onclick="toggleAlibi(this)">➤ Alibi</span>
            <p class="alibi-text">Jonah affirme qu'il se promenait en forêt pour se "changer les idées".</p>
        </div>
    </div>

</div>

            <!-- Suspect D - Ryan Kessler (ALIBI FAIBLE/FAUX) -->
            <div class="suspect-card">
                <img src="https://via.placeholder.co/150x200/151e29/4aa3ff?text=Ryan+Kessler" alt="Ryan Kessler">
                <h3>Ryan Kessler (42 ans)</h3>
                <ul>
                    <li>Profession : Propriétaire immobilier</li>
                    <li class="clickable" data-note="Madeline avait dénoncé l’état d’une de ses maisons.">Lien avec la victime : Propriétaire mécontent</li>
                    <li class="clickable" data-note="Colérique mais organisé. L'enquête a prouvé que son alibi au restaurant était en fait pour 19h. Il avait 3 heures de battement entre 16h et 19h.">Profil psychologique : Organisé, colérique, cupide</li>
                    <li class="clickable" data-note="**ALERTE :** L'alibi est défectueux. Il avait le temps d'agir. Ne pas le relâcher trop vite.">Indices : Alibi défectueux !</li>
                </ul>
            </div>

        </div>
    </div>
`;


// Contenu de la page Scène de crime (AJOUT D'UN NOUVEL INDICE)
const SCENE_CONTENT = `
    <div>
        <h2>Scène de crime : Maison de Madeline Shaw </h2>

        <div class="scene-container">

            <!-- Image globale de la maison -->
            <div class="scene-image">
                <img src="./maison_victime.jpg" alt="Plan de la Scène de Crime" usemap="#scene-map">
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
                <!-- NOUVEL INDICE : Bouton UPS (560, 280) -->
                <area shape="circle" coords="560, 280, 25" href="#" class="clickable" data-note="**INDICE CRUCIAL** : Un bouton d'uniforme de service de messagerie (UPS) a été trouvé dans la boue près de la porte arrière. Ce bouton a été arraché lors de la fuite. C'est un lien direct avec Evan Reed.">
            </map>

        </div>

        <div class="info-section">
            <h3>Synthèse de l'Unité Technique</h3>
            <p>L'analyse de la scène indique un crime de nature impulsive et non préméditée, mais potentiellement dissimulé par une fuite organisée.</p>
            <ul>
                <li class="clickable" data-note="L'arme du crime n'a pas été retrouvée. Elle a été emportée par le tueur.">Arme du crime : Non présente sur la scène.</li>
                <li class="clickable" data-note="Les indices suggèrent que le tueur connaissait la maison et n'a pas eu besoin d'entrer par effraction par la porte principale.">Accès : Possiblement par la porte arrière ou une entrée non verrouillée.</li>
                <li class="clickable" data-note="Un petit objet étranger a été trouvé près de la zone de fuite. Voir la carte et la section Indices pour le détail.">Nouvelle piste découverte (Indice I-006).</li>
            </ul>
        </div>
    </div>
`;

// Contenu de la page Témoins
const TEMOINS_CONTENT = `
    <div>
        <h2>Témoin : Arthur "Art" Gladstone</h2>

        <div class="info-section">
            <p>Arthur Gladstone, 72 ans, est le voisin qui a alerté la police. Les élèves peuvent cliquer sur les éléments ci-dessous pour obtenir ses observations détaillées.</p>

            <ul>
                <li class="clickable" data-note="Arthur a vu un homme immobile devant la maison jeudi soir → probable Evan Reed. Il portait un uniforme marron.">Homme immobile jeudi soir (avant le meurtre)</li>
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
    </div>
`;

// Contenu de la page Chronologie
const CHRONOLOGIE_CONTENT = `
    <div>
        <h2>Chronologie de l’affaire</h2>

        <div class="chronologie-container">
            <p>La chronologie rassemble tous les événements importants de l’enquête. Cliquez sur chaque élément pour obtenir des détails supplémentaires.</p>

            <!-- Timeline -->
            <div class="timeline-wrapper">
                <ul>
                    <li class="clickable timeline-item" data-note="Jeudi soir : Arthur Gladstone aperçoit un homme immobile devant la maison → probable Evan Reed (Livreur) en uniforme.">
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
                    <li class="clickable timeline-item" data-note="Samedi : scène de crime sécurisée et premiers relevés. L'ADN Inconnu A est prélevé. L'indice I-006 (bouton) est trouvé près de la porte arrière.">
                        <span class="timeline-time">Samedi</span> : Sécurisation et relevés initiaux
                    </li>
                    <li class="clickable timeline-item" data-note="Dimanche : prélèvements ADN et analyses d’indices (Terre, Mug, Bouton) envoyés au laboratoire. Début de l'identification de l'ADN Inconnu A.">
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
    </div>
`;


// Contenu de la page Interrogatoires
const INTERROGATOIRES_CONTENT = `
    <div>
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
                    <li class="clickable" data-note="Evan Reed (Livreur) — suspect impulsif, nerveux, vu la veille. Il ment sur son emploi du temps de vendredi après-midi. Le forcer à détailler ses livraisons. **Interrogez-le sur son uniforme !**">Evan Reed</li>
                    <li class="clickable" data-note="Hannah Leroux (Voisine) — sera trop coopérative. La mettre face au fait qu'elle n'a pas vu de voiture s'en aller (Témoin).">Hannah Leroux</li>
                    <li class="clickable" data-note="Jonah Miller (Lycéen) — lycéen fragile, émotionnel. Ses messages de menaces sont une fausse piste (ne pas le relâcher complètement, mais se concentrer sur l'ADN).">Jonah Miller</li>
                    <li class="clickable" data-note="Ryan Kessler (Promoteur) — Alibi défectueux ! Le forcer à détailler ses activités entre 16h et 19h.">Ryan Kessler</li>
                </ul>

                <p class="final-instruction">Les élèves doivent utiliser ces techniques pour guider leur enquête et tester les alibis des suspects. L'ADN est la clé pour relâcher les innocents.</p>
            </div>
        </div>
    </div>
`;


// Contenu de la page Autopsie (Verrouillé par code)
const AUTOPSIE_CONTENT = `
    <div>
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
    </div>
`;

// Contenu de la page ADN (Verrouillé par code)
const ADN_CONTENT = `
    <div>
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
    </div>
`;


// Contenu de la page Indices (AJOUT DE L'INDICE CRUCIAL)
const INDICES_CONTENT = `
    <div>
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
                    <tr>
                        <td>I-006C</td>
                        <td>Bouton d'uniforme</td>
                        <td>Porte arrière (boue extérieure).</td>
                        <td class="clickable" data-note="Bouton d'uniforme de la compagnie de messagerie UPS. Evan Reed est livreur UPS. Ce bouton a été arraché lors de sa fuite par l'arrière. Preuve matérielle de sa présence.">Lien direct avec le suspect Evan Reed.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="info-section">
            <h3>Piste à Explorer</h3>
            <p class="clickable" data-note="L'ensemble des indices matériels (Lampe brisée, Terre, Empreinte et Bouton) est cohérent avec une intrusion rapide et une agression impulsive, puis une fuite par la porte arrière.">Recouper les indices de la scène avec le profil psychologique d'Evan Reed.</p>
        </div>
    </div>
`;


// Dictionnaire des pages
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


// ====================================================================
// --- LOGIQUE DE L'APPLICATION
// ====================================================================

// Fonction pour afficher la note de police
function showNote(e) {
    e.preventDefault(); 
    
    // Assurez-vous d'obtenir l'élément cliquable (pour gérer les <li>, <td>, etc.)
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


// Fonction pour gérer le clic sur les éléments de la carte (Image Map)
function handleMapClick(e) {
    e.preventDefault(); 
    
    const img = e.target;
    // S'assurer que l'élément cliqué est bien l'image et qu'elle a un usemap
    if (!img.getAttribute('usemap')) return; 

    const mapName = img.getAttribute('usemap').substring(1);
    const mapElement = document.querySelector(`map[name="${mapName}"]`);

    if (mapElement) {
        const areas = mapElement.querySelectorAll('area');
        let closestArea = null;
        let minDistance = Infinity;

        // Calculer l'offset du clic (pour les navigateurs qui ne le fournissent pas directement)
        const rect = img.getBoundingClientRect();
        const scaleX = img.naturalWidth / rect.width;
        const scaleY = img.naturalHeight / rect.height;
        const clickX = (e.clientX - rect.left) * scaleX;
        const clickY = (e.clientY - rect.top) * scaleY;

        areas.forEach(area => {
            const coords = area.coords.split(',').map(Number);
            
            // Logique de détection de clic pour les cercles
            if (area.shape === 'circle') {
                const [cx, cy, r] = coords;
                const distance = Math.sqrt(Math.pow(clickX - cx, 2) + Math.pow(clickY - cy, 2));

                if (distance <= r && distance < minDistance) {
                    minDistance = distance;
                    closestArea = area;
                }
            }
            // Logique de détection de clic pour les rectangles
            if (area.shape === 'rect') {
                const [x1, y1, x2, y2] = coords;
                if (clickX >= x1 && clickX <= x2 && clickY >= y1 && clickY <= y2) {
                    closestArea = area;
                }
            }
        });

        if (closestArea) {
             const note = closestArea.getAttribute('data-note');
             if (note) {
                 const notePoliceDiv = document.getElementById('note-police');
                 if (notePoliceDiv) {
                     notePoliceDiv.innerHTML = `<p><strong>Note de la Scène de Crime :</strong> ${note}</p>`;
                     notePoliceDiv.classList.add('active-note');
                 }
             }
        }
    }
}

// Fonction pour activer les listeners sur les nouveaux éléments chargés
function activateClickableElements() {
    // Éléments cliquables (texte, li, td)
    const clickableElements = document.querySelectorAll('#content .clickable');
    clickableElements.forEach(el => {
        // Supprimer l'ancien listener pour éviter les duplications
        el.removeEventListener('click', showNote);
        el.addEventListener('click', showNote);
    });

    // Éléments de la Map (area) - Le listener est sur l'image elle-même
    const sceneImage = document.getElementById('content').querySelector('.scene-image img');
    if (sceneImage) {
        // IMPORTANT: Supprimer l'ancien listener pour éviter l'exécution multiple
        sceneImage.removeEventListener('click', handleMapClick); 
        sceneImage.addEventListener('click', handleMapClick);
    }
}


// Fonction pour vérifier l'état de déverrouillage (utilise localStorage)
function checkUnlockStatus(page) {
    // Initialise l'état si non défini
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
            // Réactiver les listeners sur le contenu déverrouillé
            activateClickableElements(); 
        } else {
            lockedDiv.style.display = 'block';
            unlockedDiv.style.display = 'none';
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
        if (messageElement) {
            messageElement.textContent = 'Accès accordé. Contenu déverrouillé !';
            messageElement.style.color = '#4ef0c3';
        }
        // Recharge la page après un court délai pour afficher le contenu déverrouillé
        setTimeout(() => loadPage(page), 500); 

    } else {
        localStorage.setItem(`${page}Unlocked`, 'false');
        if (messageElement) {
            messageElement.textContent = 'Code incorrect. Veuillez réessayer.';
            messageElement.style.color = '#ff7f7f';
        }
    }
}


// Fonction principale pour charger le contenu
function loadPage(pageName) {
    const contentDiv = document.getElementById('content');
    
    // Mise à jour de la classe active du bouton
    document.querySelectorAll('.dashboard button').forEach(button => {
        if (button.getAttribute('onclick').includes(`'${pageName}'`)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Injection du nouveau contenu
    contentDiv.innerHTML = pages[pageName]; 
    
    // Réinitialiser la zone de note de police (qui est statique)
    const notePoliceDiv = document.getElementById('note-police');
    if (notePoliceDiv) {
        notePoliceDiv.innerHTML = '<p>Cliquez sur un élément pour voir les détails.</p>';
        notePoliceDiv.classList.remove('active-note');
    } 
    
    // Activer les listeners pour les éléments cliquables sur la nouvelle page chargée
    activateClickableElements();

    // Vérifier l'état de déverrouillage au chargement de la page si nécessaire
    if (pageName === 'autopsie' || pageName === 'adn') {
        checkUnlockStatus(pageName);
    }
    if (page === "suspects") {
    document.getElementById("add-suspect-box").style.display = "block";
    } else {
        document.getElementById("add-suspect-box").style.display = "none";
    }

}


// Chargement initial et configuration des écouteurs d'événements
document.addEventListener('DOMContentLoaded', () => {
    // Rendre les fonctions et constantes nécessaires accessibles globalement
    window.attemptUnlock = attemptUnlock;
    window.loadPage = loadPage;
    window.AUTOPSIE_CODE = AUTOPSIE_CODE;
    window.ADN_CODE = ADN_CODE;

    localStorage.setItem(`autopsieUnlocked`, 'false');
    localStorage.setItem(`adnUnlocked`, 'false');

    // Charger la page d'accueil par défaut
    loadPage('home');
});

function toggleAlibi(element) {
    const alibiText = element.nextElementSibling;
    alibiText.style.display = (alibiText.style.display === "block") ? "none" : "block";
}

function addSuspect() {
    const input = document.getElementById("suspect-input");
    const name = input.value.trim();

    if (name.toLowerCase() === "ryan kessler") {

        const newSuspect = `
        <div class="suspect-card" id="suspect-ryan">
            <img src="https://via.placeholder.com/150x200?text=Ryan+Kessler">
            <h3>Ryan Kessler</h3>
            <ul>
                <li>Âge : 42</li>
                <li>Profession : Propriétaire immobilier</li>
                <li>Lien : Conflit professionnel avec Madeline</li>
            </ul>

            <div class="alibi-container">
                <span class="alibi-btn" onclick="toggleAlibi(this)">➤ Alibi</span>
                <p class="alibi-text">Ryan était au restaurant avec plusieurs témoins. Alibi solide.</p>
            </div>
        </div>
        `;

        // Ajout dans la liste
        document.getElementById("suspect-list").insertAdjacentHTML("beforeend", newSuspect);

        input.value = "";
        alert("Suspect ajouté : Ryan Kessler");
    }
}
