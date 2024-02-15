# `policyStorage` Submodule <a name="`policyStorage` Submodule" id="@cdktf/provider-boundary.policyStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyStorage <a name="PolicyStorage" id="@cdktf/provider-boundary.policyStorage.PolicyStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage boundary_policy_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import policy_storage

policyStorage.PolicyStorage(
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
  delete_after_days: typing.Union[int, float] = None,
  delete_after_overridable: typing.Union[bool, IResolvable] = None,
  description: str = None,
  name: str = None,
  retain_for_days: typing.Union[int, float] = None,
  retain_for_overridable: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope for this policy. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.deleteAfterDays">delete_after_days</a></code> | <code>typing.Union[int, float]</code> | The number of days after which a session recording will be automatically deleted. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.deleteAfterOverridable">delete_after_overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the associated delete_after_days value can be overridden by org scopes. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.description">description</a></code> | <code>str</code> | The policy description. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.name">name</a></code> | <code>str</code> | The policy name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.retainForDays">retain_for_days</a></code> | <code>typing.Union[int, float]</code> | The number of days a session recording is required to be stored. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.retainForOverridable">retain_for_overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the associated retain_for_days value can be overridden by org scopes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#scope_id PolicyStorage#scope_id}

---

##### `delete_after_days`<sup>Optional</sup> <a name="delete_after_days" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.deleteAfterDays"></a>

- *Type:* typing.Union[int, float]

The number of days after which a session recording will be automatically deleted.

Defaults to 0: never automatically delete. However, delete_after_days and retain_for_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#delete_after_days PolicyStorage#delete_after_days}

---

##### `delete_after_overridable`<sup>Optional</sup> <a name="delete_after_overridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.deleteAfterOverridable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the associated delete_after_days value can be overridden by org scopes.

Note: if the associated delete_after_days value is 0, overridable is ignored

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#delete_after_overridable PolicyStorage#delete_after_overridable}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.description"></a>

- *Type:* str

The policy description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#description PolicyStorage#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.name"></a>

- *Type:* str

The policy name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#name PolicyStorage#name}

---

##### `retain_for_days`<sup>Optional</sup> <a name="retain_for_days" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.retainForDays"></a>

- *Type:* typing.Union[int, float]

The number of days a session recording is required to be stored.

Defaults to 0: allow deletions at any time. However, retain_for_days and delete_after_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#retain_for_days PolicyStorage#retain_for_days}

---

##### `retain_for_overridable`<sup>Optional</sup> <a name="retain_for_overridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.retainForOverridable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the associated retain_for_days value can be overridden by org scopes.

Note: if the associated retain_for_days value is 0, overridable is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#retain_for_overridable PolicyStorage#retain_for_overridable}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterDays">reset_delete_after_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterOverridable">reset_delete_after_overridable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForDays">reset_retain_for_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForOverridable">reset_retain_for_overridable</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_delete_after_days` <a name="reset_delete_after_days" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterDays"></a>

```python
def reset_delete_after_days() -> None
```

##### `reset_delete_after_overridable` <a name="reset_delete_after_overridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterOverridable"></a>

```python
def reset_delete_after_overridable() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_retain_for_days` <a name="reset_retain_for_days" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForDays"></a>

```python
def reset_retain_for_days() -> None
```

##### `reset_retain_for_overridable` <a name="reset_retain_for_overridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForOverridable"></a>

```python
def reset_retain_for_overridable() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicyStorage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import policy_storage

policyStorage.PolicyStorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import policy_storage

policyStorage.PolicyStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_boundary import policy_storage

policyStorage.PolicyStorage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_boundary import policy_storage

policyStorage.PolicyStorage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicyStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicyStorage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicyStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDaysInput">delete_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridableInput">delete_after_overridable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDaysInput">retain_for_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridableInput">retain_for_overridable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDays">delete_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridable">delete_after_overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDays">retain_for_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridable">retain_for_overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `delete_after_days_input`<sup>Optional</sup> <a name="delete_after_days_input" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDaysInput"></a>

```python
delete_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_overridable_input`<sup>Optional</sup> <a name="delete_after_overridable_input" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridableInput"></a>

```python
delete_after_overridable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retain_for_days_input`<sup>Optional</sup> <a name="retain_for_days_input" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDaysInput"></a>

```python
retain_for_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retain_for_overridable_input`<sup>Optional</sup> <a name="retain_for_overridable_input" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridableInput"></a>

```python
retain_for_overridable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `delete_after_days`<sup>Required</sup> <a name="delete_after_days" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDays"></a>

```python
delete_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_after_overridable`<sup>Required</sup> <a name="delete_after_overridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridable"></a>

```python
delete_after_overridable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retain_for_days`<sup>Required</sup> <a name="retain_for_days" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDays"></a>

```python
retain_for_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retain_for_overridable`<sup>Required</sup> <a name="retain_for_overridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridable"></a>

```python
retain_for_overridable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyStorageConfig <a name="PolicyStorageConfig" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import policy_storage

policyStorage.PolicyStorageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope_id: str,
  delete_after_days: typing.Union[int, float] = None,
  delete_after_overridable: typing.Union[bool, IResolvable] = None,
  description: str = None,
  name: str = None,
  retain_for_days: typing.Union[int, float] = None,
  retain_for_overridable: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope for this policy. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterDays">delete_after_days</a></code> | <code>typing.Union[int, float]</code> | The number of days after which a session recording will be automatically deleted. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterOverridable">delete_after_overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the associated delete_after_days value can be overridden by org scopes. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.description">description</a></code> | <code>str</code> | The policy description. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.name">name</a></code> | <code>str</code> | The policy name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForDays">retain_for_days</a></code> | <code>typing.Union[int, float]</code> | The number of days a session recording is required to be stored. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForOverridable">retain_for_overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the associated retain_for_days value can be overridden by org scopes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#scope_id PolicyStorage#scope_id}

---

##### `delete_after_days`<sup>Optional</sup> <a name="delete_after_days" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterDays"></a>

```python
delete_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days after which a session recording will be automatically deleted.

Defaults to 0: never automatically delete. However, delete_after_days and retain_for_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#delete_after_days PolicyStorage#delete_after_days}

---

##### `delete_after_overridable`<sup>Optional</sup> <a name="delete_after_overridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterOverridable"></a>

```python
delete_after_overridable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the associated delete_after_days value can be overridden by org scopes.

Note: if the associated delete_after_days value is 0, overridable is ignored

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#delete_after_overridable PolicyStorage#delete_after_overridable}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The policy description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#description PolicyStorage#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The policy name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#name PolicyStorage#name}

---

##### `retain_for_days`<sup>Optional</sup> <a name="retain_for_days" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForDays"></a>

```python
retain_for_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days a session recording is required to be stored.

Defaults to 0: allow deletions at any time. However, retain_for_days and delete_after_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#retain_for_days PolicyStorage#retain_for_days}

---

##### `retain_for_overridable`<sup>Optional</sup> <a name="retain_for_overridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForOverridable"></a>

```python
retain_for_overridable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the associated retain_for_days value can be overridden by org scopes.

Note: if the associated retain_for_days value is 0, overridable is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/policy_storage#retain_for_overridable PolicyStorage#retain_for_overridable}

---



