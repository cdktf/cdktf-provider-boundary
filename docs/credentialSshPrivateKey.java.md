# `credentialSshPrivateKey` Submodule <a name="`credentialSshPrivateKey` Submodule" id="@cdktf/provider-boundary.credentialSshPrivateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialSshPrivateKey <a name="CredentialSshPrivateKey" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key boundary_credential_ssh_private_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_ssh_private_key.CredentialSshPrivateKey;

CredentialSshPrivateKey.Builder.create(Construct scope, java.lang.String id)
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
    .privateKey(java.lang.String)
    .username(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .privateKeyPassphrase(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | ID of the credential store this credential belongs to. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The private key associated with the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username associated with the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the credential. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>java.lang.String</code> | The passphrase of the private key associated with the credential. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.credentialStoreId"></a>

- *Type:* java.lang.String

ID of the credential store this credential belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#credential_store_id CredentialSshPrivateKey#credential_store_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

The private key associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#private_key CredentialSshPrivateKey#private_key}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#username CredentialSshPrivateKey#username}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#description CredentialSshPrivateKey#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#name CredentialSshPrivateKey#name}

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.privateKeyPassphrase"></a>

- *Type:* java.lang.String

The passphrase of the private key associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#private_key_passphrase CredentialSshPrivateKey#private_key_passphrase}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetPrivateKeyPassphrase">resetPrivateKeyPassphrase</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetName"></a>

```java
public void resetName()
```

##### `resetPrivateKeyPassphrase` <a name="resetPrivateKeyPassphrase" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetPrivateKeyPassphrase"></a>

```java
public void resetPrivateKeyPassphrase()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialSshPrivateKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_ssh_private_key.CredentialSshPrivateKey;

CredentialSshPrivateKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_ssh_private_key.CredentialSshPrivateKey;

CredentialSshPrivateKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_ssh_private_key.CredentialSshPrivateKey;

CredentialSshPrivateKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_ssh_private_key.CredentialSshPrivateKey;

CredentialSshPrivateKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CredentialSshPrivateKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CredentialSshPrivateKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CredentialSshPrivateKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CredentialSshPrivateKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CredentialSshPrivateKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyHmac">privateKeyHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseHmac">privateKeyPassphraseHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreIdInput">credentialStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseInput">privateKeyPassphraseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateKeyHmac`<sup>Required</sup> <a name="privateKeyHmac" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyHmac"></a>

```java
public java.lang.String getPrivateKeyHmac();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphraseHmac`<sup>Required</sup> <a name="privateKeyPassphraseHmac" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseHmac"></a>

```java
public java.lang.String getPrivateKeyPassphraseHmac();
```

- *Type:* java.lang.String

---

##### `credentialStoreIdInput`<sup>Optional</sup> <a name="credentialStoreIdInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreIdInput"></a>

```java
public java.lang.String getCredentialStoreIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphraseInput`<sup>Optional</sup> <a name="privateKeyPassphraseInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseInput"></a>

```java
public java.lang.String getPrivateKeyPassphraseInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreId"></a>

```java
public java.lang.String getCredentialStoreId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphrase`<sup>Required</sup> <a name="privateKeyPassphrase" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphrase"></a>

```java
public java.lang.String getPrivateKeyPassphrase();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialSshPrivateKeyConfig <a name="CredentialSshPrivateKeyConfig" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_ssh_private_key.CredentialSshPrivateKeyConfig;

CredentialSshPrivateKeyConfig.builder()
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
    .privateKey(java.lang.String)
    .username(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .privateKeyPassphrase(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | ID of the credential store this credential belongs to. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The private key associated with the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username associated with the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the credential. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>java.lang.String</code> | The passphrase of the private key associated with the credential. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.credentialStoreId"></a>

```java
public java.lang.String getCredentialStoreId();
```

- *Type:* java.lang.String

ID of the credential store this credential belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#credential_store_id CredentialSshPrivateKey#credential_store_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

The private key associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#private_key CredentialSshPrivateKey#private_key}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#username CredentialSshPrivateKey#username}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#description CredentialSshPrivateKey#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#name CredentialSshPrivateKey#name}

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKeyPassphrase"></a>

```java
public java.lang.String getPrivateKeyPassphrase();
```

- *Type:* java.lang.String

The passphrase of the private key associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/credential_ssh_private_key#private_key_passphrase CredentialSshPrivateKey#private_key_passphrase}

---



