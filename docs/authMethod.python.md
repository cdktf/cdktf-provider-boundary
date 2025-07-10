# `authMethod` Submodule <a name="`authMethod` Submodule" id="@cdktf/provider-boundary.authMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethod <a name="AuthMethod" id="@cdktf/provider-boundary.authMethod.AuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method boundary_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method

authMethod.AuthMethod(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope_id: str,
  type: str,
  description: str = None,
  min_login_name_length: typing.Union[int, float] = None,
  min_password_length: typing.Union[int, float] = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.type">type</a></code> | <code>str</code> | The resource type. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.description">description</a></code> | <code>str</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.minLoginNameLength">min_login_name_length</a></code> | <code>typing.Union[int, float]</code> | The minimum login name length. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.minPasswordLength">min_password_length</a></code> | <code>typing.Union[int, float]</code> | The minimum password length. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.name">name</a></code> | <code>str</code> | The auth method name. Defaults to the resource name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#scope_id AuthMethod#scope_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.type"></a>

- *Type:* str

The resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#type AuthMethod#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.description"></a>

- *Type:* str

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#description AuthMethod#description}

---

##### `min_login_name_length`<sup>Optional</sup> <a name="min_login_name_length" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.minLoginNameLength"></a>

- *Type:* typing.Union[int, float]

The minimum login name length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#min_login_name_length AuthMethod#min_login_name_length}

---

##### `min_password_length`<sup>Optional</sup> <a name="min_password_length" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.minPasswordLength"></a>

- *Type:* typing.Union[int, float]

The minimum password length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#min_password_length AuthMethod#min_password_length}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethod.AuthMethod.Initializer.parameter.name"></a>

- *Type:* str

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#name AuthMethod#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.resetMinLoginNameLength">reset_min_login_name_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.resetMinPasswordLength">reset_min_password_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.authMethod.AuthMethod.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.authMethod.AuthMethod.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.authMethod.AuthMethod.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.authMethod.AuthMethod.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.authMethod.AuthMethod.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.authMethod.AuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.authMethod.AuthMethod.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-boundary.authMethod.AuthMethod.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.authMethod.AuthMethod.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.authMethod.AuthMethod.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-boundary.authMethod.AuthMethod.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.authMethod.AuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-boundary.authMethod.AuthMethod.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-boundary.authMethod.AuthMethod.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethod.AuthMethod.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethod.AuthMethod.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethod.AuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-boundary.authMethod.AuthMethod.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethod.AuthMethod.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-boundary.authMethod.AuthMethod.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.authMethod.AuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.authMethod.AuthMethod.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-boundary.authMethod.AuthMethod.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethod.AuthMethod.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-boundary.authMethod.AuthMethod.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_min_login_name_length` <a name="reset_min_login_name_length" id="@cdktf/provider-boundary.authMethod.AuthMethod.resetMinLoginNameLength"></a>

```python
def reset_min_login_name_length() -> None
```

##### `reset_min_password_length` <a name="reset_min_password_length" id="@cdktf/provider-boundary.authMethod.AuthMethod.resetMinPasswordLength"></a>

```python
def reset_min_password_length() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-boundary.authMethod.AuthMethod.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.authMethod.AuthMethod.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method

authMethod.AuthMethod.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethod.AuthMethod.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.authMethod.AuthMethod.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method

authMethod.AuthMethod.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethod.AuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-boundary.authMethod.AuthMethod.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method

authMethod.AuthMethod.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethod.AuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-boundary.authMethod.AuthMethod.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method

authMethod.AuthMethod.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethod.AuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-boundary.authMethod.AuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthMethod to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-boundary.authMethod.AuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethod.AuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.minLoginNameLengthInput">min_login_name_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.minPasswordLengthInput">min_password_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.minLoginNameLength">min_login_name_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.minPasswordLength">min_password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `min_login_name_length_input`<sup>Optional</sup> <a name="min_login_name_length_input" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.minLoginNameLengthInput"></a>

```python
min_login_name_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_password_length_input`<sup>Optional</sup> <a name="min_password_length_input" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.minPasswordLengthInput"></a>

```python
min_password_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `min_login_name_length`<sup>Required</sup> <a name="min_login_name_length" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.minLoginNameLength"></a>

```python
min_login_name_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_password_length`<sup>Required</sup> <a name="min_password_length" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.minPasswordLength"></a>

```python
min_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.authMethod.AuthMethod.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodConfig <a name="AuthMethodConfig" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method

authMethod.AuthMethodConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope_id: str,
  type: str,
  description: str = None,
  min_login_name_length: typing.Union[int, float] = None,
  min_password_length: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.type">type</a></code> | <code>str</code> | The resource type. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.description">description</a></code> | <code>str</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.minLoginNameLength">min_login_name_length</a></code> | <code>typing.Union[int, float]</code> | The minimum login name length. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.minPasswordLength">min_password_length</a></code> | <code>typing.Union[int, float]</code> | The minimum password length. |
| <code><a href="#@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.name">name</a></code> | <code>str</code> | The auth method name. Defaults to the resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#scope_id AuthMethod#scope_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#type AuthMethod#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#description AuthMethod#description}

---

##### `min_login_name_length`<sup>Optional</sup> <a name="min_login_name_length" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.minLoginNameLength"></a>

```python
min_login_name_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum login name length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#min_login_name_length AuthMethod#min_login_name_length}

---

##### `min_password_length`<sup>Optional</sup> <a name="min_password_length" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.minPasswordLength"></a>

```python
min_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum password length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#min_password_length AuthMethod#min_password_length}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethod.AuthMethodConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method#name AuthMethod#name}

---



