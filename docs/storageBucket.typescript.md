# `storageBucket` Submodule <a name="`storageBucket` Submodule" id="@cdktf/provider-boundary.storageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucket <a name="StorageBucket" id="@cdktf/provider-boundary.storageBucket.StorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket boundary_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-boundary'

new storageBucket.StorageBucket(scope: Construct, id: string, config: StorageBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig">StorageBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig">StorageBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetAttributesJson">resetAttributesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginId">resetPluginId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginName">resetPluginName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.storageBucket.StorageBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAttributesJson` <a name="resetAttributesJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetAttributesJson"></a>

```typescript
public resetAttributesJson(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPluginId` <a name="resetPluginId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginId"></a>

```typescript
public resetPluginId(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct"></a>

```typescript
import { storageBucket } from '@cdktf/provider-boundary'

storageBucket.StorageBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement"></a>

```typescript
import { storageBucket } from '@cdktf/provider-boundary'

storageBucket.StorageBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource"></a>

```typescript
import { storageBucket } from '@cdktf/provider-boundary'

storageBucket.StorageBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport"></a>

```typescript
import { storageBucket } from '@cdktf/provider-boundary'

storageBucket.StorageBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalForceUpdate">internalForceUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalHmacUsedForSecretsConfigHmac">internalHmacUsedForSecretsConfigHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalSecretsConfigHmac">internalSecretsConfigHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsHmac">secretsHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJsonInput">attributesJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginIdInput">pluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJsonInput">secretsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilterInput">workerFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJson">attributesJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJson">secretsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilter">workerFilter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalForceUpdate`<sup>Required</sup> <a name="internalForceUpdate" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalForceUpdate"></a>

```typescript
public readonly internalForceUpdate: string;
```

- *Type:* string

---

##### `internalHmacUsedForSecretsConfigHmac`<sup>Required</sup> <a name="internalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalHmacUsedForSecretsConfigHmac"></a>

```typescript
public readonly internalHmacUsedForSecretsConfigHmac: string;
```

- *Type:* string

---

##### `internalSecretsConfigHmac`<sup>Required</sup> <a name="internalSecretsConfigHmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalSecretsConfigHmac"></a>

```typescript
public readonly internalSecretsConfigHmac: string;
```

- *Type:* string

---

##### `secretsHmac`<sup>Required</sup> <a name="secretsHmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsHmac"></a>

```typescript
public readonly secretsHmac: string;
```

- *Type:* string

---

##### `attributesJsonInput`<sup>Optional</sup> <a name="attributesJsonInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJsonInput"></a>

```typescript
public readonly attributesJsonInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginIdInput"></a>

```typescript
public readonly pluginIdInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `secretsJsonInput`<sup>Optional</sup> <a name="secretsJsonInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJsonInput"></a>

```typescript
public readonly secretsJsonInput: string;
```

- *Type:* string

---

##### `workerFilterInput`<sup>Optional</sup> <a name="workerFilterInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilterInput"></a>

```typescript
public readonly workerFilterInput: string;
```

- *Type:* string

---

##### `attributesJson`<sup>Required</sup> <a name="attributesJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJson"></a>

```typescript
public readonly attributesJson: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `secretsJson`<sup>Required</sup> <a name="secretsJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJson"></a>

```typescript
public readonly secretsJson: string;
```

- *Type:* string

---

##### `workerFilter`<sup>Required</sup> <a name="workerFilter" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilter"></a>

```typescript
public readonly workerFilter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketConfig <a name="StorageBucketConfig" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.Initializer"></a>

```typescript
import { storageBucket } from '@cdktf/provider-boundary'

const storageBucketConfig: storageBucket.StorageBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket within the external object store service. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.scopeId">scopeId</a></code> | <code>string</code> | The scope for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.secretsJson">secretsJson</a></code> | <code>string</code> | The secrets for the storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.workerFilter">workerFilter</a></code> | <code>string</code> | Filters to the worker(s) that can handle requests for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.attributesJson">attributesJson</a></code> | <code>string</code> | The attributes for the storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | The prefix used to organize the data held within the external object store. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.description">description</a></code> | <code>string</code> | The storage bucket description. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.name">name</a></code> | <code>string</code> | The storage bucket name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginId">pluginId</a></code> | <code>string</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginName">pluginName</a></code> | <code>string</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket within the external object store service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#bucket_name StorageBucket#bucket_name}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The scope for this storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#scope_id StorageBucket#scope_id}

---

##### `secretsJson`<sup>Required</sup> <a name="secretsJson" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.secretsJson"></a>

```typescript
public readonly secretsJson: string;
```

- *Type:* string

The secrets for the storage bucket.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the storage bucket; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#secrets_json StorageBucket#secrets_json}

---

##### `workerFilter`<sup>Required</sup> <a name="workerFilter" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.workerFilter"></a>

```typescript
public readonly workerFilter: string;
```

- *Type:* string

Filters to the worker(s) that can handle requests for this storage bucket.

The filter must match an existing worker in order to create a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#worker_filter StorageBucket#worker_filter}

---

##### `attributesJson`<sup>Optional</sup> <a name="attributesJson" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.attributesJson"></a>

```typescript
public readonly attributesJson: string;
```

- *Type:* string

The attributes for the storage bucket.

The "region" attribute field is required when creating an AWS storage bucket. Values are either encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#attributes_json StorageBucket#attributes_json}

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

The prefix used to organize the data held within the external object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#bucket_prefix StorageBucket#bucket_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The storage bucket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#description StorageBucket#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The storage bucket name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `pluginId`<sup>Optional</sup> <a name="pluginId" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#plugin_id StorageBucket#plugin_id}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.12/docs/resources/storage_bucket#plugin_name StorageBucket#plugin_name}

---



