# `boundary_host_set_plugin`

Refer to the Terraform Registory for docs: [`boundary_host_set_plugin`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/host_set_plugin).

# `hostSetPlugin` Submodule <a name="`hostSetPlugin` Submodule" id="@cdktf/provider-boundary.hostSetPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostSetPlugin <a name="HostSetPlugin" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/host_set_plugin boundary_host_set_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/hostsetplugin"

hostsetplugin.NewHostSetPlugin(scope Construct, id *string, config HostSetPluginConfig) HostSetPlugin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig">HostSetPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig">HostSetPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetAttributesJson">ResetAttributesJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetPreferredEndpoints">ResetPreferredEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetSyncIntervalSeconds">ResetSyncIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributesJson` <a name="ResetAttributesJson" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetAttributesJson"></a>

```go
func ResetAttributesJson()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetName"></a>

```go
func ResetName()
```

##### `ResetPreferredEndpoints` <a name="ResetPreferredEndpoints" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetPreferredEndpoints"></a>

```go
func ResetPreferredEndpoints()
```

##### `ResetSyncIntervalSeconds` <a name="ResetSyncIntervalSeconds" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetSyncIntervalSeconds"></a>

```go
func ResetSyncIntervalSeconds()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/hostsetplugin"

hostsetplugin.HostSetPlugin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/hostsetplugin"

hostsetplugin.HostSetPlugin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/hostsetplugin"

hostsetplugin.HostSetPlugin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJsonInput">AttributesJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogIdInput">HostCatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpointsInput">PreferredEndpointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSecondsInput">SyncIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJson">AttributesJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogId">HostCatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpoints">PreferredEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSeconds">SyncIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AttributesJsonInput`<sup>Optional</sup> <a name="AttributesJsonInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJsonInput"></a>

```go
func AttributesJsonInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HostCatalogIdInput`<sup>Optional</sup> <a name="HostCatalogIdInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogIdInput"></a>

```go
func HostCatalogIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PreferredEndpointsInput`<sup>Optional</sup> <a name="PreferredEndpointsInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpointsInput"></a>

```go
func PreferredEndpointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SyncIntervalSecondsInput`<sup>Optional</sup> <a name="SyncIntervalSecondsInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSecondsInput"></a>

```go
func SyncIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AttributesJson`<sup>Required</sup> <a name="AttributesJson" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.attributesJson"></a>

```go
func AttributesJson() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HostCatalogId`<sup>Required</sup> <a name="HostCatalogId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.hostCatalogId"></a>

```go
func HostCatalogId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PreferredEndpoints`<sup>Required</sup> <a name="PreferredEndpoints" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.preferredEndpoints"></a>

```go
func PreferredEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `SyncIntervalSeconds`<sup>Required</sup> <a name="SyncIntervalSeconds" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.syncIntervalSeconds"></a>

```go
func SyncIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPlugin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HostSetPluginConfig <a name="HostSetPluginConfig" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/hostsetplugin"

&hostsetplugin.HostSetPluginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HostCatalogId: *string,
	AttributesJson: *string,
	Description: *string,
	Name: *string,
	PreferredEndpoints: *[]*string,
	SyncIntervalSeconds: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.hostCatalogId">HostCatalogId</a></code> | <code>*string</code> | The catalog for the host set. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.attributesJson">AttributesJson</a></code> | <code>*string</code> | The attributes for the host set. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.description">Description</a></code> | <code>*string</code> | The host set description. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.name">Name</a></code> | <code>*string</code> | The host set name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.preferredEndpoints">PreferredEndpoints</a></code> | <code>*[]*string</code> | The ordered list of preferred endpoints. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.syncIntervalSeconds">SyncIntervalSeconds</a></code> | <code>*f64</code> | The value to set for the sync interval seconds. |
| <code><a href="#@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.type">Type</a></code> | <code>*string</code> | The type of host set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostCatalogId`<sup>Required</sup> <a name="HostCatalogId" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.hostCatalogId"></a>

```go
HostCatalogId *string
```

- *Type:* *string

The catalog for the host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/host_set_plugin#host_catalog_id HostSetPlugin#host_catalog_id}

---

##### `AttributesJson`<sup>Optional</sup> <a name="AttributesJson" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.attributesJson"></a>

```go
AttributesJson *string
```

- *Type:* *string

The attributes for the host set.

Either values encoded with the "jsonencode" function, pre-escaped JSON string, or a file:// or env:// path. Set to a string "null" or remove the block to clear all attributes in the host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/host_set_plugin#attributes_json HostSetPlugin#attributes_json}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The host set description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/host_set_plugin#description HostSetPlugin#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The host set name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/host_set_plugin#name HostSetPlugin#name}

---

##### `PreferredEndpoints`<sup>Optional</sup> <a name="PreferredEndpoints" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.preferredEndpoints"></a>

```go
PreferredEndpoints *[]*string
```

- *Type:* *[]*string

The ordered list of preferred endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/host_set_plugin#preferred_endpoints HostSetPlugin#preferred_endpoints}

---

##### `SyncIntervalSeconds`<sup>Optional</sup> <a name="SyncIntervalSeconds" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.syncIntervalSeconds"></a>

```go
SyncIntervalSeconds *f64
```

- *Type:* *f64

The value to set for the sync interval seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/host_set_plugin#sync_interval_seconds HostSetPlugin#sync_interval_seconds}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-boundary.hostSetPlugin.HostSetPluginConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of host set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.6/docs/resources/host_set_plugin#type HostSetPlugin#type}

---



