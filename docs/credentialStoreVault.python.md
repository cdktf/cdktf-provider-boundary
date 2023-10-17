# `boundary_credential_store_vault`

Refer to the Terraform Registory for docs: [`boundary_credential_store_vault`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault).

# `credentialStoreVault` Submodule <a name="`credentialStoreVault` Submodule" id="@cdktf/provider-boundary.credentialStoreVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialStoreVault <a name="CredentialStoreVault" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault boundary_credential_store_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import credential_store_vault

credentialStoreVault.CredentialStoreVault(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str,
  scope_id: str,
  token: str,
  ca_cert: str = None,
  client_certificate: str = None,
  client_certificate_key: str = None,
  description: str = None,
  name: str = None,
  namespace: str = None,
  tls_server_name: str = None,
  tls_skip_verify: typing.Union[bool, IResolvable] = None,
  worker_filter: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.address">address</a></code> | <code>str</code> | The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope for this credential store. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.token">token</a></code> | <code>str</code> | A token used for accessing Vault. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.caCert">ca_cert</a></code> | <code>str</code> | A PEM-encoded CA certificate to verify the Vault server's TLS certificate. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.clientCertificate">client_certificate</a></code> | <code>str</code> | A PEM-encoded client certificate to use for TLS authentication to the Vault server. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.clientCertificateKey">client_certificate_key</a></code> | <code>str</code> | A PEM-encoded private key matching the client certificate from 'client_certificate'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.description">description</a></code> | <code>str</code> | The Vault credential store description. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.name">name</a></code> | <code>str</code> | The Vault credential store name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace within Vault to use. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.tlsServerName">tls_server_name</a></code> | <code>str</code> | Name to use as the SNI host when connecting to Vault via TLS. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.tlsSkipVerify">tls_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to skip TLS verification. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.workerFilter">worker_filter</a></code> | <code>str</code> | HCP Only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.address"></a>

- *Type:* str

The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#address CredentialStoreVault#address}

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope for this credential store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#scope_id CredentialStoreVault#scope_id}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.token"></a>

- *Type:* str

A token used for accessing Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#token CredentialStoreVault#token}

---

##### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.caCert"></a>

- *Type:* str

A PEM-encoded CA certificate to verify the Vault server's TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#ca_cert CredentialStoreVault#ca_cert}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.clientCertificate"></a>

- *Type:* str

A PEM-encoded client certificate to use for TLS authentication to the Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#client_certificate CredentialStoreVault#client_certificate}

---

##### `client_certificate_key`<sup>Optional</sup> <a name="client_certificate_key" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.clientCertificateKey"></a>

- *Type:* str

A PEM-encoded private key matching the client certificate from 'client_certificate'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#client_certificate_key CredentialStoreVault#client_certificate_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.description"></a>

- *Type:* str

The Vault credential store description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#description CredentialStoreVault#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.name"></a>

- *Type:* str

The Vault credential store name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#name CredentialStoreVault#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace within Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#namespace CredentialStoreVault#namespace}

---

##### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.tlsServerName"></a>

- *Type:* str

Name to use as the SNI host when connecting to Vault via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#tls_server_name CredentialStoreVault#tls_server_name}

---

##### `tls_skip_verify`<sup>Optional</sup> <a name="tls_skip_verify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.tlsSkipVerify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to skip TLS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#tls_skip_verify CredentialStoreVault#tls_skip_verify}

---

##### `worker_filter`<sup>Optional</sup> <a name="worker_filter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.workerFilter"></a>

- *Type:* str

HCP Only.

A filter used to control which PKI workers can handle Vault requests. This allows the use of private Vault instances with Boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#worker_filter CredentialStoreVault#worker_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetCaCert">reset_ca_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificateKey">reset_client_certificate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsServerName">reset_tls_server_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsSkipVerify">reset_tls_skip_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetWorkerFilter">reset_worker_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_ca_cert` <a name="reset_ca_cert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetCaCert"></a>

```python
def reset_ca_cert() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_certificate_key` <a name="reset_client_certificate_key" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificateKey"></a>

```python
def reset_client_certificate_key() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_tls_server_name` <a name="reset_tls_server_name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsServerName"></a>

```python
def reset_tls_server_name() -> None
```

##### `reset_tls_skip_verify` <a name="reset_tls_skip_verify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsSkipVerify"></a>

```python
def reset_tls_skip_verify() -> None
```

##### `reset_worker_filter` <a name="reset_worker_filter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetWorkerFilter"></a>

```python
def reset_worker_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CredentialStoreVault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import credential_store_vault

credentialStoreVault.CredentialStoreVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import credential_store_vault

credentialStoreVault.CredentialStoreVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_boundary import credential_store_vault

credentialStoreVault.CredentialStoreVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_boundary import credential_store_vault

credentialStoreVault.CredentialStoreVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CredentialStoreVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CredentialStoreVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CredentialStoreVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CredentialStoreVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyHmac">client_certificate_key_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenHmac">token_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCertInput">ca_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyInput">client_certificate_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerNameInput">tls_server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerifyInput">tls_skip_verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilterInput">worker_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCert">ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKey">client_certificate_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerName">tls_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerify">tls_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilter">worker_filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_certificate_key_hmac`<sup>Required</sup> <a name="client_certificate_key_hmac" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyHmac"></a>

```python
client_certificate_key_hmac: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `token_hmac`<sup>Required</sup> <a name="token_hmac" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenHmac"></a>

```python
token_hmac: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `ca_cert_input`<sup>Optional</sup> <a name="ca_cert_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCertInput"></a>

```python
ca_cert_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_key_input`<sup>Optional</sup> <a name="client_certificate_key_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyInput"></a>

```python
client_certificate_key_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `tls_server_name_input`<sup>Optional</sup> <a name="tls_server_name_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerNameInput"></a>

```python
tls_server_name_input: str
```

- *Type:* str

---

##### `tls_skip_verify_input`<sup>Optional</sup> <a name="tls_skip_verify_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerifyInput"></a>

```python
tls_skip_verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `worker_filter_input`<sup>Optional</sup> <a name="worker_filter_input" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilterInput"></a>

```python
worker_filter_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `ca_cert`<sup>Required</sup> <a name="ca_cert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_certificate_key`<sup>Required</sup> <a name="client_certificate_key" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKey"></a>

```python
client_certificate_key: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `tls_server_name`<sup>Required</sup> <a name="tls_server_name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerName"></a>

```python
tls_server_name: str
```

- *Type:* str

---

##### `tls_skip_verify`<sup>Required</sup> <a name="tls_skip_verify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerify"></a>

```python
tls_skip_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `worker_filter`<sup>Required</sup> <a name="worker_filter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilter"></a>

```python
worker_filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialStoreVaultConfig <a name="CredentialStoreVaultConfig" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import credential_store_vault

credentialStoreVault.CredentialStoreVaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str,
  scope_id: str,
  token: str,
  ca_cert: str = None,
  client_certificate: str = None,
  client_certificate_key: str = None,
  description: str = None,
  name: str = None,
  namespace: str = None,
  tls_server_name: str = None,
  tls_skip_verify: typing.Union[bool, IResolvable] = None,
  worker_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.address">address</a></code> | <code>str</code> | The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope for this credential store. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.token">token</a></code> | <code>str</code> | A token used for accessing Vault. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.caCert">ca_cert</a></code> | <code>str</code> | A PEM-encoded CA certificate to verify the Vault server's TLS certificate. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | A PEM-encoded client certificate to use for TLS authentication to the Vault server. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificateKey">client_certificate_key</a></code> | <code>str</code> | A PEM-encoded private key matching the client certificate from 'client_certificate'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.description">description</a></code> | <code>str</code> | The Vault credential store description. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.name">name</a></code> | <code>str</code> | The Vault credential store name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace within Vault to use. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsServerName">tls_server_name</a></code> | <code>str</code> | Name to use as the SNI host when connecting to Vault via TLS. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsSkipVerify">tls_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to skip TLS verification. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.workerFilter">worker_filter</a></code> | <code>str</code> | HCP Only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#address CredentialStoreVault#address}

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope for this credential store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#scope_id CredentialStoreVault#scope_id}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.token"></a>

```python
token: str
```

- *Type:* str

A token used for accessing Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#token CredentialStoreVault#token}

---

##### `ca_cert`<sup>Optional</sup> <a name="ca_cert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.caCert"></a>

```python
ca_cert: str
```

- *Type:* str

A PEM-encoded CA certificate to verify the Vault server's TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#ca_cert CredentialStoreVault#ca_cert}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

A PEM-encoded client certificate to use for TLS authentication to the Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#client_certificate CredentialStoreVault#client_certificate}

---

##### `client_certificate_key`<sup>Optional</sup> <a name="client_certificate_key" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificateKey"></a>

```python
client_certificate_key: str
```

- *Type:* str

A PEM-encoded private key matching the client certificate from 'client_certificate'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#client_certificate_key CredentialStoreVault#client_certificate_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The Vault credential store description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#description CredentialStoreVault#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The Vault credential store name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#name CredentialStoreVault#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace within Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#namespace CredentialStoreVault#namespace}

---

##### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsServerName"></a>

```python
tls_server_name: str
```

- *Type:* str

Name to use as the SNI host when connecting to Vault via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#tls_server_name CredentialStoreVault#tls_server_name}

---

##### `tls_skip_verify`<sup>Optional</sup> <a name="tls_skip_verify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsSkipVerify"></a>

```python
tls_skip_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to skip TLS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#tls_skip_verify CredentialStoreVault#tls_skip_verify}

---

##### `worker_filter`<sup>Optional</sup> <a name="worker_filter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.workerFilter"></a>

```python
worker_filter: str
```

- *Type:* str

HCP Only.

A filter used to control which PKI workers can handle Vault requests. This allows the use of private Vault instances with Boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_store_vault#worker_filter CredentialStoreVault#worker_filter}

---



