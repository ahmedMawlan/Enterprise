# Configure with an active PBX server

If you have:

1. An active [PBX server](../configure-without-previously-having-a-pbx-server/)
2. [SIP extensions](../configure-without-previously-having-a-pbx-server/sip-extensions.md) created
3. [Asterisk manager](../configure-without-previously-having-a-pbx-server/configure-asterisk-manager-interface-and-users.md) configured
4. And [Omnichannel activated](../../../omnichannel/#enable-omnichannel)

You can start to configure the voice channel Vconnct.Enterprise workspace.

### 1. Enable Voice Channel

1. Navigate to **Administration** > **Workspace** > **Settings** > **Voice Channel**
2. Enable voice channel, as shown below:

<figcaption><p>Voice channel</p></figcaption>

**Vconnct.Enterprise establishes two connections with Asterisk, one via AMI to read configuration and list extensions, queues, and some other things, and the second one is the WebRTC SIP registration.**

### 2. Configure AMI connection

* Navigate to **Administration > Workspace > Settings > Voice Channel > Settings > Asterisk Manager Interface (AMI).**
* Fill the form with the FQDN of your server and the username/password gotten as shown [here](../configure-without-previously-having-a-pbx-server/), or it should be provided to you by your _Asterisk manager._

<figcaption><p><em>AMI connection</em></p></figcaption>

### 2.1 Test AMI Connection&#x20;

To test AMI connection, turn to the **Extensions** tab. Here you should see a list of the existing extensions in Asterisk:

<figcaption><p>Extensions</p></figcaption>

Also enabling the AMI debug you may see connections coming and the RC AMI user connected:

```tcl
manager set debug on
manager show connected
```

<figcaption><p>Vconnct.Enterprise connected to the Asterisk’s AMI</p></figcaption>

If you see it, your Vconnct.Enterprise is connected to Asterisk’s AMI.

## 3. Configure WebSocket Server Connection

Vconnct.Enterprise needs a WebSocket connection to forward calls from Asterisk to Vconnct.Enterprise.

The parameters for a FreePBX connection are:

<figcaption><p>Websocket connection</p></figcaption>

Change them according to your Asterisk server conditions. Then in the Settings tab, assign at least one extension to a Vconnct.Enterprise user. When that user logs in to Vconnct.Enterprise the webphone will try to connect to Asterisk.

### 3.1 Test WebSocket Connection&#x20;

To test the WebSocket Connection, you just need to log in with a user associated with an extension and check if the extension registers successfully.&#x20;

![WebSocket not connected] **img**

The phone icon with a slash over means that the WebSocket connection is possible, Vconnct.Enterprise could send a SIP Options packet to Asterisk, and it was successfully answered. Click on the phone icon, and it will turn green. Now the user is ready to receive calls, and in Asterisk, you should have received a SIP register packet, and the extension should be properly registered. Validate it with:

`pjsip show endpoints`

<figcaption><p>Vconnct.Enterprise configured with Asterisk</p></figcaption>
Congratulations! You have successfully configured Vconnct.Enterprise with Asterisk!

The next step now is to [associate your Vconnct.Enterprise agents with Asterisk extensions.](associate-agents-with-extensions-in-Vconnct.Enterprise.md)\
