# Amazon dash button for mopidy

Pause/play and go to next track on your mopidy server with the amazon dash button

To configure your dash button, use the guide from the [node-dash-button](https://github.com/hortinstein/node-dash-button) library.

## Install on debian

```bash
cd /home/paul/git
git clone https://github.com/polo2ro/dash
```

Create the systemd service

```bash
su
cp dash/systemd/dash.service /etc/systemd/system/
nano /etc/systemd/system/dash.service
```

The service file contain custom informations, this must be modified
to match:
* your repository folder
* The MAC address of your dash button
* the hostname and port used by mopidy (optional argument, default is localhost:6680)
* Name of interface (optional argument, default is eth0)

Start the service:

```bash
systemctl start dash.service
```

Enable for next reboot:

```bash
systemctl enable dash.service
```
