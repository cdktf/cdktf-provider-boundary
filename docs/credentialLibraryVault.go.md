# `credentialLibraryVault` Submodule <a name="`credentialLibraryVault` Submodule" id="@cdktf/provider-boundary.credentialLibraryVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialLibraryVault <a name="CredentialLibraryVault" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault boundary_credential_library_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/credentiallibraryvault"

credentiallibraryvault.NewCredentialLibraryVault(scope Construct, id *string, config CredentialLibraryVaultConfig) CredentialLibraryVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig">CredentialLibraryVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig">CredentialLibraryVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialMappingOverrides">ResetCredentialMappingOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpRequestBody">ResetHttpRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetCredentialMappingOverrides` <a name="ResetCredentialMappingOverrides" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialMappingOverrides"></a>

```go
func ResetCredentialMappingOverrides()
```

##### `ResetCredentialType` <a name="ResetCredentialType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetCredentialType"></a>

```go
func ResetCredentialType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetHttpRequestBody` <a name="ResetHttpRequestBody" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetHttpRequestBody"></a>

```go
func ResetHttpRequestBody()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialLibraryVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/credentiallibraryvault"

credentiallibraryvault.CredentialLibraryVault_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/credentiallibraryvault"

credentiallibraryvault.CredentialLibraryVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/credentiallibraryvault"

credentiallibraryvault.CredentialLibraryVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/credentiallibraryvault"

credentiallibraryvault.CredentialLibraryVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CredentialLibraryVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CredentialLibraryVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CredentialLibraryVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CredentialLibraryVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverridesInput">CredentialMappingOverridesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreIdInput">CredentialStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBodyInput">HttpRequestBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverrides">CredentialMappingOverrides</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreId">CredentialStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBody">HttpRequestBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.path">Path</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CredentialMappingOverridesInput`<sup>Optional</sup> <a name="CredentialMappingOverridesInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverridesInput"></a>

```go
func CredentialMappingOverridesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CredentialStoreIdInput`<sup>Optional</sup> <a name="CredentialStoreIdInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreIdInput"></a>

```go
func CredentialStoreIdInput() *string
```

- *Type:* *string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialTypeInput"></a>

```go
func CredentialTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `HttpRequestBodyInput`<sup>Optional</sup> <a name="HttpRequestBodyInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBodyInput"></a>

```go
func HttpRequestBodyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `CredentialMappingOverrides`<sup>Required</sup> <a name="CredentialMappingOverrides" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialMappingOverrides"></a>

```go
func CredentialMappingOverrides() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CredentialStoreId`<sup>Required</sup> <a name="CredentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialStoreId"></a>

```go
func CredentialStoreId() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `HttpRequestBody`<sup>Required</sup> <a name="HttpRequestBody" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.httpRequestBody"></a>

```go
func HttpRequestBody() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialLibraryVaultConfig <a name="CredentialLibraryVaultConfig" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v8/credentiallibraryvault"

&credentiallibraryvault.CredentialLibraryVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CredentialStoreId: *string,
	Path: *string,
	CredentialMappingOverrides: *map[string]*string,
	CredentialType: *string,
	Description: *string,
	HttpMethod: *string,
	HttpRequestBody: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialStoreId">CredentialStoreId</a></code> | <code>*string</code> | The ID of the credential store that this library belongs to. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.path">Path</a></code> | <code>*string</code> | The path in Vault to request credentials from. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialMappingOverrides">CredentialMappingOverrides</a></code> | <code>*map[string]*string</code> | The credential mapping override. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialType">CredentialType</a></code> | <code>*string</code> | The type of credential the library generates. Cannot be updated on an existing resource. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.description">Description</a></code> | <code>*string</code> | The Vault credential library description. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | The HTTP method the library uses when requesting credentials from Vault. Defaults to 'GET'. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpRequestBody">HttpRequestBody</a></code> | <code>*string</code> | The body of the HTTP request the library sends to Vault when requesting credentials. |
| <code><a href="#@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.name">Name</a></code> | <code>*string</code> | The Vault credential library name. Defaults to the resource name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CredentialStoreId`<sup>Required</sup> <a name="CredentialStoreId" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialStoreId"></a>

```go
CredentialStoreId *string
```

- *Type:* *string

The ID of the credential store that this library belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_store_id CredentialLibraryVault#credential_store_id}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path in Vault to request credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#path CredentialLibraryVault#path}

---

##### `CredentialMappingOverrides`<sup>Optional</sup> <a name="CredentialMappingOverrides" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialMappingOverrides"></a>

```go
CredentialMappingOverrides *map[string]*string
```

- *Type:* *map[string]*string

The credential mapping override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_mapping_overrides CredentialLibraryVault#credential_mapping_overrides}

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.credentialType"></a>

```go
CredentialType *string
```

- *Type:* *string

The type of credential the library generates. Cannot be updated on an existing resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#credential_type CredentialLibraryVault#credential_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The Vault credential library description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#description CredentialLibraryVault#description}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

The HTTP method the library uses when requesting credentials from Vault. Defaults to 'GET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#http_method CredentialLibraryVault#http_method}

---

##### `HttpRequestBody`<sup>Optional</sup> <a name="HttpRequestBody" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.httpRequestBody"></a>

```go
HttpRequestBody *string
```

- *Type:* *string

The body of the HTTP request the library sends to Vault when requesting credentials.

Only valid if `http_method` is set to `POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#http_request_body CredentialLibraryVault#http_request_body}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.credentialLibraryVault.CredentialLibraryVaultConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Vault credential library name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/credential_library_vault#name CredentialLibraryVault#name}

---



