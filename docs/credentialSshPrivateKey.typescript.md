# `credentialSshPrivateKey` Submodule <a name="`credentialSshPrivateKey` Submodule" id="@cdktf/provider-boundary.credentialSshPrivateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialSshPrivateKey <a name="CredentialSshPrivateKey" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_ssh_private_key boundary_credential_ssh_private_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer"></a>

```typescript
import { credentialSshPrivateKey } from '@cdktf/provider-boundary'

new credentialSshPrivateKey.CredentialSshPrivateKey(scope: Construct, id: string, config: CredentialSshPrivateKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig">CredentialSshPrivateKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig">CredentialSshPrivateKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetPrivateKeyPassphrase">resetPrivateKeyPassphrase</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPrivateKeyPassphrase` <a name="resetPrivateKeyPassphrase" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetPrivateKeyPassphrase"></a>

```typescript
public resetPrivateKeyPassphrase(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialSshPrivateKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isConstruct"></a>

```typescript
import { credentialSshPrivateKey } from '@cdktf/provider-boundary'

credentialSshPrivateKey.CredentialSshPrivateKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformElement"></a>

```typescript
import { credentialSshPrivateKey } from '@cdktf/provider-boundary'

credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformResource"></a>

```typescript
import { credentialSshPrivateKey } from '@cdktf/provider-boundary'

credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport"></a>

```typescript
import { credentialSshPrivateKey } from '@cdktf/provider-boundary'

credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CredentialSshPrivateKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CredentialSshPrivateKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CredentialSshPrivateKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_ssh_private_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CredentialSshPrivateKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyHmac">privateKeyHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseHmac">privateKeyPassphraseHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreIdInput">credentialStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseInput">privateKeyPassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreId">credentialStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateKeyHmac`<sup>Required</sup> <a name="privateKeyHmac" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyHmac"></a>

```typescript
public readonly privateKeyHmac: string;
```

- *Type:* string

---

##### `privateKeyPassphraseHmac`<sup>Required</sup> <a name="privateKeyPassphraseHmac" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseHmac"></a>

```typescript
public readonly privateKeyPassphraseHmac: string;
```

- *Type:* string

---

##### `credentialStoreIdInput`<sup>Optional</sup> <a name="credentialStoreIdInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreIdInput"></a>

```typescript
public readonly credentialStoreIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `privateKeyPassphraseInput`<sup>Optional</sup> <a name="privateKeyPassphraseInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseInput"></a>

```typescript
public readonly privateKeyPassphraseInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreId"></a>

```typescript
public readonly credentialStoreId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyPassphrase`<sup>Required</sup> <a name="privateKeyPassphrase" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphrase"></a>

```typescript
public readonly privateKeyPassphrase: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialSshPrivateKeyConfig <a name="CredentialSshPrivateKeyConfig" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.Initializer"></a>

```typescript
import { credentialSshPrivateKey } from '@cdktf/provider-boundary'

const credentialSshPrivateKeyConfig: credentialSshPrivateKey.CredentialSshPrivateKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.credentialStoreId">credentialStoreId</a></code> | <code>string</code> | ID of the credential store this credential belongs to. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The private key associated with the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.username">username</a></code> | <code>string</code> | The username associated with the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.description">description</a></code> | <code>string</code> | The description of the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.name">name</a></code> | <code>string</code> | The name of the credential. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>string</code> | The passphrase of the private key associated with the credential. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.credentialStoreId"></a>

```typescript
public readonly credentialStoreId: string;
```

- *Type:* string

ID of the credential store this credential belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_ssh_private_key#credential_store_id CredentialSshPrivateKey#credential_store_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The private key associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_ssh_private_key#private_key CredentialSshPrivateKey#private_key}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_ssh_private_key#username CredentialSshPrivateKey#username}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_ssh_private_key#description CredentialSshPrivateKey#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_ssh_private_key#name CredentialSshPrivateKey#name}

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKeyPassphrase"></a>

```typescript
public readonly privateKeyPassphrase: string;
```

- *Type:* string

The passphrase of the private key associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/credential_ssh_private_key#private_key_passphrase CredentialSshPrivateKey#private_key_passphrase}

---



