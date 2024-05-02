# `hostSetPlugin` Submodule <a name="`hostSetPlugin` Submodule" id="@cdktf/provider-boundary.hostSetPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostSetPlugin <a name="HostSetPlugin" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin boundary_host_set_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_set_plugin.HostSetPlugin;

HostSetPlugin.Builder.create(Construct scope, java.lang.String id)
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
    .hostCatalogId(java.lang.String)
//  .attributesJson(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .preferredEndpoints(java.util.List<java.lang.String>)
//  .syncIntervalSeconds(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.hostCatalogId">hostCatalogId</a></code> | <code>java.lang.String</code> | The catalog for the host set. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.attributesJson">attributesJson</a></code> | <code>java.lang.String</code> | The attributes for the host set. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The host set description. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The host set name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.preferredEndpoints">preferredEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | The ordered list of preferred endpoints. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.syncIntervalSeconds">syncIntervalSeconds</a></code> | <code>java.lang.Number</code> | The value to set for the sync interval seconds. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of host set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostCatalogId`<sup>Required</sup> <a name="hostCatalogId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.hostCatalogId"></a>

- *Type:* java.lang.String

The catalog for the host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#host_catalog_id HostSetPlugin#host_catalog_id}

---

##### `attributesJson`<sup>Optional</sup> <a name="attributesJson" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.attributesJson"></a>

- *Type:* java.lang.String

The attributes for the host set.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#attributes_json HostSetPlugin#attributes_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The host set description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#description HostSetPlugin#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The host set name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#name HostSetPlugin#name}

---

##### `preferredEndpoints`<sup>Optional</sup> <a name="preferredEndpoints" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.preferredEndpoints"></a>

- *Type:* java.util.List<java.lang.String>

The ordered list of preferred endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#preferred_endpoints HostSetPlugin#preferred_endpoints}

---

##### `syncIntervalSeconds`<sup>Optional</sup> <a name="syncIntervalSeconds" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.syncIntervalSeconds"></a>

- *Type:* java.lang.Number

The value to set for the sync interval seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#sync_interval_seconds HostSetPlugin#sync_interval_seconds}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#type HostSetPlugin#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetAttributesJson">resetAttributesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetPreferredEndpoints">resetPreferredEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetSyncIntervalSeconds">resetSyncIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAttributesJson` <a name="resetAttributesJson" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetAttributesJson"></a>

```java
public void resetAttributesJson()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetName"></a>

```java
public void resetName()
```

##### `resetPreferredEndpoints` <a name="resetPreferredEndpoints" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetPreferredEndpoints"></a>

```java
public void resetPreferredEndpoints()
```

##### `resetSyncIntervalSeconds` <a name="resetSyncIntervalSeconds" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetSyncIntervalSeconds"></a>

```java
public void resetSyncIntervalSeconds()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HostSetPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_set_plugin.HostSetPlugin;

HostSetPlugin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_set_plugin.HostSetPlugin;

HostSetPlugin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_set_plugin.HostSetPlugin;

HostSetPlugin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_set_plugin.HostSetPlugin;

HostSetPlugin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HostSetPlugin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HostSetPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HostSetPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HostSetPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HostSetPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJsonInput">attributesJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogIdInput">hostCatalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpointsInput">preferredEndpointsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSecondsInput">syncIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJson">attributesJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogId">hostCatalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpoints">preferredEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSeconds">syncIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `attributesJsonInput`<sup>Optional</sup> <a name="attributesJsonInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJsonInput"></a>

```java
public java.lang.String getAttributesJsonInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hostCatalogIdInput`<sup>Optional</sup> <a name="hostCatalogIdInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogIdInput"></a>

```java
public java.lang.String getHostCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `preferredEndpointsInput`<sup>Optional</sup> <a name="preferredEndpointsInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpointsInput"></a>

```java
public java.util.List<java.lang.String> getPreferredEndpointsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `syncIntervalSecondsInput`<sup>Optional</sup> <a name="syncIntervalSecondsInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSecondsInput"></a>

```java
public java.lang.Number getSyncIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `attributesJson`<sup>Required</sup> <a name="attributesJson" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJson"></a>

```java
public java.lang.String getAttributesJson();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hostCatalogId`<sup>Required</sup> <a name="hostCatalogId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogId"></a>

```java
public java.lang.String getHostCatalogId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `preferredEndpoints`<sup>Required</sup> <a name="preferredEndpoints" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpoints"></a>

```java
public java.util.List<java.lang.String> getPreferredEndpoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `syncIntervalSeconds`<sup>Required</sup> <a name="syncIntervalSeconds" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSeconds"></a>

```java
public java.lang.Number getSyncIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HostSetPluginConfig <a name="HostSetPluginConfig" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.host_set_plugin.HostSetPluginConfig;

HostSetPluginConfig.builder()
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
    .hostCatalogId(java.lang.String)
//  .attributesJson(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .preferredEndpoints(java.util.List<java.lang.String>)
//  .syncIntervalSeconds(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.hostCatalogId">hostCatalogId</a></code> | <code>java.lang.String</code> | The catalog for the host set. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.attributesJson">attributesJson</a></code> | <code>java.lang.String</code> | The attributes for the host set. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.description">description</a></code> | <code>java.lang.String</code> | The host set description. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.name">name</a></code> | <code>java.lang.String</code> | The host set name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.preferredEndpoints">preferredEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | The ordered list of preferred endpoints. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.syncIntervalSeconds">syncIntervalSeconds</a></code> | <code>java.lang.Number</code> | The value to set for the sync interval seconds. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of host set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostCatalogId`<sup>Required</sup> <a name="hostCatalogId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.hostCatalogId"></a>

```java
public java.lang.String getHostCatalogId();
```

- *Type:* java.lang.String

The catalog for the host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#host_catalog_id HostSetPlugin#host_catalog_id}

---

##### `attributesJson`<sup>Optional</sup> <a name="attributesJson" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.attributesJson"></a>

```java
public java.lang.String getAttributesJson();
```

- *Type:* java.lang.String

The attributes for the host set.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#attributes_json HostSetPlugin#attributes_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The host set description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#description HostSetPlugin#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The host set name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#name HostSetPlugin#name}

---

##### `preferredEndpoints`<sup>Optional</sup> <a name="preferredEndpoints" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.preferredEndpoints"></a>

```java
public java.util.List<java.lang.String> getPreferredEndpoints();
```

- *Type:* java.util.List<java.lang.String>

The ordered list of preferred endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#preferred_endpoints HostSetPlugin#preferred_endpoints}

---

##### `syncIntervalSeconds`<sup>Optional</sup> <a name="syncIntervalSeconds" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.syncIntervalSeconds"></a>

```java
public java.lang.Number getSyncIntervalSeconds();
```

- *Type:* java.lang.Number

The value to set for the sync interval seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#sync_interval_seconds HostSetPlugin#sync_interval_seconds}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/host_set_plugin#type HostSetPlugin#type}

---



