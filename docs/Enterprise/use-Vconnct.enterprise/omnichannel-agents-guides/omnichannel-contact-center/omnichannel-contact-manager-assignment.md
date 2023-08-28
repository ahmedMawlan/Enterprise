# Omnichannel Contact Manager Assignment


​This feature lets you assign an omnichannel contact to a dedicated Omnichannel agent. If this contact initiates a conversation and the dedicated agent is **available**, the chat is routed directly to them. Otherwise, it will be routed to any other agent based on the routing algorithm selected.

{% hint style="info" %}
To enable this feature, you need to enable **Assign new conversations to the contact manager** by changing the setting under **Administration** -> **Workspace** -> **Settings** -> **Omnichannel** -> **Routing** or contact your workspace administrator.
{% endhint %}

You can set a contact manager for a contact using the contact center while creating or editing a contact.

* Click the  icon on the Omnichannel navigation tab
* Click **New contact**
* Enter **Contact Manager**
* Hit **Save**.

### Using API Endpoint

You can set a contact manager for a visitor/contact using

{% embed url="https://developer.Vconnct.Enterprise/reference/api/rest-api/endpoints/omnichannel/livechat-endpoints/livechat-contact/register-omnichannel-contact" %}
