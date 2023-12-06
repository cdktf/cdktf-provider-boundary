# `authMethodLdap` Submodule <a name="`authMethodLdap` Submodule" id="@cdktf/provider-boundary.authMethodLdap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethodLdap <a name="AuthMethodLdap" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap boundary_auth_method_ldap}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/authmethodldap"

authmethodldap.NewAuthMethodLdap(scope Construct, id *string, config AuthMethodLdapConfig) AuthMethodLdap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig">AuthMethodLdapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountAttributeMaps` <a name="ResetAccountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAccountAttributeMaps"></a>

```go
func ResetAccountAttributeMaps()
```

##### `ResetAnonGroupSearch` <a name="ResetAnonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAnonGroupSearch"></a>

```go
func ResetAnonGroupSearch()
```

##### `ResetBindDn` <a name="ResetBindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindDn"></a>

```go
func ResetBindDn()
```

##### `ResetBindPassword` <a name="ResetBindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPassword"></a>

```go
func ResetBindPassword()
```

##### `ResetBindPasswordHmac` <a name="ResetBindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPasswordHmac"></a>

```go
func ResetBindPasswordHmac()
```

##### `ResetCertificates` <a name="ResetCertificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetCertificates"></a>

```go
func ResetCertificates()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientCertificateKey` <a name="ResetClientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKey"></a>

```go
func ResetClientCertificateKey()
```

##### `ResetClientCertificateKeyHmac` <a name="ResetClientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKeyHmac"></a>

```go
func ResetClientCertificateKeyHmac()
```

##### `ResetDereferenceAliases` <a name="ResetDereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDereferenceAliases"></a>

```go
func ResetDereferenceAliases()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDiscoverDn` <a name="ResetDiscoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDiscoverDn"></a>

```go
func ResetDiscoverDn()
```

##### `ResetEnableGroups` <a name="ResetEnableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetEnableGroups"></a>

```go
func ResetEnableGroups()
```

##### `ResetGroupAttr` <a name="ResetGroupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupAttr"></a>

```go
func ResetGroupAttr()
```

##### `ResetGroupDn` <a name="ResetGroupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupDn"></a>

```go
func ResetGroupDn()
```

##### `ResetGroupFilter` <a name="ResetGroupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupFilter"></a>

```go
func ResetGroupFilter()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetInsecureTls"></a>

```go
func ResetInsecureTls()
```

##### `ResetIsPrimaryForScope` <a name="ResetIsPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetIsPrimaryForScope"></a>

```go
func ResetIsPrimaryForScope()
```

##### `ResetMaximumPageSize` <a name="ResetMaximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetMaximumPageSize"></a>

```go
func ResetMaximumPageSize()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetName"></a>

```go
func ResetName()
```

##### `ResetStartTls` <a name="ResetStartTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetStartTls"></a>

```go
func ResetStartTls()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetState"></a>

```go
func ResetState()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetType"></a>

```go
func ResetType()
```

##### `ResetUpnDomain` <a name="ResetUpnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUpnDomain"></a>

```go
func ResetUpnDomain()
```

##### `ResetUrls` <a name="ResetUrls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUrls"></a>

```go
func ResetUrls()
```

##### `ResetUserAttr` <a name="ResetUserAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserAttr"></a>

```go
func ResetUserAttr()
```

##### `ResetUserDn` <a name="ResetUserDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserDn"></a>

```go
func ResetUserDn()
```

##### `ResetUserFilter` <a name="ResetUserFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserFilter"></a>

```go
func ResetUserFilter()
```

##### `ResetUseTokenGroups` <a name="ResetUseTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUseTokenGroups"></a>

```go
func ResetUseTokenGroups()
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

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/authmethodldap"

authmethodldap.AuthMethodLdap_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/authmethodldap"

authmethodldap.AuthMethodLdap_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/authmethodldap"

authmethodldap.AuthMethodLdap_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/authmethodldap"

authmethodldap.AuthMethodLdap_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AuthMethodLdap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AuthMethodLdap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethodLdap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMapsInput">AccountAttributeMapsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearchInput">AnonGroupSearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDnInput">BindDnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmacInput">BindPasswordHmacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordInput">BindPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificatesInput">CertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmacInput">ClientCertificateKeyHmacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyInput">ClientCertificateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliasesInput">DereferenceAliasesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDnInput">DiscoverDnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroupsInput">EnableGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttrInput">GroupAttrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDnInput">GroupDnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilterInput">GroupFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScopeInput">IsPrimaryForScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSizeInput">MaximumPageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeIdInput">ScopeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTlsInput">StartTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomainInput">UpnDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urlsInput">UrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttrInput">UserAttrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDnInput">UserDnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilterInput">UserFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroupsInput">UseTokenGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMaps">AccountAttributeMaps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearch">AnonGroupSearch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDn">BindDn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPassword">BindPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmac">BindPasswordHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificates">Certificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKey">ClientCertificateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmac">ClientCertificateKeyHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliases">DereferenceAliases</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDn">DiscoverDn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroups">EnableGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttr">GroupAttr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDn">GroupDn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilter">GroupFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScope">IsPrimaryForScope</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSize">MaximumPageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeId">ScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTls">StartTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomain">UpnDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urls">Urls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttr">UserAttr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDn">UserDn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilter">UserFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroups">UseTokenGroups</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccountAttributeMapsInput`<sup>Optional</sup> <a name="AccountAttributeMapsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMapsInput"></a>

```go
func AccountAttributeMapsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnonGroupSearchInput`<sup>Optional</sup> <a name="AnonGroupSearchInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearchInput"></a>

```go
func AnonGroupSearchInput() interface{}
```

- *Type:* interface{}

---

##### `BindDnInput`<sup>Optional</sup> <a name="BindDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDnInput"></a>

```go
func BindDnInput() *string
```

- *Type:* *string

---

##### `BindPasswordHmacInput`<sup>Optional</sup> <a name="BindPasswordHmacInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmacInput"></a>

```go
func BindPasswordHmacInput() *string
```

- *Type:* *string

---

##### `BindPasswordInput`<sup>Optional</sup> <a name="BindPasswordInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordInput"></a>

```go
func BindPasswordInput() *string
```

- *Type:* *string

---

##### `CertificatesInput`<sup>Optional</sup> <a name="CertificatesInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificatesInput"></a>

```go
func CertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificateKeyHmacInput`<sup>Optional</sup> <a name="ClientCertificateKeyHmacInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmacInput"></a>

```go
func ClientCertificateKeyHmacInput() *string
```

- *Type:* *string

---

##### `ClientCertificateKeyInput`<sup>Optional</sup> <a name="ClientCertificateKeyInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyInput"></a>

```go
func ClientCertificateKeyInput() *string
```

- *Type:* *string

---

##### `DereferenceAliasesInput`<sup>Optional</sup> <a name="DereferenceAliasesInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliasesInput"></a>

```go
func DereferenceAliasesInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiscoverDnInput`<sup>Optional</sup> <a name="DiscoverDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDnInput"></a>

```go
func DiscoverDnInput() interface{}
```

- *Type:* interface{}

---

##### `EnableGroupsInput`<sup>Optional</sup> <a name="EnableGroupsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroupsInput"></a>

```go
func EnableGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `GroupAttrInput`<sup>Optional</sup> <a name="GroupAttrInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttrInput"></a>

```go
func GroupAttrInput() *string
```

- *Type:* *string

---

##### `GroupDnInput`<sup>Optional</sup> <a name="GroupDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDnInput"></a>

```go
func GroupDnInput() *string
```

- *Type:* *string

---

##### `GroupFilterInput`<sup>Optional</sup> <a name="GroupFilterInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilterInput"></a>

```go
func GroupFilterInput() *string
```

- *Type:* *string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTlsInput"></a>

```go
func InsecureTlsInput() interface{}
```

- *Type:* interface{}

---

##### `IsPrimaryForScopeInput`<sup>Optional</sup> <a name="IsPrimaryForScopeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScopeInput"></a>

```go
func IsPrimaryForScopeInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumPageSizeInput`<sup>Optional</sup> <a name="MaximumPageSizeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSizeInput"></a>

```go
func MaximumPageSizeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeIdInput"></a>

```go
func ScopeIdInput() *string
```

- *Type:* *string

---

##### `StartTlsInput`<sup>Optional</sup> <a name="StartTlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTlsInput"></a>

```go
func StartTlsInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UpnDomainInput`<sup>Optional</sup> <a name="UpnDomainInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomainInput"></a>

```go
func UpnDomainInput() *string
```

- *Type:* *string

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urlsInput"></a>

```go
func UrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserAttrInput`<sup>Optional</sup> <a name="UserAttrInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttrInput"></a>

```go
func UserAttrInput() *string
```

- *Type:* *string

---

##### `UserDnInput`<sup>Optional</sup> <a name="UserDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDnInput"></a>

```go
func UserDnInput() *string
```

- *Type:* *string

---

##### `UserFilterInput`<sup>Optional</sup> <a name="UserFilterInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilterInput"></a>

```go
func UserFilterInput() *string
```

- *Type:* *string

---

##### `UseTokenGroupsInput`<sup>Optional</sup> <a name="UseTokenGroupsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroupsInput"></a>

```go
func UseTokenGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountAttributeMaps`<sup>Required</sup> <a name="AccountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMaps"></a>

```go
func AccountAttributeMaps() *[]*string
```

- *Type:* *[]*string

---

##### `AnonGroupSearch`<sup>Required</sup> <a name="AnonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearch"></a>

```go
func AnonGroupSearch() interface{}
```

- *Type:* interface{}

---

##### `BindDn`<sup>Required</sup> <a name="BindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDn"></a>

```go
func BindDn() *string
```

- *Type:* *string

---

##### `BindPassword`<sup>Required</sup> <a name="BindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPassword"></a>

```go
func BindPassword() *string
```

- *Type:* *string

---

##### `BindPasswordHmac`<sup>Required</sup> <a name="BindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmac"></a>

```go
func BindPasswordHmac() *string
```

- *Type:* *string

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificates"></a>

```go
func Certificates() *[]*string
```

- *Type:* *[]*string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificateKey`<sup>Required</sup> <a name="ClientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKey"></a>

```go
func ClientCertificateKey() *string
```

- *Type:* *string

---

##### `ClientCertificateKeyHmac`<sup>Required</sup> <a name="ClientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmac"></a>

```go
func ClientCertificateKeyHmac() *string
```

- *Type:* *string

---

##### `DereferenceAliases`<sup>Required</sup> <a name="DereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliases"></a>

```go
func DereferenceAliases() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiscoverDn`<sup>Required</sup> <a name="DiscoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDn"></a>

```go
func DiscoverDn() interface{}
```

- *Type:* interface{}

---

##### `EnableGroups`<sup>Required</sup> <a name="EnableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroups"></a>

```go
func EnableGroups() interface{}
```

- *Type:* interface{}

---

##### `GroupAttr`<sup>Required</sup> <a name="GroupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttr"></a>

```go
func GroupAttr() *string
```

- *Type:* *string

---

##### `GroupDn`<sup>Required</sup> <a name="GroupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDn"></a>

```go
func GroupDn() *string
```

- *Type:* *string

---

##### `GroupFilter`<sup>Required</sup> <a name="GroupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilter"></a>

```go
func GroupFilter() *string
```

- *Type:* *string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTls"></a>

```go
func InsecureTls() interface{}
```

- *Type:* interface{}

---

##### `IsPrimaryForScope`<sup>Required</sup> <a name="IsPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScope"></a>

```go
func IsPrimaryForScope() interface{}
```

- *Type:* interface{}

---

##### `MaximumPageSize`<sup>Required</sup> <a name="MaximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSize"></a>

```go
func MaximumPageSize() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeId"></a>

```go
func ScopeId() *string
```

- *Type:* *string

---

##### `StartTls`<sup>Required</sup> <a name="StartTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTls"></a>

```go
func StartTls() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpnDomain`<sup>Required</sup> <a name="UpnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomain"></a>

```go
func UpnDomain() *string
```

- *Type:* *string

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urls"></a>

```go
func Urls() *[]*string
```

- *Type:* *[]*string

---

##### `UserAttr`<sup>Required</sup> <a name="UserAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttr"></a>

```go
func UserAttr() *string
```

- *Type:* *string

---

##### `UserDn`<sup>Required</sup> <a name="UserDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDn"></a>

```go
func UserDn() *string
```

- *Type:* *string

---

##### `UserFilter`<sup>Required</sup> <a name="UserFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilter"></a>

```go
func UserFilter() *string
```

- *Type:* *string

---

##### `UseTokenGroups`<sup>Required</sup> <a name="UseTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroups"></a>

```go
func UseTokenGroups() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodLdapConfig <a name="AuthMethodLdapConfig" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/authmethodldap"

&authmethodldap.AuthMethodLdapConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ScopeId: *string,
	AccountAttributeMaps: *[]*string,
	AnonGroupSearch: interface{},
	BindDn: *string,
	BindPassword: *string,
	BindPasswordHmac: *string,
	Certificates: *[]*string,
	ClientCertificate: *string,
	ClientCertificateKey: *string,
	ClientCertificateKeyHmac: *string,
	DereferenceAliases: *string,
	Description: *string,
	DiscoverDn: interface{},
	EnableGroups: interface{},
	GroupAttr: *string,
	GroupDn: *string,
	GroupFilter: *string,
	InsecureTls: interface{},
	IsPrimaryForScope: interface{},
	MaximumPageSize: *f64,
	Name: *string,
	StartTls: interface{},
	State: *string,
	Type: *string,
	UpnDomain: *string,
	Urls: *[]*string,
	UserAttr: *string,
	UserDn: *string,
	UserFilter: *string,
	UseTokenGroups: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.scopeId">ScopeId</a></code> | <code>*string</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.accountAttributeMaps">AccountAttributeMaps</a></code> | <code>*[]*string</code> | Account attribute maps fullname and email. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.anonGroupSearch">AnonGroupSearch</a></code> | <code>interface{}</code> | Use anon bind when performing LDAP group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindDn">BindDn</a></code> | <code>*string</code> | The distinguished name of entry to bind when performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPassword">BindPassword</a></code> | <code>*string</code> | The password to use along with bind-dn performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPasswordHmac">BindPasswordHmac</a></code> | <code>*string</code> | The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.certificates">Certificates</a></code> | <code>*[]*string</code> | PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKey">ClientCertificateKey</a></code> | <code>*string</code> | PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKeyHmac">ClientCertificateKeyHmac</a></code> | <code>*string</code> | The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dereferenceAliases">DereferenceAliases</a></code> | <code>*string</code> | Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.description">Description</a></code> | <code>*string</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.discoverDn">DiscoverDn</a></code> | <code>interface{}</code> | Use anon bind to discover the bind DN of a user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.enableGroups">EnableGroups</a></code> | <code>interface{}</code> | Find the authenticated user's groups during authentication (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupAttr">GroupAttr</a></code> | <code>*string</code> | The attribute that enumerates a user's group membership from entries returned by a group search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupDn">GroupDn</a></code> | <code>*string</code> | The base DN under which to perform group search. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupFilter">GroupFilter</a></code> | <code>*string</code> | A go template used to construct a LDAP group search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.insecureTls">InsecureTls</a></code> | <code>interface{}</code> | Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.isPrimaryForScope">IsPrimaryForScope</a></code> | <code>interface{}</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.maximumPageSize">MaximumPageSize</a></code> | <code>*f64</code> | MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.name">Name</a></code> | <code>*string</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.startTls">StartTls</a></code> | <code>interface{}</code> | Issue StartTLS command after connecting (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.state">State</a></code> | <code>*string</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.type">Type</a></code> | <code>*string</code> | The type of auth method; hardcoded. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.upnDomain">UpnDomain</a></code> | <code>*string</code> | The userPrincipalDomain used to construct the UPN string for the authenticating user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.urls">Urls</a></code> | <code>*[]*string</code> | The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userAttr">UserAttr</a></code> | <code>*string</code> | The attribute on user entry matching the username passed when authenticating (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userDn">UserDn</a></code> | <code>*string</code> | The base DN under which to perform user search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userFilter">UserFilter</a></code> | <code>*string</code> | A go template used to construct a LDAP user search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.useTokenGroups">UseTokenGroups</a></code> | <code>interface{}</code> | Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.scopeId"></a>

```go
ScopeId *string
```

- *Type:* *string

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#scope_id AuthMethodLdap#scope_id}

---

##### `AccountAttributeMaps`<sup>Optional</sup> <a name="AccountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.accountAttributeMaps"></a>

```go
AccountAttributeMaps *[]*string
```

- *Type:* *[]*string

Account attribute maps fullname and email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#account_attribute_maps AuthMethodLdap#account_attribute_maps}

---

##### `AnonGroupSearch`<sup>Optional</sup> <a name="AnonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.anonGroupSearch"></a>

```go
AnonGroupSearch interface{}
```

- *Type:* interface{}

Use anon bind when performing LDAP group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#anon_group_search AuthMethodLdap#anon_group_search}

---

##### `BindDn`<sup>Optional</sup> <a name="BindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindDn"></a>

```go
BindDn *string
```

- *Type:* *string

The distinguished name of entry to bind when performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#bind_dn AuthMethodLdap#bind_dn}

---

##### `BindPassword`<sup>Optional</sup> <a name="BindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPassword"></a>

```go
BindPassword *string
```

- *Type:* *string

The password to use along with bind-dn performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#bind_password AuthMethodLdap#bind_password}

---

##### `BindPasswordHmac`<sup>Optional</sup> <a name="BindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPasswordHmac"></a>

```go
BindPasswordHmac *string
```

- *Type:* *string

The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#bind_password_hmac AuthMethodLdap#bind_password_hmac}

---

##### `Certificates`<sup>Optional</sup> <a name="Certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.certificates"></a>

```go
Certificates *[]*string
```

- *Type:* *[]*string

PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#certificates AuthMethodLdap#certificates}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#client_certificate AuthMethodLdap#client_certificate}

---

##### `ClientCertificateKey`<sup>Optional</sup> <a name="ClientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKey"></a>

```go
ClientCertificateKey *string
```

- *Type:* *string

PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#client_certificate_key AuthMethodLdap#client_certificate_key}

---

##### `ClientCertificateKeyHmac`<sup>Optional</sup> <a name="ClientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKeyHmac"></a>

```go
ClientCertificateKeyHmac *string
```

- *Type:* *string

The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#client_certificate_key_hmac AuthMethodLdap#client_certificate_key_hmac}

---

##### `DereferenceAliases`<sup>Optional</sup> <a name="DereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dereferenceAliases"></a>

```go
DereferenceAliases *string
```

- *Type:* *string

Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#dereference_aliases AuthMethodLdap#dereference_aliases}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#description AuthMethodLdap#description}

---

##### `DiscoverDn`<sup>Optional</sup> <a name="DiscoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.discoverDn"></a>

```go
DiscoverDn interface{}
```

- *Type:* interface{}

Use anon bind to discover the bind DN of a user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#discover_dn AuthMethodLdap#discover_dn}

---

##### `EnableGroups`<sup>Optional</sup> <a name="EnableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.enableGroups"></a>

```go
EnableGroups interface{}
```

- *Type:* interface{}

Find the authenticated user's groups during authentication (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#enable_groups AuthMethodLdap#enable_groups}

---

##### `GroupAttr`<sup>Optional</sup> <a name="GroupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupAttr"></a>

```go
GroupAttr *string
```

- *Type:* *string

The attribute that enumerates a user's group membership from entries returned by a group search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#group_attr AuthMethodLdap#group_attr}

---

##### `GroupDn`<sup>Optional</sup> <a name="GroupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupDn"></a>

```go
GroupDn *string
```

- *Type:* *string

The base DN under which to perform group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#group_dn AuthMethodLdap#group_dn}

---

##### `GroupFilter`<sup>Optional</sup> <a name="GroupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupFilter"></a>

```go
GroupFilter *string
```

- *Type:* *string

A go template used to construct a LDAP group search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#group_filter AuthMethodLdap#group_filter}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.insecureTls"></a>

```go
InsecureTls interface{}
```

- *Type:* interface{}

Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#insecure_tls AuthMethodLdap#insecure_tls}

---

##### `IsPrimaryForScope`<sup>Optional</sup> <a name="IsPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.isPrimaryForScope"></a>

```go
IsPrimaryForScope interface{}
```

- *Type:* interface{}

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the the user will be automatically created when they login using an LDAP account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#is_primary_for_scope AuthMethodLdap#is_primary_for_scope}

---

##### `MaximumPageSize`<sup>Optional</sup> <a name="MaximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.maximumPageSize"></a>

```go
MaximumPageSize *f64
```

- *Type:* *f64

MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#maximum_page_size AuthMethodLdap#maximum_page_size}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#name AuthMethodLdap#name}

---

##### `StartTls`<sup>Optional</sup> <a name="StartTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.startTls"></a>

```go
StartTls interface{}
```

- *Type:* interface{}

Issue StartTLS command after connecting (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#start_tls AuthMethodLdap#start_tls}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#state AuthMethodLdap#state}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#type AuthMethodLdap#type}

---

##### `UpnDomain`<sup>Optional</sup> <a name="UpnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.upnDomain"></a>

```go
UpnDomain *string
```

- *Type:* *string

The userPrincipalDomain used to construct the UPN string for the authenticating user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#upn_domain AuthMethodLdap#upn_domain}

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.urls"></a>

```go
Urls *[]*string
```

- *Type:* *[]*string

The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#urls AuthMethodLdap#urls}

---

##### `UserAttr`<sup>Optional</sup> <a name="UserAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userAttr"></a>

```go
UserAttr *string
```

- *Type:* *string

The attribute on user entry matching the username passed when authenticating (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#user_attr AuthMethodLdap#user_attr}

---

##### `UserDn`<sup>Optional</sup> <a name="UserDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userDn"></a>

```go
UserDn *string
```

- *Type:* *string

The base DN under which to perform user search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#user_dn AuthMethodLdap#user_dn}

---

##### `UserFilter`<sup>Optional</sup> <a name="UserFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userFilter"></a>

```go
UserFilter *string
```

- *Type:* *string

A go template used to construct a LDAP user search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#user_filter AuthMethodLdap#user_filter}

---

##### `UseTokenGroups`<sup>Optional</sup> <a name="UseTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.useTokenGroups"></a>

```go
UseTokenGroups interface{}
```

- *Type:* interface{}

Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/auth_method_ldap#use_token_groups AuthMethodLdap#use_token_groups}

---



