# `credentialStoreVault` Submodule <a name="`credentialStoreVault` Submodule" id="@cdktf/provider-boundary.credentialStoreVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialStoreVault <a name="CredentialStoreVault" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault boundary_credential_store_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new CredentialStoreVault(Construct Scope, string Id, CredentialStoreVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig">CredentialStoreVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig">CredentialStoreVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetCaCert">ResetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificateKey">ResetClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsServerName">ResetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsSkipVerify">ResetTlsSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetWorkerFilter">ResetWorkerFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCaCert` <a name="ResetCaCert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetCaCert"></a>

```csharp
private void ResetCaCert()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetClientCertificateKey` <a name="ResetClientCertificateKey" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificateKey"></a>

```csharp
private void ResetClientCertificateKey()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTlsServerName` <a name="ResetTlsServerName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsServerName"></a>

```csharp
private void ResetTlsServerName()
```

##### `ResetTlsSkipVerify` <a name="ResetTlsSkipVerify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsSkipVerify"></a>

```csharp
private void ResetTlsSkipVerify()
```

##### `ResetWorkerFilter` <a name="ResetWorkerFilter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetWorkerFilter"></a>

```csharp
private void ResetWorkerFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialStoreVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

CredentialStoreVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

CredentialStoreVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

CredentialStoreVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

CredentialStoreVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CredentialStoreVault resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CredentialStoreVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CredentialStoreVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CredentialStoreVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyHmac">ClientCertificateKeyHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenHmac">TokenHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCertInput">CaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyInput">ClientCertificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerNameInput">TlsServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerifyInput">TlsSkipVerifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilterInput">WorkerFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCert">CaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKey">ClientCertificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerName">TlsServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerify">TlsSkipVerify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilter">WorkerFilter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClientCertificateKeyHmac`<sup>Required</sup> <a name="ClientCertificateKeyHmac" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyHmac"></a>

```csharp
public string ClientCertificateKeyHmac { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TokenHmac`<sup>Required</sup> <a name="TokenHmac" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenHmac"></a>

```csharp
public string TokenHmac { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `CaCertInput`<sup>Optional</sup> <a name="CaCertInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCertInput"></a>

```csharp
public string CaCertInput { get; }
```

- *Type:* string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `ClientCertificateKeyInput`<sup>Optional</sup> <a name="ClientCertificateKeyInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyInput"></a>

```csharp
public string ClientCertificateKeyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `TlsServerNameInput`<sup>Optional</sup> <a name="TlsServerNameInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerNameInput"></a>

```csharp
public string TlsServerNameInput { get; }
```

- *Type:* string

---

##### `TlsSkipVerifyInput`<sup>Optional</sup> <a name="TlsSkipVerifyInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerifyInput"></a>

```csharp
public object TlsSkipVerifyInput { get; }
```

- *Type:* object

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `WorkerFilterInput`<sup>Optional</sup> <a name="WorkerFilterInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilterInput"></a>

```csharp
public string WorkerFilterInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `CaCert`<sup>Required</sup> <a name="CaCert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCert"></a>

```csharp
public string CaCert { get; }
```

- *Type:* string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `ClientCertificateKey`<sup>Required</sup> <a name="ClientCertificateKey" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKey"></a>

```csharp
public string ClientCertificateKey { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `TlsServerName`<sup>Required</sup> <a name="TlsServerName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerName"></a>

```csharp
public string TlsServerName { get; }
```

- *Type:* string

---

##### `TlsSkipVerify`<sup>Required</sup> <a name="TlsSkipVerify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerify"></a>

```csharp
public object TlsSkipVerify { get; }
```

- *Type:* object

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `WorkerFilter`<sup>Required</sup> <a name="WorkerFilter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilter"></a>

```csharp
public string WorkerFilter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialStoreVaultConfig <a name="CredentialStoreVaultConfig" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new CredentialStoreVaultConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Address,
    string ScopeId,
    string Token,
    string CaCert = null,
    string ClientCertificate = null,
    string ClientCertificateKey = null,
    string Description = null,
    string Name = null,
    string Namespace = null,
    string TlsServerName = null,
    object TlsSkipVerify = null,
    string WorkerFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.address">Address</a></code> | <code>string</code> | The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | The scope for this credential store. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.token">Token</a></code> | <code>string</code> | A token used for accessing Vault. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.caCert">CaCert</a></code> | <code>string</code> | A PEM-encoded CA certificate to verify the Vault server's TLS certificate. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | A PEM-encoded client certificate to use for TLS authentication to the Vault server. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificateKey">ClientCertificateKey</a></code> | <code>string</code> | A PEM-encoded private key matching the client certificate from 'client_certificate'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.description">Description</a></code> | <code>string</code> | The Vault credential store description. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.name">Name</a></code> | <code>string</code> | The Vault credential store name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace within Vault to use. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsServerName">TlsServerName</a></code> | <code>string</code> | Name to use as the SNI host when connecting to Vault via TLS. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsSkipVerify">TlsSkipVerify</a></code> | <code>object</code> | Whether or not to skip TLS verification. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.workerFilter">WorkerFilter</a></code> | <code>string</code> | HCP Only. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#address CredentialStoreVault#address}

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

The scope for this credential store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#scope_id CredentialStoreVault#scope_id}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

A token used for accessing Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#token CredentialStoreVault#token}

---

##### `CaCert`<sup>Optional</sup> <a name="CaCert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.caCert"></a>

```csharp
public string CaCert { get; set; }
```

- *Type:* string

A PEM-encoded CA certificate to verify the Vault server's TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#ca_cert CredentialStoreVault#ca_cert}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

A PEM-encoded client certificate to use for TLS authentication to the Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#client_certificate CredentialStoreVault#client_certificate}

---

##### `ClientCertificateKey`<sup>Optional</sup> <a name="ClientCertificateKey" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificateKey"></a>

```csharp
public string ClientCertificateKey { get; set; }
```

- *Type:* string

A PEM-encoded private key matching the client certificate from 'client_certificate'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#client_certificate_key CredentialStoreVault#client_certificate_key}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The Vault credential store description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#description CredentialStoreVault#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The Vault credential store name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#name CredentialStoreVault#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace within Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#namespace CredentialStoreVault#namespace}

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsServerName"></a>

```csharp
public string TlsServerName { get; set; }
```

- *Type:* string

Name to use as the SNI host when connecting to Vault via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#tls_server_name CredentialStoreVault#tls_server_name}

---

##### `TlsSkipVerify`<sup>Optional</sup> <a name="TlsSkipVerify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsSkipVerify"></a>

```csharp
public object TlsSkipVerify { get; set; }
```

- *Type:* object

Whether or not to skip TLS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#tls_skip_verify CredentialStoreVault#tls_skip_verify}

---

##### `WorkerFilter`<sup>Optional</sup> <a name="WorkerFilter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.workerFilter"></a>

```csharp
public string WorkerFilter { get; set; }
```

- *Type:* string

HCP Only.

A filter used to control which PKI workers can handle Vault requests. This allows the use of private Vault instances with Boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/credential_store_vault#worker_filter CredentialStoreVault#worker_filter}

---



