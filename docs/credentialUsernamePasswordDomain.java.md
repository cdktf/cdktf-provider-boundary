# `credentialUsernamePasswordDomain` Submodule <a name="`credentialUsernamePasswordDomain` Submodule" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialUsernamePasswordDomain <a name="CredentialUsernamePasswordDomain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain boundary_credential_username_password_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password_domain.CredentialUsernamePasswordDomain;

CredentialUsernamePasswordDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .credentialStoreId(java.lang.String)
    .password(java.lang.String)
//  .description(java.lang.String)
//  .domain(java.lang.String)
//  .name(java.lang.String)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | The credential store in which to save this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | The domain of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this username-password-domain credential. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | This field is required even though it is marked as optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.credentialStoreId"></a>

- *Type:* java.lang.String

The credential store in which to save this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#credential_store_id CredentialUsernamePasswordDomain#credential_store_id}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password of this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#password CredentialUsernamePasswordDomain#password}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#description CredentialUsernamePasswordDomain#description}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

The domain of this username-password-domain credential.

This field is required unless provided as part of the username field instead (see username field description).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#domain CredentialUsernamePasswordDomain#domain}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this username-password-domain credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#name CredentialUsernamePasswordDomain#name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.username"></a>

- *Type:* java.lang.String

This field is required even though it is marked as optional.

The username of this username-password-domain credential. Can also contain a domain if provided as username@domain or domain\username

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#username CredentialUsernamePasswordDomain#username}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetName"></a>

```java
public void resetName()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetUsername"></a>

```java
public void resetUsername()
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

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password_domain.CredentialUsernamePasswordDomain;

CredentialUsernamePasswordDomain.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password_domain.CredentialUsernamePasswordDomain;

CredentialUsernamePasswordDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password_domain.CredentialUsernamePasswordDomain;

CredentialUsernamePasswordDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password_domain.CredentialUsernamePasswordDomain;

CredentialUsernamePasswordDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CredentialUsernamePasswordDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CredentialUsernamePasswordDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CredentialUsernamePasswordDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CredentialUsernamePasswordDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CredentialUsernamePasswordDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordHmac">passwordHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreIdInput">credentialStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `passwordHmac`<sup>Required</sup> <a name="passwordHmac" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordHmac"></a>

```java
public java.lang.String getPasswordHmac();
```

- *Type:* java.lang.String

---

##### `credentialStoreIdInput`<sup>Optional</sup> <a name="credentialStoreIdInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreIdInput"></a>

```java
public java.lang.String getCredentialStoreIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreId"></a>

```java
public java.lang.String getCredentialStoreId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialUsernamePasswordDomainConfig <a name="CredentialUsernamePasswordDomainConfig" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_username_password_domain.CredentialUsernamePasswordDomainConfig;

CredentialUsernamePasswordDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .credentialStoreId(java.lang.String)
    .password(java.lang.String)
//  .description(java.lang.String)
//  .domain(java.lang.String)
//  .name(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | The credential store in which to save this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this username-password-domain credential. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.username">username</a></code> | <code>java.lang.String</code> | This field is required even though it is marked as optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.credentialStoreId"></a>

```java
public java.lang.String getCredentialStoreId();
```

- *Type:* java.lang.String

The credential store in which to save this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#credential_store_id CredentialUsernamePasswordDomain#credential_store_id}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password of this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#password CredentialUsernamePasswordDomain#password}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#description CredentialUsernamePasswordDomain#description}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain of this username-password-domain credential.

This field is required unless provided as part of the username field instead (see username field description).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#domain CredentialUsernamePasswordDomain#domain}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this username-password-domain credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#name CredentialUsernamePasswordDomain#name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

This field is required even though it is marked as optional.

The username of this username-password-domain credential. Can also contain a domain if provided as username@domain or domain\username

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#username CredentialUsernamePasswordDomain#username}

---



