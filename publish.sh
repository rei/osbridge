#!/bin/bash
# Publish to this presentation to inside.rei.com

# Exit on errors
set -e

# Settings
DEST='/var/www/html/fed/presentations/platform'
SERVER='inside.rei.com'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Copy files
echo "Copying files..."
scp -r $DIR $SERVER:$DEST

# Set perms
echo "Setting permissions..."
ssh $SERVER -t "chmod -R 775" $DEST
