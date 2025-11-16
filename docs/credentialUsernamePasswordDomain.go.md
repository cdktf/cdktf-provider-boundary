# `credentialUsernamePasswordDomain` Submodule <a name="`credentialUsernamePasswordDomain` Submodule" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialUsernamePasswordDomain <a name="CredentialUsernamePasswordDomain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain boundary_credential_username_password_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v10/credentialusernamepassworddomain"

credentialusernamepassworddomain.NewCredentialUsernamePasswordDomain(scope Construct, id *string, config CredentialUsernamePasswordDomainConfig) CredentialUsernamePasswordDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig">CredentialUsernamePasswordDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig">CredentialUsernamePasswordDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetName"></a>

```go
func ResetName()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.resetUsername"></a>

```go
func ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialUsernamePasswordDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v10/credentialusernamepassworddomain"

credentialusernamepassworddomain.CredentialUsernamePasswordDomain_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v10/credentialusernamepassworddomain"

credentialusernamepassworddomain.CredentialUsernamePasswordDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v10/credentialusernamepassworddomain"

credentialusernamepassworddomain.CredentialUsernamePasswordDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v10/credentialusernamepassworddomain"

credentialusernamepassworddomain.CredentialUsernamePasswordDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CredentialUsernamePasswordDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CredentialUsernamePasswordDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CredentialUsernamePasswordDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CredentialUsernamePasswordDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordHmac">PasswordHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreIdInput">CredentialStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreId">CredentialStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PasswordHmac`<sup>Required</sup> <a name="PasswordHmac" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordHmac"></a>

```go
func PasswordHmac() *string
```

- *Type:* *string

---

##### `CredentialStoreIdInput`<sup>Optional</sup> <a name="CredentialStoreIdInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreIdInput"></a>

```go
func CredentialStoreIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `CredentialStoreId`<sup>Required</sup> <a name="CredentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.credentialStoreId"></a>

```go
func CredentialStoreId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialUsernamePasswordDomainConfig <a name="CredentialUsernamePasswordDomainConfig" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v10/credentialusernamepassworddomain"

&credentialusernamepassworddomain.CredentialUsernamePasswordDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CredentialStoreId: *string,
	Password: *string,
	Description: *string,
	Domain: *string,
	Name: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.credentialStoreId">CredentialStoreId</a></code> | <code>*string</code> | The credential store in which to save this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.password">Password</a></code> | <code>*string</code> | The password of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.description">Description</a></code> | <code>*string</code> | The description of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.domain">Domain</a></code> | <code>*string</code> | The domain of this username-password-domain credential. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.name">Name</a></code> | <code>*string</code> | The name of this username-password-domain credential. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.username">Username</a></code> | <code>*string</code> | This field is required even though it is marked as optional. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CredentialStoreId`<sup>Required</sup> <a name="CredentialStoreId" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.credentialStoreId"></a>

```go
CredentialStoreId *string
```

- *Type:* *string

The credential store in which to save this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#credential_store_id CredentialUsernamePasswordDomain#credential_store_id}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password of this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#password CredentialUsernamePasswordDomain#password}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of this username-password-domain credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#description CredentialUsernamePasswordDomain#description}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The domain of this username-password-domain credential.

This field is required unless provided as part of the username field instead (see username field description).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#domain CredentialUsernamePasswordDomain#domain}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this username-password-domain credential. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#name CredentialUsernamePasswordDomain#name}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-boundary.credentialUsernamePasswordDomain.CredentialUsernamePasswordDomainConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

This field is required even though it is marked as optional.

The username of this username-password-domain credential. Can also contain a domain if provided as username@domain or domain\username

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.4.0/docs/resources/credential_username_password_domain#username CredentialUsernamePasswordDomain#username}

---



