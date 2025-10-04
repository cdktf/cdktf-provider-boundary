# `policyStorage` Submodule <a name="`policyStorage` Submodule" id="@cdktf/provider-boundary.policyStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyStorage <a name="PolicyStorage" id="@cdktf/provider-boundary.policyStorage.PolicyStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage boundary_policy_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.policy_storage.PolicyStorage;

PolicyStorage.Builder.create(Construct scope, java.lang.String id)
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
//  .deleteAfterDays(java.lang.Number)
//  .deleteAfterOverridable(java.lang.Boolean)
//  .deleteAfterOverridable(IResolvable)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .retainForDays(java.lang.Number)
//  .retainForOverridable(java.lang.Boolean)
//  .retainForOverridable(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope for this policy. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.deleteAfterDays">deleteAfterDays</a></code> | <code>java.lang.Number</code> | The number of days after which a session recording will be automatically deleted. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.deleteAfterOverridable">deleteAfterOverridable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the associated delete_after_days value can be overridden by org scopes. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The policy description. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The policy name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.retainForDays">retainForDays</a></code> | <code>java.lang.Number</code> | The number of days a session recording is required to be stored. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.retainForOverridable">retainForOverridable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the associated retain_for_days value can be overridden by org scopes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

The scope for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#scope_id PolicyStorage#scope_id}

---

##### `deleteAfterDays`<sup>Optional</sup> <a name="deleteAfterDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.deleteAfterDays"></a>

- *Type:* java.lang.Number

The number of days after which a session recording will be automatically deleted.

Defaults to 0: never automatically delete. However, delete_after_days and retain_for_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#delete_after_days PolicyStorage#delete_after_days}

---

##### `deleteAfterOverridable`<sup>Optional</sup> <a name="deleteAfterOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.deleteAfterOverridable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the associated delete_after_days value can be overridden by org scopes.

Note: if the associated delete_after_days value is 0, overridable is ignored

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#delete_after_overridable PolicyStorage#delete_after_overridable}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The policy description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#description PolicyStorage#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The policy name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#name PolicyStorage#name}

---

##### `retainForDays`<sup>Optional</sup> <a name="retainForDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.retainForDays"></a>

- *Type:* java.lang.Number

The number of days a session recording is required to be stored.

Defaults to 0: allow deletions at any time. However, retain_for_days and delete_after_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#retain_for_days PolicyStorage#retain_for_days}

---

##### `retainForOverridable`<sup>Optional</sup> <a name="retainForOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.Initializer.parameter.retainForOverridable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the associated retain_for_days value can be overridden by org scopes.

Note: if the associated retain_for_days value is 0, overridable is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#retain_for_overridable PolicyStorage#retain_for_overridable}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterDays">resetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterOverridable">resetDeleteAfterOverridable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForDays">resetRetainForDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForOverridable">resetRetainForOverridable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDeleteAfterDays` <a name="resetDeleteAfterDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterDays"></a>

```java
public void resetDeleteAfterDays()
```

##### `resetDeleteAfterOverridable` <a name="resetDeleteAfterOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDeleteAfterOverridable"></a>

```java
public void resetDeleteAfterOverridable()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetName"></a>

```java
public void resetName()
```

##### `resetRetainForDays` <a name="resetRetainForDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForDays"></a>

```java
public void resetRetainForDays()
```

##### `resetRetainForOverridable` <a name="resetRetainForOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.resetRetainForOverridable"></a>

```java
public void resetRetainForOverridable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyStorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.policy_storage.PolicyStorage;

PolicyStorage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.policy_storage.PolicyStorage;

PolicyStorage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.policy_storage.PolicyStorage;

PolicyStorage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.policy_storage.PolicyStorage;

PolicyStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicyStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicyStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicyStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicyStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicyStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDaysInput">deleteAfterDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridableInput">deleteAfterOverridableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDaysInput">retainForDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridableInput">retainForOverridableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDays">deleteAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridable">deleteAfterOverridable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDays">retainForDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridable">retainForOverridable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `deleteAfterDaysInput`<sup>Optional</sup> <a name="deleteAfterDaysInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDaysInput"></a>

```java
public java.lang.Number getDeleteAfterDaysInput();
```

- *Type:* java.lang.Number

---

##### `deleteAfterOverridableInput`<sup>Optional</sup> <a name="deleteAfterOverridableInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridableInput"></a>

```java
public java.lang.Object getDeleteAfterOverridableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `retainForDaysInput`<sup>Optional</sup> <a name="retainForDaysInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDaysInput"></a>

```java
public java.lang.Number getRetainForDaysInput();
```

- *Type:* java.lang.Number

---

##### `retainForOverridableInput`<sup>Optional</sup> <a name="retainForOverridableInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridableInput"></a>

```java
public java.lang.Object getRetainForOverridableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `deleteAfterDays`<sup>Required</sup> <a name="deleteAfterDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterDays"></a>

```java
public java.lang.Number getDeleteAfterDays();
```

- *Type:* java.lang.Number

---

##### `deleteAfterOverridable`<sup>Required</sup> <a name="deleteAfterOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.deleteAfterOverridable"></a>

```java
public java.lang.Object getDeleteAfterOverridable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `retainForDays`<sup>Required</sup> <a name="retainForDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForDays"></a>

```java
public java.lang.Number getRetainForDays();
```

- *Type:* java.lang.Number

---

##### `retainForOverridable`<sup>Required</sup> <a name="retainForOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.retainForOverridable"></a>

```java
public java.lang.Object getRetainForOverridable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.policyStorage.PolicyStorage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyStorageConfig <a name="PolicyStorageConfig" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.policy_storage.PolicyStorageConfig;

PolicyStorageConfig.builder()
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
//  .deleteAfterDays(java.lang.Number)
//  .deleteAfterOverridable(java.lang.Boolean)
//  .deleteAfterOverridable(IResolvable)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .retainForDays(java.lang.Number)
//  .retainForOverridable(java.lang.Boolean)
//  .retainForOverridable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope for this policy. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterDays">deleteAfterDays</a></code> | <code>java.lang.Number</code> | The number of days after which a session recording will be automatically deleted. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterOverridable">deleteAfterOverridable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the associated delete_after_days value can be overridden by org scopes. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.description">description</a></code> | <code>java.lang.String</code> | The policy description. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.name">name</a></code> | <code>java.lang.String</code> | The policy name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForDays">retainForDays</a></code> | <code>java.lang.Number</code> | The number of days a session recording is required to be stored. |
| <code><a href="#@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForOverridable">retainForOverridable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the associated retain_for_days value can be overridden by org scopes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

The scope for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#scope_id PolicyStorage#scope_id}

---

##### `deleteAfterDays`<sup>Optional</sup> <a name="deleteAfterDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterDays"></a>

```java
public java.lang.Number getDeleteAfterDays();
```

- *Type:* java.lang.Number

The number of days after which a session recording will be automatically deleted.

Defaults to 0: never automatically delete. However, delete_after_days and retain_for_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#delete_after_days PolicyStorage#delete_after_days}

---

##### `deleteAfterOverridable`<sup>Optional</sup> <a name="deleteAfterOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.deleteAfterOverridable"></a>

```java
public java.lang.Object getDeleteAfterOverridable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the associated delete_after_days value can be overridden by org scopes.

Note: if the associated delete_after_days value is 0, overridable is ignored

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#delete_after_overridable PolicyStorage#delete_after_overridable}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The policy description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#description PolicyStorage#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The policy name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#name PolicyStorage#name}

---

##### `retainForDays`<sup>Optional</sup> <a name="retainForDays" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForDays"></a>

```java
public java.lang.Number getRetainForDays();
```

- *Type:* java.lang.Number

The number of days a session recording is required to be stored.

Defaults to 0: allow deletions at any time. However, retain_for_days and delete_after_days cannot both be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#retain_for_days PolicyStorage#retain_for_days}

---

##### `retainForOverridable`<sup>Optional</sup> <a name="retainForOverridable" id="@cdktf/provider-boundary.policyStorage.PolicyStorageConfig.property.retainForOverridable"></a>

```java
public java.lang.Object getRetainForOverridable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the associated retain_for_days value can be overridden by org scopes.

Note: if the associated retain_for_days value is 0, overridable is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/policy_storage#retain_for_overridable PolicyStorage#retain_for_overridable}

---



