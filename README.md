# JTV self server

### Required Files
1. Termux V0.112 (Install on Fire TV)
```
https://www.apkmirror.com/apk/fredrik-fornwall/termux-fdroid-version/termux-fdroid-version-0-112-release/
```
2. Zank Remote (Install on Fire TV)
```
https://play.google.com/store/apps/details?id=zank.remote 
```
3. TV2 (Install on Fire TV)
```
Search "ZANK REMOTE" on FireTV and install
```
4. Zank Remote (Install on Phone)
```
https://play.google.com/store/apps/details?id=zank.remote
```

### Steps:
1. Install Termux, Zank Remote, TV2 on FireTV
2. Install Zank Remote on Phone
3. Setup and Connect Phone with FireTV
4. open Termux on FireTV
5. Copy below code and send it through Zank Remote From Phone to FireTV

CODE TO COPY ⬇️
```
echo '# Check if "start.sh" file exists in the root directory.
if [ -d ~/JTVServer ] && [ -e ~/start.sh ]; then
    echo "Starting Jio TV Server"
    #!/data/data/com.termux/files/usr/bin/sh
    termux-wake-lock
    ~/start.sh
else
    echo "Setup Started"
    pkg remove game-repo -y
    pkg remove science-repo -y
    pkg update -y
    apt update && apt upgrade -y
    pkg install nodejs-lts wget -y
    cd
    wget https://github.com/thundersky7/JTVServer/releases/download/Beta/JTVServerV1.zip -N && unzip -o JTVServerV1.zip && rm JTVServerV1.zip
    curl -o start.sh https://raw.githubusercontent.com/thundersky7/JTVServer/main/starter/start.sh &&  chmod 755 ~/start.sh
    echo "Setup Finished" && sleep 2 && exit
fi' >> $PREFIX/etc/bash.bashrc && sh $PREFIX/etc/bash.bashrc && exit
```


![zank](https://i.imgur.com/H4Bjsr0.png)

------------------------
6. After pasting Press OK button on FireTV remote

![MainPaste](https://i.imgur.com/HBSHgtQl.png)

------------------------
7. The script will stop some times asking for default action. Just Press OK on FireTV remote then proceed. (Mostly 3-4 time it will stop, as this is a one time process, it will check for updates)

![stopenter](https://i.imgur.com/fSzupscl.png)

------------------------
8. After installtion Termux will exit itself. It not "Force Stop" Termux and "Restart" Termux.
9. You will see sucess message as below and Your JIO TV Server will be up and running.

![JIOS](https://i.imgur.com/AjB4bzKl.png)

------------------------
9.1 THE ERROR

If you are getting error like this 

![error](https://i.imgur.com/R9HrZNMl.png)


    1 Clear Data (TERMUX)
    2 Wait for 1-2 minutes
    3 Try again from Step 1

------------------------

10. Firstly after starting server, Go to Login Portal (Get your link from JIO TV TERMUX PAGE)

![JIOS](https://i.imgur.com/AjB4bzKl.png)

For Example: http://10.0.2.15:3500/login

------------------------

11. Login via OTP

![JIOS](https://i.imgur.com/A5ZIsalm.png)


------------------------

------------------------

12. Now you have 2 ways to watch TV

First: On browser : (Get you link from JIO TV TERMUX PAGE) 

For Example: http://10.0.2.15:3500

Second: On IPTV : (Get you link from JIO TV TERMUX PAGE) 

For Example: http://10.0.2.15:3500/playlist

If Hosting and Playing on same device use following link for IPTV player

http://localhost:3500/playlist

------------------------


13. Now to start server
```
1. Open Termux
2. Minimize Termux
3. Start using IPTV player
```

14. Automated way to Start Server and Watch TV
```
1. Install TV2 app from above link
2. It is a simple app which opens TERMUX, minimizes and starts your IPTV player.
```


