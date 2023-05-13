# `boundary_host_catalog_plugin`

Refer to the Terraform Registory for docs: [`boundary_host_catalog_plugin`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin).

# `hostCatalogPlugin` Submodule <a name="`hostCatalogPlugin` Submodule" id="@cdktf/provider-boundary.hostCatalogPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostCatalogPlugin <a name="HostCatalogPlugin" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin boundary_host_catalog_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer"></a>

```typescript
import { hostCatalogPlugin } from '@cdktf/provider-boundary'

new hostCatalogPlugin.HostCatalogPlugin(scope: Construct, id: string, config: HostCatalogPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig">HostCatalogPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig">HostCatalogPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetAttributesJson">resetAttributesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalForceUpdate">resetInternalForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalHmacUsedForSecretsConfigHmac">resetInternalHmacUsedForSecretsConfigHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalSecretsConfigHmac">resetInternalSecretsConfigHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginId">resetPluginId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsHmac">resetSecretsHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsJson">resetSecretsJson</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributesJson` <a name="resetAttributesJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetAttributesJson"></a>

```typescript
public resetAttributesJson(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInternalForceUpdate` <a name="resetInternalForceUpdate" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalForceUpdate"></a>

```typescript
public resetInternalForceUpdate(): void
```

##### `resetInternalHmacUsedForSecretsConfigHmac` <a name="resetInternalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalHmacUsedForSecretsConfigHmac"></a>

```typescript
public resetInternalHmacUsedForSecretsConfigHmac(): void
```

##### `resetInternalSecretsConfigHmac` <a name="resetInternalSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalSecretsConfigHmac"></a>

```typescript
public resetInternalSecretsConfigHmac(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPluginId` <a name="resetPluginId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginId"></a>

```typescript
public resetPluginId(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetSecretsHmac` <a name="resetSecretsHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsHmac"></a>

```typescript
public resetSecretsHmac(): void
```

##### `resetSecretsJson` <a name="resetSecretsJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsJson"></a>

```typescript
public resetSecretsJson(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct"></a>

```typescript
import { hostCatalogPlugin } from '@cdktf/provider-boundary'

hostCatalogPlugin.HostCatalogPlugin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement"></a>

```typescript
import { hostCatalogPlugin } from '@cdktf/provider-boundary'

hostCatalogPlugin.HostCatalogPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource"></a>

```typescript
import { hostCatalogPlugin } from '@cdktf/provider-boundary'

hostCatalogPlugin.HostCatalogPlugin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJsonInput">attributesJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdateInput">internalForceUpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmacInput">internalHmacUsedForSecretsConfigHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmacInput">internalSecretsConfigHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginIdInput">pluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmacInput">secretsHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJsonInput">secretsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJson">attributesJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdate">internalForceUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmac">internalHmacUsedForSecretsConfigHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmac">internalSecretsConfigHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmac">secretsHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJson">secretsJson</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `attributesJsonInput`<sup>Optional</sup> <a name="attributesJsonInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJsonInput"></a>

```typescript
public readonly attributesJsonInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `internalForceUpdateInput`<sup>Optional</sup> <a name="internalForceUpdateInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdateInput"></a>

```typescript
public readonly internalForceUpdateInput: string;
```

- *Type:* string

---

##### `internalHmacUsedForSecretsConfigHmacInput`<sup>Optional</sup> <a name="internalHmacUsedForSecretsConfigHmacInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmacInput"></a>

```typescript
public readonly internalHmacUsedForSecretsConfigHmacInput: string;
```

- *Type:* string

---

##### `internalSecretsConfigHmacInput`<sup>Optional</sup> <a name="internalSecretsConfigHmacInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmacInput"></a>

```typescript
public readonly internalSecretsConfigHmacInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginIdInput"></a>

```typescript
public readonly pluginIdInput: string;
```

- *Type:* string

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `secretsHmacInput`<sup>Optional</sup> <a name="secretsHmacInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmacInput"></a>

```typescript
public readonly secretsHmacInput: string;
```

- *Type:* string

---

##### `secretsJsonInput`<sup>Optional</sup> <a name="secretsJsonInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJsonInput"></a>

```typescript
public readonly secretsJsonInput: string;
```

- *Type:* string

---

##### `attributesJson`<sup>Required</sup> <a name="attributesJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJson"></a>

```typescript
public readonly attributesJson: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalForceUpdate`<sup>Required</sup> <a name="internalForceUpdate" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdate"></a>

```typescript
public readonly internalForceUpdate: string;
```

- *Type:* string

---

##### `internalHmacUsedForSecretsConfigHmac`<sup>Required</sup> <a name="internalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmac"></a>

```typescript
public readonly internalHmacUsedForSecretsConfigHmac: string;
```

- *Type:* string

---

##### `internalSecretsConfigHmac`<sup>Required</sup> <a name="internalSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmac"></a>

```typescript
public readonly internalSecretsConfigHmac: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `secretsHmac`<sup>Required</sup> <a name="secretsHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmac"></a>

```typescript
public readonly secretsHmac: string;
```

- *Type:* string

---

##### `secretsJson`<sup>Required</sup> <a name="secretsJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJson"></a>

```typescript
public readonly secretsJson: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostCatalogPluginConfig <a name="HostCatalogPluginConfig" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.Initializer"></a>

```typescript
import { hostCatalogPlugin } from '@cdktf/provider-boundary'

const hostCatalogPluginConfig: hostCatalogPlugin.HostCatalogPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.scopeId">scopeId</a></code> | <code>string</code> | The scope ID in which the resource is created. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.attributesJson">attributesJson</a></code> | <code>string</code> | The attributes for the host catalog. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.description">description</a></code> | <code>string</code> | The host catalog description. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalForceUpdate">internalForceUpdate</a></code> | <code>string</code> | Internal only. Used to force update so that we can always check the value of secrets. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalHmacUsedForSecretsConfigHmac">internalHmacUsedForSecretsConfigHmac</a></code> | <code>string</code> | Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalSecretsConfigHmac">internalSecretsConfigHmac</a></code> | <code>string</code> | Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.name">name</a></code> | <code>string</code> | The host catalog name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginId">pluginId</a></code> | <code>string</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginName">pluginName</a></code> | <code>string</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsHmac">secretsHmac</a></code> | <code>string</code> | The HMAC'd secrets value returned from the server. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsJson">secretsJson</a></code> | <code>string</code> | The secrets for the host catalog. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The scope ID in which the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#scope_id HostCatalogPlugin#scope_id}

---

##### `attributesJson`<sup>Optional</sup> <a name="attributesJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.attributesJson"></a>

```typescript
public readonly attributesJson: string;
```

- *Type:* string

The attributes for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#attributes_json HostCatalogPlugin#attributes_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The host catalog description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#description HostCatalogPlugin#description}

---

##### `internalForceUpdate`<sup>Optional</sup> <a name="internalForceUpdate" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalForceUpdate"></a>

```typescript
public readonly internalForceUpdate: string;
```

- *Type:* string

Internal only. Used to force update so that we can always check the value of secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#internal_force_update HostCatalogPlugin#internal_force_update}

---

##### `internalHmacUsedForSecretsConfigHmac`<sup>Optional</sup> <a name="internalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalHmacUsedForSecretsConfigHmac"></a>

```typescript
public readonly internalHmacUsedForSecretsConfigHmac: string;
```

- *Type:* string

Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#internal_hmac_used_for_secrets_config_hmac HostCatalogPlugin#internal_hmac_used_for_secrets_config_hmac}

---

##### `internalSecretsConfigHmac`<sup>Optional</sup> <a name="internalSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalSecretsConfigHmac"></a>

```typescript
public readonly internalSecretsConfigHmac: string;
```

- *Type:* string

Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#internal_secrets_config_hmac HostCatalogPlugin#internal_secrets_config_hmac}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The host catalog name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#name HostCatalogPlugin#name}

---

##### `pluginId`<sup>Optional</sup> <a name="pluginId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#plugin_id HostCatalogPlugin#plugin_id}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#plugin_name HostCatalogPlugin#plugin_name}

---

##### `secretsHmac`<sup>Optional</sup> <a name="secretsHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsHmac"></a>

```typescript
public readonly secretsHmac: string;
```

- *Type:* string

The HMAC'd secrets value returned from the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#secrets_hmac HostCatalogPlugin#secrets_hmac}

---

##### `secretsJson`<sup>Optional</sup> <a name="secretsJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsJson"></a>

```typescript
public readonly secretsJson: string;
```

- *Type:* string

The secrets for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the host catalog; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.7/docs/resources/host_catalog_plugin#secrets_json HostCatalogPlugin#secrets_json}

---



