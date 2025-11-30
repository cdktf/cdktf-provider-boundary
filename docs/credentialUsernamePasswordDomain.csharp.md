# `credentialUsernamePasswordDomain` Submodule <a name="`credentialUsernamePasswordDomain` Submodule" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialUsernamePasswordDomain <a name="CredentialUsernamePasswordDomain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain boundary_credential_username_password_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new CredentialUsernamePasswordDomain(Construct Scope, string Id, CredentialUsernamePasswordDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig">CredentialUsernamePasswordDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig">CredentialUsernamePasswordDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialUsernamePasswordDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

CredentialUsernamePasswordDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

CredentialUsernamePasswordDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

CredentialUsernamePasswordDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

CredentialUsernamePasswordDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CredentialUsernamePasswordDomain resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CredentialUsernamePasswordDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CredentialUsernamePasswordDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CredentialUsernamePasswordDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordHmac">PasswordHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreIdInput">CredentialStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreId">CredentialStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PasswordHmac`<sup>Required</sup> <a name="PasswordHmac" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordHmac"></a>

```csharp
public string PasswordHmac { get; }
```

- *Type:* string

---

##### `CredentialStoreIdInput`<sup>Optional</sup> <a name="CredentialStoreIdInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreIdInput"></a>

```csharp
public string CredentialStoreIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `CredentialStoreId`<sup>Required</sup> <a name="CredentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreId"></a>

```csharp
public string CredentialStoreId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialUsernamePasswordDomainConfig <a name="CredentialUsernamePasswordDomainConfig" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new CredentialUsernamePasswordDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CredentialStoreId,
    string Password,
    string Description = null,
    string Domain = null,
    string Name = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.credentialStoreId">CredentialStoreId</a></code> | <code>string</code> | The credential store in which to save this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.password">Password</a></code> | <code>string</code> | The password of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.description">Description</a></code> | <code>string</code> | The description of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.domain">Domain</a></code> | <code>string</code> | The domain of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.name">Name</a></code> | <code>string</code> | The name of this username-password-domain credential. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.username">Username</a></code> | <code>string</code> | This field is required even though it is marked as optional. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CredentialStoreId`<sup>Required</sup> <a name="CredentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.credentialStoreId"></a>

```csharp
public string CredentialStoreId { get; set; }
```

- *Type:* string

The credential store in which to save this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#credential_store_id CredentialUsernamePasswordDomain#credential_store_id}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password of this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#password CredentialUsernamePasswordDomain#password}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#description CredentialUsernamePasswordDomain#description}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The domain of this username-password-domain credential.

This field is required unless provided as part of the username field instead (see username field description).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#domain CredentialUsernamePasswordDomain#domain}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this username-password-domain credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#name CredentialUsernamePasswordDomain#name}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

This field is required even though it is marked as optional.

The username of this username-password-domain credential. Can also contain a domain if provided as username@domain or domain\username

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#username CredentialUsernamePasswordDomain#username}

---



