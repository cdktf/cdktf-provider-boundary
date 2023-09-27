# `provider`

Refer to the Terraform Registory for docs: [`boundary`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-boundary.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BoundaryProvider <a name="BoundaryProvider" id="@cdktf/provider-boundary.provider.BoundaryProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs boundary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/provider"

provider.NewBoundaryProvider(scope Construct, id *string, config BoundaryProviderConfig) BoundaryProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig">BoundaryProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.provider.BoundaryProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.provider.BoundaryProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.provider.BoundaryProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.provider.BoundaryProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAuthMethodId` <a name="ResetAuthMethodId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodId"></a>

```go
func ResetAuthMethodId()
```

##### `ResetAuthMethodLoginName` <a name="ResetAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodLoginName"></a>

```go
func ResetAuthMethodLoginName()
```

##### `ResetAuthMethodPassword` <a name="ResetAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetAuthMethodPassword"></a>

```go
func ResetAuthMethodPassword()
```

##### `ResetPasswordAuthMethodLoginName` <a name="ResetPasswordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodLoginName"></a>

```go
func ResetPasswordAuthMethodLoginName()
```

##### `ResetPasswordAuthMethodPassword` <a name="ResetPasswordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPasswordAuthMethodPassword"></a>

```go
func ResetPasswordAuthMethodPassword()
```

##### `ResetPluginExecutionDir` <a name="ResetPluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetPluginExecutionDir"></a>

```go
func ResetPluginExecutionDir()
```

##### `ResetRecoveryKmsHcl` <a name="ResetRecoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetRecoveryKmsHcl"></a>

```go
func ResetRecoveryKmsHcl()
```

##### `ResetScopeId` <a name="ResetScopeId" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetScopeId"></a>

```go
func ResetScopeId()
```

##### `ResetTlsInsecure` <a name="ResetTlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetTlsInsecure"></a>

```go
func ResetTlsInsecure()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-boundary.provider.BoundaryProvider.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.provider.BoundaryProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/provider"

provider.BoundaryProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/provider"

provider.BoundaryProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/provider"

provider.BoundaryProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.provider.BoundaryProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.addrInput">AddrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodIdInput">AuthMethodIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginNameInput">AuthMethodLoginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPasswordInput">AuthMethodPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginNameInput">PasswordAuthMethodLoginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPasswordInput">PasswordAuthMethodPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDirInput">PluginExecutionDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHclInput">RecoveryKmsHclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeIdInput">ScopeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecureInput">TlsInsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.addr">Addr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodId">AuthMethodId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginName">AuthMethodLoginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPassword">AuthMethodPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginName">PasswordAuthMethodLoginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPassword">PasswordAuthMethodPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDir">PluginExecutionDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHcl">RecoveryKmsHcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeId">ScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecure">TlsInsecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AddrInput`<sup>Optional</sup> <a name="AddrInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.addrInput"></a>

```go
func AddrInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AuthMethodIdInput`<sup>Optional</sup> <a name="AuthMethodIdInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodIdInput"></a>

```go
func AuthMethodIdInput() *string
```

- *Type:* *string

---

##### `AuthMethodLoginNameInput`<sup>Optional</sup> <a name="AuthMethodLoginNameInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginNameInput"></a>

```go
func AuthMethodLoginNameInput() *string
```

- *Type:* *string

---

##### `AuthMethodPasswordInput`<sup>Optional</sup> <a name="AuthMethodPasswordInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPasswordInput"></a>

```go
func AuthMethodPasswordInput() *string
```

- *Type:* *string

---

##### `PasswordAuthMethodLoginNameInput`<sup>Optional</sup> <a name="PasswordAuthMethodLoginNameInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginNameInput"></a>

```go
func PasswordAuthMethodLoginNameInput() *string
```

- *Type:* *string

---

##### `PasswordAuthMethodPasswordInput`<sup>Optional</sup> <a name="PasswordAuthMethodPasswordInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPasswordInput"></a>

```go
func PasswordAuthMethodPasswordInput() *string
```

- *Type:* *string

---

##### `PluginExecutionDirInput`<sup>Optional</sup> <a name="PluginExecutionDirInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDirInput"></a>

```go
func PluginExecutionDirInput() *string
```

- *Type:* *string

---

##### `RecoveryKmsHclInput`<sup>Optional</sup> <a name="RecoveryKmsHclInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHclInput"></a>

```go
func RecoveryKmsHclInput() *string
```

- *Type:* *string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeIdInput"></a>

```go
func ScopeIdInput() *string
```

- *Type:* *string

---

##### `TlsInsecureInput`<sup>Optional</sup> <a name="TlsInsecureInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecureInput"></a>

```go
func TlsInsecureInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `Addr`<sup>Optional</sup> <a name="Addr" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.addr"></a>

```go
func Addr() *string
```

- *Type:* *string

---

##### `AuthMethodId`<sup>Optional</sup> <a name="AuthMethodId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodId"></a>

```go
func AuthMethodId() *string
```

- *Type:* *string

---

##### `AuthMethodLoginName`<sup>Optional</sup> <a name="AuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodLoginName"></a>

```go
func AuthMethodLoginName() *string
```

- *Type:* *string

---

##### `AuthMethodPassword`<sup>Optional</sup> <a name="AuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.authMethodPassword"></a>

```go
func AuthMethodPassword() *string
```

- *Type:* *string

---

##### `PasswordAuthMethodLoginName`<sup>Optional</sup> <a name="PasswordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodLoginName"></a>

```go
func PasswordAuthMethodLoginName() *string
```

- *Type:* *string

---

##### `PasswordAuthMethodPassword`<sup>Optional</sup> <a name="PasswordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.passwordAuthMethodPassword"></a>

```go
func PasswordAuthMethodPassword() *string
```

- *Type:* *string

---

##### `PluginExecutionDir`<sup>Optional</sup> <a name="PluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.pluginExecutionDir"></a>

```go
func PluginExecutionDir() *string
```

- *Type:* *string

---

##### `RecoveryKmsHcl`<sup>Optional</sup> <a name="RecoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.recoveryKmsHcl"></a>

```go
func RecoveryKmsHcl() *string
```

- *Type:* *string

---

##### `ScopeId`<sup>Optional</sup> <a name="ScopeId" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.scopeId"></a>

```go
func ScopeId() *string
```

- *Type:* *string

---

##### `TlsInsecure`<sup>Optional</sup> <a name="TlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tlsInsecure"></a>

```go
func TlsInsecure() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.provider.BoundaryProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BoundaryProviderConfig <a name="BoundaryProviderConfig" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/provider"

&provider.BoundaryProviderConfig {
	Addr: *string,
	Alias: *string,
	AuthMethodId: *string,
	AuthMethodLoginName: *string,
	AuthMethodPassword: *string,
	PasswordAuthMethodLoginName: *string,
	PasswordAuthMethodPassword: *string,
	PluginExecutionDir: *string,
	RecoveryKmsHcl: *string,
	ScopeId: *string,
	TlsInsecure: interface{},
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.addr">Addr</a></code> | <code>*string</code> | The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodId">AuthMethodId</a></code> | <code>*string</code> | The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodLoginName">AuthMethodLoginName</a></code> | <code>*string</code> | The auth method login name for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodPassword">AuthMethodPassword</a></code> | <code>*string</code> | The auth method password for password-style or ldap-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodLoginName">PasswordAuthMethodLoginName</a></code> | <code>*string</code> | The auth method login name for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodPassword">PasswordAuthMethodPassword</a></code> | <code>*string</code> | The auth method password for password-style auth methods. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.pluginExecutionDir">PluginExecutionDir</a></code> | <code>*string</code> | Specifies a directory that the Boundary provider can use to write and execute its built-in plugins. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.recoveryKmsHcl">RecoveryKmsHcl</a></code> | <code>*string</code> | Can be a heredoc string or a path on disk. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.scopeId">ScopeId</a></code> | <code>*string</code> | The scope ID for the default auth method. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.tlsInsecure">TlsInsecure</a></code> | <code>interface{}</code> | When set to true, does not validate the Boundary API endpoint certificate. |
| <code><a href="#@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.token">Token</a></code> | <code>*string</code> | The Boundary token to use, as a string or path on disk containing just the string. |

---

##### `Addr`<sup>Required</sup> <a name="Addr" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.addr"></a>

```go
Addr *string
```

- *Type:* *string

The base url of the Boundary API, e.g. "http://127.0.0.1:9200". If not set, it will be read from the "BOUNDARY_ADDR" env var.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#addr BoundaryProvider#addr}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#alias BoundaryProvider#alias}

---

##### `AuthMethodId`<sup>Optional</sup> <a name="AuthMethodId" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodId"></a>

```go
AuthMethodId *string
```

- *Type:* *string

The auth method ID e.g. ampw_1234567890. If not set, the default auth method for the given scope ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#auth_method_id BoundaryProvider#auth_method_id}

---

##### `AuthMethodLoginName`<sup>Optional</sup> <a name="AuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodLoginName"></a>

```go
AuthMethodLoginName *string
```

- *Type:* *string

The auth method login name for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#auth_method_login_name BoundaryProvider#auth_method_login_name}

---

##### `AuthMethodPassword`<sup>Optional</sup> <a name="AuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.authMethodPassword"></a>

```go
AuthMethodPassword *string
```

- *Type:* *string

The auth method password for password-style or ldap-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#auth_method_password BoundaryProvider#auth_method_password}

---

##### `PasswordAuthMethodLoginName`<sup>Optional</sup> <a name="PasswordAuthMethodLoginName" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodLoginName"></a>

```go
PasswordAuthMethodLoginName *string
```

- *Type:* *string

The auth method login name for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#password_auth_method_login_name BoundaryProvider#password_auth_method_login_name}

---

##### `PasswordAuthMethodPassword`<sup>Optional</sup> <a name="PasswordAuthMethodPassword" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.passwordAuthMethodPassword"></a>

```go
PasswordAuthMethodPassword *string
```

- *Type:* *string

The auth method password for password-style auth methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#password_auth_method_password BoundaryProvider#password_auth_method_password}

---

##### `PluginExecutionDir`<sup>Optional</sup> <a name="PluginExecutionDir" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.pluginExecutionDir"></a>

```go
PluginExecutionDir *string
```

- *Type:* *string

Specifies a directory that the Boundary provider can use to write and execute its built-in plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#plugin_execution_dir BoundaryProvider#plugin_execution_dir}

---

##### `RecoveryKmsHcl`<sup>Optional</sup> <a name="RecoveryKmsHcl" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.recoveryKmsHcl"></a>

```go
RecoveryKmsHcl *string
```

- *Type:* *string

Can be a heredoc string or a path on disk.

If set, the string/file will be parsed as HCL and used with the recovery KMS mechanism. While this is set, it will override any other authentication information; the KMS mechanism will always be used. See Boundary's KMS docs for examples: https://boundaryproject.io/docs/configuration/kms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#recovery_kms_hcl BoundaryProvider#recovery_kms_hcl}

---

##### `ScopeId`<sup>Optional</sup> <a name="ScopeId" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.scopeId"></a>

```go
ScopeId *string
```

- *Type:* *string

The scope ID for the default auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#scope_id BoundaryProvider#scope_id}

---

##### `TlsInsecure`<sup>Optional</sup> <a name="TlsInsecure" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.tlsInsecure"></a>

```go
TlsInsecure interface{}
```

- *Type:* interface{}

When set to true, does not validate the Boundary API endpoint certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#tls_insecure BoundaryProvider#tls_insecure}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-boundary.provider.BoundaryProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

The Boundary token to use, as a string or path on disk containing just the string.

If set, the token read here will be used in place of authenticating with the auth method specified in "auth_method_id", although the recovery KMS mechanism will still override this. Can also be set with the BOUNDARY_TOKEN environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs#token BoundaryProvider#token}

---



