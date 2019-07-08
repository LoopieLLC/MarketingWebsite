#------------------------------------------------------------------------------
# FILE:         publish.ps1
# CONTRIBUTOR:  Marcus Bowyer
# COPYRIGHT:    Copyright (c) 2017-2018 by Loopie, LLC.  All rights reserved.
#
# Builds the [loopie/couchbase] images and and pushes it to Docker Hub.
#
# NOTE: You must be logged into Docker Hub.
#
# Usage: powershell -file ./publish.ps1 [-all]

param 
(
	[switch]$all = $False,
	[switch]$nopush = $False
)

#----------------------------------------------------------
# Global Includes
$image_root = "$env:LOOPIE_ROOT\\Images"
. $image_root/includes.ps1
#----------------------------------------------------------

function Build
{
	param
	(
		[parameter(Mandatory=$True, Position=1)][string] $version,
		[switch]$latest = $False
	)

	$registry = "harbor.loopie.io/loopie/marketingwebsite"
	$date     = UtcDate
	$tag      = "$version"

	# Build and push the images.

	. ./build.ps1 -registry $registry -version $version -tag $tag
    PushImage "${registry}:$tag"


	if (($latest))
	{
		Exec { docker tag "${registry}:$tag" "${registry}:latest" }
		PushImage "${registry}:latest"
	}
}

$noImagePush = $nopush

if ($all)
{
    # I'm not sure if these older .NET Core 2.0.x builds will work anymore
    # after we upgraded to 2.1.  There probably isn't a reason to rebuild
    # these again though, because neonHIVE was never released to the public
    # on .NET Core 2.1.
    #
	# Build 2.0.3-runtime
	# Build 2.0.4-runtime
	# Build 2.0.5-runtime -latest
	# Build enterprise-6.0.1

}

Build 1.0.7 -latest
