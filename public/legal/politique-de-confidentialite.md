# Politique de Confidentialité

**Date de dernière mise à jour** : 19 novembre 2025
**Version** : 1.2

---

## 1. Préambule

La présente Politique de Confidentialité décrit comment **Casque En Mains** (ci-après "nous", "notre" ou "le Service") collecte, utilise, conserve et protège les données personnelles des utilisateurs (ci-après "vous", "votre" ou "l'Utilisateur") dans le cadre de l'utilisation de la plateforme web accessible à l'adresse **https://casqueenmains.fr**.

Nous nous engageons à protéger votre vie privée et à respecter le **Règlement Général sur la Protection des Données (RGPD)** ainsi que la loi française "Informatique et Libertés" modifiée.

**Responsable du traitement** :
Jonathan VALSAQUE
Email : contact@casqueenmains.fr

---

## 2. Données Personnelles Collectées

Nous collectons les données suivantes selon votre utilisation du Service :

### 2.1 Données de Compte

**Collectées lors de l'inscription** :
- **Email** (obligatoire) - pour la création du compte et la communication
- **Mot de passe** (chiffré) - pour l'authentification
- **OAuth Google** (optionnel) - si vous choisissez de vous connecter via Google (nom, email, photo de profil)

**Collectées lors de l'onboarding** :
- **Pseudo** (obligatoire) - pour vous identifier sur la plateforme
- **Département** (obligatoire) - pour personnaliser les contenus régionaux
- **Avatar** (optionnel) - image de profil choisie parmi une sélection prédéfinie

**Finalité** : Gestion de votre compte, authentification, personnalisation du service.
**Base légale** : Exécution du contrat (article 6.1.b RGPD).

---

### 2.2 Données de Progression et d'Activité

**Entraînement** :
- Sessions d'entraînement (date, durée, mode, score)
- Réponses aux questions (correctes/incorrectes/sautées)
- Questions marquées (favoris)
- Questions exclues (maîtrisées)
- Temps passé par question
- XP et grade obtenus

**Concours blancs** :
- Sessions de concours (date, durée, score)
- Réponses aux questions
- Classement parmi les participants
- Temps de soumission

**Jeux multijoueurs** :
- Participation aux jeux Sprint Pompier
- Score et classement
- Invitations envoyées/reçues
- Événements de jeu (réponses, timing)

**Statistiques** :
- Activité quotidienne (nombre de questions, temps passé)
- Série de jours consécutifs (streak)
- Taux de réussite par matière
- Objectifs personnels

**Finalité** : Suivi de votre progression, génération de statistiques, classements, déblocage de badges, amélioration du service.
**Base légale** : Exécution du contrat (article 6.1.b RGPD).

---

### 2.3 Données d'Abonnement et de Paiement

**Collectées via Stripe (notre prestataire de paiement)** :
- **Identifiant client Stripe** (stripe_customer_id)
- **Identifiant d'abonnement** (stripe_subscription_id)
- **Type de plan** (mensuel, semestriel, annuel, lifetime)
- **Statut de l'abonnement** (essai, actif, annulé, expiré)
- **Dates de période** (début, fin, renouvellement)
- **Historique des paiements** (montant, date, statut, facture)
- **Informations de carte bancaire** (4 derniers chiffres uniquement, via Stripe)

⚠️ **Important** : Les données complètes de carte bancaire ne sont **jamais** stockées sur nos serveurs. Elles sont traitées exclusivement par **Stripe**, certifié PCI-DSS niveau 1 (norme bancaire internationale).

**Finalité** : Gestion des abonnements, facturation, prévention de la fraude.
**Base légale** : Exécution du contrat (article 6.1.b RGPD).

---

### 2.4 Données Anti-Abus (Essai Gratuit)

Pour prévenir les abus du système d'essai gratuit (1 essai par personne), nous collectons :
- **Adresse email** (déjà collectée pour le compte)
- **Adresse IP** (au moment de l'activation de l'essai)
- **Empreinte digitale du navigateur** (device fingerprint) - généré par FingerprintJS
- **User-Agent** (type de navigateur)

**Finalité** : Prévention de la fraude, limitation des abus du système d'essai gratuit.
**Base légale** : Intérêt légitime (article 6.1.f RGPD) - protection de nos services contre les abus.

---

### 2.5 Données de Gestion d'Abonnement

Nous collectons et conservons les données suivantes relatives à votre abonnement :

**Informations d'abonnement** :
- **Statut d'abonnement** (trialing, active, canceled, etc.)
- **Type de plan souscrit** (mensuel, semestriel, annuel, lifetime)
- **Date de début et fin de l'essai gratuit** (7 jours)
- **Date de début et fin de période de facturation**
- **Historique des paiements et factures**

**Modèle d'accès** :

Notre plateforme fonctionne selon un modèle d'essai gratuit puis paywall :
- **Pendant l'essai gratuit (7 jours)** : Accès complet à toutes les fonctionnalités
- **Après l'essai sans abonnement** : Accès restreint aux fonctionnalités suivantes uniquement :
  - Consultation de vos anciennes statistiques de progression (read-only)
  - Classements des utilisateurs
  - Système de badges
  - Page d'apprentissage et consultation des mémentos GDO (les quiz sur les mémentos restent bloqués)
- **Avec abonnement Premium actif** : Accès illimité à l'ensemble des fonctionnalités (entraînement, concours, jeux multijoueurs, journal, défis, études de texte, mode révision, mémentos GDO, etc.)

**Finalité** : Gestion des abonnements, contrôle d'accès aux fonctionnalités Premium, facturation.
**Base légale** : Exécution du contrat (article 6.1.b RGPD).

---

### 2.6 Données de Communication

**Notifications push** (si vous avez donné votre consentement) :
- **Endpoint de notification** (URL de push)
- **Clés de chiffrement** (p256dh, auth) - pour sécuriser les notifications
- **Type d'appareil** (nom du navigateur)

**Préférences de notifications** :
- Types de notifications activées/désactivées
- Heures de silence (si configurées)

**Historique de notifications** :
- Notifications envoyées (type, date, statut de lecture)

**Emails transactionnels** (via Resend) :
- Confirmation d'inscription
- Réinitialisation de mot de passe
- Confirmation d'abonnement
- Rappels d'essai
- Factures

**Finalité** : Communication sur le service, notifications importantes, marketing (avec consentement).
**Base légale** : Consentement (article 6.1.a RGPD) pour les notifications push / Exécution du contrat pour les emails transactionnels.

---

### 2.7 Données de Feedback et Signalements

Lorsque vous signalez un problème ou envoyez un feedback :
- **Contenu du signalement** (description, raison)
- **Snapshot de la question** (si signalement de question)
- **Page actuelle** (URL au moment du feedback)
- **Informations techniques** :
  - Navigateur et version
  - Système d'exploitation
  - Résolution d'écran
  - User-Agent

**Finalité** : Amélioration du service, correction de bugs, traitement des signalements.
**Base légale** : Intérêt légitime (article 6.1.f RGPD) - amélioration du service.

---

### 2.8 Données Techniques et Logs

**Logs de connexion** (conservés 90 jours maximum) :
- **Adresse IP**
- **User-Agent** (navigateur)
- **Date et heure de connexion**
- **Actions effectuées** (pour les administrateurs uniquement)

**Données de performance** :
- Temps de chargement des pages
- Erreurs techniques

**Finalité** : Sécurité, prévention de la fraude, maintenance technique, amélioration des performances.
**Base légale** : Intérêt légitime (article 6.1.f RGPD) - sécurité et fonctionnement du service.

---

### 2.9 Cookies et Technologies Similaires

Nous utilisons les cookies suivants :

**Cookies strictement nécessaires** (pas de consentement requis) :
- **Cookie de session Supabase** (sb-access-token, sb-refresh-token) - pour maintenir votre connexion
- **Cookie de préférences** - pour sauvegarder vos choix (thème, langue)

**Cookies optionnels** (consentement requis) :
- **Cookie de notification** - pour mémoriser votre choix de notifications push

Vous pouvez désactiver les cookies optionnels à tout moment via les paramètres de votre navigateur.

**Finalité** : Fonctionnement du service, amélioration de l'expérience utilisateur.
**Base légale** : Consentement (article 6.1.a RGPD) pour les cookies optionnels / Intérêt légitime pour les cookies strictement nécessaires.

---

## 3. Utilisation des Données

Nous utilisons vos données personnelles pour :

✅ **Fournir le service** :
- Créer et gérer votre compte
- Vous authentifier
- Enregistrer votre progression
- Générer des statistiques personnalisées
- Afficher votre classement
- Gérer vos abonnements et paiements

✅ **Améliorer le service** :
- Analyser les usages (de manière anonymisée)
- Corriger les bugs signalés
- Développer de nouvelles fonctionnalités

✅ **Communiquer avec vous** :
- Vous envoyer des emails transactionnels (confirmation, facturation)
- Vous envoyer des notifications push (si vous avez donné votre consentement)
- Répondre à vos demandes de support

✅ **Protéger le service** :
- Prévenir la fraude et les abus
- Détecter et bloquer les comportements suspects
- Assurer la sécurité de la plateforme

✅ **Respecter nos obligations légales** :
- Conservation des données de facturation (10 ans - obligation comptable)
- Traitement des demandes d'exercice de droits RGPD

---

## 4. Partage des Données avec des Tiers

Nous ne vendons **JAMAIS** vos données personnelles à des tiers.

Nous partageons vos données uniquement avec les prestataires suivants, dans le cadre strict de la fourniture du service :

### 4.1 Supabase (Hébergement et Base de Données)

**Données partagées** : Toutes les données de compte, progression, abonnement
**Localisation** : Union Européenne (serveurs conformes RGPD)
**Finalité** : Hébergement de la base de données, authentification, stockage de fichiers
**Garanties** : Supabase est conforme RGPD, certifié ISO 27001, SOC 2 Type II
**Lien** : https://supabase.com/privacy

### 4.2 Stripe (Paiements)

**Données partagées** : Email, nom (si fourni), informations de paiement
**Localisation** : Union Européenne et États-Unis (transfert encadré par clauses contractuelles types)
**Finalité** : Traitement des paiements, gestion des abonnements, facturation
**Garanties** : Stripe est conforme RGPD, certifié PCI-DSS niveau 1
**Lien** : https://stripe.com/privacy

### 4.3 Resend (Emails Transactionnels)

**Données partagées** : Email, pseudo (pour personnalisation)
**Localisation** : États-Unis (transfert encadré par clauses contractuelles types)
**Finalité** : Envoi d'emails transactionnels (confirmation, facturation, support)
**Garanties** : Resend est conforme RGPD
**Lien** : https://resend.com/legal/privacy-policy

### 4.4 OneSignal (Notifications Push)

**Données partagées** : Endpoint de notification, clés de chiffrement, user_id (pseudonyme)
**Localisation** : États-Unis (transfert encadré par clauses contractuelles types)
**Finalité** : Envoi de notifications push web et mobile
**Garanties** : OneSignal est conforme RGPD
**Lien** : https://onesignal.com/privacy_policy

### 4.5 FingerprintJS (Anti-Abus)

**Données partagées** : Caractéristiques techniques du navigateur (user-agent, résolution, plugins)
**Localisation** : États-Unis
**Finalité** : Génération d'une empreinte digitale unique pour prévenir les abus d'essai gratuit
**Garanties** : FingerprintJS est conforme RGPD
**Lien** : https://fingerprint.com/privacy-policy/

---

## 5. Durée de Conservation des Données

Nous conservons vos données personnelles pendant les durées suivantes :

| Type de Données | Durée de Conservation |
|-----------------|----------------------|
| **Compte actif** | Tant que votre compte existe |
| **Données de progression** | Tant que votre compte existe |
| **Logs de connexion** | 90 jours maximum |
| **Historique d'abus** (limit_abuse_logs) | 90 jours maximum |
| **Paiements et factures** | 10 ans (obligation légale comptable française) |
| **Historique d'essai gratuit** | Permanent (prévention fraude, même après suppression du compte) |
| **Feedbacks et signalements** | 5 ans maximum |
| **Logs administrateurs** | 5 ans (audit et sécurité) |

**Suppression de compte** : Après suppression de votre compte via **Profil → Paramètres → Supprimer mon compte**, toutes vos données personnelles sont **définitivement supprimées** sous **30 jours** (à l'exception des données de paiement anonymisées conservées 10 ans par obligation légale).

---

## 6. Vos Droits (RGPD)

Conformément au RGPD, vous disposez des droits suivants :

### ✅ **Droit d'Accès** (Article 15 RGPD)
Vous pouvez demander une copie de toutes les données personnelles que nous détenons sur vous.

### ✅ **Droit de Rectification** (Article 16 RGPD)
Vous pouvez corriger vos données inexactes ou incomplètes directement depuis votre profil.

### ✅ **Droit à l'Effacement** (Article 17 RGPD)
Vous pouvez demander la suppression de votre compte et de toutes vos données.

**Effet de la suppression de compte** :
- ✅ Suppression définitive de toutes vos données personnelles (profil, progression, statistiques, badges, etc.)
- ✅ **Annulation immédiate et automatique de votre abonnement Stripe** (si actif)
- ✅ **Arrêt de tous futurs paiements** (aucun renouvellement)
- ✅ Suppression de votre compte d'authentification
- ⚠️ **Exception** : Conservation de l'historique de paiement pendant **10 ans** (obligation légale comptable française - Article L123-22 du Code de commerce). Les données de paiement seront **anonymisées** (dissociées de votre identité).

### ✅ **Droit à la Portabilité** (Article 20 RGPD)
Vous pouvez récupérer vos données dans un format structuré et lisible par machine (JSON).

### ✅ **Droit d'Opposition** (Article 21 RGPD)
Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.

### ✅ **Droit à la Limitation** (Article 18 RGPD)
Vous pouvez demander la limitation du traitement de vos données dans certaines circonstances.

### ✅ **Droit de Retirer le Consentement** (Article 7.3 RGPD)
Vous pouvez retirer votre consentement aux notifications push à tout moment.

### ✅ **Droit de Réclamation auprès de la CNIL**
Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : https://www.cnil.fr/fr/plaintes

---

### 📧 **Comment Exercer Vos Droits ?**

**Option 1** : Directement depuis votre compte
- Modification des données : Profil → Modifier
- Suppression du compte : Profil → Paramètres → Supprimer mon compte

**Option 2** : Par email
Envoyez un email à **contact@casqueenmains.fr** avec :
- Objet : "Demande RGPD - [Type de demande]"
- Votre email de compte
- Précision de votre demande (accès, rectification, suppression, portabilité, etc.)
- Une copie de votre pièce d'identité (pour vérifier votre identité)

**Délai de réponse** : Nous nous engageons à répondre sous **1 mois** maximum (article 12.3 RGPD).

---

## 7. Sécurité des Données

Nous mettons en œuvre les mesures techniques et organisationnelles suivantes pour protéger vos données :

### 🔒 **Sécurité Technique**

✅ **Chiffrement en transit** : HTTPS/TLS pour toutes les communications
✅ **Chiffrement au repos** : Base de données chiffrée (Supabase)
✅ **Mots de passe chiffrés** : Algorithme bcrypt avec salt
✅ **Row Level Security (RLS)** : Isolation des données par utilisateur au niveau base de données
✅ **Vérification de signature** : Webhooks Stripe signés et vérifiés
✅ **Protection contre les injections SQL** : Requêtes paramétrées
✅ **Protection XSS** : Sanitization automatique des inputs
✅ **Rate Limiting** : Protection contre les attaques par force brute

### 🛡️ **Sécurité Organisationnelle**

✅ **Accès restreint** : Seuls les administrateurs autorisés ont accès aux données
✅ **Audit logs** : Traçabilité de toutes les actions administrateurs
✅ **Monitoring** : Surveillance active des accès et anomalies
✅ **Mises à jour régulières** : Dépendances et frameworks maintenus à jour
✅ **Hébergement sécurisé** : Supabase (certifié ISO 27001, SOC 2)

---

## 8. Transferts de Données Hors UE

Certains de nos prestataires sont situés aux **États-Unis** :
- Stripe (paiements)
- Resend (emails)
- OneSignal (notifications)
- FingerprintJS (anti-abus)

Ces transferts sont encadrés par :
✅ **Clauses Contractuelles Types (CCT)** approuvées par la Commission Européenne
✅ **Certification** des prestataires (ISO 27001, SOC 2, PCI-DSS)
✅ **Garanties supplémentaires** : Chiffrement, anonymisation, minimisation des données

Vous pouvez obtenir une copie des CCT en nous contactant.

---

## 9. Données des Mineurs

Casque En Mains est destiné aux personnes âgées de **16 ans et plus**.

Si vous avez **moins de 16 ans**, vous devez obtenir l'autorisation de vos parents ou tuteurs légaux avant de créer un compte.

Si nous découvrons qu'un mineur de moins de 16 ans a créé un compte sans autorisation parentale, nous supprimerons immédiatement son compte et toutes ses données.

---

## 10. Modifications de la Politique de Confidentialité

Nous pouvons modifier cette Politique de Confidentialité à tout moment.

En cas de modification substantielle, nous vous en informerons par :
- ✉️ **Email** (à l'adresse de votre compte)
- 🔔 **Notification** sur la plateforme
- 📄 **Bannière** visible sur le site

La **date de dernière mise à jour** est indiquée en haut de ce document.

Nous vous invitons à consulter régulièrement cette page pour rester informé.

---

## 11. Contact et Délégué à la Protection des Données

**Responsable du traitement** :
Jonathan VALSAQUE
Email : **contact@casqueenmains.fr**

Pour toute question relative à la protection de vos données personnelles ou pour exercer vos droits RGPD, vous pouvez nous contacter :

📧 **Email** : contact@casqueenmains.fr

**Délégué à la Protection des Données (DPO)** : Non obligatoire pour notre structure (moins de 250 employés, traitement non sensible).

---

## 12. Législation Applicable

Cette Politique de Confidentialité est régie par :
- Le **Règlement Général sur la Protection des Données (RGPD)** - Règlement UE 2016/679
- La loi française **"Informatique et Libertés"** modifiée - Loi n°78-17 du 6 janvier 1978
- Le **Code de la consommation** français

**Droit applicable** : Droit français
**Juridiction compétente** : Tribunaux français

---

**Document généré le 19 novembre 2025**
**Version 1.2**

**Changements depuis version 1.1 (19/11/2025)** :
- Correction Section 5 : Retrait mention incorrecte de suppression automatique des comptes inactifs (non implémenté)
- Clarification Section 5 : Précision que l'historique d'essai gratuit est conservé de manière permanente pour prévention fraude

**Changements version 1.1 (19/11/2025)** :
- Clarification Section 6.3 (Droit à l'Effacement) : Ajout détails sur l'annulation automatique de l'abonnement lors de la suppression du compte

---

**© 2025 Casque En Mains - Tous droits réservés**
