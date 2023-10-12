# `provider`

Refer to the Terraform Registory for docs: [`boundary`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-boundary.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BoundaryProvider <a name="BoundaryProvider" id="@cdktf/provider-boundary.provider.BoundaryProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs boundary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-boundary'

new provider.BoundaryProvider(scope: Construct, id: string, config: BoundaryProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig">BoundaryProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig">BoundaryProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodId">resetAuthMethodId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodLoginName">resetAuthMethodLoginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodPassword">resetAuthMethodPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodLoginName">resetPasswordAuthMethodLoginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodPassword">resetPasswordAuthMethodPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPluginExecutionDir">resetPluginExecutionDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetRecoveryKmsHcl">resetRecoveryKmsHcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetScopeId">resetScopeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetTlsInsecure">resetTlsInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.provider.BoundaryProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.provider.BoundaryProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.provider.BoundaryProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAuthMethodId` <a name="resetAuthMethodId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodId"></a>

```typescript
public resetAuthMethodId(): void
```

##### `resetAuthMethodLoginName` <a name="resetAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodLoginName"></a>

```typescript
public resetAuthMethodLoginName(): void
```

##### `resetAuthMethodPassword` <a name="resetAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodPassword"></a>

```typescript
public resetAuthMethodPassword(): void
```

##### `resetPasswordAuthMethodLoginName` <a name="resetPasswordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodLoginName"></a>

```typescript
public resetPasswordAuthMethodLoginName(): void
```

##### `resetPasswordAuthMethodPassword` <a name="resetPasswordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodPassword"></a>

```typescript
public resetPasswordAuthMethodPassword(): void
```

##### `resetPluginExecutionDir` <a name="resetPluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPluginExecutionDir"></a>

```typescript
public resetPluginExecutionDir(): void
```

##### `resetRecoveryKmsHcl` <a name="resetRecoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetRecoveryKmsHcl"></a>

```typescript
public resetRecoveryKmsHcl(): void
```

##### `resetScopeId` <a name="resetScopeId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetScopeId"></a>

```typescript
public resetScopeId(): void
```

##### `resetTlsInsecure` <a name="resetTlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetTlsInsecure"></a>

```typescript
public resetTlsInsecure(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-boundary'

provider.BoundaryProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-boundary'

provider.BoundaryProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-boundary'

provider.BoundaryProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.addrInput">addrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodIdInput">authMethodIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginNameInput">authMethodLoginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPasswordInput">authMethodPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginNameInput">passwordAuthMethodLoginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPasswordInput">passwordAuthMethodPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDirInput">pluginExecutionDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHclInput">recoveryKmsHclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecureInput">tlsInsecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.addr">addr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodId">authMethodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginName">authMethodLoginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPassword">authMethodPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginName">passwordAuthMethodLoginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPassword">passwordAuthMethodPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDir">pluginExecutionDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHcl">recoveryKmsHcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecure">tlsInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `addrInput`<sup>Optional</sup> <a name="addrInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.addrInput"></a>

```typescript
public readonly addrInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `authMethodIdInput`<sup>Optional</sup> <a name="authMethodIdInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodIdInput"></a>

```typescript
public readonly authMethodIdInput: string;
```

- *Type:* string

---

##### `authMethodLoginNameInput`<sup>Optional</sup> <a name="authMethodLoginNameInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginNameInput"></a>

```typescript
public readonly authMethodLoginNameInput: string;
```

- *Type:* string

---

##### `authMethodPasswordInput`<sup>Optional</sup> <a name="authMethodPasswordInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPasswordInput"></a>

```typescript
public readonly authMethodPasswordInput: string;
```

- *Type:* string

---

##### `passwordAuthMethodLoginNameInput`<sup>Optional</sup> <a name="passwordAuthMethodLoginNameInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginNameInput"></a>

```typescript
public readonly passwordAuthMethodLoginNameInput: string;
```

- *Type:* string

---

##### `passwordAuthMethodPasswordInput`<sup>Optional</sup> <a name="passwordAuthMethodPasswordInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPasswordInput"></a>

```typescript
public readonly passwordAuthMethodPasswordInput: string;
```

- *Type:* string

---

##### `pluginExecutionDirInput`<sup>Optional</sup> <a name="pluginExecutionDirInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDirInput"></a>

```typescript
public readonly pluginExecutionDirInput: string;
```

- *Type:* string

---

##### `recoveryKmsHclInput`<sup>Optional</sup> <a name="recoveryKmsHclInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHclInput"></a>

```typescript
public readonly recoveryKmsHclInput: string;
```

- *Type:* string

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `tlsInsecureInput`<sup>Optional</sup> <a name="tlsInsecureInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecureInput"></a>

```typescript
public readonly tlsInsecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `addr`<sup>Optional</sup> <a name="addr" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.addr"></a>

```typescript
public readonly addr: string;
```

- *Type:* string

---

##### `authMethodId`<sup>Optional</sup> <a name="authMethodId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodId"></a>

```typescript
public readonly authMethodId: string;
```

- *Type:* string

---

##### `authMethodLoginName`<sup>Optional</sup> <a name="authMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginName"></a>

```typescript
public readonly authMethodLoginName: string;
```

- *Type:* string

---

##### `authMethodPassword`<sup>Optional</sup> <a name="authMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPassword"></a>

```typescript
public readonly authMethodPassword: string;
```

- *Type:* string

---

##### `passwordAuthMethodLoginName`<sup>Optional</sup> <a name="passwordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginName"></a>

```typescript
public readonly passwordAuthMethodLoginName: string;
```

- *Type:* string

---

##### `passwordAuthMethodPassword`<sup>Optional</sup> <a name="passwordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPassword"></a>

```typescript
public readonly passwordAuthMethodPassword: string;
```

- *Type:* string

---

##### `pluginExecutionDir`<sup>Optional</sup> <a name="pluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDir"></a>

```typescript
public readonly pluginExecutionDir: string;
```

- *Type:* string

---

##### `recoveryKmsHcl`<sup>Optional</sup> <a name="recoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHcl"></a>

```typescript
public readonly recoveryKmsHcl: string;
```

- *Type:* string

---

##### `scopeId`<sup>Optional</sup> <a name="scopeId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `tlsInsecure`<sup>Optional</sup> <a name="tlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecure"></a>

```typescript
public readonly tlsInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BoundaryProviderConfig <a name="BoundaryProviderConfig" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-boundary'

const boundaryProviderConfig: provider.BoundaryProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.addr">addr</a></code> | <code>string</code> | The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodId">authMethodId</a></code> | <code>string</code> | The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodLoginName">authMethodLoginName</a></code> | <code>string</code> | The auth method login name for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodPassword">authMethodPassword</a></code> | <code>string</code> | The auth method password for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodLoginName">passwordAuthMethodLoginName</a></code> | <code>string</code> | The auth method login name for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodPassword">passwordAuthMethodPassword</a></code> | <code>string</code> | The auth method password for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.pluginExecutionDir">pluginExecutionDir</a></code> | <code>string</code> | Specifies a directory that the Boundary provider can use to write and execute its built-in plugins. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.recoveryKmsHcl">recoveryKmsHcl</a></code> | <code>string</code> | Can be a heredoc string or a path on disk. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.scopeId">scopeId</a></code> | <code>string</code> | The scope ID for the default auth method. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.tlsInsecure">tlsInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, does not validate the Boundary API endpoint certificate. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.token">token</a></code> | <code>string</code> | The Boundary token to use, as a string or path on disk containing just the string. |

---

##### `addr`<sup>Required</sup> <a name="addr" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.addr"></a>

```typescript
public readonly addr: string;
```

- *Type:* string

The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#addr BoundaryProvider#addr}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#alias BoundaryProvider#alias}

---

##### `authMethodId`<sup>Optional</sup> <a name="authMethodId" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodId"></a>

```typescript
public readonly authMethodId: string;
```

- *Type:* string

The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#auth_method_id BoundaryProvider#auth_method_id}

---

##### `authMethodLoginName`<sup>Optional</sup> <a name="authMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodLoginName"></a>

```typescript
public readonly authMethodLoginName: string;
```

- *Type:* string

The auth method login name for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#auth_method_login_name BoundaryProvider#auth_method_login_name}

---

##### `authMethodPassword`<sup>Optional</sup> <a name="authMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodPassword"></a>

```typescript
public readonly authMethodPassword: string;
```

- *Type:* string

The auth method password for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#auth_method_password BoundaryProvider#auth_method_password}

---

##### `passwordAuthMethodLoginName`<sup>Optional</sup> <a name="passwordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodLoginName"></a>

```typescript
public readonly passwordAuthMethodLoginName: string;
```

- *Type:* string

The auth method login name for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#password_auth_method_login_name BoundaryProvider#password_auth_method_login_name}

---

##### `passwordAuthMethodPassword`<sup>Optional</sup> <a name="passwordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodPassword"></a>

```typescript
public readonly passwordAuthMethodPassword: string;
```

- *Type:* string

The auth method password for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#password_auth_method_password BoundaryProvider#password_auth_method_password}

---

##### `pluginExecutionDir`<sup>Optional</sup> <a name="pluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.pluginExecutionDir"></a>

```typescript
public readonly pluginExecutionDir: string;
```

- *Type:* string

Specifies a directory that the Boundary provider can use to write and execute its built-in plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#plugin_execution_dir BoundaryProvider#plugin_execution_dir}

---

##### `recoveryKmsHcl`<sup>Optional</sup> <a name="recoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.recoveryKmsHcl"></a>

```typescript
public readonly recoveryKmsHcl: string;
```

- *Type:* string

Can be a heredoc string or a path on disk.

If set, the string/file will be parsed as HCL and used with the recovery KMS mechanism. While this is set, it will override any other authentication information; the KMS mechanism will always be used. See Boundary's KMS docs for examples: https://boundaryproject.io/docs/configuration/kms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#recovery_kms_hcl BoundaryProvider#recovery_kms_hcl}

---

##### `scopeId`<sup>Optional</sup> <a name="scopeId" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The scope ID for the default auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#scope_id BoundaryProvider#scope_id}

---

##### `tlsInsecure`<sup>Optional</sup> <a name="tlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.tlsInsecure"></a>

```typescript
public readonly tlsInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, does not validate the Boundary API endpoint certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#tls_insecure BoundaryProvider#tls_insecure}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The Boundary token to use, as a string or path on disk containing just the string.

If set, the token read here will be used in place of authenticating with the auth method specified in "auth_method_id", although the recovery KMS mechanism will still override this. Can also be set with the BOUNDARY_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs#token BoundaryProvider#token}

---



