# `credentialStoreVault` Submodule <a name="`credentialStoreVault` Submodule" id="@cdktf/provider-boundary.credentialStoreVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialStoreVault <a name="CredentialStoreVault" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault boundary_credential_store_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_store_vault.CredentialStoreVault;

CredentialStoreVault.Builder.create(Construct scope, java.lang.String id)
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
    .address(java.lang.String)
    .scopeId(java.lang.String)
    .token(java.lang.String)
//  .caCert(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientCertificateKey(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .tlsServerName(java.lang.String)
//  .tlsSkipVerify(java.lang.Boolean)
//  .tlsSkipVerify(IResolvable)
//  .workerFilter(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope for this credential store. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | A token used for accessing Vault. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.caCert">caCert</a></code> | <code>java.lang.String</code> | A PEM-encoded CA certificate to verify the Vault server's TLS certificate. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | A PEM-encoded client certificate to use for TLS authentication to the Vault server. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.clientCertificateKey">clientCertificateKey</a></code> | <code>java.lang.String</code> | A PEM-encoded private key matching the client certificate from 'client_certificate'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The Vault credential store description. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The Vault credential store name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace within Vault to use. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | Name to use as the SNI host when connecting to Vault via TLS. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.tlsSkipVerify">tlsSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to skip TLS verification. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.workerFilter">workerFilter</a></code> | <code>java.lang.String</code> | HCP Only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.address"></a>

- *Type:* java.lang.String

The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#address CredentialStoreVault#address}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

The scope for this credential store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#scope_id CredentialStoreVault#scope_id}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.token"></a>

- *Type:* java.lang.String

A token used for accessing Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#token CredentialStoreVault#token}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.caCert"></a>

- *Type:* java.lang.String

A PEM-encoded CA certificate to verify the Vault server's TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#ca_cert CredentialStoreVault#ca_cert}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.clientCertificate"></a>

- *Type:* java.lang.String

A PEM-encoded client certificate to use for TLS authentication to the Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#client_certificate CredentialStoreVault#client_certificate}

---

##### `clientCertificateKey`<sup>Optional</sup> <a name="clientCertificateKey" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.clientCertificateKey"></a>

- *Type:* java.lang.String

A PEM-encoded private key matching the client certificate from 'client_certificate'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#client_certificate_key CredentialStoreVault#client_certificate_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The Vault credential store description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#description CredentialStoreVault#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The Vault credential store name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#name CredentialStoreVault#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace within Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#namespace CredentialStoreVault#namespace}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.tlsServerName"></a>

- *Type:* java.lang.String

Name to use as the SNI host when connecting to Vault via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#tls_server_name CredentialStoreVault#tls_server_name}

---

##### `tlsSkipVerify`<sup>Optional</sup> <a name="tlsSkipVerify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.tlsSkipVerify"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to skip TLS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#tls_skip_verify CredentialStoreVault#tls_skip_verify}

---

##### `workerFilter`<sup>Optional</sup> <a name="workerFilter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.Initializer.parameter.workerFilter"></a>

- *Type:* java.lang.String

HCP Only.

A filter used to control which PKI workers can handle Vault requests. This allows the use of private Vault instances with Boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#worker_filter CredentialStoreVault#worker_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificateKey">resetClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsServerName">resetTlsServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsSkipVerify">resetTlsSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetWorkerFilter">resetWorkerFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCaCert` <a name="resetCaCert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetCaCert"></a>

```java
public void resetCaCert()
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientCertificateKey` <a name="resetClientCertificateKey" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetClientCertificateKey"></a>

```java
public void resetClientCertificateKey()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTlsServerName` <a name="resetTlsServerName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsServerName"></a>

```java
public void resetTlsServerName()
```

##### `resetTlsSkipVerify` <a name="resetTlsSkipVerify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetTlsSkipVerify"></a>

```java
public void resetTlsSkipVerify()
```

##### `resetWorkerFilter` <a name="resetWorkerFilter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.resetWorkerFilter"></a>

```java
public void resetWorkerFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialStoreVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_store_vault.CredentialStoreVault;

CredentialStoreVault.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_store_vault.CredentialStoreVault;

CredentialStoreVault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_store_vault.CredentialStoreVault;

CredentialStoreVault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_store_vault.CredentialStoreVault;

CredentialStoreVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CredentialStoreVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CredentialStoreVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CredentialStoreVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CredentialStoreVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CredentialStoreVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyHmac">clientCertificateKeyHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenHmac">tokenHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCertInput">caCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyInput">clientCertificateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerNameInput">tlsServerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerifyInput">tlsSkipVerifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilterInput">workerFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCert">caCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKey">clientCertificateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerify">tlsSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilter">workerFilter</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientCertificateKeyHmac`<sup>Required</sup> <a name="clientCertificateKeyHmac" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyHmac"></a>

```java
public java.lang.String getClientCertificateKeyHmac();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tokenHmac`<sup>Required</sup> <a name="tokenHmac" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenHmac"></a>

```java
public java.lang.String getTokenHmac();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCertInput"></a>

```java
public java.lang.String getCaCertInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateKeyInput`<sup>Optional</sup> <a name="clientCertificateKeyInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKeyInput"></a>

```java
public java.lang.String getClientCertificateKeyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `tlsServerNameInput`<sup>Optional</sup> <a name="tlsServerNameInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerNameInput"></a>

```java
public java.lang.String getTlsServerNameInput();
```

- *Type:* java.lang.String

---

##### `tlsSkipVerifyInput`<sup>Optional</sup> <a name="tlsSkipVerifyInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerifyInput"></a>

```java
public java.lang.Object getTlsSkipVerifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `workerFilterInput`<sup>Optional</sup> <a name="workerFilterInput" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilterInput"></a>

```java
public java.lang.String getWorkerFilterInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.caCert"></a>

```java
public java.lang.String getCaCert();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificateKey`<sup>Required</sup> <a name="clientCertificateKey" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.clientCertificateKey"></a>

```java
public java.lang.String getClientCertificateKey();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

##### `tlsServerName`<sup>Required</sup> <a name="tlsServerName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsServerName"></a>

```java
public java.lang.String getTlsServerName();
```

- *Type:* java.lang.String

---

##### `tlsSkipVerify`<sup>Required</sup> <a name="tlsSkipVerify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tlsSkipVerify"></a>

```java
public java.lang.Object getTlsSkipVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `workerFilter`<sup>Required</sup> <a name="workerFilter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.workerFilter"></a>

```java
public java.lang.String getWorkerFilter();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialStoreVaultConfig <a name="CredentialStoreVaultConfig" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_store_vault.CredentialStoreVaultConfig;

CredentialStoreVaultConfig.builder()
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
    .address(java.lang.String)
    .scopeId(java.lang.String)
    .token(java.lang.String)
//  .caCert(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientCertificateKey(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .tlsServerName(java.lang.String)
//  .tlsSkipVerify(java.lang.Boolean)
//  .tlsSkipVerify(IResolvable)
//  .workerFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.address">address</a></code> | <code>java.lang.String</code> | The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope for this credential store. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.token">token</a></code> | <code>java.lang.String</code> | A token used for accessing Vault. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.caCert">caCert</a></code> | <code>java.lang.String</code> | A PEM-encoded CA certificate to verify the Vault server's TLS certificate. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | A PEM-encoded client certificate to use for TLS authentication to the Vault server. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificateKey">clientCertificateKey</a></code> | <code>java.lang.String</code> | A PEM-encoded private key matching the client certificate from 'client_certificate'. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.description">description</a></code> | <code>java.lang.String</code> | The Vault credential store description. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.name">name</a></code> | <code>java.lang.String</code> | The Vault credential store name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace within Vault to use. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | Name to use as the SNI host when connecting to Vault via TLS. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsSkipVerify">tlsSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to skip TLS verification. |
| <code><a href="#@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.workerFilter">workerFilter</a></code> | <code>java.lang.String</code> | HCP Only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The address to Vault server. This should be a complete URL such as 'https://127.0.0.1:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#address CredentialStoreVault#address}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

The scope for this credential store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#scope_id CredentialStoreVault#scope_id}

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

A token used for accessing Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#token CredentialStoreVault#token}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.caCert"></a>

```java
public java.lang.String getCaCert();
```

- *Type:* java.lang.String

A PEM-encoded CA certificate to verify the Vault server's TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#ca_cert CredentialStoreVault#ca_cert}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

A PEM-encoded client certificate to use for TLS authentication to the Vault server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#client_certificate CredentialStoreVault#client_certificate}

---

##### `clientCertificateKey`<sup>Optional</sup> <a name="clientCertificateKey" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.clientCertificateKey"></a>

```java
public java.lang.String getClientCertificateKey();
```

- *Type:* java.lang.String

A PEM-encoded private key matching the client certificate from 'client_certificate'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#client_certificate_key CredentialStoreVault#client_certificate_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The Vault credential store description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#description CredentialStoreVault#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The Vault credential store name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#name CredentialStoreVault#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace within Vault to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#namespace CredentialStoreVault#namespace}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsServerName"></a>

```java
public java.lang.String getTlsServerName();
```

- *Type:* java.lang.String

Name to use as the SNI host when connecting to Vault via TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#tls_server_name CredentialStoreVault#tls_server_name}

---

##### `tlsSkipVerify`<sup>Optional</sup> <a name="tlsSkipVerify" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.tlsSkipVerify"></a>

```java
public java.lang.Object getTlsSkipVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to skip TLS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#tls_skip_verify CredentialStoreVault#tls_skip_verify}

---

##### `workerFilter`<sup>Optional</sup> <a name="workerFilter" id="@cdktf/provider-boundary.credentialStoreVault.CredentialStoreVaultConfig.property.workerFilter"></a>

```java
public java.lang.String getWorkerFilter();
```

- *Type:* java.lang.String

HCP Only.

A filter used to control which PKI workers can handle Vault requests. This allows the use of private Vault instances with Boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_store_vault#worker_filter CredentialStoreVault#worker_filter}

---



