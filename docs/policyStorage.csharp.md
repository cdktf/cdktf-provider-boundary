# `policyStorage` Submodule <a name="`policyStorage` Submodule" id="@cdktf/provider-boundary.policyStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyStorage <a name="PolicyStorage" id="@cdktf/provider-boundary.policyStorage.PolicyStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage boundary_policy_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new PolicyStorage(Construct Scope, string Id, PolicyStorageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig">PolicyStorageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig">PolicyStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterDays">ResetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterOverridable">ResetDeleteAfterOverridable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForDays">ResetRetainForDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForOverridable">ResetRetainForOverridable</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDeleteAfterDays` <a name="ResetDeleteAfterDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterDays"></a>

```csharp
private void ResetDeleteAfterDays()
```

##### `ResetDeleteAfterOverridable` <a name="ResetDeleteAfterOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterOverridable"></a>

```csharp
private void ResetDeleteAfterOverridable()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRetainForDays` <a name="ResetRetainForDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForDays"></a>

```csharp
private void ResetRetainForDays()
```

##### `ResetRetainForOverridable` <a name="ResetRetainForOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForOverridable"></a>

```csharp
private void ResetRetainForOverridable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyStorage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

PolicyStorage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

PolicyStorage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

PolicyStorage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

PolicyStorage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PolicyStorage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyStorage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PolicyStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDaysInput">DeleteAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridableInput">DeleteAfterOverridableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDaysInput">RetainForDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridableInput">RetainForOverridableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridable">DeleteAfterOverridable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDays">RetainForDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridable">RetainForOverridable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DeleteAfterDaysInput`<sup>Optional</sup> <a name="DeleteAfterDaysInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDaysInput"></a>

```csharp
public double DeleteAfterDaysInput { get; }
```

- *Type:* double

---

##### `DeleteAfterOverridableInput`<sup>Optional</sup> <a name="DeleteAfterOverridableInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridableInput"></a>

```csharp
public object DeleteAfterOverridableInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetainForDaysInput`<sup>Optional</sup> <a name="RetainForDaysInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDaysInput"></a>

```csharp
public double RetainForDaysInput { get; }
```

- *Type:* double

---

##### `RetainForOverridableInput`<sup>Optional</sup> <a name="RetainForOverridableInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridableInput"></a>

```csharp
public object RetainForOverridableInput { get; }
```

- *Type:* object

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `DeleteAfterDays`<sup>Required</sup> <a name="DeleteAfterDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDays"></a>

```csharp
public double DeleteAfterDays { get; }
```

- *Type:* double

---

##### `DeleteAfterOverridable`<sup>Required</sup> <a name="DeleteAfterOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridable"></a>

```csharp
public object DeleteAfterOverridable { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetainForDays`<sup>Required</sup> <a name="RetainForDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDays"></a>

```csharp
public double RetainForDays { get; }
```

- *Type:* double

---

##### `RetainForOverridable`<sup>Required</sup> <a name="RetainForOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridable"></a>

```csharp
public object RetainForOverridable { get; }
```

- *Type:* object

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyStorageConfig <a name="PolicyStorageConfig" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new PolicyStorageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ScopeId,
    double DeleteAfterDays = null,
    object DeleteAfterOverridable = null,
    string Description = null,
    string Name = null,
    double RetainForDays = null,
    object RetainForOverridable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | The scope for this policy. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>double</code> | The number of days after which a session recording will be automatically deleted. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterOverridable">DeleteAfterOverridable</a></code> | <code>object</code> | Whether or not the associated delete_after_days value can be overridden by org scopes. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.description">Description</a></code> | <code>string</code> | The policy description. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.name">Name</a></code> | <code>string</code> | The policy name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForDays">RetainForDays</a></code> | <code>double</code> | The number of days a session recording is required to be stored. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForOverridable">RetainForOverridable</a></code> | <code>object</code> | Whether or not the associated retain_for_days value can be overridden by org scopes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

The scope for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#scope_id PolicyStorage#scope_id}

---

##### `DeleteAfterDays`<sup>Optional</sup> <a name="DeleteAfterDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterDays"></a>

```csharp
public double DeleteAfterDays { get; set; }
```

- *Type:* double

The number of days after which a session recording will be automatically deleted.

Defaults to 0: never automatically delete. However, delete_after_days and retain_for_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#delete_after_days PolicyStorage#delete_after_days}

---

##### `DeleteAfterOverridable`<sup>Optional</sup> <a name="DeleteAfterOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterOverridable"></a>

```csharp
public object DeleteAfterOverridable { get; set; }
```

- *Type:* object

Whether or not the associated delete_after_days value can be overridden by org scopes.

Note: if the associated delete_after_days value is 0, overridable is ignored

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#delete_after_overridable PolicyStorage#delete_after_overridable}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The policy description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#description PolicyStorage#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The policy name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#name PolicyStorage#name}

---

##### `RetainForDays`<sup>Optional</sup> <a name="RetainForDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForDays"></a>

```csharp
public double RetainForDays { get; set; }
```

- *Type:* double

The number of days a session recording is required to be stored.

Defaults to 0: allow deletions at any time. However, retain_for_days and delete_after_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#retain_for_days PolicyStorage#retain_for_days}

---

##### `RetainForOverridable`<sup>Optional</sup> <a name="RetainForOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForOverridable"></a>

```csharp
public object RetainForOverridable { get; set; }
```

- *Type:* object

Whether or not the associated retain_for_days value can be overridden by org scopes.

Note: if the associated retain_for_days value is 0, overridable is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#retain_for_overridable PolicyStorage#retain_for_overridable}

---



