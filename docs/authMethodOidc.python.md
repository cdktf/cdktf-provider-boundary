# `authMethodOidc` Submodule <a name="`authMethodOidc` Submodule" id="@cdktf/provider-boundary.authMethodOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethodOidc <a name="AuthMethodOidc" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc boundary_auth_method_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_oidc

authMethodOidc.AuthMethodOidc(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  scope_id: str,
  account_claim_maps: typing.List[str] = None,
  allowed_audiences: typing.List[str] = None,
  api_url_prefix: str = None,
  callback_url: str = None,
  claims_scopes: typing.List[str] = None,
  client_id: str = None,
  client_secret: str = None,
  client_secret_hmac: str = None,
  description: str = None,
  disable_discovered_config_validation: bool | IResolvable = None,
  idp_ca_certs: typing.List[str] = None,
  is_primary_for_scope: bool | IResolvable = None,
  issuer: str = None,
  max_age: typing.Union[int, float] = None,
  name: str = None,
  prompts: typing.List[str] = None,
  signing_algorithms: typing.List[str] = None,
  state: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.accountClaimMaps">account_claim_maps</a></code> | <code>typing.List[str]</code> | Account claim maps for the to_claim of sub. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | Audiences for which the provider responses will be allowed. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.apiUrlPrefix">api_url_prefix</a></code> | <code>str</code> | The API prefix to use when generating callback URLs for the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.callbackUrl">callback_url</a></code> | <code>str</code> | The URL that should be provided to the IdP for callbacks. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.claimsScopes">claims_scopes</a></code> | <code>typing.List[str]</code> | Claims scopes. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | The client ID assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | The secret key assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientSecretHmac">client_secret_hmac</a></code> | <code>str</code> | The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.description">description</a></code> | <code>str</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.disableDiscoveredConfigValidation">disable_discovered_config_validation</a></code> | <code>bool \| cdktf.IResolvable</code> | Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.idpCaCerts">idp_ca_certs</a></code> | <code>typing.List[str]</code> | A list of CA certificates to trust when validating the IdP's token signatures. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.isPrimaryForScope">is_primary_for_scope</a></code> | <code>bool \| cdktf.IResolvable</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | The issuer corresponding to the provider, which must match the issuer field in generated tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.name">name</a></code> | <code>str</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.prompts">prompts</a></code> | <code>typing.List[str]</code> | The prompts passed to the identity provider to determine whether to prompt the end-user for reauthentication, account selection or consent. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.signingAlgorithms">signing_algorithms</a></code> | <code>typing.List[str]</code> | Allowed signing algorithms for the provider's issued tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.state">state</a></code> | <code>str</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of auth method; hardcoded. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#scope_id AuthMethodOidc#scope_id}

---

##### `account_claim_maps`<sup>Optional</sup> <a name="account_claim_maps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.accountClaimMaps"></a>

- *Type:* typing.List[str]

Account claim maps for the to_claim of sub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#account_claim_maps AuthMethodOidc#account_claim_maps}

---

##### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.allowedAudiences"></a>

- *Type:* typing.List[str]

Audiences for which the provider responses will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#allowed_audiences AuthMethodOidc#allowed_audiences}

---

##### `api_url_prefix`<sup>Optional</sup> <a name="api_url_prefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.apiUrlPrefix"></a>

- *Type:* str

The API prefix to use when generating callback URLs for the provider.

Should be set to an address at which the provider can reach back to the controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#api_url_prefix AuthMethodOidc#api_url_prefix}

---

##### `callback_url`<sup>Optional</sup> <a name="callback_url" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.callbackUrl"></a>

- *Type:* str

The URL that should be provided to the IdP for callbacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#callback_url AuthMethodOidc#callback_url}

---

##### `claims_scopes`<sup>Optional</sup> <a name="claims_scopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.claimsScopes"></a>

- *Type:* typing.List[str]

Claims scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#claims_scopes AuthMethodOidc#claims_scopes}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientId"></a>

- *Type:* str

The client ID assigned to this auth method from the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_id AuthMethodOidc#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientSecret"></a>

- *Type:* str

The secret key assigned to this auth method from the provider.

Once set, only the hash will be kept and the original value can be removed from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_secret AuthMethodOidc#client_secret}

---

##### `client_secret_hmac`<sup>Optional</sup> <a name="client_secret_hmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.clientSecretHmac"></a>

- *Type:* str

The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_secret_hmac AuthMethodOidc#client_secret_hmac}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.description"></a>

- *Type:* str

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#description AuthMethodOidc#description}

---

##### `disable_discovered_config_validation`<sup>Optional</sup> <a name="disable_discovered_config_validation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.disableDiscoveredConfigValidation"></a>

- *Type:* bool | cdktf.IResolvable

Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here.

The validation is only performed at create or update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#disable_discovered_config_validation AuthMethodOidc#disable_discovered_config_validation}

---

##### `idp_ca_certs`<sup>Optional</sup> <a name="idp_ca_certs" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.idpCaCerts"></a>

- *Type:* typing.List[str]

A list of CA certificates to trust when validating the IdP's token signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#idp_ca_certs AuthMethodOidc#idp_ca_certs}

---

##### `is_primary_for_scope`<sup>Optional</sup> <a name="is_primary_for_scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.isPrimaryForScope"></a>

- *Type:* bool | cdktf.IResolvable

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the user will be automatically created when they login using an OIDC account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#is_primary_for_scope AuthMethodOidc#is_primary_for_scope}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.issuer"></a>

- *Type:* str

The issuer corresponding to the provider, which must match the issuer field in generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#issuer AuthMethodOidc#issuer}

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.maxAge"></a>

- *Type:* typing.Union[int, float]

The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again.

A value of 0 sets an immediate requirement for all users to reauthenticate, and an unset maxAge results in a Terraform value of -1 and the default TTL of the chosen OIDC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#max_age AuthMethodOidc#max_age}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.name"></a>

- *Type:* str

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#name AuthMethodOidc#name}

---

##### `prompts`<sup>Optional</sup> <a name="prompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.prompts"></a>

- *Type:* typing.List[str]

The prompts passed to the identity provider to determine whether to prompt the end-user for reauthentication, account selection or consent.

Please note the values passed are case-sensitive. The valid values are: `none`, `login`, `consent` and `select_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#prompts AuthMethodOidc#prompts}

---

##### `signing_algorithms`<sup>Optional</sup> <a name="signing_algorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.signingAlgorithms"></a>

- *Type:* typing.List[str]

Allowed signing algorithms for the provider's issued tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#signing_algorithms AuthMethodOidc#signing_algorithms}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.state"></a>

- *Type:* str

Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#state AuthMethodOidc#state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.type"></a>

- *Type:* str

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#type AuthMethodOidc#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAccountClaimMaps">reset_account_claim_maps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAllowedAudiences">reset_allowed_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetApiUrlPrefix">reset_api_url_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetCallbackUrl">reset_callback_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClaimsScopes">reset_claims_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecretHmac">reset_client_secret_hmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDisableDiscoveredConfigValidation">reset_disable_discovered_config_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIdpCaCerts">reset_idp_ca_certs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIsPrimaryForScope">reset_is_primary_for_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetMaxAge">reset_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetPrompts">reset_prompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetSigningAlgorithms">reset_signing_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_claim_maps` <a name="reset_account_claim_maps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAccountClaimMaps"></a>

```python
def reset_account_claim_maps() -> None
```

##### `reset_allowed_audiences` <a name="reset_allowed_audiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAllowedAudiences"></a>

```python
def reset_allowed_audiences() -> None
```

##### `reset_api_url_prefix` <a name="reset_api_url_prefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetApiUrlPrefix"></a>

```python
def reset_api_url_prefix() -> None
```

##### `reset_callback_url` <a name="reset_callback_url" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetCallbackUrl"></a>

```python
def reset_callback_url() -> None
```

##### `reset_claims_scopes` <a name="reset_claims_scopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClaimsScopes"></a>

```python
def reset_claims_scopes() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_hmac` <a name="reset_client_secret_hmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecretHmac"></a>

```python
def reset_client_secret_hmac() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_discovered_config_validation` <a name="reset_disable_discovered_config_validation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDisableDiscoveredConfigValidation"></a>

```python
def reset_disable_discovered_config_validation() -> None
```

##### `reset_idp_ca_certs` <a name="reset_idp_ca_certs" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIdpCaCerts"></a>

```python
def reset_idp_ca_certs() -> None
```

##### `reset_is_primary_for_scope` <a name="reset_is_primary_for_scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIsPrimaryForScope"></a>

```python
def reset_is_primary_for_scope() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetMaxAge"></a>

```python
def reset_max_age() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_prompts` <a name="reset_prompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetPrompts"></a>

```python
def reset_prompts() -> None
```

##### `reset_signing_algorithms` <a name="reset_signing_algorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetSigningAlgorithms"></a>

```python
def reset_signing_algorithms() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuthMethodOidc resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_oidc

authMethodOidc.AuthMethodOidc.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_oidc

authMethodOidc.AuthMethodOidc.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_oidc

authMethodOidc.AuthMethodOidc.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_oidc

authMethodOidc.AuthMethodOidc.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuthMethodOidc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthMethodOidc to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthMethodOidc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethodOidc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMapsInput">account_claim_maps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiencesInput">allowed_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefixInput">api_url_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrlInput">callback_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopesInput">claims_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmacInput">client_secret_hmac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidationInput">disable_discovered_config_validation_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCertsInput">idp_ca_certs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScopeInput">is_primary_for_scope_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAgeInput">max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.promptsInput">prompts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithmsInput">signing_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMaps">account_claim_maps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefix">api_url_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrl">callback_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopes">claims_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmac">client_secret_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidation">disable_discovered_config_validation</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCerts">idp_ca_certs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScope">is_primary_for_scope</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.prompts">prompts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithms">signing_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_claim_maps_input`<sup>Optional</sup> <a name="account_claim_maps_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMapsInput"></a>

```python
account_claim_maps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_audiences_input`<sup>Optional</sup> <a name="allowed_audiences_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiencesInput"></a>

```python
allowed_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_url_prefix_input`<sup>Optional</sup> <a name="api_url_prefix_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefixInput"></a>

```python
api_url_prefix_input: str
```

- *Type:* str

---

##### `callback_url_input`<sup>Optional</sup> <a name="callback_url_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrlInput"></a>

```python
callback_url_input: str
```

- *Type:* str

---

##### `claims_scopes_input`<sup>Optional</sup> <a name="claims_scopes_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopesInput"></a>

```python
claims_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_hmac_input`<sup>Optional</sup> <a name="client_secret_hmac_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmacInput"></a>

```python
client_secret_hmac_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_discovered_config_validation_input`<sup>Optional</sup> <a name="disable_discovered_config_validation_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidationInput"></a>

```python
disable_discovered_config_validation_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `idp_ca_certs_input`<sup>Optional</sup> <a name="idp_ca_certs_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCertsInput"></a>

```python
idp_ca_certs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_primary_for_scope_input`<sup>Optional</sup> <a name="is_primary_for_scope_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScopeInput"></a>

```python
is_primary_for_scope_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAgeInput"></a>

```python
max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `prompts_input`<sup>Optional</sup> <a name="prompts_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.promptsInput"></a>

```python
prompts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `signing_algorithms_input`<sup>Optional</sup> <a name="signing_algorithms_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithmsInput"></a>

```python
signing_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_claim_maps`<sup>Required</sup> <a name="account_claim_maps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMaps"></a>

```python
account_claim_maps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_audiences`<sup>Required</sup> <a name="allowed_audiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_url_prefix`<sup>Required</sup> <a name="api_url_prefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefix"></a>

```python
api_url_prefix: str
```

- *Type:* str

---

##### `callback_url`<sup>Required</sup> <a name="callback_url" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrl"></a>

```python
callback_url: str
```

- *Type:* str

---

##### `claims_scopes`<sup>Required</sup> <a name="claims_scopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopes"></a>

```python
claims_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_hmac`<sup>Required</sup> <a name="client_secret_hmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmac"></a>

```python
client_secret_hmac: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_discovered_config_validation`<sup>Required</sup> <a name="disable_discovered_config_validation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidation"></a>

```python
disable_discovered_config_validation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `idp_ca_certs`<sup>Required</sup> <a name="idp_ca_certs" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCerts"></a>

```python
idp_ca_certs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_primary_for_scope`<sup>Required</sup> <a name="is_primary_for_scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScope"></a>

```python
is_primary_for_scope: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prompts`<sup>Required</sup> <a name="prompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.prompts"></a>

```python
prompts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `signing_algorithms`<sup>Required</sup> <a name="signing_algorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithms"></a>

```python
signing_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodOidcConfig <a name="AuthMethodOidcConfig" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_oidc

authMethodOidc.AuthMethodOidcConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  scope_id: str,
  account_claim_maps: typing.List[str] = None,
  allowed_audiences: typing.List[str] = None,
  api_url_prefix: str = None,
  callback_url: str = None,
  claims_scopes: typing.List[str] = None,
  client_id: str = None,
  client_secret: str = None,
  client_secret_hmac: str = None,
  description: str = None,
  disable_discovered_config_validation: bool | IResolvable = None,
  idp_ca_certs: typing.List[str] = None,
  is_primary_for_scope: bool | IResolvable = None,
  issuer: str = None,
  max_age: typing.Union[int, float] = None,
  name: str = None,
  prompts: typing.List[str] = None,
  signing_algorithms: typing.List[str] = None,
  state: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.accountClaimMaps">account_claim_maps</a></code> | <code>typing.List[str]</code> | Account claim maps for the to_claim of sub. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | Audiences for which the provider responses will be allowed. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.apiUrlPrefix">api_url_prefix</a></code> | <code>str</code> | The API prefix to use when generating callback URLs for the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.callbackUrl">callback_url</a></code> | <code>str</code> | The URL that should be provided to the IdP for callbacks. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.claimsScopes">claims_scopes</a></code> | <code>typing.List[str]</code> | Claims scopes. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The secret key assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecretHmac">client_secret_hmac</a></code> | <code>str</code> | The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.description">description</a></code> | <code>str</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.disableDiscoveredConfigValidation">disable_discovered_config_validation</a></code> | <code>bool \| cdktf.IResolvable</code> | Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.idpCaCerts">idp_ca_certs</a></code> | <code>typing.List[str]</code> | A list of CA certificates to trust when validating the IdP's token signatures. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.isPrimaryForScope">is_primary_for_scope</a></code> | <code>bool \| cdktf.IResolvable</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.issuer">issuer</a></code> | <code>str</code> | The issuer corresponding to the provider, which must match the issuer field in generated tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.name">name</a></code> | <code>str</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.prompts">prompts</a></code> | <code>typing.List[str]</code> | The prompts passed to the identity provider to determine whether to prompt the end-user for reauthentication, account selection or consent. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.signingAlgorithms">signing_algorithms</a></code> | <code>typing.List[str]</code> | Allowed signing algorithms for the provider's issued tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.state">state</a></code> | <code>str</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.type">type</a></code> | <code>str</code> | The type of auth method; hardcoded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#scope_id AuthMethodOidc#scope_id}

---

##### `account_claim_maps`<sup>Optional</sup> <a name="account_claim_maps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.accountClaimMaps"></a>

```python
account_claim_maps: typing.List[str]
```

- *Type:* typing.List[str]

Account claim maps for the to_claim of sub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#account_claim_maps AuthMethodOidc#account_claim_maps}

---

##### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

Audiences for which the provider responses will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#allowed_audiences AuthMethodOidc#allowed_audiences}

---

##### `api_url_prefix`<sup>Optional</sup> <a name="api_url_prefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.apiUrlPrefix"></a>

```python
api_url_prefix: str
```

- *Type:* str

The API prefix to use when generating callback URLs for the provider.

Should be set to an address at which the provider can reach back to the controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#api_url_prefix AuthMethodOidc#api_url_prefix}

---

##### `callback_url`<sup>Optional</sup> <a name="callback_url" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.callbackUrl"></a>

```python
callback_url: str
```

- *Type:* str

The URL that should be provided to the IdP for callbacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#callback_url AuthMethodOidc#callback_url}

---

##### `claims_scopes`<sup>Optional</sup> <a name="claims_scopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.claimsScopes"></a>

```python
claims_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Claims scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#claims_scopes AuthMethodOidc#claims_scopes}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID assigned to this auth method from the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_id AuthMethodOidc#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The secret key assigned to this auth method from the provider.

Once set, only the hash will be kept and the original value can be removed from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_secret AuthMethodOidc#client_secret}

---

##### `client_secret_hmac`<sup>Optional</sup> <a name="client_secret_hmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecretHmac"></a>

```python
client_secret_hmac: str
```

- *Type:* str

The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#client_secret_hmac AuthMethodOidc#client_secret_hmac}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#description AuthMethodOidc#description}

---

##### `disable_discovered_config_validation`<sup>Optional</sup> <a name="disable_discovered_config_validation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.disableDiscoveredConfigValidation"></a>

```python
disable_discovered_config_validation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here.

The validation is only performed at create or update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#disable_discovered_config_validation AuthMethodOidc#disable_discovered_config_validation}

---

##### `idp_ca_certs`<sup>Optional</sup> <a name="idp_ca_certs" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.idpCaCerts"></a>

```python
idp_ca_certs: typing.List[str]
```

- *Type:* typing.List[str]

A list of CA certificates to trust when validating the IdP's token signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#idp_ca_certs AuthMethodOidc#idp_ca_certs}

---

##### `is_primary_for_scope`<sup>Optional</sup> <a name="is_primary_for_scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.isPrimaryForScope"></a>

```python
is_primary_for_scope: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the user will be automatically created when they login using an OIDC account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#is_primary_for_scope AuthMethodOidc#is_primary_for_scope}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The issuer corresponding to the provider, which must match the issuer field in generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#issuer AuthMethodOidc#issuer}

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again.

A value of 0 sets an immediate requirement for all users to reauthenticate, and an unset maxAge results in a Terraform value of -1 and the default TTL of the chosen OIDC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#max_age AuthMethodOidc#max_age}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#name AuthMethodOidc#name}

---

##### `prompts`<sup>Optional</sup> <a name="prompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.prompts"></a>

```python
prompts: typing.List[str]
```

- *Type:* typing.List[str]

The prompts passed to the identity provider to determine whether to prompt the end-user for reauthentication, account selection or consent.

Please note the values passed are case-sensitive. The valid values are: `none`, `login`, `consent` and `select_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#prompts AuthMethodOidc#prompts}

---

##### `signing_algorithms`<sup>Optional</sup> <a name="signing_algorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.signingAlgorithms"></a>

```python
signing_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

Allowed signing algorithms for the provider's issued tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#signing_algorithms AuthMethodOidc#signing_algorithms}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#state AuthMethodOidc#state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_oidc#type AuthMethodOidc#type}

---



