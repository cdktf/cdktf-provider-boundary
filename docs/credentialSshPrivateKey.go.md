# `boundary_credential_ssh_private_key`

Refer to the Terraform Registory for docs: [`boundary_credential_ssh_private_key`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/credential_ssh_private_key).

# `credentialSshPrivateKey` Submodule <a name="`credentialSshPrivateKey` Submodule" id="@cdktf/provider-boundary.credentialSshPrivateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialSshPrivateKey <a name="CredentialSshPrivateKey" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/credential_ssh_private_key boundary_credential_ssh_private_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/credentialsshprivatekey"

credentialsshprivatekey.NewCredentialSshPrivateKey(scope Construct, id *string, config CredentialSshPrivateKeyConfig) CredentialSshPrivateKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig">CredentialSshPrivateKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig">CredentialSshPrivateKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetPrivateKeyPassphrase">ResetPrivateKeyPassphrase</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetName"></a>

```go
func ResetName()
```

##### `ResetPrivateKeyPassphrase` <a name="ResetPrivateKeyPassphrase" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.resetPrivateKeyPassphrase"></a>

```go
func ResetPrivateKeyPassphrase()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/credentialsshprivatekey"

credentialsshprivatekey.CredentialSshPrivateKey_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/credentialsshprivatekey"

credentialsshprivatekey.CredentialSshPrivateKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/credentialsshprivatekey"

credentialsshprivatekey.CredentialSshPrivateKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyHmac">PrivateKeyHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseHmac">PrivateKeyPassphraseHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreIdInput">CredentialStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseInput">PrivateKeyPassphraseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreId">CredentialStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateKeyHmac`<sup>Required</sup> <a name="PrivateKeyHmac" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyHmac"></a>

```go
func PrivateKeyHmac() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphraseHmac`<sup>Required</sup> <a name="PrivateKeyPassphraseHmac" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseHmac"></a>

```go
func PrivateKeyPassphraseHmac() *string
```

- *Type:* *string

---

##### `CredentialStoreIdInput`<sup>Optional</sup> <a name="CredentialStoreIdInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreIdInput"></a>

```go
func CredentialStoreIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphraseInput`<sup>Optional</sup> <a name="PrivateKeyPassphraseInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphraseInput"></a>

```go
func PrivateKeyPassphraseInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `CredentialStoreId`<sup>Required</sup> <a name="CredentialStoreId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.credentialStoreId"></a>

```go
func CredentialStoreId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphrase`<sup>Required</sup> <a name="PrivateKeyPassphrase" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.privateKeyPassphrase"></a>

```go
func PrivateKeyPassphrase() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialSshPrivateKeyConfig <a name="CredentialSshPrivateKeyConfig" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/credentialsshprivatekey"

&credentialsshprivatekey.CredentialSshPrivateKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CredentialStoreId: *string,
	PrivateKey: *string,
	Username: *string,
	Description: *string,
	Name: *string,
	PrivateKeyPassphrase: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.credentialStoreId">CredentialStoreId</a></code> | <code>*string</code> | ID of the credential store this credential belongs to. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The private key associated with the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.username">Username</a></code> | <code>*string</code> | The username associated with the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.description">Description</a></code> | <code>*string</code> | The description of the credential. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the credential. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | The passphrase of the private key associated with the credential. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CredentialStoreId`<sup>Required</sup> <a name="CredentialStoreId" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.credentialStoreId"></a>

```go
CredentialStoreId *string
```

- *Type:* *string

ID of the credential store this credential belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/credential_ssh_private_key#credential_store_id CredentialSshPrivateKey#credential_store_id}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The private key associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/credential_ssh_private_key#private_key CredentialSshPrivateKey#private_key}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/credential_ssh_private_key#username CredentialSshPrivateKey#username}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/credential_ssh_private_key#description CredentialSshPrivateKey#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/credential_ssh_private_key#name CredentialSshPrivateKey#name}

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="@cdktf/provider-boundary.credentialSshPrivateKey.CredentialSshPrivateKeyConfig.property.privateKeyPassphrase"></a>

```go
PrivateKeyPassphrase *string
```

- *Type:* *string

The passphrase of the private key associated with the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/credential_ssh_private_key#private_key_passphrase CredentialSshPrivateKey#private_key_passphrase}

---



