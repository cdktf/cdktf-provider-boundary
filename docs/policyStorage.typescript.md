# `policyStorage` Submodule <a name="`policyStorage` Submodule" id="@cdktf/provider-boundary.policyStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyStorage <a name="PolicyStorage" id="@cdktf/provider-boundary.policyStorage.PolicyStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage boundary_policy_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer"></a>

```typescript
import { policyStorage } from '@cdktf/provider-boundary'

new policyStorage.PolicyStorage(scope: Construct, id: string, config: PolicyStorageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig">PolicyStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig">PolicyStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterDays">resetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterOverridable">resetDeleteAfterOverridable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForDays">resetRetainForDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForOverridable">resetRetainForOverridable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDeleteAfterDays` <a name="resetDeleteAfterDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterDays"></a>

```typescript
public resetDeleteAfterDays(): void
```

##### `resetDeleteAfterOverridable` <a name="resetDeleteAfterOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterOverridable"></a>

```typescript
public resetDeleteAfterOverridable(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRetainForDays` <a name="resetRetainForDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForDays"></a>

```typescript
public resetRetainForDays(): void
```

##### `resetRetainForOverridable` <a name="resetRetainForOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForOverridable"></a>

```typescript
public resetRetainForOverridable(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyStorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct"></a>

```typescript
import { policyStorage } from '@cdktf/provider-boundary'

policyStorage.PolicyStorage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement"></a>

```typescript
import { policyStorage } from '@cdktf/provider-boundary'

policyStorage.PolicyStorage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource"></a>

```typescript
import { policyStorage } from '@cdktf/provider-boundary'

policyStorage.PolicyStorage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport"></a>

```typescript
import { policyStorage } from '@cdktf/provider-boundary'

policyStorage.PolicyStorage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDaysInput">deleteAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridableInput">deleteAfterOverridableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDaysInput">retainForDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridableInput">retainForOverridableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDays">deleteAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridable">deleteAfterOverridable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDays">retainForDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridable">retainForOverridable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `deleteAfterDaysInput`<sup>Optional</sup> <a name="deleteAfterDaysInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDaysInput"></a>

```typescript
public readonly deleteAfterDaysInput: number;
```

- *Type:* number

---

##### `deleteAfterOverridableInput`<sup>Optional</sup> <a name="deleteAfterOverridableInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridableInput"></a>

```typescript
public readonly deleteAfterOverridableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retainForDaysInput`<sup>Optional</sup> <a name="retainForDaysInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDaysInput"></a>

```typescript
public readonly retainForDaysInput: number;
```

- *Type:* number

---

##### `retainForOverridableInput`<sup>Optional</sup> <a name="retainForOverridableInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridableInput"></a>

```typescript
public readonly retainForOverridableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `deleteAfterDays`<sup>Required</sup> <a name="deleteAfterDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDays"></a>

```typescript
public readonly deleteAfterDays: number;
```

- *Type:* number

---

##### `deleteAfterOverridable`<sup>Required</sup> <a name="deleteAfterOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridable"></a>

```typescript
public readonly deleteAfterOverridable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retainForDays`<sup>Required</sup> <a name="retainForDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDays"></a>

```typescript
public readonly retainForDays: number;
```

- *Type:* number

---

##### `retainForOverridable`<sup>Required</sup> <a name="retainForOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridable"></a>

```typescript
public readonly retainForOverridable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyStorageConfig <a name="PolicyStorageConfig" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.Initializer"></a>

```typescript
import { policyStorage } from '@cdktf/provider-boundary'

const policyStorageConfig: policyStorage.PolicyStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.scopeId">scopeId</a></code> | <code>string</code> | The scope for this policy. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterDays">deleteAfterDays</a></code> | <code>number</code> | The number of days after which a session recording will be automatically deleted. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterOverridable">deleteAfterOverridable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the associated delete_after_days value can be overridden by org scopes. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.description">description</a></code> | <code>string</code> | The policy description. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.name">name</a></code> | <code>string</code> | The policy name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForDays">retainForDays</a></code> | <code>number</code> | The number of days a session recording is required to be stored. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForOverridable">retainForOverridable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the associated retain_for_days value can be overridden by org scopes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The scope for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#scope_id PolicyStorage#scope_id}

---

##### `deleteAfterDays`<sup>Optional</sup> <a name="deleteAfterDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterDays"></a>

```typescript
public readonly deleteAfterDays: number;
```

- *Type:* number

The number of days after which a session recording will be automatically deleted.

Defaults to 0: never automatically delete. However, delete_after_days and retain_for_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#delete_after_days PolicyStorage#delete_after_days}

---

##### `deleteAfterOverridable`<sup>Optional</sup> <a name="deleteAfterOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterOverridable"></a>

```typescript
public readonly deleteAfterOverridable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the associated delete_after_days value can be overridden by org scopes.

Note: if the associated delete_after_days value is 0, overridable is ignored

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#delete_after_overridable PolicyStorage#delete_after_overridable}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The policy description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#description PolicyStorage#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The policy name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#name PolicyStorage#name}

---

##### `retainForDays`<sup>Optional</sup> <a name="retainForDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForDays"></a>

```typescript
public readonly retainForDays: number;
```

- *Type:* number

The number of days a session recording is required to be stored.

Defaults to 0: allow deletions at any time. However, retain_for_days and delete_after_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#retain_for_days PolicyStorage#retain_for_days}

---

##### `retainForOverridable`<sup>Optional</sup> <a name="retainForOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForOverridable"></a>

```typescript
public readonly retainForOverridable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the associated retain_for_days value can be overridden by org scopes.

Note: if the associated retain_for_days value is 0, overridable is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#retain_for_overridable PolicyStorage#retain_for_overridable}

---



