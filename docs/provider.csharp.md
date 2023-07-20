# `provider`

Refer to the Terraform Registory for docs: [`boundary`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-boundary.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BoundaryProvider <a name="BoundaryProvider" id="@cdktf/provider-boundary.provider.BoundaryProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs boundary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new BoundaryProvider(Construct Scope, string Id, BoundaryProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig">BoundaryProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig">BoundaryProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodId">ResetAuthMethodId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodLoginName">ResetAuthMethodLoginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodPassword">ResetAuthMethodPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodLoginName">ResetPasswordAuthMethodLoginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodPassword">ResetPasswordAuthMethodPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetPluginExecutionDir">ResetPluginExecutionDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetRecoveryKmsHcl">ResetRecoveryKmsHcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetScopeId">ResetScopeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetTlsInsecure">ResetTlsInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.provider.BoundaryProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.provider.BoundaryProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.provider.BoundaryProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAuthMethodId` <a name="ResetAuthMethodId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodId"></a>

```csharp
private void ResetAuthMethodId()
```

##### `ResetAuthMethodLoginName` <a name="ResetAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodLoginName"></a>

```csharp
private void ResetAuthMethodLoginName()
```

##### `ResetAuthMethodPassword` <a name="ResetAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodPassword"></a>

```csharp
private void ResetAuthMethodPassword()
```

##### `ResetPasswordAuthMethodLoginName` <a name="ResetPasswordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodLoginName"></a>

```csharp
private void ResetPasswordAuthMethodLoginName()
```

##### `ResetPasswordAuthMethodPassword` <a name="ResetPasswordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodPassword"></a>

```csharp
private void ResetPasswordAuthMethodPassword()
```

##### `ResetPluginExecutionDir` <a name="ResetPluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPluginExecutionDir"></a>

```csharp
private void ResetPluginExecutionDir()
```

##### `ResetRecoveryKmsHcl` <a name="ResetRecoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetRecoveryKmsHcl"></a>

```csharp
private void ResetRecoveryKmsHcl()
```

##### `ResetScopeId` <a name="ResetScopeId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetScopeId"></a>

```csharp
private void ResetScopeId()
```

##### `ResetTlsInsecure` <a name="ResetTlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetTlsInsecure"></a>

```csharp
private void ResetTlsInsecure()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

BoundaryProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

BoundaryProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

BoundaryProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.addrInput">AddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodIdInput">AuthMethodIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginNameInput">AuthMethodLoginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPasswordInput">AuthMethodPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginNameInput">PasswordAuthMethodLoginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPasswordInput">PasswordAuthMethodPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDirInput">PluginExecutionDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHclInput">RecoveryKmsHclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecureInput">TlsInsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.addr">Addr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodId">AuthMethodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginName">AuthMethodLoginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPassword">AuthMethodPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginName">PasswordAuthMethodLoginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPassword">PasswordAuthMethodPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDir">PluginExecutionDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHcl">RecoveryKmsHcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecure">TlsInsecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AddrInput`<sup>Optional</sup> <a name="AddrInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.addrInput"></a>

```csharp
public string AddrInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AuthMethodIdInput`<sup>Optional</sup> <a name="AuthMethodIdInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodIdInput"></a>

```csharp
public string AuthMethodIdInput { get; }
```

- *Type:* string

---

##### `AuthMethodLoginNameInput`<sup>Optional</sup> <a name="AuthMethodLoginNameInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginNameInput"></a>

```csharp
public string AuthMethodLoginNameInput { get; }
```

- *Type:* string

---

##### `AuthMethodPasswordInput`<sup>Optional</sup> <a name="AuthMethodPasswordInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPasswordInput"></a>

```csharp
public string AuthMethodPasswordInput { get; }
```

- *Type:* string

---

##### `PasswordAuthMethodLoginNameInput`<sup>Optional</sup> <a name="PasswordAuthMethodLoginNameInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginNameInput"></a>

```csharp
public string PasswordAuthMethodLoginNameInput { get; }
```

- *Type:* string

---

##### `PasswordAuthMethodPasswordInput`<sup>Optional</sup> <a name="PasswordAuthMethodPasswordInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPasswordInput"></a>

```csharp
public string PasswordAuthMethodPasswordInput { get; }
```

- *Type:* string

---

##### `PluginExecutionDirInput`<sup>Optional</sup> <a name="PluginExecutionDirInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDirInput"></a>

```csharp
public string PluginExecutionDirInput { get; }
```

- *Type:* string

---

##### `RecoveryKmsHclInput`<sup>Optional</sup> <a name="RecoveryKmsHclInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHclInput"></a>

```csharp
public string RecoveryKmsHclInput { get; }
```

- *Type:* string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `TlsInsecureInput`<sup>Optional</sup> <a name="TlsInsecureInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecureInput"></a>

```csharp
public object TlsInsecureInput { get; }
```

- *Type:* object

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Addr`<sup>Optional</sup> <a name="Addr" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.addr"></a>

```csharp
public string Addr { get; }
```

- *Type:* string

---

##### `AuthMethodId`<sup>Optional</sup> <a name="AuthMethodId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodId"></a>

```csharp
public string AuthMethodId { get; }
```

- *Type:* string

---

##### `AuthMethodLoginName`<sup>Optional</sup> <a name="AuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginName"></a>

```csharp
public string AuthMethodLoginName { get; }
```

- *Type:* string

---

##### `AuthMethodPassword`<sup>Optional</sup> <a name="AuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPassword"></a>

```csharp
public string AuthMethodPassword { get; }
```

- *Type:* string

---

##### `PasswordAuthMethodLoginName`<sup>Optional</sup> <a name="PasswordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginName"></a>

```csharp
public string PasswordAuthMethodLoginName { get; }
```

- *Type:* string

---

##### `PasswordAuthMethodPassword`<sup>Optional</sup> <a name="PasswordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPassword"></a>

```csharp
public string PasswordAuthMethodPassword { get; }
```

- *Type:* string

---

##### `PluginExecutionDir`<sup>Optional</sup> <a name="PluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDir"></a>

```csharp
public string PluginExecutionDir { get; }
```

- *Type:* string

---

##### `RecoveryKmsHcl`<sup>Optional</sup> <a name="RecoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHcl"></a>

```csharp
public string RecoveryKmsHcl { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Optional</sup> <a name="ScopeId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `TlsInsecure`<sup>Optional</sup> <a name="TlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecure"></a>

```csharp
public object TlsInsecure { get; }
```

- *Type:* object

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BoundaryProviderConfig <a name="BoundaryProviderConfig" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new BoundaryProviderConfig {
    string Addr,
    string Alias = null,
    string AuthMethodId = null,
    string AuthMethodLoginName = null,
    string AuthMethodPassword = null,
    string PasswordAuthMethodLoginName = null,
    string PasswordAuthMethodPassword = null,
    string PluginExecutionDir = null,
    string RecoveryKmsHcl = null,
    string ScopeId = null,
    object TlsInsecure = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.addr">Addr</a></code> | <code>string</code> | The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodId">AuthMethodId</a></code> | <code>string</code> | The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodLoginName">AuthMethodLoginName</a></code> | <code>string</code> | The auth method login name for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodPassword">AuthMethodPassword</a></code> | <code>string</code> | The auth method password for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodLoginName">PasswordAuthMethodLoginName</a></code> | <code>string</code> | The auth method login name for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodPassword">PasswordAuthMethodPassword</a></code> | <code>string</code> | The auth method password for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.pluginExecutionDir">PluginExecutionDir</a></code> | <code>string</code> | Specifies a directory that the Boundary provider can use to write and execute its built-in plugins. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.recoveryKmsHcl">RecoveryKmsHcl</a></code> | <code>string</code> | Can be a heredoc string or a path on disk. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | The scope ID for the default auth method. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.tlsInsecure">TlsInsecure</a></code> | <code>object</code> | When set to true, does not validate the Boundary API endpoint certificate. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.token">Token</a></code> | <code>string</code> | The Boundary token to use, as a string or path on disk containing just the string. |

---

##### `Addr`<sup>Required</sup> <a name="Addr" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.addr"></a>

```csharp
public string Addr { get; set; }
```

- *Type:* string

The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#addr BoundaryProvider#addr}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#alias BoundaryProvider#alias}

---

##### `AuthMethodId`<sup>Optional</sup> <a name="AuthMethodId" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodId"></a>

```csharp
public string AuthMethodId { get; set; }
```

- *Type:* string

The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#auth_method_id BoundaryProvider#auth_method_id}

---

##### `AuthMethodLoginName`<sup>Optional</sup> <a name="AuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodLoginName"></a>

```csharp
public string AuthMethodLoginName { get; set; }
```

- *Type:* string

The auth method login name for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#auth_method_login_name BoundaryProvider#auth_method_login_name}

---

##### `AuthMethodPassword`<sup>Optional</sup> <a name="AuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodPassword"></a>

```csharp
public string AuthMethodPassword { get; set; }
```

- *Type:* string

The auth method password for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#auth_method_password BoundaryProvider#auth_method_password}

---

##### `PasswordAuthMethodLoginName`<sup>Optional</sup> <a name="PasswordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodLoginName"></a>

```csharp
public string PasswordAuthMethodLoginName { get; set; }
```

- *Type:* string

The auth method login name for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#password_auth_method_login_name BoundaryProvider#password_auth_method_login_name}

---

##### `PasswordAuthMethodPassword`<sup>Optional</sup> <a name="PasswordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodPassword"></a>

```csharp
public string PasswordAuthMethodPassword { get; set; }
```

- *Type:* string

The auth method password for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#password_auth_method_password BoundaryProvider#password_auth_method_password}

---

##### `PluginExecutionDir`<sup>Optional</sup> <a name="PluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.pluginExecutionDir"></a>

```csharp
public string PluginExecutionDir { get; set; }
```

- *Type:* string

Specifies a directory that the Boundary provider can use to write and execute its built-in plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#plugin_execution_dir BoundaryProvider#plugin_execution_dir}

---

##### `RecoveryKmsHcl`<sup>Optional</sup> <a name="RecoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.recoveryKmsHcl"></a>

```csharp
public string RecoveryKmsHcl { get; set; }
```

- *Type:* string

Can be a heredoc string or a path on disk.

If set, the string/file will be parsed as HCL and used with the recovery KMS mechanism. While this is set, it will override any other authentication information; the KMS mechanism will always be used. See Boundary's KMS docs for examples: https://boundaryproject.io/docs/configuration/kms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#recovery_kms_hcl BoundaryProvider#recovery_kms_hcl}

---

##### `ScopeId`<sup>Optional</sup> <a name="ScopeId" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

The scope ID for the default auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#scope_id BoundaryProvider#scope_id}

---

##### `TlsInsecure`<sup>Optional</sup> <a name="TlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.tlsInsecure"></a>

```csharp
public object TlsInsecure { get; set; }
```

- *Type:* object

When set to true, does not validate the Boundary API endpoint certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#tls_insecure BoundaryProvider#tls_insecure}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The Boundary token to use, as a string or path on disk containing just the string.

If set, the token read here will be used in place of authenticating with the auth method specified in "auth_method_id", although the recovery KMS mechanism will still override this. Can also be set with the BOUNDARY_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#token BoundaryProvider#token}

---



