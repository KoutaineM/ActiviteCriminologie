// ====================================================================
// --- CONSTANTES DE CONTENU DE PAGE (simule le chargement de fichiers)
// ====================================================================

// --- CODES DE DÉVERROUILLAGE (à partager avec le Game Master)
const AUTOPSIE_CODE = '851AU';
const ADN_CODE = '851AD';
const SCENE_CODE = '851SC';


// Contenu de la page d'accueil
const HOME_CONTENT = `
    <div>
        <h2>Accueil du Dossier - ENQUÊTE N°851</h2>
        <p><strong>Affaire :</strong> Meurtre de Madeline Shaw, 48 ans.</p>
        <p><strong>Lieu :</strong> 124, Chemin des Arbres Silencieux, banlieue Ouest.</p>
        <p><strong>Date de découverte :</strong> Vendredi 15 novembre, 17h30.</p>
        
    
        <div class="info-section">
            <h3>Contexte de l'enquête</h3>

            <p>
                Madeline Shaw, professeure d’anglais de 38 ans, a été retrouvée morte dans le salon de sa maison. 
                Son décès est dû à un traumatisme contondant au crâne, causé par un objet encore non identifié. 
            </p>

            <p>
                Le dossier n’est pas vierge : une première équipe d’enquêteurs avait commencé à avancer, mais après 
                plusieurs menaces anonymes et un cambriolage de leur véhicule de service, ils ont préféré abandonner l’affaire. 
                Votre équipe reprend donc les éléments déjà collectés… avec la mission d’aller jusqu’au bout.
            </p>

            <p>
                Les rapports d’autopsie et d’analyses ADN sont encore en cours. Ils arriveront plus tard dans l’enquête, 
                et seront déterminants pour éliminer plusieurs pistes.
            </p>

            <h3>Éléments collectés avant votre arrivée</h3>

            <h4>Témoin : Arthur "Art" Gladstone</h4>

            <div class="info-section">
                <p>Arthur Gladstone, 72 ans, est le voisin qui a alerté la police.</p>

                <ul>
                    <li class="clickable" data-note="Arthur a vu un homme immobile devant la maison jeudi soir.">Homme immobile jeudi soir (avant le meurtre)</li>
                    <li class="clickable" data-note="Un bruit brusque vendredi vers 16h. Heure estimée du meurtre : 16h00 - 16h30.">Bruit brusque vendredi (jour du meurtre)</li>
                    <li class="clickable" data-note="Il a vu une silhouette sortir par la porte arrière, trop vite pour identifier → suspect potentiel.">Silhouette sortie par la porte arrière</li>
                    <li class="clickable" data-note="Aucun véhicule n’a démarré, donc le suspect est probablement parti à pied.">Aucun véhicule aperçu (départ du suspect)</li>
                </ul>
            </div>

            <h4>Suspects Potentiels</h4>

            <div class="info-section">
            <p>L’équipe précédente avait aussi dressé une liste élargie de personnes potentiellement liées à la victime. 
            Certaines pistes semblent sérieuses… d’autres beaucoup moins, mais elles font tout de même partie du dossier.</p>

            <h4>Personnes listées dans le dossier initial :</h4>

            <ul>

                <li class="clickable" data-note="Conflits minimes : nuisances sonores, chien, parking. Aucun antécédent violent connu. Avec son passé de rugbyman, de dos, sa carrure est semblable à celle d'un homme.">
                    <b>Hannah Leroux</b> – Voisine directe
                </li>

                <li class="clickable" data-note="Vieil ami de la victime. Leur dispute portait sur un manuscrit qu'il voulait qu'elle relise. Caméra d’un bar confirme sa présence ailleurs.">
                    <b>Samuel Avery</b> – Ami écrivain
                </li>

                <li class="clickable" data-note="Livreuse occasionnelle. Une caméra de rue confirme qu’elle n’était pas dans le secteur au moment du meurtre.">
                    <b>Jessica Dawkins</b> – Chauffeuse-livreuse
                </li>

                <li class="clickable" data-note="Ex-petite amie de John. Elle était jalouse de la relation élève-prof trop proche, mais elle était en internat à plus de 60 km.">
                    <b>Chloe Hart</b> – Lycéenne
                </li>

                <li class="clickable" data-note="Élève fragile émotionnellement. La victime était un soutien important pour lui. Aucun motif clair, mais comportement instable.">
                    <b>Jonhn iller</b> – Élève de Madeline
                </li>

                <li class="clickable" data-note="Dénoncé par la victime pour l’état de ses locations. Mobile financier possible.">
                    <b>Ryan Kessler</b> – Promoteur immobilier
                </li>

                <li class="clickable" data-note="Collègue enseignant qui s’opposait parfois à Madeline sur des choix pédagogiques. Aucun antécédent violent.">
                    <b>Paul Brenner</b> – Professeur d’histoire
                </li>

                <li class="clickable" data-note="Étudiant turbulent renvoyé par la victime l’an dernier. Le dossier note qu’il était à un tournoi de basket le jour J.">
                    <b>Liam Cooper</b> – Ancien élève
                </li>

                <li class="clickable" data-note="Livreur souvent présent dans le quartier. Trois témoins confirment qu’il discutait parfois un peu trop longtemps avec la victime.">
                    <b>Evan Reed</b> – Livreur UPS
                </li>

                <li class="clickable" data-note="Propriétaire d’un chat que la victime nourrissait régulièrement. Aucun mobile. Elle l’aimait beaucoup et l’aidait souvent.">
                    <b>Margaret Ellis</b> – Voisine âgée
                </li>

            </ul>
            </div>

            <p>
                Certaines de ces personnes n'ont aucun lien direct avec le meurtre mais ont été mentionnées dans 
                divers témoignages, rumeurs ou signalements. Il appartient à votre équipe d’enquête de faire le tri, 
                d'écarter les fausses pistes et de concentrer les efforts sur les suspects pertinents.
            </p>

        </div>


        <div>
            

            <div class="info-section">
                <h3>Fiche acteur pour animateur (GM)</h3>
                <ul>
                    <li class="clickable" data-note="Attitude à jouer : très bavard, aime donner des détails inutiles, un peu paranoïaque.">Attitude à jouer</li>
                    <li class="clickable" data-note="Informations à révéler seulement si les élèves posent les bonnes questions : casquette UPS (lien potentiel avec Evan Reed), porte mal fermée, aucun véhicule.">Informations à révéler (détails supplémentaires)</li>
                </ul>
            </div>
        </div>
        <div>
            <div class="info-section">
                <h3>Instructions pour les Joueurs</h3>
                <ul>
                    <li>Utilisez le menu ci-dessus pour naviguer dans les éléments du dossier accessibles (Home, Victime, Chronologie, Suspects, Profils Psychologiques).</li>
                    <li>Cherchez les éléments "cliquables" (texte en bleu) pour révéler des notes laissées par les enquêteurs précédents, qui peuvent vous donner des indices ou des informations complémentaires.</li>
                    <li>Recoupez les informations des Suspects, de la Scène de crime, du Rapport d'Autopsie et des Relevés ADN pour identifier l'auteur du crime.</li>
                </ul>
            </div>
        </div>

        <br>
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
                    <li class="clickable" data-note="Madeline avait un conflit bien connu avec sa voisine à propos des aboiements de son chien qui pouvaient durer des nuits entières."><strong>Conflits connus et récents :</strong> Hannah Leroux.</li>
                </ul>
            </div>
        </div>
        <div class="info-section">
            <h3>Contexte Social</h3>
            <p>Madeline Shaw était très appréciée par ses collègues du lycée d’Ashland, aussi bien par les professeurs que par les élèves. Enseignante depuis plus de dix ans, elle s’était forgée une réputation solide : patiente, investie, passionnée par la littérature et toujours disponible pour accompagner les élèves en difficulté.
            Son implication lui avait notamment valu la reconnaissance de Jonah Miller, un élève fragile que la professeure aidait régulièrement. </p>

            <p>Au sein de l’établissement, plusieurs collègues partageaient une relation amicale avec elle. Paul Brenner, professeur d’histoire, échangeait souvent avec elle sur les événements culturels locaux et les projets pédagogiques. Claire Benton, documentaliste du lycée, appréciait son engagement auprès des élèves et collaborait fréquemment avec elle pour les clubs lecture ou les ateliers d’écriture.</p>

            <p>Beaucoup de résidents de la ville connaissaient aussi Madeline grâce à ses chroniques publiées dans la Gazette d’Ashland, un journal local dans lequel elle écrivait des articles littéraires, mais aussi parfois des billets d’humeur plus acérés.
            L’un de ses derniers articles, vivement commenté sur les réseaux locaux, dénonçait les pratiques jugées douteuses d’un promoteur immobilier de la région : Ryan Kessler. Elle y mettait en cause plusieurs négligences sur des logements insalubres, ce qui lui avait valu tension et hostilité de la part de l’homme d’affaires.</p>

            <p>Madeline entretenait également de bonnes relations avec plusieurs habitants du quartier où elle vivait.
            Sa voisine âgée, Margaret Ellis, lui demandait souvent de nourrir son chat lorsqu’elle partait rendre visite à sa famille. Plus loin dans la rue, Samuel Avery, un ami écrivain, lui faisait régulièrement lire des chapitres de ses manuscrits. Ils avaient récemment eu une dispute bénigne au sujet d’un passage qu’elle jugeait maladroit, mais rien n’indiquait une réelle animosité.</p>

            <p>Malgré sa bienveillance générale, Madeline attirait aussi des personnes plus vulnérables ou instables :
            un ancien élève turbulent, Liam Cooper, avait été renvoyé l’an dernier après un incident disciplinaire, et certains collègues estimaient qu’elle « prenait trop à cœur les détresses émotionnelles » de certains étudiants, ce qui aurait pu créer des dépendances psychologiques chez eux.</p>

            <p>Au lycée, des rumeurs circulaient également selon lesquelles Chloe Hart, l’ex-petite amie de John, vivait mal la proximité entre le jeune homme et la professeure, même si la piste semble mince.</p>

            <p>Enfin, plusieurs habitants rapportent qu’elle attirait parfois “des inconnus un peu perdus”, des personnes en difficulté psychologique qui lui demandaient de l’aide. Le nom d’un homme, Briana Holt, une ancienne patiente d’un centre de réhabilitation du quartier, revient dans deux dépositions ; mais aucune interaction menaçante n’a été recensée.</p>
            <ul>
                <li class="clickable" data-note="Indice pour l'enquête : elle n'était pas mariée, pas d'enfants. Ses bénéficiaires sont des associations.">Situation familiale : Célibataire.</li>

                <li class="clickable" 
                data-note="Ses habitudes : Tisanes dans l'après-midi, promenades quotidiennes dans le parc municipal et acheter son pain tous les matins chez la boulangère. Elle avait aussi l'habitude de commander ces livres par Internet puis de se les faire livrer.">
                Habitudes : Très régulières —
                <span class="inline-link" onclick="openHistoriqueLivraisons()">Historique des livraisons</span>
</li>

</li>
            </ul>
        </div>
    </div>
`;

// Contenu de la page Suspects (AJOUT DE DISSONANCE SUR L'ALIBI DE KESSLER)
const SUSPECTS_CONTENT = `
<h2>Suspects Principaux</h2>

<p>Quatre individus présentant un lien avec la victime ou la scène ont été identifiés par la police. Leurs profils sont mis à jour après la première série d'interrogatoires réalisée par les prédécents enquêteurs.</p>
<p>Le capitaine vous a donné sa confiance pour boucler l'enquête et identifier le coupable. Cependant, il veut être sûr que vous ayez vraiment les épaules pour réaliser la suite : l'Interrogatoire, la Scène de Crime et le Dossier d'Autopsie.</p>
<p>Il vous demande donc de trouver vous-même les 4 suspects principaux en analysant les informations déjà disponibles. Bonne chance !</p> 

<div id="add-suspect-box">
    <input type="text" id="suspect-input" placeholder="Ajouter un suspect...">
    <button onclick="addSuspect()">Ajouter</button>
</div>

<div class="suspects-container" id="suspect-list">
</div>

`;


// Contenu de la page Scène de crime (AJOUT D'UN NOUVEL INDICE)
const SCENE_CONTENT = `

    <h2>Scène de crime : Maison de Madeline Shaw </h2>

    <div>

        <div id="scene-locked" class="report-locked">
                <h3>ACCÈS RESTREINT</h3>
                <p>Ce rapport contient des informations sensibles. Un code de sécurité est nécessaire pour y accéder.</p>
                <input type="text" id="unlock-code-scene" placeholder="Entrez le code de déverrouillage">
                <button id="unlock-btn-scene" onclick="attemptUnlock('scene', SCENE_CODE)">Déverrouiller</button>
                <p id="unlock-message-scene" style="color: #ff7f7f; margin-top: 10px;"></p>
        </div>
        
        <div id="scene-content-unlocked" class="report-content" style="display: none;">


            <div class="scene-table-container">

                <h3>Inventaire des preuves retrouvées</h2>

                <table class="indices-table">
                    <thead>
                        <tr>
                            <th>Code Preuve</th>
                            <th>Élément</th>
                            <th>Localisation</th>
                            <th>Analyse des Experts</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>I-008N</td>
                            <td>Porte entre ouverte</td>
                            <td>Entrée de la maion</td>
                            <td class="clickable" data-note="La porte de la maison est toujours ouverte mais ne présente aucune trace d'effraction et la serrure n'est pas fermée.">
                                Piste supplémentaire.
                            </td>
                        </tr>

                        <tr>
                            <td>I-009A</td>
                            <td>Colis Vide</td>
                            <td>Entrée de la maison</td>
                            <td class="clickable" data-note="Un colis vide a été retrouvée proche de la porte. Il semble ne jamais avoir rien contenu. C'est étrange...">
                                Entrée facile.
                            </td>
                        </tr>

                        <!-- Fusion : Éraflures cutanées -->
                        <tr>
                            <td>I-005S</td>
                            <td>Éraflures cutanées</td>
                            <td>Avant-bras droit de la victime</td>
                            <td class="clickable" data-note="Éraflures indiquant un mouvement de défense.">
                                Preuve de défense de la victime.
                            </td>
                        </tr>

                        <!-- Fusion : Lampe -->
                        <tr>
                            <td>I-001A</td>
                            <td>Lampe sur pied (brisée)</td>
                            <td>Salon (près du corps)</td>
                            <td class="clickable" data-note="Lampe brisée en porcelaine avec trace de choc récente sur un angle. L'objet a pu être utilisé comme arme. Des micro-traces de verre sont présentes au sol.">
                                Compatible avec arme du crime.
                            </td>
                        </tr>

                        <!-- Fusion : Pile de livres -->
                        <tr>
                            <td>I-001B</td>
                            <td>Pile de livres renversée</td>
                            <td>Salon</td>
                            <td class="clickable" data-note="Livres tombés au sol proche de la table. Il en reste quelques uns sur la table. Signe de lutte impulsive ou d'une bousculade. Aucun vol constaté.">
                                Indice de lutte désorganisée.
                            </td>
                        </tr>

                        <!-- Fusion : Plante brisée -->
                        <tr>
                            <td>I-002T</td>
                            <td>Plante brisée + terre fine</td>
                            <td>Sous la table + sol salon</td>
                            <td class="clickable" data-note="Deux plantes brisées sur sept. Terre projetée sur 30 cm. Confirme une lutte désorganisée">
                                Mouvement brusque + terre analysée.
                            </td>
                        </tr>

                        <!-- Fusion : Mug cassé -->
                        <tr>
                            <td>I-004V</td>
                            <td>Mug en céramique (cassé)</td>
                            <td>Sous la table du salon</td>
                            <td class="clickable" data-note="Mug fracturé, éclats dans un rayon d’un mètre. Objet de la victime. Le contenu, une tisane à la camomille a été renversée. Signe d’un geste impulsif.">
                                Mug renversé et brisé lors de la lutte.
                            </td>
                        </tr>

                        <tr>
                            <td>I-006D</td>
                            <td>Vêtements tachés</td>
                            <td>Sur la victime dans le salon</td>
                            <td class="clickable" data-note="La tisane semble s'être renversée sur les vêtements de Madeline Shaw pendant la lutte">
                                Lutte désorganisée.
                            </td>
                        </tr>

                        <!-- Fusion : Porte arrière -->
                        <tr>
                            <td>I-003P</td>
                            <td>Porte arrière non verrouillée</td>
                            <td>Porte arrière</td>
                            <td class="clickable" data-note="Porte mal fermée et terre similaire aux plantes en pots brisés. Probable voie de fuite du tueur. Le témoin a vu une silhouette sortir par cette porte. Il semblait connaitre les alentours de la maison">
                                Voie de fuite probable.
                            </td>
                        </tr>

                        <!-- Fusion : Empreinte -->
                        <tr>
                            <td>I-003E</td>
                            <td>Empreinte de chaussure (taille 42)</td>
                            <td>Boue extérieure (porte arrière)</td>
                            <td class="clickable" data-note="Semelle standard. Taille 42. Compatible avec plusieurs suspects.">
                                Indice non discriminant.
                            </td>
                        </tr>

                        <!-- Fusion : Bouton UPS -->
                        <tr>
                            <td>I-006C</td>
                            <td>Bouton de chemise/uniforme</td>
                            <td>Boue extérieure, porte arrière</td>
                            <td class="clickable" data-note="Bouton arraché lors d’une fuite.">
                                Lien matériel.
                            </td>
                        </tr>

                        <!-- Synthèse Unité Technique intégrée en éléments matériels -->


                    </tbody>
                </table>
            </div>
        
        </div>
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
                    <li class="clickable timeline-item" data-note="Jeudi soir : Arthur Gladstone aperçoit un homme immobile devant la maison">
                        <span class="timeline-time">Jeu. Soir (23h00)</span>Observation du voisin
                    </li>
                    <li class="clickable timeline-item" data-note="Vendredi matin : Madeline aperçue au supermarché, rentre chez elle. Dernière trace de vie certaine.">
                        <span class="timeline-time">Ven. Matin</span>Activité de la victime
                    </li>
                    <li class="clickable timeline-item highlight" data-note="Vendredi entre 15h45 et 17h00 : Heure estimée par le témoignage du bruit. C'est la fenêtre de temps critique.">
                        <span class="timeline-time">Ven. 15h45 - 17h00</span>DÉCÈS DE MADELINE SHAW
                    </li>
                    <li class="clickable timeline-item" data-note="Vendredi vers 16h : bruit brusque signalé par le voisin (Hannah Leroux le confirme).">
                        <span class="timeline-time">Ven. ~16h00</span>Bruit suspect
                    </li>
                    <li class="clickable timeline-item" data-note="Vendredi fin d’après-midi : Voisin appelle la police après avoir remarqué la porte arrière mal fermée et l'absence de la victime.">
                        <span class="timeline-time">Ven. 17h30</span>Découverte du corps et appel à la police
                    </li>
                    <li class="clickable timeline-item" data-note="Samedi : scène de crime sécurisée et premiers relevés. Des traces d'ADN sont prélevées.">
                        <span class="timeline-time">Samedi</span>Sécurisation et relevés initiaux
                    </li>
                    <li class="clickable timeline-item" data-note="Dimanche : prélèvements ADN et analyses d’indices (Terre, Mug, Bouton) envoyés au laboratoire. Début de l'identification de l'ADN Inconnu A.">
                        <span class="timeline-time">Dimanche</span>Prélèvements ADN & Indices
                    </li>
                    <li class="clickable timeline-item" data-note="Jeudi dans la journée : résultats d’autopsie disponibles">
                        <span class="timeline-time">Jeudi</span>Résultats d'Autopsie
                    </li>
                    <li class="clickable timeline-item" data-note="Jeudi Prochain : résultats ADN reçus. Vous êtes des enquêteurs débutants, votre enquête n'est pas prioritaire d'où le temps d'attente pour les relevés ADN">
                        <span class="timeline-time">Jeudi Prochain</span>Résultats ADN
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
                <h3>Consignes de l'interrogatoire</h3>
                <p> Avant de commencer les interrogatoires, une préparation rigoureuse est indispensable. Pour qu’un interrogatoire soit autorisé, deux conditions doivent être réunies : </p> 
                <ul> 
                    <li> <strong>1ère condition :</strong> avoir réduit le nombre de suspects à deux personnes, en s’appuyant sur des éléments sérieux et recoupés <em>(liens logiques entre le contexte, les preuves matérielles de la scène de crime, les témoignages, l'autopsie et le profil psychologique suspecté).</em> </li>
                    <li>
                        <strong>2ème condition :</strong> avoir préparé une série de questions stratégiques adaptées au <strong>profil psychologique</strong> de chaque suspect retenu.  
                        Ces questions doivent être conçues pour observer et analyser leurs <strong>réactions émotionnelles et comportementales</strong> — et non leurs réponses factuelles, souvent trompeuses.
                    </li>
                </ul>
                <p> Votre objectif n’est pas d’obtenir « une bonne réponse », mais d’identifier les signes de <strong>stress, contradiction, déstabilisation, agressivité ou fuite</strong> qui trahissent un comportement coupable. Un interrogatoire réussi repose donc sur votre capacité à anticiper les <strong>réactions possibles</strong> de chaque profil (impulsif, rationnel, émotionnel, improvisé, etc.). </p>

             </div>

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
            
        </div>
        <br>
        <br>
    </div>
`;


// Contenu de la page Autopsie (Verrouillé par code)
const AUTOPSIE_CONTENT = `
    <div>
        <h2>Rapport d'Autopsie</h2>
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
            <p class="clickable" data-note="Traumatisme crânien sur le côté droit du crâne. Des micro-morceaux de porcelaine ont été retrouvés dans la plaie.">Traumatisme crânien dû à un impact sur le côté droit du crâne.</p>

            <h3>Arme probable</h3>
            <p class="clickable" data-note="Objet contondant léger mais rigide en porcelaine.">Objet contondant, non métallique, léger mais rigide.</p>

            <h3>Signes de lutte</h3>
            <ul>
                <li class="clickable" data-note="Éraflures sur l’avant-bras droit. Ils ont pu être provoqué par la lutte ou par une chute.">Éraflures sur l’avant-bras droit</li>
                <li class="clickable" data-note="Plusieurs petites ecchymoses sur le haut du corps. L'agresseur semble être inexpérimenté, gestes chaotiques.">Petites ecchymoses</li>
                <li class="clickable" data-note="Lors de lutte, la victime aurait pu griffer le tueur, mettant de la peau du coupable sous ses ongles. Les analyses ADN permettront d'établir un lien fort avec le tueur.">Ongles de la victime</li>
            </ul>

            <h3>Heure probable de la mort</h3>
            <p class="clickable" data-note="Vendredi entre 15h45 et 17h00 → heure cohérente avec le bruit signalé par le voisin (~16h).">Vendredi entre 15h45 et 17h00</p>

            <h3>Autres éléments</h3>
            <ul>
                <li class="clickable" data-note="Pas de drogues ou alcool détectés dans le corps.">Pas de drogues ou alcool</li>
            </ul>
        </div>
    </div>
`;

// Contenu de la page ADN (Verrouillé par code)
const ADN_CONTENT = `
    <div>
        <h2>Rapport d'Analyse ADN</h2>
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
const PROFIL_CONTENT = `
<div class="report-content">

    <h2>Profils Psychologiques des Criminels</h2>
    <p>Cette section présente les grands profils de tueurs étudiés par les experts en criminologie. 
    Elle vous permettra de mieux comprendre les comportements, les réactions en interrogatoire et les motivations possibles
    des suspects de l’affaire Madeline Shaw.</p>

    <!-- PROFIL 1 : Tueur Irrationnel -->
    <div class="info-section">
        <h3>1. Le Tueur Irrationnel / Impulsif</h3>
        <ul>
            <li class="clickable" data-note="Le tueur impulsif agit sous l’effet d’une émotion intense : colère, peur, humiliation.">
                Profil général : passage à l’acte soudain, sans planification.
            </li>
            <li class="clickable" data-note="Le tueur impulsif peut exploser suite à un rejet, une remarque blessante ou un stress extrême.">
                Déclencheurs : rejet, crise émotionnelle, perte de contrôle.
            </li>
            <li class="clickable" data-note="Ce profil laisse souvent beaucoup d’indices : objets renversés, ADN, empreintes.">
                Indices matériels : désordre, fuite précipitée, traces multiples.
            </li>
            <li class="clickable" data-note="Arme improvisée : lampes, objets du quotidien, outils trouvés sur place.">
                Armes typiques : objets trouvés sur les lieux.
            </li>
            <li class="clickable" data-note="Contradictions fréquentes, agitation, difficulté à soutenir une version stable.">
                Réaction en interrogatoire : nerveux, incohérent, peut s’emporter.
            </li>
            <li class="clickable" data-note="Il est incapable de dissimuler totalement les preuves, ce qui le trahit.">
                Faiblesses : beaucoup de preuves laissées.
            </li>
        </ul>
    </div>


    <!-- PROFIL 2 : Tueur Rationnel -->
    <div class="info-section">
        <h3>2. Le Tueur Rationnel / Calculateur (Motif financier)</h3>
        <ul>
            <li class="clickable" data-note="Le tueur rationnel agit par intérêt : argent, réputation, carrière.">
                Profil général : méthodique, organisé, motivé par un gain.
            </li>
            <li class="clickable" data-note="Il agit s’il estime que la victime représente une menace à ses finances ou à son image.">
                Motifs : conflits financiers, réputation menacée.
            </li>
            <li class="clickable" data-note="Ce profil essaie souvent d’effacer ses traces : entrée discrète, arme retirée, scène nettoyée.">
                Indices matériels : traces minimisées ou camouflées.
            </li>
            <li class="clickable" data-note="En général, il utilise une arme qu’il a déjà ou qu’il sait manier efficacement.">
                Armes typiques : objets lourds, outils, armes retirées ensuite.
            </li>
            <li class="clickable" data-note="Calme, confiant, peut dévier les questions et manipuler subtilement.">
                Interrogatoire : maîtrise de soi, comportements calculés.
            </li>
            <li class="clickable" data-note="Les mensonges préparés peuvent sembler trop parfaits, ce qui les rend suspects.">
                Faiblesses : incohérences temporelles, excès de self-control.
            </li>
        </ul>
    </div>


    <!-- PROFIL 3 : Tueur Emotionnel -->
    <div class="info-section">
        <h3>3. Le Tueur Émotionnel / Dépendant Affectif</h3>
        <ul>
            <li class="clickable" data-note="Le tueur émotionnel est très sensible à l’abandon et au rejet.">
                Profil général : hyper-émotif, dépendant.
            </li>
            <li class="clickable" data-note="Une dispute, un refus ou une parole blessante peut déclencher une crise.">
                Déclencheurs : rejet, jalousie, sentiment de trahison.
            </li>
            <li class="clickable" data-note="La scène montre souvent des signes d’une dispute ou d’un acte non prémédité.">
                Indices matériels : désordre émotionnel, objets personnels perturbés.
            </li>
            <li class="clickable" data-note="Il utilise souvent une arme liée au contexte ou à la relation.">
                Armes typiques : objets symboliques ou improvisés.
            </li>
            <li class="clickable" data-note="Peut pleurer, paniquer ou se contredire, même s'il est innocent.">
                Interrogatoire : stress intense, incohérence.
            </li>
            <li class="clickable" data-note="Influencé par les émotions, peut avouer même s'il n'est pas coupable.">
                Faiblesses : confusion entre faits et émotions.
            </li>
        </ul>
    </div>


    <!-- PROFIL 4 : Tueur Inopiné -->
    <div class="info-section">
        <h3>4. Le Tueur Inopiné / Accidental</h3>
        <ul>
            <li class="clickable" data-note="Le meurtre est souvent l’aboutissement d’une dispute banale qui dégénère.">
                Profil général : geste accidentel, perte de contrôle momentanée.
            </li>
            <li class="clickable" data-note="Une remarque, un geste brusque ou une frustration accumulée peuvent suffire.">
                Déclencheurs : irritabilité, tensions quotidiennes.
            </li>
            <li class="clickable" data-note="La scène montre souvent un coup unique, mal dirigé, et peu de camouflage.">
                Indices matériels : incohérence, arme improvisée.
            </li>
            <li class="clickable" data-note="L’arme est généralement un objet quotidien attrapé dans l'énervement.">
                Armes typiques : objets domestiques.
            </li>
            <li class="clickable" data-note="Elle peut minimiser les faits, nier s’être disputée ou changer de version.">
                Interrogatoire : défensive, nerveuse.
            </li>
            <li class="clickable" data-note="Très sensible aux questions calmes, elle peut se contredire sous pression.">
                Faiblesses : mémoire floue, version instable.
            </li>
        </ul>
    </div>


    <!-- PROFIL 5 : Opportuniste -->
    <div class="info-section">
        <h3>5. Le Tueur Opportuniste</h3>
        <p>Profil sans lien personnel avec la victime, mais profitant d’une situation favorable.</p>
        <ul>
            <li class="clickable" data-note="Il agit car une opportunité se présente, comme une porte ouverte ou une maison vide.">
                Profil général : passage à l’acte pratique.
            </li>
            <li class="clickable" data-note="Ce type ne connaît pas la victime, ce qui réduit les motivations complexes.">
                Motivation : opportunité, vol, avantage immédiat.
            </li>
            <li class="clickable" data-note="Armes trouvées sur place, comportement rapide et direct.">
                Armes et scène : simple, peu émotionnelle.
            </li>
        </ul>
    </div>


    <!-- PROFIL 6 : Prédateur Manipulateur -->
    <div class="info-section">
        <h3>6. Le Tueur Manipulateur / Prédateur</h3>
        <ul>
            <li class="clickable" data-note="Calme, calculateur, maîtrise totale des émotions. Difficulté à être déstabilisé.">
                Profil général : contrôle extrême.
            </li>
            <li class="clickable" data-note="Il peut apparaître très innocent grâce à un comportement parfait.">
                Danger : semble "trop propre".
            </li>
            <li class="clickable" data-note="Réponses structurées, regard direct, confiance totale.">
                Interrogatoire : difficile à piéger.
            </li>
        </ul>
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
    'chronologie': CHRONOLOGIE_CONTENT,
    'interrogatoires': INTERROGATOIRES_CONTENT,
    'profil': PROFIL_CONTENT,
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


// Fonction pour activer les listeners sur les nouveaux éléments chargés
function activateClickableElements() {
    // Éléments cliquables (texte, li, td)
    const clickableElements = document.querySelectorAll('#content .clickable');
    clickableElements.forEach(el => {
        // Supprimer l'ancien listener pour éviter les duplications
        el.removeEventListener('click', showNote);
        el.addEventListener('click', showNote);
    });
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
    
    

    // Vérifier l'état de déverrouillage au chargement de la page si nécessaire
    if (pageName === 'autopsie' || pageName === 'adn' || pageName === 'scene') {
        checkUnlockStatus(pageName);
    }
    if (pageName === "suspects") {
        document.getElementById("add-suspect-box").style.display = "block";
        loadSavedSuspects() ;
    } else {
        document.getElementById("add-suspect-box").style.display = "none";
    }

    // Activer les listeners pour les éléments cliquables sur la nouvelle page chargée
    activateClickableElements();

}


// Chargement initial et configuration des écouteurs d'événements
document.addEventListener('DOMContentLoaded', () => {
    // Rendre les fonctions et constantes nécessaires accessibles globalement
    window.attemptUnlock = attemptUnlock;
    window.loadPage = loadPage;
    window.AUTOPSIE_CODE = AUTOPSIE_CODE;
    window.ADN_CODE = ADN_CODE;
    window.SCENE_CODE = SCENE_CODE;

    localStorage.clear();
    localStorage.setItem(`autopsieUnlocked`, 'false');
    localStorage.setItem(`adnUnlocked`, 'false');
    localStorage.setItem(`sceneUnlocked`, 'false');

    // Charger la page d'accueil par défaut
    loadPage('home');
});

function toggleAlibi(element) {
    const alibiText = element.nextElementSibling;
    alibiText.style.display = (alibiText.style.display === "block") ? "none" : "block";
}


const SUS_A =  `
            <!-- Suspect A -->
            <div class="suspect-card">
                <img src="https://via.placeholder.com/150x200?text=Evan+Reed">
                <h3>Evan Reed - 25 ans</h3>
                <ul>
                    <li>Profession : Livreur UPS</li>
                    <li class="clickable" data-note="Vu près de la maison de Madeline la veille du meurtre. Il effectuait la livraison d'un colis bel et bien commandé par Mme Shaw.">Lien : Livraisons régulières, dernière personne à l'avoir vu en vie</li>
                    <li class="clickable" data-note="Comportement impulsif lors de l'interrogatoire, et quelques contradictions.">Profil psychologique : Impulsif</li>
                </ul>

                <div class="alibi-container">
                    <span class="alibi-btn" onclick="toggleAlibi(this)">➤ Alibi</span>
                    <p class="alibi-text clickable" data-note="Alibi faible mais cohérent avec ses horaires de pause.">Evan affirme qu'il était en pause dans son camion, mais son GPS contredit légèrement ses horaires.</p>
                </div>
            </div>
        `;

const SUS_B  = `
            <!-- Suspect B -->
            <div class="suspect-card">
                <img src="https://via.placeholder.com/150x200?text=Hannah+Leroux">
                <h3>Hannah Leroux - 33 ans</h3>
                <ul>
                    <li>Profession : Voisine</li>
                    <li class="clickable" data-note="Conflit léger avec Madeline (chien, places de parking).">Lien : Conflits légers</li>
                    <li class="clickable" data-note="Anxiosité et agressivité latente durant l'interrogatoire. manque d'enphatie pour la victime. Appels multiples à la police pour des plaintes minimes.">Profil psychologique : Anxieuse, impulsive</li>
                </ul>

                <div class="alibi-container">
                    <span class="alibi-btn" onclick="toggleAlibi(this)">➤ Alibi</span>
                    <p class="alibi-text clickable" data-note="Alibi faible mais non impossible.">Elle dit être restée chez elle toute la journée, mais aucun témoin ne confirme.</p>
                </div>
            </div>
        `;

const SUS_C = `
            <!-- Suspect C -->
            <div class="suspect-card">
                <img src="https://via.placeholder.com/150x200?text=Jonah+Miller">
                <h3>John Miller - 17 ans</h3>
                <ul>
                    <li>Profession : Lycéen</li>
                    <li class="clickable" data-note="Élève soutenu psychologiquement par Madeline, réaction émotionnelle excessive à un rejet affectif.">Lien : Élève de la victime</li>
                    <li class="clickable" data-note="Profil fragile, en crise émotionnelle. Absent en cours le jour du meurtre, il raconte être resté chez lui pour cause de crise soudaine d'angoisse. Sous pression lors de l’interrogatoire, il a eu beaucoup de mal à répondre aux questions posées.">Profil psychologique : Fragile, sensible</li>
                </ul>

                <div class="alibi-container">
                    <span class="alibi-btn" onclick="toggleAlibi(this)">➤ Alibi</span>
                    <p class="alibi-text clickable" data-note="Alibi non vérifiable ">John affirme qu'il se promenait en forêt pour se "changer les idées".</p>
                </div>
            </div>
        `;

const SUS_D = `
            <!-- Suspect D -->
            <div class="suspect-card">
                <img src="https://via.placeholder.co/150x200/151e29/4aa3ff?text=Ryan+Kessler" alt="Ryan Kessler">
                <h3>Ryan Kessler - 42 ans</h3>
                <ul>
                    <li>Profession : Promoteur immobilier</li>
                    <li class="clickable" data-note="Madeline avait dénoncé l’état d’une de maison qu'il a vendu.">Lien avec la victime : Promoteur mécontent</li>
                    <li class="clickable" data-note="Colérique mais organisé. Lors de l'interrogatoire, il était autainement serein et semblait dérangé d'être ici.">Profil psychologique : Organisé, colérique, cupide</li>
                </ul>

                <div class="alibi-container">
                    <span class="alibi-btn" onclick="toggleAlibi(this)">➤ Alibi</span>
                    <p class="alibi-text clickable" data-note="L'enquête a prouvé que son alibi au restaurant était en fait pour 19h. Il avait 3 heures de battement entre 16h et 19h. L'alibi est défectueux. Il avait le temps d'agir. Ne pas le relâcher trop vite."> Il raconte qu'il était au restaurant avec des collaborateurs pour discuter de comment il allait contrer les allégations de l'article de Madeline.</p>
                </div>
            </div>
        `;

function addSuspect() {
    const input = document.getElementById("suspect-input");
    const name = input.value.trim();

    if (name.toLowerCase() === "evan reed") {
        const newSuspect = SUS_A ;

        // Ajout dans la liste
        document.getElementById("suspect-list").insertAdjacentHTML("beforeend", newSuspect);
        saveSuspect("evan reed") ;

        input.value = "";
        alert("Suspect ajouté : Evan Reed");
    }
    if (name.toLowerCase() === "hannah leroux") {
        saveSuspect("hannah leroux")
        const newSuspect = SUS_B ;

        // Ajout dans la liste
        document.getElementById("suspect-list").insertAdjacentHTML("beforeend", newSuspect);

        input.value = "";
        alert("Suspect ajouté : Hannah Leroux");
    }
    if (name.toLowerCase() === "john miller") {
        saveSuspect("john miller")
        const newSuspect = SUS_C ; 

        // Ajout dans la liste
        document.getElementById("suspect-list").insertAdjacentHTML("beforeend", newSuspect);

        input.value = "";
        alert("Suspect ajouté : Jonh Miller");
    }
        if (name.toLowerCase() === "ryan kessler") {
        saveSuspect("ryan kessler") ;
        const newSuspect = SUS_D;

        // Ajout dans la liste
        document.getElementById("suspect-list").insertAdjacentHTML("beforeend", newSuspect);

        input.value = "";
        alert("Suspect ajouté : Ryan Kessler");
    }
    activateClickableElements();

}

function openHistoriqueLivraisons() {
    document.getElementById("popup-livraisons").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup-livraisons").style.display = "none";
}

function saveSuspect(name) {
    let saved = JSON.parse(localStorage.getItem("suspects")) || [];
    if (!saved.includes(name)) {
        saved.push(name);
        localStorage.setItem("suspects", JSON.stringify(saved));
    }
}

function loadSavedSuspects() {
    let saved = JSON.parse(localStorage.getItem("suspects")) || [];

    saved.forEach(name => {
        addSuspectFromMemory(name);
    });
}


function addSuspectFromMemory(name) {
    if (name === "evan reed") {
        document.getElementById("suspect-list").insertAdjacentHTML("beforeend", SUS_A);
    }
    if (name === "hannah leroux") {
        document.getElementById("suspect-list").insertAdjacentHTML("beforeend", SUS_B);
    }
    if (name === "john miller") {
        document.getElementById("suspect-list").insertAdjacentHTML("beforeend",SUS_C);
    }
    if (name === "ryan kessler") {
        document.getElementById("suspect-list").insertAdjacentHTML("beforeend",SUS_D);
    }
}
