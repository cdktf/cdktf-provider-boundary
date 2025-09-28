# `credentialUsernamePasswordDomain` Submodule <a name="`credentialUsernamePasswordDomain` Submodule" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialUsernamePasswordDomain <a name="CredentialUsernamePasswordDomain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain boundary_credential_username_password_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer"></a>

```typescript
import { credentialUsernamePasswordDomain } from '@cdktf/provider-boundary'

new credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain(scope: Construct, id: string, config: CredentialUsernamePasswordDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig">CredentialUsernamePasswordDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig">CredentialUsernamePasswordDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetName"></a>

```typescript
public resetName(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialUsernamePasswordDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isConstruct"></a>

```typescript
import { credentialUsernamePasswordDomain } from '@cdktf/provider-boundary'

credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement"></a>

```typescript
import { credentialUsernamePasswordDomain } from '@cdktf/provider-boundary'

credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource"></a>

```typescript
import { credentialUsernamePasswordDomain } from '@cdktf/provider-boundary'

credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport"></a>

```typescript
import { credentialUsernamePasswordDomain } from '@cdktf/provider-boundary'

credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CredentialUsernamePasswordDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CredentialUsernamePasswordDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CredentialUsernamePasswordDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CredentialUsernamePasswordDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordHmac">passwordHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreIdInput">credentialStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreId">credentialStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `passwordHmac`<sup>Required</sup> <a name="passwordHmac" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordHmac"></a>

```typescript
public readonly passwordHmac: string;
```

- *Type:* string

---

##### `credentialStoreIdInput`<sup>Optional</sup> <a name="credentialStoreIdInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreIdInput"></a>

```typescript
public readonly credentialStoreIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreId"></a>

```typescript
public readonly credentialStoreId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialUsernamePasswordDomainConfig <a name="CredentialUsernamePasswordDomainConfig" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.Initializer"></a>

```typescript
import { credentialUsernamePasswordDomain } from '@cdktf/provider-boundary'

const credentialUsernamePasswordDomainConfig: credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.credentialStoreId">credentialStoreId</a></code> | <code>string</code> | The credential store in which to save this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.password">password</a></code> | <code>string</code> | The password of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.description">description</a></code> | <code>string</code> | The description of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.domain">domain</a></code> | <code>string</code> | The domain of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.name">name</a></code> | <code>string</code> | The name of this username-password-domain credential. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.username">username</a></code> | <code>string</code> | This field is required even though it is marked as optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.credentialStoreId"></a>

```typescript
public readonly credentialStoreId: string;
```

- *Type:* string

The credential store in which to save this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#credential_store_id CredentialUsernamePasswordDomain#credential_store_id}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password of this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#password CredentialUsernamePasswordDomain#password}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#description CredentialUsernamePasswordDomain#description}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The domain of this username-password-domain credential.

This field is required unless provided as part of the username field instead (see username field description).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#domain CredentialUsernamePasswordDomain#domain}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this username-password-domain credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#name CredentialUsernamePasswordDomain#name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

This field is required even though it is marked as optional.

The username of this username-password-domain credential. Can also contain a domain if provided as username@domain or domain\username

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#username CredentialUsernamePasswordDomain#username}

---



