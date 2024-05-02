# `hostCatalogPlugin` Submodule <a name="`hostCatalogPlugin` Submodule" id="@cdktf/provider-boundary.hostCatalogPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostCatalogPlugin <a name="HostCatalogPlugin" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin boundary_host_catalog_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_catalog_plugin.HostCatalogPlugin;

HostCatalogPlugin.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .scopeId(java.lang.String)
//  .attributesJson(java.lang.String)
//  .description(java.lang.String)
//  .internalForceUpdate(java.lang.String)
//  .internalHmacUsedForSecretsConfigHmac(java.lang.String)
//  .internalSecretsConfigHmac(java.lang.String)
//  .name(java.lang.String)
//  .pluginId(java.lang.String)
//  .pluginName(java.lang.String)
//  .secretsHmac(java.lang.String)
//  .secretsJson(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope ID in which the resource is created. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.attributesJson">attributesJson</a></code> | <code>java.lang.String</code> | The attributes for the host catalog. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The host catalog description. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalForceUpdate">internalForceUpdate</a></code> | <code>java.lang.String</code> | Internal only. Used to force update so that we can always check the value of secrets. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalHmacUsedForSecretsConfigHmac">internalHmacUsedForSecretsConfigHmac</a></code> | <code>java.lang.String</code> | Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalSecretsConfigHmac">internalSecretsConfigHmac</a></code> | <code>java.lang.String</code> | Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The host catalog name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.pluginId">pluginId</a></code> | <code>java.lang.String</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.pluginName">pluginName</a></code> | <code>java.lang.String</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.secretsHmac">secretsHmac</a></code> | <code>java.lang.String</code> | The HMAC'd secrets value returned from the server. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.secretsJson">secretsJson</a></code> | <code>java.lang.String</code> | The secrets for the host catalog. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

The scope ID in which the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#scope_id HostCatalogPlugin#scope_id}

---

##### `attributesJson`<sup>Optional</sup> <a name="attributesJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.attributesJson"></a>

- *Type:* java.lang.String

The attributes for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#attributes_json HostCatalogPlugin#attributes_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The host catalog description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#description HostCatalogPlugin#description}

---

##### `internalForceUpdate`<sup>Optional</sup> <a name="internalForceUpdate" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalForceUpdate"></a>

- *Type:* java.lang.String

Internal only. Used to force update so that we can always check the value of secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#internal_force_update HostCatalogPlugin#internal_force_update}

---

##### `internalHmacUsedForSecretsConfigHmac`<sup>Optional</sup> <a name="internalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalHmacUsedForSecretsConfigHmac"></a>

- *Type:* java.lang.String

Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#internal_hmac_used_for_secrets_config_hmac HostCatalogPlugin#internal_hmac_used_for_secrets_config_hmac}

---

##### `internalSecretsConfigHmac`<sup>Optional</sup> <a name="internalSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.internalSecretsConfigHmac"></a>

- *Type:* java.lang.String

Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#internal_secrets_config_hmac HostCatalogPlugin#internal_secrets_config_hmac}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The host catalog name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#name HostCatalogPlugin#name}

---

##### `pluginId`<sup>Optional</sup> <a name="pluginId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.pluginId"></a>

- *Type:* java.lang.String

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#plugin_id HostCatalogPlugin#plugin_id}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.pluginName"></a>

- *Type:* java.lang.String

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#plugin_name HostCatalogPlugin#plugin_name}

---

##### `secretsHmac`<sup>Optional</sup> <a name="secretsHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.secretsHmac"></a>

- *Type:* java.lang.String

The HMAC'd secrets value returned from the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#secrets_hmac HostCatalogPlugin#secrets_hmac}

---

##### `secretsJson`<sup>Optional</sup> <a name="secretsJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.Initializer.parameter.secretsJson"></a>

- *Type:* java.lang.String

The secrets for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the host catalog; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#secrets_json HostCatalogPlugin#secrets_json}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAttributesJson` <a name="resetAttributesJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetAttributesJson"></a>

```java
public void resetAttributesJson()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInternalForceUpdate` <a name="resetInternalForceUpdate" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalForceUpdate"></a>

```java
public void resetInternalForceUpdate()
```

##### `resetInternalHmacUsedForSecretsConfigHmac` <a name="resetInternalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalHmacUsedForSecretsConfigHmac"></a>

```java
public void resetInternalHmacUsedForSecretsConfigHmac()
```

##### `resetInternalSecretsConfigHmac` <a name="resetInternalSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetInternalSecretsConfigHmac"></a>

```java
public void resetInternalSecretsConfigHmac()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetName"></a>

```java
public void resetName()
```

##### `resetPluginId` <a name="resetPluginId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginId"></a>

```java
public void resetPluginId()
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetPluginName"></a>

```java
public void resetPluginName()
```

##### `resetSecretsHmac` <a name="resetSecretsHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsHmac"></a>

```java
public void resetSecretsHmac()
```

##### `resetSecretsJson` <a name="resetSecretsJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.resetSecretsJson"></a>

```java
public void resetSecretsJson()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HostCatalogPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_catalog_plugin.HostCatalogPlugin;

HostCatalogPlugin.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_catalog_plugin.HostCatalogPlugin;

HostCatalogPlugin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_catalog_plugin.HostCatalogPlugin;

HostCatalogPlugin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_catalog_plugin.HostCatalogPlugin;

HostCatalogPlugin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HostCatalogPlugin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HostCatalogPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HostCatalogPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HostCatalogPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HostCatalogPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJsonInput">attributesJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdateInput">internalForceUpdateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmacInput">internalHmacUsedForSecretsConfigHmacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmacInput">internalSecretsConfigHmacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginIdInput">pluginIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginNameInput">pluginNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmacInput">secretsHmacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJsonInput">secretsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJson">attributesJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdate">internalForceUpdate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmac">internalHmacUsedForSecretsConfigHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmac">internalSecretsConfigHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmac">secretsHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJson">secretsJson</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `attributesJsonInput`<sup>Optional</sup> <a name="attributesJsonInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJsonInput"></a>

```java
public java.lang.String getAttributesJsonInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `internalForceUpdateInput`<sup>Optional</sup> <a name="internalForceUpdateInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdateInput"></a>

```java
public java.lang.String getInternalForceUpdateInput();
```

- *Type:* java.lang.String

---

##### `internalHmacUsedForSecretsConfigHmacInput`<sup>Optional</sup> <a name="internalHmacUsedForSecretsConfigHmacInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmacInput"></a>

```java
public java.lang.String getInternalHmacUsedForSecretsConfigHmacInput();
```

- *Type:* java.lang.String

---

##### `internalSecretsConfigHmacInput`<sup>Optional</sup> <a name="internalSecretsConfigHmacInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmacInput"></a>

```java
public java.lang.String getInternalSecretsConfigHmacInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginIdInput"></a>

```java
public java.lang.String getPluginIdInput();
```

- *Type:* java.lang.String

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginNameInput"></a>

```java
public java.lang.String getPluginNameInput();
```

- *Type:* java.lang.String

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `secretsHmacInput`<sup>Optional</sup> <a name="secretsHmacInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmacInput"></a>

```java
public java.lang.String getSecretsHmacInput();
```

- *Type:* java.lang.String

---

##### `secretsJsonInput`<sup>Optional</sup> <a name="secretsJsonInput" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJsonInput"></a>

```java
public java.lang.String getSecretsJsonInput();
```

- *Type:* java.lang.String

---

##### `attributesJson`<sup>Required</sup> <a name="attributesJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.attributesJson"></a>

```java
public java.lang.String getAttributesJson();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalForceUpdate`<sup>Required</sup> <a name="internalForceUpdate" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalForceUpdate"></a>

```java
public java.lang.String getInternalForceUpdate();
```

- *Type:* java.lang.String

---

##### `internalHmacUsedForSecretsConfigHmac`<sup>Required</sup> <a name="internalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalHmacUsedForSecretsConfigHmac"></a>

```java
public java.lang.String getInternalHmacUsedForSecretsConfigHmac();
```

- *Type:* java.lang.String

---

##### `internalSecretsConfigHmac`<sup>Required</sup> <a name="internalSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.internalSecretsConfigHmac"></a>

```java
public java.lang.String getInternalSecretsConfigHmac();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

##### `secretsHmac`<sup>Required</sup> <a name="secretsHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsHmac"></a>

```java
public java.lang.String getSecretsHmac();
```

- *Type:* java.lang.String

---

##### `secretsJson`<sup>Required</sup> <a name="secretsJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.secretsJson"></a>

```java
public java.lang.String getSecretsJson();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPlugin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HostCatalogPluginConfig <a name="HostCatalogPluginConfig" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_catalog_plugin.HostCatalogPluginConfig;

HostCatalogPluginConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .scopeId(java.lang.String)
//  .attributesJson(java.lang.String)
//  .description(java.lang.String)
//  .internalForceUpdate(java.lang.String)
//  .internalHmacUsedForSecretsConfigHmac(java.lang.String)
//  .internalSecretsConfigHmac(java.lang.String)
//  .name(java.lang.String)
//  .pluginId(java.lang.String)
//  .pluginName(java.lang.String)
//  .secretsHmac(java.lang.String)
//  .secretsJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope ID in which the resource is created. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.attributesJson">attributesJson</a></code> | <code>java.lang.String</code> | The attributes for the host catalog. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.description">description</a></code> | <code>java.lang.String</code> | The host catalog description. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalForceUpdate">internalForceUpdate</a></code> | <code>java.lang.String</code> | Internal only. Used to force update so that we can always check the value of secrets. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalHmacUsedForSecretsConfigHmac">internalHmacUsedForSecretsConfigHmac</a></code> | <code>java.lang.String</code> | Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalSecretsConfigHmac">internalSecretsConfigHmac</a></code> | <code>java.lang.String</code> | Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.name">name</a></code> | <code>java.lang.String</code> | The host catalog name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsHmac">secretsHmac</a></code> | <code>java.lang.String</code> | The HMAC'd secrets value returned from the server. |
| <code><a href="#@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsJson">secretsJson</a></code> | <code>java.lang.String</code> | The secrets for the host catalog. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

The scope ID in which the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#scope_id HostCatalogPlugin#scope_id}

---

##### `attributesJson`<sup>Optional</sup> <a name="attributesJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.attributesJson"></a>

```java
public java.lang.String getAttributesJson();
```

- *Type:* java.lang.String

The attributes for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#attributes_json HostCatalogPlugin#attributes_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The host catalog description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#description HostCatalogPlugin#description}

---

##### `internalForceUpdate`<sup>Optional</sup> <a name="internalForceUpdate" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalForceUpdate"></a>

```java
public java.lang.String getInternalForceUpdate();
```

- *Type:* java.lang.String

Internal only. Used to force update so that we can always check the value of secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#internal_force_update HostCatalogPlugin#internal_force_update}

---

##### `internalHmacUsedForSecretsConfigHmac`<sup>Optional</sup> <a name="internalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalHmacUsedForSecretsConfigHmac"></a>

```java
public java.lang.String getInternalHmacUsedForSecretsConfigHmac();
```

- *Type:* java.lang.String

Internal only. The Boundary-provided HMAC used to calculate the current value of the HMAC'd config. Used for drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#internal_hmac_used_for_secrets_config_hmac HostCatalogPlugin#internal_hmac_used_for_secrets_config_hmac}

---

##### `internalSecretsConfigHmac`<sup>Optional</sup> <a name="internalSecretsConfigHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.internalSecretsConfigHmac"></a>

```java
public java.lang.String getInternalSecretsConfigHmac();
```

- *Type:* java.lang.String

Internal only. HMAC of (serverSecretsHmac + config secrets). Used for proper secrets handling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#internal_secrets_config_hmac HostCatalogPlugin#internal_secrets_config_hmac}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The host catalog name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#name HostCatalogPlugin#name}

---

##### `pluginId`<sup>Optional</sup> <a name="pluginId" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#plugin_id HostCatalogPlugin#plugin_id}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#plugin_name HostCatalogPlugin#plugin_name}

---

##### `secretsHmac`<sup>Optional</sup> <a name="secretsHmac" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsHmac"></a>

```java
public java.lang.String getSecretsHmac();
```

- *Type:* java.lang.String

The HMAC'd secrets value returned from the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#secrets_hmac HostCatalogPlugin#secrets_hmac}

---

##### `secretsJson`<sup>Optional</sup> <a name="secretsJson" id="@cdktf/provider-boundary.hostCatalogPlugin.HostCatalogPluginConfig.property.secretsJson"></a>

```java
public java.lang.String getSecretsJson();
```

- *Type:* java.lang.String

The secrets for the host catalog.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the host catalog; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_catalog_plugin#secrets_json HostCatalogPlugin#secrets_json}

---



