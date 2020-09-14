# RMR Ghost theme

## Gettings started
Getting up-and-running with the 

### Install Node.js and npm
https://nodejs.org/en/download/

### Install Ghost
```
$ npm install ghost-cli@latest -g
```
```
~/code$ mkdir rmr && cd rmr
~/code/rmr$ ghost install local
✔ Checking system Node.js version
✔ Checking current folder permissions
✔ Checking memory availability
✔ Checking for latest Ghost version
✔ Setting up install directory
✔ Downloading and installing Ghost v3.33.0
✔ Finishing install process
✔ Configuring Ghost
✔ Setting up instance
✔ Starting Ghost

Ghost uses direct mail by default. To set up an alternative email method read our docs at https://ghost.org/docs/concepts/config/#mail

------------------------------------------------------------------------------

Ghost was installed successfully! To complete setup of your publication, visit: 

    http://localhost:2368/ghost/
    
```

### Clone the theme
```
~/code/rmr$ cd content/themes/
~/code/rmr/content/themes$ git clone https://github.com/nikovacevic/rmr.ghost rmr
Cloning into 'rmr'...
remote: Enumerating objects: 194, done.
remote: Counting objects: 100% (194/194), done.
remote: Compressing objects: 100% (136/136), done.
remote: Total 194 (delta 88), reused 154 (delta 48), pack-reused 0
Receiving objects: 100% (194/194), 1.26 MiB | 4.48 MiB/s, done.
Resolving deltas: 100% (88/88), done.
```

### Loading content
Optionally, you can delete the default starter posts and upload the RMR blog content. This will require two things: a JSON file of exported posts, users, etc; a backup of the `/content/images` directory for images.
