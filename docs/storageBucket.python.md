# `boundary_storage_bucket`

Refer to the Terraform Registory for docs: [`boundary_storage_bucket`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket).

# `storageBucket` Submodule <a name="`storageBucket` Submodule" id="@cdktf/provider-boundary.storageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucket <a name="StorageBucket" id="@cdktf/provider-boundary.storageBucket.StorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket boundary_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import storage_bucket

storageBucket.StorageBucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  scope_id: str,
  secrets_json: str,
  worker_filter: str,
  attributes_json: str = None,
  bucket_prefix: str = None,
  description: str = None,
  name: str = None,
  plugin_id: str = None,
  plugin_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | The name of the bucket within the external object store service. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.secretsJson">secrets_json</a></code> | <code>str</code> | The secrets for the storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.workerFilter">worker_filter</a></code> | <code>str</code> | Filters to the worker(s) that can handle requests for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.attributesJson">attributes_json</a></code> | <code>str</code> | The attributes for the storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | The prefix used to organize the data held within the external object store. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.description">description</a></code> | <code>str</code> | The storage bucket description. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.name">name</a></code> | <code>str</code> | The storage bucket name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.pluginName">plugin_name</a></code> | <code>str</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.bucketName"></a>

- *Type:* str

The name of the bucket within the external object store service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#bucket_name StorageBucket#bucket_name}

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope for this storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#scope_id StorageBucket#scope_id}

---

##### `secrets_json`<sup>Required</sup> <a name="secrets_json" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.secretsJson"></a>

- *Type:* str

The secrets for the storage bucket.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the storage bucket; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#secrets_json StorageBucket#secrets_json}

---

##### `worker_filter`<sup>Required</sup> <a name="worker_filter" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.workerFilter"></a>

- *Type:* str

Filters to the worker(s) that can handle requests for this storage bucket.

The filter must match an existing worker in order to create a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#worker_filter StorageBucket#worker_filter}

---

##### `attributes_json`<sup>Optional</sup> <a name="attributes_json" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.attributesJson"></a>

- *Type:* str

The attributes for the storage bucket.

The "region" attribute field is required when creating an AWS storage bucket. Values are either encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#attributes_json StorageBucket#attributes_json}

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.bucketPrefix"></a>

- *Type:* str

The prefix used to organize the data held within the external object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#bucket_prefix StorageBucket#bucket_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.description"></a>

- *Type:* str

The storage bucket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#description StorageBucket#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.name"></a>

- *Type:* str

The storage bucket name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `plugin_id`<sup>Optional</sup> <a name="plugin_id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.pluginId"></a>

- *Type:* str

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#plugin_id StorageBucket#plugin_id}

---

##### `plugin_name`<sup>Optional</sup> <a name="plugin_name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.pluginName"></a>

- *Type:* str

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#plugin_name StorageBucket#plugin_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetAttributesJson">reset_attributes_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginId">reset_plugin_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginName">reset_plugin_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes_json` <a name="reset_attributes_json" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetAttributesJson"></a>

```python
def reset_attributes_json() -> None
```

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_plugin_id` <a name="reset_plugin_id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginId"></a>

```python
def reset_plugin_id() -> None
```

##### `reset_plugin_name` <a name="reset_plugin_name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginName"></a>

```python
def reset_plugin_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import storage_bucket

storageBucket.StorageBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import storage_bucket

storageBucket.StorageBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_boundary import storage_bucket

storageBucket.StorageBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalForceUpdate">internal_force_update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalHmacUsedForSecretsConfigHmac">internal_hmac_used_for_secrets_config_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalSecretsConfigHmac">internal_secrets_config_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsHmac">secrets_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJsonInput">attributes_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginIdInput">plugin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginNameInput">plugin_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJsonInput">secrets_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilterInput">worker_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJson">attributes_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginName">plugin_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJson">secrets_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilter">worker_filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_force_update`<sup>Required</sup> <a name="internal_force_update" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalForceUpdate"></a>

```python
internal_force_update: str
```

- *Type:* str

---

##### `internal_hmac_used_for_secrets_config_hmac`<sup>Required</sup> <a name="internal_hmac_used_for_secrets_config_hmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalHmacUsedForSecretsConfigHmac"></a>

```python
internal_hmac_used_for_secrets_config_hmac: str
```

- *Type:* str

---

##### `internal_secrets_config_hmac`<sup>Required</sup> <a name="internal_secrets_config_hmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalSecretsConfigHmac"></a>

```python
internal_secrets_config_hmac: str
```

- *Type:* str

---

##### `secrets_hmac`<sup>Required</sup> <a name="secrets_hmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsHmac"></a>

```python
secrets_hmac: str
```

- *Type:* str

---

##### `attributes_json_input`<sup>Optional</sup> <a name="attributes_json_input" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJsonInput"></a>

```python
attributes_json_input: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plugin_id_input`<sup>Optional</sup> <a name="plugin_id_input" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginIdInput"></a>

```python
plugin_id_input: str
```

- *Type:* str

---

##### `plugin_name_input`<sup>Optional</sup> <a name="plugin_name_input" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginNameInput"></a>

```python
plugin_name_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `secrets_json_input`<sup>Optional</sup> <a name="secrets_json_input" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJsonInput"></a>

```python
secrets_json_input: str
```

- *Type:* str

---

##### `worker_filter_input`<sup>Optional</sup> <a name="worker_filter_input" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilterInput"></a>

```python
worker_filter_input: str
```

- *Type:* str

---

##### `attributes_json`<sup>Required</sup> <a name="attributes_json" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJson"></a>

```python
attributes_json: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `plugin_name`<sup>Required</sup> <a name="plugin_name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `secrets_json`<sup>Required</sup> <a name="secrets_json" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJson"></a>

```python
secrets_json: str
```

- *Type:* str

---

##### `worker_filter`<sup>Required</sup> <a name="worker_filter" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilter"></a>

```python
worker_filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketConfig <a name="StorageBucketConfig" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import storage_bucket

storageBucket.StorageBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  scope_id: str,
  secrets_json: str,
  worker_filter: str,
  attributes_json: str = None,
  bucket_prefix: str = None,
  description: str = None,
  name: str = None,
  plugin_id: str = None,
  plugin_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the bucket within the external object store service. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.secretsJson">secrets_json</a></code> | <code>str</code> | The secrets for the storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.workerFilter">worker_filter</a></code> | <code>str</code> | Filters to the worker(s) that can handle requests for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.attributesJson">attributes_json</a></code> | <code>str</code> | The attributes for the storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | The prefix used to organize the data held within the external object store. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.description">description</a></code> | <code>str</code> | The storage bucket description. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.name">name</a></code> | <code>str</code> | The storage bucket name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginName">plugin_name</a></code> | <code>str</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the bucket within the external object store service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#bucket_name StorageBucket#bucket_name}

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope for this storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#scope_id StorageBucket#scope_id}

---

##### `secrets_json`<sup>Required</sup> <a name="secrets_json" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.secretsJson"></a>

```python
secrets_json: str
```

- *Type:* str

The secrets for the storage bucket.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the storage bucket; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#secrets_json StorageBucket#secrets_json}

---

##### `worker_filter`<sup>Required</sup> <a name="worker_filter" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.workerFilter"></a>

```python
worker_filter: str
```

- *Type:* str

Filters to the worker(s) that can handle requests for this storage bucket.

The filter must match an existing worker in order to create a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#worker_filter StorageBucket#worker_filter}

---

##### `attributes_json`<sup>Optional</sup> <a name="attributes_json" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.attributesJson"></a>

```python
attributes_json: str
```

- *Type:* str

The attributes for the storage bucket.

The "region" attribute field is required when creating an AWS storage bucket. Values are either encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#attributes_json StorageBucket#attributes_json}

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

The prefix used to organize the data held within the external object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#bucket_prefix StorageBucket#bucket_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The storage bucket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#description StorageBucket#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The storage bucket name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `plugin_id`<sup>Optional</sup> <a name="plugin_id" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#plugin_id StorageBucket#plugin_id}

---

##### `plugin_name`<sup>Optional</sup> <a name="plugin_name" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/storage_bucket#plugin_name StorageBucket#plugin_name}

---



