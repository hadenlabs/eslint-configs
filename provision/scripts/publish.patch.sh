#!/bin/bash

# Get environment variables
NPM_USER=$(grep NPM_USER .env.npm | sed "s/NPM_USER=//g")
NPM_PASS=$(grep NPM_PASS .env.npm | sed "s/NPM_PASS=//g")
NPM_EMAIL=$(grep NPM_EMAIL .env.npm | sed "s/NPM_EMAIL=//g")

# Login to NPM
npm-cli-login -u "${NPM_USER}" -p "${NPM_PASS}" -e "${NPM_EMAIL}"

# Sign new package versions
lerna version patch --yes

# Publish to NPM
lerna publish from-package --yes
