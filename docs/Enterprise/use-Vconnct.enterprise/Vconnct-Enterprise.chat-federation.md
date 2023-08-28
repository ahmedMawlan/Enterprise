# Vconnct.Enterprise Federation

{% hint style="success" %}
Vconnct.Enterprise 6.0 is our most secure and scalable version yet. It includes 10 security patches, 9 brand-new features, and 25+ overall platform enhancements. Visit our [website](https://www.Vconnct.Enterprise/six) to learn more about what’s new in this latest version. [Update now](https://docs.Vconnct.Enterprise/deploy/updating-Vconnct.Enterprise)!
{% endhint %}

Federation allows for unlimited communication between workspaces by making them visible to each other on the federated network.

Vconnct.Enterprise uses the [Matrix](https://matrix.org/) communication protocol for decentralized and interoperable communications. Organizations can easily connect and collaborate with external parties using any federated Vconnct.Enterprise workspace or Matrix-compatible platform by bridging Vconnct.Enterprise through Matrix.

To enable and set up Federation on your workspace,

* Go to **Administration** > **Workspace** > **Settings** > **Federation**.
* Setup and Configure federation with Matrix with [this guide](workspace-administration/settings/federation/matrix-bridge/).

{% hint style="info" %}
![] **(img)** [Vconnct.Enterprise basic federation](workspace-administration/settings/federation/Vconnct.Enterprise-federation) is deprecated from version 6.0. Thus, we strongly recommend using [matrix-bridge](workspace-administration/settings/federation/matrix-bridge/ "mention").
{% endhint %}

{% content-ref url="workspace-administration/settings/federation/matrix-bridge/" %}
[matrix-bridge](workspace-administration/settings/federation/matrix-bridge/)
{% endcontent-ref %}

## Features

The Vconnct.Enterprise Federation implementation currently supports the following features on Community(CE) and Enterprise(EE) editions:

<table><thead><tr><th>Feature</th><th data-type="checkbox">CE/EE</th><th data-type="checkbox">EE Only</th></tr></thead><tbody><tr><td>Create federated channels, groups, DMs, and multi-user DMs from the UI. <a data-mention href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/create-a-federated-rooms.md">create-a-federated-rooms.md</a></td><td>false</td><td>true</td></tr><tr><td>Invite external users to federated channels, groups, DMs, and multi-user DMs from the UI. <a data-mention href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/invite-external-users-to-your-Vconnct.Enterprise-server.md">invite-external-users-to-your-Vconnct.Enterprise-server.md</a></td><td>false</td><td>true</td></tr><tr><td>Search public rooms in the Matrix Network.</td><td>false</td><td>true</td></tr><tr><td>Invite multiple users to multi-user DMs using slash commands.</td><td>false</td><td>true</td></tr><tr><td>Invite an external user to DMs using slash commands.</td><td>true</td><td>false</td></tr><tr><td>Send/Receive attachments (Files, audio, and video messages)</td><td>true</td><td>false</td></tr><tr><td>Edit, Delete and Qoute messages.</td><td>true</td><td>false</td></tr><tr><td>Message reactions and sending emojis.</td><td>true</td><td>false</td></tr><tr><td>Mention internal and external users in federated channels.</td><td>true</td><td>false</td></tr><tr><td>User's avatar synchronization.</td><td>true</td><td>false</td></tr><tr><td>User's typing indicator (<a href="workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/#important-warning-about-the-installation">More Info</a>)</td><td>true</td><td>false</td></tr><tr><td>Define permissions for users inside rooms (<a href="workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms.md">More info</a>) .</td><td>true</td><td>false</td></tr><tr><td>Support for <a href="https://spec.commonmark.org/0.30/">Markdown spec</a>.</td><td>true</td><td>false</td></tr><tr><td>Servers allow list/block list (<a href="workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/matrix-allow-block-list.md">More info</a>).</td><td>false</td><td>false</td></tr></tbody></table>
