# `credentialLibraryVaultSshCertificate` Submodule <a name="`credentialLibraryVaultSshCertificate` Submodule" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialLibraryVaultSshCertificate <a name="CredentialLibraryVaultSshCertificate" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate boundary_credential_library_vault_ssh_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer"></a>

```typescript
import { credentialLibraryVaultSshCertificate } from '@cdktf/provider-boundary'

new credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate(scope: Construct, id: string, config: CredentialLibraryVaultSshCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig">CredentialLibraryVaultSshCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig">CredentialLibraryVaultSshCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetAdditionalValidPrincipals">resetAdditionalValidPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetCriticalOptions">resetCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetExtensions">resetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdditionalValidPrincipals` <a name="resetAdditionalValidPrincipals" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetAdditionalValidPrincipals"></a>

```typescript
public resetAdditionalValidPrincipals(): void
```

##### `resetCriticalOptions` <a name="resetCriticalOptions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetCriticalOptions"></a>

```typescript
public resetCriticalOptions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExtensions` <a name="resetExtensions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetExtensions"></a>

```typescript
public resetExtensions(): void
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyBits"></a>

```typescript
public resetKeyBits(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialLibraryVaultSshCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isConstruct"></a>

```typescript
import { credentialLibraryVaultSshCertificate } from '@cdktf/provider-boundary'

credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformElement"></a>

```typescript
import { credentialLibraryVaultSshCertificate } from '@cdktf/provider-boundary'

credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformResource"></a>

```typescript
import { credentialLibraryVaultSshCertificate } from '@cdktf/provider-boundary'

credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.generateConfigForImport"></a>

```typescript
import { credentialLibraryVaultSshCertificate } from '@cdktf/provider-boundary'

credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CredentialLibraryVaultSshCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CredentialLibraryVaultSshCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CredentialLibraryVaultSshCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CredentialLibraryVaultSshCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.additionalValidPrincipalsInput">additionalValidPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.credentialStoreIdInput">credentialStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.criticalOptionsInput">criticalOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.extensionsInput">extensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyBitsInput">keyBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.additionalValidPrincipals">additionalValidPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.credentialStoreId">credentialStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.criticalOptions">criticalOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.extensions">extensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyBits">keyBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `additionalValidPrincipalsInput`<sup>Optional</sup> <a name="additionalValidPrincipalsInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.additionalValidPrincipalsInput"></a>

```typescript
public readonly additionalValidPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `credentialStoreIdInput`<sup>Optional</sup> <a name="credentialStoreIdInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.credentialStoreIdInput"></a>

```typescript
public readonly credentialStoreIdInput: string;
```

- *Type:* string

---

##### `criticalOptionsInput`<sup>Optional</sup> <a name="criticalOptionsInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.criticalOptionsInput"></a>

```typescript
public readonly criticalOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.extensionsInput"></a>

```typescript
public readonly extensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyBitsInput"></a>

```typescript
public readonly keyBitsInput: number;
```

- *Type:* number

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `additionalValidPrincipals`<sup>Required</sup> <a name="additionalValidPrincipals" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.additionalValidPrincipals"></a>

```typescript
public readonly additionalValidPrincipals: string[];
```

- *Type:* string[]

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.credentialStoreId"></a>

```typescript
public readonly credentialStoreId: string;
```

- *Type:* string

---

##### `criticalOptions`<sup>Required</sup> <a name="criticalOptions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.criticalOptions"></a>

```typescript
public readonly criticalOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.extensions"></a>

```typescript
public readonly extensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyBits"></a>

```typescript
public readonly keyBits: number;
```

- *Type:* number

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialLibraryVaultSshCertificateConfig <a name="CredentialLibraryVaultSshCertificateConfig" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.Initializer"></a>

```typescript
import { credentialLibraryVaultSshCertificate } from '@cdktf/provider-boundary'

const credentialLibraryVaultSshCertificateConfig: credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.credentialStoreId">credentialStoreId</a></code> | <code>string</code> | The ID of the credential store that this library belongs to. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.path">path</a></code> | <code>string</code> | The path in Vault to request credentials from. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.username">username</a></code> | <code>string</code> | The username to use with the certificate returned by the library. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.additionalValidPrincipals">additionalValidPrincipals</a></code> | <code>string[]</code> | Principals to be signed as "valid_principles" in addition to username. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.criticalOptions">criticalOptions</a></code> | <code>{[ key: string ]: string}</code> | Specifies a map of the critical options that the certificate should be signed for. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.description">description</a></code> | <code>string</code> | The Vault credential library description. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.extensions">extensions</a></code> | <code>{[ key: string ]: string}</code> | Specifies a map of the extensions that the certificate should be signed for. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyBits">keyBits</a></code> | <code>number</code> | Specifies the number of bits to use for the generated keys. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyId">keyId</a></code> | <code>string</code> | Specifies the key id a certificate should have. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyType">keyType</a></code> | <code>string</code> | Specifies the desired key type; must be ed25519, ecdsa, or rsa. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.name">name</a></code> | <code>string</code> | The Vault credential library name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.ttl">ttl</a></code> | <code>string</code> | Specifies the requested time to live for a certificate returned from the library. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.credentialStoreId"></a>

```typescript
public readonly credentialStoreId: string;
```

- *Type:* string

The ID of the credential store that this library belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#credential_store_id CredentialLibraryVaultSshCertificate#credential_store_id}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path in Vault to request credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#path CredentialLibraryVaultSshCertificate#path}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to use with the certificate returned by the library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#username CredentialLibraryVaultSshCertificate#username}

---

##### `additionalValidPrincipals`<sup>Optional</sup> <a name="additionalValidPrincipals" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.additionalValidPrincipals"></a>

```typescript
public readonly additionalValidPrincipals: string[];
```

- *Type:* string[]

Principals to be signed as "valid_principles" in addition to username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#additional_valid_principals CredentialLibraryVaultSshCertificate#additional_valid_principals}

---

##### `criticalOptions`<sup>Optional</sup> <a name="criticalOptions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.criticalOptions"></a>

```typescript
public readonly criticalOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a map of the critical options that the certificate should be signed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#critical_options CredentialLibraryVaultSshCertificate#critical_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The Vault credential library description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#description CredentialLibraryVaultSshCertificate#description}

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.extensions"></a>

```typescript
public readonly extensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a map of the extensions that the certificate should be signed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#extensions CredentialLibraryVaultSshCertificate#extensions}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyBits"></a>

```typescript
public readonly keyBits: number;
```

- *Type:* number

Specifies the number of bits to use for the generated keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#key_bits CredentialLibraryVaultSshCertificate#key_bits}

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Specifies the key id a certificate should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#key_id CredentialLibraryVaultSshCertificate#key_id}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Specifies the desired key type; must be ed25519, ecdsa, or rsa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#key_type CredentialLibraryVaultSshCertificate#key_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Vault credential library name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#name CredentialLibraryVaultSshCertificate#name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Specifies the requested time to live for a certificate returned from the library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/credential_library_vault_ssh_certificate#ttl CredentialLibraryVaultSshCertificate#ttl}

---



