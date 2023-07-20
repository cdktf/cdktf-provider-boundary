# `boundary_host_set_plugin`

Refer to the Terraform Registory for docs: [`boundary_host_set_plugin`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_set_plugin).

# `hostSetPlugin` Submodule <a name="`hostSetPlugin` Submodule" id="@cdktf/provider-boundary.hostSetPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostSetPlugin <a name="HostSetPlugin" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_set_plugin boundary_host_set_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new HostSetPlugin(Construct Scope, string Id, HostSetPluginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig">HostSetPluginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig">HostSetPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetAttributesJson">ResetAttributesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetPreferredEndpoints">ResetPreferredEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetSyncIntervalSeconds">ResetSyncIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributesJson` <a name="ResetAttributesJson" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetAttributesJson"></a>

```csharp
private void ResetAttributesJson()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPreferredEndpoints` <a name="ResetPreferredEndpoints" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetPreferredEndpoints"></a>

```csharp
private void ResetPreferredEndpoints()
```

##### `ResetSyncIntervalSeconds` <a name="ResetSyncIntervalSeconds" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetSyncIntervalSeconds"></a>

```csharp
private void ResetSyncIntervalSeconds()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

HostSetPlugin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

HostSetPlugin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

HostSetPlugin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJsonInput">AttributesJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogIdInput">HostCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpointsInput">PreferredEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSecondsInput">SyncIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJson">AttributesJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogId">HostCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpoints">PreferredEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSeconds">SyncIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AttributesJsonInput`<sup>Optional</sup> <a name="AttributesJsonInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJsonInput"></a>

```csharp
public string AttributesJsonInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HostCatalogIdInput`<sup>Optional</sup> <a name="HostCatalogIdInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogIdInput"></a>

```csharp
public string HostCatalogIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreferredEndpointsInput`<sup>Optional</sup> <a name="PreferredEndpointsInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpointsInput"></a>

```csharp
public string[] PreferredEndpointsInput { get; }
```

- *Type:* string[]

---

##### `SyncIntervalSecondsInput`<sup>Optional</sup> <a name="SyncIntervalSecondsInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSecondsInput"></a>

```csharp
public double SyncIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AttributesJson`<sup>Required</sup> <a name="AttributesJson" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJson"></a>

```csharp
public string AttributesJson { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HostCatalogId`<sup>Required</sup> <a name="HostCatalogId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogId"></a>

```csharp
public string HostCatalogId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PreferredEndpoints`<sup>Required</sup> <a name="PreferredEndpoints" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpoints"></a>

```csharp
public string[] PreferredEndpoints { get; }
```

- *Type:* string[]

---

##### `SyncIntervalSeconds`<sup>Required</sup> <a name="SyncIntervalSeconds" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSeconds"></a>

```csharp
public double SyncIntervalSeconds { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostSetPluginConfig <a name="HostSetPluginConfig" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new HostSetPluginConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HostCatalogId,
    string AttributesJson = null,
    string Description = null,
    string Name = null,
    string[] PreferredEndpoints = null,
    double SyncIntervalSeconds = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.hostCatalogId">HostCatalogId</a></code> | <code>string</code> | The catalog for the host set. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.attributesJson">AttributesJson</a></code> | <code>string</code> | The attributes for the host set. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.description">Description</a></code> | <code>string</code> | The host set description. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.name">Name</a></code> | <code>string</code> | The host set name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.preferredEndpoints">PreferredEndpoints</a></code> | <code>string[]</code> | The ordered list of preferred endpoints. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.syncIntervalSeconds">SyncIntervalSeconds</a></code> | <code>double</code> | The value to set for the sync interval seconds. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.type">Type</a></code> | <code>string</code> | The type of host set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HostCatalogId`<sup>Required</sup> <a name="HostCatalogId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.hostCatalogId"></a>

```csharp
public string HostCatalogId { get; set; }
```

- *Type:* string

The catalog for the host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_set_plugin#host_catalog_id HostSetPlugin#host_catalog_id}

---

##### `AttributesJson`<sup>Optional</sup> <a name="AttributesJson" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.attributesJson"></a>

```csharp
public string AttributesJson { get; set; }
```

- *Type:* string

The attributes for the host set.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_set_plugin#attributes_json HostSetPlugin#attributes_json}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The host set description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_set_plugin#description HostSetPlugin#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The host set name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_set_plugin#name HostSetPlugin#name}

---

##### `PreferredEndpoints`<sup>Optional</sup> <a name="PreferredEndpoints" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.preferredEndpoints"></a>

```csharp
public string[] PreferredEndpoints { get; set; }
```

- *Type:* string[]

The ordered list of preferred endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_set_plugin#preferred_endpoints HostSetPlugin#preferred_endpoints}

---

##### `SyncIntervalSeconds`<sup>Optional</sup> <a name="SyncIntervalSeconds" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.syncIntervalSeconds"></a>

```csharp
public double SyncIntervalSeconds { get; set; }
```

- *Type:* double

The value to set for the sync interval seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_set_plugin#sync_interval_seconds HostSetPlugin#sync_interval_seconds}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/host_set_plugin#type HostSetPlugin#type}

---



