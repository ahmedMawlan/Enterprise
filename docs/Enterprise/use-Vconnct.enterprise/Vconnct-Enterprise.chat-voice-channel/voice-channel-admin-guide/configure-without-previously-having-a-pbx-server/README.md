# Configure without previously having a PBX server

PBX is a piece of architecture that forwards incoming calls to Vconnct.Enterprise from telephony service providers. We are using it for call bookkeeping data like how many queues there are, extension data, agents allocated to a queue, routing system, and others.

For the purpose of this guide, we are using [FreePBX](https://www.freepbx.org/) as our call management server. You can use any Asterisk distro of your choice.

{% hint style="info" %}
Requirements:

* Asterisk 16.19.0 or higher (We used FreePBX 16.0.10.40 with Asterisk 18.6.0)
* Valid SSL certificate (valid domain)
* You need Vconnct.Enterprise version 5.0.0 or higher.
{% endhint %}

## 1. Prepare FreePBX

\
Install your FreePBX server, as usual (that’s out of the scope of this tutorial), and update it using your OS package manager. In such a case, it’s:

```
yum update -y
```

Enter your server web interface `http://your.domain.name` and set the password and update settings, and do the activation process. Do not skip the activation process, as you’ll need some features later that are only available if you activate your server instance. Complete the firewall basic configuration.

## 2. Configure the FreePBX firewall

Now you need to prepare the FreePBX firewall to accept AMI (Asterisk Manager Interface) and WSS (WebSocket Secure).

### 2.1 Configure custom services AMI and WSS

\
Navigate to **Connectivity > Firewall > Services > Enable Firewall**. Under the Services tab, search for **WebRTC** and mark **Internet** and **Other** options, **Local** is active by default.

![Firewall - services] **img**

We want **WebRTC** in the Internet zone because the Webphone will connect from the client’s IP address, which could be anywhere.

Navigate to the **Custom Services** tab and hit the **Create new service**, name the service AMI, select TCP, and write the port range 5038:5039. Click **Save**.

![Create new service] **img**
Mark the **Other** option and **Save**.

{% hint style="info" %}
AMI goes in the “Other” zone because only some specific endpoints should be connecting to AMI.
{% endhint %}

![AMI service] **img**

### **2.2 Whitelist Vconnct.Enterprise**

\
Now you don’t want your Vconnct.Enterprise to get banned by the FreePBX firewall so you have to add it to the Whitelist List. First, you need to know the IP or IP Networks from your Vconnct.Enterprise instance. When you have a SaaS Vconnct.Enterprise instance you will have a URL (subdomain) like <mark style="color:blue;">MyChosenName.Vconnct.Enterprise</mark>, so just ping it. In this demo:

![] **img**

Vconnct.Enterprise will be connecting from the whole network 51.81.0.0/16\
If you have your own Vconnct.Enterprise instance self-hosted or similar, you should know what’s your IP address or network.

Now, navigate to **Connectivity > Firewall >** **Networks**, and add the IP address needed or Network. Select the **Other** zone and **Save**:

![Network definitions] **img**

Vconnct.Enterprise will be in the **Other** zone.

## 3. Configure SSL

{% hint style="info" %}
We used Letsencrypt for this demo.
{% endhint %}

This will only work if you have your FreePBX already activated.

Navigate to **Admin > Port Management**. Change the Admin (web portal) to another port and set Letsencrypt to port 80. Click **Update** **Now**.

![Port management] **img**

Please note that until here, you have been accessing the server by HTTP (not HTTPS) on port 80. Until you finish the SSL configuration, you are going to be using the newly selected port, 8080, in this demo.

Now navigate to **Admin > Certificate Management**, and click on **New Certificate** > **Generate Let’s Encrypt Certificate**:

![Certificate management] **img**

Fill out the form according to your settings and click **Generate Certificate**:

![Generate certificate] **img**

Once it’s generated, mark it as the system’s default:

![Default certificate] **img**

Now you can start using it. Go to the **Admin > System Admin > HTTPS Setup** and then to the **Settings** tab. Here select the certificate that was just generated and click on **Install**, wait, then select the Protocols TLS 1.2 and 1.3 as others are considered deprecated or insecure:

![HTTPS setup] **img**
Finally, click on **Save and Restart Apache** (A server restart is suggested here). Test in incognito that the changes are applied and the certificate is recognized as valid.

Additionally, you can go back to the **Admin > System Admin > Port Management** to enforce HTTPS, select your FQDN and select the force (arrow) button from HTTP (8080) to HTTPS (443), then click hit **Save**:

![] **img**

Test it. Congratulations! you have an HTTPS-valid SSL FreePBX server up and running.

## 4. Configure Asterisk to use PJSIP as the main (or only) SIP channel

\
We are using chan\_pjsip as the only SIP driver. Go to **Settings > Advanced** **Settings**, search for **SIP Channel Driver**, and choose **chan\_pjsip**. Hit **Submit**.

![PJSIP] **img**

## 5. Configure Asterisk HTTP/WebSocket features

\
Using the article [Configuring Asterisk for WebRTC Clients 1](https://wiki.asterisk.org/wiki/display/AST/Configuring+Asterisk+for+WebRTC+Clients) in Asterisk’s Wiki, we are going only for the principal parameters if you need more details, the article is a great guide.\\

### 5.1 Enable Asterisk’s WebSocket and mini-HTTP

\
First, check that you have the needed modules loaded using the command `module show like <module_name>`

![Modules] **img**

We are reusing the Let’s Encrypt certificates for the Asterisk mini-HTTP server, WebSockets, TLS encryption, and others. Start by going to **Settings > Advanced Settings** (again), search for the _Asterisk Builtin mini-HTTP server_ section and, configure as shown, apply changes. Asterisk restart is also recommended here:

![Asterisk Builtin mini-HTTP server] **img**
Using the command `http show status` verify that both HTTP and HTTPS are up and running:

![HTTP and HTTPS status] **img**

**If HTTP does but HTTPS doesn’t check that Asterisk can read the certificate and private key files:** Add capture of file reading error.

### 5.2 Enable the WS and WSS SIP transports

Navigate to **Settings > Asterisk SIP Settings**. In the **General SIP Settings** tab configure your audio codecs, enable video, and select video codecs (vp8 and vp9 needed for WebRTC), NAT, etc. Then in the **SIP Settings** (chan\_pjsip) tab, choose your valid SSL certificate for **TLS/SSL/SRTP** and enable all the desired transports, especially WS and WSS:

![SIP transports] **img**

Click submit and apply changes (an Asterisk restart is recommended)

### 5.3 Test Asterisk HTTP mini-server

\
Navigate to `https://mysub.domainname.domain:8089/httpstatus` and verify that it loads, SSL Port is present, and the SSL certificate is valid:

![Asterisk status] **img**

Congratulations! You have a valid SSL Asterisk WebRTC-ready server up and running.
