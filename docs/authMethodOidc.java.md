# `authMethodOidc` Submodule <a name="`authMethodOidc` Submodule" id="@cdktf/provider-boundary.authMethodOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethodOidc <a name="AuthMethodOidc" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc boundary_auth_method_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_oidc.AuthMethodOidc;

AuthMethodOidc.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .scopeId(java.lang.String)
//  .accountClaimMaps(java.util.List<java.lang.String>)
//  .allowedAudiences(java.util.List<java.lang.String>)
//  .apiUrlPrefix(java.lang.String)
//  .callbackUrl(java.lang.String)
//  .claimsScopes(java.util.List<java.lang.String>)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretHmac(java.lang.String)
//  .description(java.lang.String)
//  .disableDiscoveredConfigValidation(java.lang.Boolean)
//  .disableDiscoveredConfigValidation(IResolvable)
//  .idpCaCerts(java.util.List<java.lang.String>)
//  .isPrimaryForScope(java.lang.Boolean)
//  .isPrimaryForScope(IResolvable)
//  .issuer(java.lang.String)
//  .maxAge(java.lang.Number)
//  .name(java.lang.String)
//  .prompts(java.util.List<java.lang.String>)
//  .signingAlgorithms(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.accountClaimMaps">accountClaimMaps</a></code> | <code>java.util.List<java.lang.String></code> | Account claim maps for the to_claim of sub. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | Audiences for which the provider responses will be allowed. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.apiUrlPrefix">apiUrlPrefix</a></code> | <code>java.lang.String</code> | The API prefix to use when generating callback URLs for the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.callbackUrl">callbackUrl</a></code> | <code>java.lang.String</code> | The URL that should be provided to the IdP for callbacks. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.claimsScopes">claimsScopes</a></code> | <code>java.util.List<java.lang.String></code> | Claims scopes. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The secret key assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientSecretHmac">clientSecretHmac</a></code> | <code>java.lang.String</code> | The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.disableDiscoveredConfigValidation">disableDiscoveredConfigValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.idpCaCerts">idpCaCerts</a></code> | <code>java.util.List<java.lang.String></code> | A list of CA certificates to trust when validating the IdP's token signatures. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.isPrimaryForScope">isPrimaryForScope</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.issuer">issuer</a></code> | <code>java.lang.String</code> | The issuer corresponding to the provider, which must match the issuer field in generated tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.prompts">prompts</a></code> | <code>java.util.List<java.lang.String></code> | The prompts passed to the identity provider to determine whether to prompt the end-user for reauthentication, account selection or consent. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.signingAlgorithms">signingAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Allowed signing algorithms for the provider's issued tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of auth method; hardcoded. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#scope_id AuthMethodOidc#scope_id}

---

##### `accountClaimMaps`<sup>Optional</sup> <a name="accountClaimMaps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.accountClaimMaps"></a>

- *Type:* java.util.List<java.lang.String>

Account claim maps for the to_claim of sub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#account_claim_maps AuthMethodOidc#account_claim_maps}

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.allowedAudiences"></a>

- *Type:* java.util.List<java.lang.String>

Audiences for which the provider responses will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#allowed_audiences AuthMethodOidc#allowed_audiences}

---

##### `apiUrlPrefix`<sup>Optional</sup> <a name="apiUrlPrefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.apiUrlPrefix"></a>

- *Type:* java.lang.String

The API prefix to use when generating callback URLs for the provider.

Should be set to an address at which the provider can reach back to the controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#api_url_prefix AuthMethodOidc#api_url_prefix}

---

##### `callbackUrl`<sup>Optional</sup> <a name="callbackUrl" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.callbackUrl"></a>

- *Type:* java.lang.String

The URL that should be provided to the IdP for callbacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#callback_url AuthMethodOidc#callback_url}

---

##### `claimsScopes`<sup>Optional</sup> <a name="claimsScopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.claimsScopes"></a>

- *Type:* java.util.List<java.lang.String>

Claims scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#claims_scopes AuthMethodOidc#claims_scopes}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The client ID assigned to this auth method from the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_id AuthMethodOidc#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

The secret key assigned to this auth method from the provider.

Once set, only the hash will be kept and the original value can be removed from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_secret AuthMethodOidc#client_secret}

---

##### `clientSecretHmac`<sup>Optional</sup> <a name="clientSecretHmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientSecretHmac"></a>

- *Type:* java.lang.String

The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_secret_hmac AuthMethodOidc#client_secret_hmac}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#description AuthMethodOidc#description}

---

##### `disableDiscoveredConfigValidation`<sup>Optional</sup> <a name="disableDiscoveredConfigValidation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.disableDiscoveredConfigValidation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here.

The validation is only performed at create or update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#disable_discovered_config_validation AuthMethodOidc#disable_discovered_config_validation}

---

##### `idpCaCerts`<sup>Optional</sup> <a name="idpCaCerts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.idpCaCerts"></a>

- *Type:* java.util.List<java.lang.String>

A list of CA certificates to trust when validating the IdP's token signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#idp_ca_certs AuthMethodOidc#idp_ca_certs}

---

##### `isPrimaryForScope`<sup>Optional</sup> <a name="isPrimaryForScope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.isPrimaryForScope"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the user will be automatically created when they login using an OIDC account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#is_primary_for_scope AuthMethodOidc#is_primary_for_scope}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.issuer"></a>

- *Type:* java.lang.String

The issuer corresponding to the provider, which must match the issuer field in generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#issuer AuthMethodOidc#issuer}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.maxAge"></a>

- *Type:* java.lang.Number

The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again.

A value of 0 sets an immediate requirement for all users to reauthenticate, and an unset maxAge results in a Terraform value of -1 and the default TTL of the chosen OIDC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#max_age AuthMethodOidc#max_age}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#name AuthMethodOidc#name}

---

##### `prompts`<sup>Optional</sup> <a name="prompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.prompts"></a>

- *Type:* java.util.List<java.lang.String>

The prompts passed to the identity provider to determine whether to prompt the end-user for reauthentication, account selection or consent.

Please note the values passed are case-sensitive. The valid values are: `none`, `login`, `consent` and `select_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#prompts AuthMethodOidc#prompts}

---

##### `signingAlgorithms`<sup>Optional</sup> <a name="signingAlgorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.signingAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

Allowed signing algorithms for the provider's issued tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#signing_algorithms AuthMethodOidc#signing_algorithms}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#state AuthMethodOidc#state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#type AuthMethodOidc#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAccountClaimMaps">resetAccountClaimMaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAllowedAudiences">resetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetApiUrlPrefix">resetApiUrlPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetCallbackUrl">resetCallbackUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClaimsScopes">resetClaimsScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecretHmac">resetClientSecretHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDisableDiscoveredConfigValidation">resetDisableDiscoveredConfigValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIdpCaCerts">resetIdpCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIsPrimaryForScope">resetIsPrimaryForScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetMaxAge">resetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetPrompts">resetPrompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetSigningAlgorithms">resetSigningAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountClaimMaps` <a name="resetAccountClaimMaps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAccountClaimMaps"></a>

```java
public void resetAccountClaimMaps()
```

##### `resetAllowedAudiences` <a name="resetAllowedAudiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAllowedAudiences"></a>

```java
public void resetAllowedAudiences()
```

##### `resetApiUrlPrefix` <a name="resetApiUrlPrefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetApiUrlPrefix"></a>

```java
public void resetApiUrlPrefix()
```

##### `resetCallbackUrl` <a name="resetCallbackUrl" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetCallbackUrl"></a>

```java
public void resetCallbackUrl()
```

##### `resetClaimsScopes` <a name="resetClaimsScopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClaimsScopes"></a>

```java
public void resetClaimsScopes()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetClientSecretHmac` <a name="resetClientSecretHmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecretHmac"></a>

```java
public void resetClientSecretHmac()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableDiscoveredConfigValidation` <a name="resetDisableDiscoveredConfigValidation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDisableDiscoveredConfigValidation"></a>

```java
public void resetDisableDiscoveredConfigValidation()
```

##### `resetIdpCaCerts` <a name="resetIdpCaCerts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIdpCaCerts"></a>

```java
public void resetIdpCaCerts()
```

##### `resetIsPrimaryForScope` <a name="resetIsPrimaryForScope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIsPrimaryForScope"></a>

```java
public void resetIsPrimaryForScope()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetMaxAge"></a>

```java
public void resetMaxAge()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetName"></a>

```java
public void resetName()
```

##### `resetPrompts` <a name="resetPrompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetPrompts"></a>

```java
public void resetPrompts()
```

##### `resetSigningAlgorithms` <a name="resetSigningAlgorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetSigningAlgorithms"></a>

```java
public void resetSigningAlgorithms()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetState"></a>

```java
public void resetState()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AuthMethodOidc resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_oidc.AuthMethodOidc;

AuthMethodOidc.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_oidc.AuthMethodOidc;

AuthMethodOidc.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_oidc.AuthMethodOidc;

AuthMethodOidc.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_oidc.AuthMethodOidc;

AuthMethodOidc.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AuthMethodOidc.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AuthMethodOidc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AuthMethodOidc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AuthMethodOidc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethodOidc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMapsInput">accountClaimMapsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiencesInput">allowedAudiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefixInput">apiUrlPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrlInput">callbackUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopesInput">claimsScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmacInput">clientSecretHmacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidationInput">disableDiscoveredConfigValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCertsInput">idpCaCertsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScopeInput">isPrimaryForScopeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.promptsInput">promptsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithmsInput">signingAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMaps">accountClaimMaps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefix">apiUrlPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrl">callbackUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopes">claimsScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmac">clientSecretHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidation">disableDiscoveredConfigValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCerts">idpCaCerts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScope">isPrimaryForScope</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.prompts">prompts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithms">signingAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accountClaimMapsInput`<sup>Optional</sup> <a name="accountClaimMapsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMapsInput"></a>

```java
public java.util.List<java.lang.String> getAccountClaimMapsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAudiencesInput`<sup>Optional</sup> <a name="allowedAudiencesInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiencesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiUrlPrefixInput`<sup>Optional</sup> <a name="apiUrlPrefixInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefixInput"></a>

```java
public java.lang.String getApiUrlPrefixInput();
```

- *Type:* java.lang.String

---

##### `callbackUrlInput`<sup>Optional</sup> <a name="callbackUrlInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrlInput"></a>

```java
public java.lang.String getCallbackUrlInput();
```

- *Type:* java.lang.String

---

##### `claimsScopesInput`<sup>Optional</sup> <a name="claimsScopesInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopesInput"></a>

```java
public java.util.List<java.lang.String> getClaimsScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretHmacInput`<sup>Optional</sup> <a name="clientSecretHmacInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmacInput"></a>

```java
public java.lang.String getClientSecretHmacInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableDiscoveredConfigValidationInput`<sup>Optional</sup> <a name="disableDiscoveredConfigValidationInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidationInput"></a>

```java
public java.lang.Object getDisableDiscoveredConfigValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idpCaCertsInput`<sup>Optional</sup> <a name="idpCaCertsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCertsInput"></a>

```java
public java.util.List<java.lang.String> getIdpCaCertsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isPrimaryForScopeInput`<sup>Optional</sup> <a name="isPrimaryForScopeInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScopeInput"></a>

```java
public java.lang.Object getIsPrimaryForScopeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `promptsInput`<sup>Optional</sup> <a name="promptsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.promptsInput"></a>

```java
public java.util.List<java.lang.String> getPromptsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `signingAlgorithmsInput`<sup>Optional</sup> <a name="signingAlgorithmsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getSigningAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountClaimMaps`<sup>Required</sup> <a name="accountClaimMaps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMaps"></a>

```java
public java.util.List<java.lang.String> getAccountClaimMaps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiUrlPrefix`<sup>Required</sup> <a name="apiUrlPrefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefix"></a>

```java
public java.lang.String getApiUrlPrefix();
```

- *Type:* java.lang.String

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrl"></a>

```java
public java.lang.String getCallbackUrl();
```

- *Type:* java.lang.String

---

##### `claimsScopes`<sup>Required</sup> <a name="claimsScopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopes"></a>

```java
public java.util.List<java.lang.String> getClaimsScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientSecretHmac`<sup>Required</sup> <a name="clientSecretHmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmac"></a>

```java
public java.lang.String getClientSecretHmac();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableDiscoveredConfigValidation`<sup>Required</sup> <a name="disableDiscoveredConfigValidation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidation"></a>

```java
public java.lang.Object getDisableDiscoveredConfigValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idpCaCerts`<sup>Required</sup> <a name="idpCaCerts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCerts"></a>

```java
public java.util.List<java.lang.String> getIdpCaCerts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isPrimaryForScope`<sup>Required</sup> <a name="isPrimaryForScope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScope"></a>

```java
public java.lang.Object getIsPrimaryForScope();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `prompts`<sup>Required</sup> <a name="prompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.prompts"></a>

```java
public java.util.List<java.lang.String> getPrompts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

##### `signingAlgorithms`<sup>Required</sup> <a name="signingAlgorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithms"></a>

```java
public java.util.List<java.lang.String> getSigningAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodOidcConfig <a name="AuthMethodOidcConfig" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_oidc.AuthMethodOidcConfig;

AuthMethodOidcConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .scopeId(java.lang.String)
//  .accountClaimMaps(java.util.List<java.lang.String>)
//  .allowedAudiences(java.util.List<java.lang.String>)
//  .apiUrlPrefix(java.lang.String)
//  .callbackUrl(java.lang.String)
//  .claimsScopes(java.util.List<java.lang.String>)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretHmac(java.lang.String)
//  .description(java.lang.String)
//  .disableDiscoveredConfigValidation(java.lang.Boolean)
//  .disableDiscoveredConfigValidation(IResolvable)
//  .idpCaCerts(java.util.List<java.lang.String>)
//  .isPrimaryForScope(java.lang.Boolean)
//  .isPrimaryForScope(IResolvable)
//  .issuer(java.lang.String)
//  .maxAge(java.lang.Number)
//  .name(java.lang.String)
//  .prompts(java.util.List<java.lang.String>)
//  .signingAlgorithms(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.accountClaimMaps">accountClaimMaps</a></code> | <code>java.util.List<java.lang.String></code> | Account claim maps for the to_claim of sub. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.allowedAudiences">allowedAudiences</a></code> | <code>java.util.List<java.lang.String></code> | Audiences for which the provider responses will be allowed. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.apiUrlPrefix">apiUrlPrefix</a></code> | <code>java.lang.String</code> | The API prefix to use when generating callback URLs for the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.callbackUrl">callbackUrl</a></code> | <code>java.lang.String</code> | The URL that should be provided to the IdP for callbacks. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.claimsScopes">claimsScopes</a></code> | <code>java.util.List<java.lang.String></code> | Claims scopes. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The secret key assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecretHmac">clientSecretHmac</a></code> | <code>java.lang.String</code> | The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.description">description</a></code> | <code>java.lang.String</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.disableDiscoveredConfigValidation">disableDiscoveredConfigValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.idpCaCerts">idpCaCerts</a></code> | <code>java.util.List<java.lang.String></code> | A list of CA certificates to trust when validating the IdP's token signatures. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.isPrimaryForScope">isPrimaryForScope</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | The issuer corresponding to the provider, which must match the issuer field in generated tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.name">name</a></code> | <code>java.lang.String</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.prompts">prompts</a></code> | <code>java.util.List<java.lang.String></code> | The prompts passed to the identity provider to determine whether to prompt the end-user for reauthentication, account selection or consent. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.signingAlgorithms">signingAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Allowed signing algorithms for the provider's issued tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.state">state</a></code> | <code>java.lang.String</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of auth method; hardcoded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#scope_id AuthMethodOidc#scope_id}

---

##### `accountClaimMaps`<sup>Optional</sup> <a name="accountClaimMaps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.accountClaimMaps"></a>

```java
public java.util.List<java.lang.String> getAccountClaimMaps();
```

- *Type:* java.util.List<java.lang.String>

Account claim maps for the to_claim of sub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#account_claim_maps AuthMethodOidc#account_claim_maps}

---

##### `allowedAudiences`<sup>Optional</sup> <a name="allowedAudiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.allowedAudiences"></a>

```java
public java.util.List<java.lang.String> getAllowedAudiences();
```

- *Type:* java.util.List<java.lang.String>

Audiences for which the provider responses will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#allowed_audiences AuthMethodOidc#allowed_audiences}

---

##### `apiUrlPrefix`<sup>Optional</sup> <a name="apiUrlPrefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.apiUrlPrefix"></a>

```java
public java.lang.String getApiUrlPrefix();
```

- *Type:* java.lang.String

The API prefix to use when generating callback URLs for the provider.

Should be set to an address at which the provider can reach back to the controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#api_url_prefix AuthMethodOidc#api_url_prefix}

---

##### `callbackUrl`<sup>Optional</sup> <a name="callbackUrl" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.callbackUrl"></a>

```java
public java.lang.String getCallbackUrl();
```

- *Type:* java.lang.String

The URL that should be provided to the IdP for callbacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#callback_url AuthMethodOidc#callback_url}

---

##### `claimsScopes`<sup>Optional</sup> <a name="claimsScopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.claimsScopes"></a>

```java
public java.util.List<java.lang.String> getClaimsScopes();
```

- *Type:* java.util.List<java.lang.String>

Claims scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#claims_scopes AuthMethodOidc#claims_scopes}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID assigned to this auth method from the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_id AuthMethodOidc#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The secret key assigned to this auth method from the provider.

Once set, only the hash will be kept and the original value can be removed from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_secret AuthMethodOidc#client_secret}

---

##### `clientSecretHmac`<sup>Optional</sup> <a name="clientSecretHmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecretHmac"></a>

```java
public java.lang.String getClientSecretHmac();
```

- *Type:* java.lang.String

The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_secret_hmac AuthMethodOidc#client_secret_hmac}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#description AuthMethodOidc#description}

---

##### `disableDiscoveredConfigValidation`<sup>Optional</sup> <a name="disableDiscoveredConfigValidation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.disableDiscoveredConfigValidation"></a>

```java
public java.lang.Object getDisableDiscoveredConfigValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here.

The validation is only performed at create or update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#disable_discovered_config_validation AuthMethodOidc#disable_discovered_config_validation}

---

##### `idpCaCerts`<sup>Optional</sup> <a name="idpCaCerts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.idpCaCerts"></a>

```java
public java.util.List<java.lang.String> getIdpCaCerts();
```

- *Type:* java.util.List<java.lang.String>

A list of CA certificates to trust when validating the IdP's token signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#idp_ca_certs AuthMethodOidc#idp_ca_certs}

---

##### `isPrimaryForScope`<sup>Optional</sup> <a name="isPrimaryForScope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.isPrimaryForScope"></a>

```java
public java.lang.Object getIsPrimaryForScope();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the user will be automatically created when they login using an OIDC account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#is_primary_for_scope AuthMethodOidc#is_primary_for_scope}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

The issuer corresponding to the provider, which must match the issuer field in generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#issuer AuthMethodOidc#issuer}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again.

A value of 0 sets an immediate requirement for all users to reauthenticate, and an unset maxAge results in a Terraform value of -1 and the default TTL of the chosen OIDC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#max_age AuthMethodOidc#max_age}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#name AuthMethodOidc#name}

---

##### `prompts`<sup>Optional</sup> <a name="prompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.prompts"></a>

```java
public java.util.List<java.lang.String> getPrompts();
```

- *Type:* java.util.List<java.lang.String>

The prompts passed to the identity provider to determine whether to prompt the end-user for reauthentication, account selection or consent.

Please note the values passed are case-sensitive. The valid values are: `none`, `login`, `consent` and `select_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#prompts AuthMethodOidc#prompts}

---

##### `signingAlgorithms`<sup>Optional</sup> <a name="signingAlgorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.signingAlgorithms"></a>

```java
public java.util.List<java.lang.String> getSigningAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

Allowed signing algorithms for the provider's issued tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#signing_algorithms AuthMethodOidc#signing_algorithms}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#state AuthMethodOidc#state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#type AuthMethodOidc#type}

---



