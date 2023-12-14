# `authMethodLdap` Submodule <a name="`authMethodLdap` Submodule" id="@cdktf/provider-boundary.authMethodLdap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethodLdap <a name="AuthMethodLdap" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap boundary_auth_method_ldap}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new AuthMethodLdap(Construct Scope, string Id, AuthMethodLdapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig">AuthMethodLdapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig">AuthMethodLdapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAccountAttributeMaps">ResetAccountAttributeMaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAnonGroupSearch">ResetAnonGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindDn">ResetBindDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPassword">ResetBindPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPasswordHmac">ResetBindPasswordHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetCertificates">ResetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKey">ResetClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKeyHmac">ResetClientCertificateKeyHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDereferenceAliases">ResetDereferenceAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDiscoverDn">ResetDiscoverDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetEnableGroups">ResetEnableGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupAttr">ResetGroupAttr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupDn">ResetGroupDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupFilter">ResetGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetIsPrimaryForScope">ResetIsPrimaryForScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetMaximumPageSize">ResetMaximumPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetStartTls">ResetStartTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUpnDomain">ResetUpnDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUrls">ResetUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserAttr">ResetUserAttr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserDn">ResetUserDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserFilter">ResetUserFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUseTokenGroups">ResetUseTokenGroups</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountAttributeMaps` <a name="ResetAccountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAccountAttributeMaps"></a>

```csharp
private void ResetAccountAttributeMaps()
```

##### `ResetAnonGroupSearch` <a name="ResetAnonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAnonGroupSearch"></a>

```csharp
private void ResetAnonGroupSearch()
```

##### `ResetBindDn` <a name="ResetBindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindDn"></a>

```csharp
private void ResetBindDn()
```

##### `ResetBindPassword` <a name="ResetBindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPassword"></a>

```csharp
private void ResetBindPassword()
```

##### `ResetBindPasswordHmac` <a name="ResetBindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPasswordHmac"></a>

```csharp
private void ResetBindPasswordHmac()
```

##### `ResetCertificates` <a name="ResetCertificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetCertificates"></a>

```csharp
private void ResetCertificates()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetClientCertificateKey` <a name="ResetClientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKey"></a>

```csharp
private void ResetClientCertificateKey()
```

##### `ResetClientCertificateKeyHmac` <a name="ResetClientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKeyHmac"></a>

```csharp
private void ResetClientCertificateKeyHmac()
```

##### `ResetDereferenceAliases` <a name="ResetDereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDereferenceAliases"></a>

```csharp
private void ResetDereferenceAliases()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiscoverDn` <a name="ResetDiscoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDiscoverDn"></a>

```csharp
private void ResetDiscoverDn()
```

##### `ResetEnableGroups` <a name="ResetEnableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetEnableGroups"></a>

```csharp
private void ResetEnableGroups()
```

##### `ResetGroupAttr` <a name="ResetGroupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupAttr"></a>

```csharp
private void ResetGroupAttr()
```

##### `ResetGroupDn` <a name="ResetGroupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupDn"></a>

```csharp
private void ResetGroupDn()
```

##### `ResetGroupFilter` <a name="ResetGroupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupFilter"></a>

```csharp
private void ResetGroupFilter()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetInsecureTls"></a>

```csharp
private void ResetInsecureTls()
```

##### `ResetIsPrimaryForScope` <a name="ResetIsPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetIsPrimaryForScope"></a>

```csharp
private void ResetIsPrimaryForScope()
```

##### `ResetMaximumPageSize` <a name="ResetMaximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetMaximumPageSize"></a>

```csharp
private void ResetMaximumPageSize()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStartTls` <a name="ResetStartTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetStartTls"></a>

```csharp
private void ResetStartTls()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUpnDomain` <a name="ResetUpnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUpnDomain"></a>

```csharp
private void ResetUpnDomain()
```

##### `ResetUrls` <a name="ResetUrls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUrls"></a>

```csharp
private void ResetUrls()
```

##### `ResetUserAttr` <a name="ResetUserAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserAttr"></a>

```csharp
private void ResetUserAttr()
```

##### `ResetUserDn` <a name="ResetUserDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserDn"></a>

```csharp
private void ResetUserDn()
```

##### `ResetUserFilter` <a name="ResetUserFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserFilter"></a>

```csharp
private void ResetUserFilter()
```

##### `ResetUseTokenGroups` <a name="ResetUseTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUseTokenGroups"></a>

```csharp
private void ResetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AuthMethodLdap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AuthMethodLdap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AuthMethodLdap.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AuthMethodLdap.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthMethodLdap to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthMethodLdap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethodLdap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMapsInput">AccountAttributeMapsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearchInput">AnonGroupSearchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDnInput">BindDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmacInput">BindPasswordHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordInput">BindPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificatesInput">CertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmacInput">ClientCertificateKeyHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyInput">ClientCertificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliasesInput">DereferenceAliasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDnInput">DiscoverDnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroupsInput">EnableGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttrInput">GroupAttrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDnInput">GroupDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilterInput">GroupFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScopeInput">IsPrimaryForScopeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSizeInput">MaximumPageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTlsInput">StartTlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomainInput">UpnDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urlsInput">UrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttrInput">UserAttrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDnInput">UserDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilterInput">UserFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroupsInput">UseTokenGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMaps">AccountAttributeMaps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearch">AnonGroupSearch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDn">BindDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPassword">BindPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmac">BindPasswordHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificates">Certificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKey">ClientCertificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmac">ClientCertificateKeyHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliases">DereferenceAliases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDn">DiscoverDn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroups">EnableGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttr">GroupAttr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDn">GroupDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilter">GroupFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTls">InsecureTls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScope">IsPrimaryForScope</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSize">MaximumPageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTls">StartTls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomain">UpnDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urls">Urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttr">UserAttr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDn">UserDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilter">UserFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroups">UseTokenGroups</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountAttributeMapsInput`<sup>Optional</sup> <a name="AccountAttributeMapsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMapsInput"></a>

```csharp
public string[] AccountAttributeMapsInput { get; }
```

- *Type:* string[]

---

##### `AnonGroupSearchInput`<sup>Optional</sup> <a name="AnonGroupSearchInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearchInput"></a>

```csharp
public object AnonGroupSearchInput { get; }
```

- *Type:* object

---

##### `BindDnInput`<sup>Optional</sup> <a name="BindDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDnInput"></a>

```csharp
public string BindDnInput { get; }
```

- *Type:* string

---

##### `BindPasswordHmacInput`<sup>Optional</sup> <a name="BindPasswordHmacInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmacInput"></a>

```csharp
public string BindPasswordHmacInput { get; }
```

- *Type:* string

---

##### `BindPasswordInput`<sup>Optional</sup> <a name="BindPasswordInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordInput"></a>

```csharp
public string BindPasswordInput { get; }
```

- *Type:* string

---

##### `CertificatesInput`<sup>Optional</sup> <a name="CertificatesInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificatesInput"></a>

```csharp
public string[] CertificatesInput { get; }
```

- *Type:* string[]

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `ClientCertificateKeyHmacInput`<sup>Optional</sup> <a name="ClientCertificateKeyHmacInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmacInput"></a>

```csharp
public string ClientCertificateKeyHmacInput { get; }
```

- *Type:* string

---

##### `ClientCertificateKeyInput`<sup>Optional</sup> <a name="ClientCertificateKeyInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyInput"></a>

```csharp
public string ClientCertificateKeyInput { get; }
```

- *Type:* string

---

##### `DereferenceAliasesInput`<sup>Optional</sup> <a name="DereferenceAliasesInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliasesInput"></a>

```csharp
public string DereferenceAliasesInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiscoverDnInput`<sup>Optional</sup> <a name="DiscoverDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDnInput"></a>

```csharp
public object DiscoverDnInput { get; }
```

- *Type:* object

---

##### `EnableGroupsInput`<sup>Optional</sup> <a name="EnableGroupsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroupsInput"></a>

```csharp
public object EnableGroupsInput { get; }
```

- *Type:* object

---

##### `GroupAttrInput`<sup>Optional</sup> <a name="GroupAttrInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttrInput"></a>

```csharp
public string GroupAttrInput { get; }
```

- *Type:* string

---

##### `GroupDnInput`<sup>Optional</sup> <a name="GroupDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDnInput"></a>

```csharp
public string GroupDnInput { get; }
```

- *Type:* string

---

##### `GroupFilterInput`<sup>Optional</sup> <a name="GroupFilterInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilterInput"></a>

```csharp
public string GroupFilterInput { get; }
```

- *Type:* string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTlsInput"></a>

```csharp
public object InsecureTlsInput { get; }
```

- *Type:* object

---

##### `IsPrimaryForScopeInput`<sup>Optional</sup> <a name="IsPrimaryForScopeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScopeInput"></a>

```csharp
public object IsPrimaryForScopeInput { get; }
```

- *Type:* object

---

##### `MaximumPageSizeInput`<sup>Optional</sup> <a name="MaximumPageSizeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSizeInput"></a>

```csharp
public double MaximumPageSizeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `StartTlsInput`<sup>Optional</sup> <a name="StartTlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTlsInput"></a>

```csharp
public object StartTlsInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UpnDomainInput`<sup>Optional</sup> <a name="UpnDomainInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomainInput"></a>

```csharp
public string UpnDomainInput { get; }
```

- *Type:* string

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urlsInput"></a>

```csharp
public string[] UrlsInput { get; }
```

- *Type:* string[]

---

##### `UserAttrInput`<sup>Optional</sup> <a name="UserAttrInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttrInput"></a>

```csharp
public string UserAttrInput { get; }
```

- *Type:* string

---

##### `UserDnInput`<sup>Optional</sup> <a name="UserDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDnInput"></a>

```csharp
public string UserDnInput { get; }
```

- *Type:* string

---

##### `UserFilterInput`<sup>Optional</sup> <a name="UserFilterInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilterInput"></a>

```csharp
public string UserFilterInput { get; }
```

- *Type:* string

---

##### `UseTokenGroupsInput`<sup>Optional</sup> <a name="UseTokenGroupsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroupsInput"></a>

```csharp
public object UseTokenGroupsInput { get; }
```

- *Type:* object

---

##### `AccountAttributeMaps`<sup>Required</sup> <a name="AccountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMaps"></a>

```csharp
public string[] AccountAttributeMaps { get; }
```

- *Type:* string[]

---

##### `AnonGroupSearch`<sup>Required</sup> <a name="AnonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearch"></a>

```csharp
public object AnonGroupSearch { get; }
```

- *Type:* object

---

##### `BindDn`<sup>Required</sup> <a name="BindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDn"></a>

```csharp
public string BindDn { get; }
```

- *Type:* string

---

##### `BindPassword`<sup>Required</sup> <a name="BindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPassword"></a>

```csharp
public string BindPassword { get; }
```

- *Type:* string

---

##### `BindPasswordHmac`<sup>Required</sup> <a name="BindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmac"></a>

```csharp
public string BindPasswordHmac { get; }
```

- *Type:* string

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificates"></a>

```csharp
public string[] Certificates { get; }
```

- *Type:* string[]

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `ClientCertificateKey`<sup>Required</sup> <a name="ClientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKey"></a>

```csharp
public string ClientCertificateKey { get; }
```

- *Type:* string

---

##### `ClientCertificateKeyHmac`<sup>Required</sup> <a name="ClientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmac"></a>

```csharp
public string ClientCertificateKeyHmac { get; }
```

- *Type:* string

---

##### `DereferenceAliases`<sup>Required</sup> <a name="DereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliases"></a>

```csharp
public string DereferenceAliases { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiscoverDn`<sup>Required</sup> <a name="DiscoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDn"></a>

```csharp
public object DiscoverDn { get; }
```

- *Type:* object

---

##### `EnableGroups`<sup>Required</sup> <a name="EnableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroups"></a>

```csharp
public object EnableGroups { get; }
```

- *Type:* object

---

##### `GroupAttr`<sup>Required</sup> <a name="GroupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttr"></a>

```csharp
public string GroupAttr { get; }
```

- *Type:* string

---

##### `GroupDn`<sup>Required</sup> <a name="GroupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDn"></a>

```csharp
public string GroupDn { get; }
```

- *Type:* string

---

##### `GroupFilter`<sup>Required</sup> <a name="GroupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilter"></a>

```csharp
public string GroupFilter { get; }
```

- *Type:* string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTls"></a>

```csharp
public object InsecureTls { get; }
```

- *Type:* object

---

##### `IsPrimaryForScope`<sup>Required</sup> <a name="IsPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScope"></a>

```csharp
public object IsPrimaryForScope { get; }
```

- *Type:* object

---

##### `MaximumPageSize`<sup>Required</sup> <a name="MaximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSize"></a>

```csharp
public double MaximumPageSize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `StartTls`<sup>Required</sup> <a name="StartTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTls"></a>

```csharp
public object StartTls { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpnDomain`<sup>Required</sup> <a name="UpnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomain"></a>

```csharp
public string UpnDomain { get; }
```

- *Type:* string

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urls"></a>

```csharp
public string[] Urls { get; }
```

- *Type:* string[]

---

##### `UserAttr`<sup>Required</sup> <a name="UserAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttr"></a>

```csharp
public string UserAttr { get; }
```

- *Type:* string

---

##### `UserDn`<sup>Required</sup> <a name="UserDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDn"></a>

```csharp
public string UserDn { get; }
```

- *Type:* string

---

##### `UserFilter`<sup>Required</sup> <a name="UserFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilter"></a>

```csharp
public string UserFilter { get; }
```

- *Type:* string

---

##### `UseTokenGroups`<sup>Required</sup> <a name="UseTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroups"></a>

```csharp
public object UseTokenGroups { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodLdapConfig <a name="AuthMethodLdapConfig" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new AuthMethodLdapConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ScopeId,
    string[] AccountAttributeMaps = null,
    object AnonGroupSearch = null,
    string BindDn = null,
    string BindPassword = null,
    string BindPasswordHmac = null,
    string[] Certificates = null,
    string ClientCertificate = null,
    string ClientCertificateKey = null,
    string ClientCertificateKeyHmac = null,
    string DereferenceAliases = null,
    string Description = null,
    object DiscoverDn = null,
    object EnableGroups = null,
    string GroupAttr = null,
    string GroupDn = null,
    string GroupFilter = null,
    object InsecureTls = null,
    object IsPrimaryForScope = null,
    double MaximumPageSize = null,
    string Name = null,
    object StartTls = null,
    string State = null,
    string Type = null,
    string UpnDomain = null,
    string[] Urls = null,
    string UserAttr = null,
    string UserDn = null,
    string UserFilter = null,
    object UseTokenGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.accountAttributeMaps">AccountAttributeMaps</a></code> | <code>string[]</code> | Account attribute maps fullname and email. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.anonGroupSearch">AnonGroupSearch</a></code> | <code>object</code> | Use anon bind when performing LDAP group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindDn">BindDn</a></code> | <code>string</code> | The distinguished name of entry to bind when performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPassword">BindPassword</a></code> | <code>string</code> | The password to use along with bind-dn performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPasswordHmac">BindPasswordHmac</a></code> | <code>string</code> | The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.certificates">Certificates</a></code> | <code>string[]</code> | PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKey">ClientCertificateKey</a></code> | <code>string</code> | PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKeyHmac">ClientCertificateKeyHmac</a></code> | <code>string</code> | The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dereferenceAliases">DereferenceAliases</a></code> | <code>string</code> | Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.description">Description</a></code> | <code>string</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.discoverDn">DiscoverDn</a></code> | <code>object</code> | Use anon bind to discover the bind DN of a user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.enableGroups">EnableGroups</a></code> | <code>object</code> | Find the authenticated user's groups during authentication (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupAttr">GroupAttr</a></code> | <code>string</code> | The attribute that enumerates a user's group membership from entries returned by a group search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupDn">GroupDn</a></code> | <code>string</code> | The base DN under which to perform group search. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupFilter">GroupFilter</a></code> | <code>string</code> | A go template used to construct a LDAP group search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.insecureTls">InsecureTls</a></code> | <code>object</code> | Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.isPrimaryForScope">IsPrimaryForScope</a></code> | <code>object</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.maximumPageSize">MaximumPageSize</a></code> | <code>double</code> | MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.name">Name</a></code> | <code>string</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.startTls">StartTls</a></code> | <code>object</code> | Issue StartTLS command after connecting (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.state">State</a></code> | <code>string</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.type">Type</a></code> | <code>string</code> | The type of auth method; hardcoded. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.upnDomain">UpnDomain</a></code> | <code>string</code> | The userPrincipalDomain used to construct the UPN string for the authenticating user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.urls">Urls</a></code> | <code>string[]</code> | The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userAttr">UserAttr</a></code> | <code>string</code> | The attribute on user entry matching the username passed when authenticating (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userDn">UserDn</a></code> | <code>string</code> | The base DN under which to perform user search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userFilter">UserFilter</a></code> | <code>string</code> | A go template used to construct a LDAP user search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.useTokenGroups">UseTokenGroups</a></code> | <code>object</code> | Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#scope_id AuthMethodLdap#scope_id}

---

##### `AccountAttributeMaps`<sup>Optional</sup> <a name="AccountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.accountAttributeMaps"></a>

```csharp
public string[] AccountAttributeMaps { get; set; }
```

- *Type:* string[]

Account attribute maps fullname and email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#account_attribute_maps AuthMethodLdap#account_attribute_maps}

---

##### `AnonGroupSearch`<sup>Optional</sup> <a name="AnonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.anonGroupSearch"></a>

```csharp
public object AnonGroupSearch { get; set; }
```

- *Type:* object

Use anon bind when performing LDAP group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#anon_group_search AuthMethodLdap#anon_group_search}

---

##### `BindDn`<sup>Optional</sup> <a name="BindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindDn"></a>

```csharp
public string BindDn { get; set; }
```

- *Type:* string

The distinguished name of entry to bind when performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#bind_dn AuthMethodLdap#bind_dn}

---

##### `BindPassword`<sup>Optional</sup> <a name="BindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPassword"></a>

```csharp
public string BindPassword { get; set; }
```

- *Type:* string

The password to use along with bind-dn performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#bind_password AuthMethodLdap#bind_password}

---

##### `BindPasswordHmac`<sup>Optional</sup> <a name="BindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPasswordHmac"></a>

```csharp
public string BindPasswordHmac { get; set; }
```

- *Type:* string

The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#bind_password_hmac AuthMethodLdap#bind_password_hmac}

---

##### `Certificates`<sup>Optional</sup> <a name="Certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.certificates"></a>

```csharp
public string[] Certificates { get; set; }
```

- *Type:* string[]

PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#certificates AuthMethodLdap#certificates}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#client_certificate AuthMethodLdap#client_certificate}

---

##### `ClientCertificateKey`<sup>Optional</sup> <a name="ClientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKey"></a>

```csharp
public string ClientCertificateKey { get; set; }
```

- *Type:* string

PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#client_certificate_key AuthMethodLdap#client_certificate_key}

---

##### `ClientCertificateKeyHmac`<sup>Optional</sup> <a name="ClientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKeyHmac"></a>

```csharp
public string ClientCertificateKeyHmac { get; set; }
```

- *Type:* string

The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#client_certificate_key_hmac AuthMethodLdap#client_certificate_key_hmac}

---

##### `DereferenceAliases`<sup>Optional</sup> <a name="DereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dereferenceAliases"></a>

```csharp
public string DereferenceAliases { get; set; }
```

- *Type:* string

Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#dereference_aliases AuthMethodLdap#dereference_aliases}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#description AuthMethodLdap#description}

---

##### `DiscoverDn`<sup>Optional</sup> <a name="DiscoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.discoverDn"></a>

```csharp
public object DiscoverDn { get; set; }
```

- *Type:* object

Use anon bind to discover the bind DN of a user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#discover_dn AuthMethodLdap#discover_dn}

---

##### `EnableGroups`<sup>Optional</sup> <a name="EnableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.enableGroups"></a>

```csharp
public object EnableGroups { get; set; }
```

- *Type:* object

Find the authenticated user's groups during authentication (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#enable_groups AuthMethodLdap#enable_groups}

---

##### `GroupAttr`<sup>Optional</sup> <a name="GroupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupAttr"></a>

```csharp
public string GroupAttr { get; set; }
```

- *Type:* string

The attribute that enumerates a user's group membership from entries returned by a group search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#group_attr AuthMethodLdap#group_attr}

---

##### `GroupDn`<sup>Optional</sup> <a name="GroupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupDn"></a>

```csharp
public string GroupDn { get; set; }
```

- *Type:* string

The base DN under which to perform group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#group_dn AuthMethodLdap#group_dn}

---

##### `GroupFilter`<sup>Optional</sup> <a name="GroupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupFilter"></a>

```csharp
public string GroupFilter { get; set; }
```

- *Type:* string

A go template used to construct a LDAP group search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#group_filter AuthMethodLdap#group_filter}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.insecureTls"></a>

```csharp
public object InsecureTls { get; set; }
```

- *Type:* object

Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#insecure_tls AuthMethodLdap#insecure_tls}

---

##### `IsPrimaryForScope`<sup>Optional</sup> <a name="IsPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.isPrimaryForScope"></a>

```csharp
public object IsPrimaryForScope { get; set; }
```

- *Type:* object

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the the user will be automatically created when they login using an LDAP account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#is_primary_for_scope AuthMethodLdap#is_primary_for_scope}

---

##### `MaximumPageSize`<sup>Optional</sup> <a name="MaximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.maximumPageSize"></a>

```csharp
public double MaximumPageSize { get; set; }
```

- *Type:* double

MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#maximum_page_size AuthMethodLdap#maximum_page_size}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#name AuthMethodLdap#name}

---

##### `StartTls`<sup>Optional</sup> <a name="StartTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.startTls"></a>

```csharp
public object StartTls { get; set; }
```

- *Type:* object

Issue StartTLS command after connecting (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#start_tls AuthMethodLdap#start_tls}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#state AuthMethodLdap#state}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#type AuthMethodLdap#type}

---

##### `UpnDomain`<sup>Optional</sup> <a name="UpnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.upnDomain"></a>

```csharp
public string UpnDomain { get; set; }
```

- *Type:* string

The userPrincipalDomain used to construct the UPN string for the authenticating user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#upn_domain AuthMethodLdap#upn_domain}

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.urls"></a>

```csharp
public string[] Urls { get; set; }
```

- *Type:* string[]

The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#urls AuthMethodLdap#urls}

---

##### `UserAttr`<sup>Optional</sup> <a name="UserAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userAttr"></a>

```csharp
public string UserAttr { get; set; }
```

- *Type:* string

The attribute on user entry matching the username passed when authenticating (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#user_attr AuthMethodLdap#user_attr}

---

##### `UserDn`<sup>Optional</sup> <a name="UserDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userDn"></a>

```csharp
public string UserDn { get; set; }
```

- *Type:* string

The base DN under which to perform user search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#user_dn AuthMethodLdap#user_dn}

---

##### `UserFilter`<sup>Optional</sup> <a name="UserFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userFilter"></a>

```csharp
public string UserFilter { get; set; }
```

- *Type:* string

A go template used to construct a LDAP user search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#user_filter AuthMethodLdap#user_filter}

---

##### `UseTokenGroups`<sup>Optional</sup> <a name="UseTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.useTokenGroups"></a>

```csharp
public object UseTokenGroups { get; set; }
```

- *Type:* object

Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/auth_method_ldap#use_token_groups AuthMethodLdap#use_token_groups}

---



