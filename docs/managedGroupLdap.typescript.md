# `managedGroupLdap` Submodule <a name="`managedGroupLdap` Submodule" id="@cdktf/provider-boundary.managedGroupLdap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedGroupLdap <a name="ManagedGroupLdap" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/managed_group_ldap boundary_managed_group_ldap}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer"></a>

```typescript
import { managedGroupLdap } from '@cdktf/provider-boundary'

new managedGroupLdap.ManagedGroupLdap(scope: Construct, id: string, config: ManagedGroupLdapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig">ManagedGroupLdapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig">ManagedGroupLdapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedGroupLdap resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isConstruct"></a>

```typescript
import { managedGroupLdap } from '@cdktf/provider-boundary'

managedGroupLdap.ManagedGroupLdap.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformElement"></a>

```typescript
import { managedGroupLdap } from '@cdktf/provider-boundary'

managedGroupLdap.ManagedGroupLdap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformResource"></a>

```typescript
import { managedGroupLdap } from '@cdktf/provider-boundary'

managedGroupLdap.ManagedGroupLdap.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.generateConfigForImport"></a>

```typescript
import { managedGroupLdap } from '@cdktf/provider-boundary'

managedGroupLdap.ManagedGroupLdap.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedGroupLdap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedGroupLdap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedGroupLdap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/managed_group_ldap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedGroupLdap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.authMethodIdInput">authMethodIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.groupNamesInput">groupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.authMethodId">authMethodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.groupNames">groupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `authMethodIdInput`<sup>Optional</sup> <a name="authMethodIdInput" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.authMethodIdInput"></a>

```typescript
public readonly authMethodIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `groupNamesInput`<sup>Optional</sup> <a name="groupNamesInput" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.groupNamesInput"></a>

```typescript
public readonly groupNamesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `authMethodId`<sup>Required</sup> <a name="authMethodId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.authMethodId"></a>

```typescript
public readonly authMethodId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `groupNames`<sup>Required</sup> <a name="groupNames" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.groupNames"></a>

```typescript
public readonly groupNames: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedGroupLdapConfig <a name="ManagedGroupLdapConfig" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.Initializer"></a>

```typescript
import { managedGroupLdap } from '@cdktf/provider-boundary'

const managedGroupLdapConfig: managedGroupLdap.ManagedGroupLdapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.authMethodId">authMethodId</a></code> | <code>string</code> | The resource ID for the auth method. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.groupNames">groupNames</a></code> | <code>string[]</code> | The list of groups that make up the managed group. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.description">description</a></code> | <code>string</code> | The managed group description. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.name">name</a></code> | <code>string</code> | The managed group name. Defaults to the resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authMethodId`<sup>Required</sup> <a name="authMethodId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.authMethodId"></a>

```typescript
public readonly authMethodId: string;
```

- *Type:* string

The resource ID for the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/managed_group_ldap#auth_method_id ManagedGroupLdap#auth_method_id}

---

##### `groupNames`<sup>Required</sup> <a name="groupNames" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.groupNames"></a>

```typescript
public readonly groupNames: string[];
```

- *Type:* string[]

The list of groups that make up the managed group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/managed_group_ldap#group_names ManagedGroupLdap#group_names}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The managed group description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/managed_group_ldap#description ManagedGroupLdap#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The managed group name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/managed_group_ldap#name ManagedGroupLdap#name}

---



