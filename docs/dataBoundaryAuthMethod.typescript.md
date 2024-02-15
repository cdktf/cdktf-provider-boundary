# `dataBoundaryAuthMethod` Submodule <a name="`dataBoundaryAuthMethod` Submodule" id="@cdktf/provider-boundary.dataBoundaryAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataBoundaryAuthMethod <a name="DataBoundaryAuthMethod" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/data-sources/auth_method boundary_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer"></a>

```typescript
import { dataBoundaryAuthMethod } from '@cdktf/provider-boundary'

new dataBoundaryAuthMethod.DataBoundaryAuthMethod(scope: Construct, id: string, config: DataBoundaryAuthMethodConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig">DataBoundaryAuthMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig">DataBoundaryAuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.resetScopeId">resetScopeId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetScopeId` <a name="resetScopeId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.resetScopeId"></a>

```typescript
public resetScopeId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataBoundaryAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isConstruct"></a>

```typescript
import { dataBoundaryAuthMethod } from '@cdktf/provider-boundary'

dataBoundaryAuthMethod.DataBoundaryAuthMethod.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformElement"></a>

```typescript
import { dataBoundaryAuthMethod } from '@cdktf/provider-boundary'

dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformDataSource"></a>

```typescript
import { dataBoundaryAuthMethod } from '@cdktf/provider-boundary'

dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport"></a>

```typescript
import { dataBoundaryAuthMethod } from '@cdktf/provider-boundary'

dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataBoundaryAuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataBoundaryAuthMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataBoundaryAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/data-sources/auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataBoundaryAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList">DataBoundaryAuthMethodScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scope"></a>

```typescript
public readonly scope: DataBoundaryAuthMethodScopeList;
```

- *Type:* <a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList">DataBoundaryAuthMethodScopeList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethod.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataBoundaryAuthMethodConfig <a name="DataBoundaryAuthMethodConfig" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.Initializer"></a>

```typescript
import { dataBoundaryAuthMethod } from '@cdktf/provider-boundary'

const dataBoundaryAuthMethodConfig: dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.name">name</a></code> | <code>string</code> | The name of the auth method to retrieve. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.scopeId">scopeId</a></code> | <code>string</code> | The scope ID in which the resource is created. Defaults `global` if unset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the auth method to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/data-sources/auth_method#name DataBoundaryAuthMethod#name}

---

##### `scopeId`<sup>Optional</sup> <a name="scopeId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The scope ID in which the resource is created. Defaults `global` if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/data-sources/auth_method#scope_id DataBoundaryAuthMethod#scope_id}

---

### DataBoundaryAuthMethodScope <a name="DataBoundaryAuthMethodScope" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScope.Initializer"></a>

```typescript
import { dataBoundaryAuthMethod } from '@cdktf/provider-boundary'

const dataBoundaryAuthMethodScope: dataBoundaryAuthMethod.DataBoundaryAuthMethodScope = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataBoundaryAuthMethodScopeList <a name="DataBoundaryAuthMethodScopeList" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer"></a>

```typescript
import { dataBoundaryAuthMethod } from '@cdktf/provider-boundary'

new dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.get"></a>

```typescript
public get(index: number): DataBoundaryAuthMethodScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataBoundaryAuthMethodScopeOutputReference <a name="DataBoundaryAuthMethodScopeOutputReference" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer"></a>

```typescript
import { dataBoundaryAuthMethod } from '@cdktf/provider-boundary'

new dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.parentScopeId">parentScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScope">DataBoundaryAuthMethodScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentScopeId`<sup>Required</sup> <a name="parentScopeId" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.parentScopeId"></a>

```typescript
public readonly parentScopeId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataBoundaryAuthMethodScope;
```

- *Type:* <a href="#@cdktf/provider-boundary.dataBoundaryAuthMethod.DataBoundaryAuthMethodScope">DataBoundaryAuthMethodScope</a>

---



