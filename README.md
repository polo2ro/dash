# Amazon dash button for mopidy

Go to next track on your mopidy server with the amazon dash button


## Install on debian

```bash
cd /home/paul/git
git clone https://github.com/polo2ro/dash
```

Start the service

Warning, the service file contain path to the js files, this must be modified
to match your username, your repository folder, and the hostname used by
mopidy.

```bash
su
cp dash/systemd/dash.service /etc/systemd/system/
systemctl start dash.service
```

Enable for next reboot

```bash
systemctl enable dash.service
```
