---
layout: default
parent: References
title: Credential tips and tricks
nav_order: 9010
permalink: /docs/credential-tips
---

# Credential tips

{: .note}
> ***Based on the credential information, take the appropriate approach in configuring Credential Alias records:***
> 
> *If all environments in the Deployment Pipeline will use the **same** credential information (same username/password), then only **one** Credential Alias record will be configured in production*
> 
> *- i.e., single Credential Alias record named '*Pipeline Credentials'*
>
> *However, if each environment in the Deployment Pipeline will use different credentials (different usernames / passwords), then Credential Alias records will be created for each instance in the production instance*
> 
> *- i.e., multiple Credential Alias records named 'Dev Credentials', 'Test Credentials', 'Stage Credentials', and 'Prod Credentials'*

{: .note}
> For your Pipeline Credentials, it is recommended to use a dedicated service account so that the password does not expire or change. 
>
> The service account **must exist** in the target instance(s) and have admin permissions.
>
