# `boundary_credential_library_vault_ssh_certificate`

Refer to the Terraform Registory for docs: [`boundary_credential_library_vault_ssh_certificate`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate).

# `credentialLibraryVaultSshCertificate` Submodule <a name="`credentialLibraryVaultSshCertificate` Submodule" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialLibraryVaultSshCertificate <a name="CredentialLibraryVaultSshCertificate" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate boundary_credential_library_vault_ssh_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v6/credentiallibraryvaultsshcertificate"

credentiallibraryvaultsshcertificate.NewCredentialLibraryVaultSshCertificate(scope Construct, id *string, config CredentialLibraryVaultSshCertificateConfig) CredentialLibraryVaultSshCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig">CredentialLibraryVaultSshCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig">CredentialLibraryVaultSshCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetCriticalOptions">ResetCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetExtensions">ResetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyBits">ResetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCriticalOptions` <a name="ResetCriticalOptions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetCriticalOptions"></a>

```go
func ResetCriticalOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExtensions` <a name="ResetExtensions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetExtensions"></a>

```go
func ResetExtensions()
```

##### `ResetKeyBits` <a name="ResetKeyBits" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyBits"></a>

```go
func ResetKeyBits()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyId"></a>

```go
func ResetKeyId()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetName"></a>

```go
func ResetName()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v6/credentiallibraryvaultsshcertificate"

credentiallibraryvaultsshcertificate.CredentialLibraryVaultSshCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v6/credentiallibraryvaultsshcertificate"

credentiallibraryvaultsshcertificate.CredentialLibraryVaultSshCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v6/credentiallibraryvaultsshcertificate"

credentiallibraryvaultsshcertificate.CredentialLibraryVaultSshCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.credentialStoreIdInput">CredentialStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.criticalOptionsInput">CriticalOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.extensionsInput">ExtensionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyBitsInput">KeyBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.credentialStoreId">CredentialStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.criticalOptions">CriticalOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.extensions">Extensions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyBits">KeyBits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CredentialStoreIdInput`<sup>Optional</sup> <a name="CredentialStoreIdInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.credentialStoreIdInput"></a>

```go
func CredentialStoreIdInput() *string
```

- *Type:* *string

---

##### `CriticalOptionsInput`<sup>Optional</sup> <a name="CriticalOptionsInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.criticalOptionsInput"></a>

```go
func CriticalOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.extensionsInput"></a>

```go
func ExtensionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KeyBitsInput`<sup>Optional</sup> <a name="KeyBitsInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyBitsInput"></a>

```go
func KeyBitsInput() *f64
```

- *Type:* *f64

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `CredentialStoreId`<sup>Required</sup> <a name="CredentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.credentialStoreId"></a>

```go
func CredentialStoreId() *string
```

- *Type:* *string

---

##### `CriticalOptions`<sup>Required</sup> <a name="CriticalOptions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.criticalOptions"></a>

```go
func CriticalOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.extensions"></a>

```go
func Extensions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KeyBits`<sup>Required</sup> <a name="KeyBits" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyBits"></a>

```go
func KeyBits() *f64
```

- *Type:* *f64

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialLibraryVaultSshCertificateConfig <a name="CredentialLibraryVaultSshCertificateConfig" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v6/credentiallibraryvaultsshcertificate"

&credentiallibraryvaultsshcertificate.CredentialLibraryVaultSshCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CredentialStoreId: *string,
	Path: *string,
	Username: *string,
	CriticalOptions: *map[string]*string,
	Description: *string,
	Extensions: *map[string]*string,
	KeyBits: *f64,
	KeyId: *string,
	KeyType: *string,
	Name: *string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.credentialStoreId">CredentialStoreId</a></code> | <code>*string</code> | The ID of the credential store that this library belongs to. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.path">Path</a></code> | <code>*string</code> | The path in Vault to request credentials from. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.username">Username</a></code> | <code>*string</code> | The username to use with the certificate returned by the library. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.criticalOptions">CriticalOptions</a></code> | <code>*map[string]*string</code> | Specifies a map of the critical options that the certificate should be signed for. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.description">Description</a></code> | <code>*string</code> | The Vault credential library description. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.extensions">Extensions</a></code> | <code>*map[string]*string</code> | Specifies a map of the extensions that the certificate should be signed for. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyBits">KeyBits</a></code> | <code>*f64</code> | Specifies the number of bits to use for the generated keys. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Specifies the key id a certificate should have. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyType">KeyType</a></code> | <code>*string</code> | Specifies the desired key type; must be ed25519, ecdsa, or rsa. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.name">Name</a></code> | <code>*string</code> | The Vault credential library name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Specifies the requested time to live for a certificate returned from the library. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CredentialStoreId`<sup>Required</sup> <a name="CredentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.credentialStoreId"></a>

```go
CredentialStoreId *string
```

- *Type:* *string

The ID of the credential store that this library belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#credential_store_id CredentialLibraryVaultSshCertificate#credential_store_id}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path in Vault to request credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#path CredentialLibraryVaultSshCertificate#path}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to use with the certificate returned by the library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#username CredentialLibraryVaultSshCertificate#username}

---

##### `CriticalOptions`<sup>Optional</sup> <a name="CriticalOptions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.criticalOptions"></a>

```go
CriticalOptions *map[string]*string
```

- *Type:* *map[string]*string

Specifies a map of the critical options that the certificate should be signed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#critical_options CredentialLibraryVaultSshCertificate#critical_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The Vault credential library description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#description CredentialLibraryVaultSshCertificate#description}

---

##### `Extensions`<sup>Optional</sup> <a name="Extensions" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.extensions"></a>

```go
Extensions *map[string]*string
```

- *Type:* *map[string]*string

Specifies a map of the extensions that the certificate should be signed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#extensions CredentialLibraryVaultSshCertificate#extensions}

---

##### `KeyBits`<sup>Optional</sup> <a name="KeyBits" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyBits"></a>

```go
KeyBits *f64
```

- *Type:* *f64

Specifies the number of bits to use for the generated keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#key_bits CredentialLibraryVaultSshCertificate#key_bits}

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Specifies the key id a certificate should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#key_id CredentialLibraryVaultSshCertificate#key_id}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Specifies the desired key type; must be ed25519, ecdsa, or rsa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#key_type CredentialLibraryVaultSshCertificate#key_type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Vault credential library name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#name CredentialLibraryVaultSshCertificate#name}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-boundary.credentialLibraryVaultSshCertificate.CredentialLibraryVaultSshCertificateConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Specifies the requested time to live for a certificate returned from the library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/credential_library_vault_ssh_certificate#ttl CredentialLibraryVaultSshCertificate#ttl}

---



