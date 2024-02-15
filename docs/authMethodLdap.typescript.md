# `authMethodLdap` Submodule <a name="`authMethodLdap` Submodule" id="@cdktf/provider-boundary.authMethodLdap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethodLdap <a name="AuthMethodLdap" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap boundary_auth_method_ldap}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer"></a>

```typescript
import { authMethodLdap } from '@cdktf/provider-boundary'

new authMethodLdap.AuthMethodLdap(scope: Construct, id: string, config: AuthMethodLdapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig">AuthMethodLdapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig">AuthMethodLdapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAccountAttributeMaps">resetAccountAttributeMaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAnonGroupSearch">resetAnonGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindDn">resetBindDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPassword">resetBindPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPasswordHmac">resetBindPasswordHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetCertificates">resetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKey">resetClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKeyHmac">resetClientCertificateKeyHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDereferenceAliases">resetDereferenceAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDiscoverDn">resetDiscoverDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetEnableGroups">resetEnableGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupAttr">resetGroupAttr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupDn">resetGroupDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupFilter">resetGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetIsPrimaryForScope">resetIsPrimaryForScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetMaximumPageSize">resetMaximumPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetStartTls">resetStartTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUpnDomain">resetUpnDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUrls">resetUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserAttr">resetUserAttr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserDn">resetUserDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserFilter">resetUserFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUseTokenGroups">resetUseTokenGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountAttributeMaps` <a name="resetAccountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAccountAttributeMaps"></a>

```typescript
public resetAccountAttributeMaps(): void
```

##### `resetAnonGroupSearch` <a name="resetAnonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAnonGroupSearch"></a>

```typescript
public resetAnonGroupSearch(): void
```

##### `resetBindDn` <a name="resetBindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindDn"></a>

```typescript
public resetBindDn(): void
```

##### `resetBindPassword` <a name="resetBindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPassword"></a>

```typescript
public resetBindPassword(): void
```

##### `resetBindPasswordHmac` <a name="resetBindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPasswordHmac"></a>

```typescript
public resetBindPasswordHmac(): void
```

##### `resetCertificates` <a name="resetCertificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetCertificates"></a>

```typescript
public resetCertificates(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientCertificateKey` <a name="resetClientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKey"></a>

```typescript
public resetClientCertificateKey(): void
```

##### `resetClientCertificateKeyHmac` <a name="resetClientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKeyHmac"></a>

```typescript
public resetClientCertificateKeyHmac(): void
```

##### `resetDereferenceAliases` <a name="resetDereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDereferenceAliases"></a>

```typescript
public resetDereferenceAliases(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDiscoverDn` <a name="resetDiscoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDiscoverDn"></a>

```typescript
public resetDiscoverDn(): void
```

##### `resetEnableGroups` <a name="resetEnableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetEnableGroups"></a>

```typescript
public resetEnableGroups(): void
```

##### `resetGroupAttr` <a name="resetGroupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupAttr"></a>

```typescript
public resetGroupAttr(): void
```

##### `resetGroupDn` <a name="resetGroupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupDn"></a>

```typescript
public resetGroupDn(): void
```

##### `resetGroupFilter` <a name="resetGroupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupFilter"></a>

```typescript
public resetGroupFilter(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetIsPrimaryForScope` <a name="resetIsPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetIsPrimaryForScope"></a>

```typescript
public resetIsPrimaryForScope(): void
```

##### `resetMaximumPageSize` <a name="resetMaximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetMaximumPageSize"></a>

```typescript
public resetMaximumPageSize(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetName"></a>

```typescript
public resetName(): void
```

##### `resetStartTls` <a name="resetStartTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetStartTls"></a>

```typescript
public resetStartTls(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetState"></a>

```typescript
public resetState(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUpnDomain` <a name="resetUpnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUpnDomain"></a>

```typescript
public resetUpnDomain(): void
```

##### `resetUrls` <a name="resetUrls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUrls"></a>

```typescript
public resetUrls(): void
```

##### `resetUserAttr` <a name="resetUserAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserAttr"></a>

```typescript
public resetUserAttr(): void
```

##### `resetUserDn` <a name="resetUserDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserDn"></a>

```typescript
public resetUserDn(): void
```

##### `resetUserFilter` <a name="resetUserFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserFilter"></a>

```typescript
public resetUserFilter(): void
```

##### `resetUseTokenGroups` <a name="resetUseTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUseTokenGroups"></a>

```typescript
public resetUseTokenGroups(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct"></a>

```typescript
import { authMethodLdap } from '@cdktf/provider-boundary'

authMethodLdap.AuthMethodLdap.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement"></a>

```typescript
import { authMethodLdap } from '@cdktf/provider-boundary'

authMethodLdap.AuthMethodLdap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource"></a>

```typescript
import { authMethodLdap } from '@cdktf/provider-boundary'

authMethodLdap.AuthMethodLdap.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport"></a>

```typescript
import { authMethodLdap } from '@cdktf/provider-boundary'

authMethodLdap.AuthMethodLdap.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthMethodLdap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthMethodLdap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethodLdap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMapsInput">accountAttributeMapsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearchInput">anonGroupSearchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDnInput">bindDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmacInput">bindPasswordHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordInput">bindPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificatesInput">certificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmacInput">clientCertificateKeyHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyInput">clientCertificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliasesInput">dereferenceAliasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDnInput">discoverDnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroupsInput">enableGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttrInput">groupAttrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDnInput">groupDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilterInput">groupFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScopeInput">isPrimaryForScopeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSizeInput">maximumPageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTlsInput">startTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomainInput">upnDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urlsInput">urlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttrInput">userAttrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDnInput">userDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilterInput">userFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroupsInput">useTokenGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMaps">accountAttributeMaps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearch">anonGroupSearch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDn">bindDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPassword">bindPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmac">bindPasswordHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificates">certificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKey">clientCertificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmac">clientCertificateKeyHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliases">dereferenceAliases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDn">discoverDn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroups">enableGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttr">groupAttr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDn">groupDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilter">groupFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScope">isPrimaryForScope</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSize">maximumPageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTls">startTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomain">upnDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urls">urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttr">userAttr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDn">userDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilter">userFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroups">useTokenGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountAttributeMapsInput`<sup>Optional</sup> <a name="accountAttributeMapsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMapsInput"></a>

```typescript
public readonly accountAttributeMapsInput: string[];
```

- *Type:* string[]

---

##### `anonGroupSearchInput`<sup>Optional</sup> <a name="anonGroupSearchInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearchInput"></a>

```typescript
public readonly anonGroupSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bindDnInput`<sup>Optional</sup> <a name="bindDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDnInput"></a>

```typescript
public readonly bindDnInput: string;
```

- *Type:* string

---

##### `bindPasswordHmacInput`<sup>Optional</sup> <a name="bindPasswordHmacInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmacInput"></a>

```typescript
public readonly bindPasswordHmacInput: string;
```

- *Type:* string

---

##### `bindPasswordInput`<sup>Optional</sup> <a name="bindPasswordInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordInput"></a>

```typescript
public readonly bindPasswordInput: string;
```

- *Type:* string

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificatesInput"></a>

```typescript
public readonly certificatesInput: string[];
```

- *Type:* string[]

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateKeyHmacInput`<sup>Optional</sup> <a name="clientCertificateKeyHmacInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmacInput"></a>

```typescript
public readonly clientCertificateKeyHmacInput: string;
```

- *Type:* string

---

##### `clientCertificateKeyInput`<sup>Optional</sup> <a name="clientCertificateKeyInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyInput"></a>

```typescript
public readonly clientCertificateKeyInput: string;
```

- *Type:* string

---

##### `dereferenceAliasesInput`<sup>Optional</sup> <a name="dereferenceAliasesInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliasesInput"></a>

```typescript
public readonly dereferenceAliasesInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `discoverDnInput`<sup>Optional</sup> <a name="discoverDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDnInput"></a>

```typescript
public readonly discoverDnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableGroupsInput`<sup>Optional</sup> <a name="enableGroupsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroupsInput"></a>

```typescript
public readonly enableGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupAttrInput`<sup>Optional</sup> <a name="groupAttrInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttrInput"></a>

```typescript
public readonly groupAttrInput: string;
```

- *Type:* string

---

##### `groupDnInput`<sup>Optional</sup> <a name="groupDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDnInput"></a>

```typescript
public readonly groupDnInput: string;
```

- *Type:* string

---

##### `groupFilterInput`<sup>Optional</sup> <a name="groupFilterInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilterInput"></a>

```typescript
public readonly groupFilterInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrimaryForScopeInput`<sup>Optional</sup> <a name="isPrimaryForScopeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScopeInput"></a>

```typescript
public readonly isPrimaryForScopeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumPageSizeInput`<sup>Optional</sup> <a name="maximumPageSizeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSizeInput"></a>

```typescript
public readonly maximumPageSizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `startTlsInput`<sup>Optional</sup> <a name="startTlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTlsInput"></a>

```typescript
public readonly startTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `upnDomainInput`<sup>Optional</sup> <a name="upnDomainInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomainInput"></a>

```typescript
public readonly upnDomainInput: string;
```

- *Type:* string

---

##### `urlsInput`<sup>Optional</sup> <a name="urlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urlsInput"></a>

```typescript
public readonly urlsInput: string[];
```

- *Type:* string[]

---

##### `userAttrInput`<sup>Optional</sup> <a name="userAttrInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttrInput"></a>

```typescript
public readonly userAttrInput: string;
```

- *Type:* string

---

##### `userDnInput`<sup>Optional</sup> <a name="userDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDnInput"></a>

```typescript
public readonly userDnInput: string;
```

- *Type:* string

---

##### `userFilterInput`<sup>Optional</sup> <a name="userFilterInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilterInput"></a>

```typescript
public readonly userFilterInput: string;
```

- *Type:* string

---

##### `useTokenGroupsInput`<sup>Optional</sup> <a name="useTokenGroupsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroupsInput"></a>

```typescript
public readonly useTokenGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountAttributeMaps`<sup>Required</sup> <a name="accountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMaps"></a>

```typescript
public readonly accountAttributeMaps: string[];
```

- *Type:* string[]

---

##### `anonGroupSearch`<sup>Required</sup> <a name="anonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearch"></a>

```typescript
public readonly anonGroupSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bindDn`<sup>Required</sup> <a name="bindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDn"></a>

```typescript
public readonly bindDn: string;
```

- *Type:* string

---

##### `bindPassword`<sup>Required</sup> <a name="bindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPassword"></a>

```typescript
public readonly bindPassword: string;
```

- *Type:* string

---

##### `bindPasswordHmac`<sup>Required</sup> <a name="bindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmac"></a>

```typescript
public readonly bindPasswordHmac: string;
```

- *Type:* string

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificates"></a>

```typescript
public readonly certificates: string[];
```

- *Type:* string[]

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientCertificateKey`<sup>Required</sup> <a name="clientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKey"></a>

```typescript
public readonly clientCertificateKey: string;
```

- *Type:* string

---

##### `clientCertificateKeyHmac`<sup>Required</sup> <a name="clientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmac"></a>

```typescript
public readonly clientCertificateKeyHmac: string;
```

- *Type:* string

---

##### `dereferenceAliases`<sup>Required</sup> <a name="dereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliases"></a>

```typescript
public readonly dereferenceAliases: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `discoverDn`<sup>Required</sup> <a name="discoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDn"></a>

```typescript
public readonly discoverDn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableGroups`<sup>Required</sup> <a name="enableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroups"></a>

```typescript
public readonly enableGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupAttr`<sup>Required</sup> <a name="groupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttr"></a>

```typescript
public readonly groupAttr: string;
```

- *Type:* string

---

##### `groupDn`<sup>Required</sup> <a name="groupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDn"></a>

```typescript
public readonly groupDn: string;
```

- *Type:* string

---

##### `groupFilter`<sup>Required</sup> <a name="groupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilter"></a>

```typescript
public readonly groupFilter: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrimaryForScope`<sup>Required</sup> <a name="isPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScope"></a>

```typescript
public readonly isPrimaryForScope: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumPageSize`<sup>Required</sup> <a name="maximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSize"></a>

```typescript
public readonly maximumPageSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `startTls`<sup>Required</sup> <a name="startTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTls"></a>

```typescript
public readonly startTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `upnDomain`<sup>Required</sup> <a name="upnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomain"></a>

```typescript
public readonly upnDomain: string;
```

- *Type:* string

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

---

##### `userAttr`<sup>Required</sup> <a name="userAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttr"></a>

```typescript
public readonly userAttr: string;
```

- *Type:* string

---

##### `userDn`<sup>Required</sup> <a name="userDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDn"></a>

```typescript
public readonly userDn: string;
```

- *Type:* string

---

##### `userFilter`<sup>Required</sup> <a name="userFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilter"></a>

```typescript
public readonly userFilter: string;
```

- *Type:* string

---

##### `useTokenGroups`<sup>Required</sup> <a name="useTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroups"></a>

```typescript
public readonly useTokenGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodLdapConfig <a name="AuthMethodLdapConfig" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.Initializer"></a>

```typescript
import { authMethodLdap } from '@cdktf/provider-boundary'

const authMethodLdapConfig: authMethodLdap.AuthMethodLdapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.scopeId">scopeId</a></code> | <code>string</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.accountAttributeMaps">accountAttributeMaps</a></code> | <code>string[]</code> | Account attribute maps fullname and email. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.anonGroupSearch">anonGroupSearch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use anon bind when performing LDAP group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindDn">bindDn</a></code> | <code>string</code> | The distinguished name of entry to bind when performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPassword">bindPassword</a></code> | <code>string</code> | The password to use along with bind-dn performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPasswordHmac">bindPasswordHmac</a></code> | <code>string</code> | The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.certificates">certificates</a></code> | <code>string[]</code> | PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKey">clientCertificateKey</a></code> | <code>string</code> | PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKeyHmac">clientCertificateKeyHmac</a></code> | <code>string</code> | The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dereferenceAliases">dereferenceAliases</a></code> | <code>string</code> | Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.description">description</a></code> | <code>string</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.discoverDn">discoverDn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use anon bind to discover the bind DN of a user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.enableGroups">enableGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Find the authenticated user's groups during authentication (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupAttr">groupAttr</a></code> | <code>string</code> | The attribute that enumerates a user's group membership from entries returned by a group search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupDn">groupDn</a></code> | <code>string</code> | The base DN under which to perform group search. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupFilter">groupFilter</a></code> | <code>string</code> | A go template used to construct a LDAP group search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.isPrimaryForScope">isPrimaryForScope</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.maximumPageSize">maximumPageSize</a></code> | <code>number</code> | MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.name">name</a></code> | <code>string</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.startTls">startTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Issue StartTLS command after connecting (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.state">state</a></code> | <code>string</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.type">type</a></code> | <code>string</code> | The type of auth method; hardcoded. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.upnDomain">upnDomain</a></code> | <code>string</code> | The userPrincipalDomain used to construct the UPN string for the authenticating user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.urls">urls</a></code> | <code>string[]</code> | The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userAttr">userAttr</a></code> | <code>string</code> | The attribute on user entry matching the username passed when authenticating (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userDn">userDn</a></code> | <code>string</code> | The base DN under which to perform user search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userFilter">userFilter</a></code> | <code>string</code> | A go template used to construct a LDAP user search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#scope_id AuthMethodLdap#scope_id}

---

##### `accountAttributeMaps`<sup>Optional</sup> <a name="accountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.accountAttributeMaps"></a>

```typescript
public readonly accountAttributeMaps: string[];
```

- *Type:* string[]

Account attribute maps fullname and email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#account_attribute_maps AuthMethodLdap#account_attribute_maps}

---

##### `anonGroupSearch`<sup>Optional</sup> <a name="anonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.anonGroupSearch"></a>

```typescript
public readonly anonGroupSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use anon bind when performing LDAP group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#anon_group_search AuthMethodLdap#anon_group_search}

---

##### `bindDn`<sup>Optional</sup> <a name="bindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindDn"></a>

```typescript
public readonly bindDn: string;
```

- *Type:* string

The distinguished name of entry to bind when performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#bind_dn AuthMethodLdap#bind_dn}

---

##### `bindPassword`<sup>Optional</sup> <a name="bindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPassword"></a>

```typescript
public readonly bindPassword: string;
```

- *Type:* string

The password to use along with bind-dn performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#bind_password AuthMethodLdap#bind_password}

---

##### `bindPasswordHmac`<sup>Optional</sup> <a name="bindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPasswordHmac"></a>

```typescript
public readonly bindPasswordHmac: string;
```

- *Type:* string

The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#bind_password_hmac AuthMethodLdap#bind_password_hmac}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.certificates"></a>

```typescript
public readonly certificates: string[];
```

- *Type:* string[]

PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#certificates AuthMethodLdap#certificates}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#client_certificate AuthMethodLdap#client_certificate}

---

##### `clientCertificateKey`<sup>Optional</sup> <a name="clientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKey"></a>

```typescript
public readonly clientCertificateKey: string;
```

- *Type:* string

PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#client_certificate_key AuthMethodLdap#client_certificate_key}

---

##### `clientCertificateKeyHmac`<sup>Optional</sup> <a name="clientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKeyHmac"></a>

```typescript
public readonly clientCertificateKeyHmac: string;
```

- *Type:* string

The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#client_certificate_key_hmac AuthMethodLdap#client_certificate_key_hmac}

---

##### `dereferenceAliases`<sup>Optional</sup> <a name="dereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dereferenceAliases"></a>

```typescript
public readonly dereferenceAliases: string;
```

- *Type:* string

Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#dereference_aliases AuthMethodLdap#dereference_aliases}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#description AuthMethodLdap#description}

---

##### `discoverDn`<sup>Optional</sup> <a name="discoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.discoverDn"></a>

```typescript
public readonly discoverDn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use anon bind to discover the bind DN of a user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#discover_dn AuthMethodLdap#discover_dn}

---

##### `enableGroups`<sup>Optional</sup> <a name="enableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.enableGroups"></a>

```typescript
public readonly enableGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Find the authenticated user's groups during authentication (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#enable_groups AuthMethodLdap#enable_groups}

---

##### `groupAttr`<sup>Optional</sup> <a name="groupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupAttr"></a>

```typescript
public readonly groupAttr: string;
```

- *Type:* string

The attribute that enumerates a user's group membership from entries returned by a group search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#group_attr AuthMethodLdap#group_attr}

---

##### `groupDn`<sup>Optional</sup> <a name="groupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupDn"></a>

```typescript
public readonly groupDn: string;
```

- *Type:* string

The base DN under which to perform group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#group_dn AuthMethodLdap#group_dn}

---

##### `groupFilter`<sup>Optional</sup> <a name="groupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupFilter"></a>

```typescript
public readonly groupFilter: string;
```

- *Type:* string

A go template used to construct a LDAP group search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#group_filter AuthMethodLdap#group_filter}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#insecure_tls AuthMethodLdap#insecure_tls}

---

##### `isPrimaryForScope`<sup>Optional</sup> <a name="isPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.isPrimaryForScope"></a>

```typescript
public readonly isPrimaryForScope: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the the user will be automatically created when they login using an LDAP account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#is_primary_for_scope AuthMethodLdap#is_primary_for_scope}

---

##### `maximumPageSize`<sup>Optional</sup> <a name="maximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.maximumPageSize"></a>

```typescript
public readonly maximumPageSize: number;
```

- *Type:* number

MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#maximum_page_size AuthMethodLdap#maximum_page_size}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#name AuthMethodLdap#name}

---

##### `startTls`<sup>Optional</sup> <a name="startTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.startTls"></a>

```typescript
public readonly startTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Issue StartTLS command after connecting (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#start_tls AuthMethodLdap#start_tls}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#state AuthMethodLdap#state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#type AuthMethodLdap#type}

---

##### `upnDomain`<sup>Optional</sup> <a name="upnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.upnDomain"></a>

```typescript
public readonly upnDomain: string;
```

- *Type:* string

The userPrincipalDomain used to construct the UPN string for the authenticating user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#upn_domain AuthMethodLdap#upn_domain}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#urls AuthMethodLdap#urls}

---

##### `userAttr`<sup>Optional</sup> <a name="userAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userAttr"></a>

```typescript
public readonly userAttr: string;
```

- *Type:* string

The attribute on user entry matching the username passed when authenticating (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#user_attr AuthMethodLdap#user_attr}

---

##### `userDn`<sup>Optional</sup> <a name="userDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userDn"></a>

```typescript
public readonly userDn: string;
```

- *Type:* string

The base DN under which to perform user search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#user_dn AuthMethodLdap#user_dn}

---

##### `userFilter`<sup>Optional</sup> <a name="userFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userFilter"></a>

```typescript
public readonly userFilter: string;
```

- *Type:* string

A go template used to construct a LDAP user search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#user_filter AuthMethodLdap#user_filter}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.useTokenGroups"></a>

```typescript
public readonly useTokenGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/auth_method_ldap#use_token_groups AuthMethodLdap#use_token_groups}

---



