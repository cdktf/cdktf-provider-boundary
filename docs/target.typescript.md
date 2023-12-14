# `target` Submodule <a name="`target` Submodule" id="@cdktf/provider-boundary.target"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Target <a name="Target" id="@cdktf/provider-boundary.target.Target"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target boundary_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.target.Target.Initializer"></a>

```typescript
import { target } from '@cdktf/provider-boundary'

new target.Target(scope: Construct, id: string, config: TargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.target.TargetConfig">TargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.target.TargetConfig">TargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.target.Target.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.target.Target.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.target.Target.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.target.Target.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.target.Target.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetBrokeredCredentialSourceIds">resetBrokeredCredentialSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDefaultClientPort">resetDefaultClientPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDefaultPort">resetDefaultPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetEgressWorkerFilter">resetEgressWorkerFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetEnableSessionRecording">resetEnableSessionRecording</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetHostSourceIds">resetHostSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetIngressWorkerFilter">resetIngressWorkerFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetInjectedApplicationCredentialSourceIds">resetInjectedApplicationCredentialSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetSessionConnectionLimit">resetSessionConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetSessionMaxSeconds">resetSessionMaxSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetStorageBucketId">resetStorageBucketId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetWorkerFilter">resetWorkerFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.target.Target.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.target.Target.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.target.Target.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.target.Target.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.target.Target.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.target.Target.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.target.Target.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.target.Target.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.target.Target.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.target.Target.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.target.Target.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.target.Target.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.target.Target.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.target.Target.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.target.Target.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.target.Target.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.target.Target.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.target.Target.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.target.Target.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.target.Target.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.target.Target.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.target.Target.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.target.Target.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.target.Target.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.target.Target.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.target.Target.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.target.Target.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-boundary.target.Target.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetBrokeredCredentialSourceIds` <a name="resetBrokeredCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.resetBrokeredCredentialSourceIds"></a>

```typescript
public resetBrokeredCredentialSourceIds(): void
```

##### `resetDefaultClientPort` <a name="resetDefaultClientPort" id="@cdktf/provider-boundary.target.Target.resetDefaultClientPort"></a>

```typescript
public resetDefaultClientPort(): void
```

##### `resetDefaultPort` <a name="resetDefaultPort" id="@cdktf/provider-boundary.target.Target.resetDefaultPort"></a>

```typescript
public resetDefaultPort(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.target.Target.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEgressWorkerFilter` <a name="resetEgressWorkerFilter" id="@cdktf/provider-boundary.target.Target.resetEgressWorkerFilter"></a>

```typescript
public resetEgressWorkerFilter(): void
```

##### `resetEnableSessionRecording` <a name="resetEnableSessionRecording" id="@cdktf/provider-boundary.target.Target.resetEnableSessionRecording"></a>

```typescript
public resetEnableSessionRecording(): void
```

##### `resetHostSourceIds` <a name="resetHostSourceIds" id="@cdktf/provider-boundary.target.Target.resetHostSourceIds"></a>

```typescript
public resetHostSourceIds(): void
```

##### `resetIngressWorkerFilter` <a name="resetIngressWorkerFilter" id="@cdktf/provider-boundary.target.Target.resetIngressWorkerFilter"></a>

```typescript
public resetIngressWorkerFilter(): void
```

##### `resetInjectedApplicationCredentialSourceIds` <a name="resetInjectedApplicationCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.resetInjectedApplicationCredentialSourceIds"></a>

```typescript
public resetInjectedApplicationCredentialSourceIds(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.target.Target.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSessionConnectionLimit` <a name="resetSessionConnectionLimit" id="@cdktf/provider-boundary.target.Target.resetSessionConnectionLimit"></a>

```typescript
public resetSessionConnectionLimit(): void
```

##### `resetSessionMaxSeconds` <a name="resetSessionMaxSeconds" id="@cdktf/provider-boundary.target.Target.resetSessionMaxSeconds"></a>

```typescript
public resetSessionMaxSeconds(): void
```

##### `resetStorageBucketId` <a name="resetStorageBucketId" id="@cdktf/provider-boundary.target.Target.resetStorageBucketId"></a>

```typescript
public resetStorageBucketId(): void
```

##### `resetWorkerFilter` <a name="resetWorkerFilter" id="@cdktf/provider-boundary.target.Target.resetWorkerFilter"></a>

```typescript
public resetWorkerFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Target resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.target.Target.isConstruct"></a>

```typescript
import { target } from '@cdktf/provider-boundary'

target.Target.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.target.Target.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.target.Target.isTerraformElement"></a>

```typescript
import { target } from '@cdktf/provider-boundary'

target.Target.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.target.Target.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.target.Target.isTerraformResource"></a>

```typescript
import { target } from '@cdktf/provider-boundary'

target.Target.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.target.Target.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.target.Target.generateConfigForImport"></a>

```typescript
import { target } from '@cdktf/provider-boundary'

target.Target.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Target resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Target to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Target that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Target to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIdsInput">brokeredCredentialSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultClientPortInput">defaultClientPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultPortInput">defaultPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.egressWorkerFilterInput">egressWorkerFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.enableSessionRecordingInput">enableSessionRecordingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.hostSourceIdsInput">hostSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.ingressWorkerFilterInput">ingressWorkerFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIdsInput">injectedApplicationCredentialSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionConnectionLimitInput">sessionConnectionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionMaxSecondsInput">sessionMaxSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.storageBucketIdInput">storageBucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.workerFilterInput">workerFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIds">brokeredCredentialSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultClientPort">defaultClientPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultPort">defaultPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.egressWorkerFilter">egressWorkerFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.enableSessionRecording">enableSessionRecording</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.hostSourceIds">hostSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.ingressWorkerFilter">ingressWorkerFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIds">injectedApplicationCredentialSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionConnectionLimit">sessionConnectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionMaxSeconds">sessionMaxSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.storageBucketId">storageBucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.workerFilter">workerFilter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.target.Target.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.target.Target.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.target.Target.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.target.Target.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.target.Target.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.target.Target.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.target.Target.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.target.Target.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.target.Target.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.target.Target.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.target.Target.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.target.Target.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.target.Target.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.target.Target.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-boundary.target.Target.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `brokeredCredentialSourceIdsInput`<sup>Optional</sup> <a name="brokeredCredentialSourceIdsInput" id="@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIdsInput"></a>

```typescript
public readonly brokeredCredentialSourceIdsInput: string[];
```

- *Type:* string[]

---

##### `defaultClientPortInput`<sup>Optional</sup> <a name="defaultClientPortInput" id="@cdktf/provider-boundary.target.Target.property.defaultClientPortInput"></a>

```typescript
public readonly defaultClientPortInput: number;
```

- *Type:* number

---

##### `defaultPortInput`<sup>Optional</sup> <a name="defaultPortInput" id="@cdktf/provider-boundary.target.Target.property.defaultPortInput"></a>

```typescript
public readonly defaultPortInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.target.Target.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `egressWorkerFilterInput`<sup>Optional</sup> <a name="egressWorkerFilterInput" id="@cdktf/provider-boundary.target.Target.property.egressWorkerFilterInput"></a>

```typescript
public readonly egressWorkerFilterInput: string;
```

- *Type:* string

---

##### `enableSessionRecordingInput`<sup>Optional</sup> <a name="enableSessionRecordingInput" id="@cdktf/provider-boundary.target.Target.property.enableSessionRecordingInput"></a>

```typescript
public readonly enableSessionRecordingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSourceIdsInput`<sup>Optional</sup> <a name="hostSourceIdsInput" id="@cdktf/provider-boundary.target.Target.property.hostSourceIdsInput"></a>

```typescript
public readonly hostSourceIdsInput: string[];
```

- *Type:* string[]

---

##### `ingressWorkerFilterInput`<sup>Optional</sup> <a name="ingressWorkerFilterInput" id="@cdktf/provider-boundary.target.Target.property.ingressWorkerFilterInput"></a>

```typescript
public readonly ingressWorkerFilterInput: string;
```

- *Type:* string

---

##### `injectedApplicationCredentialSourceIdsInput`<sup>Optional</sup> <a name="injectedApplicationCredentialSourceIdsInput" id="@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIdsInput"></a>

```typescript
public readonly injectedApplicationCredentialSourceIdsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.target.Target.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.target.Target.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `sessionConnectionLimitInput`<sup>Optional</sup> <a name="sessionConnectionLimitInput" id="@cdktf/provider-boundary.target.Target.property.sessionConnectionLimitInput"></a>

```typescript
public readonly sessionConnectionLimitInput: number;
```

- *Type:* number

---

##### `sessionMaxSecondsInput`<sup>Optional</sup> <a name="sessionMaxSecondsInput" id="@cdktf/provider-boundary.target.Target.property.sessionMaxSecondsInput"></a>

```typescript
public readonly sessionMaxSecondsInput: number;
```

- *Type:* number

---

##### `storageBucketIdInput`<sup>Optional</sup> <a name="storageBucketIdInput" id="@cdktf/provider-boundary.target.Target.property.storageBucketIdInput"></a>

```typescript
public readonly storageBucketIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-boundary.target.Target.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `workerFilterInput`<sup>Optional</sup> <a name="workerFilterInput" id="@cdktf/provider-boundary.target.Target.property.workerFilterInput"></a>

```typescript
public readonly workerFilterInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-boundary.target.Target.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `brokeredCredentialSourceIds`<sup>Required</sup> <a name="brokeredCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIds"></a>

```typescript
public readonly brokeredCredentialSourceIds: string[];
```

- *Type:* string[]

---

##### `defaultClientPort`<sup>Required</sup> <a name="defaultClientPort" id="@cdktf/provider-boundary.target.Target.property.defaultClientPort"></a>

```typescript
public readonly defaultClientPort: number;
```

- *Type:* number

---

##### `defaultPort`<sup>Required</sup> <a name="defaultPort" id="@cdktf/provider-boundary.target.Target.property.defaultPort"></a>

```typescript
public readonly defaultPort: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.target.Target.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `egressWorkerFilter`<sup>Required</sup> <a name="egressWorkerFilter" id="@cdktf/provider-boundary.target.Target.property.egressWorkerFilter"></a>

```typescript
public readonly egressWorkerFilter: string;
```

- *Type:* string

---

##### `enableSessionRecording`<sup>Required</sup> <a name="enableSessionRecording" id="@cdktf/provider-boundary.target.Target.property.enableSessionRecording"></a>

```typescript
public readonly enableSessionRecording: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostSourceIds`<sup>Required</sup> <a name="hostSourceIds" id="@cdktf/provider-boundary.target.Target.property.hostSourceIds"></a>

```typescript
public readonly hostSourceIds: string[];
```

- *Type:* string[]

---

##### `ingressWorkerFilter`<sup>Required</sup> <a name="ingressWorkerFilter" id="@cdktf/provider-boundary.target.Target.property.ingressWorkerFilter"></a>

```typescript
public readonly ingressWorkerFilter: string;
```

- *Type:* string

---

##### `injectedApplicationCredentialSourceIds`<sup>Required</sup> <a name="injectedApplicationCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIds"></a>

```typescript
public readonly injectedApplicationCredentialSourceIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.target.Target.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.target.Target.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `sessionConnectionLimit`<sup>Required</sup> <a name="sessionConnectionLimit" id="@cdktf/provider-boundary.target.Target.property.sessionConnectionLimit"></a>

```typescript
public readonly sessionConnectionLimit: number;
```

- *Type:* number

---

##### `sessionMaxSeconds`<sup>Required</sup> <a name="sessionMaxSeconds" id="@cdktf/provider-boundary.target.Target.property.sessionMaxSeconds"></a>

```typescript
public readonly sessionMaxSeconds: number;
```

- *Type:* number

---

##### `storageBucketId`<sup>Required</sup> <a name="storageBucketId" id="@cdktf/provider-boundary.target.Target.property.storageBucketId"></a>

```typescript
public readonly storageBucketId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.target.Target.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `workerFilter`<sup>Required</sup> <a name="workerFilter" id="@cdktf/provider-boundary.target.Target.property.workerFilter"></a>

```typescript
public readonly workerFilter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.target.Target.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TargetConfig <a name="TargetConfig" id="@cdktf/provider-boundary.target.TargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.target.TargetConfig.Initializer"></a>

```typescript
import { target } from '@cdktf/provider-boundary'

const targetConfig: target.TargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.scopeId">scopeId</a></code> | <code>string</code> | The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.type">type</a></code> | <code>string</code> | The target resource type. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.address">address</a></code> | <code>string</code> | Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.brokeredCredentialSourceIds">brokeredCredentialSourceIds</a></code> | <code>string[]</code> | A list of brokered credential source ID's. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.defaultClientPort">defaultClientPort</a></code> | <code>number</code> | The default client port for this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.defaultPort">defaultPort</a></code> | <code>number</code> | The default port for this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.description">description</a></code> | <code>string</code> | The target description. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.egressWorkerFilter">egressWorkerFilter</a></code> | <code>string</code> | Boolean expression to filter the workers used to access this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.enableSessionRecording">enableSessionRecording</a></code> | <code>boolean \| cdktf.IResolvable</code> | HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.hostSourceIds">hostSourceIds</a></code> | <code>string[]</code> | A list of host source ID's. Cannot be used alongside address. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.ingressWorkerFilter">ingressWorkerFilter</a></code> | <code>string</code> | HCP Only. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.injectedApplicationCredentialSourceIds">injectedApplicationCredentialSourceIds</a></code> | <code>string[]</code> | A list of injected application credential source ID's. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.name">name</a></code> | <code>string</code> | The target name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.sessionConnectionLimit">sessionConnectionLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#session_connection_limit Target#session_connection_limit}. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.sessionMaxSeconds">sessionMaxSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#session_max_seconds Target#session_max_seconds}. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.storageBucketId">storageBucketId</a></code> | <code>string</code> | HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.workerFilter">workerFilter</a></code> | <code>string</code> | Boolean expression to filter the workers for this target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.target.TargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.target.TargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.target.TargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.target.TargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.target.TargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.target.TargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.target.TargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.target.TargetConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#scope_id Target#scope_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.target.TargetConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The target resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#type Target#type}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-boundary.target.TargetConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#address Target#address}

---

##### `brokeredCredentialSourceIds`<sup>Optional</sup> <a name="brokeredCredentialSourceIds" id="@cdktf/provider-boundary.target.TargetConfig.property.brokeredCredentialSourceIds"></a>

```typescript
public readonly brokeredCredentialSourceIds: string[];
```

- *Type:* string[]

A list of brokered credential source ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#brokered_credential_source_ids Target#brokered_credential_source_ids}

---

##### `defaultClientPort`<sup>Optional</sup> <a name="defaultClientPort" id="@cdktf/provider-boundary.target.TargetConfig.property.defaultClientPort"></a>

```typescript
public readonly defaultClientPort: number;
```

- *Type:* number

The default client port for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#default_client_port Target#default_client_port}

---

##### `defaultPort`<sup>Optional</sup> <a name="defaultPort" id="@cdktf/provider-boundary.target.TargetConfig.property.defaultPort"></a>

```typescript
public readonly defaultPort: number;
```

- *Type:* number

The default port for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#default_port Target#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.target.TargetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The target description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#description Target#description}

---

##### `egressWorkerFilter`<sup>Optional</sup> <a name="egressWorkerFilter" id="@cdktf/provider-boundary.target.TargetConfig.property.egressWorkerFilter"></a>

```typescript
public readonly egressWorkerFilter: string;
```

- *Type:* string

Boolean expression to filter the workers used to access this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#egress_worker_filter Target#egress_worker_filter}

---

##### `enableSessionRecording`<sup>Optional</sup> <a name="enableSessionRecording" id="@cdktf/provider-boundary.target.TargetConfig.property.enableSessionRecording"></a>

```typescript
public readonly enableSessionRecording: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#enable_session_recording Target#enable_session_recording}

---

##### `hostSourceIds`<sup>Optional</sup> <a name="hostSourceIds" id="@cdktf/provider-boundary.target.TargetConfig.property.hostSourceIds"></a>

```typescript
public readonly hostSourceIds: string[];
```

- *Type:* string[]

A list of host source ID's. Cannot be used alongside address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#host_source_ids Target#host_source_ids}

---

##### `ingressWorkerFilter`<sup>Optional</sup> <a name="ingressWorkerFilter" id="@cdktf/provider-boundary.target.TargetConfig.property.ingressWorkerFilter"></a>

```typescript
public readonly ingressWorkerFilter: string;
```

- *Type:* string

HCP Only.

Boolean expression to filter the workers a user will connect to when initiating a session against this target

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#ingress_worker_filter Target#ingress_worker_filter}

---

##### `injectedApplicationCredentialSourceIds`<sup>Optional</sup> <a name="injectedApplicationCredentialSourceIds" id="@cdktf/provider-boundary.target.TargetConfig.property.injectedApplicationCredentialSourceIds"></a>

```typescript
public readonly injectedApplicationCredentialSourceIds: string[];
```

- *Type:* string[]

A list of injected application credential source ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#injected_application_credential_source_ids Target#injected_application_credential_source_ids}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.target.TargetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The target name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#name Target#name}

---

##### `sessionConnectionLimit`<sup>Optional</sup> <a name="sessionConnectionLimit" id="@cdktf/provider-boundary.target.TargetConfig.property.sessionConnectionLimit"></a>

```typescript
public readonly sessionConnectionLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#session_connection_limit Target#session_connection_limit}.

---

##### `sessionMaxSeconds`<sup>Optional</sup> <a name="sessionMaxSeconds" id="@cdktf/provider-boundary.target.TargetConfig.property.sessionMaxSeconds"></a>

```typescript
public readonly sessionMaxSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#session_max_seconds Target#session_max_seconds}.

---

##### `storageBucketId`<sup>Optional</sup> <a name="storageBucketId" id="@cdktf/provider-boundary.target.TargetConfig.property.storageBucketId"></a>

```typescript
public readonly storageBucketId: string;
```

- *Type:* string

HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#storage_bucket_id Target#storage_bucket_id}

---

##### `workerFilter`<sup>Optional</sup> <a name="workerFilter" id="@cdktf/provider-boundary.target.TargetConfig.property.workerFilter"></a>

```typescript
public readonly workerFilter: string;
```

- *Type:* string

Boolean expression to filter the workers for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.11/docs/resources/target#worker_filter Target#worker_filter}

---



