# `hostCatalogPlugin` Submodule <a name="`hostCatalogPlugin` Submodule" id="@cdktf/provider-boundary.hostCatalogPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostCatalogPlugin <a name="HostCatalogPlugin" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin boundary_host_catalog_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import host_catalog_plugin

hostCatalogPlugin.HostCatalogPlugin(
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
  attributes_json: str = None,
  description: str = None,
  internal_force_update: str = None,
  internal_hmac_used_for_secrets_config_hmac: str = None,
  internal_secrets_config_hmac: str = None,
  name: str = None,
  plugin_id: str = None,
  plugin_name: str = None,
  secrets_hmac: str = None,
  secrets_json: str = None,
  worker_filter: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope ID in which the resource is created. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.attributesJson">attributes_json</a></code> | <code>str</code> | The attributes for the host catalog. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.description">description</a></code> | <code>str</code> | The host catalog description. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalForceUpdate">internal_force_update</a></code> | <code>str</code> | Internal only. Used to force update so that we can always check the value of secrets. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalHmacUsedForSecretsConfigHmac">internal_hmac_used_for_secrets_config_hmac</a></code> | <code>str</code> | Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalSecretsConfigHmac">internal_secrets_config_hmac</a></code> | <code>str</code> | Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.name">name</a></code> | <code>str</code> | The host catalog name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.pluginName">plugin_name</a></code> | <code>str</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.secretsHmac">secrets_hmac</a></code> | <code>str</code> | The HMAC'd secrets value returned from the server. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.secretsJson">secrets_json</a></code> | <code>str</code> | The secrets for the host catalog. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.workerFilter">worker_filter</a></code> | <code>str</code> | HCP Only. A filter used to control which PKI workers can handle dynamic host catalog requests. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope ID in which the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#scope_id HostCatalogPlugin#scope_id}

---

##### `attributes_json`<sup>Optional</sup> <a name="attributes_json" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.attributesJson"></a>

- *Type:* str

The attributes for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#attributes_json HostCatalogPlugin#attributes_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.description"></a>

- *Type:* str

The host catalog description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#description HostCatalogPlugin#description}

---

##### `internal_force_update`<sup>Optional</sup> <a name="internal_force_update" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalForceUpdate"></a>

- *Type:* str

Internal only. Used to force update so that we can always check the value of secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#internal_force_update HostCatalogPlugin#internal_force_update}

---

##### `internal_hmac_used_for_secrets_config_hmac`<sup>Optional</sup> <a name="internal_hmac_used_for_secrets_config_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalHmacUsedForSecretsConfigHmac"></a>

- *Type:* str

Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#internal_hmac_used_for_secrets_config_hmac HostCatalogPlugin#internal_hmac_used_for_secrets_config_hmac}

---

##### `internal_secrets_config_hmac`<sup>Optional</sup> <a name="internal_secrets_config_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalSecretsConfigHmac"></a>

- *Type:* str

Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#internal_secrets_config_hmac HostCatalogPlugin#internal_secrets_config_hmac}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.name"></a>

- *Type:* str

The host catalog name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#name HostCatalogPlugin#name}

---

##### `plugin_id`<sup>Optional</sup> <a name="plugin_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.pluginId"></a>

- *Type:* str

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#plugin_id HostCatalogPlugin#plugin_id}

---

##### `plugin_name`<sup>Optional</sup> <a name="plugin_name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.pluginName"></a>

- *Type:* str

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#plugin_name HostCatalogPlugin#plugin_name}

---

##### `secrets_hmac`<sup>Optional</sup> <a name="secrets_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.secretsHmac"></a>

- *Type:* str

The HMAC'd secrets value returned from the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#secrets_hmac HostCatalogPlugin#secrets_hmac}

---

##### `secrets_json`<sup>Optional</sup> <a name="secrets_json" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.secretsJson"></a>

- *Type:* str

The secrets for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the host catalog; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#secrets_json HostCatalogPlugin#secrets_json}

---

##### `worker_filter`<sup>Optional</sup> <a name="worker_filter" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.workerFilter"></a>

- *Type:* str

HCP Only. A filter used to control which PKI workers can handle dynamic host catalog requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#worker_filter HostCatalogPlugin#worker_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetAttributesJson">reset_attributes_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalForceUpdate">reset_internal_force_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalHmacUsedForSecretsConfigHmac">reset_internal_hmac_used_for_secrets_config_hmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalSecretsConfigHmac">reset_internal_secrets_config_hmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginId">reset_plugin_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginName">reset_plugin_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsHmac">reset_secrets_hmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsJson">reset_secrets_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetWorkerFilter">reset_worker_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_attributes_json` <a name="reset_attributes_json" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetAttributesJson"></a>

```python
def reset_attributes_json() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_internal_force_update` <a name="reset_internal_force_update" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalForceUpdate"></a>

```python
def reset_internal_force_update() -> None
```

##### `reset_internal_hmac_used_for_secrets_config_hmac` <a name="reset_internal_hmac_used_for_secrets_config_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalHmacUsedForSecretsConfigHmac"></a>

```python
def reset_internal_hmac_used_for_secrets_config_hmac() -> None
```

##### `reset_internal_secrets_config_hmac` <a name="reset_internal_secrets_config_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalSecretsConfigHmac"></a>

```python
def reset_internal_secrets_config_hmac() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_plugin_id` <a name="reset_plugin_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginId"></a>

```python
def reset_plugin_id() -> None
```

##### `reset_plugin_name` <a name="reset_plugin_name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginName"></a>

```python
def reset_plugin_name() -> None
```

##### `reset_secrets_hmac` <a name="reset_secrets_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsHmac"></a>

```python
def reset_secrets_hmac() -> None
```

##### `reset_secrets_json` <a name="reset_secrets_json" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsJson"></a>

```python
def reset_secrets_json() -> None
```

##### `reset_worker_filter` <a name="reset_worker_filter" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetWorkerFilter"></a>

```python
def reset_worker_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HostCatalogPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import host_catalog_plugin

hostCatalogPlugin.HostCatalogPlugin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import host_catalog_plugin

hostCatalogPlugin.HostCatalogPlugin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_boundary import host_catalog_plugin

hostCatalogPlugin.HostCatalogPlugin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_boundary import host_catalog_plugin

hostCatalogPlugin.HostCatalogPlugin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HostCatalogPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HostCatalogPlugin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HostCatalogPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HostCatalogPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJsonInput">attributes_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdateInput">internal_force_update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmacInput">internal_hmac_used_for_secrets_config_hmac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmacInput">internal_secrets_config_hmac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginIdInput">plugin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginNameInput">plugin_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmacInput">secrets_hmac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJsonInput">secrets_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.workerFilterInput">worker_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJson">attributes_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdate">internal_force_update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmac">internal_hmac_used_for_secrets_config_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmac">internal_secrets_config_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginName">plugin_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmac">secrets_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJson">secrets_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.workerFilter">worker_filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `attributes_json_input`<sup>Optional</sup> <a name="attributes_json_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJsonInput"></a>

```python
attributes_json_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `internal_force_update_input`<sup>Optional</sup> <a name="internal_force_update_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdateInput"></a>

```python
internal_force_update_input: str
```

- *Type:* str

---

##### `internal_hmac_used_for_secrets_config_hmac_input`<sup>Optional</sup> <a name="internal_hmac_used_for_secrets_config_hmac_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmacInput"></a>

```python
internal_hmac_used_for_secrets_config_hmac_input: str
```

- *Type:* str

---

##### `internal_secrets_config_hmac_input`<sup>Optional</sup> <a name="internal_secrets_config_hmac_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmacInput"></a>

```python
internal_secrets_config_hmac_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plugin_id_input`<sup>Optional</sup> <a name="plugin_id_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginIdInput"></a>

```python
plugin_id_input: str
```

- *Type:* str

---

##### `plugin_name_input`<sup>Optional</sup> <a name="plugin_name_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginNameInput"></a>

```python
plugin_name_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `secrets_hmac_input`<sup>Optional</sup> <a name="secrets_hmac_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmacInput"></a>

```python
secrets_hmac_input: str
```

- *Type:* str

---

##### `secrets_json_input`<sup>Optional</sup> <a name="secrets_json_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJsonInput"></a>

```python
secrets_json_input: str
```

- *Type:* str

---

##### `worker_filter_input`<sup>Optional</sup> <a name="worker_filter_input" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.workerFilterInput"></a>

```python
worker_filter_input: str
```

- *Type:* str

---

##### `attributes_json`<sup>Required</sup> <a name="attributes_json" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJson"></a>

```python
attributes_json: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_force_update`<sup>Required</sup> <a name="internal_force_update" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdate"></a>

```python
internal_force_update: str
```

- *Type:* str

---

##### `internal_hmac_used_for_secrets_config_hmac`<sup>Required</sup> <a name="internal_hmac_used_for_secrets_config_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmac"></a>

```python
internal_hmac_used_for_secrets_config_hmac: str
```

- *Type:* str

---

##### `internal_secrets_config_hmac`<sup>Required</sup> <a name="internal_secrets_config_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmac"></a>

```python
internal_secrets_config_hmac: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `plugin_name`<sup>Required</sup> <a name="plugin_name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `secrets_hmac`<sup>Required</sup> <a name="secrets_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmac"></a>

```python
secrets_hmac: str
```

- *Type:* str

---

##### `secrets_json`<sup>Required</sup> <a name="secrets_json" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJson"></a>

```python
secrets_json: str
```

- *Type:* str

---

##### `worker_filter`<sup>Required</sup> <a name="worker_filter" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.workerFilter"></a>

```python
worker_filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HostCatalogPluginConfig <a name="HostCatalogPluginConfig" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import host_catalog_plugin

hostCatalogPlugin.HostCatalogPluginConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope_id: str,
  attributes_json: str = None,
  description: str = None,
  internal_force_update: str = None,
  internal_hmac_used_for_secrets_config_hmac: str = None,
  internal_secrets_config_hmac: str = None,
  name: str = None,
  plugin_id: str = None,
  plugin_name: str = None,
  secrets_hmac: str = None,
  secrets_json: str = None,
  worker_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope ID in which the resource is created. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.attributesJson">attributes_json</a></code> | <code>str</code> | The attributes for the host catalog. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.description">description</a></code> | <code>str</code> | The host catalog description. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalForceUpdate">internal_force_update</a></code> | <code>str</code> | Internal only. Used to force update so that we can always check the value of secrets. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalHmacUsedForSecretsConfigHmac">internal_hmac_used_for_secrets_config_hmac</a></code> | <code>str</code> | Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalSecretsConfigHmac">internal_secrets_config_hmac</a></code> | <code>str</code> | Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.name">name</a></code> | <code>str</code> | The host catalog name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginName">plugin_name</a></code> | <code>str</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsHmac">secrets_hmac</a></code> | <code>str</code> | The HMAC'd secrets value returned from the server. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsJson">secrets_json</a></code> | <code>str</code> | The secrets for the host catalog. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.workerFilter">worker_filter</a></code> | <code>str</code> | HCP Only. A filter used to control which PKI workers can handle dynamic host catalog requests. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope ID in which the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#scope_id HostCatalogPlugin#scope_id}

---

##### `attributes_json`<sup>Optional</sup> <a name="attributes_json" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.attributesJson"></a>

```python
attributes_json: str
```

- *Type:* str

The attributes for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#attributes_json HostCatalogPlugin#attributes_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The host catalog description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#description HostCatalogPlugin#description}

---

##### `internal_force_update`<sup>Optional</sup> <a name="internal_force_update" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalForceUpdate"></a>

```python
internal_force_update: str
```

- *Type:* str

Internal only. Used to force update so that we can always check the value of secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#internal_force_update HostCatalogPlugin#internal_force_update}

---

##### `internal_hmac_used_for_secrets_config_hmac`<sup>Optional</sup> <a name="internal_hmac_used_for_secrets_config_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalHmacUsedForSecretsConfigHmac"></a>

```python
internal_hmac_used_for_secrets_config_hmac: str
```

- *Type:* str

Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#internal_hmac_used_for_secrets_config_hmac HostCatalogPlugin#internal_hmac_used_for_secrets_config_hmac}

---

##### `internal_secrets_config_hmac`<sup>Optional</sup> <a name="internal_secrets_config_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalSecretsConfigHmac"></a>

```python
internal_secrets_config_hmac: str
```

- *Type:* str

Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#internal_secrets_config_hmac HostCatalogPlugin#internal_secrets_config_hmac}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The host catalog name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#name HostCatalogPlugin#name}

---

##### `plugin_id`<sup>Optional</sup> <a name="plugin_id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#plugin_id HostCatalogPlugin#plugin_id}

---

##### `plugin_name`<sup>Optional</sup> <a name="plugin_name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#plugin_name HostCatalogPlugin#plugin_name}

---

##### `secrets_hmac`<sup>Optional</sup> <a name="secrets_hmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsHmac"></a>

```python
secrets_hmac: str
```

- *Type:* str

The HMAC'd secrets value returned from the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#secrets_hmac HostCatalogPlugin#secrets_hmac}

---

##### `secrets_json`<sup>Optional</sup> <a name="secrets_json" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsJson"></a>

```python
secrets_json: str
```

- *Type:* str

The secrets for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the host catalog; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#secrets_json HostCatalogPlugin#secrets_json}

---

##### `worker_filter`<sup>Optional</sup> <a name="worker_filter" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.workerFilter"></a>

```python
worker_filter: str
```

- *Type:* str

HCP Only. A filter used to control which PKI workers can handle dynamic host catalog requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_catalog_plugin#worker_filter HostCatalogPlugin#worker_filter}

---



