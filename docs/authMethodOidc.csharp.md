# `authMethodOidc` Submodule <a name="`authMethodOidc` Submodule" id="@cdktf/provider-boundary.authMethodOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethodOidc <a name="AuthMethodOidc" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc boundary_auth_method_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new AuthMethodOidc(Construct Scope, string Id, AuthMethodOidcConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig">AuthMethodOidcConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig">AuthMethodOidcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAccountClaimMaps">ResetAccountClaimMaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAllowedAudiences">ResetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetApiUrlPrefix">ResetApiUrlPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetCallbackUrl">ResetCallbackUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClaimsScopes">ResetClaimsScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecretHmac">ResetClientSecretHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDisableDiscoveredConfigValidation">ResetDisableDiscoveredConfigValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIdpCaCerts">ResetIdpCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIsPrimaryForScope">ResetIsPrimaryForScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetPrompts">ResetPrompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetSigningAlgorithms">ResetSigningAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountClaimMaps` <a name="ResetAccountClaimMaps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAccountClaimMaps"></a>

```csharp
private void ResetAccountClaimMaps()
```

##### `ResetAllowedAudiences` <a name="ResetAllowedAudiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAllowedAudiences"></a>

```csharp
private void ResetAllowedAudiences()
```

##### `ResetApiUrlPrefix` <a name="ResetApiUrlPrefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetApiUrlPrefix"></a>

```csharp
private void ResetApiUrlPrefix()
```

##### `ResetCallbackUrl` <a name="ResetCallbackUrl" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetCallbackUrl"></a>

```csharp
private void ResetCallbackUrl()
```

##### `ResetClaimsScopes` <a name="ResetClaimsScopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClaimsScopes"></a>

```csharp
private void ResetClaimsScopes()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretHmac` <a name="ResetClientSecretHmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecretHmac"></a>

```csharp
private void ResetClientSecretHmac()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableDiscoveredConfigValidation` <a name="ResetDisableDiscoveredConfigValidation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDisableDiscoveredConfigValidation"></a>

```csharp
private void ResetDisableDiscoveredConfigValidation()
```

##### `ResetIdpCaCerts` <a name="ResetIdpCaCerts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIdpCaCerts"></a>

```csharp
private void ResetIdpCaCerts()
```

##### `ResetIsPrimaryForScope` <a name="ResetIsPrimaryForScope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIsPrimaryForScope"></a>

```csharp
private void ResetIsPrimaryForScope()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPrompts` <a name="ResetPrompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetPrompts"></a>

```csharp
private void ResetPrompts()
```

##### `ResetSigningAlgorithms` <a name="ResetSigningAlgorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetSigningAlgorithms"></a>

```csharp
private void ResetSigningAlgorithms()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AuthMethodOidc resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AuthMethodOidc.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AuthMethodOidc.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AuthMethodOidc.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AuthMethodOidc.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AuthMethodOidc resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthMethodOidc to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthMethodOidc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethodOidc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMapsInput">AccountClaimMapsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiencesInput">AllowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefixInput">ApiUrlPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrlInput">CallbackUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopesInput">ClaimsScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmacInput">ClientSecretHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidationInput">DisableDiscoveredConfigValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCertsInput">IdpCaCertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScopeInput">IsPrimaryForScopeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.promptsInput">PromptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithmsInput">SigningAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMaps">AccountClaimMaps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefix">ApiUrlPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrl">CallbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopes">ClaimsScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmac">ClientSecretHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidation">DisableDiscoveredConfigValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCerts">IdpCaCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScope">IsPrimaryForScope</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.prompts">Prompts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithms">SigningAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountClaimMapsInput`<sup>Optional</sup> <a name="AccountClaimMapsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMapsInput"></a>

```csharp
public string[] AccountClaimMapsInput { get; }
```

- *Type:* string[]

---

##### `AllowedAudiencesInput`<sup>Optional</sup> <a name="AllowedAudiencesInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiencesInput"></a>

```csharp
public string[] AllowedAudiencesInput { get; }
```

- *Type:* string[]

---

##### `ApiUrlPrefixInput`<sup>Optional</sup> <a name="ApiUrlPrefixInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefixInput"></a>

```csharp
public string ApiUrlPrefixInput { get; }
```

- *Type:* string

---

##### `CallbackUrlInput`<sup>Optional</sup> <a name="CallbackUrlInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrlInput"></a>

```csharp
public string CallbackUrlInput { get; }
```

- *Type:* string

---

##### `ClaimsScopesInput`<sup>Optional</sup> <a name="ClaimsScopesInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopesInput"></a>

```csharp
public string[] ClaimsScopesInput { get; }
```

- *Type:* string[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretHmacInput`<sup>Optional</sup> <a name="ClientSecretHmacInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmacInput"></a>

```csharp
public string ClientSecretHmacInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableDiscoveredConfigValidationInput`<sup>Optional</sup> <a name="DisableDiscoveredConfigValidationInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidationInput"></a>

```csharp
public object DisableDiscoveredConfigValidationInput { get; }
```

- *Type:* object

---

##### `IdpCaCertsInput`<sup>Optional</sup> <a name="IdpCaCertsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCertsInput"></a>

```csharp
public string[] IdpCaCertsInput { get; }
```

- *Type:* string[]

---

##### `IsPrimaryForScopeInput`<sup>Optional</sup> <a name="IsPrimaryForScopeInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScopeInput"></a>

```csharp
public object IsPrimaryForScopeInput { get; }
```

- *Type:* object

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PromptsInput`<sup>Optional</sup> <a name="PromptsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.promptsInput"></a>

```csharp
public string[] PromptsInput { get; }
```

- *Type:* string[]

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `SigningAlgorithmsInput`<sup>Optional</sup> <a name="SigningAlgorithmsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithmsInput"></a>

```csharp
public string[] SigningAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountClaimMaps`<sup>Required</sup> <a name="AccountClaimMaps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMaps"></a>

```csharp
public string[] AccountClaimMaps { get; }
```

- *Type:* string[]

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; }
```

- *Type:* string[]

---

##### `ApiUrlPrefix`<sup>Required</sup> <a name="ApiUrlPrefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefix"></a>

```csharp
public string ApiUrlPrefix { get; }
```

- *Type:* string

---

##### `CallbackUrl`<sup>Required</sup> <a name="CallbackUrl" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrl"></a>

```csharp
public string CallbackUrl { get; }
```

- *Type:* string

---

##### `ClaimsScopes`<sup>Required</sup> <a name="ClaimsScopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopes"></a>

```csharp
public string[] ClaimsScopes { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretHmac`<sup>Required</sup> <a name="ClientSecretHmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmac"></a>

```csharp
public string ClientSecretHmac { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableDiscoveredConfigValidation`<sup>Required</sup> <a name="DisableDiscoveredConfigValidation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidation"></a>

```csharp
public object DisableDiscoveredConfigValidation { get; }
```

- *Type:* object

---

##### `IdpCaCerts`<sup>Required</sup> <a name="IdpCaCerts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCerts"></a>

```csharp
public string[] IdpCaCerts { get; }
```

- *Type:* string[]

---

##### `IsPrimaryForScope`<sup>Required</sup> <a name="IsPrimaryForScope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScope"></a>

```csharp
public object IsPrimaryForScope { get; }
```

- *Type:* object

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Prompts`<sup>Required</sup> <a name="Prompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.prompts"></a>

```csharp
public string[] Prompts { get; }
```

- *Type:* string[]

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `SigningAlgorithms`<sup>Required</sup> <a name="SigningAlgorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithms"></a>

```csharp
public string[] SigningAlgorithms { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodOidcConfig <a name="AuthMethodOidcConfig" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new AuthMethodOidcConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ScopeId,
    string[] AccountClaimMaps = null,
    string[] AllowedAudiences = null,
    string ApiUrlPrefix = null,
    string CallbackUrl = null,
    string[] ClaimsScopes = null,
    string ClientId = null,
    string ClientSecret = null,
    string ClientSecretHmac = null,
    string Description = null,
    object DisableDiscoveredConfigValidation = null,
    string[] IdpCaCerts = null,
    object IsPrimaryForScope = null,
    string Issuer = null,
    double MaxAge = null,
    string Name = null,
    string[] Prompts = null,
    string[] SigningAlgorithms = null,
    string State = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.accountClaimMaps">AccountClaimMaps</a></code> | <code>string[]</code> | Account claim maps for the to_claim of sub. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | Audiences for which the provider responses will be allowed. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.apiUrlPrefix">ApiUrlPrefix</a></code> | <code>string</code> | The API prefix to use when generating callback URLs for the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.callbackUrl">CallbackUrl</a></code> | <code>string</code> | The URL that should be provided to the IdP for callbacks. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.claimsScopes">ClaimsScopes</a></code> | <code>string[]</code> | Claims scopes. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client ID assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The secret key assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecretHmac">ClientSecretHmac</a></code> | <code>string</code> | The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.description">Description</a></code> | <code>string</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.disableDiscoveredConfigValidation">DisableDiscoveredConfigValidation</a></code> | <code>object</code> | Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.idpCaCerts">IdpCaCerts</a></code> | <code>string[]</code> | A list of CA certificates to trust when validating the IdP's token signatures. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.isPrimaryForScope">IsPrimaryForScope</a></code> | <code>object</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.issuer">Issuer</a></code> | <code>string</code> | The issuer corresponding to the provider, which must match the issuer field in generated tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.maxAge">MaxAge</a></code> | <code>double</code> | The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.name">Name</a></code> | <code>string</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.prompts">Prompts</a></code> | <code>string[]</code> | The prompts passed to the identity provider to determine whether to prompt the end-user for reauthentication, account selection or consent. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.signingAlgorithms">SigningAlgorithms</a></code> | <code>string[]</code> | Allowed signing algorithms for the provider's issued tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.state">State</a></code> | <code>string</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.type">Type</a></code> | <code>string</code> | The type of auth method; hardcoded. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#scope_id AuthMethodOidc#scope_id}

---

##### `AccountClaimMaps`<sup>Optional</sup> <a name="AccountClaimMaps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.accountClaimMaps"></a>

```csharp
public string[] AccountClaimMaps { get; set; }
```

- *Type:* string[]

Account claim maps for the to_claim of sub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#account_claim_maps AuthMethodOidc#account_claim_maps}

---

##### `AllowedAudiences`<sup>Optional</sup> <a name="AllowedAudiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; set; }
```

- *Type:* string[]

Audiences for which the provider responses will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#allowed_audiences AuthMethodOidc#allowed_audiences}

---

##### `ApiUrlPrefix`<sup>Optional</sup> <a name="ApiUrlPrefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.apiUrlPrefix"></a>

```csharp
public string ApiUrlPrefix { get; set; }
```

- *Type:* string

The API prefix to use when generating callback URLs for the provider.

Should be set to an address at which the provider can reach back to the controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#api_url_prefix AuthMethodOidc#api_url_prefix}

---

##### `CallbackUrl`<sup>Optional</sup> <a name="CallbackUrl" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.callbackUrl"></a>

```csharp
public string CallbackUrl { get; set; }
```

- *Type:* string

The URL that should be provided to the IdP for callbacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#callback_url AuthMethodOidc#callback_url}

---

##### `ClaimsScopes`<sup>Optional</sup> <a name="ClaimsScopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.claimsScopes"></a>

```csharp
public string[] ClaimsScopes { get; set; }
```

- *Type:* string[]

Claims scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#claims_scopes AuthMethodOidc#claims_scopes}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID assigned to this auth method from the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#client_id AuthMethodOidc#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The secret key assigned to this auth method from the provider.

Once set, only the hash will be kept and the original value can be removed from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#client_secret AuthMethodOidc#client_secret}

---

##### `ClientSecretHmac`<sup>Optional</sup> <a name="ClientSecretHmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecretHmac"></a>

```csharp
public string ClientSecretHmac { get; set; }
```

- *Type:* string

The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#client_secret_hmac AuthMethodOidc#client_secret_hmac}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#description AuthMethodOidc#description}

---

##### `DisableDiscoveredConfigValidation`<sup>Optional</sup> <a name="DisableDiscoveredConfigValidation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.disableDiscoveredConfigValidation"></a>

```csharp
public object DisableDiscoveredConfigValidation { get; set; }
```

- *Type:* object

Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here.

The validation is only performed at create or update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#disable_discovered_config_validation AuthMethodOidc#disable_discovered_config_validation}

---

##### `IdpCaCerts`<sup>Optional</sup> <a name="IdpCaCerts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.idpCaCerts"></a>

```csharp
public string[] IdpCaCerts { get; set; }
```

- *Type:* string[]

A list of CA certificates to trust when validating the IdP's token signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#idp_ca_certs AuthMethodOidc#idp_ca_certs}

---

##### `IsPrimaryForScope`<sup>Optional</sup> <a name="IsPrimaryForScope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.isPrimaryForScope"></a>

```csharp
public object IsPrimaryForScope { get; set; }
```

- *Type:* object

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the user will be automatically created when they login using an OIDC account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#is_primary_for_scope AuthMethodOidc#is_primary_for_scope}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

The issuer corresponding to the provider, which must match the issuer field in generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#issuer AuthMethodOidc#issuer}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again.

A value of 0 sets an immediate requirement for all users to reauthenticate, and an unset maxAge results in a Terraform value of -1 and the default TTL of the chosen OIDC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#max_age AuthMethodOidc#max_age}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#name AuthMethodOidc#name}

---

##### `Prompts`<sup>Optional</sup> <a name="Prompts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.prompts"></a>

```csharp
public string[] Prompts { get; set; }
```

- *Type:* string[]

The prompts passed to the identity provider to determine whether to prompt the end-user for reauthentication, account selection or consent.

Please note the values passed are case-sensitive. The valid values are: `none`, `login`, `consent` and `select_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#prompts AuthMethodOidc#prompts}

---

##### `SigningAlgorithms`<sup>Optional</sup> <a name="SigningAlgorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.signingAlgorithms"></a>

```csharp
public string[] SigningAlgorithms { get; set; }
```

- *Type:* string[]

Allowed signing algorithms for the provider's issued tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#signing_algorithms AuthMethodOidc#signing_algorithms}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#state AuthMethodOidc#state}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/auth_method_oidc#type AuthMethodOidc#type}

---



