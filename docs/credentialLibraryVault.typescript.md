# `boundary_credential_library_vault`

Refer to the Terraform Registory for docs: [`boundary_credential_library_vault`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/credential_library_vault).

# `credentialLibraryVault` Submodule <a name="`credentialLibraryVault` Submodule" id="@cdktf/provider-boundary.credentialLibraryVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialLibraryVault <a name="CredentialLibraryVault" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/credential_library_vault boundary_credential_library_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer"></a>

```typescript
import { credentialLibraryVault } from '@cdktf/provider-boundary'

new credentialLibraryVault.CredentialLibraryVault(scope: Construct, id: string, config: CredentialLibraryVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig">CredentialLibraryVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig">CredentialLibraryVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialMappingOverrides">resetCredentialMappingOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpRequestBody">resetHttpRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCredentialMappingOverrides` <a name="resetCredentialMappingOverrides" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialMappingOverrides"></a>

```typescript
public resetCredentialMappingOverrides(): void
```

##### `resetCredentialType` <a name="resetCredentialType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialType"></a>

```typescript
public resetCredentialType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetHttpRequestBody` <a name="resetHttpRequestBody" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpRequestBody"></a>

```typescript
public resetHttpRequestBody(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isConstruct"></a>

```typescript
import { credentialLibraryVault } from '@cdktf/provider-boundary'

credentialLibraryVault.CredentialLibraryVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformElement"></a>

```typescript
import { credentialLibraryVault } from '@cdktf/provider-boundary'

credentialLibraryVault.CredentialLibraryVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformResource"></a>

```typescript
import { credentialLibraryVault } from '@cdktf/provider-boundary'

credentialLibraryVault.CredentialLibraryVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverridesInput">credentialMappingOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreIdInput">credentialStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBodyInput">httpRequestBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverrides">credentialMappingOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreId">credentialStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBody">httpRequestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `credentialMappingOverridesInput`<sup>Optional</sup> <a name="credentialMappingOverridesInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverridesInput"></a>

```typescript
public readonly credentialMappingOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `credentialStoreIdInput`<sup>Optional</sup> <a name="credentialStoreIdInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreIdInput"></a>

```typescript
public readonly credentialStoreIdInput: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `httpRequestBodyInput`<sup>Optional</sup> <a name="httpRequestBodyInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBodyInput"></a>

```typescript
public readonly httpRequestBodyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `credentialMappingOverrides`<sup>Required</sup> <a name="credentialMappingOverrides" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverrides"></a>

```typescript
public readonly credentialMappingOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreId"></a>

```typescript
public readonly credentialStoreId: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `httpRequestBody`<sup>Required</sup> <a name="httpRequestBody" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBody"></a>

```typescript
public readonly httpRequestBody: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialLibraryVaultConfig <a name="CredentialLibraryVaultConfig" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.Initializer"></a>

```typescript
import { credentialLibraryVault } from '@cdktf/provider-boundary'

const credentialLibraryVaultConfig: credentialLibraryVault.CredentialLibraryVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialStoreId">credentialStoreId</a></code> | <code>string</code> | The ID of the credential store that this library belongs to. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.path">path</a></code> | <code>string</code> | The path in Vault to request credentials from. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialMappingOverrides">credentialMappingOverrides</a></code> | <code>{[ key: string ]: string}</code> | The credential mapping override. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialType">credentialType</a></code> | <code>string</code> | The type of credential the library generates. Cannot be updated on an existing resource. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.description">description</a></code> | <code>string</code> | The Vault credential library description. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | The HTTP method the library uses when requesting credentials from Vault. Defaults to 'GET'. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpRequestBody">httpRequestBody</a></code> | <code>string</code> | The body of the HTTP request the library sends to Vault when requesting credentials. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.name">name</a></code> | <code>string</code> | The Vault credential library name. Defaults to the resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialStoreId"></a>

```typescript
public readonly credentialStoreId: string;
```

- *Type:* string

The ID of the credential store that this library belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/credential_library_vault#credential_store_id CredentialLibraryVault#credential_store_id}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path in Vault to request credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/credential_library_vault#path CredentialLibraryVault#path}

---

##### `credentialMappingOverrides`<sup>Optional</sup> <a name="credentialMappingOverrides" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialMappingOverrides"></a>

```typescript
public readonly credentialMappingOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The credential mapping override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/credential_library_vault#credential_mapping_overrides CredentialLibraryVault#credential_mapping_overrides}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

The type of credential the library generates. Cannot be updated on an existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/credential_library_vault#credential_type CredentialLibraryVault#credential_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The Vault credential library description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/credential_library_vault#description CredentialLibraryVault#description}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

The HTTP method the library uses when requesting credentials from Vault. Defaults to 'GET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/credential_library_vault#http_method CredentialLibraryVault#http_method}

---

##### `httpRequestBody`<sup>Optional</sup> <a name="httpRequestBody" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpRequestBody"></a>

```typescript
public readonly httpRequestBody: string;
```

- *Type:* string

The body of the HTTP request the library sends to Vault when requesting credentials.

Only valid if `http_method` is set to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/credential_library_vault#http_request_body CredentialLibraryVault#http_request_body}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Vault credential library name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/credential_library_vault#name CredentialLibraryVault#name}

---



