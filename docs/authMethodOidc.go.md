# `boundary_auth_method_oidc`

Refer to the Terraform Registory for docs: [`boundary_auth_method_oidc`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc).

# `authMethodOidc` Submodule <a name="`authMethodOidc` Submodule" id="@cdktf/provider-boundary.authMethodOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethodOidc <a name="AuthMethodOidc" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc boundary_auth_method_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/authmethodoidc"

authmethodoidc.NewAuthMethodOidc(scope Construct, id *string, config AuthMethodOidcConfig) AuthMethodOidc
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig">AuthMethodOidcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig">AuthMethodOidcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAccountClaimMaps">ResetAccountClaimMaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAllowedAudiences">ResetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetApiUrlPrefix">ResetApiUrlPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetCallbackUrl">ResetCallbackUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClaimsScopes">ResetClaimsScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecretHmac">ResetClientSecretHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDisableDiscoveredConfigValidation">ResetDisableDiscoveredConfigValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIdpCaCerts">ResetIdpCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIsPrimaryForScope">ResetIsPrimaryForScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetSigningAlgorithms">ResetSigningAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountClaimMaps` <a name="ResetAccountClaimMaps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAccountClaimMaps"></a>

```go
func ResetAccountClaimMaps()
```

##### `ResetAllowedAudiences` <a name="ResetAllowedAudiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetAllowedAudiences"></a>

```go
func ResetAllowedAudiences()
```

##### `ResetApiUrlPrefix` <a name="ResetApiUrlPrefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetApiUrlPrefix"></a>

```go
func ResetApiUrlPrefix()
```

##### `ResetCallbackUrl` <a name="ResetCallbackUrl" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetCallbackUrl"></a>

```go
func ResetCallbackUrl()
```

##### `ResetClaimsScopes` <a name="ResetClaimsScopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClaimsScopes"></a>

```go
func ResetClaimsScopes()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetClientSecretHmac` <a name="ResetClientSecretHmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetClientSecretHmac"></a>

```go
func ResetClientSecretHmac()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableDiscoveredConfigValidation` <a name="ResetDisableDiscoveredConfigValidation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetDisableDiscoveredConfigValidation"></a>

```go
func ResetDisableDiscoveredConfigValidation()
```

##### `ResetIdpCaCerts` <a name="ResetIdpCaCerts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIdpCaCerts"></a>

```go
func ResetIdpCaCerts()
```

##### `ResetIsPrimaryForScope` <a name="ResetIsPrimaryForScope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIsPrimaryForScope"></a>

```go
func ResetIsPrimaryForScope()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetMaxAge"></a>

```go
func ResetMaxAge()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetName"></a>

```go
func ResetName()
```

##### `ResetSigningAlgorithms` <a name="ResetSigningAlgorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetSigningAlgorithms"></a>

```go
func ResetSigningAlgorithms()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetState"></a>

```go
func ResetState()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/authmethodoidc"

authmethodoidc.AuthMethodOidc_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/authmethodoidc"

authmethodoidc.AuthMethodOidc_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/authmethodoidc"

authmethodoidc.AuthMethodOidc_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMapsInput">AccountClaimMapsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiencesInput">AllowedAudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefixInput">ApiUrlPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrlInput">CallbackUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopesInput">ClaimsScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmacInput">ClientSecretHmacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidationInput">DisableDiscoveredConfigValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCertsInput">IdpCaCertsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScopeInput">IsPrimaryForScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAgeInput">MaxAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeIdInput">ScopeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithmsInput">SigningAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMaps">AccountClaimMaps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefix">ApiUrlPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrl">CallbackUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopes">ClaimsScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmac">ClientSecretHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidation">DisableDiscoveredConfigValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCerts">IdpCaCerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScope">IsPrimaryForScope</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeId">ScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithms">SigningAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccountClaimMapsInput`<sup>Optional</sup> <a name="AccountClaimMapsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMapsInput"></a>

```go
func AccountClaimMapsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAudiencesInput`<sup>Optional</sup> <a name="AllowedAudiencesInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiencesInput"></a>

```go
func AllowedAudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiUrlPrefixInput`<sup>Optional</sup> <a name="ApiUrlPrefixInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefixInput"></a>

```go
func ApiUrlPrefixInput() *string
```

- *Type:* *string

---

##### `CallbackUrlInput`<sup>Optional</sup> <a name="CallbackUrlInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrlInput"></a>

```go
func CallbackUrlInput() *string
```

- *Type:* *string

---

##### `ClaimsScopesInput`<sup>Optional</sup> <a name="ClaimsScopesInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopesInput"></a>

```go
func ClaimsScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretHmacInput`<sup>Optional</sup> <a name="ClientSecretHmacInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmacInput"></a>

```go
func ClientSecretHmacInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableDiscoveredConfigValidationInput`<sup>Optional</sup> <a name="DisableDiscoveredConfigValidationInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidationInput"></a>

```go
func DisableDiscoveredConfigValidationInput() interface{}
```

- *Type:* interface{}

---

##### `IdpCaCertsInput`<sup>Optional</sup> <a name="IdpCaCertsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCertsInput"></a>

```go
func IdpCaCertsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsPrimaryForScopeInput`<sup>Optional</sup> <a name="IsPrimaryForScopeInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScopeInput"></a>

```go
func IsPrimaryForScopeInput() interface{}
```

- *Type:* interface{}

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAgeInput"></a>

```go
func MaxAgeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeIdInput"></a>

```go
func ScopeIdInput() *string
```

- *Type:* *string

---

##### `SigningAlgorithmsInput`<sup>Optional</sup> <a name="SigningAlgorithmsInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithmsInput"></a>

```go
func SigningAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccountClaimMaps`<sup>Required</sup> <a name="AccountClaimMaps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.accountClaimMaps"></a>

```go
func AccountClaimMaps() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.allowedAudiences"></a>

```go
func AllowedAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `ApiUrlPrefix`<sup>Required</sup> <a name="ApiUrlPrefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.apiUrlPrefix"></a>

```go
func ApiUrlPrefix() *string
```

- *Type:* *string

---

##### `CallbackUrl`<sup>Required</sup> <a name="CallbackUrl" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.callbackUrl"></a>

```go
func CallbackUrl() *string
```

- *Type:* *string

---

##### `ClaimsScopes`<sup>Required</sup> <a name="ClaimsScopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.claimsScopes"></a>

```go
func ClaimsScopes() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretHmac`<sup>Required</sup> <a name="ClientSecretHmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.clientSecretHmac"></a>

```go
func ClientSecretHmac() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableDiscoveredConfigValidation`<sup>Required</sup> <a name="DisableDiscoveredConfigValidation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.disableDiscoveredConfigValidation"></a>

```go
func DisableDiscoveredConfigValidation() interface{}
```

- *Type:* interface{}

---

##### `IdpCaCerts`<sup>Required</sup> <a name="IdpCaCerts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.idpCaCerts"></a>

```go
func IdpCaCerts() *[]*string
```

- *Type:* *[]*string

---

##### `IsPrimaryForScope`<sup>Required</sup> <a name="IsPrimaryForScope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.isPrimaryForScope"></a>

```go
func IsPrimaryForScope() interface{}
```

- *Type:* interface{}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.scopeId"></a>

```go
func ScopeId() *string
```

- *Type:* *string

---

##### `SigningAlgorithms`<sup>Required</sup> <a name="SigningAlgorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.signingAlgorithms"></a>

```go
func SigningAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidc.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodOidcConfig <a name="AuthMethodOidcConfig" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-boundary-go/boundary/v4/authmethodoidc"

&authmethodoidc.AuthMethodOidcConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ScopeId: *string,
	AccountClaimMaps: *[]*string,
	AllowedAudiences: *[]*string,
	ApiUrlPrefix: *string,
	CallbackUrl: *string,
	ClaimsScopes: *[]*string,
	ClientId: *string,
	ClientSecret: *string,
	ClientSecretHmac: *string,
	Description: *string,
	DisableDiscoveredConfigValidation: interface{},
	IdpCaCerts: *[]*string,
	IsPrimaryForScope: interface{},
	Issuer: *string,
	MaxAge: *f64,
	Name: *string,
	SigningAlgorithms: *[]*string,
	State: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.scopeId">ScopeId</a></code> | <code>*string</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.accountClaimMaps">AccountClaimMaps</a></code> | <code>*[]*string</code> | Account claim maps for the to_claim of sub. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | Audiences for which the provider responses will be allowed. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.apiUrlPrefix">ApiUrlPrefix</a></code> | <code>*string</code> | The API prefix to use when generating callback URLs for the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.callbackUrl">CallbackUrl</a></code> | <code>*string</code> | The URL that should be provided to the IdP for callbacks. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.claimsScopes">ClaimsScopes</a></code> | <code>*[]*string</code> | Claims scopes. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The secret key assigned to this auth method from the provider. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecretHmac">ClientSecretHmac</a></code> | <code>*string</code> | The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.description">Description</a></code> | <code>*string</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.disableDiscoveredConfigValidation">DisableDiscoveredConfigValidation</a></code> | <code>interface{}</code> | Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.idpCaCerts">IdpCaCerts</a></code> | <code>*[]*string</code> | A list of CA certificates to trust when validating the IdP's token signatures. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.isPrimaryForScope">IsPrimaryForScope</a></code> | <code>interface{}</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.issuer">Issuer</a></code> | <code>*string</code> | The issuer corresponding to the provider, which must match the issuer field in generated tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.maxAge">MaxAge</a></code> | <code>*f64</code> | The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.name">Name</a></code> | <code>*string</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.signingAlgorithms">SigningAlgorithms</a></code> | <code>*[]*string</code> | Allowed signing algorithms for the provider's issued tokens. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.state">State</a></code> | <code>*string</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.type">Type</a></code> | <code>*string</code> | The type of auth method; hardcoded. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.scopeId"></a>

```go
ScopeId *string
```

- *Type:* *string

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#scope_id AuthMethodOidc#scope_id}

---

##### `AccountClaimMaps`<sup>Optional</sup> <a name="AccountClaimMaps" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.accountClaimMaps"></a>

```go
AccountClaimMaps *[]*string
```

- *Type:* *[]*string

Account claim maps for the to_claim of sub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#account_claim_maps AuthMethodOidc#account_claim_maps}

---

##### `AllowedAudiences`<sup>Optional</sup> <a name="AllowedAudiences" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.allowedAudiences"></a>

```go
AllowedAudiences *[]*string
```

- *Type:* *[]*string

Audiences for which the provider responses will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#allowed_audiences AuthMethodOidc#allowed_audiences}

---

##### `ApiUrlPrefix`<sup>Optional</sup> <a name="ApiUrlPrefix" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.apiUrlPrefix"></a>

```go
ApiUrlPrefix *string
```

- *Type:* *string

The API prefix to use when generating callback URLs for the provider.

Should be set to an address at which the provider can reach back to the controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#api_url_prefix AuthMethodOidc#api_url_prefix}

---

##### `CallbackUrl`<sup>Optional</sup> <a name="CallbackUrl" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.callbackUrl"></a>

```go
CallbackUrl *string
```

- *Type:* *string

The URL that should be provided to the IdP for callbacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#callback_url AuthMethodOidc#callback_url}

---

##### `ClaimsScopes`<sup>Optional</sup> <a name="ClaimsScopes" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.claimsScopes"></a>

```go
ClaimsScopes *[]*string
```

- *Type:* *[]*string

Claims scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#claims_scopes AuthMethodOidc#claims_scopes}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID assigned to this auth method from the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#client_id AuthMethodOidc#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The secret key assigned to this auth method from the provider.

Once set, only the hash will be kept and the original value can be removed from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#client_secret AuthMethodOidc#client_secret}

---

##### `ClientSecretHmac`<sup>Optional</sup> <a name="ClientSecretHmac" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.clientSecretHmac"></a>

```go
ClientSecretHmac *string
```

- *Type:* *string

The HMAC of the client secret returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#client_secret_hmac AuthMethodOidc#client_secret_hmac}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#description AuthMethodOidc#description}

---

##### `DisableDiscoveredConfigValidation`<sup>Optional</sup> <a name="DisableDiscoveredConfigValidation" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.disableDiscoveredConfigValidation"></a>

```go
DisableDiscoveredConfigValidation interface{}
```

- *Type:* interface{}

Disables validation logic ensuring that the OIDC provider's information from its discovery endpoint matches the information here.

The validation is only performed at create or update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#disable_discovered_config_validation AuthMethodOidc#disable_discovered_config_validation}

---

##### `IdpCaCerts`<sup>Optional</sup> <a name="IdpCaCerts" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.idpCaCerts"></a>

```go
IdpCaCerts *[]*string
```

- *Type:* *[]*string

A list of CA certificates to trust when validating the IdP's token signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#idp_ca_certs AuthMethodOidc#idp_ca_certs}

---

##### `IsPrimaryForScope`<sup>Optional</sup> <a name="IsPrimaryForScope" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.isPrimaryForScope"></a>

```go
IsPrimaryForScope interface{}
```

- *Type:* interface{}

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the user will be automatically created when they login using an OIDC account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#is_primary_for_scope AuthMethodOidc#is_primary_for_scope}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

The issuer corresponding to the provider, which must match the issuer field in generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#issuer AuthMethodOidc#issuer}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.maxAge"></a>

```go
MaxAge *f64
```

- *Type:* *f64

The max age to provide to the provider, indicating how much time is allowed to have passed since the last authentication before the user is challenged again.

A value of 0 sets an immediate requirement for all users to reauthenticate, and an unset maxAge results in a Terraform value of -1 and the default TTL of the chosen OIDC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#max_age AuthMethodOidc#max_age}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#name AuthMethodOidc#name}

---

##### `SigningAlgorithms`<sup>Optional</sup> <a name="SigningAlgorithms" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.signingAlgorithms"></a>

```go
SigningAlgorithms *[]*string
```

- *Type:* *[]*string

Allowed signing algorithms for the provider's issued tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#signing_algorithms AuthMethodOidc#signing_algorithms}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Can be one of 'inactive', 'active-private', or 'active-public'. Currently automatically set to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#state AuthMethodOidc#state}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-boundary.authMethodOidc.AuthMethodOidcConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/auth_method_oidc#type AuthMethodOidc#type}

---



