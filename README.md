[[_TOC_]]

# Prérequis

- Node en version 16.16.0
- Yarn

Checker si node est installé 

```
node --version
// v16.16.0
```

Si vous n'avez pas la même version de nodejs ou nodejs n'est pas installé, suivez l'étape `Installer NodeJS`

Checker si yarn est installé 

```
yarn --version
```

# Installer NodeJS

## Installer NVM (Node version Manager)

Checker si nvm est déjà installé sur votre machine

```
nvm --version
```

si pas installé, lancez:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Puis: 

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Relancer le check de version pour vous assurez que NVM est bien installé, il est possible que vous ayez besoin de relancer votre session

## Installer NodeJS via NVM

```
nvm install v16.16.0
nvm alias default v16.16.0
nvm use default
```

Puis checker que node est bien installé

```
node --version
// v16.16.0
```

# Installer Yarn

## Prérequis

- NodeJS

## Installation

```
npm install --global yarn
```

Checker que yarn est bien installé

```
yarn --version
```

# Lancer l'application

Installer les dépendances 

```
yarn install
```

Lancer l'application

```
yarn dev
```

# Utiliser NuxtJS

[Documentation](https://nuxtjs.org/docs/get-started/directory-structure)

# test