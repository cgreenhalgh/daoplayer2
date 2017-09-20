# daoplayer2

Digital Audio Object player - version 2 (experimental), based on ionic.

Status: just beginning.

## Dev environment

Make dev environment:
```
docker build -t daoplayer2 dev
```

Note, default ionic dev ports: 8100 (browser), 35729 (live reload), 53703 (logger)

On Windows <10 (i.e. with Docker Toolkit) open the docker VM (default?!) in VirtualBox, settings, Shared Folders, add the Drive(s) that you will need to mount files from.
NB in Docker Toolkit also use the VirtualBox UI to add port-forwarding on the Virtual Box image.

Open it
```
docker run -it --name=daoplayer2 -p 8100:8100 -p 35729:35729 -p 53703:53703 -v `pwd`:/root/work daoplayer2 /bin/bash
cd /root/work/
```

Again, on windows (here windows <10 => Docker Toolbox) you may need to avoid file path mangling and enable tty:
```
winpty docker run -it --name=daoplayer2  -p 8100:8100 -p 35729:35729 -p 53703:53703 -v /`pwd`:/root/work daoplayer2 //bin/bash
or later
winpty docker exec -it daoplayer2 //bin/bash
```

Note, on windows, won't work on mounted volume (without symlinks), so maybe
```
mkdir build
cd build
(cd ~/work/dao2-app; tar cf - * .*) | tar xf -
```
and later
```
(cd ~/work/dao2-app; tar cf - src) | tar xf -
```
Then
```
npm install 

ionic serve
```

## by the by

(as of 2017-09-20)

Creating a new ionic project needs:
- git installed and configured, e.g.
```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
```
ionic start dao2-app blank
```

And won't work with --no-bin-links over a windows filesystem.

And ionic serve crashes on Alpine Linux due to a stack problem with str-replace recursion.

## Concept

Hybrid app GPS-driven music player, based (in terms of scripting) on [daoplayer](https://github.com/cgreenhalgh/daoplayer).
