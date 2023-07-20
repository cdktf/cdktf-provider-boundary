# `boundary_target`

Refer to the Terraform Registory for docs: [`boundary_target`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target).

# `target` Submodule <a name="`target` Submodule" id="@cdktf/provider-boundary.target"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Target <a name="Target" id="@cdktf/provider-boundary.target.Target"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target boundary_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.target.Target.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import target

target.Target(
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
  address: str = None,
  brokered_credential_source_ids: typing.List[str] = None,
  default_client_port: typing.Union[int, float] = None,
  default_port: typing.Union[int, float] = None,
  description: str = None,
  egress_worker_filter: str = None,
  enable_session_recording: typing.Union[bool, IResolvable] = None,
  host_source_ids: typing.List[str] = None,
  ingress_worker_filter: str = None,
  injected_application_credential_source_ids: typing.List[str] = None,
  name: str = None,
  session_connection_limit: typing.Union[int, float] = None,
  session_max_seconds: typing.Union[int, float] = None,
  storage_bucket_id: str = None,
  worker_filter: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.type">type</a></code> | <code>str</code> | The target resource type. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.address">address</a></code> | <code>str</code> | Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.brokeredCredentialSourceIds">brokered_credential_source_ids</a></code> | <code>typing.List[str]</code> | A list of brokered credential source ID's. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.defaultClientPort">default_client_port</a></code> | <code>typing.Union[int, float]</code> | The default client port for this target. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.defaultPort">default_port</a></code> | <code>typing.Union[int, float]</code> | The default port for this target. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.description">description</a></code> | <code>str</code> | The target description. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.egressWorkerFilter">egress_worker_filter</a></code> | <code>str</code> | Boolean expression to filter the workers used to access this target. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.enableSessionRecording">enable_session_recording</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.hostSourceIds">host_source_ids</a></code> | <code>typing.List[str]</code> | A list of host source ID's. Cannot be used alongside address. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.ingressWorkerFilter">ingress_worker_filter</a></code> | <code>str</code> | HCP Only. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.injectedApplicationCredentialSourceIds">injected_application_credential_source_ids</a></code> | <code>typing.List[str]</code> | A list of injected application credential source ID's. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.name">name</a></code> | <code>str</code> | The target name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.sessionConnectionLimit">session_connection_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#session_connection_limit Target#session_connection_limit}. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.sessionMaxSeconds">session_max_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#session_max_seconds Target#session_max_seconds}. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.storageBucketId">storage_bucket_id</a></code> | <code>str</code> | HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.workerFilter">worker_filter</a></code> | <code>str</code> | Boolean expression to filter the workers for this target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#scope_id Target#scope_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.type"></a>

- *Type:* str

The target resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#type Target#type}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.address"></a>

- *Type:* str

Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#address Target#address}

---

##### `brokered_credential_source_ids`<sup>Optional</sup> <a name="brokered_credential_source_ids" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.brokeredCredentialSourceIds"></a>

- *Type:* typing.List[str]

A list of brokered credential source ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#brokered_credential_source_ids Target#brokered_credential_source_ids}

---

##### `default_client_port`<sup>Optional</sup> <a name="default_client_port" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.defaultClientPort"></a>

- *Type:* typing.Union[int, float]

The default client port for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#default_client_port Target#default_client_port}

---

##### `default_port`<sup>Optional</sup> <a name="default_port" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.defaultPort"></a>

- *Type:* typing.Union[int, float]

The default port for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#default_port Target#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.description"></a>

- *Type:* str

The target description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#description Target#description}

---

##### `egress_worker_filter`<sup>Optional</sup> <a name="egress_worker_filter" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.egressWorkerFilter"></a>

- *Type:* str

Boolean expression to filter the workers used to access this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#egress_worker_filter Target#egress_worker_filter}

---

##### `enable_session_recording`<sup>Optional</sup> <a name="enable_session_recording" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.enableSessionRecording"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#enable_session_recording Target#enable_session_recording}

---

##### `host_source_ids`<sup>Optional</sup> <a name="host_source_ids" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.hostSourceIds"></a>

- *Type:* typing.List[str]

A list of host source ID's. Cannot be used alongside address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#host_source_ids Target#host_source_ids}

---

##### `ingress_worker_filter`<sup>Optional</sup> <a name="ingress_worker_filter" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.ingressWorkerFilter"></a>

- *Type:* str

HCP Only.

Boolean expression to filter the workers a user will connect to when initiating a session against this target

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#ingress_worker_filter Target#ingress_worker_filter}

---

##### `injected_application_credential_source_ids`<sup>Optional</sup> <a name="injected_application_credential_source_ids" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.injectedApplicationCredentialSourceIds"></a>

- *Type:* typing.List[str]

A list of injected application credential source ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#injected_application_credential_source_ids Target#injected_application_credential_source_ids}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.name"></a>

- *Type:* str

The target name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#name Target#name}

---

##### `session_connection_limit`<sup>Optional</sup> <a name="session_connection_limit" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.sessionConnectionLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#session_connection_limit Target#session_connection_limit}.

---

##### `session_max_seconds`<sup>Optional</sup> <a name="session_max_seconds" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.sessionMaxSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#session_max_seconds Target#session_max_seconds}.

---

##### `storage_bucket_id`<sup>Optional</sup> <a name="storage_bucket_id" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.storageBucketId"></a>

- *Type:* str

HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#storage_bucket_id Target#storage_bucket_id}

---

##### `worker_filter`<sup>Optional</sup> <a name="worker_filter" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.workerFilter"></a>

- *Type:* str

Boolean expression to filter the workers for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#worker_filter Target#worker_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.target.Target.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.target.Target.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetBrokeredCredentialSourceIds">reset_brokered_credential_source_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDefaultClientPort">reset_default_client_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDefaultPort">reset_default_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetEgressWorkerFilter">reset_egress_worker_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetEnableSessionRecording">reset_enable_session_recording</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetHostSourceIds">reset_host_source_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetIngressWorkerFilter">reset_ingress_worker_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetInjectedApplicationCredentialSourceIds">reset_injected_application_credential_source_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetSessionConnectionLimit">reset_session_connection_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetSessionMaxSeconds">reset_session_max_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetStorageBucketId">reset_storage_bucket_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetWorkerFilter">reset_worker_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.target.Target.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.target.Target.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.target.Target.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.target.Target.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.target.Target.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.target.Target.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.target.Target.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.target.Target.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.target.Target.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.target.Target.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.target.Target.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.target.Target.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.target.Target.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.target.Target.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.target.Target.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.target.Target.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.target.Target.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.target.Target.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.target.Target.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.target.Target.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.target.Target.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.target.Target.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.target.Target.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.target.Target.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.target.Target.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.target.Target.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.target.Target.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.target.Target.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.target.Target.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-boundary.target.Target.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_brokered_credential_source_ids` <a name="reset_brokered_credential_source_ids" id="@cdktf/provider-boundary.target.Target.resetBrokeredCredentialSourceIds"></a>

```python
def reset_brokered_credential_source_ids() -> None
```

##### `reset_default_client_port` <a name="reset_default_client_port" id="@cdktf/provider-boundary.target.Target.resetDefaultClientPort"></a>

```python
def reset_default_client_port() -> None
```

##### `reset_default_port` <a name="reset_default_port" id="@cdktf/provider-boundary.target.Target.resetDefaultPort"></a>

```python
def reset_default_port() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-boundary.target.Target.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_egress_worker_filter` <a name="reset_egress_worker_filter" id="@cdktf/provider-boundary.target.Target.resetEgressWorkerFilter"></a>

```python
def reset_egress_worker_filter() -> None
```

##### `reset_enable_session_recording` <a name="reset_enable_session_recording" id="@cdktf/provider-boundary.target.Target.resetEnableSessionRecording"></a>

```python
def reset_enable_session_recording() -> None
```

##### `reset_host_source_ids` <a name="reset_host_source_ids" id="@cdktf/provider-boundary.target.Target.resetHostSourceIds"></a>

```python
def reset_host_source_ids() -> None
```

##### `reset_ingress_worker_filter` <a name="reset_ingress_worker_filter" id="@cdktf/provider-boundary.target.Target.resetIngressWorkerFilter"></a>

```python
def reset_ingress_worker_filter() -> None
```

##### `reset_injected_application_credential_source_ids` <a name="reset_injected_application_credential_source_ids" id="@cdktf/provider-boundary.target.Target.resetInjectedApplicationCredentialSourceIds"></a>

```python
def reset_injected_application_credential_source_ids() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-boundary.target.Target.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_session_connection_limit` <a name="reset_session_connection_limit" id="@cdktf/provider-boundary.target.Target.resetSessionConnectionLimit"></a>

```python
def reset_session_connection_limit() -> None
```

##### `reset_session_max_seconds` <a name="reset_session_max_seconds" id="@cdktf/provider-boundary.target.Target.resetSessionMaxSeconds"></a>

```python
def reset_session_max_seconds() -> None
```

##### `reset_storage_bucket_id` <a name="reset_storage_bucket_id" id="@cdktf/provider-boundary.target.Target.resetStorageBucketId"></a>

```python
def reset_storage_bucket_id() -> None
```

##### `reset_worker_filter` <a name="reset_worker_filter" id="@cdktf/provider-boundary.target.Target.resetWorkerFilter"></a>

```python
def reset_worker_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.target.Target.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import target

target.Target.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.target.Target.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.target.Target.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import target

target.Target.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.target.Target.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-boundary.target.Target.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_boundary import target

target.Target.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.target.Target.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIdsInput">brokered_credential_source_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultClientPortInput">default_client_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultPortInput">default_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.egressWorkerFilterInput">egress_worker_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.enableSessionRecordingInput">enable_session_recording_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.hostSourceIdsInput">host_source_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.ingressWorkerFilterInput">ingress_worker_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIdsInput">injected_application_credential_source_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionConnectionLimitInput">session_connection_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionMaxSecondsInput">session_max_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.storageBucketIdInput">storage_bucket_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.workerFilterInput">worker_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIds">brokered_credential_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultClientPort">default_client_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultPort">default_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.egressWorkerFilter">egress_worker_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.enableSessionRecording">enable_session_recording</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.hostSourceIds">host_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.ingressWorkerFilter">ingress_worker_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIds">injected_application_credential_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionConnectionLimit">session_connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionMaxSeconds">session_max_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.storageBucketId">storage_bucket_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.workerFilter">worker_filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.target.Target.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.target.Target.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.target.Target.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.target.Target.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.target.Target.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.target.Target.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.target.Target.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.target.Target.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.target.Target.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.target.Target.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.target.Target.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.target.Target.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.target.Target.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.target.Target.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-boundary.target.Target.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `brokered_credential_source_ids_input`<sup>Optional</sup> <a name="brokered_credential_source_ids_input" id="@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIdsInput"></a>

```python
brokered_credential_source_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_client_port_input`<sup>Optional</sup> <a name="default_client_port_input" id="@cdktf/provider-boundary.target.Target.property.defaultClientPortInput"></a>

```python
default_client_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_port_input`<sup>Optional</sup> <a name="default_port_input" id="@cdktf/provider-boundary.target.Target.property.defaultPortInput"></a>

```python
default_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-boundary.target.Target.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `egress_worker_filter_input`<sup>Optional</sup> <a name="egress_worker_filter_input" id="@cdktf/provider-boundary.target.Target.property.egressWorkerFilterInput"></a>

```python
egress_worker_filter_input: str
```

- *Type:* str

---

##### `enable_session_recording_input`<sup>Optional</sup> <a name="enable_session_recording_input" id="@cdktf/provider-boundary.target.Target.property.enableSessionRecordingInput"></a>

```python
enable_session_recording_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_source_ids_input`<sup>Optional</sup> <a name="host_source_ids_input" id="@cdktf/provider-boundary.target.Target.property.hostSourceIdsInput"></a>

```python
host_source_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_worker_filter_input`<sup>Optional</sup> <a name="ingress_worker_filter_input" id="@cdktf/provider-boundary.target.Target.property.ingressWorkerFilterInput"></a>

```python
ingress_worker_filter_input: str
```

- *Type:* str

---

##### `injected_application_credential_source_ids_input`<sup>Optional</sup> <a name="injected_application_credential_source_ids_input" id="@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIdsInput"></a>

```python
injected_application_credential_source_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.target.Target.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-boundary.target.Target.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `session_connection_limit_input`<sup>Optional</sup> <a name="session_connection_limit_input" id="@cdktf/provider-boundary.target.Target.property.sessionConnectionLimitInput"></a>

```python
session_connection_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_max_seconds_input`<sup>Optional</sup> <a name="session_max_seconds_input" id="@cdktf/provider-boundary.target.Target.property.sessionMaxSecondsInput"></a>

```python
session_max_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_bucket_id_input`<sup>Optional</sup> <a name="storage_bucket_id_input" id="@cdktf/provider-boundary.target.Target.property.storageBucketIdInput"></a>

```python
storage_bucket_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-boundary.target.Target.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `worker_filter_input`<sup>Optional</sup> <a name="worker_filter_input" id="@cdktf/provider-boundary.target.Target.property.workerFilterInput"></a>

```python
worker_filter_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-boundary.target.Target.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `brokered_credential_source_ids`<sup>Required</sup> <a name="brokered_credential_source_ids" id="@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIds"></a>

```python
brokered_credential_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_client_port`<sup>Required</sup> <a name="default_client_port" id="@cdktf/provider-boundary.target.Target.property.defaultClientPort"></a>

```python
default_client_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_port`<sup>Required</sup> <a name="default_port" id="@cdktf/provider-boundary.target.Target.property.defaultPort"></a>

```python
default_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.target.Target.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `egress_worker_filter`<sup>Required</sup> <a name="egress_worker_filter" id="@cdktf/provider-boundary.target.Target.property.egressWorkerFilter"></a>

```python
egress_worker_filter: str
```

- *Type:* str

---

##### `enable_session_recording`<sup>Required</sup> <a name="enable_session_recording" id="@cdktf/provider-boundary.target.Target.property.enableSessionRecording"></a>

```python
enable_session_recording: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_source_ids`<sup>Required</sup> <a name="host_source_ids" id="@cdktf/provider-boundary.target.Target.property.hostSourceIds"></a>

```python
host_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_worker_filter`<sup>Required</sup> <a name="ingress_worker_filter" id="@cdktf/provider-boundary.target.Target.property.ingressWorkerFilter"></a>

```python
ingress_worker_filter: str
```

- *Type:* str

---

##### `injected_application_credential_source_ids`<sup>Required</sup> <a name="injected_application_credential_source_ids" id="@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIds"></a>

```python
injected_application_credential_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.target.Target.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.target.Target.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `session_connection_limit`<sup>Required</sup> <a name="session_connection_limit" id="@cdktf/provider-boundary.target.Target.property.sessionConnectionLimit"></a>

```python
session_connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_max_seconds`<sup>Required</sup> <a name="session_max_seconds" id="@cdktf/provider-boundary.target.Target.property.sessionMaxSeconds"></a>

```python
session_max_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_bucket_id`<sup>Required</sup> <a name="storage_bucket_id" id="@cdktf/provider-boundary.target.Target.property.storageBucketId"></a>

```python
storage_bucket_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.target.Target.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `worker_filter`<sup>Required</sup> <a name="worker_filter" id="@cdktf/provider-boundary.target.Target.property.workerFilter"></a>

```python
worker_filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.target.Target.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TargetConfig <a name="TargetConfig" id="@cdktf/provider-boundary.target.TargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.target.TargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import target

target.TargetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope_id: str,
  type: str,
  address: str = None,
  brokered_credential_source_ids: typing.List[str] = None,
  default_client_port: typing.Union[int, float] = None,
  default_port: typing.Union[int, float] = None,
  description: str = None,
  egress_worker_filter: str = None,
  enable_session_recording: typing.Union[bool, IResolvable] = None,
  host_source_ids: typing.List[str] = None,
  ingress_worker_filter: str = None,
  injected_application_credential_source_ids: typing.List[str] = None,
  name: str = None,
  session_connection_limit: typing.Union[int, float] = None,
  session_max_seconds: typing.Union[int, float] = None,
  storage_bucket_id: str = None,
  worker_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.type">type</a></code> | <code>str</code> | The target resource type. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.address">address</a></code> | <code>str</code> | Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.brokeredCredentialSourceIds">brokered_credential_source_ids</a></code> | <code>typing.List[str]</code> | A list of brokered credential source ID's. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.defaultClientPort">default_client_port</a></code> | <code>typing.Union[int, float]</code> | The default client port for this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.defaultPort">default_port</a></code> | <code>typing.Union[int, float]</code> | The default port for this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.description">description</a></code> | <code>str</code> | The target description. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.egressWorkerFilter">egress_worker_filter</a></code> | <code>str</code> | Boolean expression to filter the workers used to access this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.enableSessionRecording">enable_session_recording</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.hostSourceIds">host_source_ids</a></code> | <code>typing.List[str]</code> | A list of host source ID's. Cannot be used alongside address. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.ingressWorkerFilter">ingress_worker_filter</a></code> | <code>str</code> | HCP Only. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.injectedApplicationCredentialSourceIds">injected_application_credential_source_ids</a></code> | <code>typing.List[str]</code> | A list of injected application credential source ID's. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.name">name</a></code> | <code>str</code> | The target name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.sessionConnectionLimit">session_connection_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#session_connection_limit Target#session_connection_limit}. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.sessionMaxSeconds">session_max_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#session_max_seconds Target#session_max_seconds}. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.storageBucketId">storage_bucket_id</a></code> | <code>str</code> | HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.workerFilter">worker_filter</a></code> | <code>str</code> | Boolean expression to filter the workers for this target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.target.TargetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.target.TargetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.target.TargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.target.TargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.target.TargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.target.TargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.target.TargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.target.TargetConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#scope_id Target#scope_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.target.TargetConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The target resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#type Target#type}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-boundary.target.TargetConfig.property.address"></a>

```python
address: str
```

- *Type:* str

Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#address Target#address}

---

##### `brokered_credential_source_ids`<sup>Optional</sup> <a name="brokered_credential_source_ids" id="@cdktf/provider-boundary.target.TargetConfig.property.brokeredCredentialSourceIds"></a>

```python
brokered_credential_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of brokered credential source ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#brokered_credential_source_ids Target#brokered_credential_source_ids}

---

##### `default_client_port`<sup>Optional</sup> <a name="default_client_port" id="@cdktf/provider-boundary.target.TargetConfig.property.defaultClientPort"></a>

```python
default_client_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default client port for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#default_client_port Target#default_client_port}

---

##### `default_port`<sup>Optional</sup> <a name="default_port" id="@cdktf/provider-boundary.target.TargetConfig.property.defaultPort"></a>

```python
default_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default port for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#default_port Target#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.target.TargetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The target description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#description Target#description}

---

##### `egress_worker_filter`<sup>Optional</sup> <a name="egress_worker_filter" id="@cdktf/provider-boundary.target.TargetConfig.property.egressWorkerFilter"></a>

```python
egress_worker_filter: str
```

- *Type:* str

Boolean expression to filter the workers used to access this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#egress_worker_filter Target#egress_worker_filter}

---

##### `enable_session_recording`<sup>Optional</sup> <a name="enable_session_recording" id="@cdktf/provider-boundary.target.TargetConfig.property.enableSessionRecording"></a>

```python
enable_session_recording: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#enable_session_recording Target#enable_session_recording}

---

##### `host_source_ids`<sup>Optional</sup> <a name="host_source_ids" id="@cdktf/provider-boundary.target.TargetConfig.property.hostSourceIds"></a>

```python
host_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of host source ID's. Cannot be used alongside address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#host_source_ids Target#host_source_ids}

---

##### `ingress_worker_filter`<sup>Optional</sup> <a name="ingress_worker_filter" id="@cdktf/provider-boundary.target.TargetConfig.property.ingressWorkerFilter"></a>

```python
ingress_worker_filter: str
```

- *Type:* str

HCP Only.

Boolean expression to filter the workers a user will connect to when initiating a session against this target

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#ingress_worker_filter Target#ingress_worker_filter}

---

##### `injected_application_credential_source_ids`<sup>Optional</sup> <a name="injected_application_credential_source_ids" id="@cdktf/provider-boundary.target.TargetConfig.property.injectedApplicationCredentialSourceIds"></a>

```python
injected_application_credential_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of injected application credential source ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#injected_application_credential_source_ids Target#injected_application_credential_source_ids}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.target.TargetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The target name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#name Target#name}

---

##### `session_connection_limit`<sup>Optional</sup> <a name="session_connection_limit" id="@cdktf/provider-boundary.target.TargetConfig.property.sessionConnectionLimit"></a>

```python
session_connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#session_connection_limit Target#session_connection_limit}.

---

##### `session_max_seconds`<sup>Optional</sup> <a name="session_max_seconds" id="@cdktf/provider-boundary.target.TargetConfig.property.sessionMaxSeconds"></a>

```python
session_max_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#session_max_seconds Target#session_max_seconds}.

---

##### `storage_bucket_id`<sup>Optional</sup> <a name="storage_bucket_id" id="@cdktf/provider-boundary.target.TargetConfig.property.storageBucketId"></a>

```python
storage_bucket_id: str
```

- *Type:* str

HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#storage_bucket_id Target#storage_bucket_id}

---

##### `worker_filter`<sup>Optional</sup> <a name="worker_filter" id="@cdktf/provider-boundary.target.TargetConfig.property.workerFilter"></a>

```python
worker_filter: str
```

- *Type:* str

Boolean expression to filter the workers for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/target#worker_filter Target#worker_filter}

---



