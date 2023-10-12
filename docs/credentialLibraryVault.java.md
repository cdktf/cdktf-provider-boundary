# `boundary_credential_library_vault`

Refer to the Terraform Registory for docs: [`boundary_credential_library_vault`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault).

# `credentialLibraryVault` Submodule <a name="`credentialLibraryVault` Submodule" id="@cdktf/provider-boundary.credentialLibraryVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialLibraryVault <a name="CredentialLibraryVault" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault boundary_credential_library_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_library_vault.CredentialLibraryVault;

CredentialLibraryVault.Builder.create(Construct scope, java.lang.String id)
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
    .path(java.lang.String)
//  .credentialMappingOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .credentialType(java.lang.String)
//  .description(java.lang.String)
//  .httpMethod(java.lang.String)
//  .httpRequestBody(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | The ID of the credential store that this library belongs to. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The path in Vault to request credentials from. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.credentialMappingOverrides">credentialMappingOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The credential mapping override. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.credentialType">credentialType</a></code> | <code>java.lang.String</code> | The type of credential the library generates. Cannot be updated on an existing resource. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The Vault credential library description. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | The HTTP method the library uses when requesting credentials from Vault. Defaults to 'GET'. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.httpRequestBody">httpRequestBody</a></code> | <code>java.lang.String</code> | The body of the HTTP request the library sends to Vault when requesting credentials. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The Vault credential library name. Defaults to the resource name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.credentialStoreId"></a>

- *Type:* java.lang.String

The ID of the credential store that this library belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_store_id CredentialLibraryVault#credential_store_id}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The path in Vault to request credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#path CredentialLibraryVault#path}

---

##### `credentialMappingOverrides`<sup>Optional</sup> <a name="credentialMappingOverrides" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.credentialMappingOverrides"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The credential mapping override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_mapping_overrides CredentialLibraryVault#credential_mapping_overrides}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.credentialType"></a>

- *Type:* java.lang.String

The type of credential the library generates. Cannot be updated on an existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_type CredentialLibraryVault#credential_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The Vault credential library description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#description CredentialLibraryVault#description}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.httpMethod"></a>

- *Type:* java.lang.String

The HTTP method the library uses when requesting credentials from Vault. Defaults to 'GET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#http_method CredentialLibraryVault#http_method}

---

##### `httpRequestBody`<sup>Optional</sup> <a name="httpRequestBody" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.httpRequestBody"></a>

- *Type:* java.lang.String

The body of the HTTP request the library sends to Vault when requesting credentials.

Only valid if `http_method` is set to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#http_request_body CredentialLibraryVault#http_request_body}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The Vault credential library name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#name CredentialLibraryVault#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialMappingOverrides">resetCredentialMappingOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpRequestBody">resetHttpRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCredentialMappingOverrides` <a name="resetCredentialMappingOverrides" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialMappingOverrides"></a>

```java
public void resetCredentialMappingOverrides()
```

##### `resetCredentialType` <a name="resetCredentialType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialType"></a>

```java
public void resetCredentialType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```

##### `resetHttpRequestBody` <a name="resetHttpRequestBody" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpRequestBody"></a>

```java
public void resetHttpRequestBody()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_library_vault.CredentialLibraryVault;

CredentialLibraryVault.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_library_vault.CredentialLibraryVault;

CredentialLibraryVault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_library_vault.CredentialLibraryVault;

CredentialLibraryVault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverridesInput">credentialMappingOverridesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreIdInput">credentialStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBodyInput">httpRequestBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverrides">credentialMappingOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBody">httpRequestBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `credentialMappingOverridesInput`<sup>Optional</sup> <a name="credentialMappingOverridesInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverridesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCredentialMappingOverridesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `credentialStoreIdInput`<sup>Optional</sup> <a name="credentialStoreIdInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreIdInput"></a>

```java
public java.lang.String getCredentialStoreIdInput();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `httpRequestBodyInput`<sup>Optional</sup> <a name="httpRequestBodyInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBodyInput"></a>

```java
public java.lang.String getHttpRequestBodyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `credentialMappingOverrides`<sup>Required</sup> <a name="credentialMappingOverrides" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCredentialMappingOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreId"></a>

```java
public java.lang.String getCredentialStoreId();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `httpRequestBody`<sup>Required</sup> <a name="httpRequestBody" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBody"></a>

```java
public java.lang.String getHttpRequestBody();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialLibraryVaultConfig <a name="CredentialLibraryVaultConfig" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.credential_library_vault.CredentialLibraryVaultConfig;

CredentialLibraryVaultConfig.builder()
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
    .path(java.lang.String)
//  .credentialMappingOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .credentialType(java.lang.String)
//  .description(java.lang.String)
//  .httpMethod(java.lang.String)
//  .httpRequestBody(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialStoreId">credentialStoreId</a></code> | <code>java.lang.String</code> | The ID of the credential store that this library belongs to. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.path">path</a></code> | <code>java.lang.String</code> | The path in Vault to request credentials from. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialMappingOverrides">credentialMappingOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The credential mapping override. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | The type of credential the library generates. Cannot be updated on an existing resource. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.description">description</a></code> | <code>java.lang.String</code> | The Vault credential library description. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | The HTTP method the library uses when requesting credentials from Vault. Defaults to 'GET'. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpRequestBody">httpRequestBody</a></code> | <code>java.lang.String</code> | The body of the HTTP request the library sends to Vault when requesting credentials. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.name">name</a></code> | <code>java.lang.String</code> | The Vault credential library name. Defaults to the resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialStoreId`<sup>Required</sup> <a name="credentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialStoreId"></a>

```java
public java.lang.String getCredentialStoreId();
```

- *Type:* java.lang.String

The ID of the credential store that this library belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_store_id CredentialLibraryVault#credential_store_id}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path in Vault to request credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#path CredentialLibraryVault#path}

---

##### `credentialMappingOverrides`<sup>Optional</sup> <a name="credentialMappingOverrides" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialMappingOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCredentialMappingOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The credential mapping override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_mapping_overrides CredentialLibraryVault#credential_mapping_overrides}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

The type of credential the library generates. Cannot be updated on an existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_type CredentialLibraryVault#credential_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The Vault credential library description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#description CredentialLibraryVault#description}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

The HTTP method the library uses when requesting credentials from Vault. Defaults to 'GET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#http_method CredentialLibraryVault#http_method}

---

##### `httpRequestBody`<sup>Optional</sup> <a name="httpRequestBody" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpRequestBody"></a>

```java
public java.lang.String getHttpRequestBody();
```

- *Type:* java.lang.String

The body of the HTTP request the library sends to Vault when requesting credentials.

Only valid if `http_method` is set to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#http_request_body CredentialLibraryVault#http_request_body}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The Vault credential library name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#name CredentialLibraryVault#name}

---



