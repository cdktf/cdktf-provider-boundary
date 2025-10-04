# `credentialStoreVault` Submodule <a name="`credentialStoreVault` Submodule" id="@cdktf/provider-boundary.credentialStoreVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialStoreVault <a name="CredentialStoreVault" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault boundary_credential_store_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer"></a>

```typescript
import { credentialStoreVault } from '@cdktf/provider-boundary'

new credentialStoreVault.CredentialStoreVault(scope: Construct, id: string, config: CredentialStoreVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig">CredentialStoreVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig">CredentialStoreVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificateKey">resetClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsServerName">resetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsSkipVerify">resetTlsSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetWorkerFilter">resetWorkerFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCaCert` <a name="resetCaCert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetCaCert"></a>

```typescript
public resetCaCert(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientCertificateKey` <a name="resetClientCertificateKey" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificateKey"></a>

```typescript
public resetClientCertificateKey(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTlsServerName` <a name="resetTlsServerName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsServerName"></a>

```typescript
public resetTlsServerName(): void
```

##### `resetTlsSkipVerify` <a name="resetTlsSkipVerify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsSkipVerify"></a>

```typescript
public resetTlsSkipVerify(): void
```

##### `resetWorkerFilter` <a name="resetWorkerFilter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetWorkerFilter"></a>

```typescript
public resetWorkerFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialStoreVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct"></a>

```typescript
import { credentialStoreVault } from '@cdktf/provider-boundary'

credentialStoreVault.CredentialStoreVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement"></a>

```typescript
import { credentialStoreVault } from '@cdktf/provider-boundary'

credentialStoreVault.CredentialStoreVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource"></a>

```typescript
import { credentialStoreVault } from '@cdktf/provider-boundary'

credentialStoreVault.CredentialStoreVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport"></a>

```typescript
import { credentialStoreVault } from '@cdktf/provider-boundary'

credentialStoreVault.CredentialStoreVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CredentialStoreVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CredentialStoreVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CredentialStoreVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CredentialStoreVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyHmac">clientCertificateKeyHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenHmac">tokenHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCertInput">caCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyInput">clientCertificateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerNameInput">tlsServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerifyInput">tlsSkipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilterInput">workerFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCert">caCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKey">clientCertificateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerify">tlsSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilter">workerFilter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientCertificateKeyHmac`<sup>Required</sup> <a name="clientCertificateKeyHmac" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyHmac"></a>

```typescript
public readonly clientCertificateKeyHmac: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tokenHmac`<sup>Required</sup> <a name="tokenHmac" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenHmac"></a>

```typescript
public readonly tokenHmac: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCertInput"></a>

```typescript
public readonly caCertInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateKeyInput`<sup>Optional</sup> <a name="clientCertificateKeyInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyInput"></a>

```typescript
public readonly clientCertificateKeyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `tlsServerNameInput`<sup>Optional</sup> <a name="tlsServerNameInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerNameInput"></a>

```typescript
public readonly tlsServerNameInput: string;
```

- *Type:* string

---

##### `tlsSkipVerifyInput`<sup>Optional</sup> <a name="tlsSkipVerifyInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerifyInput"></a>

```typescript
public readonly tlsSkipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `workerFilterInput`<sup>Optional</sup> <a name="workerFilterInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilterInput"></a>

```typescript
public readonly workerFilterInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientCertificateKey`<sup>Required</sup> <a name="clientCertificateKey" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKey"></a>

```typescript
public readonly clientCertificateKey: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `tlsServerName`<sup>Required</sup> <a name="tlsServerName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

---

##### `tlsSkipVerify`<sup>Required</sup> <a name="tlsSkipVerify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerify"></a>

```typescript
public readonly tlsSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `workerFilter`<sup>Required</sup> <a name="workerFilter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilter"></a>

```typescript
public readonly workerFilter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialStoreVaultConfig <a name="CredentialStoreVaultConfig" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.Initializer"></a>

```typescript
import { credentialStoreVault } from '@cdktf/provider-boundary'

const credentialStoreVaultConfig: credentialStoreVault.CredentialStoreVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.address">address</a></code> | <code>string</code> | The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.scopeId">scopeId</a></code> | <code>string</code> | The scope for this credential store. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.token">token</a></code> | <code>string</code> | A token used for accessing Vault. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.caCert">caCert</a></code> | <code>string</code> | A PEM-encoded CA certificate to verify the Vault server's TLS certificate. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | A PEM-encoded client certificate to use for TLS authentication to the Vault server. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificateKey">clientCertificateKey</a></code> | <code>string</code> | A PEM-encoded private key matching the client certificate from 'client_certificate'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.description">description</a></code> | <code>string</code> | The Vault credential store description. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.name">name</a></code> | <code>string</code> | The Vault credential store name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace within Vault to use. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | Name to use as the SNI host when connecting to Vault via TLS. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsSkipVerify">tlsSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to skip TLS verification. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.workerFilter">workerFilter</a></code> | <code>string</code> | HCP Only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#address CredentialStoreVault#address}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The scope for this credential store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#scope_id CredentialStoreVault#scope_id}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

A token used for accessing Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#token CredentialStoreVault#token}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.caCert"></a>

```typescript
public readonly caCert: string;
```

- *Type:* string

A PEM-encoded CA certificate to verify the Vault server's TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#ca_cert CredentialStoreVault#ca_cert}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

A PEM-encoded client certificate to use for TLS authentication to the Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#client_certificate CredentialStoreVault#client_certificate}

---

##### `clientCertificateKey`<sup>Optional</sup> <a name="clientCertificateKey" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificateKey"></a>

```typescript
public readonly clientCertificateKey: string;
```

- *Type:* string

A PEM-encoded private key matching the client certificate from 'client_certificate'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#client_certificate_key CredentialStoreVault#client_certificate_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The Vault credential store description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#description CredentialStoreVault#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Vault credential store name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#name CredentialStoreVault#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace within Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#namespace CredentialStoreVault#namespace}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

Name to use as the SNI host when connecting to Vault via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#tls_server_name CredentialStoreVault#tls_server_name}

---

##### `tlsSkipVerify`<sup>Optional</sup> <a name="tlsSkipVerify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsSkipVerify"></a>

```typescript
public readonly tlsSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to skip TLS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#tls_skip_verify CredentialStoreVault#tls_skip_verify}

---

##### `workerFilter`<sup>Optional</sup> <a name="workerFilter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.workerFilter"></a>

```typescript
public readonly workerFilter: string;
```

- *Type:* string

HCP Only.

A filter used to control which PKI workers can handle Vault requests. This allows the use of private Vault instances with Boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#worker_filter CredentialStoreVault#worker_filter}

---



