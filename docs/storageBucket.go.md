# `storageBucket` Submodule <a name="`storageBucket` Submodule" id="@cdktf/provider-boundary.storageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucket <a name="StorageBucket" id="@cdktf/provider-boundary.storageBucket.StorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket boundary_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/storagebucket"

storagebucket.NewStorageBucket(scope Construct, id *string, config StorageBucketConfig) StorageBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig">StorageBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.storageBucket.StorageBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig">StorageBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetAttributesJson">ResetAttributesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginId">ResetPluginId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginName">ResetPluginName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.storageBucket.StorageBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.storageBucket.StorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.storageBucket.StorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.storageBucket.StorageBucket.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAttributesJson` <a name="ResetAttributesJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetAttributesJson"></a>

```go
func ResetAttributesJson()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetBucketPrefix"></a>

```go
func ResetBucketPrefix()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetName"></a>

```go
func ResetName()
```

##### `ResetPluginId` <a name="ResetPluginId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginId"></a>

```go
func ResetPluginId()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.resetPluginName"></a>

```go
func ResetPluginName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/storagebucket"

storagebucket.StorageBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/storagebucket"

storagebucket.StorageBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/storagebucket"

storagebucket.StorageBucket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.storageBucket.StorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/storagebucket"

storagebucket.StorageBucket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalForceUpdate">InternalForceUpdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalHmacUsedForSecretsConfigHmac">InternalHmacUsedForSecretsConfigHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalSecretsConfigHmac">InternalSecretsConfigHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsHmac">SecretsHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJsonInput">AttributesJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginIdInput">PluginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeIdInput">ScopeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJsonInput">SecretsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilterInput">WorkerFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJson">AttributesJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginId">PluginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeId">ScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJson">SecretsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilter">WorkerFilter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalForceUpdate`<sup>Required</sup> <a name="InternalForceUpdate" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalForceUpdate"></a>

```go
func InternalForceUpdate() *string
```

- *Type:* *string

---

##### `InternalHmacUsedForSecretsConfigHmac`<sup>Required</sup> <a name="InternalHmacUsedForSecretsConfigHmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalHmacUsedForSecretsConfigHmac"></a>

```go
func InternalHmacUsedForSecretsConfigHmac() *string
```

- *Type:* *string

---

##### `InternalSecretsConfigHmac`<sup>Required</sup> <a name="InternalSecretsConfigHmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.internalSecretsConfigHmac"></a>

```go
func InternalSecretsConfigHmac() *string
```

- *Type:* *string

---

##### `SecretsHmac`<sup>Required</sup> <a name="SecretsHmac" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsHmac"></a>

```go
func SecretsHmac() *string
```

- *Type:* *string

---

##### `AttributesJsonInput`<sup>Optional</sup> <a name="AttributesJsonInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJsonInput"></a>

```go
func AttributesJsonInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefixInput"></a>

```go
func BucketPrefixInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PluginIdInput`<sup>Optional</sup> <a name="PluginIdInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginIdInput"></a>

```go
func PluginIdInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeIdInput"></a>

```go
func ScopeIdInput() *string
```

- *Type:* *string

---

##### `SecretsJsonInput`<sup>Optional</sup> <a name="SecretsJsonInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJsonInput"></a>

```go
func SecretsJsonInput() *string
```

- *Type:* *string

---

##### `WorkerFilterInput`<sup>Optional</sup> <a name="WorkerFilterInput" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilterInput"></a>

```go
func WorkerFilterInput() *string
```

- *Type:* *string

---

##### `AttributesJson`<sup>Required</sup> <a name="AttributesJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.attributesJson"></a>

```go
func AttributesJson() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginId"></a>

```go
func PluginId() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.scopeId"></a>

```go
func ScopeId() *string
```

- *Type:* *string

---

##### `SecretsJson`<sup>Required</sup> <a name="SecretsJson" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.secretsJson"></a>

```go
func SecretsJson() *string
```

- *Type:* *string

---

##### `WorkerFilter`<sup>Required</sup> <a name="WorkerFilter" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.workerFilter"></a>

```go
func WorkerFilter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.storageBucket.StorageBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketConfig <a name="StorageBucketConfig" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/storagebucket"

&storagebucket.StorageBucketConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	ScopeId: *string,
	SecretsJson: *string,
	WorkerFilter: *string,
	AttributesJson: *string,
	BucketPrefix: *string,
	Description: *string,
	Name: *string,
	PluginId: *string,
	PluginName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | The name of the bucket within the external object store service. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.scopeId">ScopeId</a></code> | <code>*string</code> | The scope for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.secretsJson">SecretsJson</a></code> | <code>*string</code> | The secrets for the storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.workerFilter">WorkerFilter</a></code> | <code>*string</code> | Filters to the worker(s) that can handle requests for this storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.attributesJson">AttributesJson</a></code> | <code>*string</code> | The attributes for the storage bucket. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | The prefix used to organize the data held within the external object store. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.description">Description</a></code> | <code>*string</code> | The storage bucket description. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.name">Name</a></code> | <code>*string</code> | The storage bucket name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginId">PluginId</a></code> | <code>*string</code> | The ID of the plugin that should back the resource. This or plugin_name must be defined. |
| <code><a href="#@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginName">PluginName</a></code> | <code>*string</code> | The name of the plugin that should back the resource. This or plugin_id must be defined. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The name of the bucket within the external object store service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#bucket_name StorageBucket#bucket_name}

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.scopeId"></a>

```go
ScopeId *string
```

- *Type:* *string

The scope for this storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#scope_id StorageBucket#scope_id}

---

##### `SecretsJson`<sup>Required</sup> <a name="SecretsJson" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.secretsJson"></a>

```go
SecretsJson *string
```

- *Type:* *string

The secrets for the storage bucket.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" to clear any existing values. NOTE: Unlike "attributes_json", removing this block will NOT clear secrets from the storage bucket; this allows injecting secrets for one call, then removing them for storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#secrets_json StorageBucket#secrets_json}

---

##### `WorkerFilter`<sup>Required</sup> <a name="WorkerFilter" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.workerFilter"></a>

```go
WorkerFilter *string
```

- *Type:* *string

Filters to the worker(s) that can handle requests for this storage bucket.

The filter must match an existing worker in order to create a storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#worker_filter StorageBucket#worker_filter}

---

##### `AttributesJson`<sup>Optional</sup> <a name="AttributesJson" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.attributesJson"></a>

```go
AttributesJson *string
```

- *Type:* *string

The attributes for the storage bucket.

The "region" attribute field is required when creating an AWS storage bucket. Values are either encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#attributes_json StorageBucket#attributes_json}

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.bucketPrefix"></a>

```go
BucketPrefix *string
```

- *Type:* *string

The prefix used to organize the data held within the external object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#bucket_prefix StorageBucket#bucket_prefix}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The storage bucket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#description StorageBucket#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The storage bucket name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#name StorageBucket#name}

---

##### `PluginId`<sup>Optional</sup> <a name="PluginId" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginId"></a>

```go
PluginId *string
```

- *Type:* *string

The ID of the plugin that should back the resource. This or plugin_name must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#plugin_id StorageBucket#plugin_id}

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktf/provider-boundary.storageBucket.StorageBucketConfig.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

The name of the plugin that should back the resource. This or plugin_id must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.10/docs/resources/storage_bucket#plugin_name StorageBucket#plugin_name}

---



