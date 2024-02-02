# `credentialUsernamePassword` Submodule <a name="`credentialUsernamePassword` Submodule" id="@cdktf/provider-boundary.credentialUsernamePassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialUsernamePassword <a name="CredentialUsernamePassword" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password boundary_credential_username_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password.CredentialUsernamePassword;

CredentialUsernamePassword.Builder.create(Construct scope, java.lang.String id)
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
    .credentialStoreId(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | The credential store in which to save this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this username/password credential. Defaults to the resource name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.credentialStoreId"></a>

- *Type:* java.lang.String

The credential store in which to save this username/password credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#credential_store_id CredentialUsernamePassword#credential_store_id}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password of this username/password credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#password CredentialUsernamePassword#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username of this username/password credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#username CredentialUsernamePassword#username}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of this username/password credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#description CredentialUsernamePassword#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this username/password credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#name CredentialUsernamePassword#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialUsernamePassword resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password.CredentialUsernamePassword;

CredentialUsernamePassword.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password.CredentialUsernamePassword;

CredentialUsernamePassword.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password.CredentialUsernamePassword;

CredentialUsernamePassword.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password.CredentialUsernamePassword;

CredentialUsernamePassword.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CredentialUsernamePassword.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CredentialUsernamePassword resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CredentialUsernamePassword to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CredentialUsernamePassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CredentialUsernamePassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.passwordHmac">passwordHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.credentialStoreIdInput">credentialStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `passwordHmac`<sup>Required</sup> <a name="passwordHmac" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.passwordHmac"></a>

```java
public java.lang.String getPasswordHmac();
```

- *Type:* java.lang.String

---

##### `credentialStoreIdInput`<sup>Optional</sup> <a name="credentialStoreIdInput" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.credentialStoreIdInput"></a>

```java
public java.lang.String getCredentialStoreIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.credentialStoreId"></a>

```java
public java.lang.String getCredentialStoreId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePassword.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialUsernamePasswordConfig <a name="CredentialUsernamePasswordConfig" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password.CredentialUsernamePasswordConfig;

CredentialUsernamePasswordConfig.builder()
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
    .credentialStoreId(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | The credential store in which to save this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of this username/password credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this username/password credential. Defaults to the resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.credentialStoreId"></a>

```java
public java.lang.String getCredentialStoreId();
```

- *Type:* java.lang.String

The credential store in which to save this username/password credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#credential_store_id CredentialUsernamePassword#credential_store_id}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password of this username/password credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#password CredentialUsernamePassword#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of this username/password credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#username CredentialUsernamePassword#username}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of this username/password credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#description CredentialUsernamePassword#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePassword.CredentialUsernamePasswordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this username/password credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs/resources/credential_username_password#name CredentialUsernamePassword#name}

---



