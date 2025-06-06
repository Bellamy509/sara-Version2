#!/bin/bash

# Script de déploiement automatisé pour Vercel
# Usage: ./scripts/deploy.sh [production|preview]

set -e

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérifier si Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    log_error "Vercel CLI n'est pas installé. Installation en cours..."
    npm install -g vercel
fi

# Déterminer le type de déploiement
DEPLOYMENT_TYPE=${1:-preview}

log_info "Début du déploiement Lakay AI sur Vercel..."
log_info "Type de déploiement: $DEPLOYMENT_TYPE"

# Vérifier que le projet peut être buildé
log_info "Vérification du build local..."
npm run build

if [ $? -eq 0 ]; then
    log_success "Build local réussi ✅"
else
    log_error "Échec du build local ❌"
    exit 1
fi

# Nettoyer le dossier de build
log_info "Nettoyage des fichiers temporaires..."
rm -rf .next

# Vérifier les variables d'environnement requises
log_info "Vérification des variables d'environnement..."

if [ ! -f .env ]; then
    log_warning "Fichier .env non trouvé. Assurez-vous de configurer les variables d'environnement dans Vercel."
fi

# Déploiement selon le type
if [ "$DEPLOYMENT_TYPE" = "production" ]; then
    log_info "Déploiement en production..."
    vercel --prod
elif [ "$DEPLOYMENT_TYPE" = "preview" ]; then
    log_info "Déploiement en preview..."
    vercel
else
    log_error "Type de déploiement invalide. Utilisez 'production' ou 'preview'."
    exit 1
fi

if [ $? -eq 0 ]; then
    log_success "Déploiement réussi ! 🚀"
    log_info "Vérifiez votre application sur le lien fourni par Vercel."
    log_info "N'oubliez pas de configurer les variables d'environnement si ce n'est pas déjà fait."
else
    log_error "Échec du déploiement ❌"
    exit 1
fi
