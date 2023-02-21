# `credentialUsernamePassword` Submodule <a name="`credentialUsernamePassword` Submodule" id="@cdktf/provider-boundary.credentialUsernamePassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialUsernamePassword <a name="CredentialUsernamePassword" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword"></a>

Represents a {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password boundary_credential_username_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import credential_username_password

credentialUsernamePassword.CredentialUsernamePassword(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credential_store_id: str,
  password: str,
  username: str,
  description: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.credentialStoreId">credential_store_id</a></code> | <code>str</code> | The credential store in which to save this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.password">password</a></code> | <code>str</code> | The password of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.username">username</a></code> | <code>str</code> | The username of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this username/password credential. Defaults to the resource name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credential_store_id`<sup>Required</sup> <a name="credential_store_id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.credentialStoreId"></a>

- *Type:* str

The credential store in which to save this username/password credential.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password#credential_store_id CredentialUsernamePassword#credential_store_id}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.password"></a>

- *Type:* str

The password of this username/password credential.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password#password CredentialUsernamePassword#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.username"></a>

- *Type:* str

The username of this username/password credential.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password#username CredentialUsernamePassword#username}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.description"></a>

- *Type:* str

The description of this username/password credential.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password#description CredentialUsernamePassword#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.name"></a>

- *Type:* str

The name of this username/password credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password#name CredentialUsernamePassword#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import credential_username_password

credentialUsernamePassword.CredentialUsernamePassword.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import credential_username_password

credentialUsernamePassword.CredentialUsernamePassword.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_boundary import credential_username_password

credentialUsernamePassword.CredentialUsernamePassword.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.passwordHmac">password_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.credentialStoreIdInput">credential_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.credentialStoreId">credential_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password_hmac`<sup>Required</sup> <a name="password_hmac" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.passwordHmac"></a>

```python
password_hmac: str
```

- *Type:* str

---

##### `credential_store_id_input`<sup>Optional</sup> <a name="credential_store_id_input" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.credentialStoreIdInput"></a>

```python
credential_store_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `credential_store_id`<sup>Required</sup> <a name="credential_store_id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.credentialStoreId"></a>

```python
credential_store_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialUsernamePasswordConfig <a name="CredentialUsernamePasswordConfig" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import credential_username_password

credentialUsernamePassword.CredentialUsernamePasswordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credential_store_id: str,
  password: str,
  username: str,
  description: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.credentialStoreId">credential_store_id</a></code> | <code>str</code> | The credential store in which to save this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.password">password</a></code> | <code>str</code> | The password of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.username">username</a></code> | <code>str</code> | The username of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.description">description</a></code> | <code>str</code> | The description of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.name">name</a></code> | <code>str</code> | The name of this username/password credential. Defaults to the resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credential_store_id`<sup>Required</sup> <a name="credential_store_id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.credentialStoreId"></a>

```python
credential_store_id: str
```

- *Type:* str

The credential store in which to save this username/password credential.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password#credential_store_id CredentialUsernamePassword#credential_store_id}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password of this username/password credential.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password#password CredentialUsernamePassword#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username of this username/password credential.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password#username CredentialUsernamePassword#username}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of this username/password credential.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password#description CredentialUsernamePassword#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this username/password credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/boundary/r/credential_username_password#name CredentialUsernamePassword#name}

---



