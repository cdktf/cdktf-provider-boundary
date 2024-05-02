# `hostCatalogPlugin` Submodule <a name="`hostCatalogPlugin` Submodule" id="@cdktf/provider-boundary.hostCatalogPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostCatalogPlugin <a name="HostCatalogPlugin" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin boundary_host_catalog_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new HostCatalogPlugin(Construct Scope, string Id, HostCatalogPluginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig">HostCatalogPluginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig">HostCatalogPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetAttributesJson">ResetAttributesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalForceUpdate">ResetInternalForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalHmacUsedForSecretsConfigHmac">ResetInternalHmacUsedForSecretsConfigHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalSecretsConfigHmac">ResetInternalSecretsConfigHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginId">ResetPluginId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsHmac">ResetSecretsHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsJson">ResetSecretsJson</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAttributesJson` <a name="ResetAttributesJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetAttributesJson"></a>

```csharp
private void ResetAttributesJson()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInternalForceUpdate` <a name="ResetInternalForceUpdate" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalForceUpdate"></a>

```csharp
private void ResetInternalForceUpdate()
```

##### `ResetInternalHmacUsedForSecretsConfigHmac` <a name="ResetInternalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalHmacUsedForSecretsConfigHmac"></a>

```csharp
private void ResetInternalHmacUsedForSecretsConfigHmac()
```

##### `ResetInternalSecretsConfigHmac` <a name="ResetInternalSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalSecretsConfigHmac"></a>

```csharp
private void ResetInternalSecretsConfigHmac()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPluginId` <a name="ResetPluginId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginId"></a>

```csharp
private void ResetPluginId()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetSecretsHmac` <a name="ResetSecretsHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsHmac"></a>

```csharp
private void ResetSecretsHmac()
```

##### `ResetSecretsJson` <a name="ResetSecretsJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsJson"></a>

```csharp
private void ResetSecretsJson()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HostCatalogPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

HostCatalogPlugin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

HostCatalogPlugin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

HostCatalogPlugin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

HostCatalogPlugin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HostCatalogPlugin resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HostCatalogPlugin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HostCatalogPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HostCatalogPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJsonInput">AttributesJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdateInput">InternalForceUpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmacInput">InternalHmacUsedForSecretsConfigHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmacInput">InternalSecretsConfigHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginIdInput">PluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmacInput">SecretsHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJsonInput">SecretsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJson">AttributesJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdate">InternalForceUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmac">InternalHmacUsedForSecretsConfigHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmac">InternalSecretsConfigHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginId">PluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmac">SecretsHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJson">SecretsJson</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AttributesJsonInput`<sup>Optional</sup> <a name="AttributesJsonInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJsonInput"></a>

```csharp
public string AttributesJsonInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InternalForceUpdateInput`<sup>Optional</sup> <a name="InternalForceUpdateInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdateInput"></a>

```csharp
public string InternalForceUpdateInput { get; }
```

- *Type:* string

---

##### `InternalHmacUsedForSecretsConfigHmacInput`<sup>Optional</sup> <a name="InternalHmacUsedForSecretsConfigHmacInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmacInput"></a>

```csharp
public string InternalHmacUsedForSecretsConfigHmacInput { get; }
```

- *Type:* string

---

##### `InternalSecretsConfigHmacInput`<sup>Optional</sup> <a name="InternalSecretsConfigHmacInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmacInput"></a>

```csharp
public string InternalSecretsConfigHmacInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PluginIdInput`<sup>Optional</sup> <a name="PluginIdInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginIdInput"></a>

```csharp
public string PluginIdInput { get; }
```

- *Type:* string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `SecretsHmacInput`<sup>Optional</sup> <a name="SecretsHmacInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmacInput"></a>

```csharp
public string SecretsHmacInput { get; }
```

- *Type:* string

---

##### `SecretsJsonInput`<sup>Optional</sup> <a name="SecretsJsonInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJsonInput"></a>

```csharp
public string SecretsJsonInput { get; }
```

- *Type:* string

---

##### `AttributesJson`<sup>Required</sup> <a name="AttributesJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJson"></a>

```csharp
public string AttributesJson { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalForceUpdate`<sup>Required</sup> <a name="InternalForceUpdate" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdate"></a>

```csharp
public string InternalForceUpdate { get; }
```

- *Type:* string

---

##### `InternalHmacUsedForSecretsConfigHmac`<sup>Required</sup> <a name="InternalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmac"></a>

```csharp
public string InternalHmacUsedForSecretsConfigHmac { get; }
```

- *Type:* string

---

##### `InternalSecretsConfigHmac`<sup>Required</sup> <a name="InternalSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmac"></a>

```csharp
public string InternalSecretsConfigHmac { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginId"></a>

```csharp
public string PluginId { get; }
```

- *Type:* string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `SecretsHmac`<sup>Required</sup> <a name="SecretsHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmac"></a>

```csharp
public string SecretsHmac { get; }
```

- *Type:* string

---

##### `SecretsJson`<sup>Required</sup> <a name="SecretsJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJson"></a>

```csharp
public string SecretsJson { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostCatalogPluginConfig <a name="HostCatalogPluginConfig" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new HostCatalogPluginConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ScopeId,
    string AttributesJson = null,
    string Description = null,
    string InternalForceUpdate = null,
    string InternalHmacUsedForSecretsConfigHmac = null,
    string InternalSecretsConfigHmac = null,
    string Name = null,
    string PluginId = null,
    string PluginName = null,
    string SecretsHmac = null,
    string SecretsJson = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | The scope ID in which the resource is created. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.attributesJson">AttributesJson</a></code> | <code>string</code> | The attributes for the host catalog. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.description">Description</a></code> | <code>string</code> | The host catalog description. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalForceUpdate">InternalForceUpdate</a></code> | <code>string</code> | Internal only. Used to force update so that we can always check the value of secrets. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalHmacUsedForSecretsConfigHmac">InternalHmacUsedForSecretsConfigHmac</a></code> | <code>string</code> | Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalSecretsConfigHmac">InternalSecretsConfigHmac</a></code> | <code>string</code> | Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.name">Name</a></code> | <code>string</code> | The host catalog name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginId">PluginId</a></code> | <code>string</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginName">PluginName</a></code> | <code>string</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsHmac">SecretsHmac</a></code> | <code>string</code> | The HMAC'd secrets value returned from the server. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsJson">SecretsJson</a></code> | <code>string</code> | The secrets for the host catalog. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

The scope ID in which the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#scope_id HostCatalogPlugin#scope_id}

---

##### `AttributesJson`<sup>Optional</sup> <a name="AttributesJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.attributesJson"></a>

```csharp
public string AttributesJson { get; set; }
```

- *Type:* string

The attributes for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#attributes_json HostCatalogPlugin#attributes_json}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The host catalog description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#description HostCatalogPlugin#description}

---

##### `InternalForceUpdate`<sup>Optional</sup> <a name="InternalForceUpdate" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalForceUpdate"></a>

```csharp
public string InternalForceUpdate { get; set; }
```

- *Type:* string

Internal only. Used to force update so that we can always check the value of secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#internal_force_update HostCatalogPlugin#internal_force_update}

---

##### `InternalHmacUsedForSecretsConfigHmac`<sup>Optional</sup> <a name="InternalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalHmacUsedForSecretsConfigHmac"></a>

```csharp
public string InternalHmacUsedForSecretsConfigHmac { get; set; }
```

- *Type:* string

Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#internal_hmac_used_for_secrets_config_hmac HostCatalogPlugin#internal_hmac_used_for_secrets_config_hmac}

---

##### `InternalSecretsConfigHmac`<sup>Optional</sup> <a name="InternalSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalSecretsConfigHmac"></a>

```csharp
public string InternalSecretsConfigHmac { get; set; }
```

- *Type:* string

Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#internal_secrets_config_hmac HostCatalogPlugin#internal_secrets_config_hmac}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The host catalog name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#name HostCatalogPlugin#name}

---

##### `PluginId`<sup>Optional</sup> <a name="PluginId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginId"></a>

```csharp
public string PluginId { get; set; }
```

- *Type:* string

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#plugin_id HostCatalogPlugin#plugin_id}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#plugin_name HostCatalogPlugin#plugin_name}

---

##### `SecretsHmac`<sup>Optional</sup> <a name="SecretsHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsHmac"></a>

```csharp
public string SecretsHmac { get; set; }
```

- *Type:* string

The HMAC'd secrets value returned from the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#secrets_hmac HostCatalogPlugin#secrets_hmac}

---

##### `SecretsJson`<sup>Optional</sup> <a name="SecretsJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsJson"></a>

```csharp
public string SecretsJson { get; set; }
```

- *Type:* string

The secrets for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the host catalog; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#secrets_json HostCatalogPlugin#secrets_json}

---



