# `target` Submodule <a name="`target` Submodule" id="@cdktf/provider-boundary.target"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Target <a name="Target" id="@cdktf/provider-boundary.target.Target"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target boundary_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.target.Target.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/target"

target.NewTarget(scope Construct, id *string, config TargetConfig) Target
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.target.Target.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.target.TargetConfig">TargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.target.Target.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.target.TargetConfig">TargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.target.Target.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.target.Target.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.target.Target.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.target.Target.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.target.Target.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetBrokeredCredentialSourceIds">ResetBrokeredCredentialSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDefaultClientPort">ResetDefaultClientPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDefaultPort">ResetDefaultPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetEgressWorkerFilter">ResetEgressWorkerFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetEnableSessionRecording">ResetEnableSessionRecording</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetHostSourceIds">ResetHostSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetIngressWorkerFilter">ResetIngressWorkerFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetInjectedApplicationCredentialSourceIds">ResetInjectedApplicationCredentialSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetSessionConnectionLimit">ResetSessionConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetSessionMaxSeconds">ResetSessionMaxSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetStorageBucketId">ResetStorageBucketId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.resetWorkerFilter">ResetWorkerFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.target.Target.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.target.Target.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.target.Target.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.target.Target.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.target.Target.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.target.Target.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.target.Target.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-boundary.target.Target.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.target.Target.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.target.Target.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-boundary.target.Target.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.target.Target.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.target.Target.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.target.Target.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.target.Target.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.target.Target.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.target.Target.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.target.Target.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.target.Target.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-boundary.target.Target.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-boundary.target.Target.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.target.Target.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.target.Target.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.target.Target.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-boundary.target.Target.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-boundary.target.Target.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.target.Target.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.target.Target.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-boundary.target.Target.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.target.Target.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-boundary.target.Target.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetBrokeredCredentialSourceIds` <a name="ResetBrokeredCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.resetBrokeredCredentialSourceIds"></a>

```go
func ResetBrokeredCredentialSourceIds()
```

##### `ResetDefaultClientPort` <a name="ResetDefaultClientPort" id="@cdktf/provider-boundary.target.Target.resetDefaultClientPort"></a>

```go
func ResetDefaultClientPort()
```

##### `ResetDefaultPort` <a name="ResetDefaultPort" id="@cdktf/provider-boundary.target.Target.resetDefaultPort"></a>

```go
func ResetDefaultPort()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.target.Target.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEgressWorkerFilter` <a name="ResetEgressWorkerFilter" id="@cdktf/provider-boundary.target.Target.resetEgressWorkerFilter"></a>

```go
func ResetEgressWorkerFilter()
```

##### `ResetEnableSessionRecording` <a name="ResetEnableSessionRecording" id="@cdktf/provider-boundary.target.Target.resetEnableSessionRecording"></a>

```go
func ResetEnableSessionRecording()
```

##### `ResetHostSourceIds` <a name="ResetHostSourceIds" id="@cdktf/provider-boundary.target.Target.resetHostSourceIds"></a>

```go
func ResetHostSourceIds()
```

##### `ResetIngressWorkerFilter` <a name="ResetIngressWorkerFilter" id="@cdktf/provider-boundary.target.Target.resetIngressWorkerFilter"></a>

```go
func ResetIngressWorkerFilter()
```

##### `ResetInjectedApplicationCredentialSourceIds` <a name="ResetInjectedApplicationCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.resetInjectedApplicationCredentialSourceIds"></a>

```go
func ResetInjectedApplicationCredentialSourceIds()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.target.Target.resetName"></a>

```go
func ResetName()
```

##### `ResetSessionConnectionLimit` <a name="ResetSessionConnectionLimit" id="@cdktf/provider-boundary.target.Target.resetSessionConnectionLimit"></a>

```go
func ResetSessionConnectionLimit()
```

##### `ResetSessionMaxSeconds` <a name="ResetSessionMaxSeconds" id="@cdktf/provider-boundary.target.Target.resetSessionMaxSeconds"></a>

```go
func ResetSessionMaxSeconds()
```

##### `ResetStorageBucketId` <a name="ResetStorageBucketId" id="@cdktf/provider-boundary.target.Target.resetStorageBucketId"></a>

```go
func ResetStorageBucketId()
```

##### `ResetWorkerFilter` <a name="ResetWorkerFilter" id="@cdktf/provider-boundary.target.Target.resetWorkerFilter"></a>

```go
func ResetWorkerFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.target.Target.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Target resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.target.Target.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/target"

target.Target_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.target.Target.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.target.Target.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/target"

target.Target_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.target.Target.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.target.Target.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/target"

target.Target_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.target.Target.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-boundary.target.Target.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/target"

target.Target_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Target resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Target to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Target that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.target.Target.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Target to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIdsInput">BrokeredCredentialSourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultClientPortInput">DefaultClientPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultPortInput">DefaultPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.egressWorkerFilterInput">EgressWorkerFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.enableSessionRecordingInput">EnableSessionRecordingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.hostSourceIdsInput">HostSourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.ingressWorkerFilterInput">IngressWorkerFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIdsInput">InjectedApplicationCredentialSourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.scopeIdInput">ScopeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionConnectionLimitInput">SessionConnectionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionMaxSecondsInput">SessionMaxSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.storageBucketIdInput">StorageBucketIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.workerFilterInput">WorkerFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIds">BrokeredCredentialSourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultClientPort">DefaultClientPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.defaultPort">DefaultPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.egressWorkerFilter">EgressWorkerFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.enableSessionRecording">EnableSessionRecording</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.hostSourceIds">HostSourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.ingressWorkerFilter">IngressWorkerFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIds">InjectedApplicationCredentialSourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.scopeId">ScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionConnectionLimit">SessionConnectionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.sessionMaxSeconds">SessionMaxSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.storageBucketId">StorageBucketId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.workerFilter">WorkerFilter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.target.Target.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.target.Target.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.target.Target.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.target.Target.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.target.Target.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.target.Target.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.target.Target.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.target.Target.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.target.Target.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.target.Target.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.target.Target.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.target.Target.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.target.Target.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.target.Target.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.target.Target.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-boundary.target.Target.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `BrokeredCredentialSourceIdsInput`<sup>Optional</sup> <a name="BrokeredCredentialSourceIdsInput" id="@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIdsInput"></a>

```go
func BrokeredCredentialSourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultClientPortInput`<sup>Optional</sup> <a name="DefaultClientPortInput" id="@cdktf/provider-boundary.target.Target.property.defaultClientPortInput"></a>

```go
func DefaultClientPortInput() *f64
```

- *Type:* *f64

---

##### `DefaultPortInput`<sup>Optional</sup> <a name="DefaultPortInput" id="@cdktf/provider-boundary.target.Target.property.defaultPortInput"></a>

```go
func DefaultPortInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.target.Target.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EgressWorkerFilterInput`<sup>Optional</sup> <a name="EgressWorkerFilterInput" id="@cdktf/provider-boundary.target.Target.property.egressWorkerFilterInput"></a>

```go
func EgressWorkerFilterInput() *string
```

- *Type:* *string

---

##### `EnableSessionRecordingInput`<sup>Optional</sup> <a name="EnableSessionRecordingInput" id="@cdktf/provider-boundary.target.Target.property.enableSessionRecordingInput"></a>

```go
func EnableSessionRecordingInput() interface{}
```

- *Type:* interface{}

---

##### `HostSourceIdsInput`<sup>Optional</sup> <a name="HostSourceIdsInput" id="@cdktf/provider-boundary.target.Target.property.hostSourceIdsInput"></a>

```go
func HostSourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IngressWorkerFilterInput`<sup>Optional</sup> <a name="IngressWorkerFilterInput" id="@cdktf/provider-boundary.target.Target.property.ingressWorkerFilterInput"></a>

```go
func IngressWorkerFilterInput() *string
```

- *Type:* *string

---

##### `InjectedApplicationCredentialSourceIdsInput`<sup>Optional</sup> <a name="InjectedApplicationCredentialSourceIdsInput" id="@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIdsInput"></a>

```go
func InjectedApplicationCredentialSourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.target.Target.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.target.Target.property.scopeIdInput"></a>

```go
func ScopeIdInput() *string
```

- *Type:* *string

---

##### `SessionConnectionLimitInput`<sup>Optional</sup> <a name="SessionConnectionLimitInput" id="@cdktf/provider-boundary.target.Target.property.sessionConnectionLimitInput"></a>

```go
func SessionConnectionLimitInput() *f64
```

- *Type:* *f64

---

##### `SessionMaxSecondsInput`<sup>Optional</sup> <a name="SessionMaxSecondsInput" id="@cdktf/provider-boundary.target.Target.property.sessionMaxSecondsInput"></a>

```go
func SessionMaxSecondsInput() *f64
```

- *Type:* *f64

---

##### `StorageBucketIdInput`<sup>Optional</sup> <a name="StorageBucketIdInput" id="@cdktf/provider-boundary.target.Target.property.storageBucketIdInput"></a>

```go
func StorageBucketIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-boundary.target.Target.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WorkerFilterInput`<sup>Optional</sup> <a name="WorkerFilterInput" id="@cdktf/provider-boundary.target.Target.property.workerFilterInput"></a>

```go
func WorkerFilterInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-boundary.target.Target.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `BrokeredCredentialSourceIds`<sup>Required</sup> <a name="BrokeredCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.property.brokeredCredentialSourceIds"></a>

```go
func BrokeredCredentialSourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultClientPort`<sup>Required</sup> <a name="DefaultClientPort" id="@cdktf/provider-boundary.target.Target.property.defaultClientPort"></a>

```go
func DefaultClientPort() *f64
```

- *Type:* *f64

---

##### `DefaultPort`<sup>Required</sup> <a name="DefaultPort" id="@cdktf/provider-boundary.target.Target.property.defaultPort"></a>

```go
func DefaultPort() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.target.Target.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EgressWorkerFilter`<sup>Required</sup> <a name="EgressWorkerFilter" id="@cdktf/provider-boundary.target.Target.property.egressWorkerFilter"></a>

```go
func EgressWorkerFilter() *string
```

- *Type:* *string

---

##### `EnableSessionRecording`<sup>Required</sup> <a name="EnableSessionRecording" id="@cdktf/provider-boundary.target.Target.property.enableSessionRecording"></a>

```go
func EnableSessionRecording() interface{}
```

- *Type:* interface{}

---

##### `HostSourceIds`<sup>Required</sup> <a name="HostSourceIds" id="@cdktf/provider-boundary.target.Target.property.hostSourceIds"></a>

```go
func HostSourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `IngressWorkerFilter`<sup>Required</sup> <a name="IngressWorkerFilter" id="@cdktf/provider-boundary.target.Target.property.ingressWorkerFilter"></a>

```go
func IngressWorkerFilter() *string
```

- *Type:* *string

---

##### `InjectedApplicationCredentialSourceIds`<sup>Required</sup> <a name="InjectedApplicationCredentialSourceIds" id="@cdktf/provider-boundary.target.Target.property.injectedApplicationCredentialSourceIds"></a>

```go
func InjectedApplicationCredentialSourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.target.Target.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.target.Target.property.scopeId"></a>

```go
func ScopeId() *string
```

- *Type:* *string

---

##### `SessionConnectionLimit`<sup>Required</sup> <a name="SessionConnectionLimit" id="@cdktf/provider-boundary.target.Target.property.sessionConnectionLimit"></a>

```go
func SessionConnectionLimit() *f64
```

- *Type:* *f64

---

##### `SessionMaxSeconds`<sup>Required</sup> <a name="SessionMaxSeconds" id="@cdktf/provider-boundary.target.Target.property.sessionMaxSeconds"></a>

```go
func SessionMaxSeconds() *f64
```

- *Type:* *f64

---

##### `StorageBucketId`<sup>Required</sup> <a name="StorageBucketId" id="@cdktf/provider-boundary.target.Target.property.storageBucketId"></a>

```go
func StorageBucketId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.target.Target.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WorkerFilter`<sup>Required</sup> <a name="WorkerFilter" id="@cdktf/provider-boundary.target.Target.property.workerFilter"></a>

```go
func WorkerFilter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.Target.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.target.Target.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TargetConfig <a name="TargetConfig" id="@cdktf/provider-boundary.target.TargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.target.TargetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/target"

&target.TargetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ScopeId: *string,
	Type: *string,
	Address: *string,
	BrokeredCredentialSourceIds: *[]*string,
	DefaultClientPort: *f64,
	DefaultPort: *f64,
	Description: *string,
	EgressWorkerFilter: *string,
	EnableSessionRecording: interface{},
	HostSourceIds: *[]*string,
	IngressWorkerFilter: *string,
	InjectedApplicationCredentialSourceIds: *[]*string,
	Name: *string,
	SessionConnectionLimit: *f64,
	SessionMaxSeconds: *f64,
	StorageBucketId: *string,
	WorkerFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.scopeId">ScopeId</a></code> | <code>*string</code> | The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.type">Type</a></code> | <code>*string</code> | The target resource type. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.address">Address</a></code> | <code>*string</code> | Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.brokeredCredentialSourceIds">BrokeredCredentialSourceIds</a></code> | <code>*[]*string</code> | A list of brokered credential source ID's. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.defaultClientPort">DefaultClientPort</a></code> | <code>*f64</code> | The default client port for this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.defaultPort">DefaultPort</a></code> | <code>*f64</code> | The default port for this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.description">Description</a></code> | <code>*string</code> | The target description. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.egressWorkerFilter">EgressWorkerFilter</a></code> | <code>*string</code> | Boolean expression to filter the workers used to access this target. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.enableSessionRecording">EnableSessionRecording</a></code> | <code>interface{}</code> | HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.hostSourceIds">HostSourceIds</a></code> | <code>*[]*string</code> | A list of host source ID's. Cannot be used alongside address. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.ingressWorkerFilter">IngressWorkerFilter</a></code> | <code>*string</code> | HCP Only. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.injectedApplicationCredentialSourceIds">InjectedApplicationCredentialSourceIds</a></code> | <code>*[]*string</code> | A list of injected application credential source ID's. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.name">Name</a></code> | <code>*string</code> | The target name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.sessionConnectionLimit">SessionConnectionLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#session_connection_limit Target#session_connection_limit}. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.sessionMaxSeconds">SessionMaxSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#session_max_seconds Target#session_max_seconds}. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.storageBucketId">StorageBucketId</a></code> | <code>*string</code> | HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets. |
| <code><a href="#@cdktf/provider-boundary.target.TargetConfig.property.workerFilter">WorkerFilter</a></code> | <code>*string</code> | Boolean expression to filter the workers for this target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.target.TargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.target.TargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.target.TargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.target.TargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.target.TargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.target.TargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.target.TargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.target.TargetConfig.property.scopeId"></a>

```go
ScopeId *string
```

- *Type:* *string

The scope ID in which the resource is created. Defaults to the provider's `default_scope` if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#scope_id Target#scope_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.target.TargetConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The target resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#type Target#type}

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-boundary.target.TargetConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

Optionally, a valid network address to connect to for this target. Cannot be used alongside host_source_ids.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#address Target#address}

---

##### `BrokeredCredentialSourceIds`<sup>Optional</sup> <a name="BrokeredCredentialSourceIds" id="@cdktf/provider-boundary.target.TargetConfig.property.brokeredCredentialSourceIds"></a>

```go
BrokeredCredentialSourceIds *[]*string
```

- *Type:* *[]*string

A list of brokered credential source ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#brokered_credential_source_ids Target#brokered_credential_source_ids}

---

##### `DefaultClientPort`<sup>Optional</sup> <a name="DefaultClientPort" id="@cdktf/provider-boundary.target.TargetConfig.property.defaultClientPort"></a>

```go
DefaultClientPort *f64
```

- *Type:* *f64

The default client port for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#default_client_port Target#default_client_port}

---

##### `DefaultPort`<sup>Optional</sup> <a name="DefaultPort" id="@cdktf/provider-boundary.target.TargetConfig.property.defaultPort"></a>

```go
DefaultPort *f64
```

- *Type:* *f64

The default port for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#default_port Target#default_port}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.target.TargetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The target description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#description Target#description}

---

##### `EgressWorkerFilter`<sup>Optional</sup> <a name="EgressWorkerFilter" id="@cdktf/provider-boundary.target.TargetConfig.property.egressWorkerFilter"></a>

```go
EgressWorkerFilter *string
```

- *Type:* *string

Boolean expression to filter the workers used to access this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#egress_worker_filter Target#egress_worker_filter}

---

##### `EnableSessionRecording`<sup>Optional</sup> <a name="EnableSessionRecording" id="@cdktf/provider-boundary.target.TargetConfig.property.enableSessionRecording"></a>

```go
EnableSessionRecording interface{}
```

- *Type:* interface{}

HCP/Ent Only. Enable sessions recording for this target. Only applicable for SSH targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#enable_session_recording Target#enable_session_recording}

---

##### `HostSourceIds`<sup>Optional</sup> <a name="HostSourceIds" id="@cdktf/provider-boundary.target.TargetConfig.property.hostSourceIds"></a>

```go
HostSourceIds *[]*string
```

- *Type:* *[]*string

A list of host source ID's. Cannot be used alongside address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#host_source_ids Target#host_source_ids}

---

##### `IngressWorkerFilter`<sup>Optional</sup> <a name="IngressWorkerFilter" id="@cdktf/provider-boundary.target.TargetConfig.property.ingressWorkerFilter"></a>

```go
IngressWorkerFilter *string
```

- *Type:* *string

HCP Only.

Boolean expression to filter the workers a user will connect to when initiating a session against this target

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#ingress_worker_filter Target#ingress_worker_filter}

---

##### `InjectedApplicationCredentialSourceIds`<sup>Optional</sup> <a name="InjectedApplicationCredentialSourceIds" id="@cdktf/provider-boundary.target.TargetConfig.property.injectedApplicationCredentialSourceIds"></a>

```go
InjectedApplicationCredentialSourceIds *[]*string
```

- *Type:* *[]*string

A list of injected application credential source ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#injected_application_credential_source_ids Target#injected_application_credential_source_ids}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.target.TargetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The target name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#name Target#name}

---

##### `SessionConnectionLimit`<sup>Optional</sup> <a name="SessionConnectionLimit" id="@cdktf/provider-boundary.target.TargetConfig.property.sessionConnectionLimit"></a>

```go
SessionConnectionLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#session_connection_limit Target#session_connection_limit}.

---

##### `SessionMaxSeconds`<sup>Optional</sup> <a name="SessionMaxSeconds" id="@cdktf/provider-boundary.target.TargetConfig.property.sessionMaxSeconds"></a>

```go
SessionMaxSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#session_max_seconds Target#session_max_seconds}.

---

##### `StorageBucketId`<sup>Optional</sup> <a name="StorageBucketId" id="@cdktf/provider-boundary.target.TargetConfig.property.storageBucketId"></a>

```go
StorageBucketId *string
```

- *Type:* *string

HCP/Ent Only. Storage bucket for this target. Only applicable for SSH targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#storage_bucket_id Target#storage_bucket_id}

---

##### `WorkerFilter`<sup>Optional</sup> <a name="WorkerFilter" id="@cdktf/provider-boundary.target.TargetConfig.property.workerFilter"></a>

```go
WorkerFilter *string
```

- *Type:* *string

Boolean expression to filter the workers for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.15/docs/resources/target#worker_filter Target#worker_filter}

---



