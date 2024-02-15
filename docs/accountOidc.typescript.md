# `accountOidc` Submodule <a name="`accountOidc` Submodule" id="@cdktf/provider-boundary.accountOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountOidc <a name="AccountOidc" id="@cdktf/provider-boundary.accountOidc.AccountOidc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/account_oidc boundary_account_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer"></a>

```typescript
import { accountOidc } from '@cdktf/provider-boundary'

new accountOidc.AccountOidc(scope: Construct, id: string, config: AccountOidcConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig">AccountOidcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig">AccountOidcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.resetSubject">resetSubject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.accountOidc.AccountOidc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.accountOidc.AccountOidc.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.accountOidc.AccountOidc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.accountOidc.AccountOidc.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.accountOidc.AccountOidc.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.accountOidc.AccountOidc.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.accountOidc.AccountOidc.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.accountOidc.AccountOidc.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.accountOidc.AccountOidc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.accountOidc.AccountOidc.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.accountOidc.AccountOidc.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.accountOidc.AccountOidc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.accountOidc.AccountOidc.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.accountOidc.AccountOidc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.accountOidc.AccountOidc.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.accountOidc.AccountOidc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.accountOidc.AccountOidc.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.accountOidc.AccountOidc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.accountOidc.AccountOidc.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-boundary.accountOidc.AccountOidc.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.accountOidc.AccountOidc.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-boundary.accountOidc.AccountOidc.resetSubject"></a>

```typescript
public resetSubject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountOidc resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isConstruct"></a>

```typescript
import { accountOidc } from '@cdktf/provider-boundary'

accountOidc.AccountOidc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformElement"></a>

```typescript
import { accountOidc } from '@cdktf/provider-boundary'

accountOidc.AccountOidc.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformResource"></a>

```typescript
import { accountOidc } from '@cdktf/provider-boundary'

accountOidc.AccountOidc.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.accountOidc.AccountOidc.generateConfigForImport"></a>

```typescript
import { accountOidc } from '@cdktf/provider-boundary'

accountOidc.AccountOidc.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccountOidc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.accountOidc.AccountOidc.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountOidc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountOidc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/account_oidc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.accountOidc.AccountOidc.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountOidc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.authMethodIdInput">authMethodIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.authMethodId">authMethodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.subject">subject</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `authMethodIdInput`<sup>Optional</sup> <a name="authMethodIdInput" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.authMethodIdInput"></a>

```typescript
public readonly authMethodIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `authMethodId`<sup>Required</sup> <a name="authMethodId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.authMethodId"></a>

```typescript
public readonly authMethodId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountOidcConfig <a name="AccountOidcConfig" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.Initializer"></a>

```typescript
import { accountOidc } from '@cdktf/provider-boundary'

const accountOidcConfig: accountOidc.AccountOidcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.authMethodId">authMethodId</a></code> | <code>string</code> | The resource ID for the auth method. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.description">description</a></code> | <code>string</code> | The account description. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.issuer">issuer</a></code> | <code>string</code> | The OIDC issuer. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.name">name</a></code> | <code>string</code> | The account name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.subject">subject</a></code> | <code>string</code> | The OIDC subject. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authMethodId`<sup>Required</sup> <a name="authMethodId" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.authMethodId"></a>

```typescript
public readonly authMethodId: string;
```

- *Type:* string

The resource ID for the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/account_oidc#auth_method_id AccountOidc#auth_method_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The account description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/account_oidc#description AccountOidc#description}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The OIDC issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/account_oidc#issuer AccountOidc#issuer}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The account name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/account_oidc#name AccountOidc#name}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

The OIDC subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/account_oidc#subject AccountOidc#subject}

---



