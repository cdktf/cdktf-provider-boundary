# `dataBoundaryAuthMethod` Submodule <a name="`dataBoundaryAuthMethod` Submodule" id="@cdktf/provider-boundary.dataBoundaryAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataBoundaryAuthMethod <a name="DataBoundaryAuthMethod" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/data-sources/auth_method boundary_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new DataBoundaryAuthMethod(Construct Scope, string Id, DataBoundaryAuthMethodConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig">DataBoundaryAuthMethodConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig">DataBoundaryAuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.resetScopeId">ResetScopeId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetScopeId` <a name="ResetScopeId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.resetScopeId"></a>

```csharp
private void ResetScopeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataBoundaryAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

DataBoundaryAuthMethod.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

DataBoundaryAuthMethod.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

DataBoundaryAuthMethod.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

DataBoundaryAuthMethod.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataBoundaryAuthMethod resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataBoundaryAuthMethod to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataBoundaryAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/data-sources/auth_method#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataBoundaryAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList">DataBoundaryAuthMethodScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scope"></a>

```csharp
public DataBoundaryAuthMethodScopeList Scope { get; }
```

- *Type:* <a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList">DataBoundaryAuthMethodScopeList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataBoundaryAuthMethodConfig <a name="DataBoundaryAuthMethodConfig" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new DataBoundaryAuthMethodConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ScopeId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.name">Name</a></code> | <code>string</code> | The name of the auth method to retrieve. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | The scope ID in which the resource is created. Defaults `global` if unset. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the auth method to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/data-sources/auth_method#name DataBoundaryAuthMethod#name}

---

##### `ScopeId`<sup>Optional</sup> <a name="ScopeId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

The scope ID in which the resource is created. Defaults `global` if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/data-sources/auth_method#scope_id DataBoundaryAuthMethod#scope_id}

---

### DataBoundaryAuthMethodScope <a name="DataBoundaryAuthMethodScope" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new DataBoundaryAuthMethodScope {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataBoundaryAuthMethodScopeList <a name="DataBoundaryAuthMethodScopeList" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new DataBoundaryAuthMethodScopeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.get"></a>

```csharp
private DataBoundaryAuthMethodScopeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataBoundaryAuthMethodScopeOutputReference <a name="DataBoundaryAuthMethodScopeOutputReference" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new DataBoundaryAuthMethodScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.parentScopeId">ParentScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScope">DataBoundaryAuthMethodScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentScopeId`<sup>Required</sup> <a name="ParentScopeId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.parentScopeId"></a>

```csharp
public string ParentScopeId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.internalValue"></a>

```csharp
public DataBoundaryAuthMethodScope InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScope">DataBoundaryAuthMethodScope</a>

---



