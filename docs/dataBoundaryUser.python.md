# `dataBoundaryUser` Submodule <a name="`dataBoundaryUser` Submodule" id="@cdktf/provider-boundary.dataBoundaryUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataBoundaryUser <a name="DataBoundaryUser" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/data-sources/user boundary_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import data_boundary_user

dataBoundaryUser.DataBoundaryUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  scope_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.name">name</a></code> | <code>str</code> | The username to search for. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope ID in which the resource is created. Defaults `global` if unset. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.name"></a>

- *Type:* str

The username to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/data-sources/user#name DataBoundaryUser#name}

---

##### `scope_id`<sup>Optional</sup> <a name="scope_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope ID in which the resource is created. Defaults `global` if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/data-sources/user#scope_id DataBoundaryUser#scope_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.resetScopeId">reset_scope_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_scope_id` <a name="reset_scope_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.resetScopeId"></a>

```python
def reset_scope_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataBoundaryUser resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import data_boundary_user

dataBoundaryUser.DataBoundaryUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import data_boundary_user

dataBoundaryUser.DataBoundaryUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_boundary import data_boundary_user

dataBoundaryUser.DataBoundaryUser.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_boundary import data_boundary_user

dataBoundaryUser.DataBoundaryUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataBoundaryUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataBoundaryUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataBoundaryUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataBoundaryUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.authorizedActions">authorized_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.loginName">login_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.primaryAccountId">primary_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList">DataBoundaryUserScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_ids`<sup>Required</sup> <a name="account_ids" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorized_actions`<sup>Required</sup> <a name="authorized_actions" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.authorizedActions"></a>

```python
authorized_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `login_name`<sup>Required</sup> <a name="login_name" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.loginName"></a>

```python
login_name: str
```

- *Type:* str

---

##### `primary_account_id`<sup>Required</sup> <a name="primary_account_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.primaryAccountId"></a>

```python
primary_account_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.scope"></a>

```python
scope: DataBoundaryUserScopeList
```

- *Type:* <a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList">DataBoundaryUserScopeList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataBoundaryUserConfig <a name="DataBoundaryUserConfig" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import data_boundary_user

dataBoundaryUser.DataBoundaryUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  scope_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.name">name</a></code> | <code>str</code> | The username to search for. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope ID in which the resource is created. Defaults `global` if unset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The username to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/data-sources/user#name DataBoundaryUser#name}

---

##### `scope_id`<sup>Optional</sup> <a name="scope_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope ID in which the resource is created. Defaults `global` if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/data-sources/user#scope_id DataBoundaryUser#scope_id}

---

### DataBoundaryUserScope <a name="DataBoundaryUserScope" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScope.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import data_boundary_user

dataBoundaryUser.DataBoundaryUserScope()
```


## Classes <a name="Classes" id="Classes"></a>

### DataBoundaryUserScopeList <a name="DataBoundaryUserScopeList" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import data_boundary_user

dataBoundaryUser.DataBoundaryUserScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataBoundaryUserScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataBoundaryUserScopeOutputReference <a name="DataBoundaryUserScopeOutputReference" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import data_boundary_user

dataBoundaryUser.DataBoundaryUserScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.parentScopeId">parent_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScope">DataBoundaryUserScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_scope_id`<sup>Required</sup> <a name="parent_scope_id" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.parentScopeId"></a>

```python
parent_scope_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScopeOutputReference.property.internalValue"></a>

```python
internal_value: DataBoundaryUserScope
```

- *Type:* <a href="#@cdktf/provider-boundary.dataBoundaryUser.DataBoundaryUserScope">DataBoundaryUserScope</a>

---



