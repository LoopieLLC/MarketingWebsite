#------------------------------------------------------------------------------
# FILE:         build.ps1
# CONTRIBUTOR:  Marcus Bowyer
# COPYRIGHT:    Copyright (c) 2017-2018 by Loopie, LLC.  All rights reserved.
#
# Builds a [loopie/couchbase] image.
#
# Usage: powershell -file build.ps1 REGISTRY VERSION TAG

param 
(
	[parameter(Mandatory=$True,Position=1)][string] $registry,
	[parameter(Mandatory=$True,Position=2)][string] $version,
	[parameter(Mandatory=$True,Position=3)][string] $tag
)

"   "
"======================================="
"* MarketingSite:" + $tag
"======================================="


# Build the image.

Exec { docker build -t "${registry}:$tag" --build-arg "VERSION=$version" . }
