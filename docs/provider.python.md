# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-boundary.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BoundaryProvider <a name="BoundaryProvider" id="@cdktf/provider-boundary.provider.BoundaryProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs boundary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import provider

provider.BoundaryProvider(
  scope: Construct,
  id: str,
  addr: str,
  alias: str = None,
  auth_method_id: str = None,
  auth_method_login_name: str = None,
  auth_method_password: str = None,
  password_auth_method_login_name: str = None,
  password_auth_method_password: str = None,
  plugin_execution_dir: str = None,
  recovery_kms_hcl: str = None,
  scope_id: str = None,
  tls_insecure: typing.Union[bool, IResolvable] = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.addr">addr</a></code> | <code>str</code> | The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodId">auth_method_id</a></code> | <code>str</code> | The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodLoginName">auth_method_login_name</a></code> | <code>str</code> | The auth method login name for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodPassword">auth_method_password</a></code> | <code>str</code> | The auth method password for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.passwordAuthMethodLoginName">password_auth_method_login_name</a></code> | <code>str</code> | The auth method login name for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.passwordAuthMethodPassword">password_auth_method_password</a></code> | <code>str</code> | The auth method password for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.pluginExecutionDir">plugin_execution_dir</a></code> | <code>str</code> | Specifies a directory that the Boundary provider can use to write and execute its built-in plugins. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.recoveryKmsHcl">recovery_kms_hcl</a></code> | <code>str</code> | Can be a heredoc string or a path on disk. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope ID for the default auth method. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.tlsInsecure">tls_insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, does not validate the Boundary API endpoint certificate. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | The Boundary token to use, as a string or path on disk containing just the string. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `addr`<sup>Required</sup> <a name="addr" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.addr"></a>

- *Type:* str

The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#addr BoundaryProvider#addr}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#alias BoundaryProvider#alias}

---

##### `auth_method_id`<sup>Optional</sup> <a name="auth_method_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodId"></a>

- *Type:* str

The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#auth_method_id BoundaryProvider#auth_method_id}

---

##### `auth_method_login_name`<sup>Optional</sup> <a name="auth_method_login_name" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodLoginName"></a>

- *Type:* str

The auth method login name for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#auth_method_login_name BoundaryProvider#auth_method_login_name}

---

##### `auth_method_password`<sup>Optional</sup> <a name="auth_method_password" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodPassword"></a>

- *Type:* str

The auth method password for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#auth_method_password BoundaryProvider#auth_method_password}

---

##### `password_auth_method_login_name`<sup>Optional</sup> <a name="password_auth_method_login_name" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.passwordAuthMethodLoginName"></a>

- *Type:* str

The auth method login name for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#password_auth_method_login_name BoundaryProvider#password_auth_method_login_name}

---

##### `password_auth_method_password`<sup>Optional</sup> <a name="password_auth_method_password" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.passwordAuthMethodPassword"></a>

- *Type:* str

The auth method password for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#password_auth_method_password BoundaryProvider#password_auth_method_password}

---

##### `plugin_execution_dir`<sup>Optional</sup> <a name="plugin_execution_dir" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.pluginExecutionDir"></a>

- *Type:* str

Specifies a directory that the Boundary provider can use to write and execute its built-in plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#plugin_execution_dir BoundaryProvider#plugin_execution_dir}

---

##### `recovery_kms_hcl`<sup>Optional</sup> <a name="recovery_kms_hcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.recoveryKmsHcl"></a>

- *Type:* str

Can be a heredoc string or a path on disk.

If set, the string/file will be parsed as HCL and used with the recovery KMS mechanism. While this is set, it will override any other authentication information; the KMS mechanism will always be used. See Boundary's KMS docs for examples: https://boundaryproject.io/docs/configuration/kms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#recovery_kms_hcl BoundaryProvider#recovery_kms_hcl}

---

##### `scope_id`<sup>Optional</sup> <a name="scope_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope ID for the default auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#scope_id BoundaryProvider#scope_id}

---

##### `tls_insecure`<sup>Optional</sup> <a name="tls_insecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.tlsInsecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, does not validate the Boundary API endpoint certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#tls_insecure BoundaryProvider#tls_insecure}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.token"></a>

- *Type:* str

The Boundary token to use, as a string or path on disk containing just the string.

If set, the token read here will be used in place of authenticating with the auth method specified in "auth_method_id", although the recovery KMS mechanism will still override this. Can also be set with the BOUNDARY_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#token BoundaryProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodId">reset_auth_method_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodLoginName">reset_auth_method_login_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodPassword">reset_auth_method_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodLoginName">reset_password_auth_method_login_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodPassword">reset_password_auth_method_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPluginExecutionDir">reset_plugin_execution_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetRecoveryKmsHcl">reset_recovery_kms_hcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetScopeId">reset_scope_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetTlsInsecure">reset_tls_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.provider.BoundaryProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.provider.BoundaryProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.provider.BoundaryProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_auth_method_id` <a name="reset_auth_method_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodId"></a>

```python
def reset_auth_method_id() -> None
```

##### `reset_auth_method_login_name` <a name="reset_auth_method_login_name" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodLoginName"></a>

```python
def reset_auth_method_login_name() -> None
```

##### `reset_auth_method_password` <a name="reset_auth_method_password" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodPassword"></a>

```python
def reset_auth_method_password() -> None
```

##### `reset_password_auth_method_login_name` <a name="reset_password_auth_method_login_name" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodLoginName"></a>

```python
def reset_password_auth_method_login_name() -> None
```

##### `reset_password_auth_method_password` <a name="reset_password_auth_method_password" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodPassword"></a>

```python
def reset_password_auth_method_password() -> None
```

##### `reset_plugin_execution_dir` <a name="reset_plugin_execution_dir" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPluginExecutionDir"></a>

```python
def reset_plugin_execution_dir() -> None
```

##### `reset_recovery_kms_hcl` <a name="reset_recovery_kms_hcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetRecoveryKmsHcl"></a>

```python
def reset_recovery_kms_hcl() -> None
```

##### `reset_scope_id` <a name="reset_scope_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetScopeId"></a>

```python
def reset_scope_id() -> None
```

##### `reset_tls_insecure` <a name="reset_tls_insecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetTlsInsecure"></a>

```python
def reset_tls_insecure() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BoundaryProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import provider

provider.BoundaryProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import provider

provider.BoundaryProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_boundary import provider

provider.BoundaryProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_boundary import provider

provider.BoundaryProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BoundaryProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BoundaryProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BoundaryProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BoundaryProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.addrInput">addr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodIdInput">auth_method_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginNameInput">auth_method_login_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPasswordInput">auth_method_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginNameInput">password_auth_method_login_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPasswordInput">password_auth_method_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDirInput">plugin_execution_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHclInput">recovery_kms_hcl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecureInput">tls_insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.addr">addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodId">auth_method_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginName">auth_method_login_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPassword">auth_method_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginName">password_auth_method_login_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPassword">password_auth_method_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDir">plugin_execution_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHcl">recovery_kms_hcl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecure">tls_insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `addr_input`<sup>Optional</sup> <a name="addr_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.addrInput"></a>

```python
addr_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `auth_method_id_input`<sup>Optional</sup> <a name="auth_method_id_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodIdInput"></a>

```python
auth_method_id_input: str
```

- *Type:* str

---

##### `auth_method_login_name_input`<sup>Optional</sup> <a name="auth_method_login_name_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginNameInput"></a>

```python
auth_method_login_name_input: str
```

- *Type:* str

---

##### `auth_method_password_input`<sup>Optional</sup> <a name="auth_method_password_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPasswordInput"></a>

```python
auth_method_password_input: str
```

- *Type:* str

---

##### `password_auth_method_login_name_input`<sup>Optional</sup> <a name="password_auth_method_login_name_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginNameInput"></a>

```python
password_auth_method_login_name_input: str
```

- *Type:* str

---

##### `password_auth_method_password_input`<sup>Optional</sup> <a name="password_auth_method_password_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPasswordInput"></a>

```python
password_auth_method_password_input: str
```

- *Type:* str

---

##### `plugin_execution_dir_input`<sup>Optional</sup> <a name="plugin_execution_dir_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDirInput"></a>

```python
plugin_execution_dir_input: str
```

- *Type:* str

---

##### `recovery_kms_hcl_input`<sup>Optional</sup> <a name="recovery_kms_hcl_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHclInput"></a>

```python
recovery_kms_hcl_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `tls_insecure_input`<sup>Optional</sup> <a name="tls_insecure_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecureInput"></a>

```python
tls_insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `addr`<sup>Optional</sup> <a name="addr" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.addr"></a>

```python
addr: str
```

- *Type:* str

---

##### `auth_method_id`<sup>Optional</sup> <a name="auth_method_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodId"></a>

```python
auth_method_id: str
```

- *Type:* str

---

##### `auth_method_login_name`<sup>Optional</sup> <a name="auth_method_login_name" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginName"></a>

```python
auth_method_login_name: str
```

- *Type:* str

---

##### `auth_method_password`<sup>Optional</sup> <a name="auth_method_password" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPassword"></a>

```python
auth_method_password: str
```

- *Type:* str

---

##### `password_auth_method_login_name`<sup>Optional</sup> <a name="password_auth_method_login_name" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginName"></a>

```python
password_auth_method_login_name: str
```

- *Type:* str

---

##### `password_auth_method_password`<sup>Optional</sup> <a name="password_auth_method_password" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPassword"></a>

```python
password_auth_method_password: str
```

- *Type:* str

---

##### `plugin_execution_dir`<sup>Optional</sup> <a name="plugin_execution_dir" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDir"></a>

```python
plugin_execution_dir: str
```

- *Type:* str

---

##### `recovery_kms_hcl`<sup>Optional</sup> <a name="recovery_kms_hcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHcl"></a>

```python
recovery_kms_hcl: str
```

- *Type:* str

---

##### `scope_id`<sup>Optional</sup> <a name="scope_id" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `tls_insecure`<sup>Optional</sup> <a name="tls_insecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecure"></a>

```python
tls_insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BoundaryProviderConfig <a name="BoundaryProviderConfig" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import provider

provider.BoundaryProviderConfig(
  addr: str,
  alias: str = None,
  auth_method_id: str = None,
  auth_method_login_name: str = None,
  auth_method_password: str = None,
  password_auth_method_login_name: str = None,
  password_auth_method_password: str = None,
  plugin_execution_dir: str = None,
  recovery_kms_hcl: str = None,
  scope_id: str = None,
  tls_insecure: typing.Union[bool, IResolvable] = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.addr">addr</a></code> | <code>str</code> | The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodId">auth_method_id</a></code> | <code>str</code> | The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodLoginName">auth_method_login_name</a></code> | <code>str</code> | The auth method login name for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodPassword">auth_method_password</a></code> | <code>str</code> | The auth method password for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodLoginName">password_auth_method_login_name</a></code> | <code>str</code> | The auth method login name for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodPassword">password_auth_method_password</a></code> | <code>str</code> | The auth method password for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.pluginExecutionDir">plugin_execution_dir</a></code> | <code>str</code> | Specifies a directory that the Boundary provider can use to write and execute its built-in plugins. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.recoveryKmsHcl">recovery_kms_hcl</a></code> | <code>str</code> | Can be a heredoc string or a path on disk. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope ID for the default auth method. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.tlsInsecure">tls_insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, does not validate the Boundary API endpoint certificate. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.token">token</a></code> | <code>str</code> | The Boundary token to use, as a string or path on disk containing just the string. |

---

##### `addr`<sup>Required</sup> <a name="addr" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.addr"></a>

```python
addr: str
```

- *Type:* str

The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#addr BoundaryProvider#addr}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#alias BoundaryProvider#alias}

---

##### `auth_method_id`<sup>Optional</sup> <a name="auth_method_id" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodId"></a>

```python
auth_method_id: str
```

- *Type:* str

The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#auth_method_id BoundaryProvider#auth_method_id}

---

##### `auth_method_login_name`<sup>Optional</sup> <a name="auth_method_login_name" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodLoginName"></a>

```python
auth_method_login_name: str
```

- *Type:* str

The auth method login name for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#auth_method_login_name BoundaryProvider#auth_method_login_name}

---

##### `auth_method_password`<sup>Optional</sup> <a name="auth_method_password" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodPassword"></a>

```python
auth_method_password: str
```

- *Type:* str

The auth method password for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#auth_method_password BoundaryProvider#auth_method_password}

---

##### `password_auth_method_login_name`<sup>Optional</sup> <a name="password_auth_method_login_name" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodLoginName"></a>

```python
password_auth_method_login_name: str
```

- *Type:* str

The auth method login name for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#password_auth_method_login_name BoundaryProvider#password_auth_method_login_name}

---

##### `password_auth_method_password`<sup>Optional</sup> <a name="password_auth_method_password" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodPassword"></a>

```python
password_auth_method_password: str
```

- *Type:* str

The auth method password for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#password_auth_method_password BoundaryProvider#password_auth_method_password}

---

##### `plugin_execution_dir`<sup>Optional</sup> <a name="plugin_execution_dir" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.pluginExecutionDir"></a>

```python
plugin_execution_dir: str
```

- *Type:* str

Specifies a directory that the Boundary provider can use to write and execute its built-in plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#plugin_execution_dir BoundaryProvider#plugin_execution_dir}

---

##### `recovery_kms_hcl`<sup>Optional</sup> <a name="recovery_kms_hcl" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.recoveryKmsHcl"></a>

```python
recovery_kms_hcl: str
```

- *Type:* str

Can be a heredoc string or a path on disk.

If set, the string/file will be parsed as HCL and used with the recovery KMS mechanism. While this is set, it will override any other authentication information; the KMS mechanism will always be used. See Boundary's KMS docs for examples: https://boundaryproject.io/docs/configuration/kms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#recovery_kms_hcl BoundaryProvider#recovery_kms_hcl}

---

##### `scope_id`<sup>Optional</sup> <a name="scope_id" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope ID for the default auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#scope_id BoundaryProvider#scope_id}

---

##### `tls_insecure`<sup>Optional</sup> <a name="tls_insecure" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.tlsInsecure"></a>

```python
tls_insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, does not validate the Boundary API endpoint certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#tls_insecure BoundaryProvider#tls_insecure}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

The Boundary token to use, as a string or path on disk containing just the string.

If set, the token read here will be used in place of authenticating with the auth method specified in "auth_method_id", although the recovery KMS mechanism will still override this. Can also be set with the BOUNDARY_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#token BoundaryProvider#token}

---



