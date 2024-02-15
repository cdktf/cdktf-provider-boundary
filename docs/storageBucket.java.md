# `storageBucket` Submodule <a name="`storageBucket` Submodule" id="@cdktf/provider-boundary.storageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucket <a name="StorageBucket" id="@cdktf/provider-boundary.storageBucket.StorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket boundary_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.storage_bucket.StorageBucket;

StorageBucket.Builder.create(Construct scope, java.lang.String id)
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
    .bucketName(java.lang.String)
    .scopeId(java.lang.String)
    .workerFilter(java.lang.String)
//  .attributesJson(java.lang.String)
//  .bucketPrefix(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .pluginId(java.lang.String)
//  .pluginName(java.lang.String)
//  .secretsJson(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the bucket within the external object store service. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.workerFilter">workerFilter</a></code> | <code>java.lang.String</code> | Filters to the worker(s) that can handle requests for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.attributesJson">attributesJson</a></code> | <code>java.lang.String</code> | The attributes for the storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | The prefix used to organize the data held within the external object store. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The storage bucket description. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The storage bucket name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.pluginId">pluginId</a></code> | <code>java.lang.String</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.pluginName">pluginName</a></code> | <code>java.lang.String</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.secretsJson">secretsJson</a></code> | <code>java.lang.String</code> | The secrets for the storage bucket. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

The name of the bucket within the external object store service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#bucket_name StorageBucket#bucket_name}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

The scope for this storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#scope_id StorageBucket#scope_id}

---

##### `workerFilter`<sup>Required</sup> <a name="workerFilter" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.workerFilter"></a>

- *Type:* java.lang.String

Filters to the worker(s) that can handle requests for this storage bucket.

The filter must match an existing worker in order to create a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#worker_filter StorageBucket#worker_filter}

---

##### `attributesJson`<sup>Optional</sup> <a name="attributesJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.attributesJson"></a>

- *Type:* java.lang.String

The attributes for the storage bucket.

The "region" attribute field is required when creating an AWS storage bucket. Values are either encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#attributes_json StorageBucket#attributes_json}

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.bucketPrefix"></a>

- *Type:* java.lang.String

The prefix used to organize the data held within the external object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#bucket_prefix StorageBucket#bucket_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The storage bucket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#description StorageBucket#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The storage bucket name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `pluginId`<sup>Optional</sup> <a name="pluginId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.pluginId"></a>

- *Type:* java.lang.String

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#plugin_id StorageBucket#plugin_id}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.pluginName"></a>

- *Type:* java.lang.String

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#plugin_name StorageBucket#plugin_name}

---

##### `secretsJson`<sup>Optional</sup> <a name="secretsJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.secretsJson"></a>

- *Type:* java.lang.String

The secrets for the storage bucket.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the storage bucket; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#secrets_json StorageBucket#secrets_json}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetAttributesJson">resetAttributesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginId">resetPluginId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetSecretsJson">resetSecretsJson</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.storageBucket.StorageBucket.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAttributesJson` <a name="resetAttributesJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetAttributesJson"></a>

```java
public void resetAttributesJson()
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetBucketPrefix"></a>

```java
public void resetBucketPrefix()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetName"></a>

```java
public void resetName()
```

##### `resetPluginId` <a name="resetPluginId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginId"></a>

```java
public void resetPluginId()
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginName"></a>

```java
public void resetPluginName()
```

##### `resetSecretsJson` <a name="resetSecretsJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetSecretsJson"></a>

```java
public void resetSecretsJson()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.storage_bucket.StorageBucket;

StorageBucket.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.storage_bucket.StorageBucket;

StorageBucket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.storage_bucket.StorageBucket;

StorageBucket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.storage_bucket.StorageBucket;

StorageBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalForceUpdate">internalForceUpdate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalHmacUsedForSecretsConfigHmac">internalHmacUsedForSecretsConfigHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalSecretsConfigHmac">internalSecretsConfigHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsHmac">secretsHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJsonInput">attributesJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginIdInput">pluginIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginNameInput">pluginNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJsonInput">secretsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilterInput">workerFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJson">attributesJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJson">secretsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilter">workerFilter</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalForceUpdate`<sup>Required</sup> <a name="internalForceUpdate" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalForceUpdate"></a>

```java
public java.lang.String getInternalForceUpdate();
```

- *Type:* java.lang.String

---

##### `internalHmacUsedForSecretsConfigHmac`<sup>Required</sup> <a name="internalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalHmacUsedForSecretsConfigHmac"></a>

```java
public java.lang.String getInternalHmacUsedForSecretsConfigHmac();
```

- *Type:* java.lang.String

---

##### `internalSecretsConfigHmac`<sup>Required</sup> <a name="internalSecretsConfigHmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalSecretsConfigHmac"></a>

```java
public java.lang.String getInternalSecretsConfigHmac();
```

- *Type:* java.lang.String

---

##### `secretsHmac`<sup>Required</sup> <a name="secretsHmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsHmac"></a>

```java
public java.lang.String getSecretsHmac();
```

- *Type:* java.lang.String

---

##### `attributesJsonInput`<sup>Optional</sup> <a name="attributesJsonInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJsonInput"></a>

```java
public java.lang.String getAttributesJsonInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefixInput"></a>

```java
public java.lang.String getBucketPrefixInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginIdInput"></a>

```java
public java.lang.String getPluginIdInput();
```

- *Type:* java.lang.String

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginNameInput"></a>

```java
public java.lang.String getPluginNameInput();
```

- *Type:* java.lang.String

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `secretsJsonInput`<sup>Optional</sup> <a name="secretsJsonInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJsonInput"></a>

```java
public java.lang.String getSecretsJsonInput();
```

- *Type:* java.lang.String

---

##### `workerFilterInput`<sup>Optional</sup> <a name="workerFilterInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilterInput"></a>

```java
public java.lang.String getWorkerFilterInput();
```

- *Type:* java.lang.String

---

##### `attributesJson`<sup>Required</sup> <a name="attributesJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJson"></a>

```java
public java.lang.String getAttributesJson();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

##### `secretsJson`<sup>Required</sup> <a name="secretsJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJson"></a>

```java
public java.lang.String getSecretsJson();
```

- *Type:* java.lang.String

---

##### `workerFilter`<sup>Required</sup> <a name="workerFilter" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilter"></a>

```java
public java.lang.String getWorkerFilter();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketConfig <a name="StorageBucketConfig" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.storage_bucket.StorageBucketConfig;

StorageBucketConfig.builder()
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
    .bucketName(java.lang.String)
    .scopeId(java.lang.String)
    .workerFilter(java.lang.String)
//  .attributesJson(java.lang.String)
//  .bucketPrefix(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .pluginId(java.lang.String)
//  .pluginName(java.lang.String)
//  .secretsJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the bucket within the external object store service. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.workerFilter">workerFilter</a></code> | <code>java.lang.String</code> | Filters to the worker(s) that can handle requests for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.attributesJson">attributesJson</a></code> | <code>java.lang.String</code> | The attributes for the storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | The prefix used to organize the data held within the external object store. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.description">description</a></code> | <code>java.lang.String</code> | The storage bucket description. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.name">name</a></code> | <code>java.lang.String</code> | The storage bucket name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.secretsJson">secretsJson</a></code> | <code>java.lang.String</code> | The secrets for the storage bucket. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the bucket within the external object store service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#bucket_name StorageBucket#bucket_name}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

The scope for this storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#scope_id StorageBucket#scope_id}

---

##### `workerFilter`<sup>Required</sup> <a name="workerFilter" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.workerFilter"></a>

```java
public java.lang.String getWorkerFilter();
```

- *Type:* java.lang.String

Filters to the worker(s) that can handle requests for this storage bucket.

The filter must match an existing worker in order to create a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#worker_filter StorageBucket#worker_filter}

---

##### `attributesJson`<sup>Optional</sup> <a name="attributesJson" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.attributesJson"></a>

```java
public java.lang.String getAttributesJson();
```

- *Type:* java.lang.String

The attributes for the storage bucket.

The "region" attribute field is required when creating an AWS storage bucket. Values are either encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#attributes_json StorageBucket#attributes_json}

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

The prefix used to organize the data held within the external object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#bucket_prefix StorageBucket#bucket_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The storage bucket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#description StorageBucket#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The storage bucket name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `pluginId`<sup>Optional</sup> <a name="pluginId" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#plugin_id StorageBucket#plugin_id}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#plugin_name StorageBucket#plugin_name}

---

##### `secretsJson`<sup>Optional</sup> <a name="secretsJson" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.secretsJson"></a>

```java
public java.lang.String getSecretsJson();
```

- *Type:* java.lang.String

The secrets for the storage bucket.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the storage bucket; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.14/docs/resources/storage_bucket#secrets_json StorageBucket#secrets_json}

---



