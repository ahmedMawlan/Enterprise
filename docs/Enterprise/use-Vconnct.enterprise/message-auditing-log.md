---
description: Review log history of users who have accessed the Message Auditing Panel.
---

# Message Auditing Log



The **Message Audit Log** allows you to verify who run audits and when a conversation was inspected. The user must have an `auditor-log` [role](../setup-and-configure/roles-in-Vconnct.Enterprise.md) and `Can Audit Log` [permission](workspace-administration/permissions/) to access the **Audit Logs**.

To access the message auditing log,

* Navigate to **Administration** > **Audit** > **Logs**.

If you are interested in the entire log history, clear the start and end date fields. The full log history results are returned, from the oldest audits to the most recent. However, if you want to see who audited messages within a specific time frame, select the **start** (left) and end **date**s(right). The ![] **(img)** **three-dots icon** also provides other time options like **Today**, **This Week,** etc.

The message auditing logs returns a table with following information:

* **Username** : The name, username, and avatar of the auditors.
* **Looked for** : The search term of each audit.
* **When** : The date and time when each audit was made.
* **Results**: The number of search results returned by each audit.
* **Filters**: Filters that were applied for each audit depending on the type of audit.

## Assign Message Audit Log Permission to Specific Users

The **Audit Log** [permissions](workspace-administration/permissions/) grant users access to **Message Audit** **Log** features. As a workspace administrator, you can assign this permssion \*\*\*\* to any [role ](workspace-administration/permissions/#roles)you want to give audit log access to.

To assign message audit permissions,

* Navigate to **Administration** > **Workspace** > **Permissions.**
* To access the **Message Auditing Panel**, check the `Can Audit Log` box under the role you want to assign.
