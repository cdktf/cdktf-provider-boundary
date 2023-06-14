# `boundary_account_oidc`

Refer to the Terraform Registory for docs: [`boundary_account_oidc`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_oidc).

# `accountOidc` Submodule <a name="`accountOidc` Submodule" id="@cdktf/provider-boundary.accountOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountOidc <a name="AccountOidc" id="@cdktf/provider-boundary.accountOidc.AccountOidc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_oidc boundary_account_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new AccountOidc(Construct Scope, string Id, AccountOidcConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig">AccountOidcConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.accountOidc.AccountOidc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig">AccountOidcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.accountOidc.AccountOidc.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.accountOidc.AccountOidc.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.accountOidc.AccountOidc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.accountOidc.AccountOidc.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.accountOidc.AccountOidc.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.accountOidc.AccountOidc.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.accountOidc.AccountOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.accountOidc.AccountOidc.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-boundary.accountOidc.AccountOidc.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.accountOidc.AccountOidc.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-boundary.accountOidc.AccountOidc.resetSubject"></a>

```csharp
private void ResetSubject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AccountOidc.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AccountOidc.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

AccountOidc.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.accountOidc.AccountOidc.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.authMethodIdInput">AuthMethodIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.authMethodId">AuthMethodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.subject">Subject</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AuthMethodIdInput`<sup>Optional</sup> <a name="AuthMethodIdInput" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.authMethodIdInput"></a>

```csharp
public string AuthMethodIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `AuthMethodId`<sup>Required</sup> <a name="AuthMethodId" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.authMethodId"></a>

```csharp
public string AuthMethodId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidc.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.accountOidc.AccountOidc.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountOidcConfig <a name="AccountOidcConfig" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new AccountOidcConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthMethodId,
    string Description = null,
    string Issuer = null,
    string Name = null,
    string Subject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.authMethodId">AuthMethodId</a></code> | <code>string</code> | The resource ID for the auth method. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.description">Description</a></code> | <code>string</code> | The account description. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.issuer">Issuer</a></code> | <code>string</code> | The OIDC issuer. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.name">Name</a></code> | <code>string</code> | The account name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.subject">Subject</a></code> | <code>string</code> | The OIDC subject. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthMethodId`<sup>Required</sup> <a name="AuthMethodId" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.authMethodId"></a>

```csharp
public string AuthMethodId { get; set; }
```

- *Type:* string

The resource ID for the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_oidc#auth_method_id AccountOidc#auth_method_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The account description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_oidc#description AccountOidc#description}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

The OIDC issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_oidc#issuer AccountOidc#issuer}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The account name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_oidc#name AccountOidc#name}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-boundary.accountOidc.AccountOidcConfig.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

The OIDC subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/account_oidc#subject AccountOidc#subject}

---



