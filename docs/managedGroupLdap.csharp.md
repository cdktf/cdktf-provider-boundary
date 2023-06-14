# `boundary_managed_group_ldap`

Refer to the Terraform Registory for docs: [`boundary_managed_group_ldap`](https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/managed_group_ldap).

# `managedGroupLdap` Submodule <a name="`managedGroupLdap` Submodule" id="@cdktf/provider-boundary.managedGroupLdap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedGroupLdap <a name="ManagedGroupLdap" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/managed_group_ldap boundary_managed_group_ldap}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new ManagedGroupLdap(Construct Scope, string Id, ManagedGroupLdapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig">ManagedGroupLdapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig">ManagedGroupLdapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

ManagedGroupLdap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

ManagedGroupLdap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

ManagedGroupLdap.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.authMethodIdInput">AuthMethodIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.groupNamesInput">GroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.authMethodId">AuthMethodId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.groupNames">GroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AuthMethodIdInput`<sup>Optional</sup> <a name="AuthMethodIdInput" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.authMethodIdInput"></a>

```csharp
public string AuthMethodIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GroupNamesInput`<sup>Optional</sup> <a name="GroupNamesInput" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.groupNamesInput"></a>

```csharp
public string[] GroupNamesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AuthMethodId`<sup>Required</sup> <a name="AuthMethodId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.authMethodId"></a>

```csharp
public string AuthMethodId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GroupNames`<sup>Required</sup> <a name="GroupNames" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.groupNames"></a>

```csharp
public string[] GroupNames { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedGroupLdapConfig <a name="ManagedGroupLdapConfig" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Boundary;

new ManagedGroupLdapConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthMethodId,
    string[] GroupNames,
    string Description = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.authMethodId">AuthMethodId</a></code> | <code>string</code> | The resource ID for the auth method. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.groupNames">GroupNames</a></code> | <code>string[]</code> | The list of groups that make up the managed group. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.description">Description</a></code> | <code>string</code> | The managed group description. |
| <code><a href="#@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.name">Name</a></code> | <code>string</code> | The managed group name. Defaults to the resource name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthMethodId`<sup>Required</sup> <a name="AuthMethodId" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.authMethodId"></a>

```csharp
public string AuthMethodId { get; set; }
```

- *Type:* string

The resource ID for the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/managed_group_ldap#auth_method_id ManagedGroupLdap#auth_method_id}

---

##### `GroupNames`<sup>Required</sup> <a name="GroupNames" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.groupNames"></a>

```csharp
public string[] GroupNames { get; set; }
```

- *Type:* string[]

The list of groups that make up the managed group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/managed_group_ldap#group_names ManagedGroupLdap#group_names}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The managed group description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/managed_group_ldap#description ManagedGroupLdap#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-boundary.managedGroupLdap.ManagedGroupLdapConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The managed group name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.8/docs/resources/managed_group_ldap#name ManagedGroupLdap#name}

---



