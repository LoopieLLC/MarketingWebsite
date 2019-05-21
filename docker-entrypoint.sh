#!/bin/sh
#------------------------------------------------------------------------------
# FILE:         docker-entrypoint.sh
# CONTRIBUTOR:  Marcus Bowyer
# COPYRIGHT:    Copyright (c) 2017-2018 by Loopie Laundry, LLC.  All rights reserved.

# Add the root directory to the PATH.

PATH=${PATH}:/

cd /app

# Launch the service.

npm run dev
