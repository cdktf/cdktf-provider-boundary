# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-boundary.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BoundaryProvider <a name="BoundaryProvider" id="@cdktf/provider-boundary.provider.BoundaryProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs boundary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.provider.BoundaryProvider;

BoundaryProvider.Builder.create(Construct scope, java.lang.String id)
    .addr(java.lang.String)
//  .alias(java.lang.String)
//  .authMethodId(java.lang.String)
//  .authMethodLoginName(java.lang.String)
//  .authMethodPassword(java.lang.String)
//  .passwordAuthMethodLoginName(java.lang.String)
//  .passwordAuthMethodPassword(java.lang.String)
//  .pluginExecutionDir(java.lang.String)
//  .recoveryKmsHcl(java.lang.String)
//  .scopeId(java.lang.String)
//  .tlsInsecure(java.lang.Boolean)
//  .tlsInsecure(IResolvable)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.addr">addr</a></code> | <code>java.lang.String</code> | The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodId">authMethodId</a></code> | <code>java.lang.String</code> | The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodLoginName">authMethodLoginName</a></code> | <code>java.lang.String</code> | The auth method login name for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodPassword">authMethodPassword</a></code> | <code>java.lang.String</code> | The auth method password for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.passwordAuthMethodLoginName">passwordAuthMethodLoginName</a></code> | <code>java.lang.String</code> | The auth method login name for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.passwordAuthMethodPassword">passwordAuthMethodPassword</a></code> | <code>java.lang.String</code> | The auth method password for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.pluginExecutionDir">pluginExecutionDir</a></code> | <code>java.lang.String</code> | Specifies a directory that the Boundary provider can use to write and execute its built-in plugins. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.recoveryKmsHcl">recoveryKmsHcl</a></code> | <code>java.lang.String</code> | Can be a heredoc string or a path on disk. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope ID for the default auth method. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.tlsInsecure">tlsInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, does not validate the Boundary API endpoint certificate. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | The Boundary token to use, as a string or path on disk containing just the string. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `addr`<sup>Required</sup> <a name="addr" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.addr"></a>

- *Type:* java.lang.String

The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#addr BoundaryProvider#addr}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#alias BoundaryProvider#alias}

---

##### `authMethodId`<sup>Optional</sup> <a name="authMethodId" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodId"></a>

- *Type:* java.lang.String

The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#auth_method_id BoundaryProvider#auth_method_id}

---

##### `authMethodLoginName`<sup>Optional</sup> <a name="authMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodLoginName"></a>

- *Type:* java.lang.String

The auth method login name for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#auth_method_login_name BoundaryProvider#auth_method_login_name}

---

##### `authMethodPassword`<sup>Optional</sup> <a name="authMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.authMethodPassword"></a>

- *Type:* java.lang.String

The auth method password for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#auth_method_password BoundaryProvider#auth_method_password}

---

##### `passwordAuthMethodLoginName`<sup>Optional</sup> <a name="passwordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.passwordAuthMethodLoginName"></a>

- *Type:* java.lang.String

The auth method login name for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#password_auth_method_login_name BoundaryProvider#password_auth_method_login_name}

---

##### `passwordAuthMethodPassword`<sup>Optional</sup> <a name="passwordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.passwordAuthMethodPassword"></a>

- *Type:* java.lang.String

The auth method password for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#password_auth_method_password BoundaryProvider#password_auth_method_password}

---

##### `pluginExecutionDir`<sup>Optional</sup> <a name="pluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.pluginExecutionDir"></a>

- *Type:* java.lang.String

Specifies a directory that the Boundary provider can use to write and execute its built-in plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#plugin_execution_dir BoundaryProvider#plugin_execution_dir}

---

##### `recoveryKmsHcl`<sup>Optional</sup> <a name="recoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.recoveryKmsHcl"></a>

- *Type:* java.lang.String

Can be a heredoc string or a path on disk.

If set, the string/file will be parsed as HCL and used with the recovery KMS mechanism. While this is set, it will override any other authentication information; the KMS mechanism will always be used. See Boundary's KMS docs for examples: https://boundaryproject.io/docs/configuration/kms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#recovery_kms_hcl BoundaryProvider#recovery_kms_hcl}

---

##### `scopeId`<sup>Optional</sup> <a name="scopeId" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

The scope ID for the default auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#scope_id BoundaryProvider#scope_id}

---

##### `tlsInsecure`<sup>Optional</sup> <a name="tlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.tlsInsecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, does not validate the Boundary API endpoint certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#tls_insecure BoundaryProvider#tls_insecure}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

The Boundary token to use, as a string or path on disk containing just the string.

If set, the token read here will be used in place of authenticating with the auth method specified in "auth_method_id", although the recovery KMS mechanism will still override this. Can also be set with the BOUNDARY_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#token BoundaryProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodId">resetAuthMethodId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodLoginName">resetAuthMethodLoginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodPassword">resetAuthMethodPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodLoginName">resetPasswordAuthMethodLoginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodPassword">resetPasswordAuthMethodPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPluginExecutionDir">resetPluginExecutionDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetRecoveryKmsHcl">resetRecoveryKmsHcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetScopeId">resetScopeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetTlsInsecure">resetTlsInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.provider.BoundaryProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.provider.BoundaryProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.provider.BoundaryProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.provider.BoundaryProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAuthMethodId` <a name="resetAuthMethodId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodId"></a>

```java
public void resetAuthMethodId()
```

##### `resetAuthMethodLoginName` <a name="resetAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodLoginName"></a>

```java
public void resetAuthMethodLoginName()
```

##### `resetAuthMethodPassword` <a name="resetAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodPassword"></a>

```java
public void resetAuthMethodPassword()
```

##### `resetPasswordAuthMethodLoginName` <a name="resetPasswordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodLoginName"></a>

```java
public void resetPasswordAuthMethodLoginName()
```

##### `resetPasswordAuthMethodPassword` <a name="resetPasswordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodPassword"></a>

```java
public void resetPasswordAuthMethodPassword()
```

##### `resetPluginExecutionDir` <a name="resetPluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPluginExecutionDir"></a>

```java
public void resetPluginExecutionDir()
```

##### `resetRecoveryKmsHcl` <a name="resetRecoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetRecoveryKmsHcl"></a>

```java
public void resetRecoveryKmsHcl()
```

##### `resetScopeId` <a name="resetScopeId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetScopeId"></a>

```java
public void resetScopeId()
```

##### `resetTlsInsecure` <a name="resetTlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetTlsInsecure"></a>

```java
public void resetTlsInsecure()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BoundaryProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.provider.BoundaryProvider;

BoundaryProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.provider.BoundaryProvider;

BoundaryProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.boundary.provider.BoundaryProvider;

BoundaryProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.provider.BoundaryProvider;

BoundaryProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BoundaryProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BoundaryProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BoundaryProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BoundaryProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.provider.BoundaryProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BoundaryProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.addrInput">addrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodIdInput">authMethodIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginNameInput">authMethodLoginNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPasswordInput">authMethodPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginNameInput">passwordAuthMethodLoginNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPasswordInput">passwordAuthMethodPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDirInput">pluginExecutionDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHclInput">recoveryKmsHclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecureInput">tlsInsecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.addr">addr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodId">authMethodId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginName">authMethodLoginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPassword">authMethodPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginName">passwordAuthMethodLoginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPassword">passwordAuthMethodPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDir">pluginExecutionDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHcl">recoveryKmsHcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecure">tlsInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `addrInput`<sup>Optional</sup> <a name="addrInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.addrInput"></a>

```java
public java.lang.String getAddrInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `authMethodIdInput`<sup>Optional</sup> <a name="authMethodIdInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodIdInput"></a>

```java
public java.lang.String getAuthMethodIdInput();
```

- *Type:* java.lang.String

---

##### `authMethodLoginNameInput`<sup>Optional</sup> <a name="authMethodLoginNameInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginNameInput"></a>

```java
public java.lang.String getAuthMethodLoginNameInput();
```

- *Type:* java.lang.String

---

##### `authMethodPasswordInput`<sup>Optional</sup> <a name="authMethodPasswordInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPasswordInput"></a>

```java
public java.lang.String getAuthMethodPasswordInput();
```

- *Type:* java.lang.String

---

##### `passwordAuthMethodLoginNameInput`<sup>Optional</sup> <a name="passwordAuthMethodLoginNameInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginNameInput"></a>

```java
public java.lang.String getPasswordAuthMethodLoginNameInput();
```

- *Type:* java.lang.String

---

##### `passwordAuthMethodPasswordInput`<sup>Optional</sup> <a name="passwordAuthMethodPasswordInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPasswordInput"></a>

```java
public java.lang.String getPasswordAuthMethodPasswordInput();
```

- *Type:* java.lang.String

---

##### `pluginExecutionDirInput`<sup>Optional</sup> <a name="pluginExecutionDirInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDirInput"></a>

```java
public java.lang.String getPluginExecutionDirInput();
```

- *Type:* java.lang.String

---

##### `recoveryKmsHclInput`<sup>Optional</sup> <a name="recoveryKmsHclInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHclInput"></a>

```java
public java.lang.String getRecoveryKmsHclInput();
```

- *Type:* java.lang.String

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `tlsInsecureInput`<sup>Optional</sup> <a name="tlsInsecureInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecureInput"></a>

```java
public java.lang.Object getTlsInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `addr`<sup>Optional</sup> <a name="addr" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.addr"></a>

```java
public java.lang.String getAddr();
```

- *Type:* java.lang.String

---

##### `authMethodId`<sup>Optional</sup> <a name="authMethodId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodId"></a>

```java
public java.lang.String getAuthMethodId();
```

- *Type:* java.lang.String

---

##### `authMethodLoginName`<sup>Optional</sup> <a name="authMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginName"></a>

```java
public java.lang.String getAuthMethodLoginName();
```

- *Type:* java.lang.String

---

##### `authMethodPassword`<sup>Optional</sup> <a name="authMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPassword"></a>

```java
public java.lang.String getAuthMethodPassword();
```

- *Type:* java.lang.String

---

##### `passwordAuthMethodLoginName`<sup>Optional</sup> <a name="passwordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginName"></a>

```java
public java.lang.String getPasswordAuthMethodLoginName();
```

- *Type:* java.lang.String

---

##### `passwordAuthMethodPassword`<sup>Optional</sup> <a name="passwordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPassword"></a>

```java
public java.lang.String getPasswordAuthMethodPassword();
```

- *Type:* java.lang.String

---

##### `pluginExecutionDir`<sup>Optional</sup> <a name="pluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDir"></a>

```java
public java.lang.String getPluginExecutionDir();
```

- *Type:* java.lang.String

---

##### `recoveryKmsHcl`<sup>Optional</sup> <a name="recoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHcl"></a>

```java
public java.lang.String getRecoveryKmsHcl();
```

- *Type:* java.lang.String

---

##### `scopeId`<sup>Optional</sup> <a name="scopeId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

##### `tlsInsecure`<sup>Optional</sup> <a name="tlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecure"></a>

```java
public java.lang.Object getTlsInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BoundaryProviderConfig <a name="BoundaryProviderConfig" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.provider.BoundaryProviderConfig;

BoundaryProviderConfig.builder()
    .addr(java.lang.String)
//  .alias(java.lang.String)
//  .authMethodId(java.lang.String)
//  .authMethodLoginName(java.lang.String)
//  .authMethodPassword(java.lang.String)
//  .passwordAuthMethodLoginName(java.lang.String)
//  .passwordAuthMethodPassword(java.lang.String)
//  .pluginExecutionDir(java.lang.String)
//  .recoveryKmsHcl(java.lang.String)
//  .scopeId(java.lang.String)
//  .tlsInsecure(java.lang.Boolean)
//  .tlsInsecure(IResolvable)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.addr">addr</a></code> | <code>java.lang.String</code> | The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodId">authMethodId</a></code> | <code>java.lang.String</code> | The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodLoginName">authMethodLoginName</a></code> | <code>java.lang.String</code> | The auth method login name for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodPassword">authMethodPassword</a></code> | <code>java.lang.String</code> | The auth method password for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodLoginName">passwordAuthMethodLoginName</a></code> | <code>java.lang.String</code> | The auth method login name for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodPassword">passwordAuthMethodPassword</a></code> | <code>java.lang.String</code> | The auth method password for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.pluginExecutionDir">pluginExecutionDir</a></code> | <code>java.lang.String</code> | Specifies a directory that the Boundary provider can use to write and execute its built-in plugins. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.recoveryKmsHcl">recoveryKmsHcl</a></code> | <code>java.lang.String</code> | Can be a heredoc string or a path on disk. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope ID for the default auth method. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.tlsInsecure">tlsInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, does not validate the Boundary API endpoint certificate. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | The Boundary token to use, as a string or path on disk containing just the string. |

---

##### `addr`<sup>Required</sup> <a name="addr" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.addr"></a>

```java
public java.lang.String getAddr();
```

- *Type:* java.lang.String

The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#addr BoundaryProvider#addr}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#alias BoundaryProvider#alias}

---

##### `authMethodId`<sup>Optional</sup> <a name="authMethodId" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodId"></a>

```java
public java.lang.String getAuthMethodId();
```

- *Type:* java.lang.String

The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#auth_method_id BoundaryProvider#auth_method_id}

---

##### `authMethodLoginName`<sup>Optional</sup> <a name="authMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodLoginName"></a>

```java
public java.lang.String getAuthMethodLoginName();
```

- *Type:* java.lang.String

The auth method login name for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#auth_method_login_name BoundaryProvider#auth_method_login_name}

---

##### `authMethodPassword`<sup>Optional</sup> <a name="authMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodPassword"></a>

```java
public java.lang.String getAuthMethodPassword();
```

- *Type:* java.lang.String

The auth method password for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#auth_method_password BoundaryProvider#auth_method_password}

---

##### `passwordAuthMethodLoginName`<sup>Optional</sup> <a name="passwordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodLoginName"></a>

```java
public java.lang.String getPasswordAuthMethodLoginName();
```

- *Type:* java.lang.String

The auth method login name for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#password_auth_method_login_name BoundaryProvider#password_auth_method_login_name}

---

##### `passwordAuthMethodPassword`<sup>Optional</sup> <a name="passwordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodPassword"></a>

```java
public java.lang.String getPasswordAuthMethodPassword();
```

- *Type:* java.lang.String

The auth method password for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#password_auth_method_password BoundaryProvider#password_auth_method_password}

---

##### `pluginExecutionDir`<sup>Optional</sup> <a name="pluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.pluginExecutionDir"></a>

```java
public java.lang.String getPluginExecutionDir();
```

- *Type:* java.lang.String

Specifies a directory that the Boundary provider can use to write and execute its built-in plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#plugin_execution_dir BoundaryProvider#plugin_execution_dir}

---

##### `recoveryKmsHcl`<sup>Optional</sup> <a name="recoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.recoveryKmsHcl"></a>

```java
public java.lang.String getRecoveryKmsHcl();
```

- *Type:* java.lang.String

Can be a heredoc string or a path on disk.

If set, the string/file will be parsed as HCL and used with the recovery KMS mechanism. While this is set, it will override any other authentication information; the KMS mechanism will always be used. See Boundary's KMS docs for examples: https://boundaryproject.io/docs/configuration/kms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#recovery_kms_hcl BoundaryProvider#recovery_kms_hcl}

---

##### `scopeId`<sup>Optional</sup> <a name="scopeId" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

The scope ID for the default auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#scope_id BoundaryProvider#scope_id}

---

##### `tlsInsecure`<sup>Optional</sup> <a name="tlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.tlsInsecure"></a>

```java
public java.lang.Object getTlsInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, does not validate the Boundary API endpoint certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#tls_insecure BoundaryProvider#tls_insecure}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The Boundary token to use, as a string or path on disk containing just the string.

If set, the token read here will be used in place of authenticating with the auth method specified in "auth_method_id", although the recovery KMS mechanism will still override this. Can also be set with the BOUNDARY_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.13/docs#token BoundaryProvider#token}

---



