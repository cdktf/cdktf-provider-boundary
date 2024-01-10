# `target` Submodule <a name="`target` Submodule" id="@cdktf/provider-boundary.target"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Target <a name="Target" id="@cdktf/provider-boundary.target.Target"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target boundary_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.target.Target.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new Target(Construct Scope, string Id, TargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.target.TargetConfig">TargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.target.TargetConfig">TargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.target.Target.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.target.Target.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.target.Target.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.target.Target.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.target.Target.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetBrokeredCredentialSourceIds">ResetBrokeredCredentialSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDefaultClientPort">ResetDefaultClientPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDefaultPort">ResetDefaultPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetEgressWorkerFilter">ResetEgressWorkerFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetEnableSessionRecording">ResetEnableSessionRecording</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetHostSourceIds">ResetHostSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetIngressWorkerFilter">ResetIngressWorkerFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetInjectedApplicationCredentialSourceIds">ResetInjectedApplicationCredentialSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetSessionConnectionLimit">ResetSessionConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetSessionMaxSeconds">ResetSessionMaxSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetStorageBucketId">ResetStorageBucketId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetWorkerFilter">ResetWorkerFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.target.Target.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.target.Target.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.target.Target.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.target.Target.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.target.Target.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.target.Target.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.target.Target.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-boundary.target.Target.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.target.Target.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.target.Target.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.target.Target.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.target.Target.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.target.Target.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.target.Target.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.target.Target.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.target.Target.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.target.Target.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.target.Target.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.target.Target.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.target.Target.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.target.Target.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.target.Target.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.target.Target.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.target.Target.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.target.Target.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.target.Target.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-boundary.target.Target.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.target.Target.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.target.Target.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.target.Target.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.target.Target.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.target.Target.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-boundary.target.Target.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.target.Target.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.target.Target.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.target.Target.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-boundary.target.Target.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-boundary.target.Target.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.target.Target.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-boundary.target.Target.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetBrokeredCredentialSourceIds` <a name="ResetBrokeredCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.resetBrokeredCredentialSourceIds"></a>

```csharp
private void ResetBrokeredCredentialSourceIds()
```

##### `ResetDefaultClientPort` <a name="ResetDefaultClientPort" id="@cdktf/provider-boundary.target.Target.resetDefaultClientPort"></a>

```csharp
private void ResetDefaultClientPort()
```

##### `ResetDefaultPort` <a name="ResetDefaultPort" id="@cdktf/provider-boundary.target.Target.resetDefaultPort"></a>

```csharp
private void ResetDefaultPort()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.target.Target.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEgressWorkerFilter` <a name="ResetEgressWorkerFilter" id="@cdktf/provider-boundary.target.Target.resetEgressWorkerFilter"></a>

```csharp
private void ResetEgressWorkerFilter()
```

##### `ResetEnableSessionRecording` <a name="ResetEnableSessionRecording" id="@cdktf/provider-boundary.target.Target.resetEnableSessionRecording"></a>

```csharp
private void ResetEnableSessionRecording()
```

##### `ResetHostSourceIds` <a name="ResetHostSourceIds" id="@cdktf/provider-boundary.target.Target.resetHostSourceIds"></a>

```csharp
private void ResetHostSourceIds()
```

##### `ResetIngressWorkerFilter` <a name="ResetIngressWorkerFilter" id="@cdktf/provider-boundary.target.Target.resetIngressWorkerFilter"></a>

```csharp
private void ResetIngressWorkerFilter()
```

##### `ResetInjectedApplicationCredentialSourceIds` <a name="ResetInjectedApplicationCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.resetInjectedApplicationCredentialSourceIds"></a>

```csharp
private void ResetInjectedApplicationCredentialSourceIds()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.target.Target.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSessionConnectionLimit` <a name="ResetSessionConnectionLimit" id="@cdktf/provider-boundary.target.Target.resetSessionConnectionLimit"></a>

```csharp
private void ResetSessionConnectionLimit()
```

##### `ResetSessionMaxSeconds` <a name="ResetSessionMaxSeconds" id="@cdktf/provider-boundary.target.Target.resetSessionMaxSeconds"></a>

```csharp
private void ResetSessionMaxSeconds()
```

##### `ResetStorageBucketId` <a name="ResetStorageBucketId" id="@cdktf/provider-boundary.target.Target.resetStorageBucketId"></a>

```csharp
private void ResetStorageBucketId()
```

##### `ResetWorkerFilter` <a name="ResetWorkerFilter" id="@cdktf/provider-boundary.target.Target.resetWorkerFilter"></a>

```csharp
private void ResetWorkerFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Target resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.target.Target.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

Target.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.target.Target.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.target.Target.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

Target.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.target.Target.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.target.Target.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

Target.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.target.Target.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.target.Target.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

Target.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Target resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Target to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Target that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Target to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIdsInput">BrokeredCredentialSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultClientPortInput">DefaultClientPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultPortInput">DefaultPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.egressWorkerFilterInput">EgressWorkerFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.enableSessionRecordingInput">EnableSessionRecordingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.hostSourceIdsInput">HostSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.ingressWorkerFilterInput">IngressWorkerFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIdsInput">InjectedApplicationCredentialSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionConnectionLimitInput">SessionConnectionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionMaxSecondsInput">SessionMaxSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.storageBucketIdInput">StorageBucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.workerFilterInput">WorkerFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIds">BrokeredCredentialSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultClientPort">DefaultClientPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultPort">DefaultPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.egressWorkerFilter">EgressWorkerFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.enableSessionRecording">EnableSessionRecording</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.hostSourceIds">HostSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.ingressWorkerFilter">IngressWorkerFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIds">InjectedApplicationCredentialSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionConnectionLimit">SessionConnectionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionMaxSeconds">SessionMaxSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.storageBucketId">StorageBucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.workerFilter">WorkerFilter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.target.Target.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.target.Target.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.target.Target.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.target.Target.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.target.Target.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.target.Target.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.target.Target.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.target.Target.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.target.Target.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.target.Target.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.target.Target.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.target.Target.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.target.Target.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.target.Target.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.target.Target.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-boundary.target.Target.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `BrokeredCredentialSourceIdsInput`<sup>Optional</sup> <a name="BrokeredCredentialSourceIdsInput" id="@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIdsInput"></a>

```csharp
public string[] BrokeredCredentialSourceIdsInput { get; }
```

- *Type:* string[]

---

##### `DefaultClientPortInput`<sup>Optional</sup> <a name="DefaultClientPortInput" id="@cdktf/provider-boundary.target.Target.property.defaultClientPortInput"></a>

```csharp
public double DefaultClientPortInput { get; }
```

- *Type:* double

---

##### `DefaultPortInput`<sup>Optional</sup> <a name="DefaultPortInput" id="@cdktf/provider-boundary.target.Target.property.defaultPortInput"></a>

```csharp
public double DefaultPortInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.target.Target.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EgressWorkerFilterInput`<sup>Optional</sup> <a name="EgressWorkerFilterInput" id="@cdktf/provider-boundary.target.Target.property.egressWorkerFilterInput"></a>

```csharp
public string EgressWorkerFilterInput { get; }
```

- *Type:* string

---

##### `EnableSessionRecordingInput`<sup>Optional</sup> <a name="EnableSessionRecordingInput" id="@cdktf/provider-boundary.target.Target.property.enableSessionRecordingInput"></a>

```csharp
public object EnableSessionRecordingInput { get; }
```

- *Type:* object

---

##### `HostSourceIdsInput`<sup>Optional</sup> <a name="HostSourceIdsInput" id="@cdktf/provider-boundary.target.Target.property.hostSourceIdsInput"></a>

```csharp
public string[] HostSourceIdsInput { get; }
```

- *Type:* string[]

---

##### `IngressWorkerFilterInput`<sup>Optional</sup> <a name="IngressWorkerFilterInput" id="@cdktf/provider-boundary.target.Target.property.ingressWorkerFilterInput"></a>

```csharp
public string IngressWorkerFilterInput { get; }
```

- *Type:* string

---

##### `InjectedApplicationCredentialSourceIdsInput`<sup>Optional</sup> <a name="InjectedApplicationCredentialSourceIdsInput" id="@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIdsInput"></a>

```csharp
public string[] InjectedApplicationCredentialSourceIdsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.target.Target.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.target.Target.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `SessionConnectionLimitInput`<sup>Optional</sup> <a name="SessionConnectionLimitInput" id="@cdktf/provider-boundary.target.Target.property.sessionConnectionLimitInput"></a>

```csharp
public double SessionConnectionLimitInput { get; }
```

- *Type:* double

---

##### `SessionMaxSecondsInput`<sup>Optional</sup> <a name="SessionMaxSecondsInput" id="@cdktf/provider-boundary.target.Target.property.sessionMaxSecondsInput"></a>

```csharp
public double SessionMaxSecondsInput { get; }
```

- *Type:* double

---

##### `StorageBucketIdInput`<sup>Optional</sup> <a name="StorageBucketIdInput" id="@cdktf/provider-boundary.target.Target.property.storageBucketIdInput"></a>

```csharp
public string StorageBucketIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-boundary.target.Target.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WorkerFilterInput`<sup>Optional</sup> <a name="WorkerFilterInput" id="@cdktf/provider-boundary.target.Target.property.workerFilterInput"></a>

```csharp
public string WorkerFilterInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-boundary.target.Target.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `BrokeredCredentialSourceIds`<sup>Required</sup> <a name="BrokeredCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIds"></a>

```csharp
public string[] BrokeredCredentialSourceIds { get; }
```

- *Type:* string[]

---

##### `DefaultClientPort`<sup>Required</sup> <a name="DefaultClientPort" id="@cdktf/provider-boundary.target.Target.property.defaultClientPort"></a>

```csharp
public double DefaultClientPort { get; }
```

- *Type:* double

---

##### `DefaultPort`<sup>Required</sup> <a name="DefaultPort" id="@cdktf/provider-boundary.target.Target.property.defaultPort"></a>

```csharp
public double DefaultPort { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.target.Target.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EgressWorkerFilter`<sup>Required</sup> <a name="EgressWorkerFilter" id="@cdktf/provider-boundary.target.Target.property.egressWorkerFilter"></a>

```csharp
public string EgressWorkerFilter { get; }
```

- *Type:* string

---

##### `EnableSessionRecording`<sup>Required</sup> <a name="EnableSessionRecording" id="@cdktf/provider-boundary.target.Target.property.enableSessionRecording"></a>

```csharp
public object EnableSessionRecording { get; }
```

- *Type:* object

---

##### `HostSourceIds`<sup>Required</sup> <a name="HostSourceIds" id="@cdktf/provider-boundary.target.Target.property.hostSourceIds"></a>

```csharp
public string[] HostSourceIds { get; }
```

- *Type:* string[]

---

##### `IngressWorkerFilter`<sup>Required</sup> <a name="IngressWorkerFilter" id="@cdktf/provider-boundary.target.Target.property.ingressWorkerFilter"></a>

```csharp
public string IngressWorkerFilter { get; }
```

- *Type:* string

---

##### `InjectedApplicationCredentialSourceIds`<sup>Required</sup> <a name="InjectedApplicationCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIds"></a>

```csharp
public string[] InjectedApplicationCredentialSourceIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.target.Target.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.target.Target.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `SessionConnectionLimit`<sup>Required</sup> <a name="SessionConnectionLimit" id="@cdktf/provider-boundary.target.Target.property.sessionConnectionLimit"></a>

```csharp
public double SessionConnectionLimit { get; }
```

- *Type:* double

---

##### `SessionMaxSeconds`<sup>Required</sup> <a name="SessionMaxSeconds" id="@cdktf/provider-boundary.target.Target.property.sessionMaxSeconds"></a>

```csharp
public double SessionMaxSeconds { get; }
```

- *Type:* double

---

##### `StorageBucketId`<sup>Required</sup> <a name="StorageBucketId" id="@cdktf/provider-boundary.target.Target.property.storageBucketId"></a>

```csharp
public string StorageBucketId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.target.Target.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WorkerFilter`<sup>Required</sup> <a name="WorkerFilter" id="@cdktf/provider-boundary.target.Target.property.workerFilter"></a>

```csharp
public string WorkerFilter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.target.Target.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TargetConfig <a name="TargetConfig" id="@cdktf/provider-boundary.target.TargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.target.TargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new TargetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ScopeId,
    string Type,
    string Address = null,
    string[] BrokeredCredentialSourceIds = null,
    double DefaultClientPort = null,
    double DefaultPort = null,
    string Description = null,
    string EgressWorkerFilter = null,
    object EnableSessionRecording = null,
    string[] HostSourceIds = null,
    string IngressWorkerFilter = null,
    string[] InjectedApplicationCredentialSourceIds = null,
    string Name = null,
    double SessionConnectionLimit = null,
    double SessionMaxSeconds = null,
    string StorageBucketId = null,
    string WorkerFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.type">Type</a></code> | <code>string</code> | The target resource type. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.address">Address</a></code> | <code>string</code> | Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.brokeredCredentialSourceIds">BrokeredCredentialSourceIds</a></code> | <code>string[]</code> | A list of brokered credential source ID's. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.defaultClientPort">DefaultClientPort</a></code> | <code>double</code> | The default client port for this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.defaultPort">DefaultPort</a></code> | <code>double</code> | The default port for this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.description">Description</a></code> | <code>string</code> | The target description. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.egressWorkerFilter">EgressWorkerFilter</a></code> | <code>string</code> | Boolean expression to filter the workers used to access this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.enableSessionRecording">EnableSessionRecording</a></code> | <code>object</code> | HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.hostSourceIds">HostSourceIds</a></code> | <code>string[]</code> | A list of host source ID's. Cannot be used alongside address. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.ingressWorkerFilter">IngressWorkerFilter</a></code> | <code>string</code> | HCP Only. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.injectedApplicationCredentialSourceIds">InjectedApplicationCredentialSourceIds</a></code> | <code>string[]</code> | A list of injected application credential source ID's. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.name">Name</a></code> | <code>string</code> | The target name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.sessionConnectionLimit">SessionConnectionLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#session_connection_limit Target#session_connection_limit}. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.sessionMaxSeconds">SessionMaxSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#session_max_seconds Target#session_max_seconds}. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.storageBucketId">StorageBucketId</a></code> | <code>string</code> | HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.workerFilter">WorkerFilter</a></code> | <code>string</code> | Boolean expression to filter the workers for this target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.target.TargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.target.TargetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.target.TargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.target.TargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.target.TargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.target.TargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.target.TargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.target.TargetConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#scope_id Target#scope_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.target.TargetConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The target resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#type Target#type}

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-boundary.target.TargetConfig.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#address Target#address}

---

##### `BrokeredCredentialSourceIds`<sup>Optional</sup> <a name="BrokeredCredentialSourceIds" id="@cdktf/provider-boundary.target.TargetConfig.property.brokeredCredentialSourceIds"></a>

```csharp
public string[] BrokeredCredentialSourceIds { get; set; }
```

- *Type:* string[]

A list of brokered credential source ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#brokered_credential_source_ids Target#brokered_credential_source_ids}

---

##### `DefaultClientPort`<sup>Optional</sup> <a name="DefaultClientPort" id="@cdktf/provider-boundary.target.TargetConfig.property.defaultClientPort"></a>

```csharp
public double DefaultClientPort { get; set; }
```

- *Type:* double

The default client port for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#default_client_port Target#default_client_port}

---

##### `DefaultPort`<sup>Optional</sup> <a name="DefaultPort" id="@cdktf/provider-boundary.target.TargetConfig.property.defaultPort"></a>

```csharp
public double DefaultPort { get; set; }
```

- *Type:* double

The default port for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#default_port Target#default_port}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.target.TargetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The target description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#description Target#description}

---

##### `EgressWorkerFilter`<sup>Optional</sup> <a name="EgressWorkerFilter" id="@cdktf/provider-boundary.target.TargetConfig.property.egressWorkerFilter"></a>

```csharp
public string EgressWorkerFilter { get; set; }
```

- *Type:* string

Boolean expression to filter the workers used to access this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#egress_worker_filter Target#egress_worker_filter}

---

##### `EnableSessionRecording`<sup>Optional</sup> <a name="EnableSessionRecording" id="@cdktf/provider-boundary.target.TargetConfig.property.enableSessionRecording"></a>

```csharp
public object EnableSessionRecording { get; set; }
```

- *Type:* object

HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#enable_session_recording Target#enable_session_recording}

---

##### `HostSourceIds`<sup>Optional</sup> <a name="HostSourceIds" id="@cdktf/provider-boundary.target.TargetConfig.property.hostSourceIds"></a>

```csharp
public string[] HostSourceIds { get; set; }
```

- *Type:* string[]

A list of host source ID's. Cannot be used alongside address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#host_source_ids Target#host_source_ids}

---

##### `IngressWorkerFilter`<sup>Optional</sup> <a name="IngressWorkerFilter" id="@cdktf/provider-boundary.target.TargetConfig.property.ingressWorkerFilter"></a>

```csharp
public string IngressWorkerFilter { get; set; }
```

- *Type:* string

HCP Only.

Boolean expression to filter the workers a user will connect to when initiating a session against this target

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#ingress_worker_filter Target#ingress_worker_filter}

---

##### `InjectedApplicationCredentialSourceIds`<sup>Optional</sup> <a name="InjectedApplicationCredentialSourceIds" id="@cdktf/provider-boundary.target.TargetConfig.property.injectedApplicationCredentialSourceIds"></a>

```csharp
public string[] InjectedApplicationCredentialSourceIds { get; set; }
```

- *Type:* string[]

A list of injected application credential source ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#injected_application_credential_source_ids Target#injected_application_credential_source_ids}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.target.TargetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The target name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#name Target#name}

---

##### `SessionConnectionLimit`<sup>Optional</sup> <a name="SessionConnectionLimit" id="@cdktf/provider-boundary.target.TargetConfig.property.sessionConnectionLimit"></a>

```csharp
public double SessionConnectionLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#session_connection_limit Target#session_connection_limit}.

---

##### `SessionMaxSeconds`<sup>Optional</sup> <a name="SessionMaxSeconds" id="@cdktf/provider-boundary.target.TargetConfig.property.sessionMaxSeconds"></a>

```csharp
public double SessionMaxSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#session_max_seconds Target#session_max_seconds}.

---

##### `StorageBucketId`<sup>Optional</sup> <a name="StorageBucketId" id="@cdktf/provider-boundary.target.TargetConfig.property.storageBucketId"></a>

```csharp
public string StorageBucketId { get; set; }
```

- *Type:* string

HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#storage_bucket_id Target#storage_bucket_id}

---

##### `WorkerFilter`<sup>Optional</sup> <a name="WorkerFilter" id="@cdktf/provider-boundary.target.TargetConfig.property.workerFilter"></a>

```csharp
public string WorkerFilter { get; set; }
```

- *Type:* string

Boolean expression to filter the workers for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/target#worker_filter Target#worker_filter}

---



