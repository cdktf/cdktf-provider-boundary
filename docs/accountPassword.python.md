# `accountPassword` Submodule <a name="`accountPassword` Submodule" id="@cdktf/provider-boundary.accountPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountPassword <a name="AccountPassword" id="@cdktf/provider-boundary.accountPassword.AccountPassword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password boundary_account_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import account_password

accountPassword.AccountPassword(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_method_id: str,
  description: str = None,
  login_name: str = None,
  name: str = None,
  password: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.authMethodId">auth_method_id</a></code> | <code>str</code> | The resource ID for the auth method. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.description">description</a></code> | <code>str</code> | The account description. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.loginName">login_name</a></code> | <code>str</code> | The login name for this account. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.name">name</a></code> | <code>str</code> | The account name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.password">password</a></code> | <code>str</code> | The account password. Only set on create, changes will not be reflected when updating account. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.type">type</a></code> | <code>str</code> | The resource type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_method_id`<sup>Required</sup> <a name="auth_method_id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.authMethodId"></a>

- *Type:* str

The resource ID for the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#auth_method_id AccountPassword#auth_method_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.description"></a>

- *Type:* str

The account description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#description AccountPassword#description}

---

##### `login_name`<sup>Optional</sup> <a name="login_name" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.loginName"></a>

- *Type:* str

The login name for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#login_name AccountPassword#login_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.name"></a>

- *Type:* str

The account name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#name AccountPassword#name}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.password"></a>

- *Type:* str

The account password. Only set on create, changes will not be reflected when updating account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#password AccountPassword#password}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.accountPassword.AccountPassword.Initializer.parameter.type"></a>

- *Type:* str

The resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#type AccountPassword#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.resetLoginName">reset_login_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.accountPassword.AccountPassword.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.accountPassword.AccountPassword.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.accountPassword.AccountPassword.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.accountPassword.AccountPassword.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.accountPassword.AccountPassword.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.accountPassword.AccountPassword.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-boundary.accountPassword.AccountPassword.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.accountPassword.AccountPassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-boundary.accountPassword.AccountPassword.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-boundary.accountPassword.AccountPassword.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.accountPassword.AccountPassword.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.accountPassword.AccountPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-boundary.accountPassword.AccountPassword.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.accountPassword.AccountPassword.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.accountPassword.AccountPassword.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-boundary.accountPassword.AccountPassword.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_login_name` <a name="reset_login_name" id="@cdktf/provider-boundary.accountPassword.AccountPassword.resetLoginName"></a>

```python
def reset_login_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-boundary.accountPassword.AccountPassword.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-boundary.accountPassword.AccountPassword.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-boundary.accountPassword.AccountPassword.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccountPassword resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.accountPassword.AccountPassword.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import account_password

accountPassword.AccountPassword.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.accountPassword.AccountPassword.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.accountPassword.AccountPassword.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import account_password

accountPassword.AccountPassword.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.accountPassword.AccountPassword.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-boundary.accountPassword.AccountPassword.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_boundary import account_password

accountPassword.AccountPassword.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.accountPassword.AccountPassword.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-boundary.accountPassword.AccountPassword.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_boundary import account_password

accountPassword.AccountPassword.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccountPassword resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.accountPassword.AccountPassword.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccountPassword to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccountPassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.accountPassword.AccountPassword.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountPassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.authMethodIdInput">auth_method_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.loginNameInput">login_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.authMethodId">auth_method_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.loginName">login_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `auth_method_id_input`<sup>Optional</sup> <a name="auth_method_id_input" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.authMethodIdInput"></a>

```python
auth_method_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `login_name_input`<sup>Optional</sup> <a name="login_name_input" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.loginNameInput"></a>

```python
login_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `auth_method_id`<sup>Required</sup> <a name="auth_method_id" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.authMethodId"></a>

```python
auth_method_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `login_name`<sup>Required</sup> <a name="login_name" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.loginName"></a>

```python
login_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPassword.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.accountPassword.AccountPassword.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccountPasswordConfig <a name="AccountPasswordConfig" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import account_password

accountPassword.AccountPasswordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_method_id: str,
  description: str = None,
  login_name: str = None,
  name: str = None,
  password: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.authMethodId">auth_method_id</a></code> | <code>str</code> | The resource ID for the auth method. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.description">description</a></code> | <code>str</code> | The account description. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.loginName">login_name</a></code> | <code>str</code> | The login name for this account. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.name">name</a></code> | <code>str</code> | The account name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.password">password</a></code> | <code>str</code> | The account password. Only set on create, changes will not be reflected when updating account. |
| <code><a href="#@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.type">type</a></code> | <code>str</code> | The resource type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_method_id`<sup>Required</sup> <a name="auth_method_id" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.authMethodId"></a>

```python
auth_method_id: str
```

- *Type:* str

The resource ID for the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#auth_method_id AccountPassword#auth_method_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The account description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#description AccountPassword#description}

---

##### `login_name`<sup>Optional</sup> <a name="login_name" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.loginName"></a>

```python
login_name: str
```

- *Type:* str

The login name for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#login_name AccountPassword#login_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The account name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#name AccountPassword#name}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The account password. Only set on create, changes will not be reflected when updating account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#password AccountPassword#password}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.accountPassword.AccountPasswordConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/account_password#type AccountPassword#type}

---



